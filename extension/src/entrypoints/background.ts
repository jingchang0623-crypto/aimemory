import { browser } from 'wxt/browser';
import { defineBackground } from 'wxt/utils/define-background';
import { saveConversation, searchConversations, listConversations, getConversation, deleteConversation, getStats, saveMemories, listMemories, deleteMemory, getMemoryStats } from '../lib/storage';
import type { Conversation, CaptureEvent, ChatGPTMemory, MemoryCaptureEvent } from '../lib/types';

export default defineBackground(() => {
  console.log('[AI Memory] Background service worker started');

  // Enable side panel on install
  browser.runtime.onInstalled.addListener(async () => {
    console.log('[AI Memory] Extension installed');
    // Side panel is configured via manifest, but we can set options
    if (browser.sidePanel) {
      try {
        await browser.sidePanel.setOptions({
          enabled: true,
        });
      } catch (e) {
        console.warn('[AI Memory] Could not configure side panel:', e);
      }
    }
  });

  // Handle messages from content scripts
  browser.runtime.onMessage.addListener((message: any, sender, sendResponse) => {
    const handleMessage = async () => {
      switch (message.type) {
        case 'CONVERSATION_CAPTURED': {
          const event = message as CaptureEvent;
          const conv: Conversation = {
            id: event.data.conversationId,
            platform: event.platform,
            title: event.data.title,
            messages: event.data.messages.map((m, i) => ({
              id: `${event.data.conversationId}-msg-${i}`,
              role: m.role as 'user' | 'assistant' | 'system',
              content: m.content,
              timestamp: m.timestamp || Date.now(),
            })),
            createdAt: Date.now(),
            updatedAt: Date.now(),
            tags: [],
            url: event.data.url,
          };
          await saveConversation(conv);
          console.log(`[AI Memory] Saved conversation: ${conv.title} (${conv.platform})`);
          return { success: true, id: conv.id };
        }

        case 'SEARCH': {
          const results = await searchConversations(message.query || '');
          return { success: true, results };
        }

        case 'LIST_CONVERSATIONS': {
          const conversations = await listConversations(
            message.platform,
            message.limit,
            message.offset
          );
          return { success: true, conversations };
        }

        case 'GET_CONVERSATION': {
          const conversation = await getConversation(message.id);
          return { success: true, conversation };
        }

        case 'DELETE_CONVERSATION': {
          await deleteConversation(message.id);
          return { success: true };
        }

        case 'GET_STATS': {
          const stats = await getStats();
          return { success: true, stats };
        }

        case 'MEMORY_CAPTURED': {
          const memEvent = message as MemoryCaptureEvent;
          const memories: ChatGPTMemory[] = memEvent.data.memories.map(m => ({
            id: m.id,
            content: m.content,
            category: m.category,
            createdAt: m.created_at ? new Date(m.created_at).getTime() : Date.now(),
            updatedAt: m.updated_at ? new Date(m.updated_at).getTime() : Date.now(),
            source: 'chatgpt-api' as const,
          }));
          await saveMemories(memories);
          console.log(`[AI Memory] Saved ${memories.length} ChatGPT memory(ies)`);
          // Notify sidepanel
          browser.runtime.sendMessage({ type: 'NEW_MEMORIES_SAVED', count: memories.length }).catch(() => {});
          return { success: true, count: memories.length };
        }

        case 'LIST_MEMORIES': {
          const mems = await listMemories(message.limit || 100);
          return { success: true, memories: mems };
        }

        case 'DELETE_MEMORY': {
          await deleteMemory(message.id);
          return { success: true };
        }

        case 'GET_MEMORY_STATS': {
          const memStats = await getMemoryStats();
          return { success: true, stats: memStats };
        }

        default:
          return { success: false, error: 'Unknown message type' };
      }
    };

    handleMessage()
      .then(sendResponse)
      .catch((err) => {
        console.error('[AI Memory] Error handling message:', err);
        sendResponse({ success: false, error: String(err) });
      });

    return true; // Keep message channel open for async response
  });
});
