'use client';

import { useState } from 'react';
import Link from 'next/link';
import FileUpload from '@/components/FileUpload';
import SearchBox from '@/components/SearchBox';
import ConversationList from '@/components/ConversationList';
import ConversationDetail from '@/components/ConversationDetail';

export default function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'upload' | 'search' | 'browse'>('upload');

  const handleUploadComplete = () => {
    setRefreshTrigger((prev) => prev + 1);
    setActiveTab('browse');
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                🧠 AI Memory
              </h1>
              <p className="text-gray-600 mt-1">
                Your AI conversations, organized and searchable
              </p>
            </div>
            <nav className="flex gap-4">
              <Link href="/chrome-extension" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                Chrome Extension
              </Link>
              <button
                onClick={() => setActiveTab('upload')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'upload'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Upload
              </button>
              <button
                onClick={() => setActiveTab('search')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'search'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Search
              </button>
              <button
                onClick={() => setActiveTab('browse')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'browse'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Browse
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Pain Points */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Tired of Losing Your AI Conversations?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            ChatGPT forgets. Claude starts fresh. Your valuable insights disappear.
            <br />
            <strong>AI Memory keeps everything searchable forever.</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">😤</div>
              <p className="text-sm">&quot;ChatGPT conversation too long and it forgot my instructions&quot;</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">😰</div>
              <p className="text-sm">&quot;I can&apos;t find that important conversation from last week&quot;</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">😩</div>
              <p className="text-sm">&quot;I keep re-explaining the same context to different AIs&quot;</p>
            </div>
          </div>
          <label className="inline-block px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
            Upload Your First Export (Free)
            <input
              type="file"
              accept=".json,.txt,.zip,.md"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  // Trigger upload
                  setActiveTab('upload');
                }
              }}
              className="hidden"
            />
          </label>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-3xl mb-3">📤</div>
            <h3 className="font-semibold text-lg mb-2">Import Everything</h3>
            <p className="text-gray-600 text-sm">
              Upload exports from ChatGPT, Claude, DeepSeek, Gemini. 
              Supports JSON, TXT, and ZIP files.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-semibold text-lg mb-2">Full-Text Search</h3>
            <p className="text-gray-600 text-sm">
              Search across ALL your conversations by content, not just titles. 
              Find any discussion instantly.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-lg mb-2">100% Private</h3>
            <p className="text-gray-600 text-sm">
              Your data stays on your device. No cloud uploads, no tracking, 
              no data selling. Ever.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === 'upload' && (
            <FileUpload onUploadComplete={handleUploadComplete} />
          )}
          {activeTab === 'search' && (
            <SearchBox onSelect={setSelectedConversation} />
          )}
          {activeTab === 'browse' && (
            <ConversationList
              refreshTrigger={refreshTrigger}
              onSelect={setSelectedConversation}
            />
          )}
        </div>

        {/* Conversation Detail Modal */}
        {selectedConversation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <ConversationDetail
                conversationId={selectedConversation}
                onClose={() => setSelectedConversation(null)}
              />
            </div>
          </div>
        )}

        {/* How It Works */}
        <section className="mt-12 p-8 bg-white rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="font-semibold mb-2">Export Your Chats</h3>
              <p className="text-sm text-gray-600">
                Go to ChatGPT Settings → Data Controls → Export Data. 
                Or Claude Settings → Privacy → Export Data.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="font-semibold mb-2">Upload Here</h3>
              <p className="text-sm text-gray-600">
                Drop your export file (ZIP or JSON) and we&apos;ll 
                automatically parse and organize everything.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="font-semibold mb-2">Search & Browse</h3>
              <p className="text-sm text-gray-600">
                Find any conversation instantly with full-text search. 
                Never lose valuable AI insights again.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Links */}
        <section className="mt-12 p-8 bg-gray-50 rounded-xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Guides & Resources
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/blog/chatgpt-history-extension" className="text-blue-600 hover:underline text-sm font-medium">
              ChatGPT History Extension
            </Link>
            <Link href="/blog/chatgpt-export-extension" className="text-blue-600 hover:underline text-sm font-medium">
              ChatGPT Export Extension
            </Link>
            <Link href="/blog/export-chatgpt" className="text-blue-600 hover:underline text-sm">
              Export ChatGPT
            </Link>
            <Link href="/blog/export-claude" className="text-blue-600 hover:underline text-sm">
              Export Claude
            </Link>
            <Link href="/blog/chatgpt-conversation-too-long" className="text-blue-600 hover:underline text-sm">
              Conversation Too Long
            </Link>
            <Link href="/blog/chatgpt-not-saving" className="text-blue-600 hover:underline text-sm">
              Not Saving Chats
            </Link>
            <Link href="/blog/find-old-chatgpt" className="text-blue-600 hover:underline text-sm">
              Find Old Conversations
            </Link>
            <Link href="/blog/chatgpt-memory-full" className="text-blue-600 hover:underline text-sm">
              Memory Full
            </Link>
            <Link href="/blog/export-deepseek" className="text-blue-600 hover:underline text-sm">
              Export DeepSeek
            </Link>
            <Link href="/blog/export-gemini" className="text-blue-600 hover:underline text-sm">
              Export Gemini
            </Link>
            <Link href="/blog/ai-duihua-daochu" className="text-blue-600 hover:underline text-sm">
              🇨🇳 AI对话导出工具
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-500">
          <p>AI Memory — Your conversations, preserved forever</p>
          <div className="flex justify-center gap-6 mt-3 text-sm">
            <Link href="/features" className="hover:text-gray-700">Features</Link>
            <Link href="/pricing" className="hover:text-gray-700">Pricing</Link>
            <Link href="/docs/mcp" className="hover:text-gray-700">MCP Server</Link>
            <Link href="/chrome-extension" className="hover:text-gray-700">Chrome Extension</Link>
            <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-700">Terms</Link>
          </div>
          <p className="text-sm mt-2">
            🔒 100% private • Your data stays on your device
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
