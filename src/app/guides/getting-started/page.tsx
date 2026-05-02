import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Getting Started with AI Memory — Complete Setup Guide (2026)',
  description: 'Step-by-step guide to set up AI Memory: upload conversations, install the Chrome extension, connect via MCP, and search across all your AI chats. Works with ChatGPT, Claude, DeepSeek, and Gemini.',
  keywords: ['how to use ai memory', 'ai memory setup guide', 'get started with ai memory', 'ai memory tutorial', 'chatgpt memory setup', 'ai conversation manager setup'],
  openGraph: {
    title: 'Getting Started with AI Memory — Complete Setup Guide',
    description: 'Step-by-step guide to set up AI Memory: upload conversations, install the Chrome extension, connect via MCP, and search across all your AI chats.',
    url: 'https://aimemory.pro/guides/getting-started',
    type: 'article',
  },
  alternates: {
    canonical: 'https://aimemory.pro/guides/getting-started',
  },
};

export default function GettingStartedGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I get started with AI Memory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting started is easy: (1) Go to aimemory.pro, (2) Upload your ChatGPT or Claude export ZIP file, (3) Start searching your conversations. For automatic capture, install the Chrome extension. For AI assistant integration, set up the MCP server."
                }
              },
              {
                "@type": "Question",
                "name": "How do I export my ChatGPT conversations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go to ChatGPT Settings → Data Controls → Export Data. Click 'Export' and wait for the email. Download the ZIP file and upload it to AI Memory. The export includes all your conversations in JSON format."
                }
              },
              {
                "@type": "Question",
                "name": "Is AI Memory free to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, AI Memory is completely free for local use. You can upload unlimited conversations, search across all your AI chats, and use the Chrome extension at no cost. All data stays on your device. A Pro plan with cloud sync is planned for $6.9/month."
                }
              },
              {
                "@type": "Question",
                "name": "Which AI platforms does AI Memory support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI Memory supports ChatGPT, Claude, DeepSeek, Gemini, Kimi, Microsoft Copilot, Perplexity, and Grok. The Chrome extension automatically captures conversations from ChatGPT, Claude, DeepSeek, and Gemini."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to install anything to use AI Memory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No installation is required for the basic web version — just visit aimemory.pro and upload your conversation exports. For automatic conversation capture, install the Chrome extension. For AI assistant integration, set up the MCP server."
                }
              },
              {
                "@type": "Question",
                "name": "Is my data private with AI Memory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. AI Memory stores all data locally on your device using SQLite. No conversation data is sent to external servers. The Chrome extension processes everything locally. You have full control over your data at all times."
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
            "@type": "Article",
            "headline": "Getting Started with AI Memory — Complete Setup Guide",
            "description": "Step-by-step guide to set up AI Memory: upload conversations, install the Chrome extension, connect via MCP, and search across all your AI chats.",
            "author": { "@type": "Organization", "name": "AI Memory" },
            "publisher": { "@type": "Organization", "name": "AI Memory" },
            "datePublished": "2026-05-02",
            "dateModified": "2026-05-02",
            "url": "https://aimemory.pro/guides/getting-started"
          })
        }}
      />

      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">🧠 AI Memory</Link>
          <p className="text-gray-600 mt-1">Your AI conversations, organized and searchable</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/guides/getting-started" className="hover:text-gray-700">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Getting Started</span>
        </nav>

        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">Guide</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started with AI Memory</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to set up AI Memory in under 5 minutes. Upload conversations, install the extension, and start searching.
          </p>
        </section>

        {/* Table of Contents */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 mb-12">
          <h2 className="font-bold text-gray-900 mb-4">📋 Table of Contents</h2>
          <ol className="space-y-2 text-gray-600">
            <li><a href="#prerequisites" className="text-blue-600 hover:underline">1. Prerequisites</a></li>
            <li><a href="#upload" className="text-blue-600 hover:underline">2. Upload Your Conversations</a></li>
            <li><a href="#search" className="text-blue-600 hover:underline">3. Search & Browse</a></li>
            <li><a href="#extension" className="text-blue-600 hover:underline">4. Install the Chrome Extension</a></li>
            <li><a href="#mcp" className="text-blue-600 hover:underline">5. Connect via MCP Server</a></li>
            <li><a href="#tips" className="text-blue-600 hover:underline">6. Tips & Best Practices</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">7. FAQ</a></li>
          </ol>
        </section>

        {/* Step 1: Prerequisites */}
        <section id="prerequisites" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 1: Prerequisites</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-gray-600 mb-4">Before you start, make sure you have:</p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <span><strong>A modern web browser</strong> — Chrome, Firefox, Safari, or Edge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <span><strong>An AI conversation export</strong> — from ChatGPT, Claude, DeepSeek, or any supported platform</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <span><strong>Chrome browser</strong> (optional) — for the automatic capture extension</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <span><strong>Claude Desktop or Cursor</strong> (optional) — for MCP server integration</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Step 2: Upload */}
        <section id="upload" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 2: Upload Your Conversations</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">From ChatGPT</h3>
            <ol className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Open ChatGPT and go to <strong>Settings → Data Controls → Export Data</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Click <strong>&quot;Export&quot;</strong> and confirm. You&apos;ll receive an email with a download link.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Download the ZIP file (usually arrives within 1-5 minutes)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <span>Go to <Link href="/" className="text-blue-600 hover:underline">aimemory.pro</Link> and drag the ZIP file onto the upload area</span>
              </li>
            </ol>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">From Claude</h3>
            <ol className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Open Claude and go to <strong>Settings → Privacy → Export Data</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Request your data export and download the JSON file</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Upload the file to AI Memory — it auto-detects the format</span>
              </li>
            </ol>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">From DeepSeek</h3>
            <ol className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Use the <Link href="/blog/export-deepseek" className="text-blue-600 hover:underline">AI Memory Chrome Extension</Link> to automatically capture DeepSeek conversations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Or manually export from DeepSeek settings and upload the JSON file</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Step 3: Search */}
        <section id="search" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 3: Search & Browse</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-gray-600 mb-6">
              Once your conversations are uploaded, AI Memory indexes them with <strong>SQLite FTS5</strong> full-text search.
              You can search across all your conversations instantly.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Features</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">🔍 Full-Text Search</h4>
                <p className="text-sm text-gray-600">Search across all conversations with instant results. Supports natural language queries.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">🏷️ Platform Filtering</h4>
                <p className="text-sm text-gray-600">Filter results by platform (ChatGPT, Claude, DeepSeek, Gemini).</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">📊 Statistics Dashboard</h4>
                <p className="text-sm text-gray-600">View conversation stats: total count, platform breakdown, message trends.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">📤 Export</h4>
                <p className="text-sm text-gray-600">Export conversations in Markdown, JSON, or PDF format.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Syntax</h3>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm">
              <pre>{`Simple search:     python tutorial
AND search:        python AND machine learning
OR search:         react OR vue
Phrase search:     "exact phrase match"
Proximity:         NEAR/3(word1 word2)
Prefix:            prog*  (matches "program", "programming")`}</pre>
            </div>
          </div>
        </section>

        {/* Step 4: Chrome Extension */}
        <section id="extension" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 4: Install the Chrome Extension</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-gray-600 mb-6">
              The Chrome Extension automatically captures conversations as you chat with AI assistants.
              No manual export needed — conversations are saved in real-time.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Supported Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {['ChatGPT', 'Claude', 'DeepSeek', 'Gemini', 'Kimi'].map((platform) => (
                <div key={platform} className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="font-medium text-gray-900">{platform}</span>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Installation Steps</h3>
            <ol className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Download the extension ZIP from <Link href="/chrome-extension" className="text-blue-600 hover:underline">the Chrome Extension page</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Open Chrome and go to <code className="bg-gray-100 px-2 py-1 rounded">chrome://extensions</code></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Enable <strong>&quot;Developer mode&quot;</strong> (toggle in top-right corner)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <span>Drag the ZIP file onto the extensions page, or click &quot;Load unpacked&quot; and select the extracted folder</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                <span>Start chatting with ChatGPT, Claude, DeepSeek, or Gemini — conversations are captured automatically</span>
              </li>
            </ol>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>💡 Tip:</strong> The extension stores data locally in IndexedDB. Your conversations never leave your device.
                Memory injection is supported — the extension can inject relevant memories into your AI conversations for better context.
              </p>
            </div>
          </div>
        </section>

        {/* Step 5: MCP Server */}
        <section id="mcp" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 5: Connect via MCP Server</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-gray-600 mb-6">
              The <strong>Model Context Protocol (MCP)</strong> server lets AI assistants like Claude Desktop and Cursor
              search your conversation history directly. It&apos;s the most powerful way to use AI Memory.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Setup: Claude Desktop</h3>
            <p className="text-gray-600 mb-4">
              Add this to your Claude Desktop config file:
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Config location:</strong><br />
              macOS: <code className="bg-gray-100 px-2 py-1 rounded">~/Library/Application Support/Claude/claude_desktop_config.json</code><br />
              Windows: <code className="bg-gray-100 px-2 py-1 rounded">%APPDATA%\Claude\claude_desktop_config.json</code>
            </p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm mb-6">
{`{
  "mcpServers": {
    "ai-memory": {
      "url": "https://aimemory.pro/api/mcp",
      "transport": "http"
    }
  }
}`}
            </pre>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Setup: Cursor</h3>
            <p className="text-gray-600 mb-4">
              Add to <code className="bg-gray-100 px-2 py-1 rounded">.cursor/mcp.json</code> in your project root:
            </p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm mb-6">
{`{
  "mcpServers": {
    "ai-memory": {
      "url": "https://aimemory.pro/api/mcp",
      "transport": "http"
    }
  }
}`}
            </pre>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800">
                <strong>✅ That&apos;s it!</strong> After restarting Claude Desktop or Cursor, your AI assistant can search
                your conversation history. Try asking: &quot;Search my memory for discussions about React hooks&quot;
              </p>
            </div>

            <p className="text-gray-600 mt-4">
              For detailed MCP setup including all supported clients, see the{' '}
              <Link href="/guides/mcp-quickstart" className="text-blue-600 hover:underline">MCP Quickstart Guide</Link>.
            </p>
          </div>
        </section>

        {/* Step 6: Tips */}
        <section id="tips" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 6: Tips & Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">📅 Regular Exports</h3>
              <p className="text-sm text-gray-600">Export your ChatGPT conversations monthly. OpenAI only keeps 90 days of history by default.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">🔌 Use the Extension</h3>
              <p className="text-sm text-gray-600">The Chrome extension captures conversations in real-time — no need to remember to export.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">🔗 Connect MCP</h3>
              <p className="text-sm text-gray-600">MCP integration turns your conversation history into a knowledge base your AI assistant can access.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">🔍 Use Advanced Search</h3>
              <p className="text-sm text-gray-600">Use FTS5 syntax for precise searches: phrase matching, proximity search, and boolean operators.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How much does AI Memory cost?", a: "AI Memory is completely free for local use. You can upload unlimited conversations, search across all your AI chats, and use the Chrome extension at no cost. A Pro plan with cloud sync is planned for $6.9/month." },
              { q: "Is my data sent to external servers?", a: "No. All data is stored locally in your browser using SQLite. The Chrome extension processes everything on your device. No conversation data ever leaves your machine." },
              { q: "Can I use AI Memory offline?", a: "Yes! The web version works entirely in your browser after the initial page load. The Chrome extension works offline too — it stores conversations locally and syncs when you're back online." },
              { q: "What file formats are supported?", a: "AI Memory supports ChatGPT ZIP exports, Claude JSON exports, DeepSeek exports, and generic JSON conversation formats. The system auto-detects the format." },
              { q: "How do I delete my data?", a: "Go to the Browse tab and delete individual conversations, or clear all data from the Settings page. Since everything is local, deletion is permanent and instant." },
              { q: "Can I export my data from AI Memory?", a: "Yes. You can export individual conversations or your entire database in Markdown, JSON, or PDF format from the Export tab." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6">Upload your first conversation and experience searchable AI memory.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Upload Conversations →
            </Link>
            <Link href="/features" className="inline-block bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
              View All Features
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
