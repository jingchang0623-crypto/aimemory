// AI Memory Chrome Extension - Popup Script v1.2.0

document.addEventListener('DOMContentLoaded', async () => {
  const totalEl = document.getElementById('total-count');
  const savedEl = document.getElementById('saved-count');
  const factsEl = document.getElementById('facts-count');
  const convListEl = document.getElementById('conv-list');
  const statusEl = document.getElementById('status');
  const saveBtn = document.getElementById('save-btn');
  const exportBtn = document.getElementById('export-btn');

  // Load saved conversations
  async function loadConversations() {
    const data = await chrome.storage.local.get(null);
    const conversations = [];
    let totalFacts = 0;

    for (const [key, value] of Object.entries(data)) {
      if (key.startsWith('aimemory_')) {
        conversations.push(value);
        totalFacts += value.factsCount || 0;
      }
    }

    // Sort by date (newest first)
    conversations.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    // Update stats
    totalEl.textContent = conversations.length;

    // Count today's saves
    const today = new Date().toDateString();
    const todayCount = conversations.filter(c => 
      new Date(c.updatedAt).toDateString() === today
    ).length;
    savedEl.textContent = todayCount;

    // Show total facts extracted
    factsEl.textContent = totalFacts;

    // Render list
    if (conversations.length === 0) {
      convListEl.innerHTML = '<div class="empty">No conversations saved yet</div>';
    } else {
      convListEl.innerHTML = conversations.slice(0, 10).map(conv => {
        const factsSummary = conv.extractedData ? 
          (conv.extractedData.facts.length > 0 ? 
            `<div class="conv-facts">💡 ${escapeHtml(conv.extractedData.facts.slice(0, 2).join(' · '))}</div>` : '') : '';
        return `<div class="conv-item">
          <div class="conv-title-row">
            <span class="conv-title">${escapeHtml(conv.title)}</span>
            <span class="conv-platform">${conv.platform}</span>
          </div>
          ${factsSummary}
          ${conv.factsCount ? `<span class="conv-fact-badge">${conv.factsCount} facts</span>` : ''}
        </div>`;
      }).join('');
    }
  }

  // Save current conversation
  saveBtn.addEventListener('click', async () => {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      await chrome.tabs.sendMessage(tab.id, { action: 'captureNow' });

      showStatus('✅ Conversation saved!');
      await loadConversations();
    } catch (error) {
      showStatus('❌ Failed to save: ' + error.message);
    }
  });

  // Export all data
  exportBtn.addEventListener('click', async () => {
    const data = await chrome.storage.local.get(null);
    const conversations = {};

    for (const [key, value] of Object.entries(data)) {
      if (key.startsWith('aimemory_')) {
        conversations[key] = value;
      }
    }

    const blob = new Blob([JSON.stringify(conversations, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `aimemory-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();

    URL.revokeObjectURL(url);
    showStatus('✅ Export started!');
  });

  function showStatus(message) {
    statusEl.textContent = message;
    statusEl.classList.add('show');
    setTimeout(() => {
      statusEl.classList.remove('show');
    }, 3000);
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Listen for updates
  chrome.storage.onChanged.addListener(loadConversations);

  // Initial load
  await loadConversations();
});
