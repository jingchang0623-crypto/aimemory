import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/BlogLayout';

const slug = 'mcp-memory-server';

export const metadata: Metadata = {
  title: 'MCP Memory Server: Connect Any AI to Your Conversation History (2026)',
  description: 'Set up an MCP memory server to give Claude, Cursor, and other AI clients access to your conversation history. Complete setup guide with 6 tools.',
  keywords: ['mcp memory server', 'mcp ai memory', 'connect ai to memory', 'model context protocol memory', 'mcp server setup', 'claude mcp memory', 'cursor mcp memory', 'ai memory protocol', 'mcp tools memory', 'persistent ai memory server'],
  openGraph: {
    title: 'MCP Memory Server: Connect Any AI to Your Conversation History',
    description: 'Give every AI assistant access to your conversation history via MCP. Complete setup guide.',
    url: 'https://aimemory.pro/blog/mcp-memory-server',
    type: 'article',
  },
  alternates: {
    canonical: 'https://aimemory.pro/blog/mcp-memory-server',
  },
};

export default function MCPMemoryServer() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an MCP memory server?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An MCP (Model Context Protocol) memory server is a service that exposes your AI conversation history as tools that any MCP-compatible client can use. It lets AI assistants like Claude Desktop, Cursor, and ChatGPT search, retrieve, and add to your conversation memory through a standardized protocol.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many AI clients support MCP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As of 2026, over 113 AI clients support the Model Context Protocol, including Claude Desktop, Cursor, ChatGPT (via connectors), Windsurf, Cline, and many more. The MCP ecosystem is growing rapidly with new client integrations added regularly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the AI Memory MCP server free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the AI Memory MCP server is free to use. You just need to upload your conversations to aimemory.pro first (also free), and then configure your MCP client to connect to the server endpoint. There are no API keys or subscriptions required.',
        },
      },
      {
        '@type': 'Question',
        name: 'What tools does the AI Memory MCP server provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The server provides 6 tools: search_memory (full-text search), get_context (relevant snippets for a topic), list_memories (browse recent conversations), get_conversation (retrieve full conversation by ID), add_memory (add new notes), and delete_memory (remove conversations or all data).',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I set up MCP with Claude Desktop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Add the AI Memory MCP server to your Claude Desktop configuration file (claude_desktop_config.json). Add a new entry in the mcpServers object with the URL "https://aimemory.pro/api/mcp". Restart Claude Desktop and the memory tools will appear automatically.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my data safe with an MCP memory server?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The AI Memory MCP server uses session-based isolation — your data is only accessible with your session cookie. The server runs on HTTPS with TLS encryption. Your conversations are stored in a SQLite database with WAL mode for data integrity. No authentication tokens are stored server-side.',
        },
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'MCP Memory Server: Connect Any AI to Your Conversation History (2026)',
    description: 'Complete guide to setting up an MCP memory server for persistent AI memory across all clients.',
    author: { '@type': 'Organization', name: 'AI Memory' },
    publisher: { '@type': 'Organization', name: 'AI Memory', url: 'https://aimemory.pro' },
    datePublished: '2026-05-04',
    dateModified: '2026-05-04',
    url: 'https://aimemory.pro/blog/mcp-memory-server',
    mainEntityOfPage: 'https://aimemory.pro/blog/mcp-memory-server',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aimemory.pro' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://aimemory.pro/blog' },
      { '@type': 'ListItem', position: 3, name: 'MCP Memory Server', item: 'https://aimemory.pro/blog/mcp-memory-server' },
    ],
  };

  return (
    <BlogLayout slug={slug} title="MCP Memory Server: Connect Any AI to Your Conversation History" category="Technical" date="2026-05-04" readTime="20 min">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="prose prose-invert max-w-none">
        <h1>MCP Memory Server: Connect Any AI to Your Conversation History</h1>
        <p className="text-lg text-gray-400">
          Imagine asking Claude Desktop about a debugging session you had with ChatGPT last week — and it actually finds it. That&apos;s what an MCP memory server does. Here&apos;s how to set it up in 5 minutes.
        </p>

        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 my-6">
          <p className="text-sm text-purple-300 font-medium mb-1">🔑 What is MCP?</p>
          <p className="text-sm text-gray-300">
            The <strong>Model Context Protocol (MCP)</strong> is an open standard that lets AI assistants connect to external data sources and tools. Think of it as USB-C for AI — one protocol, universal compatibility. Over <strong>113 clients</strong> already support it.
          </p>
        </div>

        <h2>Why You Need a Memory Server</h2>
        <p>
          Every AI platform has its own isolated memory (or none at all). This creates three problems:
        </p>
        <ul>
          <li><strong>Siloed knowledge:</strong> Your ChatGPT debugging sessions are invisible to Claude. Your Claude research is invisible to Cursor.</li>
          <li><strong>No cross-platform search:</strong> You remember having a conversation about OAuth2 implementation, but which AI was it with?</li>
          <li><strong>Context loss:</strong> When you switch AI tools, you lose all the context you&apos;ve built up.</li>
        </ul>
        <p>
          An MCP memory server solves this by making your conversation history available to <em>any</em> compatible AI client through a standardized protocol.
        </p>

        <h2>How It Works</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <div className="text-sm text-gray-300 space-y-3">
            <p><strong>1. Upload your conversations</strong> — Export from ChatGPT, Claude, or DeepSeek and upload to AI Memory.</p>
            <p><strong>2. MCP server exposes tools</strong> — Your conversation database becomes accessible via 6 standardized tools.</p>
            <p><strong>3. AI clients connect</strong> — Claude Desktop, Cursor, ChatGPT, and 110+ other clients can search your memory.</p>
            <p><strong>4. Ask anything</strong> — &quot;What was that OAuth2 solution we discussed?&quot; and your AI finds it instantly.</p>
          </div>
        </div>

        <h2>The 6 MCP Memory Tools</h2>
        <p>
          The AI Memory MCP server exposes these tools to any connected client:
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-green-400 mb-2">🔍 search_memory</h3>
            <p className="text-sm text-gray-400">Full-text search across all your conversations. Supports FTS5 syntax for advanced queries (AND, OR, NOT, phrase matching).</p>
            <div className="mt-2 bg-gray-800 rounded p-2 font-mono text-xs text-gray-400">
              Input: {'{'}query: string, platform?: string, limit?: number{'}'}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-400 mb-2">📝 get_context</h3>
            <p className="text-sm text-gray-400">Get relevant context snippets for a topic, optimized for providing AI assistants with conversation history. Token-budget aware.</p>
            <div className="mt-2 bg-gray-800 rounded p-2 font-mono text-xs text-gray-400">
              Input: {'{'}topic: string, max_tokens?: number{'}'}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-purple-400 mb-2">📋 list_memories</h3>
            <p className="text-sm text-gray-400">List recent conversations with optional platform filtering. Great for browsing your conversation history.</p>
            <div className="mt-2 bg-gray-800 rounded p-2 font-mono text-xs text-gray-400">
              Input: {'{'}limit?: number, platform?: string{'}'}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-yellow-400 mb-2">💬 get_conversation</h3>
            <p className="text-sm text-gray-400">Retrieve a full conversation with all messages by ID. Includes role, content, and timestamps for each message.</p>
            <div className="mt-2 bg-gray-800 rounded p-2 font-mono text-xs text-gray-400">
              Input: {'{'}conversation_id: string{'}'}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-green-400 mb-2">➕ add_memory</h3>
            <p className="text-sm text-gray-400">Add a new conversation or note to your memory store. Useful for AI assistants that want to save important context for later.</p>
            <div className="mt-2 bg-gray-800 rounded p-2 font-mono text-xs text-gray-400">
              Input: {'{'}title: string, content: string, platform?: string{'}'}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-red-400 mb-2">🗑️ delete_memory</h3>
            <p className="text-sm text-gray-400">Delete a specific conversation by ID, or delete all session data with confirmation. Full data control.</p>
            <div className="mt-2 bg-gray-800 rounded p-2 font-mono text-xs text-gray-400">
              Input: {'{'}conversation_id?: string, confirm?: boolean{'}'}
            </div>
          </div>
        </div>

        <h2>Setup Guide: Claude Desktop</h2>
        <p>
          Claude Desktop has native MCP support. Here&apos;s how to connect:
        </p>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <h3 className="text-sm font-semibold text-white mb-2">Step 1: Open config file</h3>
          <p className="text-sm text-gray-400 mb-2">Find your Claude Desktop configuration file:</p>
          <div className="bg-gray-800 rounded p-2 font-mono text-xs text-green-400">
            <p>macOS: ~/Library/Application Support/Claude/claude_desktop_config.json</p>
            <p>Windows: %APPDATA%\Claude\claude_desktop_config.json</p>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <h3 className="text-sm font-semibold text-white mb-2">Step 2: Add MCP server</h3>
          <div className="bg-gray-800 rounded p-3 font-mono text-xs text-green-400 whitespace-pre">
{`{
  "mcpServers": {
    "ai-memory": {
      "url": "https://aimemory.pro/api/mcp"
    }
  }
}`}
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <h3 className="text-sm font-semibold text-white mb-2">Step 3: Restart Claude Desktop</h3>
          <p className="text-sm text-gray-400">Quit and reopen Claude Desktop. The memory tools will appear automatically in the tools panel.</p>
        </div>

        <h2>Setup Guide: Cursor</h2>
        <p>
          Cursor supports MCP for AI-assisted coding with memory context:
        </p>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <h3 className="text-sm font-semibold text-white mb-2">Step 1: Open Cursor settings</h3>
          <p className="text-sm text-gray-400">Go to Settings → Features → MCP Servers</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <h3 className="text-sm font-semibold text-white mb-2">Step 2: Add server</h3>
          <p className="text-sm text-gray-400 mb-2">Add a new MCP server with URL:</p>
          <div className="bg-gray-800 rounded p-2 font-mono text-xs text-green-400">
            https://aimemory.pro/api/mcp
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <h3 className="text-sm font-semibold text-white mb-2">Step 3: Use in chat</h3>
          <p className="text-sm text-gray-400">In Cursor Chat, the AI can now search your conversation history when answering questions. Ask: &quot;Search my memory for OAuth2 implementation&quot;</p>
        </div>

        <h2>Use Cases</h2>
        <div className="grid gap-4 my-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">🐛 Debug Faster</h3>
            <p className="text-sm text-gray-400">&quot;Search my memory for the PostgreSQL connection pooling issue we solved last month.&quot; — Claude finds the exact solution from your ChatGPT conversation.</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">📚 Research Synthesis</h3>
            <p className="text-sm text-gray-400">&quot;What have I learned about React Server Components across all my AI conversations?&quot; — Get a synthesized answer from ChatGPT, Claude, and DeepSeek discussions.</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">💻 Code Context</h3>
            <p className="text-sm text-gray-400">In Cursor: &quot;Based on my previous conversations about this project, what authentication approach did we decide on?&quot; — The AI recalls your architecture decisions.</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">📝 Knowledge Management</h3>
            <p className="text-sm text-gray-400">&quot;Add this conversation to my memory with tag &apos;project-alpha&apos;.&quot; — The AI saves important context for future reference.</p>
          </div>
        </div>

        <h2>Supported Clients</h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-3 text-gray-300">Client</th>
                <th className="text-left p-3 text-gray-300">MCP Support</th>
                <th className="text-left p-3 text-gray-300">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800"><td className="p-3 text-gray-400">Claude Desktop</td><td className="p-3 text-green-400">Native</td><td className="p-3 text-gray-400">General AI assistant with memory</td></tr>
              <tr className="border-b border-gray-800"><td className="p-3 text-gray-400">Cursor</td><td className="p-3 text-green-400">Native</td><td className="p-3 text-gray-400">AI coding with project context</td></tr>
              <tr className="border-b border-gray-800"><td className="p-3 text-gray-400">Windsurf</td><td className="p-3 text-green-400">Native</td><td className="p-3 text-gray-400">AI coding with memory</td></tr>
              <tr className="border-b border-gray-800"><td className="p-3 text-gray-400">Cline</td><td className="p-3 text-green-400">Native</td><td className="p-3 text-gray-400">VS Code AI assistant</td></tr>
              <tr className="border-b border-gray-800"><td className="p-3 text-gray-400">ChatGPT</td><td className="p-3 text-yellow-400">Connector</td><td className="p-3 text-gray-400">Growing MCP support</td></tr>
              <tr className="border-b border-gray-800"><td className="p-3 text-gray-400">113+ others</td><td className="p-3 text-green-400">Various</td><td className="p-3 text-gray-400">See mcp.directory</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Technical Details</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <ul className="text-sm text-gray-300 space-y-2">
            <li><strong>Protocol:</strong> JSON-RPC 2.0 over HTTPS (Streamable HTTP Transport)</li>
            <li><strong>Endpoint:</strong> <code className="bg-gray-800 px-1 rounded">https://aimemory.pro/api/mcp</code></li>
            <li><strong>Database:</strong> SQLite with FTS5 full-text search and WAL mode</li>
            <li><strong>Authentication:</strong> Session cookie (aim_session) — no API keys needed</li>
            <li><strong>Version:</strong> MCP Protocol 2024-11-05, Server v1.4.0 (12 tools)</li>
            <li><strong>Tools:</strong> 6 (search_memory, get_context, list_memories, get_conversation, add_memory, delete_memory)</li>
          </ul>
        </div>

        <h2>Get Started</h2>
        <p>
          Setting up the MCP memory server takes less than 5 minutes:
        </p>
        <ol>
          <li>Visit <Link href="/" className="text-purple-400 hover:text-purple-300">aimemory.pro</Link> and upload your AI conversations</li>
          <li>Configure your MCP client with the server URL</li>
          <li>Start asking your AI about your conversation history</li>
        </ol>
        <p>
          The server is free, requires no API keys, and works with 113+ MCP-compatible clients.
        </p>
        <p>
          <Link href="/docs/mcp" className="text-purple-400 hover:text-purple-300">Read the full MCP documentation →</Link>
        </p>
      </article>
    </BlogLayout>
  );
}
