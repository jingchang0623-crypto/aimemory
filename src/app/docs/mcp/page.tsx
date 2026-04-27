import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Memory MCP Server - Connect to Claude Desktop, Cursor & More',
  description: 'Set up AI Memory as an MCP server for Claude Desktop, Cursor, Windsurf, and other AI tools. Search your conversation history directly from your AI assistant.',
  keywords: ['MCP server', 'Model Context Protocol', 'Claude Desktop MCP', 'Cursor MCP', 'AI memory server', 'chatgpt history MCP'],
};

export default function MCPDocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">🧠 AI Memory</Link>
          <p className="text-gray-600 mt-1">Your AI conversations, organized and searchable</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">MCP v1.0</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Memory MCP Server</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect your AI assistants to your conversation history via the Model Context Protocol.
            Let Claude, Cursor, and other AI tools search your past conversations.
          </p>
        </section>

        {/* What is MCP */}
        <section className="mb-16 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is MCP?</h2>
          <p className="text-gray-600 mb-4">
            The <strong>Model Context Protocol (MCP)</strong> is an open standard that lets AI assistants connect to external data sources and tools.
            With AI Memory&apos;s MCP Server, your AI assistant can search through your entire conversation history — across ChatGPT, Claude, DeepSeek, and Gemini.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">🔍 search_memory</h3>
              <p className="text-sm text-gray-600">Full-text search across all your saved conversations with platform filtering.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">📝 add_memory</h3>
              <p className="text-sm text-gray-600">Save new conversations or memory snippets to your knowledge base.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">🧠 get_context</h3>
              <p className="text-sm text-gray-600">Retrieve relevant context from past conversations for a given topic.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">📋 list_memories</h3>
              <p className="text-sm text-gray-600">Browse recent conversations with optional platform filtering and pagination.</p>
            </div>
          </div>
        </section>

        {/* Claude Desktop Setup */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Setup Guide: Claude Desktop</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-gray-600 mb-4">Add the following to your Claude Desktop MCP configuration file:</p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Config file location:</strong><br />
              macOS: <code className="bg-gray-100 px-2 py-1 rounded">~/Library/Application Support/Claude/claude_desktop_config.json</code><br />
              Windows: <code className="bg-gray-100 px-2 py-1 rounded">%APPDATA%\Claude\claude_desktop_config.json</code>
            </p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm mt-4">
{`{
  "mcpServers": {
    "ai-memory": {
      "url": "https://aimemory.pro/api/mcp",
      "transport": "http"
    }
  }
}`}
            </pre>
            <p className="text-sm text-gray-500 mt-4">Restart Claude Desktop after saving the config. You can now ask Claude to search your conversation history!</p>
          </div>
        </section>

        {/* Cursor Setup */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Setup Guide: Cursor</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-gray-600 mb-4">In Cursor, go to <strong>Settings → MCP → Add New MCP Server</strong> and configure:</p>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-24">Name:</span>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">AI Memory</code>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-24">Type:</span>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">HTTP</code>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-24">URL:</span>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">https://aimemory.pro/api/mcp</code>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Once connected, Cursor can search your AI conversation history when writing code or answering questions.</p>
          </div>
        </section>

        {/* Windsurf / Other MCP Clients */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other MCP Clients</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-gray-600 mb-4">AI Memory works with any MCP-compatible client. Use these connection details:</p>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="text-sm"><strong>Endpoint:</strong> <code className="bg-gray-100 px-2 py-1 rounded">https://aimemory.pro/api/mcp</code></p>
              <p className="text-sm mt-2"><strong>Protocol:</strong> <code className="bg-gray-100 px-2 py-1 rounded">MCP 2024-11-05 (JSON-RPC 2.0)</code></p>
              <p className="text-sm mt-2"><strong>Transport:</strong> <code className="bg-gray-100 px-2 py-1 rounded">Streamable HTTP (POST)</code></p>
              <p className="text-sm mt-2"><strong>Authentication:</strong> None required (public endpoint)</p>
            </div>
            <p className="text-sm text-gray-500 mt-4">Compatible with: Windsurf, Cline, Continue, Zed, and 100+ other MCP clients.</p>
          </div>
        </section>

        {/* API Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">API Reference</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Initialize Connection</h3>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm mb-6">
{`POST /api/mcp
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize"
}`}
            </pre>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Conversations</h3>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm mb-6">
{`POST /api/mcp
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "search_memory",
    "arguments": {
      "query": "machine learning best practices",
      "platform": "chatgpt",
      "limit": 5
    }
  }
}`}
            </pre>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Add Memory</h3>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`POST /api/mcp
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "add_memory",
    "arguments": {
      "title": "Key insights on RAG architecture",
      "content": "Today I learned that...",
      "platform": "manual",
      "tags": ["rag", "architecture", "insights"]
    }
  }
}`}
            </pre>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Is the MCP Server free?</h3>
              <p className="text-gray-600">Yes, the MCP Server is available on the free plan. All conversation search and retrieval features are free forever.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Is my data sent to a cloud server?</h3>
              <p className="text-gray-600">The MCP endpoint at aimemory.pro accesses conversations stored in your account. If you use the web upload feature, your data is stored server-side in an encrypted database. You can also run AI Memory locally for 100% offline usage.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can I self-host the MCP Server?</h3>
              <p className="text-gray-600">Yes! AI Memory is open source. Clone the repository and run it locally. The MCP Server endpoint is available at <code className="bg-gray-100 px-2 py-1 rounded">/api/mcp</code> on any deployment.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Which platforms are supported?</h3>
              <p className="text-gray-600">AI Memory supports ChatGPT, Claude, DeepSeek, and Gemini. You can import conversations from all platforms and search them through the MCP interface.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to connect your AI to your memory?</h2>
          <p className="text-gray-600 mb-6">Upload your conversations first, then connect via MCP.</p>
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

      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>AI Memory — Your conversations, preserved forever</p>
          <div className="mt-2 space-x-4">
            <Link href="/features" className="hover:text-gray-700">Features</Link>
            <Link href="/docs/mcp" className="hover:text-gray-700">MCP Server</Link>
            <Link href="/pricing" className="hover:text-gray-700">Pricing</Link>
            <Link href="/chrome-extension" className="hover:text-gray-700">Chrome Extension</Link>
            <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-700">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}