import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Memory MCP vs Mem0 — Which MCP Memory Server Is Better? (2026)',
  description: 'Detailed comparison of AI Memory MCP Server vs Mem0 MCP. Features, pricing, setup complexity, privacy, offline support, and developer experience compared. Find the best MCP memory server for Claude Desktop, Cursor, and AI tools.',
  keywords: ['mcp vs mem0', 'aimemory mcp vs mem0', 'mem0 alternative', 'mcp memory server comparison', 'best mcp memory server', 'mem0 vs aimemory', 'claude memory mcp', 'cursor memory mcp'],
  alternates: {
    canonical: 'https://aimemory.pro/mcp-vs-mem0',
  },
  openGraph: {
    title: 'AI Memory MCP vs Mem0 — Which MCP Memory Server Is Better?',
    description: 'Compare AI Memory MCP Server with Mem0: features, pricing, privacy, offline support, and setup complexity. Make the right choice for your AI workflow.',
    url: 'https://aimemory.pro/mcp-vs-mem0',
    type: 'website',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is AI Memory MCP a drop-in replacement for Mem0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes and no. AI Memory MCP focuses on managing existing AI conversations (from ChatGPT, Claude, etc.) with full CRUD operations. Mem0 focuses on extracting structured facts and entities from conversations. If you need to search past conversations across platforms, AI Memory is better. If you need knowledge graph extraction, Mem0 may be more suitable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use both AI Memory MCP and Mem0 together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Both are MCP servers, so you can configure both in your MCP client. Use AI Memory for searching past conversations and Mem0 for extracting structured knowledge. They complement each other well.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does AI Memory MCP work with Claude Desktop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Add the following to your claude_desktop_config.json: {"mcpServers": {"ai-memory": {"command": "aimemory-mcp-server"}}}. Restart Claude Desktop and ask Claude to search your memory.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for privacy — AI Memory MCP or Mem0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Memory MCP is better for privacy. All data stays on your local machine in a SQLite file. No internet connection is required. Mem0 stores your memory on their cloud servers, though they offer encryption options.',
      },
    },
  ],
};

const comparisonFeatures = [
  {
    category: 'Setup & Installation',
    features: [
      {
        name: 'Install Time',
        aimemory: '10 seconds — one pip install',
        mem0: '30+ minutes — API keys, project setup',
        winner: 'aimemory',
      },
      {
        name: 'Installation Method',
        aimemory: 'pip install (PyPI/GitHub)',
        mem0: 'npx or pip + API key registration',
        winner: 'aimemory',
      },
      {
        name: 'Configuration Required',
        aimemory: 'None — zero-config stdio mode',
        mem0: 'API key, project ID, optional user ID',
        winner: 'aimemory',
      },
      {
        name: 'Works Offline',
        aimemory: '✅ Yes — 100% local SQLite',
        mem0: '❌ No — requires cloud API',
        winner: 'aimemory',
      },
    ],
  },
  {
    category: 'Memory Features',
    features: [
      {
        name: 'Search',
        aimemory: '✅ FTS5 full-text search with syntax',
        mem0: '✅ Semantic search via embeddings',
        winner: 'tie',
      },
      {
        name: 'Save Conversations',
        aimemory: '✅ Direct save with tags & source',
        mem0: '✅ Auto-extracted facts/entities',
        winner: 'tie',
      },
      {
        name: 'Cross-Platform Search',
        aimemory: '✅ ChatGPT, Claude, DeepSeek, Gemini',
        mem0: '❌ Single-source only',
        winner: 'aimemory',
      },
      {
        name: 'Memory Types',
        aimemory: 'Conversations, notes, tags, batches',
        mem0: 'Facts, entities, relations',
        winner: 'tie',
      },
      {
        name: 'Batch Operations',
        aimemory: '✅ batch_save, import/export JSON',
        mem0: '✅ Batch add via API',
        winner: 'tie',
      },
    ],
  },
  {
    category: 'Privacy & Security',
    features: [
      {
        name: 'Data Storage',
        aimemory: '100% local — your SQLite file',
        mem0: 'Cloud — Mem0 servers',
        winner: 'aimemory',
      },
      {
        name: 'API Key Required',
        aimemory: '❌ No — works without any keys',
        mem0: '✅ Yes — required for all operations',
        winner: 'aimemory',
      },
      {
        name: 'Data Export',
        aimemory: '✅ JSON export anytime',
        mem0: '✅ API-based export',
        winner: 'tie',
      },
      {
        name: 'E2E Encryption',
        aimemory: 'N/A — local storage',
        mem0: 'Optional cloud encryption',
        winner: 'tie',
      },
    ],
  },
  {
    category: 'Developer Experience',
    features: [
      {
        name: 'MCP Transport',
        aimemory: 'stdio + HTTP (dual mode)',
        mem0: 'stdio only',
        winner: 'aimemory',
      },
      {
        name: 'Number of Tools',
        aimemory: '12 tools (full CRUD + analytics)',
        mem0: '3 tools (add, search, get)',
        winner: 'aimemory',
      },
      {
        name: 'Platform Compatibility',
        aimemory: 'Claude, Cursor, Windsurf, VS Code, 113+',
        mem0: 'Claude, Cursor, limited clients',
        winner: 'aimemory',
      },
      {
        name: 'Open Source',
        aimemory: '✅ MIT License',
        mem0: '✅ Apache 2.0 (core), cloud is proprietary',
        winner: 'tie',
      },
    ],
  },
  {
    category: 'Pricing',
    features: [
      {
        name: 'Free Tier',
        aimemory: '✅ Unlimited — 100% free',
        mem0: '✅ 10K operations/month',
        winner: 'aimemory',
      },
      {
        name: 'Paid Tier',
        aimemory: 'N/A — entirely free',
        mem0: '$24/month for managed service',
        winner: 'aimemory',
      },
      {
        name: 'Enterprise',
        aimemory: 'Self-host (free)',
        mem0: '$199/month + custom pricing',
        winner: 'aimemory',
      },
    ],
  },
];

const faqs = [
  {
    q: 'Is AI Memory MCP a drop-in replacement for Mem0?',
    a: 'Yes and no. AI Memory MCP focuses on managing existing AI conversations (from ChatGPT, Claude, etc.) with full CRUD operations. Mem0 focuses on extracting structured facts and entities from conversations. If you need to search past conversations across platforms, AI Memory is better. If you need knowledge graph extraction, Mem0 may be more suitable.',
  },
  {
    q: 'Can I use both AI Memory MCP and Mem0 together?',
    a: 'Yes! Both are MCP servers, so you can configure both in your MCP client. Use AI Memory for searching past conversations and Mem0 for extracting structured knowledge. They complement each other well.',
  },
  {
    q: 'Does AI Memory MCP work with Claude Desktop?',
    a: 'Yes. Add the following to your claude_desktop_config.json: {"mcpServers": {"ai-memory": {"command": "aimemory-mcp-server"}}}. Restart Claude Desktop and ask Claude to search your memory.',
  },
  {
    q: 'Why does AI Memory MCP work offline but Mem0 does not?',
    a: 'AI Memory MCP stores all data in a local SQLite database on your machine. It uses stdio transport to communicate directly with your AI client. Mem0 requires a cloud API connection to its servers for all memory operations.',
  },
  {
    q: 'Which is better for privacy — AI Memory MCP or Mem0?',
    a: 'AI Memory MCP is better for privacy. All data stays on your local machine in a SQLite file. No internet connection is required. Mem0 stores your memory on their cloud servers, though they offer encryption options.',
  },
  {
    q: 'How does the search quality compare?',
    a: 'AI Memory uses SQLite FTS5 (full-text search) which is excellent for exact keyword matching, phrase search, and boolean queries. Mem0 uses semantic search (vector embeddings) which is better for concept-based queries. For searching specific conversations you had, FTS5 is typically faster and more precise.',
  },
];

export default function McpVsMem0() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl">🧠</span>
              <span className="text-lg font-semibold text-gray-900 tracking-tight">AI Memory</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/mcp-server" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">MCP Server</Link>
              <Link href="/compare" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Compare</Link>
              <Link href="/docs/mcp" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Docs</Link>
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm mb-6">
            <span className="text-base">⚖️</span>
            MCP Memory Server Comparison
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            AI Memory MCP vs Mem0
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            Two MCP memory servers, fundamentally different approaches. One is <strong className="text-gray-700">local-first, zero-config, and free</strong>. The other is a <strong className="text-gray-700">cloud API with $24M in funding</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mcp-server"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-base"
            >
              🧠 Try AI Memory MCP →
            </Link>
            <Link
              href="/mcp-directory"
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-base"
            >
              📋 View All MCP Servers
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">⚡ Quick Verdict</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🧠</span>
                  <h3 className="text-lg font-bold text-gray-900">Choose AI Memory MCP if:</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'You want zero-config setup (one pip install)',
                    'You need offline/local memory (privacy-first)',
                    'You want to search across ChatGPT, Claude, DeepSeek, Gemini',
                    'You need a completely free solution',
                    'You want 12 tools (not just 3)',
                    'You prefer your data on your own machine',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🔗</span>
                  <h3 className="text-lg font-bold text-gray-900">Choose Mem0 if:</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'You need semantic/concept-based search (vector embeddings)',
                    'You want automatic fact/entity extraction',
                    'You need a managed cloud service with SDK',
                    'You\'re building a B2B application with memory',
                    'You need a knowledge graph of entities/relations',
                    'You have API budget for cloud operations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-500 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      {comparisonFeatures.map((category) => (
        <section key={category.category} className="pb-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 w-1/4">Feature</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-blue-600 w-[37.5%]">🧠 AI Memory MCP</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 w-[37.5%]">🔗 Mem0</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {category.features.map((feature) => (
                    <tr key={feature.name} className={feature.winner === 'aimemory' ? 'bg-blue-50/30' : ''}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{feature.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{feature.aimemory}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{feature.mem0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      {/* Setup Comparison */}
      <section className="pb-16 px-6 bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Setup in 10 seconds vs 30 minutes</h2>
          <p className="text-gray-500 text-center mb-12">See the difference side by side.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border-2 border-green-200 p-8">
              <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full mb-4">10 SECONDS</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🧠 AI Memory MCP</h3>
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">
                    $ pip install aimemory-mcp-server
                  </code>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">
                    {'{'}&quot;mcpServers&quot;: {'{'}&quot;ai-memory&quot;: {'{'}&quot;command&quot;: &quot;aimemory-mcp-server&quot;{'}'}{'}'}{'}'}
                  </code>
                </div>
                <p className="text-sm text-gray-600">That&apos;s it. Two commands. No API keys. No account. No cloud.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full mb-4">30+ MINUTES</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔗 Mem0</h3>
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-gray-400 text-sm">
                    $ pip install mem0ai
                  </code>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-gray-400 text-sm">
                    $ # 1. Create account at mem0.ai<br />
                    # 2. Get API key from dashboard<br />
                    # 3. Configure API key in .env<br />
                    # 4. Set up project/user IDs<br />
                    # 5. Configure MCP server
                  </code>
                </div>
                <p className="text-sm text-gray-600">Requires account registration, API key management, and project configuration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use Each */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Use the right tool for the job</h2>
          <p className="text-gray-500 text-center mb-12">These tools solve different problems. Here&apos;s when each shines.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">🧠 AI Memory MCP — Conversation Manager</h3>
              <div className="space-y-4">
                {[
                  { icon: '🔍', title: 'Search Past Conversations', desc: '"What did I ask Claude about React patterns last week?"' },
                  { icon: '💾', title: 'Save & Organize', desc: 'Save important insights with tags, browse by topic or date.' },
                  { icon: '🌐', title: 'Cross-Platform', desc: 'Search across ChatGPT, Claude, DeepSeek, Gemini from one place.' },
                  { icon: '🔒', title: 'Privacy First', desc: 'All data stays on your machine. No cloud dependency.' },
                  { icon: '📦', title: 'Import & Export', desc: 'Upload ChatGPT exports, backup as JSON, migrate freely.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">🔗 Mem0 — Knowledge Extractor</h3>
              <div className="space-y-4">
                {[
                  { icon: '🧬', title: 'Entity Extraction', desc: 'Automatically extract people, places, concepts from conversations.' },
                  { icon: '🕸️', title: 'Knowledge Graph', desc: 'Build a graph of entities and relationships over time.' },
                  { icon: '🤖', title: 'Semantic Search', desc: 'Find conceptually related memories using vector embeddings.' },
                  { icon: '☁️', title: 'Cloud-Managed', desc: 'Managed service with SDK, API, and dashboard.' },
                  { icon: '🏢', title: 'B2B Focus', desc: 'Built for applications that need structured memory layers.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16 px-6 bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
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
          <h2 className="text-3xl font-bold text-white mb-4">Try AI Memory MCP today</h2>
          <p className="text-gray-400 mb-8">One pip install. 10 seconds. Zero config. Works with Claude Desktop, Cursor, and 113+ MCP clients.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mcp-server"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              ⭐ Install AI Memory MCP
            </Link>
            <Link
              href="/docs/mcp"
              className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              📖 Setup Guide →
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-4">pip install git+https://github.com/jingchang0623-crypto/aimemory.git#subdirectory=mcp-server</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
