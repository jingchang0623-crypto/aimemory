import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'DeepSeek AI Memory — Save, Search & Manage DeepSeek Conversations | AI Memory',
  description: 'Give DeepSeek persistent memory. Save, search, and manage all your DeepSeek conversations. Free Chrome extension, web upload, and MCP server for Claude/Cursor integration.',
  keywords: ['deepseek memory', 'deepseek ai memory', 'deepseek conversation history', 'deepseek chat manager', 'deepseek export', 'deepseek search history', 'deepseek持久记忆', 'deepseek对话管理', 'deepseek聊天记录'],
  alternates: {
    canonical: 'https://aimemory.pro/deepseek-ai-memory',
  },
  openGraph: {
    title: 'DeepSeek AI Memory — Save & Search DeepSeek Conversations',
    description: 'Give DeepSeek persistent memory. Free tools to save, search, and manage your DeepSeek conversations. Works with Claude, Cursor, and 113+ MCP clients.',
    url: 'https://aimemory.pro/deepseek-ai-memory',
    type: 'website',
  },
};

export default function DeepSeekAIMemory() {
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
            DeepSeek AI Memory
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Give DeepSeek persistent memory. Save, search, and manage all your conversations.
          </p>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            DeepSeek doesn't remember your past conversations. AI Memory fixes that — 
            save unlimited DeepSeek chats, search across them instantly, and inject context 
            into new conversations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/deepseek-memory-guide"
              className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              📖 How to Setup Guide
            </a>
            <a 
              href="/chrome-extension"
              className="inline-block px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              ⬇️ Get Chrome Extension
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Full-Text Search</h3>
            <p className="text-gray-600 text-sm">
              Search across all your DeepSeek conversations instantly. Find that coding solution 
              from last month in seconds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">💉</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Memory Injection</h3>
            <p className="text-gray-600 text-sm">
              Inject relevant past conversations into DeepSeek as context. No more explaining 
              your project setup repeatedly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">🔌</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">MCP Integration</h3>
            <p className="text-gray-600 text-sm">
              Connect DeepSeek memories to Claude Desktop, Cursor, and 113+ MCP clients. 
              Cross-platform memory access.
            </p>
          </div>
        </div>

        {/* How it Works */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Three Ways to Give DeepSeek Memory
          </h2>
          
          <div className="space-y-8">
            {/* Method 1 */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🌐</span>
                <h3 className="text-xl font-semibold text-gray-900">Method 1: Web Upload</h3>
                <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Easiest</span>
              </div>
              <p className="text-gray-600 mb-4">
                Upload your DeepSeek conversations directly to our web app. No installation needed.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Go to <a href="https://chat.deepseek.com" className="text-blue-600 hover:underline">chat.deepseek.com</a> and copy your conversations</li>
                <li>Visit <a href="/" className="text-blue-600 hover:underline">aimemory.pro</a> and paste or upload JSON</li>
                <li>Search across all conversations instantly</li>
                <li>Access from any device with your session</li>
              </ol>
            </div>

            {/* Method 2 */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🔗</span>
                <h3 className="text-xl font-semibold text-gray-900">Method 2: Chrome Extension</h3>
                <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">Automatic</span>
              </div>
              <p className="text-gray-600 mb-4">
                Automatically capture DeepSeek conversations as you chat. No manual exports needed.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Download AI Memory Chrome Extension</li>
                <li>Install in Chrome/Edge/Brave (Developer mode)</li>
                <li>Open chat.deepseek.com — conversations captured automatically</li>
                <li>Search and browse saved chats in the extension popup</li>
              </ol>
            </div>

            {/* Method 3 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚡</span>
                <h3 className="text-xl font-semibold text-gray-900">Method 3: MCP Server</h3>
                <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">Most Powerful</span>
              </div>
              <p className="text-gray-600 mb-4">
                Connect DeepSeek memories to Claude, Cursor, and 113+ MCP clients for cross-platform access.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Install: <code className="bg-gray-100 px-2 py-1 rounded">pip install aimemory-mcp-server</code></li>
                <li>Upload DeepSeek conversations to aimemory.pro</li>
                <li>Configure MCP in Claude Desktop, Cursor, or any MCP client</li>
                <li>Ask Claude/Cursor to "search my DeepSeek conversations about [topic]"</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Platform Support */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Works with All Major AI Platforms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              { name: 'DeepSeek', status: '✅ Supported', url: 'chat.deepseek.com' },
              { name: 'ChatGPT', status: '✅ Supported', url: 'chatgpt.com' },
              { name: 'Claude', status: '✅ Supported', url: 'claude.ai' },
              { name: 'Gemini', status: '✅ Supported', url: 'gemini.google.com' },
              { name: 'Kimi', status: '✅ Supported', url: 'kimi.moonshot.cn' },
            ].map((platform) => (
              <div key={platform.name} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-900 mb-1">{platform.name}</div>
                <div className="text-sm text-green-600 mb-2">{platform.status}</div>
                <div className="text-xs text-gray-500">{platform.url}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does DeepSeek have built-in memory?</h3>
              <p className="text-gray-700">
                DeepSeek does not have persistent memory across conversations. Each chat starts fresh. 
                AI Memory solves this by letting you save, search, and reference past DeepSeek conversations 
                from any device.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is AI Memory free for DeepSeek?</h3>
              <p className="text-gray-700">
                Yes! All core features are free forever: unlimited DeepSeek conversation imports, 
                full-text search, Chrome extension, MCP server, and memory injection. No hidden costs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I search DeepSeek from Claude?</h3>
              <p className="text-gray-700">
                Absolutely! Install AI Memory's MCP server, upload your DeepSeek conversations, then 
                configure Claude Desktop. You can ask Claude to "search my DeepSeek conversations about 
                Python optimization" and get instant results.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data private?</h3>
              <p className="text-gray-700">
                Yes. Your data is stored in an isolated session on our server. Only you can access it 
                with your session cookie. No tracking, no data selling. You can export or delete 
                everything with one click.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Give DeepSeek Persistent Memory?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who never lose an AI conversation again.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/"
              className="inline-block px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              📤 Upload Conversations
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
