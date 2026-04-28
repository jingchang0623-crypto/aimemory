/**
 * Memory Injection Message Handler
 * 
 * Listens for INJECT_MEMORY_TO_INPUT messages from the background script
 * and injects memory content into the active chat input element.
 */

import { browser } from 'wxt/browser';
import { injectMemory, findInputElement } from './memory-inject';

/**
 * Set up the injection message listener for content scripts.
 * Call this in each content script's main() function.
 */
export function setupInjectionListener(): void {
  browser.runtime.onMessage.addListener((message: any, sender, sendResponse) => {
    if (message?.type === 'INJECT_MEMORY_TO_INPUT') {
      handleInjection(message.content)
        .then(sendResponse)
        .catch((err) => {
          sendResponse({ 
            success: false, 
            error: err instanceof Error ? err.message : 'Injection failed' 
          });
        });
      return true; // Keep message channel open for async response
    }
  });
}

/**
 * Handle the injection of memory content into the chat input.
 */
async function handleInjection(content: string): Promise<{ success: boolean; error?: string }> {
  if (!content) {
    return { success: false, error: 'No content provided' };
  }

  // Find the input element on the page
  const inputElement = findInputElement();
  
  if (!inputElement) {
    return { 
      success: false, 
      error: 'No chat input found. Make sure you have a chat page open with an input box.' 
    };
  }

  // Inject the memory content
  const success = injectMemory(inputElement, content, {
    dispatchEvents: true,
    focusFirst: true,
    clearFirst: false, // Append to existing content
  });

  if (success) {
    console.log('[AI Memory] Successfully injected memory into input');
    return { success: true };
  } else {
    return { 
      success: false, 
      error: 'Failed to inject into input element. The input format may not be supported.' 
    };
  }
}
