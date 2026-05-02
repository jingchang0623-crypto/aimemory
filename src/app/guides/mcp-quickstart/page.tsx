import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MCP Server Quickstart — Connect AI Memory to Claude, Cursor & More (2026)',
  description: 'Set up AI Memory as an MCP server in 2 minutes. Step-by-step configuration for Claude Desktop, Cursor, Windsurf, VS Code, and 113+ MCP clients. Search your conversation history from any AI assistant.',
  keywords: ['mcp server quickstart', 'mcp setup guide', 'model context protocol setup', 'claude desktop mcp', 'cursor mcp setup', 'mcp server configuration'],
  openGraph: {
    title: 'MCP Server Quickstart — Connect AI Memory to Any AI Assistant',
    description: 'Set up AI Memory as an MCP server in 2 minutes. Works with Claude Desktop, Cursor, Windsurf, VS Code, and 113+ clients.',
    url: 'https://aimemory.pro/guides/mcp-quickstart',
    type: 'article',
  },
  alternates: {
    canonical: 'https://aimemory.pro/guides/mcp-quickstart',
  },
};

export default function MCPQuickstartGuide() {
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
                "name": "What is the AI Memory MCP Server?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The AI Memory MCP Server implements the Model Context Protocol (MCP) to let AI assistants like Claude Desktop, Cursor, and Windsurf search your conversation history. It provides 5 tools: save_memory, search_memories, list_memories, update_memory, and delete_memory."
                }
              },
              {
                "@type": "Question",
                "name": "How do I connect AI Memory to Claude Desktop?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Add a single JSON entry to your Claude Desktop config file (~/Library/Application Support/Claude/claude_desktop_config.json on macOS). Set the URL to https://aimemory.pro/api/mcp with HTTP transport. Restart Claude Desktop and the AI Memory tools will be available."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to run a server to use MCP?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No! The hosted version at aimemory.pro/api/mcp works out of the box — no server setup needed. Just add the URL to your MCP client config. For local/self-hosted use, you can run the Python FastMCP server locally with stdio transport."
                }
              },
              {
                "@type": "Question",
                "name": "Which MCP clients are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI Memory works with 113+ MCP clients including Claude Desktop, Cursor, Windsurf, VS Code (with Continue), Cline, Zed, and any client that supports the MCP standard. Both HTTP and stdio transports are supported."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between remote and local MCP mode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Remote mode uses the hosted endpoint at aimemory.pro/api/mcp via HTTP transport — no local setup needed. Local mode runs a Python server on your machine via stdio transport — gives you full control and offline access. Both provide the same 5 tools."
                }
              },
              {
                "@type": "Question",
                "name": "Is the MCP Server free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the MCP Server is completely free to use. The remote endpoint at aimemory.pro/api/mcp is free, and the local Python server is open source under the MIT license."
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
            "@type": "SoftwareApplication",
            "name": "AI Memory MCP Server",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Cross-platform",
            "description": "An MCP server that gives AI assistants persistent memory. Search your conversation history from Claude Desktop, Cursor, and 113+ MCP clients.",
            "url": "https://aimemory.pro/api/mcp",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
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
          <span className="text-gray-900">MCP Quickstart</span>
        </nav>

        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">MCP v1.0</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">MCP Server Quickstart</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect AI Memory to Claude Desktop, Cursor, and 113+ MCP clients in under 2 minutes.
            Your AI assistant gets instant access to your conversation history.
          </p>
        </section>

        {/* Table of Contents */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 mb-12">
          <h2 className="font-bold text-gray-900 mb-4">📋 Table of Contents</h2>
          <ol className="space-y-2 text-gray-600">
            <li><a href="#overview" className="text-blue-600 hover:underline">1. What is MCP?</a></li>
            <li><a href="#modes" className="text-blue-600 hover:underline">2. Remote vs Local Mode</a></li>
            <li><a href="#claude" className="text-blue-600 hover:underline">3. Claude Desktop Setup</a></li>
            <li><a href="#cursor" className="text-blue-600 hover:underline">4. Cursor Setup</a></li>
            <li><a href="#windsurf" className="text-blue-600 hover:underline">5. Windsurf Setup</a></li>
            <li><a href="#vscode" className="text-blue-600 hover:underline">6. VS Code Setup</a></li>
            <li><a href="#cline" className="text-blue-600 hover:underline">7. Cline Setup</a></li>
            <li><a href="#tools" className="text-blue-600 hover:underline">8. Available Tools</a></li>
            <li><a href="#examples" className="text-blue-600 hover:underline">9. Usage Examples</a></li>
            <li><a href="#troubleshooting" className="text-blue-600 hover:underline">10. Troubleshooting</a></li>
          </ol>
        </section>

        {/* Overview */}
        <section id="overview" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. What is MCP?</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-gray-600 mb-4">
              The <strong>Model Context Protocol (MCP)</strong> is an open standard created by Anthropic that lets AI assistants
              connect to external data sources and tools. Think of it as &quot;USB-C for AI&quot; — a universal connector
              that works with any MCP-compatible AI client.
            </p>
            <p className="text-gray-600 mb-6">
              AI Memory&apos;s MCP Server implements this protocol, giving your AI assistant the ability to search, save,
              and manage your conversation memories. Once connected, you can ask Claude or Cursor things like:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>&quot;Search my memory for discussions about React hooks&quot;</li>
                <li>&quot;What did I talk about with Claude regarding database optimization last week?&quot;</li>
                <li>&quot;Save this conversation summary to my memory with tag &apos;project-ideas&apos;&quot;</li>
                <li>&quot;List my recent memories about machine learning&quot;</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">113+</div>
                <div className="text-sm text-gray-600">MCP Clients</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">5</div>
                <div className="text-sm text-gray-600">Tools Available</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">0</div>
                <div className="text-sm text-gray-600">Cost (Free)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Remote vs Local */}
        <section id="modes" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Remote vs Local Mode</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-gray-600 mb-6">
              AI Memory supports two modes. Choose the one that fits your workflow:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Remote Mode (Recommended)</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Local Mode</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Transport</td>
                    <td className="py-3 px-4">HTTP</td>
                    <td className="py-3 px-4">stdio</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Endpoint</td>
                    <td className="py-3 px-4"><code className="bg-gray-100 px-2 py-1 rounded text-xs">https://aimemory.pro/api/mcp</code></td>
                    <td className="py-3 px-4"><code className="bg-gray-100 px-2 py-1 rounded text-xs">python3 server.py</code></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Setup</td>
                    <td className="py-3 px-4">Just add URL to config</td>
                    <td className="py-3 px-4">Install Python + dependencies</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Requires server running</td>
                    <td className="py-3 px-4">No (hosted)</td>
                    <td className="py-3 px-4">Yes (local process)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Offline support</td>
                    <td className="py-3 px-4">No</td>
                    <td className="py-3 px-4">Yes</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Data location</td>
                    <td className="py-3 px-4">aimemory.pro server</td>
                    <td className="py-3 px-4">Your local machine</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Best for</td>
                    <td className="py-3 px-4">Quick setup, getting started</td>
                    <td className="py-3 px-4">Privacy, offline, self-hosting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Claude Desktop */}
        <section id="claude" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Claude Desktop Setup</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🤖</span>
              <div>
                <h3 className="font-semibold text-gray-900">Claude Desktop</h3>
                <p className="text-sm text-gray-500">Anthropic&apos;s desktop app with native MCP support</p>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900 mb-3">Remote Mode (Recommended)</h4>
            <p className="text-gray-600 mb-4">
              Edit your Claude Desktop config file:
            </p>
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">
                <strong>macOS:</strong> <code className="bg-gray-100 px-2 py-1 rounded">~/Library/Application Support/Claude/claude_desktop_config.json</code>
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Windows:</strong> <code className="bg-gray-100 px-2 py-1 rounded">%APPDATA%\Claude\claude_desktop_config.json</code>
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Linux:</strong> <code className="bg-gray-100 px-2 py-1 rounded">~/.config/claude-desktop/claude_desktop_config.json</code>
              </p>
            </div>
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

            <h4 className="font-semibold text-gray-900 mb-3">Local Mode (stdio)</h4>
            <p className="text-gray-600 mb-4">
              If you prefer to run the server locally:
            </p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm mb-4">
{`pip install fastmcp`}
            </pre>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm mb-6">
{`{
  "mcpServers": {
    "ai-memory": {
      "command": "python3",
      "args": ["/path/to/mcp-server/server.py"],
      "env": {
        "AIMEMORY_DB": "/path/to/aimemory.db"
      }
    }
  }
}`}
            </pre>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800">
                <strong>✅ Done!</strong> Restart Claude Desktop. You should see &quot;ai-memory&quot; in the MCP servers list.
                Try asking: &quot;Search my memory for discussions about Python&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Cursor */}
        <section id="cursor" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Cursor Setup</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="font-semibold text-gray-900">Cursor IDE</h3>
                <p className="text-sm text-gray-500">AI-first code editor with MCP support</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              Create or edit <code className="bg-gray-100 px-2 py-1 rounded">.cursor/mcp.json</code> in your project root
              (or <code className="bg-gray-100 px-2 py-1 rounded">~/.cursor/mcp.json</code> for global config):
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

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>💡 Tip:</strong> In Cursor, you can use the MCP tools in the AI chat panel.
                The tools appear automatically after configuration. Use <code className="bg-blue-100 px-1 rounded">@ai-memory</code> to reference the server.
              </p>
            </div>
          </div>
        </section>

        {/* Windsurf */}
        <section id="windsurf" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Windsurf Setup</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌊</span>
              <div>
                <h3 className="font-semibold text-gray-900">Windsurf (Codeium)</h3>
                <p className="text-sm text-gray-500">AI-powered IDE with MCP integration</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              Open Windsurf settings and navigate to the MCP Servers section. Add a new server:
            </p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm mb-6">
{`{
  "mcpServers": {
    "ai-memory": {
      "serverUrl": "https://aimemory.pro/api/mcp",
      "transport": "http"
    }
  }
}`}
            </pre>
          </div>
        </section>

        {/* VS Code */}
        <section id="vscode" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">6. VS Code Setup</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📝</span>
              <div>
                <h3 className="font-semibold text-gray-900">VS Code</h3>
                <p className="text-sm text-gray-500">With Continue extension or MCP extension</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              Using the <strong>Continue</strong> extension, add to your <code className="bg-gray-100 px-2 py-1 rounded">.continue/config.json</code>:
            </p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm mb-6">
{`{
  "mcpServers": [
    {
      "name": "ai-memory",
      "serverUrl": "https://aimemory.pro/api/mcp"
    }
  ]
}`}
            </pre>

            <p className="text-gray-600 mb-4">
              Or using the <strong>MCP for VS Code</strong> extension, add the server URL directly in the extension settings.
            </p>
          </div>
        </section>

        {/* Cline */}
        <section id="cline" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Cline Setup</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🔧</span>
              <div>
                <h3 className="font-semibold text-gray-900">Cline</h3>
                <p className="text-sm text-gray-500">Autonomous coding agent with MCP support</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              Open Cline settings and add the MCP server configuration:
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
          </div>
        </section>

        {/* Available Tools */}
        <section id="tools" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Available Tools</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-gray-600 mb-6">
              The AI Memory MCP Server exposes 5 tools that your AI assistant can use:
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "search_memories",
                  icon: "🔍",
                  desc: "Full-text search across all your saved conversations. Supports FTS5 syntax (AND, OR, phrase matching, proximity search).",
                  params: "query (required), limit (default: 10)"
                },
                {
                  name: "save_memory",
                  icon: "📝",
                  desc: "Save a new memory or conversation snippet to your knowledge base. Supports tags and source tracking.",
                  params: "content (required), tags (optional), source (optional)"
                },
                {
                  name: "list_memories",
                  icon: "📋",
                  desc: "Browse recent memories with optional tag filtering and pagination. Returns newest first.",
                  params: "limit (default: 20), tag (optional)"
                },
                {
                  name: "update_memory",
                  icon: "✏️",
                  desc: "Update an existing memory's content and/or tags.",
                  params: "memory_id (required), content (optional), tags (optional)"
                },
                {
                  name: "delete_memory",
                  icon: "🗑️",
                  desc: "Permanently delete a memory by its ID.",
                  params: "memory_id (required)"
                }
              ].map((tool) => (
                <div key={tool.name} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{tool.icon}</span>
                    <code className="font-semibold text-gray-900">{tool.name}</code>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{tool.desc}</p>
                  <p className="text-xs text-gray-500">Parameters: {tool.params}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section id="examples" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Usage Examples</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-gray-600 mb-6">
              Once connected, you can naturally ask your AI assistant to use your memory. Here are some examples:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">🔍 Searching memories</h4>
                <p className="text-sm text-gray-600 italic">&quot;Search my memory for discussions about React performance optimization&quot;</p>
                <p className="text-xs text-gray-500 mt-1">→ Calls search_memories with query &quot;React performance optimization&quot;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">📝 Saving a conversation</h4>
                <p className="text-sm text-gray-600 italic">&quot;Save this conversation summary to my memory with the tag &apos;project-ideas&apos;&quot;</p>
                <p className="text-xs text-gray-500 mt-1">→ Calls save_memory with the summary content and tag</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">📋 Listing recent memories</h4>
                <p className="text-sm text-gray-600 italic">&quot;Show me my 10 most recent memories about machine learning&quot;</p>
                <p className="text-xs text-gray-500 mt-1">→ Calls list_memories with tag &quot;machine-learning&quot; and limit 10</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">🧠 Getting context</h4>
                <p className="text-sm text-gray-600 italic">&quot;Based on my previous conversations, what approach did we decide on for the database migration?&quot;</p>
                <p className="text-xs text-gray-500 mt-1">→ Calls search_memories with &quot;database migration&quot; and synthesizes the answer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Troubleshooting</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">MCP server not appearing in Claude Desktop</h3>
              <p className="text-gray-600 text-sm">Make sure the config file is valid JSON (no trailing commas). Restart Claude Desktop after editing the config. Check that the file path is correct for your OS.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Connection timeout</h3>
              <p className="text-gray-600 text-sm">The remote endpoint at aimemory.pro/api/mcp may take a few seconds to cold-start on first request. If it persists, check your internet connection and try again.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">No results from search</h3>
              <p className="text-gray-600 text-sm">Make sure you&apos;ve uploaded conversations to AI Memory first. The MCP server searches your uploaded data — if no conversations are imported, searches will return empty results.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Local mode: &quot;fastmcp not found&quot;</h3>
              <p className="text-gray-600 text-sm">Install the dependency: <code className="bg-gray-100 px-2 py-1 rounded">pip install fastmcp</code>. If using a virtual environment, make sure it&apos;s activated before running the server.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Cursor not showing MCP tools</h3>
              <p className="text-gray-600 text-sm">Make sure the .cursor/mcp.json file is in your project root (not home directory for project-level config). Restart Cursor after adding the configuration.</p>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/docs/mcp" className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">📖 Full MCP Documentation</h3>
              <p className="text-sm text-gray-600">Complete API reference and advanced configuration options.</p>
            </Link>
            <Link href="/blog/mcp-server-setup-guide" className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">📝 MCP Setup Blog Post</h3>
              <p className="text-sm text-gray-600">Detailed walkthrough with screenshots and tips.</p>
            </Link>
            <Link href="/blog/mcp-cursor-setup-guide" className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">⚡ Cursor MCP Guide</h3>
              <p className="text-sm text-gray-600">Deep dive into using MCP with Cursor for coding workflows.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to give your AI a memory?</h2>
          <p className="text-gray-600 mb-6">Upload your conversations first, then connect via MCP.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Upload Conversations →
            </Link>
            <Link href="/docs/mcp" className="inline-block bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
              Full MCP Documentation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
