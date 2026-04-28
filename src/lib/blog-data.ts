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
