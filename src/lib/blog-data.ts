/**
 * Centralized blog post data registry.
 * Powers: blog index, related posts, sitemap, and blog layout navigation.
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime?: string;
  keywords?: string[];
  /** Tags for related posts matching */
  tags: string[];
  /** Language: 'en' or 'zh' */
  lang: 'en' | 'zh';
}

export const blogPosts: BlogPost[] = [
  // === Extensions ===
  {
    slug: 'chatgpt-history-extension',
    title: 'Best ChatGPT History Extension in 2026',
    description: 'Complete guide to the best ChatGPT history extension. Save, search and organize all your ChatGPT conversations with one free tool.',
    category: 'Extensions',
    date: '2026-04-27',
    readTime: '12 min',
    tags: ['chatgpt', 'extension', 'history', 'search'],
    lang: 'en',
  },
  {
    slug: 'chatgpt-export-extension',
    title: 'ChatGPT Export Extension - Save All Your Conversations',
    description: 'Looking for a ChatGPT export extension? Learn how to export, backup and search all your ChatGPT conversations with the free AI Memory extension.',
    category: 'Extensions',
    date: '2026-04-27',
    readTime: '10 min',
    tags: ['chatgpt', 'extension', 'export', 'backup'],
    lang: 'en',
  },
  // === Export Guides ===
  {
    slug: 'export-chatgpt',
    title: 'How to Export ChatGPT Conversations - Complete Guide',
    description: 'Step-by-step guide to exporting your ChatGPT conversations. Multiple methods explained with screenshots.',
    category: 'Export Guides',
    date: '2026-04-25',
    readTime: '8 min',
    tags: ['chatgpt', 'export', 'guide'],
    lang: 'en',
  },
  {
    slug: 'export-claude',
    title: 'How to Export Claude Conversations',
    description: 'Export your Claude AI conversations easily. Free tool supports JSON, Markdown and PDF formats.',
    category: 'Export Guides',
    date: '2026-04-25',
    readTime: '8 min',
    tags: ['claude', 'export', 'guide'],
    lang: 'en',
  },
  {
    slug: 'export-deepseek',
    title: 'How to Export DeepSeek Conversations',
    description: 'Export and backup your DeepSeek AI chat history. Supports multiple formats and full-text search.',
    category: 'Export Guides',
    date: '2026-04-25',
    readTime: '7 min',
    tags: ['deepseek', 'export', 'guide'],
    lang: 'en',
  },
  {
    slug: 'export-gemini',
    title: 'How to Export Gemini Conversations',
    description: 'Export your Google Gemini conversations. Free tool for backing up and searching your AI chat history.',
    category: 'Export Guides',
    date: '2026-04-25',
    readTime: '7 min',
    tags: ['gemini', 'export', 'guide'],
    lang: 'en',
  },
  {
    slug: 'chatmemo-export',
    title: 'ChatMemo Export - How to Export from Chat Memo',
    description: 'Export your ChatMemo data and import it into AI Memory for better search and organization.',
    category: 'Export Guides',
    date: '2026-04-25',
    readTime: '6 min',
    tags: ['chatmemo', 'export', 'migration'],
    lang: 'en',
  },
  // === Comparisons ===
  {
    slug: 'chat-memo-vs-ai-memory',
    title: 'Chat Memo vs AI Memory - Which is Better?',
    description: 'Detailed comparison of Chat Memo and AI Memory. Features, privacy, pricing and more.',
    category: 'Comparisons',
    date: '2026-04-25',
    readTime: '8 min',
    tags: ['chatmemo', 'comparison', 'alternative'],
    lang: 'en',
  },
  {
    slug: 'best-ai-conversation-manager-2026',
    title: 'Best AI Conversation Manager in 2026',
    description: 'Top AI conversation management tools compared. Find the best way to organize your ChatGPT, Claude and other AI chats.',
    category: 'Comparisons',
    date: '2026-04-25',
    readTime: '10 min',
    tags: ['comparison', 'tools', 'manager', 'overview'],
    lang: 'en',
  },
  {
    slug: 'chatgpt-vs-claude',
    title: 'ChatGPT vs Claude - Complete Comparison 2026',
    description: 'ChatGPT vs Claude: features, pricing, privacy and performance compared. Which AI assistant is better?',
    category: 'Comparisons',
    date: '2026-04-25',
    readTime: '10 min',
    tags: ['chatgpt', 'claude', 'comparison'],
    lang: 'en',
  },
  // === Troubleshooting ===
  {
    slug: 'chatgpt-conversation-too-long',
    title: "ChatGPT Conversation Too Long? Here's the Fix",
    description: 'Solutions for when your ChatGPT conversation gets too long. How to manage context windows and save important chats.',
    category: 'Troubleshooting',
    date: '2026-04-25',
    readTime: '6 min',
    tags: ['chatgpt', 'context', 'troubleshooting', 'memory'],
    lang: 'en',
  },
  {
    slug: 'chatgpt-not-saving',
    title: "ChatGPT Not Saving Conversations? Here's How to Fix It",
    description: 'Troubleshooting guide for ChatGPT conversation saving issues. Recover lost chats and prevent future data loss.',
    category: 'Troubleshooting',
    date: '2026-04-25',
    readTime: '6 min',
    tags: ['chatgpt', 'troubleshooting', 'data-loss', 'recovery'],
    lang: 'en',
  },
  {
    slug: 'chatgpt-memory-full',
    title: "ChatGPT Memory Full? Here's What to Do",
    description: 'Your ChatGPT memory is full? Learn how to manage, export and backup your conversations before they\'re lost.',
    category: 'Troubleshooting',
    date: '2026-04-25',
    readTime: '7 min',
    tags: ['chatgpt', 'memory', 'troubleshooting', 'full', 'limit'],
    lang: 'en',
  },
  {
    slug: 'chatgpt-memory-full-fix',
    title: 'ChatGPT Memory Full - How to Fix and Free Up Space',
    description: 'Step-by-step guide to fixing ChatGPT memory full errors. Export old conversations and free up space.',
    category: 'Troubleshooting',
    date: '2026-04-25',
    readTime: '6 min',
    tags: ['chatgpt', 'memory', 'troubleshooting', 'fix'],
    lang: 'en',
  },
  {
    slug: 'ai-conversation-disappeared',
    title: 'AI Conversation Disappeared? How to Recover',
    description: 'Your AI conversation disappeared? Learn how to recover lost ChatGPT, Claude and DeepSeek conversations.',
    category: 'Troubleshooting',
    date: '2026-04-25',
    readTime: '6 min',
    tags: ['recovery', 'troubleshooting', 'data-loss'],
    lang: 'en',
  },
  // === Guides ===
  {
    slug: 'find-old-chatgpt',
    title: 'How to Find Old ChatGPT Conversations',
    description: "Can't find an old ChatGPT conversation? Learn multiple methods to search and recover your chat history.",
    category: 'Guides',
    date: '2026-04-25',
    readTime: '7 min',
    tags: ['chatgpt', 'search', 'history', 'guide'],
    lang: 'en',
  },
  {
    slug: 'chatgpt-memory-backup',
    title: 'How to Backup ChatGPT Conversations',
    description: 'Complete guide to backing up your ChatGPT conversations. Never lose important AI chats again.',
    category: 'Guides',
    date: '2026-04-25',
    readTime: '7 min',
    tags: ['chatgpt', 'backup', 'guide', 'memory'],
    lang: 'en',
  },
  {
    slug: 'chatgpt-memory-alternative',
    title: 'Best ChatGPT Memory Alternative',
    description: 'Looking for a ChatGPT memory alternative? AI Memory lets you store unlimited conversations locally.',
    category: 'Comparisons',
    date: '2026-04-25',
    readTime: '7 min',
    tags: ['chatgpt', 'memory', 'alternative', 'comparison'],
    lang: 'en',
  },
  {
    slug: 'chatgpt-conversation-history-search',
    title: 'How to Search ChatGPT Conversation History',
    description: 'Search through all your ChatGPT conversations with full-text search. Find any answer instantly.',
    category: 'Guides',
    date: '2026-04-25',
    readTime: '7 min',
    tags: ['chatgpt', 'search', 'history', 'guide'],
    lang: 'en',
  },
  {
    slug: 'chatgpt-context-window-limit',
    title: 'ChatGPT Context Window Limit Explained',
    description: "Understanding ChatGPT's context window limits and how they affect your conversations.",
    category: 'Guides',
    date: '2026-04-25',
    readTime: '6 min',
    tags: ['chatgpt', 'context', 'limit', 'guide'],
    lang: 'en',
  },
  {
    slug: 'chatgpt-to-claude-migration',
    title: 'How to Migrate from ChatGPT to Claude',
    description: "Moving from ChatGPT to Claude? Here's how to export your ChatGPT conversations and import them.",
    category: 'Guides',
    date: '2026-04-25',
    readTime: '8 min',
    tags: ['chatgpt', 'claude', 'migration', 'guide'],
    lang: 'en',
  },
  // === Technical ===
  {
    slug: 'mcp-server-guide',
    title: 'MCP Server 完全指南 - Model Context Protocol 入门到精通',
    description: 'Complete guide to MCP (Model Context Protocol). Learn how to build MCP servers and integrate with Claude Desktop, Cursor, and 100+ clients.',
    category: 'Technical',
    date: '2026-04-27',
    readTime: '15 min',
    tags: ['mcp', 'protocol', 'technical', 'integration'],
    lang: 'en',
  },
  // === 中文指南 ===
  {
    slug: 'ai-duihua-daochu',
    title: 'AI对话导出工具 - 免费导出ChatGPT/Claude/DeepSeek聊天记录',
    description: '最好用的AI对话导出工具。免费导出ChatGPT、Claude、DeepSeek的聊天记录，支持全文搜索和本地存储。',
    category: '中文指南',
    date: '2026-04-27',
    readTime: '10 min',
    tags: ['export', 'chatgpt', 'claude', 'deepseek', '中文'],
    lang: 'zh',
  },
  {
    slug: 'chatgpt-jiyi-guanli',
    title: 'ChatGPT记忆管理完全指南：备份、搜索、跨平台同步',
    description: 'ChatGPT记忆满了怎么办？完整教程教你如何备份ChatGPT对话、跨平台管理AI记忆、搜索历史对话。',
    category: '中文指南',
    date: '2026-04-28',
    readTime: '12 min',
    tags: ['chatgpt', 'memory', 'backup', '中文'],
    lang: 'zh',
  },
  // === NEW: ChatGPT Memory Guide (high-value keyword) ===
  {
    slug: 'chatgpt-memory',
    title: 'ChatGPT Memory: Complete Guide to Managing Your AI Memory (2026)',
    description: 'Everything about ChatGPT memory — how it works, its limits, how to manage it, and better alternatives for storing your AI conversations.',
    category: 'Guides',
    date: '2026-04-28',
    readTime: '10 min',
    tags: ['chatgpt', 'memory', 'guide', 'management', 'settings'],
    lang: 'en',
  },
  // === Round 16: Memory Settings + Chinese Cross-Platform ===
  {
    slug: 'chatgpt-memory-settings',
    title: 'ChatGPT Memory Settings: How to Enable, Manage & Optimize (2026)',
    description: 'Complete guide to ChatGPT memory settings. Learn how to enable memory, manage stored facts, control what ChatGPT remembers, and optimize your AI experience.',
    category: 'Guides',
    date: '2026-04-28',
    readTime: '8 min',
    tags: ['chatgpt', 'memory', 'settings', 'guide', 'management'],
    lang: 'en',
  },
  {
    slug: 'kuaping-tai-ai-duihua-guanli',
    title: '跨平台AI对话管理工具推荐：ChatGPT/Claude/DeepSeek一站式管理',
    description: '最好用的跨平台AI对话管理工具。一站式管理ChatGPT、Claude、DeepSeek的所有对话记录，支持全文搜索、导出备份和记忆注入。',
    category: '中文指南',
    date: '2026-04-28',
    readTime: '10 min',
    tags: ['跨平台', 'AI', '对话管理', 'chatgpt', 'claude', 'deepseek', '中文'],
    lang: 'zh',
  },
  {
    slug: 'chatgpt-shuju-beifen',
    title: 'ChatGPT数据备份与恢复完全指南（2026最新）',
    description: '如何备份ChatGPT数据？本文详细介绍4种ChatGPT数据导出和备份方法，包括官方导出、Chrome扩展、API接口等。',
    category: '中文指南',
    date: '2026-04-29',
    readTime: '8 min',
    tags: ['ChatGPT', '数据备份', '导出', '中文', 'guide'],
    lang: 'zh',
  },
  // === Guides ===
  {
    slug: 'search-chatgpt-history',
    title: 'How to Search ChatGPT History: Find Any Conversation (2026)',
    description: 'Learn how to search your ChatGPT conversation history and find old chats. Multiple methods explained: built-in search, export search, and the AI Memory extension.',
    category: 'Guides',
    date: '2026-04-28',
    readTime: '10 min',
    tags: ['chatgpt', 'search', 'history', 'guide', 'export'],
    lang: 'en',
  },
  // === Comparisons ===
  {
    slug: 'chatgpt-vs-claude-vs-deepseek',
    title: 'ChatGPT vs Claude vs DeepSeek: Complete Comparison (2026)',
    description: 'In-depth comparison of ChatGPT, Claude, and DeepSeek AI assistants. Features, pricing, memory, coding ability, and which one is best for your workflow.',
    category: 'Comparisons',
    date: '2026-04-28',
    readTime: '12 min',
    tags: ['chatgpt', 'claude', 'deepseek', 'comparison', 'review'],
    lang: 'en',
  },
  {
    slug: 'best-ai-memory-extension-2026',
    title: 'Best AI Memory Extension in 2026 - Top 5 Compared',
    description: 'Comprehensive comparison of the best AI memory extensions in 2026. AI Memory, Chat Memo, AI Exporter, Supermemory, and Mem0 compared on features, pricing, and privacy.',
    category: 'Comparisons',
    date: '2026-04-28',
    readTime: '11 min',
    tags: ['comparison', 'extension', 'memory', 'chatgpt', 'review', 'tools'],
    lang: 'en',
  },
  {
    slug: 'ai-chat-history-manager',
    title: 'Best AI Chat History Manager: Top 5 Tools Compared (2026)',
    description: 'Looking for an AI chat history manager? Compare the top 5 tools for organizing, searching, and managing your ChatGPT, Claude, and DeepSeek conversations.',
    category: 'Comparisons',
    date: '2026-04-28',
    readTime: '11 min',
    tags: ['comparison', 'manager', 'chatgpt', 'claude', 'tools', 'organization'],
    lang: 'en',
  },
  // === ChatGPT Memory Limit (pain-point keyword) ===
  {
    slug: 'chatgpt-memory-limit',
    title: 'ChatGPT Memory Limit Explained - How to Fix It (2026)',
    description: 'ChatGPT memory limit reached? Learn exactly how much memory ChatGPT has, why it fills up, and 5 ways to fix it. Free tool included.',
    category: 'Guides',
    date: '2026-04-29',
    readTime: '10 min',
    tags: ['chatgpt', 'memory', 'limit', 'guide', 'troubleshooting'],
    lang: 'en',
  },
  // === Export All Data (high-intent keyword) ===
  {
    slug: 'export-all-chatgpt-data',
    title: 'How to Export All ChatGPT Data - Complete Guide (2026)',
    description: 'Learn how to export all your ChatGPT data step by step. Covers conversations, memories, settings, and files. Multiple methods explained.',
    category: 'Export Guides',
    date: '2026-04-29',
    readTime: '12 min',
    keywords: ['export all chatgpt data', 'how to export chatgpt data', 'chatgpt data export', 'download chatgpt data'],
    tags: ['chatgpt', 'export', 'data', 'backup', 'guide'],
    lang: 'en',
  },
  // === Save Conversations Guide (high-value keyword) ===
  {
    slug: 'save-chatgpt-conversations',
    title: 'How to Save ChatGPT Conversations - 4 Easy Methods (2026)',
    description: 'Learn how to save your ChatGPT conversations before they disappear. 4 proven methods: export, copy, Chrome extension, and API. Free tools included.',
    category: 'Guides',
    date: '2026-04-28',
    readTime: '10 min',
    tags: ['chatgpt', 'save', 'export', 'backup', 'guide'],
    lang: 'en',
  },
  // === Export ChatGPT to PDF (high-value keyword) ===
  {
    slug: 'export-chatgpt-to-pdf',
    title: 'How to Export ChatGPT to PDF — 4 Methods Compared (2026)',
    description: 'Learn how to export ChatGPT conversations to PDF format. 4 easy methods: browser print, official export + convert, Chrome extension, and copy-paste. Free tools included.',
    category: 'Export Guides',
    date: '2026-04-29',
    readTime: '11 min',
    keywords: ['export chatgpt to pdf', 'chatgpt to pdf', 'save chatgpt as pdf', 'chatgpt export pdf'],
    tags: ['chatgpt', 'export', 'pdf', 'guide', 'backup'],
    lang: 'en',
  },
  // === How to Use ChatGPT Memory (tutorial keyword) ===
  {
    slug: 'how-to-use-chatgpt-memory',
    title: 'How to Use ChatGPT Memory - Complete Tutorial (2026)',
    description: 'Step-by-step tutorial on how to use ChatGPT memory feature. Enable memory, view saved facts, manage settings, and learn when you need an external tool.',
    category: 'Guides',
    date: '2026-04-29',
    readTime: '10 min',
    tags: ['chatgpt', 'memory', 'tutorial', 'guide', 'settings'],
    lang: 'en',
  },
  // === ChatGPT Data Privacy (timely keyword) ===
  {
    slug: 'chatgpt-data-privacy',
    title: 'ChatGPT Data Privacy: What You Need to Know (2026)',
    description: 'Complete guide to ChatGPT data privacy. What OpenAI stores, how conversations are used for training, GDPR rights, and how to protect your data.',
    category: 'Privacy',
    date: '2026-04-29',
    readTime: '12 min',
    tags: ['chatgpt', 'privacy', 'data', 'gdpr', 'security'],
    lang: 'en',
  },
  // === ChatGPT History Viewer (high-intent keyword) ===
  {
    slug: 'chatgpt-history-viewer',
    title: 'ChatGPT History Viewer: How to Browse & Search All Your Conversations (2026)',
    description: 'Need a better way to view ChatGPT history? Learn why the native sidebar fails and how AI Memory gives you full-text search, timeline view, and cross-platform conversation browsing.',
    category: 'Guides',
    date: '2026-04-29',
    readTime: '9 min',
    keywords: ['chatgpt history viewer', 'view chatgpt history', 'browse chatgpt conversations', 'chatgpt conversation viewer'],
    tags: ['chatgpt', 'history', 'viewer', 'search', 'guide'],
    lang: 'en',
  },
  // === Claude Memory (competitor keyword) ===
  {
    slug: 'claude-memory',
    title: 'Claude Memory: How It Works, Limitations & Cross-Platform Solutions (2026)',
    description: 'Complete guide to Claude AI memory feature. How Claude remembers conversations, its limitations vs ChatGPT memory, and how to manage memories across both platforms.',
    category: 'Guides',
    date: '2026-04-29',
    readTime: '10 min',
    keywords: ['claude memory', 'claude ai memory', 'claude memory feature', 'claude vs chatgpt memory'],
    tags: ['claude', 'memory', 'comparison', 'cross-platform', 'guide'],
    lang: 'en',
  },
  {
    slug: 'chatgpt-vs-claude-memory',
    title: 'ChatGPT vs Claude Memory: Which AI Remembers Better? (2026)',
    description: 'Complete comparison of ChatGPT memory vs Claude memory — how they work, storage limits, export options, and which AI remembers better.',
    category: 'Comparisons',
    date: '2026-04-29',
    readTime: '12 min',
    keywords: ['chatgpt vs claude memory', 'chatgpt memory vs claude memory', 'claude memory feature', 'ai memory comparison'],
    tags: ['chatgpt', 'claude', 'memory', 'comparison', 'cross-platform'],
    lang: 'en',
  },
  {
    slug: 'ai-memory-management-tools-2026',
    title: 'Best AI Memory Management Tools in 2026',
    description: 'Comprehensive guide to the best AI memory management tools in 2026. Compare AI Memory, Chat Memo, Mem0, Supermemory and more.',
    category: 'Comparisons',
    date: '2026-04-29',
    readTime: '14 min',
    keywords: ['ai memory management tools', 'best ai memory tool', 'ai memory manager', 'ai conversation manager 2026'],
    tags: ['tools', 'comparison', 'memory', 'cross-platform', 'guide'],
    lang: 'en',
  },
  {
    slug: 'gemini-memory',
    title: 'Gemini Memory: How Google Gemini Memory Works & How to Manage It (2026)',
    description: 'Complete guide to Gemini memory feature. Learn how Google Gemini memory works, its limits, and how AI Memory helps you manage Gemini conversations across platforms.',
    category: 'Guides',
    date: '2026-04-29',
    readTime: '15 min',
    keywords: ['gemini memory', 'google gemini memory', 'gemini ai memory', 'gemini memory feature', 'gemini conversation memory', 'google ai memory'],
    tags: ['gemini', 'memory', 'google', 'guide', 'cross-platform'],
    lang: 'en',
  },
  {
    slug: 'deepseek-memory',
    title: 'DeepSeek Memory: Does DeepSeek Have Memory? Complete Guide (2026)',
    description: 'Does DeepSeek have memory? Learn how DeepSeek memory works, its limitations compared to ChatGPT, and how to manage your DeepSeek conversations with AI Memory.',
    category: 'Guides',
    date: '2026-04-29',
    readTime: '14 min',
    keywords: ['deepseek memory', 'deepseek ai memory', 'deepseek memory feature', 'deepseek conversation history', 'deepseek chat memory', 'does deepseek have memory'],
    tags: ['deepseek', 'memory', 'guide', 'cross-platform', 'comparison'],
    lang: 'en',
  },
  {
    slug: 'organize-ai-conversations',
    title: 'How to Organize AI Conversations: The Complete Guide (2026)',
    description: 'Learn how to organize your AI conversations across ChatGPT, Claude, DeepSeek and Gemini. Best methods, tools, and tips for managing hundreds of AI chats.',
    category: 'Guides',
    date: '2026-04-29',
    readTime: '16 min',
    keywords: ['organize ai conversations', 'ai conversation organizer', 'manage ai chats', 'chatgpt conversation organization', 'ai chat management'],
    tags: ['organization', 'productivity', 'cross-platform', 'guide', 'tools'],
    lang: 'en',
  },
];

/** Get related posts by tag overlap. Excludes the current post. */
export function getRelatedPosts(currentSlug: string, limit = 4): BlogPost[] {
  const current = blogPosts.find(p => p.slug === currentSlug);
  if (!current) return blogPosts.slice(0, limit);

  const scored = blogPosts
    .filter(p => p.slug !== currentSlug)
    .map(p => ({
      post: p,
      score: p.tags.filter(t => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(s => s.post);
}

/** Get all categories */
export function getCategories(): string[] {
  const cats = new Set(blogPosts.map(p => p.category));
  return ['All', ...Array.from(cats)];
}

/** Get blog post by slug */
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

/** Get posts by category */
export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') return blogPosts;
  return blogPosts.filter(p => p.category === category);
}

/** Base URL for the site */
export const SITE_URL = 'https://aimemory.pro';
export const BLOG_BASE = `${SITE_URL}/blog`;
