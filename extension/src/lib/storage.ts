import { Conversation, Message, SearchResult, StorageStats, Platform, ChatGPTMemory } from './types';

const DB_NAME = 'ai-memory';
const DB_VERSION = 2;
const CONVERSATIONS_STORE = 'conversations';
const MEMORIES_STORE = 'memories';

let dbInstance: IDBDatabase | null = null;

export function openDB(): Promise<IDBDatabase> {
  if (dbInstance) return Promise.resolve(dbInstance);

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(CONVERSATIONS_STORE)) {
        const store = db.createObjectStore(CONVERSATIONS_STORE, { keyPath: 'id' });
        store.createIndex('platform', 'platform', { unique: false });
        store.createIndex('createdAt', 'createdAt', { unique: false });
        store.createIndex('updatedAt', 'updatedAt', { unique: false });
      }
      if (!db.objectStoreNames.contains(MEMORIES_STORE)) {
        const memStore = db.createObjectStore(MEMORIES_STORE, { keyPath: 'id' });
        memStore.createIndex('createdAt', 'createdAt', { unique: false });
        memStore.createIndex('updatedAt', 'updatedAt', { unique: false });
        memStore.createIndex('source', 'source', { unique: false });
      }
    };

    request.onsuccess = (event) => {
      dbInstance = (event.target as IDBOpenDBRequest).result;
      resolve(dbInstance);
    };
  });
}

export async function saveConversation(conv: Conversation): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(CONVERSATIONS_STORE, 'readwrite');
    const store = tx.objectStore(CONVERSATIONS_STORE);

    const existing = store.get(conv.id);
    existing.onsuccess = () => {
      const now = Date.now();
      const record: Conversation = {
        ...conv,
        createdAt: existing.result?.createdAt ?? conv.createdAt ?? now,
        updatedAt: now,
      };
      store.put(record);
    };

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getConversation(id: string): Promise<Conversation | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(CONVERSATIONS_STORE, 'readonly');
    const store = tx.objectStore(CONVERSATIONS_STORE);
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

export async function listConversations(
  platform?: Platform,
  limit: number = 50,
  offset: number = 0
): Promise<Conversation[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(CONVERSATIONS_STORE, 'readonly');
    const store = tx.objectStore(CONVERSATIONS_STORE);

    let request: IDBRequest;
    if (platform) {
      const index = store.index('platform');
      request = index.openCursor(IDBKeyRange.only(platform), 'prev');
    } else {
      const index = store.index('updatedAt');
      request = index.openCursor(null, 'prev');
    }

    const results: Conversation[] = [];
    let skipped = 0;

    request.onsuccess = (event) => {
      const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
      if (!cursor) {
        resolve(results);
        return;
      }

      if (skipped < offset) {
        skipped++;
        cursor.continue();
        return;
      }

      results.push(cursor.value);
      if (results.length >= limit) {
        resolve(results);
        return;
      }
      cursor.continue();
    };

    request.onerror = () => reject(request.error);
  });
}

export async function searchConversations(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const db = await openDB();
  const normalizedQuery = query.toLowerCase().trim();
  const queryTerms = normalizedQuery.split(/\s+/).filter(t => t.length > 0);

  return new Promise((resolve, reject) => {
    const tx = db.transaction(CONVERSATIONS_STORE, 'readonly');
    const store = tx.objectStore(CONVERSATIONS_STORE);
    const request = store.openCursor();

    const results: SearchResult[] = [];

    request.onsuccess = (event) => {
      const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
      if (!cursor) {
        results.sort((a, b) => b.score - a.score);
        resolve(results);
        return;
      }

      const conv: Conversation = cursor.value;
      const matchedMessages: Message[] = [];
      let totalScore = 0;

      // Search title
      const titleLower = (conv.title || '').toLowerCase();
      for (const term of queryTerms) {
        if (titleLower.includes(term)) {
          totalScore += 10; // Title matches are weighted higher
        }
      }

      // Search messages
      for (const msg of conv.messages) {
        const contentLower = (msg.content || '').toLowerCase();
        let msgScore = 0;
        for (const term of queryTerms) {
          if (contentLower.includes(term)) {
            msgScore += 1;
          }
        }
        if (msgScore > 0) {
          matchedMessages.push(msg);
          totalScore += msgScore;
        }
      }

      if (totalScore > 0) {
        results.push({
          conversation: conv,
          matchedMessages,
          score: totalScore,
        });
      }

      cursor.continue();
    };

    request.onerror = () => reject(request.error);
  });
}

export async function deleteConversation(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(CONVERSATIONS_STORE, 'readwrite');
    const store = tx.objectStore(CONVERSATIONS_STORE);
    store.delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getStats(): Promise<StorageStats> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(CONVERSATIONS_STORE, 'readonly');
    const store = tx.objectStore(CONVERSATIONS_STORE);
    const request = store.openCursor();

    let conversationCount = 0;
    let messageCount = 0;
    const platformCounts: Record<string, number> = {};

    request.onsuccess = (event) => {
      const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
      if (!cursor) {
        resolve({ conversationCount, messageCount, platformCounts });
        return;
      }

      const conv: Conversation = cursor.value;
      conversationCount++;
      messageCount += conv.messages.length;
      platformCounts[conv.platform] = (platformCounts[conv.platform] || 0) + 1;
      cursor.continue();
    };

    request.onerror = () => reject(request.error);
  });
}

// ─── Memory Store ───────────────────────────────────────────────────────────

export async function saveMemory(memory: ChatGPTMemory): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEMORIES_STORE, 'readwrite');
    const store = tx.objectStore(MEMORIES_STORE);
    const existing = store.get(memory.id);
    existing.onsuccess = () => {
      const now = Date.now();
      const record: ChatGPTMemory = {
        ...memory,
        createdAt: existing.result?.createdAt ?? memory.createdAt ?? now,
        updatedAt: now,
      };
      store.put(record);
    };
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function saveMemories(memories: ChatGPTMemory[]): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEMORIES_STORE, 'readwrite');
    const store = tx.objectStore(MEMORIES_STORE);
    const now = Date.now();
    for (const mem of memories) {
      const existing = store.get(mem.id);
      existing.onsuccess = () => {
        store.put({
          ...mem,
          createdAt: existing.result?.createdAt ?? mem.createdAt ?? now,
          updatedAt: now,
        });
      };
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function listMemories(limit: number = 100): Promise<ChatGPTMemory[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEMORIES_STORE, 'readonly');
    const store = tx.objectStore(MEMORIES_STORE);
    const index = store.index('updatedAt');
    const request = index.openCursor(null, 'prev');
    const results: ChatGPTMemory[] = [];
    request.onsuccess = (event) => {
      const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
      if (!cursor || results.length >= limit) { resolve(results); return; }
      results.push(cursor.value);
      cursor.continue();
    };
    request.onerror = () => reject(request.error);
  });
}

export async function deleteMemory(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEMORIES_STORE, 'readwrite');
    const store = tx.objectStore(MEMORIES_STORE);
    store.delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getMemoryStats(): Promise<{ count: number }> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MEMORIES_STORE, 'readonly');
    const store = tx.objectStore(MEMORIES_STORE);
    const countReq = store.count();
    countReq.onsuccess = () => resolve({ count: countReq.result });
    countReq.onerror = () => reject(countReq.error);
  });
}
