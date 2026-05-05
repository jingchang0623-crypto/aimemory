import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MCP Memory Servers Directory — AI Memory Tools for the Model Context Protocol (2026)',
  description: 'The definitive directory of MCP memory servers for AI conversation management. Compare aimemory-mcp-server, Mem0, mcp-server-memory, Knowledge Graph Memory Server, and more. Find the best mcp memory server for Claude Desktop, Cursor, and 100+ MCP clients.',
  keywords: ['mcp memory server', 'mcp ai memory', 'model context protocol memory', 'mcp server claude desktop', 'mcp memory tools', 'aimemory mcp server', 'mem0 mcp', 'knowledge graph memory server', 'mcp server directory'],
  openGraph: {
    title: 'MCP Memory Servers Directory — AI Memory Tools (2026)',
    description: 'Compare MCP memory servers for AI conversation management. Find the best model context protocol memory server for Claude Desktop and beyond.',
    url: 'https://aimemory.pro/mcp-directory',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aimemory.pro/mcp-directory',
  },
};

const mcpServers = [
  {
    name: 'AI Memory MCP Server',
    logo: '🧠',
    badge: '⭐ RECOMMENDED',
    badgeColor: 'bg-blue-600 text-white',
    url: 'https://aimemory.pro',
    install: 'pip install aimemory-mcp-server',
    features: [
      'Stdio + HTTP dual mode for maximum compatibility',
      'FTS5 full-text search across all memories',
      'Cross-platform: Windows, macOS, Linux',
      'Local-first storage with optional cloud sync',
    ],
    compatibility: ['Claude Desktop', 'Cursor', 'Windsurf', 'Continue', '100+ MCP Clients'],
    description: 'The official MCP server from AI Memory. Provides tools for searching, creating, and managing AI conversation memories. Dual transport modes (stdio and HTTP) ensure compatibility with every MCP client.',
  },
  {
    name: 'Mem0 MCP Server',
    logo: '🔗',
    badge: null,
    badgeColor: '',
    url: 'https://github.com/mem0ai/mem0',
    install: 'npx @mem0ai/mem0-mcp-server',
    features: [
      '54K+ GitHub stars — largest MCP memory community',
      'B2B memory API with cloud infrastructure',
      'Knowledge graph-based memory extraction',
      'Managed cloud service with SDK support',
    ],
    compatibility: ['Claude Desktop', 'Cursor', 'Custom MCP Clients'],
    description: 'Mem0 provides an enterprise-grade MCP memory server backed by 54K GitHub stars and $24M in funding. Best suited for developers building memory into production applications.',
  },
  {
    name: 'MCP Server Memory',
    logo: '📁',
    badge: null,
    badgeColor: '',
    url: 'https://www.npmjs.com/package/@anthropic/mcp-server-memory',
    install: 'npx @anthropic/mcp-server-memory',
    features: [
      'Simple file-based memory storage',
      'Zero configuration for Claude Desktop',
      'Lightweight — no database required',
      'JSON-based memory persistence',
    ],
    compatibility: ['Claude Desktop', 'MCP Inspector'],
    description: 'A simple, file-based MCP memory server published on npm. Stores memories as JSON files on disk. The easiest way to add persistent memory to Claude Desktop with minimal setup.',
  },
  {
    name: 'Knowledge Graph Memory Server',
    logo: '🕸️',
    badge: null,
    badgeColor: '',
    url: 'https://github.com/modelcontextprotocol/servers',
    install: 'npx @anthropic/knowledge-graph-memory-server',
    features: [
      'Graph-based entity and relation storage',
      'Automatic entity extraction from conversations',
      'Query relationships between stored entities',
      'Built-in knowledge graph visualization',
    ],
    compatibility: ['Claude Desktop', 'MCP Inspector'],
    description: 'An official MCP reference server that stores memories as a knowledge graph. Entities and relationships are automatically extracted, enabling powerful semantic queries across your conversation history.',
  },
  {
    name: 'Supermemory MCP',
    logo: '🌟',
    badge: null,
    badgeColor: '',
    url: 'https://github.com/supermemoryai/supermemory',
    install: 'npx supermemory-mcp',
    features: [
      'Open source with 22K+ GitHub stars',
      'Hybrid knowledge graph + vector search',
      'AI-powered memory summarization',
      'Self-hostable with Docker support',
    ],
    compatibility: ['Claude Desktop', 'Cursor', 'Custom MCP Clients'],
    description: 'Supermemory MCP combines knowledge graph and vector search for intelligent memory retrieval. Open source and self-hostable, it offers AI-powered summarization to keep memories concise and relevant.',
  },
  {
    name: 'Memory Plugin MCP',
    logo: '🔌',
    badge: null,
    badgeColor: '',
    url: 'https://memoryplugin.com',
    install: 'npx memory-plugin-mcp',
    features: [
      'Connects to MemoryPlugin cloud service',
      'Automatic conversation memory capture',
      'Cross-session memory persistence',
      'Web dashboard for memory management',
    ],
    compatibility: ['Claude Desktop', 'Cursor', 'Continue'],
    description: 'Memory Plugin MCP bridges Claude Desktop with the MemoryPlugin cloud service. Captures and stores conversation memories automatically, with a web dashboard for browsing and managing your stored knowledge.',
  },
];

const whyMcpReasons = [
  {
    icon: '🔌',
    title: 'Universal Protocol',
    description: 'MCP is an open standard supported by 100+ AI tools. A single MCP memory server works with Claude Desktop, Cursor, Windsurf, Continue, and more — no vendor lock-in.',
  },
  {
    icon: '🔒',
    title: 'Local-First Privacy',
    description: 'MCP memory servers run on your machine. Your conversation memories never leave your computer unless you choose a cloud-based server. No third-party data collection.',
  },
  {
    icon: '⚡',
    title: 'Real-Time Access',
    description: 'MCP servers provide real-time tool access during conversations. Your AI assistant can search, create, and update memories instantly — no API delays or batch processing.',
  },
  {
    icon: '🧩',
    title: 'Composable Architecture',
    description: 'Mix and match MCP servers for different needs. Use a knowledge graph server for entities, a vector server for semantic search, and a file server for raw data — all simultaneously.',
  },
  {
    icon: '🌐',
    title: 'Cross-Client Compatibility',
    description: 'Write your memories once, access them everywhere. An MCP memory server configured for Claude Desktop also works in Cursor, VS Code extensions, and any MCP-compatible client.',
  },
  {
    icon: '🛠️',
    title: 'Extensible & Open',
    description: 'MCP is fully open source. Build custom memory servers, extend existing ones, or contribute to the ecosystem. The protocol is simple enough for any developer to implement.',
  },
];

export default function McpDirectoryPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an MCP memory server?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An MCP memory server is a tool that implements the Model Context Protocol (MCP) to provide persistent memory capabilities to AI assistants like Claude Desktop. It allows AI models to store, search, and retrieve information from past conversations, giving them long-term memory across sessions. MCP memory servers run locally on your machine and expose tools that any MCP-compatible client can use.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to install MCP memory server for Claude Desktop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To install an MCP memory server for Claude Desktop, edit your Claude Desktop configuration file (claude_desktop_config.json) and add the server command. For example, for aimemory-mcp-server: add {"mcpServers": {"ai-memory": {"command": "python", "args": ["-m", "aimemory_mcp_server"]}}} to your config. For npm-based servers like mcp-server-memory, use {"command": "npx", "args": ["@anthropic/mcp-server-memory"]}. Restart Claude Desktop after saving.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which MCP memory server is best?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best MCP memory server depends on your needs. AI Memory MCP Server (aimemory-mcp-server) is recommended for most users — it offers dual transport modes (stdio + HTTP), FTS5 full-text search, cross-platform support, and local-first privacy. Mem0 is best for enterprise/B2B use cases. Knowledge Graph Memory Server is ideal if you want entity-relationship storage. MCP Server Memory is the simplest option for quick setup with Claude Desktop.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="border-b border-gray-100 py-4 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl">🧠</span>
              <span className="font-bold text-gray-900">AI Memory</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/features" className="text-sm text-gray-600 hover:text-gray-900">Features</Link>
              <Link href="/chrome-extension" className="text-sm text-gray-600 hover:text-gray-900">Extension</Link>
              <Link href="/mcp-directory" className="text-sm text-blue-600 font-medium hover:text-blue-700">MCP Directory</Link>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link>
              <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              MCP Memory Servers Directory
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Every MCP memory server for AI conversation management — compared, reviewed, and ready to install. Give your AI assistant persistent memory with the Model Context Protocol.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">6 MCP Memory Servers</span>
              <span className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">Claude Desktop Compatible</span>
              <span className="bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full">Updated May 2026</span>
            </div>
          </div>
        </section>

        {/* Server Cards */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {mcpServers.map((server) => (
                <div
                  key={server.name}
                  className={`border rounded-xl p-6 ${
                    server.badge
                      ? 'border-blue-200 bg-blue-50/30 shadow-md'
                      : 'border-gray-200 hover:shadow-md transition-shadow'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{server.logo}</span>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{server.name}</h2>
                        {server.badge && (
                          <span className={`${server.badgeColor} text-xs px-2 py-0.5 rounded-full font-medium`}>
                            {server.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <a
                      href={server.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm hover:underline whitespace-nowrap"
                    >
                      Visit →
                    </a>
                  </div>

                  <p className="text-gray-600 mb-4">{server.description}</p>

                  {/* Install Command */}
                  <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-xs font-mono">INSTALL</span>
                      <span className="text-gray-500 text-xs">Terminal</span>
                    </div>
                    <code className="text-green-400 text-sm font-mono">{server.install}</code>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {server.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-green-500 mt-0.5">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Compatibility */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Compatible With</h3>
                    <div className="flex flex-wrap gap-2">
                      {server.compatibility.map((client) => (
                        <span
                          key={client}
                          className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why MCP for Memory? */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why MCP for Memory?</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              The Model Context Protocol is the open standard for connecting AI assistants to external tools. Here&apos;s why MCP is the best way to add persistent memory to your AI workflows.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyMcpReasons.map((reason) => (
                <div key={reason.title} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-2xl mb-3">{reason.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Server</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Transport</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Storage</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Search</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Setup</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'AI Memory', transport: 'Stdio + HTTP', storage: 'Local SQLite', search: 'FTS5 Full-Text', setup: 'pip install', highlight: true },
                    { name: 'Mem0', transport: 'Stdio', storage: 'Cloud API', search: 'Semantic', setup: 'npx', highlight: false },
                    { name: 'Server Memory', transport: 'Stdio', storage: 'JSON Files', search: 'Basic', setup: 'npx', highlight: false },
                    { name: 'KG Memory', transport: 'Stdio', storage: 'Graph JSON', search: 'Graph Query', setup: 'npx', highlight: false },
                    { name: 'Supermemory', transport: 'Stdio', storage: 'Vector DB', search: 'Vector + Graph', setup: 'npx', highlight: false },
                    { name: 'Memory Plugin', transport: 'Stdio', storage: 'Cloud API', search: 'Cloud', setup: 'npx', highlight: false },
                  ].map((row) => (
                    <tr key={row.name} className={`border-b border-gray-100 hover:bg-gray-50 ${row.highlight ? 'bg-blue-50' : ''}`}>
                      <td className={`py-3 px-4 font-medium ${row.highlight ? 'text-blue-700' : 'text-gray-900'}`}>
                        {row.name} {row.highlight && '⭐'}
                      </td>
                      <td className="text-center py-3 px-4 text-sm text-gray-600">{row.transport}</td>
                      <td className="text-center py-3 px-4 text-sm text-gray-600">{row.storage}</td>
                      <td className="text-center py-3 px-4 text-sm text-gray-600">{row.search}</td>
                      <td className="text-center py-3 px-4 text-sm text-gray-600">{row.setup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqJsonLd.mainEntity.map((q, i) => (
                <div key={i} className="bg-white p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">{q.name}</h3>
                  <p className="text-gray-600 text-sm">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-blue-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start with the Best MCP Memory Server</h2>
            <p className="text-blue-100 mb-8">AI Memory MCP Server — free, local-first, and works with every MCP client.</p>
            <div className="bg-gray-900 rounded-lg p-4 max-w-md mx-auto mb-6">
              <code className="text-green-400 text-sm font-mono">pip install aimemory-mcp-server</code>
            </div>
            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Learn More →
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
