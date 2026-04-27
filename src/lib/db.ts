import Database from 'better-sqlite3';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'aimemory.db');

// Ensure data directory exists
import fs from 'fs';
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(DB_PATH);

// Enable WAL mode for better performance
db.pragma('journal_mode = WAL');

// Create tables with session_id for user isolation
db.exec(`
  CREATE TABLE IF NOT EXISTS conversations (
    id TEXT PRIMARY KEY,
    session_id TEXT NOT NULL DEFAULT 'public',
    title TEXT NOT NULL,
    platform TEXT NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    tags TEXT DEFAULT '[]',
    summary TEXT,
    message_count INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    conversation_id TEXT NOT NULL,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    timestamp TEXT,
    FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE
  );

  CREATE VIRTUAL TABLE IF NOT EXISTS messages_fts USING fts5(
    content,
    content='messages',
    content_rowid='rowid'
  );

  CREATE TRIGGER IF NOT EXISTS messages_ai AFTER INSERT ON messages BEGIN
    INSERT INTO messages_fts(rowid, content) VALUES (new.rowid, new.content);
  END;

  CREATE TRIGGER IF NOT EXISTS messages_ad AFTER DELETE ON messages BEGIN
    INSERT INTO messages_fts(messages_fts, rowid, content) VALUES('delete', old.rowid, old.content);
  END;

  CREATE TRIGGER IF NOT EXISTS messages_au AFTER UPDATE ON messages BEGIN
    INSERT INTO messages_fts(messages_fts, rowid, content) VALUES('delete', old.rowid, old.content);
    INSERT INTO messages_fts(rowid, content) VALUES (new.rowid, new.content);
  END;
`);

// Migration: add session_id column if missing
try {
  db.prepare("SELECT session_id FROM conversations LIMIT 1").get();
} catch {
  db.exec("ALTER TABLE conversations ADD COLUMN session_id TEXT NOT NULL DEFAULT 'public'");
}

// Create index for session filtering
db.exec(`CREATE INDEX IF NOT EXISTS idx_conversations_session ON conversations(session_id)`);

export default db;

// Helper functions — all scoped by session_id
export function insertConversation(conv: {
  id: string;
  sessionId: string;
  title: string;
  platform: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  summary?: string;
  messageCount: number;
}) {
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO conversations (id, session_id, title, platform, created_at, updated_at, tags, summary, message_count)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  stmt.run(
    conv.id,
    conv.sessionId,
    conv.title,
    conv.platform,
    conv.createdAt,
    conv.updatedAt,
    JSON.stringify(conv.tags || []),
    conv.summary || null,
    conv.messageCount
  );
}

export function insertMessage(msg: {
  id: string;
  conversationId: string;
  role: string;
  content: string;
  timestamp?: string;
}) {
  const stmt = db.prepare(`
    INSERT INTO messages (id, conversation_id, role, content, timestamp)
    VALUES (?, ?, ?, ?, ?)
  `);
  stmt.run(msg.id, msg.conversationId, msg.role, msg.content, msg.timestamp || null);
}

export function searchConversations(query: string, sessionId: string, limit = 20) {
  const stmt = db.prepare(`
    SELECT DISTINCT c.*, 
           snippet(messages_fts, 0, '<mark>', '</mark>', '...', 32) as snippet
    FROM messages_fts
    JOIN messages ON messages.rowid = messages_fts.rowid
    JOIN conversations c ON c.id = messages.conversation_id
    WHERE messages_fts MATCH ? AND c.session_id = ?
    ORDER BY rank
    LIMIT ?
  `);
  return stmt.all(query, sessionId, limit) as any[];
}

export function getConversation(id: string, sessionId: string) {
  const conv = db.prepare('SELECT * FROM conversations WHERE id = ? AND session_id = ?').get(id, sessionId) as any;
  if (!conv) return null;
  const messages = db.prepare('SELECT * FROM messages WHERE conversation_id = ? ORDER BY rowid').all(id) as any[];
  return { ...conv, messages };
}

export function getAllConversations(sessionId: string, limit = 50, offset = 0) {
  return db.prepare('SELECT * FROM conversations WHERE session_id = ? ORDER BY updated_at DESC LIMIT ? OFFSET ?').all(sessionId, limit, offset) as any[];
}

export function getConversationCount(sessionId: string) {
  const result = db.prepare('SELECT COUNT(*) as count FROM conversations WHERE session_id = ?').get(sessionId) as { count: number };
  return result.count;
}

// Delete all data for a session
export function deleteSession(sessionId: string) {
  const convIds = db.prepare('SELECT id FROM conversations WHERE session_id = ?').all(sessionId) as {id: string}[];
  for (const conv of convIds) {
    db.prepare('DELETE FROM messages WHERE conversation_id = ?').run(conv.id);
  }
  db.prepare('DELETE FROM conversations WHERE session_id = ?').run(sessionId);
}
