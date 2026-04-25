// AI Memory Chrome Extension - Background Service Worker

const API_BASE = 'https://aimemory.pro/api';

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'saveConversation') {
    saveConversation(request.data)
      .then(result => sendResponse({ success: true, result }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Keep message channel open for async response
  }
  
  if (request.action === 'getStats') {
    getStats()
      .then(stats => sendResponse({ success: true, stats }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true;
  }
});

async function saveConversation(data) {
  const response = await fetch(`${API_BASE}/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      conversations: [data]
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to save conversation');
  }
  
  return await response.json();
}

async function getStats() {
  const response = await fetch(`${API_BASE}/search`);
  if (!response.ok) {
    throw new Error('Failed to get stats');
  }
  const data = await response.json();
  return {
    total: data.total || 0,
    conversations: data.conversations || []
  };
}
