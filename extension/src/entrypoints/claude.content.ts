import { browser } from 'wxt/browser';
import { defineContentScript } from 'wxt/utils/define-content-script';

/**
 * Claude Content Script
 *
 * Intercepts fetch() calls to Claude's API endpoints:
 *  - POST /api/organizations/{org}/chat_conversations/{id}/completion (message send)
 *  - GET  /api/organizations/{org}/chat_conversations/{id} (conversation fetch)
 *  - GET  /api/organizations/{org}/chat_conversations (conversation list)
 *
 * Also performs DOM scraping as a fallback to capture conversation content.
 */

const INJECTED_SCRIPT = `
(function() {
  if (window.__aiMemoryClaudeIntercepted) return;
  window.__aiMemoryClaudeIntercepted = true;

  const originalFetch = window.fetch;
  const pendingConversations = new Map();

  window.fetch = async function(...args) {
    const response = await originalFetch.apply(this, args);

    try {
      const url = typeof args[0] === 'string' ? args[0] : args[0]?.url || '';

      // Intercept completion responses (SSE stream)
      if (url.includes('/completion')) {
        const cloned = response.clone();
        // Extract conversation ID from URL
        const convMatch = url.match(/chat_conversations\\/([a-f0-9-]+)/);
        const conversationId = convMatch?.[1];

        cloned.text().then(text => {
          const messages = [];
          const lines = text.split('\\n');
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const json = JSON.parse(line.slice(6));
                if (json.completion) {
                  messages.push({
                    role: 'assistant',
                    content: json.completion,
                    stop_reason: json.stop_reason,
                  });
                }
                if (json.error) {
                  console.warn('[AI Memory] Claude completion error:', json.error);
                }
              } catch (e) {}
            }
          }

          if (messages.length > 0 && conversationId) {
            window.postMessage({
              type: 'AIMEMORY_CLAUDE_COMPLETION',
              source: 'ai-memory-extension',
              data: {
                conversationId,
                messages,
                url: window.location.href,
              }
            }, '*');
          }
        }).catch(() => {});
      }

      // Intercept conversation creation
      if (url.includes('/chat_conversations') && !url.includes('/completion') && args[1]?.method === 'POST') {
        const cloned = response.clone();
        cloned.json().then(data => {
          if (data?.uuid) {
            window.postMessage({
              type: 'AIMEMORY_CLAUDE_NEW_CONVERSATION',
              source: 'ai-memory-extension',
              data: {
                conversationId: data.uuid,
                name: data.name || '',
                url: window.location.href,
              }
            }, '*');
          }
        }).catch(() => {});
      }

      // Intercept conversation list
      if (url.includes('/chat_conversations') && !url.includes('/completion') && (!args[1]?.method || args[1].method === 'GET')) {
        const cloned = response.clone();
        cloned.json().then(data => {
          if (Array.isArray(data)) {
            window.postMessage({
              type: 'AIMEMORY_CLAUDE_CONVERSATIONS_LIST',
              source: 'ai-memory-extension',
              data: {
                conversations: data.map(c => ({
                  id: c.uuid,
                  name: c.name,
                  created_at: c.created_at,
                  updated_at: c.updated_at,
                })),
              }
            }, '*');
          }
        }).catch(() => {});
      }
    } catch (e) {
      // Silently ignore interception errors
    }

    return response;
  };

  // DOM scraping fallback - capture conversation from rendered page
  function captureFromDOM() {
    try {
      const urlMatch = window.location.pathname.match(/\\/chat\\/([a-f0-9-]+)/);
      if (!urlMatch) return;
      const conversationId = urlMatch[1];

      // Get conversation title
      const titleEl = document.querySelector('h1') ||
                      document.querySelector('[data-testid="conversation-title"]') ||
                      document.querySelector('.font-claude-message');
      const title = titleEl?.textContent?.trim() || '';

      // Get all message turns - Claude uses specific data attributes and classes
      const turnEls = document.querySelectorAll('[data-testid^="turn-"]') ||
                       document.querySelectorAll('.group\\/conversation-turn');
      const messages = [];

      for (const turnEl of turnEls) {
        // Determine role from data attribute or class
        const isHuman = turnEl.querySelector('[data-testid="human-turn"]') ||
                        turnEl.classList.contains('human') ||
                        turnEl.querySelector('.human-message');
        const role = isHuman ? 'user' : 'assistant';

        // Get message content
        const contentEl = turnEl.querySelector('.font-claude-message') ||
                          turnEl.querySelector('[data-testid="message-content"]') ||
                          turnEl.querySelector('.markdown') ||
                          turnEl.querySelector('p');
        const content = contentEl?.textContent?.trim() || '';
        if (content) {
          messages.push({ role, content });
        }
      }

      if (messages.length > 0) {
        window.postMessage({
          type: 'AIMEMORY_CLAUDE_DOM_CAPTURE',
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

  // Capture on load and periodically
  setTimeout(captureFromDOM, 3000);
  setInterval(captureFromDOM, 30000);

  // Also observe DOM changes for real-time capture
  const observer = new MutationObserver((mutations) => {
    // Check if new messages were added
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node;
          if (el.querySelector?.('[data-testid^="turn-"]') ||
              el.querySelector?.('.group\\/conversation-turn')) {
            // New turn added, schedule a capture
            setTimeout(captureFromDOM, 1000);
            return;
          }
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
`;

export default defineContentScript({
  matches: ['https://claude.ai/*'],
  runAt: 'document_start',
  allFrames: false,

  main(ctx) {
    console.log('[AI Memory] Claude content script loaded');

    // Inject the fetch interceptor into the page
    const script = document.createElement('script');
    script.textContent = INJECTED_SCRIPT;
    script.dataset.aiMemory = 'claude-interceptor';
    (document.head || document.documentElement).appendChild(script);
    script.remove();

    // Track conversation state to build complete conversations
    const conversationState = new Map<string, {
      title: string;
      messages: Array<{ role: string; content: string }>;
      lastCapture: number;
    }>();

    const recentCaptures = new Map<string, number>();
    const DEDUP_WINDOW = 60000;

    function shouldCapture(conversationId: string): boolean {
      const lastSeen = recentCaptures.get(conversationId);
      if (lastSeen && Date.now() - lastSeen < DEDUP_WINDOW) return false;
      recentCaptures.set(conversationId, Date.now());
      return true;
    }

    // Listen for messages from the injected script
    window.addEventListener('message', (event) => {
      if (event.data?.source !== 'ai-memory-extension') return;

      try {
        const { type, data } = event.data;

        if (type === 'AIMEMORY_CLAUDE_COMPLETION') {
          const { conversationId, messages } = data;
          const state = conversationState.get(conversationId) || {
            title: '',
            messages: [],
            lastCapture: 0,
          };

          // Append assistant messages from this completion
          for (const msg of messages) {
            if (msg.content.trim()) {
              state.messages.push({
                role: 'assistant',
                content: msg.content,
              });
            }
          }
          state.lastCapture = Date.now();
          conversationState.set(conversationId, state);

          // Capture user message from DOM
          captureUserMessage(conversationId, state);

          // Send complete conversation after a short delay to let streaming finish
          setTimeout(() => {
            if (state.messages.length > 0 && shouldCapture(conversationId)) {
              const title = state.title || extractTitle() || `Claude Conversation ${new Date().toLocaleString()}`;
              sendToBackground(conversationId, title, state.messages);
            }
          }, 2000);
        }

        if (type === 'AIMEMORY_CLAUDE_DOM_CAPTURE') {
          const { conversationId, title, messages } = data;
          if (conversationId && shouldCapture(conversationId)) {
            sendToBackground(conversationId, title, messages);
          }
        }
      } catch (e) {
        console.error('[AI Memory] Error processing Claude message:', e);
      }
    });
  },
});

function captureUserMessage(conversationId: string, state: any) {
  // Try to get the last user message from the DOM
  const turns = document.querySelectorAll('[data-testid^="turn-"]');
  const lastTurn = turns[turns.length - 1];
  if (lastTurn) {
    const isHuman = lastTurn.querySelector('[data-testid="human-turn"]');
    if (isHuman) {
      const contentEl = lastTurn.querySelector('.font-claude-message') ||
                        lastTurn.querySelector('p');
      const content = contentEl?.textContent?.trim();
      if (content && !state.messages.find((m: any) => m.role === 'user' && m.content === content)) {
        state.messages.unshift({ role: 'user', content });
      }
    }
  }
}

function extractTitle(): string {
  const h1 = document.querySelector('h1');
  if (h1?.textContent) return h1.textContent.trim();
  return '';
}

function sendToBackground(conversationId: string, title: string, messages: Array<{ role: string; content: string }>) {
  browser.runtime.sendMessage({
    type: 'CONVERSATION_CAPTURED',
    platform: 'claude',
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
