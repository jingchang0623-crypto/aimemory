'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import FileUpload from '@/components/FileUpload';
import SearchBox from '@/components/SearchBox';
import ConversationList from '@/components/ConversationList';
import ConversationDetail from '@/components/ConversationDetail';

export default function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'upload' | 'search' | 'browse'>('upload');
  const uploadRef = useRef<HTMLDivElement>(null);

  const handleUploadComplete = () => {
    setRefreshTrigger((prev) => prev + 1);
    setActiveTab('browse');
  };

  const scrollToUpload = () => {
    uploadRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best ChatGPT history extension?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI Memory is the best free ChatGPT history extension. It lets you import, search, and organize all your ChatGPT conversations in one place. Unlike other extensions, AI Memory also supports Claude, DeepSeek, and Gemini, with 100% local storage for complete privacy."
                }
              },
              {
                "@type": "Question",
                "name": "How do I export my ChatGPT conversations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go to ChatGPT Settings → Data Controls → Export Data. Click Export and wait for the email with your download link. Then upload the ZIP file to AI Memory for instant searchable storage."
                }
              },
              {
                "@type": "Question",
                "name": "Is AI Memory free to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, AI Memory is completely free. You can upload unlimited conversations, search across all your AI chats, and use the Chrome extension at no cost. All data stays on your device."
                }
              },
              {
                "@type": "Question",
                "name": "Which AI platforms does AI Memory support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI Memory supports ChatGPT, Claude, DeepSeek, and Gemini. You can import conversations from all these platforms and search them in one unified interface."
                }
              },
              {
                "@type": "Question",
                "name": "Is my data private with AI Memory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, AI Memory is 100% private. All your data stays on your device — there are no cloud uploads, no tracking, and no data selling. Your conversations never leave your browser."
                }
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AI Memory",
            "url": "https://aimemory.pro",
            "description": "Save, search and organize your AI conversations from ChatGPT, Claude, DeepSeek and Gemini. 100% private, free forever.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://aimemory.pro/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl">🧠</span>
              <span className="text-lg font-semibold text-gray-900 tracking-tight">AI Memory</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Features</Link>
              <Link href="/chrome-extension" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Extension</Link>
              <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Blog</Link>
              <Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Pricing</Link>
              <button
                onClick={scrollToUpload}
                className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Try Free
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero — The Problem + Solution in 5 seconds */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            ChatGPT memory limit: 1,500 words
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Your AI knows things.<br />
            <span className="text-gray-400">You just can't find them.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            Hundreds of conversations. Thousands of insights. All buried in ChatGPT, Claude, and DeepSeek — with no way to search across them. <strong className="text-gray-700">Until now.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={scrollToUpload}
              className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-base"
            >
              Upload Your Chats — It's Free
            </button>
            <Link
              href="/blog/chatgpt-history-extension"
              className="px-6 py-3 border border-gray-200 text-gray-600 font-medium rounded-lg hover:border-gray-300 transition-colors text-base"
            >
              How to Export →
            </Link>
          </div>
        </div>
      </section>

      {/* The "aha moment" — Visual proof */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">What you'll see after uploading</p>
              <h2 className="text-2xl font-bold text-gray-900">Every conversation. Instantly searchable.</h2>
            </div>
            {/* Mock search UI */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-100 p-4">
                <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                  <span className="text-gray-400">🔍</span>
                  <span className="text-gray-400 text-sm">Search across 500+ conversations...</span>
                  <span className="ml-auto text-xs text-gray-300 bg-gray-200 px-2 py-0.5 rounded">⌘K</span>
                </div>
              </div>
              <div className="divide-y divide-gray-50">
                <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-1.5 py-0.5 bg-green-50 text-green-600 rounded font-medium">ChatGPT</span>
                    <span className="text-xs text-gray-400">3 days ago</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">How to implement OAuth2 with refresh tokens in Node.js</p>
                  <p className="text-xs text-gray-500 mt-1">...the <mark className="bg-yellow-100 text-gray-900 rounded px-0.5">refresh token</mark> should be stored in an httpOnly cookie, not localStorage. Here's the middleware...</p>
                </div>
                <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-1.5 py-0.5 bg-purple-50 text-purple-600 rounded font-medium">Claude</span>
                    <span className="text-xs text-gray-400">1 week ago</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">React Server Components vs client-side rendering performance</p>
                  <p className="text-xs text-gray-500 mt-1">...RSC can reduce your JavaScript bundle by <mark className="bg-yellow-100 text-gray-900 rounded px-0.5">40-60%</mark> because the server renders the component tree and sends HTML...</p>
                </div>
                <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded font-medium">DeepSeek</span>
                    <span className="text-xs text-gray-400">2 weeks ago</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">PostgreSQL query optimization for large datasets</p>
                  <p className="text-xs text-gray-500 mt-1">...create a composite index on <mark className="bg-yellow-100 text-gray-900 rounded px-0.5">(user_id, created_at DESC)</mark> — this covers 90% of your query patterns...</p>
                </div>
              </div>
              <div className="border-t border-gray-100 px-4 py-3 bg-gray-50/50 flex items-center justify-between">
                <span className="text-xs text-gray-400">3 results from 524 conversations</span>
                <span className="text-xs text-blue-600 font-medium">View all →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The real problem — Relatable scenarios */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Sound familiar?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-red-50/50 rounded-xl border border-red-100">
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="font-semibold text-gray-900 mb-2">The repeated conversation</h3>
              <p className="text-sm text-gray-600">You explained your tech stack to ChatGPT last month. Now you're starting over because you can't find that conversation.</p>
            </div>
            <div className="p-6 bg-orange-50/50 rounded-xl border border-orange-100">
              <div className="text-2xl mb-3">🪦</div>
              <h3 className="font-semibold text-gray-900 mb-2">The lost breakthrough</h3>
              <p className="text-sm text-gray-600">Claude helped you debug a complex issue. The solution was brilliant. But the conversation is buried under 200 others.</p>
            </div>
            <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-100">
              <div className="text-2xl mb-3">🏝️</div>
              <h3 className="font-semibold text-gray-900 mb-2">The platform silo</h3>
              <p className="text-sm text-gray-600">Your best insights are split across ChatGPT, Claude, and DeepSeek. No way to search them all together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works — Simple 3 steps */}
      <section className="pb-20 px-6 bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">30 seconds. Zero setup.</h2>
          <p className="text-gray-500 text-center mb-12">No account needed. No extension to install. Just upload and search.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Export from ChatGPT</h3>
              <p className="text-sm text-gray-500">Settings → Data Controls → Export Data. You'll get a ZIP file.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Drop it here</h3>
              <p className="text-sm text-gray-500">Upload the ZIP. We parse everything automatically — titles, messages, timestamps.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Search everything</h3>
              <p className="text-sm text-gray-500">Find any conversation instantly. Across all your AI platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why this matters — The insight */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm mb-6">
            💡 The insight
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            You've spent hundreds of hours teaching AI about your work.<br />
            <span className="text-gray-400">Don't let that knowledge disappear.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Every conversation you've had with ChatGPT, Claude, or DeepSeek contains insights about your projects, your code, your thinking. 
            AI Memory makes all of it searchable — so you never have to explain the same thing twice.
          </p>
        </div>
      </section>

      {/* Upload Section — The CTA */}
      <section ref={uploadRef} id="upload" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Try it now</h2>
            <p className="text-gray-500">Upload your ChatGPT, Claude, or DeepSeek export. Your data stays in your browser.</p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center gap-1 mb-8 bg-gray-100 p-1 rounded-lg w-fit mx-auto">
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'upload' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              📤 Upload
            </button>
            <button
              onClick={() => setActiveTab('search')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'search' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              🔍 Search
            </button>
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'browse' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              📚 Browse
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-2xl mx-auto">
            {activeTab === 'upload' && <FileUpload onUploadComplete={handleUploadComplete} />}
            {activeTab === 'search' && <SearchBox onSelect={setSelectedConversation} />}
            {activeTab === 'browse' && <ConversationList refreshTrigger={refreshTrigger} onSelect={setSelectedConversation} />}
          </div>

          {/* Conversation Detail Modal */}
          {selectedConversation && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                <ConversationDetail conversationId={selectedConversation} onClose={() => setSelectedConversation(null)} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400 mb-6">Works with all major AI platforms</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'ChatGPT', color: 'bg-green-50 text-green-700 border-green-100' },
              { name: 'Claude', color: 'bg-purple-50 text-purple-700 border-purple-100' },
              { name: 'DeepSeek', color: 'bg-blue-50 text-blue-700 border-blue-100' },
              { name: 'Gemini', color: 'bg-orange-50 text-orange-700 border-orange-100' },
              { name: 'ChatMemo', color: 'bg-gray-50 text-gray-700 border-gray-100' },
            ].map((p) => (
              <span key={p.name} className={`px-4 py-2 rounded-lg border text-sm font-medium ${p.color}`}>
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Promise */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-3xl mb-4">🔒</div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">100% private. Your data never leaves your browser.</h2>
          <p className="text-gray-500">
No accounts. No cloud uploads. No tracking. Your data is stored on our server in an isolated session — only you can access it with your session cookie. Delete anytime with one click.
            We literally cannot see your conversations.
          </p>
        </div>
      </section>

      {/* Blog / Resources — SEO links */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Guides & Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { title: 'ChatGPT History Extension', href: '/blog/chatgpt-history-extension' },
              { title: 'Export ChatGPT', href: '/blog/export-chatgpt' },
              { title: 'Export Claude', href: '/blog/export-claude' },
              { title: 'Export DeepSeek', href: '/blog/export-deepseek' },
              { title: 'Memory Full Fix', href: '/blog/chatgpt-memory-full' },
              { title: 'Find Old Conversations', href: '/blog/find-old-chatgpt' },
              { title: 'Conversation Too Long', href: '/blog/chatgpt-conversation-too-long' },
              { title: '🇨🇳 AI对话导出工具', href: '/blog/ai-duihua-daochu' },
              { title: '🇨🇳 ChatGPT记忆管理指南', href: '/blog/chatgpt-jiyi-guanli' },
              { title: 'Search ChatGPT History', href: '/blog/search-chatgpt-history' },
              { title: 'ChatGPT vs Claude vs DeepSeek', href: '/blog/chatgpt-vs-claude-vs-deepseek' },
              { title: 'Best AI Memory Extension 2026', href: '/blog/best-ai-memory-extension-2026' },
              { title: 'Save ChatGPT Conversations', href: '/blog/save-chatgpt-conversations' },
              { title: 'AI Chat History Manager', href: '/blog/ai-chat-history-manager' },
              { title: 'ChatGPT Memory Limit', href: '/blog/chatgpt-memory-limit' },
              { title: 'Export All ChatGPT Data', href: '/blog/export-all-chatgpt-data' },
              { title: '🇨🇳 ChatGPT数据备份指南', href: '/blog/chatgpt-shuju-beifen' },
              { title: 'Export ChatGPT to PDF', href: '/blog/export-chatgpt-to-pdf' },
              { title: 'How to Use ChatGPT Memory', href: '/blog/how-to-use-chatgpt-memory' },
              { title: 'ChatGPT Data Privacy', href: '/blog/chatgpt-data-privacy' },
              { title: 'ChatGPT History Viewer', href: '/blog/chatgpt-history-viewer' },
              { title: 'Claude Memory Guide', href: '/blog/claude-memory' },
              { title: 'Gemini Memory Guide', href: '/blog/gemini-memory' },
              { title: 'DeepSeek Memory Guide', href: '/blog/deepseek-memory' },
              { title: 'Organize AI Conversations', href: '/blog/organize-ai-conversations' },
              { title: 'ChatGPT Memory Not Working', href: '/blog/chatgpt-memory-not-working' },
              { title: 'Transfer ChatGPT to Claude', href: '/blog/transfer-chatgpt-to-claude' },
              { title: 'Perplexity AI History', href: '/blog/perplexity-ai-history' },
              { title: 'ChatGPT Canvas Guide', href: '/blog/chatgpt-canvas-guide' },
              { title: 'Export Kimi AI', href: '/blog/export-kimi-ai' },
              { title: 'Export Microsoft Copilot', href: '/blog/export-microsoft-copilot' },
              { title: 'ChatGPT Conversation Backup', href: '/blog/chatgpt-conversation-backup-guide' },
              { title: 'Claude Projects Guide', href: '/blog/claude-projects-guide' },
              { title: 'AI Memory for Developers', href: '/blog/ai-memory-for-developers' },
              { title: 'Delete ChatGPT Memory', href: '/blog/delete-chatgpt-memory' },
              { title: 'Export Grok AI', href: '/blog/export-grok-ai' },
              { title: 'ChatGPT Shared Conversations', href: '/blog/chatgpt-shared-conversations' },
              { title: 'ChatGPT vs Gemini 2026', href: '/blog/chatgpt-vs-gemini' },
              { title: 'Export & Import AI Chat History', href: '/blog/export-import-ai-chat-history' },
              { title: 'ChatGPT Team vs Plus vs Free', href: '/blog/chatgpt-team-vs-plus-vs-free' },
              { title: 'ChatGPT Team Features', href: '/blog/chatgpt-team-features' },
              { title: 'ChatGPT Custom Instructions', href: '/blog/chatgpt-custom-instructions' },
              { title: 'ChatGPT Workspace Guide', href: '/blog/chatgpt-workspace-guide' },
              { title: 'Claude Artifacts Guide', href: '/blog/claude-artifacts-guide' },
              { title: 'Delete ChatGPT History', href: '/blog/delete-chatgpt-history' },
              { title: 'ChatGPT Pro vs Plus', href: '/blog/chatgpt-pro-vs-plus' },
              { title: 'ChatGPT Projects Guide', href: '/blog/chatgpt-projects-guide' },
              { title: 'Search All AI Chats', href: '/blog/search-all-ai-chats' },
              { title: 'Claude vs ChatGPT for Coding', href: '/blog/claude-vs-chatgpt-coding' },
              { title: 'MCP Server Setup Guide', href: '/blog/mcp-server-setup-guide' },
              { title: 'Claude Memory Limit', href: '/blog/claude-memory-limit' },
              { title: 'Backup AI Conversations', href: '/blog/backup-all-ai-conversations' },
              { title: 'Claude Desktop MCP Setup', href: '/blog/claude-desktop-mcp-setup' },
              { title: 'Best MCP Tools for AI', href: '/blog/mcp-tools-for-ai' },
              { title: 'Mem0 Alternative', href: '/blog/mem0-alternative' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors py-1">
                {link.title}
              </Link>
            ))}
          </div>
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
            <Link href="/changelog" className="hover:text-gray-600 transition-colors">Changelog</Link>
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
