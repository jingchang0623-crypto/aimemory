import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Conversation Backup — Save & Protect Your AI Chats | AI Memory',
  description: 'Never lose an AI conversation again. Free tools to backup ChatGPT, Claude, DeepSeek, Gemini, and Kimi conversations. Automatic backup with Chrome extension or manual export.',
  keywords: ['ai conversation backup', 'backup ai conversations', 'chatgpt backup tool', 'claude conversation backup', 'save ai chats', 'ai chat backup', 'AI对话备份'],
  alternates: {
    canonical: 'https://aimemory.pro/ai-conversation-backup',
  },
  openGraph: {
    title: 'AI Conversation Backup — Save & Protect Your AI Chats',
    description: 'Never lose an AI conversation again. Free backup tools for ChatGPT, Claude, DeepSeek, Gemini, and Kimi.',
    url: 'https://aimemory.pro/ai-conversation-backup',
    type: 'website',
  },
};

export default function AIConversationBackup() {
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
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Conversation Backup
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Never lose an AI conversation again. Free, automatic backup for all your AI chats.
          </p>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Your AI conversations contain valuable insights, code solutions, and research.
            Don't let them disappear. Backup ChatGPT, Claude, DeepSeek, Gemini, and Kimi automatically.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/chrome-extension"
              className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              ⬇️ Download Free Extension
            </a>
            <a
              href="/"
              className="inline-block px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              📤 Upload & Backup Now
            </a>
          </div>
        </div>

        {/* Why Backup */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why You Need AI Conversation Backup
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <span className="text-2xl">🚨</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Conversations Disappear</h3>
                <p className="text-gray-600 text-sm">
                  ChatGPT, Claude, and other AI platforms can lose conversations due to bugs,
                  account issues, or accidental deletion. Once gone, they're hard to recover.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">💎</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Valuable Insights</h3>
                <p className="text-gray-600 text-sm">
                  Your AI conversations contain coding solutions, research findings, and creative
                  ideas. These insights are worth preserving.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Context Switching</h3>
                <p className="text-gray-600 text-sm">
                  When you switch between ChatGPT, Claude, DeepSeek, you lose context.
                  Backup unifies all conversations in one searchable place.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Instant Search</h3>
                <p className="text-gray-600 text-sm">
                  With proper backup, you can instantly search across ALL your AI conversations
                  — no more scrolling through hundreds of chats.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Backup Methods */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            3 Ways to Backup AI Conversations
          </h2>

          {/* Method 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🔌</span>
              <h3 className="text-xl font-semibold text-gray-900">
                Method 1: Automatic Backup (Recommended)
              </h3>
              <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Easiest</span>
            </div>
            <p className="text-gray-600 mb-4">
              The AI Memory Chrome Extension automatically backs up every conversation as you chat.
              No manual work, no forgetting.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
              <li>Download the free AI Memory Chrome Extension</li>
              <li>Install in Chrome/Edge/Brave (Developer mode → Load unpacked)</li>
              <li>Open ChatGPT, Claude, DeepSeek, Gemini, or Kimi — conversations auto-save</li>
              <li>Search across all backed-up conversations from the extension or web app</li>
            </ol>
            <a
              href="/chrome-extension"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ⬇️ Get Free Extension
            </a>
          </div>

          {/* Method 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🌐</span>
              <h3 className="text-xl font-semibold text-gray-900">
                Method 2: Web Upload (No Installation)
              </h3>
              <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">Quick</span>
            </div>
            <p className="text-gray-600 mb-4">
              Export your AI conversations as JSON/ZIP and upload to AI Memory for instant backup and search.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
              <li>Go to your AI platform's Settings → Data Controls → Export Data</li>
              <li>Download the ZIP file when you receive the email</li>
              <li>Visit aimemory.pro and upload the ZIP/JSON file</li>
              <li>All conversations are now backed up and searchable</li>
            </ol>
            <a
              href="/"
              className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              📤 Upload Now
            </a>
          </div>

          {/* Method 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚡</span>
              <h3 className="text-xl font-semibold text-gray-900">
                Method 3: MCP Server (For Developers)
              </h3>
              <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">Powerful</span>
            </div>
            <p className="text-gray-600 mb-4">
              Install AI Memory MCP Server to backup and search conversations directly from
              Claude Desktop, Cursor, and 113+ MCP clients.
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
              <p className="text-green-400"># Install MCP server</p>
              <p>pip install git+https://github.com/jingchang0623-crypto/aimemory.git#subdirectory=mcp-server</p>
            </div>
            <a
              href="/mcp-server"
              className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              ⚡ Setup MCP Server
            </a>
          </div>
        </div>

        {/* Platform Support */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Supports All Major AI Platforms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              { name: 'ChatGPT', url: 'chatgpt.com' },
              { name: 'Claude', url: 'claude.ai' },
              { name: 'DeepSeek', url: 'chat.deepseek.com' },
              { name: 'Gemini', url: 'gemini.google.com' },
              { name: 'Kimi', url: 'kimi.moonshot.cn' },
            ].map((platform) => (
              <div key={platform.name} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-900 mb-1">{platform.name}</div>
                <div className="text-sm text-green-600 mb-2">✅ Supported</div>
                <div className="text-xs text-gray-500">{platform.url}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is AI conversation backup free?</h3>
              <p className="text-gray-700">
                Yes! AI Memory is completely free. Unlimited conversation backups, full-text search,
                Chrome extension, and MCP server — all free forever with no hidden costs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I backup my AI conversations?</h3>
              <p className="text-gray-700">
                With the AI Memory Chrome Extension, backup is automatic — no schedule needed.
                For manual exports, we recommend monthly backups via Settings → Data Controls → Export Data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I backup conversations from multiple AI platforms?</h3>
              <p className="text-gray-700">
                Yes! AI Memory supports ChatGPT, Claude, DeepSeek, Gemini, and Kimi.
                All conversations are unified in one searchable database, regardless of which
                platform you used.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my backed-up data private?</h3>
              <p className="text-gray-700">
                Yes. Your data is stored in an isolated session on our server, accessible only
                with your session cookie. No tracking, no data selling. You can export or
                delete everything with one click. The MCP Server option keeps data 100% local.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Start Backing Up Your AI Conversations Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who never lose an AI conversation again.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/chrome-extension"
              className="inline-block px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              ⬇️ Get Free Extension
            </a>
            <a
              href="/mcp-server"
              className="inline-block px-8 py-4 bg-blue-800 text-white text-lg font-semibold rounded-lg hover:bg-blue-900 transition-colors"
            >
              ⚡ Setup MCP Server
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
