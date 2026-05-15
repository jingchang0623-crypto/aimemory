import { browser } from 'wxt/browser';
import { defineContentScript } from 'wxt/utils/define-content-script';
import { setupInjectionListener } from '../lib/injection-handler';

/**
 * Kimi (Moonshot AI) Content Script
 *
 * Kimi uses a Vue-based SPA architecture. This script uses DOM scraping
 * with MutationObserver to capture conversation content.
 *
 * Kimi URL patterns:
 *  - https://kimi.moonshot.cn/chat/ (new chat)
 *  - https://kimi.moonshot.cn/chat/c/{id} (existing conversation)
 *
 * DOM structure (based on typical Vue chat apps):
 *  - Message containers with role-specific class patterns
 *  - Markdown content blocks for message text
 */

export default defineContentScript({
  matches: ['https://kimi.moonshot.cn/*'],
  runAt: 'document_idle',
  allFrames: false,

  main(ctx) {
    console.log('[AI Memory] Kimi content script loaded');
    
    // Set up injection listener for memory injection from sidepanel
    setupInjectionListener();

    let currentConversationId: string | null = null;
    let captureTimeout: ReturnType<typeof setTimeout> | null = null;
    const recentCaptures = new Map<string, number>();
    const DEDUP_WINDOW = 60000; // 1 minute

    function getConversationId(): string | null {
      // Kimi URL format: https://kimi.moonshot.cn/chat/c/{id}
      const match = window.location.pathname.match(/\/chat\/c\/([a-zA-Z0-9]+)/);
      if (match) return match[1];
      
      // New chat: generate a temporary ID
      if (window.location.pathname.includes('/chat')) {
        return `kimi-new-${Math.floor(Date.now() / 300000)}`;
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

      const title = extractTitle();
      const messages = extractMessages();

      if (messages.length > 0 && shouldCapture(convId)) {
        console.log(`[AI Memory] Captured Kimi conversation: ${title} (${messages.length} messages)`);
        sendToBackground(convId, title, messages);
      }
    }

    function extractTitle(): string {
      // Try to get title from the sidebar active item
      const activeItem = document.querySelector('.chat-item.active') ||
                         document.querySelector('[class*="active"][class*="chat"]') ||
                         document.querySelector('.sidebar .active');
      if (activeItem?.textContent?.trim()) {
        return activeItem.textContent.trim();
      }

      // Try page header/title area
      const headerEl = document.querySelector('.chat-header') ||
                       document.querySelector('[class*="title"]') ||
                       document.querySelector('h1');
      if (headerEl?.textContent?.trim()) {
        return headerEl.textContent.trim();
      }

      // Try document title (Kimi often shows conversation title in tab)
      if (document.title && document.title !== 'Kimi' && !document.title.includes('Moonshot')) {
        return document.title.replace(' - Kimi', '').trim();
      }

      // Fallback: use first user message as title
      const firstUserMsg = document.querySelector('[class*="user"] .markdown, [class*="user"] p');
      if (firstUserMsg?.textContent?.trim()) {
        return firstUserMsg.textContent.trim().slice(0, 100);
      }

      return `Kimi Conversation ${new Date().toLocaleString()}`;
    }

    function extractMessages(): Array<{ role: string; content: string }> {
      const messages: Array<{ role: string; content: string }> = [];

      // Kimi uses various class patterns for messages
      const messageSelectors = [
        '.message-item',
        '.chat-message',
        '[class*="message"]',
        '[class*="msg-item"]',
        '.chat-container > div > div',
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

      // Look for markdown content blocks
      const markdownBlocks = document.querySelectorAll('.markdown, [class*="markdown"], [class*="content"]');
      
      for (const block of markdownBlocks) {
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

      // Deduplicate
      const seen = new Set<string>();
      return messages.filter(m => {
        const key = `${m.role}:${m.content.slice(0, 100)}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }

    function determineRole(el: Element): string | null {
      const classList = Array.from(el.classList).join(' ').toLowerCase();
      const parentClassList = el.parentElement ? Array.from(el.parentElement.classList).join(' ').toLowerCase() : '';

      // Kimi-specific patterns (Chinese UI often uses these terms)
      if (classList.includes('user') || parentClassList.includes('user') ||
          classList.includes('me') || parentClassList.includes('me') ||
          classList.includes('提问') || classList.includes('question')) {
        return 'user';
      }
      
      if (classList.includes('assistant') || parentClassList.includes('assistant') ||
          classList.includes('bot') || parentClassList.includes('bot') ||
          classList.includes('ai') || parentClassList.includes('ai') ||
          classList.includes('kimi') || parentClassList.includes('kimi') ||
          classList.includes('回答') || classList.includes('answer')) {
        return 'assistant';
      }

      // Check data attributes
      const dataRole = el.getAttribute('data-role') ||
                       el.getAttribute('data-message-role') ||
                       el.closest('[data-role]')?.getAttribute('data-role');
      if (dataRole === 'user' || dataRole === 'human') return 'user';
      if (dataRole === 'assistant' || dataRole === 'bot' || dataRole === 'ai') return 'assistant';

      // Check for avatar/icon patterns (Kimi often has bot avatar)
      const hasUserIcon = el.querySelector('[class*="user"], [class*="me"]');
      const hasBotIcon = el.querySelector('[class*="bot"], [class*="kimi"], [class*="ai"], img[src*="moonshot"]');
      if (hasUserIcon) return 'user';
      if (hasBotIcon) return 'assistant';

      // Fallback: check position (user messages often on right, bot on left in Chinese apps)
      // But this is unreliable, so we skip if unclear
      
      return null;
    }

    function extractTextContent(el: Element): string {
      // Try markdown/content areas first
      const markdownEl = el.querySelector('.markdown, [class*="markdown"], [class*="content"]');
      if (markdownEl) return markdownEl.textContent?.trim() || '';

      const textEl = el.querySelector('.text, p, [class*="text"]');
      if (textEl) return textEl.textContent?.trim() || '';

      // Fallback: get text, excluding UI elements
      const clone = el.cloneNode(true) as Element;
      clone.querySelectorAll('button, svg, [class*="icon"], [class*="action"]').forEach(e => e.remove());
      return clone.textContent?.trim() || '';
    }

    function sendToBackground(conversationId: string, title: string, messages: Array<{ role: string; content: string }>) {
      browser.runtime.sendMessage({
        type: 'CONVERSATION_CAPTURED',
        platform: 'kimi',
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

    function scheduleCapture() {
      if (captureTimeout) clearTimeout(captureTimeout);
      captureTimeout = setTimeout(captureConversation, 3000);
    }

    // MutationObserver for new messages
    const observer = new MutationObserver((mutations) => {
      let shouldCapture = false;
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as Element;
            const text = el.textContent?.trim() || '';
            if (text.length > 10) {  // Significant content added
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

    function startObserving() {
      const target = document.querySelector('.chat-container') ||
                     document.querySelector('[class*="chat"]') ||
                     document.querySelector('main') ||
                     document.body;

      if (target) {
        observer.observe(target, { childList: true, subtree: true });
        console.log('[AI Memory] Kimi MutationObserver started');
      }
    }

    // Watch for URL changes (Kimi is SPA)
    let lastUrl = window.location.href;
    const urlObserver = new MutationObserver(() => {
      if (window.location.href !== lastUrl) {
        lastUrl = window.location.href;
        currentConversationId = getConversationId();
        setTimeout(captureConversation, 5000);
      }
    });
    urlObserver.observe(document.querySelector('title') || document.head, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    // Popstate for back/forward navigation
    window.addEventListener('popstate', () => {
      setTimeout(captureConversation, 3000);
    });

    // Initialize
    startObserving();
    currentConversationId = getConversationId();
    
    // Initial capture after page load
    setTimeout(captureConversation, 5000);

    // Periodic capture every 60 seconds
    setInterval(captureConversation, 60000);
  },
});