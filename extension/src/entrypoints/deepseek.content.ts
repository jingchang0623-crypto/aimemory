import { browser } from 'wxt/browser';
import { defineContentScript } from 'wxt/utils/define-content-script';

/**
 * DeepSeek Content Script
 *
 * DeepSeek doesn't expose a clear API we can intercept, so this script
 * uses DOM scraping with MutationObserver to capture conversation content.
 *
 * Monitors:
 *  - Chat message containers for new messages
 *  - URL changes for conversation navigation
 *  - Page load for initial conversation capture
 */

export default defineContentScript({
  matches: ['https://chat.deepseek.com/*'],
  runAt: 'document_idle',
  allFrames: false,

  main(ctx) {
    console.log('[AI Memory] DeepSeek content script loaded');

    let currentConversationId: string | null = null;
    let captureTimeout: ReturnType<typeof setTimeout> | null = null;
    const recentCaptures = new Map<string, number>();
    const DEDUP_WINDOW = 60000;

    function getConversationId(): string | null {
      // DeepSeek URL format: https://chat.deepseek.com/a/chat/s/{id} or /a/chat/{id}
      const match = window.location.pathname.match(/\/chat\/(?:s\/)?([a-f0-9]+)/);
      if (match) return match[1];
      // Fallback: generate from URL
      if (window.location.pathname.includes('/chat')) {
        return `deepseek-${window.location.hash || 'new'}-${Math.floor(Date.now() / 300000)}`;
      }
      return null;
    }

    function shouldCapture(convId: string): boolean {
      const lastSeen = recentCaptures.get(convId);
      if (lastSeen && Date.now() - lastSeen < DEDUP_WINDOW) return false;
      recentCaptures.set(convId, Date.now());
      if (recentCaptures.size > 50) {
        for (const [key, time] of recentCaptures) {
          if (Date.now() - time > DEDUP_WINDOW) recentCaptures.delete(key);
        }
      }
      return true;
    }

    function captureConversation() {
      const convId = getConversationId();
      if (!convId) return;

      // Get conversation title from sidebar or page
      const title = extractTitle();
      const messages = extractMessages();

      if (messages.length > 0 && shouldCapture(convId)) {
        console.log(`[AI Memory] Captured DeepSeek conversation: ${title} (${messages.length} messages)`);
        sendToBackground(convId, title, messages);
      }
    }

    function extractTitle(): string {
      // Try to get title from the active sidebar item
      const activeItem = document.querySelector('.chat-item-active') ||
                         document.querySelector('[class*="active"][class*="chat"]') ||
                         document.querySelector('.sidebar-item.active');
      if (activeItem?.textContent?.trim()) {
        return activeItem.textContent.trim();
      }

      // Try page header/title area
      const headerEl = document.querySelector('.chat-header') ||
                       document.querySelector('[class*="conversation-title"]') ||
                       document.querySelector('h1');
      if (headerEl?.textContent?.trim()) {
        return headerEl.textContent.trim();
      }

      // Try document title
      if (document.title && document.title !== 'DeepSeek' && !document.title.includes('Chat')) {
        return document.title;
      }

      // Fallback: get first user message as title
      const firstUserMsg = document.querySelector('[class*="user"] .markdown, [class*="user"] p, .message-user');
      if (firstUserMsg?.textContent?.trim()) {
        return firstUserMsg.textContent.trim().slice(0, 100);
      }

      return `DeepSeek Conversation ${new Date().toLocaleString()}`;
    }

    function extractMessages(): Array<{ role: string; content: string }> {
      const messages: Array<{ role: string; content: string }> = [];

      // DeepSeek uses various class patterns for messages
      // Try multiple selectors to handle different versions of the UI
      const messageSelectors = [
        // Common patterns
        '.message',
        '.chat-message',
        '[class*="message-container"]',
        '[class*="chat-message"]',
        '.ds-chat-message',
        // Fallback: direct message divs in the chat area
        '.chat-container > div > div',
        '#chat-container > div',
        '.scroll-view > div > div',
      ];

      let messageEls: NodeListOf<Element> | null = null;
      for (const selector of messageSelectors) {
        const els = document.querySelectorAll(selector);
        if (els.length > 0) {
          messageEls = els;
          break;
        }
      }

      if (!messageEls || messageEls.length === 0) {
        // Try a different approach: look for user/assistant alternating blocks
        return extractMessagesAlternative();
      }

      for (const el of messageEls) {
        const role = determineRole(el);
        const content = extractTextContent(el);
        if (content && (role === 'user' || role === 'assistant')) {
          messages.push({ role, content });
        }
      }

      return messages;
    }

    function extractMessagesAlternative(): Array<{ role: string; content: string }> {
      const messages: Array<{ role: string; content: string }> = [];

      // Look for markdown content blocks which typically contain messages
      const markdownBlocks = document.querySelectorAll('.markdown, .ds-markdown, [class*="markdown"]');

      for (const block of markdownBlocks) {
        // Walk up to find the message container
        let container = block.parentElement;
        for (let i = 0; i < 5 && container; i++) {
          const role = determineRole(container);
          if (role) {
            const content = block.textContent?.trim();
            if (content) {
              messages.push({ role, content });
            }
            break;
          }
          container = container.parentElement;
        }
      }

      // Deduplicate messages
      const seen = new Set<string>();
      return messages.filter(m => {
        const key = `${m.role}:${m.content.slice(0, 100)}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }

    function determineRole(el: Element): string | null {
      // Check class names for role indicators
      const classList = Array.from(el.classList).join(' ').toLowerCase();
      const parentClassList = el.parentElement ? Array.from(el.parentElement.classList).join(' ').toLowerCase() : '';

      if (classList.includes('user') || parentClassList.includes('user') ||
          classList.includes('human') || parentClassList.includes('human')) {
        return 'user';
      }
      if (classList.includes('assistant') || parentClassList.includes('assistant') ||
          classList.includes('bot') || parentClassList.includes('bot') ||
          classList.includes('ai') || parentClassList.includes('ai')) {
        return 'assistant';
      }

      // Check data attributes
      const dataRole = el.getAttribute('data-role') ||
                       el.getAttribute('data-message-role') ||
                       el.closest('[data-role]')?.getAttribute('data-role');
      if (dataRole === 'user' || dataRole === 'human') return 'user';
      if (dataRole === 'assistant' || dataRole === 'bot' || dataRole === 'ai') return 'assistant';

      // Check for DeepSeek's avatar/icon patterns
      const hasUserIcon = el.querySelector('[class*="user-icon"], [class*="human-icon"], .user-avatar');
      const hasBotIcon = el.querySelector('[class*="bot-icon"], [class*="ai-icon"], .bot-avatar, [class*="ds-icon"]');
      if (hasUserIcon) return 'user';
      if (hasBotIcon) return 'assistant';

      return null;
    }

    function extractTextContent(el: Element): string {
      // Try to get content from markdown or text areas
      const markdownEl = el.querySelector('.markdown, .ds-markdown, [class*="markdown"]');
      if (markdownEl) return markdownEl.textContent?.trim() || '';

      const textEl = el.querySelector('.text, .content, p, .whitespace-pre-wrap');
      if (textEl) return textEl.textContent?.trim() || '';

      // Fallback to element's own text, but exclude nested UI elements
      const clone = el.cloneNode(true) as Element;
      clone.querySelectorAll('button, svg, [class*="icon"], [class*="action"]').forEach(e => e.remove());
      return clone.textContent?.trim() || '';
    }

    function sendToBackground(conversationId: string, title: string, messages: Array<{ role: string; content: string }>) {
      browser.runtime.sendMessage({
        type: 'CONVERSATION_CAPTURED',
        platform: 'deepseek',
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

    // Schedule capture with debounce
    function scheduleCapture() {
      if (captureTimeout) clearTimeout(captureTimeout);
      captureTimeout = setTimeout(captureConversation, 3000);
    }

    // Set up MutationObserver to watch for new messages
    const observer = new MutationObserver((mutations) => {
      let shouldCapture = false;
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as Element;
            // Check if this looks like a message being added
            const text = el.textContent?.trim() || '';
            if (text.length > 5) {
              shouldCapture = true;
              break;
            }
          }
        }
        if (shouldCapture) break;
      }
      if (shouldCapture) {
        scheduleCapture();
      }
    });

    // Start observing the main content area
    function startObserving() {
      const target = document.querySelector('#chat-container') ||
                     document.querySelector('.chat-container') ||
                     document.querySelector('.scroll-view') ||
                     document.querySelector('main') ||
                     document.body;

      if (target) {
        observer.observe(target, {
          childList: true,
          subtree: true,
        });
        console.log('[AI Memory] DeepSeek MutationObserver started');
      }
    }

    // Watch for URL changes (DeepSeek is likely an SPA)
    let lastUrl = window.location.href;
    const urlObserver = new MutationObserver(() => {
      if (window.location.href !== lastUrl) {
        lastUrl = window.location.href;
        currentConversationId = getConversationId();
        // Capture after navigation settles
        setTimeout(captureConversation, 5000);
      }
    });
    urlObserver.observe(document.querySelector('title') || document.head, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    // Also listen for popstate (browser back/forward)
    window.addEventListener('popstate', () => {
      setTimeout(captureConversation, 3000);
    });

    // Initialize
    startObserving();
    currentConversationId = getConversationId();

    // Initial capture after page load
    setTimeout(captureConversation, 5000);

    // Periodic capture every 60 seconds as a safety net
    setInterval(captureConversation, 60000);
  },
});
