import { browser } from 'wxt/browser';
import type { Conversation, SearchResult, StorageStats, ChatGPTMemory } from '../../lib/types';

// State
let allConversations: Conversation[] = [];
let filteredConversations: Conversation[] = [];
let searchResults: SearchResult[] | null = null;
let activeFilter: string = 'all';
let searchQuery: string = '';
let currentDetail: Conversation | null = null;
let allMemories: ChatGPTMemory[] = [];
let showingMemories: boolean = false;

// DOM Elements
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const conversationList = document.getElementById('conversation-list') as HTMLElement;
const emptyState = document.getElementById('empty-state') as HTMLElement;
const statsBadge = document.getElementById('stats-badge') as HTMLElement;
const statsFooter = document.getElementById('stats-footer') as HTMLElement;
const statsConversations = document.getElementById('stats-conversations') as HTMLElement;
const statsMessages = document.getElementById('stats-messages') as HTMLElement;
const detailOverlay = document.getElementById('detail-overlay') as HTMLElement;
const detailTitle = document.getElementById('detail-title') as HTMLElement;
const detailMeta = document.getElementById('detail-meta') as HTMLElement;
const detailMessages = document.getElementById('detail-messages') as HTMLElement;
const detailClose = document.getElementById('detail-close') as HTMLButtonElement;
const detailOpen = document.getElementById('detail-open') as HTMLButtonElement;
const detailDelete = document.getElementById('detail-delete') as HTMLButtonElement;

// Platform filter buttons
const filterBtns = document.querySelectorAll('.filter-btn') as NodeListOf<HTMLButtonElement>;

// Initialize
async function init() {
  setupEventListeners();
  await loadConversations();
  await loadMemories();
  await updateStats();
  // Auto-refresh every 10 seconds
  setInterval(async () => {
    await loadConversations();
    await loadMemories();
    await updateStats();
  }, 10000);
}

function setupEventListeners() {
  // Search
  let searchTimeout: ReturnType<typeof setTimeout>;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchQuery = searchInput.value.trim();
      performSearch();
    }, 300);
  });

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-purple-500/20', 'text-purple-400', 'border-purple-500/30');
        b.classList.add('bg-gray-800', 'text-gray-400', 'border-gray-700');
      });
      btn.classList.add('active', 'bg-purple-500/20', 'text-purple-400', 'border-purple-500/30');
      btn.classList.remove('bg-gray-800', 'text-gray-400', 'border-gray-700');
      activeFilter = btn.dataset.filter || 'all';
      applyFilters();
    });
  });

  // Detail panel close
  detailClose.addEventListener('click', closeDetail);
  detailOverlay.addEventListener('click', (e) => {
    if (e.target === detailOverlay) closeDetail();
  });

  // Detail open original
  detailOpen.addEventListener('click', () => {
    if (currentDetail?.url) {
      browser.tabs.create({ url: currentDetail.url });
    }
  });

  // Detail delete
  detailDelete.addEventListener('click', async () => {
    if (currentDetail) {
      await sendExtensionMessage({ type: 'DELETE_CONVERSATION', id: currentDetail.id });
      closeDetail();
      await loadConversations();
      await updateStats();
    }
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDetail();
    if (e.key === '/' && !searchInput.matches(':focus')) {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

async function sendExtensionMessage(message: any): Promise<any> {
  return new Promise((resolve, reject) => {
    browser.runtime.sendMessage(message).then(resolve).catch(reject);
  });
}

async function loadConversations() {
  try {
    const response = await sendExtensionMessage({
      type: 'LIST_CONVERSATIONS',
      limit: 200,
    });
    if (response?.success) {
      allConversations = response.conversations || [];
      if (!showingMemories) applyFilters();
    }
  } catch (e) {
    console.error('[AI Memory SidePanel] Failed to load conversations:', e);
  }
}

async function loadMemories() {
  try {
    const response = await sendExtensionMessage({
      type: 'LIST_MEMORIES',
      limit: 200,
    });
    if (response?.success) {
      allMemories = response.memories || [];
      if (showingMemories) renderMemoryList();
    }
  } catch (e) {
    console.error('[AI Memory SidePanel] Failed to load memories:', e);
  }
}

function renderMemoryList() {
  const existingItems = conversationList.querySelectorAll('.conversation-item, .memory-item');
  existingItems.forEach(item => item.remove());

  if (allMemories.length === 0) {
    emptyState.classList.remove('hidden');
    emptyState.style.display = '';
    emptyState.querySelector('p:first-of-type')!.textContent = 'No memories yet';
    emptyState.querySelector('p:last-of-type')!.textContent = 'ChatGPT memories will appear here when captured from /backend-api/memories.';
    return;
  }

  emptyState.classList.add('hidden');

  for (const mem of allMemories) {
    const item = createMemoryItem(mem);
    conversationList.appendChild(item);
  }
}

function createMemoryItem(mem: ChatGPTMemory): HTMLElement {
  const item = document.createElement('div');
  item.className = 'memory-item conversation-item fade-in cursor-pointer rounded-lg px-3 py-2.5 transition-colors border border-transparent hover:border-gray-700';

  const timeAgo = formatTimeAgo(mem.updatedAt);
  const categoryHtml = mem.category ? `<span class="memory-badge">${escapeHtml(mem.category)}</span>` : '';
  const sourceLabel = mem.source === 'chatgpt-api' ? 'ChatGPT API' : 'ChatGPT DOM';

  item.innerHTML = `
    <div class="flex items-start gap-2">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-1.5 mb-1">
          <span class="memory-badge">💡 Memory</span>
          ${categoryHtml}
          <span class="text-xs text-gray-600">${timeAgo}</span>
          <span class="text-xs text-gray-700 ml-auto">${sourceLabel}</span>
        </div>
        <p class="memory-content">${escapeHtml(mem.content.slice(0, 300))}</p>
      </div>
    </div>
  `;

  item.addEventListener('click', () => showMemoryDetail(mem));
  return item;
}

function showMemoryDetail(mem: ChatGPTMemory) {
  detailTitle.textContent = '💡 ChatGPT Memory';
  detailMeta.innerHTML = `
    <span class="memory-badge">${mem.source === 'chatgpt-api' ? 'ChatGPT API' : 'ChatGPT DOM'}</span>
    ${mem.category ? `<span class="memory-badge">${escapeHtml(mem.category)}</span>` : ''}
    <span>${formatTimeAgo(mem.updatedAt)}</span>
    <span>Created: ${new Date(mem.createdAt).toLocaleDateString()}</span>
  `;

  detailMessages.innerHTML = '';
  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble msg-assistant';
  bubble.textContent = mem.content;
  detailMessages.appendChild(bubble);

  detailOpen.disabled = true;
  detailOpen.classList.add('opacity-50');
  detailOverlay.classList.remove('hidden');
}

async function updateStats() {
  try {
    const response = await sendExtensionMessage({ type: 'GET_STATS' });
    if (response?.success) {
      const stats: StorageStats = response.stats;
      const memStatsResp = await sendExtensionMessage({ type: 'GET_MEMORY_STATS' });
      const memCount = memStatsResp?.success ? memStatsResp.stats.count : 0;
      statsBadge.textContent = `${stats.conversationCount} saved${memCount > 0 ? ` · ${memCount} 💡` : ''}`;
      statsConversations.textContent = `${stats.conversationCount} conversations`;
      statsMessages.textContent = `${stats.messageCount} messages${memCount > 0 ? ` · ${memCount} memories` : ''}`;
      if (stats.conversationCount > 0 || memCount > 0) {
        statsFooter.classList.remove('hidden');
      }
    }
  } catch (e) {
    // Ignore stats errors
  }
}

async function performSearch() {
  if (!searchQuery) {
    searchResults = null;
    applyFilters();
    return;
  }

  try {
    const response = await sendExtensionMessage({
      type: 'SEARCH',
      query: searchQuery,
    });
    if (response?.success) {
      searchResults = response.results || [];
      applyFilters();
    }
  } catch (e) {
    console.error('[AI Memory SidePanel] Search failed:', e);
  }
}

function applyFilters() {
  // Handle memory filter
  if (activeFilter === 'memory') {
    showingMemories = true;
    renderMemoryList();
    return;
  }
  showingMemories = false;

  if (searchResults) {
    // When searching, use search results and apply platform filter
    filteredConversations = searchResults
      .filter(r => activeFilter === 'all' || r.conversation.platform === activeFilter)
      .sort((a, b) => b.score - a.score)
      .map(r => r.conversation);
  } else {
    // Normal listing with platform filter
    filteredConversations = allConversations
      .filter(c => activeFilter === 'all' || c.platform === activeFilter)
      .sort((a, b) => b.updatedAt - a.updatedAt);
  }

  renderConversationList();
}

function renderConversationList() {
  // Clear existing items (keep empty state)
  const existingItems = conversationList.querySelectorAll('.conversation-item');
  existingItems.forEach(item => item.remove());

  if (filteredConversations.length === 0) {
    emptyState.classList.remove('hidden');
    emptyState.style.display = '';
    if (searchQuery) {
      emptyState.querySelector('p:first-of-type')!.textContent = 'No results found';
      emptyState.querySelector('p:last-of-type')!.textContent = `No conversations match "${searchQuery}"`;
    } else {
      emptyState.querySelector('p:first-of-type')!.textContent = 'No conversations yet';
      emptyState.querySelector('p:last-of-type')!.textContent = 'Start chatting on ChatGPT, Claude, or DeepSeek to capture conversations.';
    }
    return;
  }

  emptyState.classList.add('hidden');

  for (const conv of filteredConversations) {
    const item = createConversationItem(conv);
    conversationList.appendChild(item);
  }
}

function createConversationItem(conv: Conversation): HTMLElement {
  const item = document.createElement('div');
  item.className = 'conversation-item fade-in cursor-pointer rounded-lg px-3 py-2.5 transition-colors border border-transparent hover:border-gray-700';

  const platformClass = `platform-${conv.platform}`;
  const platformLabel = conv.platform.charAt(0).toUpperCase() + conv.platform.slice(1);
  const timeAgo = formatTimeAgo(conv.updatedAt);
  const messageCount = conv.messages.length;
  const preview = getPreview(conv);

  item.innerHTML = `
    <div class="flex items-start gap-2">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-1.5 mb-1">
          <span class="platform-badge ${platformClass}">${platformLabel}</span>
          <span class="text-xs text-gray-600">${timeAgo}</span>
        </div>
        <h3 class="text-sm font-medium text-gray-200 truncate">${escapeHtml(conv.title)}</h3>
        <p class="message-preview mt-0.5">${searchQuery ? highlightMatch(escapeHtml(preview), searchQuery) : escapeHtml(preview)}</p>
        <div class="flex items-center gap-2 mt-1">
          <span class="text-xs text-gray-600">${messageCount} message${messageCount !== 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  `;

  item.addEventListener('click', () => showDetail(conv));
  return item;
}

function showDetail(conv: Conversation) {
  currentDetail = conv;
  detailTitle.textContent = conv.title;
  detailMeta.innerHTML = `
    <span class="platform-badge platform-${conv.platform}">${conv.platform}</span>
    <span>${formatTimeAgo(conv.updatedAt)}</span>
    <span>${conv.messages.length} messages</span>
  `;

  detailMessages.innerHTML = '';
  for (const msg of conv.messages) {
    const bubble = document.createElement('div');
    bubble.className = `msg-bubble ${msg.role === 'user' ? 'msg-user' : 'msg-assistant'}`;
    bubble.textContent = msg.content;
    detailMessages.appendChild(bubble);
  }

  detailOpen.disabled = !conv.url;
  detailOpen.classList.toggle('opacity-50', !conv.url);
  detailOverlay.classList.remove('hidden');
}

function closeDetail() {
  currentDetail = null;
  detailOverlay.classList.add('hidden');
}

function formatTimeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(timestamp).toLocaleDateString();
}

function getPreview(conv: Conversation): string {
  // Get last assistant message as preview
  const lastAssistant = [...conv.messages].reverse().find(m => m.role === 'assistant');
  if (lastAssistant) return lastAssistant.content.slice(0, 200);
  // Fallback to last message
  const lastMsg = conv.messages[conv.messages.length - 1];
  return lastMsg?.content?.slice(0, 200) || '';
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function highlightMatch(text: string, query: string): string {
  if (!query) return text;
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
  let result = text;
  for (const term of terms) {
    const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
    result = result.replace(regex, '<span class="highlight">$1</span>');
  }
  return result;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Listen for new captures from background
browser.runtime.onMessage.addListener((message: any) => {
  if (message?.type === 'NEW_CONVERSATION_SAVED') {
    loadConversations();
    updateStats();
  }
  if (message?.type === 'NEW_MEMORIES_SAVED') {
    loadMemories();
    updateStats();
  }
});

// Start
init();
