// AI Memory Chrome Extension - Content Script

(function() {
  'use strict';
  
  let currentPlatform = detectPlatform();
  let saveTimeout = null;
  
  function detectPlatform() {
    const url = window.location.href;
    if (url.includes('chat.openai.com') || url.includes('chatgpt.com')) return 'chatgpt';
    if (url.includes('claude.ai')) return 'claude';
    if (url.includes('chat.deepseek.com')) return 'deepseek';
    if (url.includes('gemini.google.com')) return 'gemini';
    return 'unknown';
  }
  
  // Debounced save function
  function debouncedSave() {
    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      captureConversation();
    }, 2000); // Wait 2 seconds after last change
  }
  
  async function captureConversation() {
    try {
      let conversation = null;
      
      switch (currentPlatform) {
        case 'chatgpt':
          conversation = captureChatGPT();
          break;
        case 'claude':
          conversation = captureClaude();
          break;
        case 'deepseek':
          conversation = captureDeepSeek();
          break;
        case 'gemini':
          conversation = captureGemini();
          break;
      }
      
      if (conversation && conversation.messages.length > 0) {
        // Save to local storage
        const key = `aimemory_${Date.now()}`;
        await chrome.storage.local.set({ [key]: conversation });
        
        // Update badge
        updateBadge();
        
        console.log('[AI Memory] Saved conversation:', conversation.title);
      }
    } catch (error) {
      console.error('[AI Memory] Error capturing conversation:', error);
    }
  }
  
  function captureChatGPT() {
    const title = document.querySelector('h1')?.textContent?.trim() || 
                  document.title.replace(' | ChatGPT', '').trim();
    
    const messages = [];
    const turnElements = document.querySelectorAll('[data-message-author-role]');
    
    turnElements.forEach(el => {
      const role = el.getAttribute('data-message-author-role');
      const content = el.querySelector('.markdown')?.textContent?.trim() || 
                      el.textContent?.trim();
      
      if (content && (role === 'user' || role === 'assistant')) {
        messages.push({
          role,
          content
        });
      }
    });
    
    return {
      id: `chatgpt_${Date.now()}`,
      title,
      platform: 'chatgpt',
      messages,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }
  
  function captureClaude() {
    const title = document.querySelector('h1')?.textContent?.trim() || 
                  document.title.replace(' - Claude', '').trim();
    
    const messages = [];
    const turnElements = document.querySelectorAll('[data-is-streaming]');
    
    turnElements.forEach(el => {
      const roleEl = el.querySelector('[data-message-author]');
      const role = roleEl?.getAttribute('data-message-author') || 
                   (el.querySelector('.human') ? 'user' : 'assistant');
      const content = el.querySelector('.content')?.textContent?.trim() || 
                      el.textContent?.trim();
      
      if (content) {
        messages.push({
          role: role === 'human' ? 'user' : 'assistant',
          content
        });
      }
    });
    
    return {
      id: `claude_${Date.now()}`,
      title,
      platform: 'claude',
      messages,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }
  
  function captureDeepSeek() {
    const title = document.querySelector('.chat-title')?.textContent?.trim() || 
                  document.title.replace(' - DeepSeek', '').trim();
    
    const messages = [];
    const messageEls = document.querySelectorAll('.message');
    
    messageEls.forEach(el => {
      const isUser = el.classList.contains('user-message') || 
                     el.querySelector('.user-avatar');
      const content = el.querySelector('.message-content')?.textContent?.trim();
      
      if (content) {
        messages.push({
          role: isUser ? 'user' : 'assistant',
          content
        });
      }
    });
    
    return {
      id: `deepseek_${Date.now()}`,
      title,
      platform: 'deepseek',
      messages,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }
  
  function captureGemini() {
    const title = document.title.replace(' - Gemini', '').trim();
    
    const messages = [];
    const turnEls = document.querySelectorAll('.conversation-turn');
    
    turnEls.forEach(el => {
      const isUser = el.querySelector('.user-message') !== null;
      const content = el.querySelector('.message-content')?.textContent?.trim();
      
      if (content) {
        messages.push({
          role: isUser ? 'user' : 'assistant',
          content
        });
      }
    });
    
    return {
      id: `gemini_${Date.now()}`,
      title,
      platform: 'gemini',
      messages,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }
  
  async function updateBadge() {
    const data = await chrome.storage.local.get(null);
    const count = Object.keys(data).filter(k => k.startsWith('aimemory_')).length;
    chrome.action.setBadgeText({ text: count.toString() });
    chrome.action.setBadgeBackgroundColor({ color: '#3B82F6' });
  }
  
  // Observe DOM changes
  const observer = new MutationObserver(() => {
    debouncedSave();
  });
  
  // Start observing when page loads
  function startObserving() {
    const targetNode = document.querySelector('main') || document.body;
    observer.observe(targetNode, {
      childList: true,
      subtree: true
    });
    console.log('[AI Memory] Observing for changes on', currentPlatform);
  }
  
  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserving);
  } else {
    startObserving();
  }
  
  // Initial save
  setTimeout(captureConversation, 3000);
  
})();
