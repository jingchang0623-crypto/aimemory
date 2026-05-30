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
    if (url.includes('kimi.moonshot.cn')) return 'kimi';
    return 'unknown';
  }
  
  // Debounced save function
  function debouncedSave() {
    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      captureConversation();
    }, 2000); // Wait 2 seconds after last change
  }
  
  // Extract key facts from conversation (Mem0-style)
  function extractKeyFacts(messages) {
    const facts = [];
    const codeBlocks = [];
    const preferences = [];
    
    messages.forEach(msg => {
      const content = msg.content || '';
      
      // Extract code blocks
      const codeMatches = content.match(/```[\s\S]*?```/g);
      if (codeMatches) {
        codeBlocks.push(...codeMatches.map(c => c.replace(/```/g, '').trim()));
      }
      
      // Extract numbered lists (often key points)
      const listMatches = content.match(/^\d+[\.\)]\s+.+$/gm);
      if (listMatches && listMatches.length >= 3) {
        facts.push(`Key points: ${listMatches.slice(0, 3).join('; ')}`);
      }
      
      // Extract preferences (I prefer, I want, I need, etc.)
      const prefRegex = /(I\s+(prefer|want|need|like|use|recommend))\s+([^.!?]{10,100})/gi;
      let match;
      while ((match = prefRegex.exec(content)) !== null) {
        preferences.push(match[0].trim());
      }
      
      // Extract decisions (Let's use, We'll use, I'll go with)
      const decisionRegex = /(Let'?s use|We'?ll use|I'?ll go with|I decided to|The solution is)\s+([^.!?]{10,100})/gi;
      while ((match = decisionRegex.exec(content)) !== null) {
        facts.push(`Decision: ${match[0].trim()}`);
      }
    });
    
    return {
      facts: [...new Set(facts)].slice(0, 10), // Max 10 unique facts
      codeBlocks: [...new Set(codeBlocks)].slice(0, 5), // Max 5 code blocks
      preferences: [...new Set(preferences)].slice(0, 5) // Max 5 preferences
    };
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
        case 'kimi':
          conversation = captureKimi();
          break;
      }
      
      if (conversation && conversation.messages.length > 0) {
        // Extract key facts (Mem0-style)
        const extractedData = extractKeyFacts(conversation.messages);
        conversation.extractedData = extractedData;
        conversation.factsCount = (extractedData.facts.length + extractedData.codeBlocks.length + extractedData.preferences.length);
        
        // Save to local storage
        const key = `aimemory_${Date.now()}`;
        await chrome.storage.local.set({ [key]: conversation });
        
        // Update badge with fact count
        updateBadge();
        
        console.log('[AI Memory] Saved conversation:', conversation.title, `(${conversation.factsCount} facts extracted)`);
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
  
  function captureKimi() {
    const title = document.querySelector('.chat-title')?.textContent?.trim() || 
                  document.title.replace(' - Kimi', '').trim();
    
    const messages = [];
    const messageEls = document.querySelectorAll('[class*="message"], [class*="chat-message"]');
    
    messageEls.forEach(el => {
      const isUser = el.classList.contains('user') || 
                     el.querySelector('[class*="user"], [class*="human"]');
      const content = el.querySelector('[class*="content"], [class*="text"]')?.textContent?.trim();
      
      if (content) {
        messages.push({
          role: isUser ? 'user' : 'assistant',
          content
        });
      }
    });
    
    return {
      id: `kimi_${Date.now()}`,
      title,
      platform: 'kimi',
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
