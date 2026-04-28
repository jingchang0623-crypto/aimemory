import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Memory Blog - Tips, Guides & Tutorials for Managing AI Conversations',
  description: 'Learn how to export, search, and organize your ChatGPT, Claude, DeepSeek and Gemini conversations. Expert guides on AI conversation management.',
  openGraph: {
    title: 'AI Memory Blog - Tips, Guides & Tutorials',
    description: 'Learn how to export, search, and organize your AI conversations from ChatGPT, Claude, DeepSeek and Gemini.',
    url: 'https://aimemory.pro/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aimemory.pro/blog',
  },
};

const blogPosts = [
  {
    title: 'Best ChatGPT History Extension in 2026',
    description: 'Complete guide to the best ChatGPT history extension. Save, search and organize all your ChatGPT conversations with one free tool.',
    href: '/blog/chatgpt-history-extension',
    category: 'Extensions',
    date: '2026-04-27',
  },
  {
    title: 'ChatGPT Export Extension - Save All Your Conversations',
    description: 'Looking for a ChatGPT export extension? Learn how to export, backup and search all your ChatGPT conversations with the free AI Memory extension.',
    href: '/blog/chatgpt-export-extension',
    category: 'Extensions',
    date: '2026-04-27',
  },
  {
    title: 'How to Export ChatGPT Conversations - Complete Guide',
    description: 'Step-by-step guide to exporting your ChatGPT conversations. Multiple methods explained with screenshots.',
    href: '/blog/export-chatgpt',
    category: 'Export Guides',
    date: '2026-04-25',
  },
  {
    title: 'How to Export Claude Conversations',
    description: 'Export your Claude AI conversations easily. Free tool supports JSON, Markdown and PDF formats.',
    href: '/blog/export-claude',
    category: 'Export Guides',
    date: '2026-04-25',
  },
  {
    title: 'How to Export DeepSeek Conversations',
    description: 'Export and backup your DeepSeek AI chat history. Supports multiple formats and full-text search.',
    href: '/blog/export-deepseek',
    category: 'Export Guides',
    date: '2026-04-25',
  },
  {
    title: 'How to Export Gemini Conversations',
    description: 'Export your Google Gemini conversations. Free tool for backing up and searching your AI chat history.',
    href: '/blog/export-gemini',
    category: 'Export Guides',
    date: '2026-04-25',
  },
  {
    title: 'ChatMemo Export - How to Export from Chat Memo',
    description: 'Export your ChatMemo data and import it into AI Memory for better search and organization.',
    href: '/blog/chatmemo-export',
    category: 'Export Guides',
    date: '2026-04-25',
  },
  {
    title: 'Chat Memo vs AI Memory - Which is Better?',
    description: 'Detailed comparison of Chat Memo and AI Memory. Features, privacy, pricing and more.',
    href: '/blog/chat-memo-vs-ai-memory',
    category: 'Comparisons',
    date: '2026-04-25',
  },
  {
    title: 'Best AI Conversation Manager in 2026',
    description: 'Top AI conversation management tools compared. Find the best way to organize your ChatGPT, Claude and other AI chats.',
    href: '/blog/best-ai-conversation-manager-2026',
    category: 'Comparisons',
    date: '2026-04-25',
  },
  {
    title: "ChatGPT Conversation Too Long? Here's the Fix",
    description: "Solutions for when your ChatGPT conversation gets too long. How to manage context windows and save important chats.",
    href: '/blog/chatgpt-conversation-too-long',
    category: 'Troubleshooting',
    date: '2026-04-25',
  },
  {
    title: "ChatGPT Not Saving Conversations? Here's How to Fix It",
    description: "Troubleshooting guide for ChatGPT conversation saving issues. Recover lost chats and prevent future data loss.",
    href: '/blog/chatgpt-not-saving',
    category: 'Troubleshooting',
    date: '2026-04-25',
  },
  {
    title: 'How to Find Old ChatGPT Conversations',
    description: "Can't find an old ChatGPT conversation? Learn multiple methods to search and recover your chat history.",
    href: '/blog/find-old-chatgpt',
    category: 'Troubleshooting',
    date: '2026-04-25',
  },
  {
    title: "ChatGPT Memory Full? Here's What to Do",
    description: "Your ChatGPT memory is full? Learn how to manage, export and backup your conversations before they're lost.",
    href: '/blog/chatgpt-memory-full',
    category: 'Troubleshooting',
    date: '2026-04-25',
  },
  {
    title: "ChatGPT Memory Full - How to Fix and Free Up Space",
    description: "Step-by-step guide to fixing ChatGPT memory full errors. Export old conversations and free up space.",
    href: '/blog/chatgpt-memory-full-fix',
    category: 'Troubleshooting',
    date: '2026-04-25',
  },
  {
    title: 'How to Backup ChatGPT Conversations',
    description: "Complete guide to backing up your ChatGPT conversations. Never lose important AI chats again.",
    href: '/blog/chatgpt-memory-backup',
    category: 'Guides',
    date: '2026-04-25',
  },
  {
    title: 'Best ChatGPT Memory Alternative',
    description: "Looking for a ChatGPT memory alternative? AI Memory lets you store unlimited conversations locally.",
    href: '/blog/chatgpt-memory-alternative',
    category: 'Comparisons',
    date: '2026-04-25',
  },
  {
    title: 'How to Search ChatGPT Conversation History',
    description: "Search through all your ChatGPT conversations with full-text search. Find any answer instantly.",
    href: '/blog/chatgpt-conversation-history-search',
    category: 'Guides',
    date: '2026-04-25',
  },
  {
    title: 'ChatGPT Context Window Limit Explained',
    description: "Understanding ChatGPT's context window limits and how they affect your conversations.",
    href: '/blog/chatgpt-context-window-limit',
    category: 'Guides',
    date: '2026-04-25',
  },
  {
    title: 'ChatGPT vs Claude - Complete Comparison 2026',
    description: "ChatGPT vs Claude: features, pricing, privacy and performance compared. Which AI assistant is better?",
    href: '/blog/chatgpt-vs-claude',
    category: 'Comparisons',
    date: '2026-04-25',
  },
  {
    title: 'How to Migrate from ChatGPT to Claude',
    description: "Moving from ChatGPT to Claude? Here's how to export your ChatGPT conversations and import them.",
    href: '/blog/chatgpt-to-claude-migration',
    category: 'Guides',
    date: '2026-04-25',
  },
  {
    title: 'AI Conversation Disappeared? How to Recover',
    description: "Your AI conversation disappeared? Learn how to recover lost ChatGPT, Claude and DeepSeek conversations.",
    href: '/blog/ai-conversation-disappeared',
    category: 'Troubleshooting',
    date: '2026-04-25',
  },
  {
    title: 'MCP Server 完全指南 - Model Context Protocol 入门到精通',
    description: 'Complete guide to MCP (Model Context Protocol). Learn how to build MCP servers and integrate with Claude Desktop, Cursor, and 100+ clients.',
    href: '/blog/mcp-server-guide',
    category: 'Technical',
    date: '2026-04-27',
  },
  {
    title: '🇨🇳 AI对话导出工具 - 免费导出ChatGPT/Claude/DeepSeek聊天记录',
    description: '最好用的AI对话导出工具。免费导出ChatGPT、Claude、DeepSeek的聊天记录，支持全文搜索和本地存储。',
    href: '/blog/ai-duihua-daochu',
    category: '中文指南',
    date: '2026-04-27',
  },
  {
    title: '🇨🇳 ChatGPT记忆管理完全指南：备份、搜索、跨平台同步',
    description: 'ChatGPT记忆满了怎么办？完整教程教你如何备份ChatGPT对话、跨平台管理AI记忆、搜索历史对话。',
    href: '/blog/chatgpt-jiyi-guanli',
    category: '中文指南',
    date: '2026-04-28',
  },
  {
    title: 'ChatGPT Memory: Complete Guide to Managing Your AI Memory (2026)',
    description: 'Everything about ChatGPT memory — how it works, its limits, how to manage settings, and better alternatives for storing your AI conversations permanently.',
    href: '/blog/chatgpt-memory',
    category: 'Guides',
    date: '2026-04-28',
  },
  {
    title: 'ChatGPT Memory Settings: How to Enable, Manage & Optimize (2026)',
    description: 'Complete guide to ChatGPT memory settings. Learn how to enable memory, manage stored facts, control what ChatGPT remembers, and optimize your AI experience.',
    href: '/blog/chatgpt-memory-settings',
    category: 'Guides',
    date: '2026-04-28',
  },
  {
    title: '🇨🇳 跨平台AI对话管理工具推荐：ChatGPT/Claude/DeepSeek一站式管理',
    description: '最好用的跨平台AI对话管理工具。一站式管理ChatGPT、Claude、DeepSeek的所有对话记录，支持全文搜索、导出备份和记忆注入。',
    href: '/blog/kuaping-tai-ai-duihua-guanli',
    category: '中文指南',
    date: '2026-04-28',
  },
];

const categories = ['All', 'Export Guides', 'Extensions', 'Troubleshooting', 'Guides', 'Comparisons', 'Technical', '中文指南'];

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'AI Memory Blog',
    description: 'Tips, guides and tutorials for managing your AI conversations',
    url: 'https://aimemory.pro/blog',
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://aimemory.pro${post.href}`,
      datePublished: post.date,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-100 py-4 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🧠</span>
              <span className="text-xl font-bold text-gray-900">AI Memory</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/features" className="text-gray-500 hover:text-gray-900">Features</Link>
              <Link href="/chrome-extension" className="text-gray-500 hover:text-gray-900">Extension</Link>
              <Link href="/blog" className="text-gray-900 font-medium">Blog</Link>
              <Link href="/pricing" className="text-gray-500 hover:text-gray-900">Pricing</Link>
            </nav>
            <Link href="/" className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
              Try Free
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Memory Blog
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Tips, guides and tutorials for managing your AI conversations. Learn how to export, search and organize chats from ChatGPT, Claude, DeepSeek and Gemini.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group block p-6 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <span className="inline-block text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-3">
                    {post.description}
                  </p>
                  <time className="block mt-4 text-xs text-gray-400">{post.date}</time>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to organize your AI conversations?</h2>
            <p className="text-gray-500 mb-6">Import your ChatGPT, Claude, DeepSeek and Gemini chats. Search everything instantly. 100% private.</p>
            <Link href="/" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">
              Get Started Free →
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 py-12 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-lg">🧠</span>
              <span className="font-semibold text-gray-900">AI Memory</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400 flex-wrap justify-center">
              <Link href="/features" className="hover:text-gray-600 transition-colors">Features</Link>
              <Link href="/chrome-extension" className="hover:text-gray-600 transition-colors">Extension</Link>
              <Link href="/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
              <Link href="/pricing" className="hover:text-gray-600 transition-colors">Pricing</Link>
              <Link href="/docs/mcp" className="hover:text-gray-600 transition-colors">MCP Server</Link>
              <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
            </div>
            <p className="text-xs text-gray-300">Your conversations, searchable forever.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
