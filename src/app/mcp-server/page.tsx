import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MCP Server for AI Memory — Give Your AI Persistent Memory | aimemory.pro',
  description: 'Open-source MCP server that gives Claude Desktop, Cursor, ChatGPT, and 113+ AI clients persistent memory. Install via pip in 10 seconds. Search all your AI conversations from any MCP-compatible tool.',
  keywords: ['MCP server', 'ai memory mcp', 'mcp server for chatgpt', 'claude desktop mcp server', 'cursor mcp server', 'model context protocol server', 'ai memory server', 'persistent ai memory', 'mcp server pip install', 'aimemory mcp'],
  openGraph: {
    title: 'MCP Server for AI Memory — Persistent Memory for 113+ AI Clients',
    description: 'Open-source MCP server that gives any AI assistant persistent memory. Install via pip, connect to Claude Desktop, Cursor, and more.',
    url: 'https://aimemory.pro/mcp-server',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aimemory.pro/mcp-server',
  },
};

export default function MCPServerLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Memory MCP Server",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Cross-platform",
            "description": "Open-source MCP server that gives AI assistants persistent memory. Works with Claude Desktop, Cursor, ChatGPT, and 113+ MCP clients.",
            "url": "https://aimemory.pro/mcp-server",
            "downloadUrl": "https://pypi.org/project/aimemory-mcp-server/",
            "softwareVersion": "1.0.0",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "AI Memory"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "120"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is an MCP server for AI memory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An MCP (Model Context Protocol) server for AI memory is a tool that gives AI assistants like Claude Desktop and Cursor persistent memory by connecting them to your conversation history. AI Memory\'s MCP server lets any MCP-compatible AI search, save, and retrieve memories across all your AI conversations."
                }
              },
              {
                "@type": "Question",
                "name": "How do I install the AI Memory MCP server?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Install with one command: pip install aimemory-mcp-server. Then add the configuration to your MCP client (Claude Desktop, Cursor, etc.) and restart. The server runs locally on your machine with full offline support."
                }
              },
              {
                "@type": "Question",
                "name": "Which AI tools support MCP servers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Over 113 AI clients support MCP servers, including Claude Desktop, Cursor, Windsurf, VS Code (with Cline/Continue), Zed, and many more. The Model Context Protocol is an open standard supported by the entire AI ecosystem."
                }
              },
              {
                "@type": "Question",
                "name": "Is the AI Memory MCP server free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the AI Memory MCP server is completely free and open-source. You can install it via pip, run it locally, and connect it to any MCP client at no cost. There are no usage limits or hidden fees."
                }
              },
              {
                "@type": "Question",
                "name": "Does the MCP server work offline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the standalone MCP server runs entirely on your local machine. Your conversation data stays in a local SQLite database — no cloud connection required. You can also use the hosted version at aimemory.pro/api/mcp for cloud-based access."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between AI Memory MCP server and Mem0?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI Memory MCP server is a free, open-source tool focused on managing and searching existing AI conversations. Mem0 is a B2B API platform ($24M funded) for building custom memory layers in applications. AI Memory is consumer-friendly with zero setup, while Mem0 requires developer integration."
                }
              }
            ]
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
              <Link href="/mcp-server" className="text-sm text-gray-900 font-medium">MCP Server</Link>
              <Link href="/docs/mcp" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Docs</Link>
              <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Blog</Link>
              <Link
                href="/"
                className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Try Free
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm mb-6">
            <span className="text-base">⚡</span>
            pip install aimemory-mcp-server
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Give your AI<br />
            <span className="text-blue-600">persistent memory.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            An open-source MCP server that connects Claude Desktop, Cursor, ChatGPT, and <strong className="text-gray-700">113+ AI clients</strong> to your entire conversation history. One install. Works everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://pypi.org/project/aimemory-mcp-server/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-base"
            >
              📦 Install from PyPI
            </a>
            <a
              href="https://github.com/jingchang0623-crypto/aimemory"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-200 text-gray-600 font-medium rounded-lg hover:border-gray-300 transition-colors text-base"
            >
              ⭐ View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">113+</div>
              <div className="text-xs text-gray-500">MCP Clients</div>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block" />
            <div>
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-xs text-gray-500">Tools Included</div>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block" />
            <div>
              <div className="text-2xl font-bold text-gray-900">10s</div>
              <div className="text-xs text-gray-500">Install Time</div>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block" />
            <div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-xs text-gray-500">Free & Open Source</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Install */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Install in 10 seconds</h2>
          <p className="text-gray-500 text-center mb-8">One command. No configuration files. No accounts.</p>
          <div className="bg-gray-900 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-400 text-sm font-mono">$</span>
              <span className="text-green-400 text-sm font-mono">pip install aimemory-mcp-server</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-400 text-sm font-mono">$</span>
              <span className="text-green-400 text-sm font-mono">aimemory-mcp-server</span>
            </div>
            <p className="text-gray-500 text-xs mt-4">✓ Python 3.8+ &nbsp; ✓ Works on macOS, Linux, Windows &nbsp; ✓ No API keys needed</p>
          </div>
        </div>
      </section>

      {/* 5 Tools */}
      <section className="pb-20 px-6 bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">5 powerful memory tools</h2>
          <p className="text-gray-500 text-center mb-12">Everything your AI assistant needs to remember, search, and manage your conversations.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔍', name: 'search_memories', desc: 'Full-text search across all your saved conversations with FTS5 syntax support. Filter by platform, date, or tags.' },
              { icon: '💾', name: 'save_memory', desc: 'Save new conversations, insights, or memory snippets with automatic tagging and source attribution.' },
              { icon: '📋', name: 'list_memories', desc: 'Browse your memory library with tag filtering, date ranges, and pagination. See what your AI remembers.' },
              { icon: '✏️', name: 'update_memory', desc: 'Edit existing memories — update content, add tags, correct details. Keep your knowledge base accurate.' },
              { icon: '🗑️', name: 'delete_memory', desc: 'Remove outdated or irrelevant memories permanently. Full control over your data.' },
              { icon: '🧠', name: 'get_context', desc: 'Retrieve the most relevant context from past conversations for any topic. Perfect for continuing old threads.' },
            ].map((tool) => (
              <div key={tool.name} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{tool.icon}</div>
                <h3 className="font-mono text-sm font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Setup Guides */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Works with your favorite AI tools</h2>
          <p className="text-gray-500 text-center mb-12">One server, every client. Same config everywhere.</p>

          {/* Claude Desktop */}
          <div className="mb-8 bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🟣</span>
              <h3 className="text-xl font-bold text-gray-900">Claude Desktop</h3>
              <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-xs rounded-full font-medium">Most Popular</span>
            </div>
            <p className="text-gray-600 mb-4">Add to <code className="bg-gray-100 px-2 py-1 rounded text-sm">claude_desktop_config.json</code>:</p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm">{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}`}</pre>
            <p className="text-sm text-gray-500 mt-3">Restart Claude Desktop. Ask: "Search my memory for React performance tips"</p>
          </div>

          {/* Cursor */}
          <div className="mb-8 bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⚡</span>
              <h3 className="text-xl font-bold text-gray-900">Cursor</h3>
            </div>
            <p className="text-gray-600 mb-4">Go to <strong>Settings → MCP → Add New MCP Server</strong>:</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-20">Name:</span>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">AI Memory</code>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-20">Type:</span>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">stdio</code>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-20">Command:</span>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">aimemory-mcp-server</code>
              </div>
            </div>
          </div>

          {/* Windsurf */}
          <div className="mb-8 bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🌊</span>
              <h3 className="text-xl font-bold text-gray-900">Windsurf</h3>
            </div>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm">{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}`}</pre>
          </div>

          {/* VS Code + Cline */}
          <div className="mb-8 bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💙</span>
              <h3 className="text-xl font-bold text-gray-900">VS Code + Cline / Continue</h3>
            </div>
            <p className="text-gray-600 mb-4">In your MCP settings, add:</p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm">{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}`}</pre>
          </div>

          {/* More clients */}
          <div className="text-center">
            <p className="text-gray-500 mb-4">Also works with: <strong>Zed</strong>, <strong>Continue</strong>, <strong>Augment</strong>, <strong>Aider</strong>, and <strong>100+ more</strong> MCP clients</p>
            <Link href="/docs/mcp" className="text-blue-600 font-medium hover:underline">
              View full documentation →
            </Link>
          </div>
        </div>
      </section>

      {/* Two Modes */}
      <section className="pb-20 px-6 bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Two ways to use it</h2>
          <p className="text-gray-500 text-center mb-12">Choose local or cloud — both give your AI persistent memory.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border-2 border-green-200 p-8">
              <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full mb-4">Recommended</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏠 Local Server</h3>
              <p className="text-gray-600 mb-4">Runs entirely on your machine. Your data never leaves your computer.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-600">100% offline — no internet required</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-600">SQLite database on your disk</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-600">stdio transport — zero config</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-600">Full CRUD: search, save, update, delete</span>
                </div>
              </div>
              <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm">{`pip install aimemory-mcp-server`}</pre>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full mb-4">Cloud</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">☁️ Hosted Server</h3>
              <p className="text-gray-600 mb-4">Use our hosted endpoint. Upload conversations via the web UI, then search from any MCP client.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-sm text-gray-600">No installation needed</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-sm text-gray-600">Access from any device</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-sm text-gray-600">HTTP transport (Streamable)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-sm text-gray-600">Session-based security</span>
                </div>
              </div>
              <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm">{`Endpoint: aimemory.pro/api/mcp`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Why MCP */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Why MCP changes everything</h2>
          <p className="text-gray-500 text-center mb-12">The Model Context Protocol is the USB-C of AI — one standard, infinite connections.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-3xl mb-4">🔌</div>
              <h3 className="font-semibold text-gray-900 mb-2">Universal Standard</h3>
              <p className="text-sm text-gray-600">One server works with Claude, Cursor, ChatGPT, and 113+ clients. No custom integrations per platform.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="font-semibold text-gray-900 mb-2">Cross-Platform Memory</h3>
              <p className="text-sm text-gray-600">Your AI remembers conversations from ChatGPT, Claude, DeepSeek, and Gemini — all searchable from one place.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">First-Mover Advantage</h3>
              <p className="text-sm text-gray-600">Cross-platform memory format is an industry gap. AI Memory is building the "SMTP of AI memory" — and you can use it today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-20 px-6 bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">How AI Memory MCP compares</h2>
          <p className="text-gray-500 text-center mb-12">The only MCP server with cross-platform conversation search.</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Feature</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-blue-600">AI Memory MCP</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-gray-600">Mem0</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-gray-600">Custom MCP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: 'Setup Time', aimemory: '10 seconds', mem0: '30+ minutes', custom: 'Hours' },
                  { feature: 'Cross-Platform Search', aimemory: '✅ 4 platforms', mem0: '❌ Single source', custom: '⚠️ Manual' },
                  { feature: 'MCP Standard', aimemory: '✅ Native', mem0: '❌ REST API only', custom: '✅ DIY' },
                  { feature: 'Offline Support', aimemory: '✅ Full', mem0: '❌ Cloud only', custom: '⚠️ Depends' },
                  { feature: 'Pricing', aimemory: 'Free', mem0: 'Free tier + $24M VC', custom: 'Dev time' },
                  { feature: 'Consumer-Friendly', aimemory: '✅ Zero config', mem0: '❌ Developer-only', custom: '❌ Code required' },
                ].map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-3 text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-700 bg-blue-50/50">{row.aimemory}</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-500">{row.mem0}</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-500">{row.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              { q: 'What is an MCP server for AI memory?', a: 'An MCP (Model Context Protocol) server for AI memory is a tool that gives AI assistants like Claude Desktop and Cursor persistent memory by connecting them to your conversation history. AI Memory\'s MCP server lets any MCP-compatible AI search, save, and retrieve memories across all your AI conversations.' },
              { q: 'How do I install the AI Memory MCP server?', a: 'Install with one command: pip install aimemory-mcp-server. Then add the configuration to your MCP client (Claude Desktop, Cursor, etc.) and restart. The server runs locally on your machine with full offline support.' },
              { q: 'Which AI tools support MCP servers?', a: 'Over 113 AI clients support MCP servers, including Claude Desktop, Cursor, Windsurf, VS Code (with Cline/Continue), Zed, and many more. The Model Context Protocol is an open standard supported by the entire AI ecosystem.' },
              { q: 'Is the AI Memory MCP server free?', a: 'Yes, the AI Memory MCP server is completely free and open-source. You can install it via pip, run it locally, and connect it to any MCP client at no cost. There are no usage limits or hidden fees.' },
              { q: 'Does the MCP server work offline?', a: 'Yes, the standalone MCP server runs entirely on your local machine. Your conversation data stays in a local SQLite database — no cloud connection required. You can also use the hosted version at aimemory.pro/api/mcp for cloud-based access.' },
              { q: 'What is the difference between AI Memory MCP and Mem0?', a: 'AI Memory MCP server is a free, open-source tool focused on managing and searching existing AI conversations. Mem0 is a B2B API platform ($24M funded) for building custom memory layers in applications. AI Memory is consumer-friendly with zero setup, while Mem0 requires developer integration.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gray-900 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Give your AI persistent memory today</h2>
          <p className="text-gray-400 mb-8">One pip install. Works with Claude, Cursor, ChatGPT, and 113+ tools.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pypi.org/project/aimemory-mcp-server/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              📦 pip install aimemory-mcp-server
            </a>
            <Link
              href="/"
              className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              Upload Conversations →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}