import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Memory Chrome Extension - Auto-Save ChatGPT, Claude, DeepSeek & Gemini',
  description: 'Free Chrome extension that automatically saves your ChatGPT, Claude, DeepSeek, and Gemini conversations. Full-text search, 100% private, no account required. Download now.',
  keywords: ['ChatGPT Chrome extension', 'Claude extension', 'DeepSeek extension', 'Gemini extension', 'Kimi extension', 'AI conversation saver', 'ChatGPT history extension', 'save ChatGPT chats', 'AI memory extension'],
  alternates: {
    canonical: 'https://aimemory.pro/chrome-extension',
  },
  openGraph: {
    title: 'AI Memory Chrome Extension - Auto-Save AI Conversations',
    description: 'Free extension that automatically saves your ChatGPT, Claude, DeepSeek, and Gemini conversations. Never lose an AI chat again.',
    url: 'https://aimemory.pro/chrome-extension',
    type: 'website',
  },
};

export default function ChromeExtension() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Memory Chrome Extension
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Automatically save your AI conversations from ChatGPT, Claude, DeepSeek, and Gemini
          </p>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Never lose an important AI conversation again. Our free extension captures every chat automatically — 
            no manual exports, no copy-paste, no lost insights.
          </p>
          <a 
            href="/ai-memory-extension.zip"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors mb-4"
          >
            ⬇️ Download Extension (v1.0)
          </a>
          <p className="text-sm text-gray-400">
            Works with Chrome, Edge, Brave, and other Chromium browsers
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-center">
          <div className="px-6 py-3 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">4</div>
            <div className="text-sm text-gray-500">Auto-Capture Platforms</div>
          </div>
          <div className="px-6 py-3 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-gray-500">Private & Local</div>
          </div>
          <div className="px-6 py-3 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">Free</div>
            <div className="text-sm text-gray-500">Forever</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4">💾</div>
            <h3 className="font-semibold text-lg mb-2">Auto-Save Conversations</h3>
            <p className="text-sm text-gray-600">
              Automatically captures conversations as you chat — no manual action needed. Every message saved in real-time.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="font-semibold text-lg mb-2">Full-Text Search</h3>
            <p className="text-sm text-gray-600">
              Search across all saved conversations instantly. Find that one solution from months ago in seconds.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-semibold text-lg mb-2">100% Private Storage</h3>
            <p className="text-sm text-gray-600">
              All data stored locally in your browser session. No accounts, no cloud sync, no tracking. Your data stays yours.
            </p>
          </div>
        </div>

        {/* Supported Platforms */}
        <section className="bg-white rounded-xl border border-gray-200 p-8 mb-12 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Supported AI Platforms</h2>
          <p className="text-gray-600 mb-6">
            One extension works across all major AI chat platforms — your conversations unified in one searchable place.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="font-medium text-lg">ChatGPT</div>
              <div className="text-sm text-green-600 mt-1">✅ Supported</div>
              <div className="text-xs text-gray-400 mt-1">chatgpt.com</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="font-medium text-lg">Claude</div>
              <div className="text-sm text-green-600 mt-1">✅ Supported</div>
              <div className="text-xs text-gray-400 mt-1">claude.ai</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="font-medium text-lg">DeepSeek</div>
              <div className="text-sm text-green-600 mt-1">✅ Supported</div>
              <div className="text-xs text-gray-400 mt-1">chat.deepseek.com</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="font-medium text-lg">Gemini</div>
              <div className="text-sm text-green-600 mt-1">✅ Supported</div>
              <div className="text-xs text-gray-400 mt-1">gemini.google.com</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="font-medium text-lg">Kimi</div>
              <div className="text-sm text-yellow-600 mt-1">⏳ Coming Soon</div>
              <div className="text-xs text-gray-400 mt-1">kimi.moonshot.cn</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4 text-center">
            Kimi auto-capture coming soon. Kimi conversations can be uploaded via the <Link href="/" className="text-blue-500 hover:underline">web app</Link> right now. Also coming: Microsoft Copilot, Perplexity.
          </p>
        </section>

        {/* Why Use Extension */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Use the Chrome Extension?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <div className="text-2xl">⚡</div>
              <div>
                <h3 className="font-semibold mb-1">Zero Manual Work</h3>
                <p className="text-sm text-gray-600">
                  No more exporting ZIP files or copying text. The extension captures everything automatically while you chat.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">🔄</div>
              <div>
                <h3 className="font-semibold mb-1">Cross-Platform Memory</h3>
                <p className="text-sm text-gray-600">
                  Your ChatGPT insights are searchable when using Claude. Your DeepSeek solutions available in Gemini. One memory, all platforms.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">🎯</div>
              <div>
                <h3 className="font-semibold mb-1">Find Past Solutions Fast</h3>
                <p className="text-sm text-gray-600">
                  "How did I fix that React error last month?" — Search finds it instantly, no matter which AI you used.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">📊</div>
              <div>
                <h3 className="font-semibold mb-1">Track Your AI Usage</h3>
                <p className="text-sm text-gray-600">
                  See conversation counts per platform, most active topics, and your AI usage patterns over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Instructions */}
        <section className="bg-white rounded-xl border border-gray-200 p-8 mb-12 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Installation Instructions</h2>
          <p className="text-gray-600 mb-6">
            Install in 4 simple steps. Takes less than 30 seconds.
          </p>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">1</span>
              <div>
                <p className="font-medium">Download the extension</p>
                <p className="text-sm text-gray-600">Click the download button above to get the ZIP file</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">2</span>
              <div>
                <p className="font-medium">Extract the ZIP file</p>
                <p className="text-sm text-gray-600">Unzip to a folder on your computer (right-click → Extract All)</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">3</span>
              <div>
                <p className="font-medium">Open Chrome Extensions</p>
                <p className="text-sm text-gray-600">Go to <code className="bg-gray-100 px-2 py-0.5 rounded">chrome://extensions</code> and enable "Developer mode" (toggle in top-right)</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">4</span>
              <div>
                <p className="font-medium">Load unpacked extension</p>
                <p className="text-sm text-gray-600">Click "Load unpacked" button and select the extracted folder</p>
              </div>
            </li>
          </ol>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-blue-700">
              <strong>💡 Tip:</strong> After installation, pin the extension to your toolbar for quick access. Click the puzzle icon in Chrome, then pin "AI Memory".
            </p>
          </div>
        </section>

        {/* MCP Integration CTA */}
        <section className="bg-white rounded-xl border border-gray-200 p-8 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">🔌 Connect to MCP Clients</h2>
              <p className="text-gray-600 mb-4">
                Want your AI assistant to access your conversation history? Our MCP Server lets Claude Desktop, Cursor, and 113+ other AI tools search your saved memories directly.
              </p>
              <Link 
                href="/mcp-server" 
                className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Learn About MCP Server →
              </Link>
            </div>
            <div className="flex-shrink-0 text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">113+</div>
              <div className="text-sm text-purple-500">MCP Clients</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-xl border border-gray-200 p-8 mb-12 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Is the extension really free?</h3>
              <p className="text-sm text-gray-600">
                Yes, completely free with no limits. No account required, no subscription, no hidden fees. Use it forever at no cost.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Where is my data stored?</h3>
              <p className="text-sm text-gray-600">
                All conversations are stored locally in your browser&apos;s session storage. Your data never leaves your device. No cloud servers, no external databases. You own your data completely.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Does it work on Edge or Brave?</h3>
              <p className="text-sm text-gray-600">
                Yes! Any Chromium-based browser works — Edge, Brave, Opera, Vivaldi, and others. The same installation steps apply.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Can I export my saved conversations?</h3>
              <p className="text-sm text-gray-600">
                Absolutely. Use the web app at <Link href="/" className="text-blue-600 underline">aimemory.pro</Link> to upload and search your conversations. Export anytime in JSON or text format.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">What if I use multiple AI platforms?</h3>
              <p className="text-sm text-gray-600">
                That&apos;s the best use case! The extension saves from all supported platforms into one unified memory. Search across ChatGPT, Claude, DeepSeek, and Gemini together — find solutions no matter which AI you used.
              </p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/blog/chatgpt-history-extension" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="font-medium text-blue-600">ChatGPT History Extension Guide</div>
              <div className="text-sm text-gray-500 mt-1">Complete guide to managing ChatGPT conversations</div>
            </Link>
            <Link href="/blog/export-chatgpt" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="font-medium text-blue-600">How to Export ChatGPT</div>
              <div className="text-sm text-gray-500 mt-1">Step-by-step export instructions</div>
            </Link>
            <Link href="/features" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="font-medium text-blue-600">AI Memory Features</div>
              <div className="text-sm text-gray-500 mt-1">See all features and capabilities</div>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-4">Start Saving Your AI Conversations Today</h2>
          <p className="mb-6 opacity-90">
            Download the extension and never lose an important AI conversation again.
          </p>
          <a 
            href="/ai-memory-extension.zip"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            ⬇️ Download Free Extension
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}