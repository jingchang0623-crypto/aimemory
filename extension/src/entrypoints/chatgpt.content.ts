import { browser } from 'wxt/browser';
import { defineContentScript } from 'wxt/utils/define-content-script';

/**
 * ChatGPT Content Script
 *
 * Injects a page-level script that intercepts fetch() calls to ChatGPT's
 * backend API. Captured conversation data is posted via window.postMessage
 * and forwarded to the background service worker.
 *
 * Intercepts:
 *  - POST /backend-api/conversation  (new message / response)
 *  - GET  /backend-api/conversations  (conversation list)
 *  - GET  /backend-api/conversation/[id] (single conversation)
 *  - GET  /backend-api/memories       (ChatGPT memory list)
 *  - POST/PUT/PATCH/DELETE /backend-api/memories (memory mutations)
 */

// Script that runs in the page's MAIN world to intercept fetch
const INJECTED_SCRIPT = `
(function() {
  if (window.__aiMemoryChatGPTIntercepted) return;
  window.__aiMemoryChatGPTIntercepted = true;

  const originalFetch = window.fetch;

  window.fetch = async function(...args) {
    const response = await originalFetch.apply(this, args);

    try {
      const url = typeof args[0] === 'string' ? args[0] : args[0]?.url || '';

      // Intercept conversation text mapping endpoint (contains full conversation)
      if (url.includes('/backend-api/conversation/') && url.includes('/text')) {
        const cloned = response.clone();
        cloned.json().then(data => {
          window.postMessage({
            type: 'AIMEMORY_CHATGPT_CONVERSATION',
            source: 'ai-memory-extension',
            data: {
              endpoint: 'conversation_text',
              url: url,
              payload: data,
              pageUrl: window.location.href,
            }
          }, '*');
        }).catch(() => {});
      }

      // Intercept the conversation feedback/update endpoint
      if (url.includes('/backend-api/conversation') && !url.includes('/conversations') && args[1]?.method === 'POST') {
        const cloned = response.clone();
        // For POST requests, capture the request body too
        let requestBody = null;
        try {
          if (args[1]?.body) {
            requestBody = typeof args[1].body === 'string' ? JSON.parse(args[1].body) : null;
          }
        } catch (e) {}

        cloned.text().then(text => {
          // Parse SSE stream response
          const messages = [];
          const lines = text.split('\\n');
          for (const line of lines) {
            if (line.startsWith('data: ') && line !== 'data: [DONE]') {
              try {
                const json = JSON.parse(line.slice(6));
                if (json.message) {
                  messages.push(json.message);
                }
              } catch (e) {}
            }
          }

          if (messages.length > 0) {
            window.postMessage({
              type: 'AIMEMORY_CHATGPT_CONVERSATION',
              source: 'ai-memory-extension',
              data: {
                endpoint: 'conversation_post',
                url: window.location.href,
                messages: messages,
                requestBody: requestBody,
              }
            }, '*');
          }
        }).catch(() => {});
      }

      // Intercept conversations list endpoint
      if (url.includes('/backend-api/conversations') && !url.includes('/conversation/')) {
        const cloned = response.clone();
        cloned.json().then(data => {
          window.postMessage({
            type: 'AIMEMORY_CHATGPT_CONVERSATIONS_LIST',
            source: 'ai-memory-extension',
            data: {
              endpoint: 'conversations_list',
              conversations: data?.items || [],
            }
          }, '*');
        }).catch(() => {});
      }

      // Intercept ChatGPT memories endpoint
      if (url.includes('/backend-api/memories') && !url.includes('/backend-api/memories/')) {
        const cloned = response.clone();
        cloned.json().then(data => {
          // ChatGPT memories API returns { items: [...] } or { memories: [...] }
          const items = data?.items || data?.memories || (Array.isArray(data) ? data : []);
          if (items.length > 0) {
            window.postMessage({
              type: 'AIMEMORY_CHATGPT_MEMORIES',
              source: 'ai-memory-extension',
              data: {
                endpoint: 'memories_list',
                memories: items.map(item => ({
                  id: item.id || item.uuid || ('mem-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8)),
                  content: item.content || item.text || item.body || '',
                  category: item.category || item.type || undefined,
                  created_at: item.created_at || item.createdAt || item.timestamp || undefined,
                  updated_at: item.updated_at || item.updatedAt || undefined,
                })),
              }
            }, '*');
          }
        }).catch(() => {});
      }

      // Also intercept POST/DELETE to /backend-api/memories (new/deleted memory)
      if (url.includes('/backend-api/memories') && args[1]?.method) {
        const method = args[1].method.toUpperCase();
        if (method === 'POST' || method === 'PUT' || method === 'PATCH' || method === 'DELETE') {
          const cloned = response.clone();
          cloned.json().then(data => {
            if (data && (data.content || data.text || data.id)) {
              window.postMessage({
                type: 'AIMEMORY_CHATGPT_MEMORIES',
                source: 'ai-memory-extension',
                data: {
                  endpoint: 'memory_mutation',
                  memory: {
                    id: data.id || data.uuid || ('mem-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8)),
                    content: data.content || data.text || data.body || '',
                    category: data.category || data.type || undefined,
                    created_at: data.created_at || data.createdAt || undefined,
                    updated_at: data.updated_at || data.updatedAt || undefined,
                  },
                  method: method,
                }
              }, '*');
            }
          }).catch(() => {});
        }
      }
    } catch (e) {
      // Silently ignore interception errors
    }

    return response;
  };

  // Also try to capture conversation from the page's __NEXT_DATA__ or React state
  function captureFromDOM() {
    try {
      // ChatGPT stores conversation data in script tags or React fiber
      const conversationId = window.location.pathname.match(/\\/c\\/([a-f0-9-]+)/)?.[1];
      if (!conversationId) return;

      // Try to find conversation title from the page
      const titleEl = document.querySelector('title');
      const title = titleEl?.textContent || 'Untitled Conversation';

      // Get all message elements
      const messageEls = document.querySelectorAll('[data-message-author-role]');
      const messages = [];

      for (const el of messageEls) {
        const role = el.getAttribute('data-message-author-role');
        const contentEl = el.querySelector('.markdown') || el.querySelector('.whitespace-pre-wrap') || el;
        const content = contentEl?.textContent?.trim() || '';
        if (content && role) {
          messages.push({ role, content });
        }
      }

      if (messages.length > 0) {
        window.postMessage({
          type: 'AIMEMORY_CHATGPT_DOM_CAPTURE',
          source: 'ai-memory-extension',
          data: {
            conversationId,
            title,
            messages,
            url: window.location.href,
          }
        }, '*');
      }
    } catch (e) {}
  }

  // Capture on page load and periodically
  setTimeout(captureFromDOM, 3000);
  setInterval(captureFromDOM, 30000);
})();
`;

export default defineContentScript({
  matches: ['https://chat.openai.com/*', 'https://chatgpt.com/*'],
  runAt: 'document_start',
  allFrames: false,

  main(ctx) {
    console.log('[AI Memory] ChatGPT content script loaded');

    // Inject the fetch interceptor script into the page's MAIN world
    const script = document.createElement('script');
    script.textContent = INJECTED_SCRIPT;
    script.dataset.aiMemory = 'chatgpt-interceptor';
    (document.head || document.documentElement).appendChild(script);
    script.remove();

    // Debounce: track recently seen conversation IDs to avoid duplicates
    const recentCaptures = new Map<string, number>();
    const DEDUP_WINDOW = 60000; // 1 minute

    function shouldCapture(conversationId: string): boolean {
      const lastSeen = recentCaptures.get(conversationId);
      if (lastSeen && Date.now() - lastSeen < DEDUP_WINDOW) {
        return false;
      }
      recentCaptures.set(conversationId, Date.now());
      // Clean up old entries
      if (recentCaptures.size > 100) {
        for (const [key, time] of recentCaptures) {
          if (Date.now() - time > DEDUP_WINDOW) recentCaptures.delete(key);
        }
      }
      return true;
    }

    // Listen for messages from the injected script
    window.addEventListener('message', (event) => {
      if (event.data?.source !== 'ai-memory-extension') return;

      try {
        if (event.data.type === 'AIMEMORY_CHATGPT_CONVERSATION') {
          const { data } = event.data;
          const conversationId = extractConversationId(data.url) || extractConversationId(data.pageUrl);

          if (!conversationId || !shouldCapture(conversationId)) return;

          let messages: Array<{ role: string; content: string }> = [];

          if (data.endpoint === 'conversation_text') {
            // Parse text mapping response
            messages = parseConversationText(data.payload);
          } else if (data.endpoint === 'conversation_post') {
            // Parse SSE messages
            messages = data.messages.map((m: any) => ({
              role: m.author?.role || 'assistant',
              content: m.content?.parts?.join('\n') || m.content?.text || '',
            }));
          }

          if (messages.length > 0) {
            const title = extractTitle() || `ChatGPT Conversation ${new Date().toLocaleString()}`;
            sendToBackground(conversationId, title, messages);
          }
        }

        if (event.data.type === 'AIMEMORY_CHATGPT_DOM_CAPTURE') {
          const { data } = event.data;
          if (data.conversationId && shouldCapture(data.conversationId)) {
            sendToBackground(data.conversationId, data.title, data.messages);
          }
        }

        // Handle intercepted ChatGPT memories
        if (event.data.type === 'AIMEMORY_CHATGPT_MEMORIES') {
          const { data } = event.data;
          console.log('[AI Memory] Captured ChatGPT memories:', data.endpoint);
          if (data.endpoint === 'memories_list') {
            sendMemoriesToBackground(data.memories);
          } else if (data.endpoint === 'memory_mutation' && data.method !== 'DELETE') {
            sendMemoriesToBackground([data.memory]);
          }
        }
      } catch (e) {
        console.error('[AI Memory] Error processing message:', e);
      }
    });
  },
});

function extractConversationId(url: string): string | null {
  const match = url?.match(/\/c\/([a-f0-9-]+)/);
  return match?.[1] || null;
}

function extractTitle(): string {
  // Try to get title from the page
  const titleEl = document.querySelector('title');
  if (titleEl?.textContent && titleEl.textContent !== 'ChatGPT') {
    return titleEl.textContent.replace(' | ChatGPT', '').trim();
  }
  // Try nav sidebar active item
  const activeNav = document.querySelector('nav a[aria-current="page"]');
  if (activeNav?.textContent) return activeNav.textContent.trim();
  return '';
}

function parseConversationText(payload: any): Array<{ role: string; content: string }> {
  const messages: Array<{ role: string; content: string }> = [];
  if (!payload) return messages;

  // Handle different response formats
  if (Array.isArray(payload)) {
    for (const item of payload) {
      if (item.role && item.content) {
        messages.push({ role: item.role, content: item.content });
      }
    }
  } else if (payload.mapping) {
    // Conversation tree format
    const nodes = Object.values(payload.mapping) as any[];
    // Sort by create_time
    nodes.sort((a: any, b: any) => (a.create_time || 0) - (b.create_time || 0));
    for (const node of nodes) {
      if (node.message?.content?.parts) {
        messages.push({
          role: node.message.author?.role || 'unknown',
          content: node.message.content.parts.join('\n'),
        });
      }
    }
  }

  return messages.filter(m => m.content.trim().length > 0);
}

function sendToBackground(conversationId: string, title: string, messages: Array<{ role: string; content: string }>) {
  browser.runtime.sendMessage({
    type: 'CONVERSATION_CAPTURED',
    platform: 'chatgpt',
    data: {
      conversationId,
      title,
      messages,
      url: window.location.href,
    },
  }).catch((err) => {
    console.warn('[AI Memory] Could not send to background:', err);
  });
}

function sendMemoriesToBackground(memories: Array<{ id: string; content: string; category?: string; created_at?: string; updated_at?: string }>) {
  browser.runtime.sendMessage({
    type: 'MEMORY_CAPTURED',
    platform: 'chatgpt',
    data: { memories },
  }).catch((err) => {
    console.warn('[AI Memory] Could not send memories to background:', err);
  });
}
