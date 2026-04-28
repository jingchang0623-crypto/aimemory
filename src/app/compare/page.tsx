import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Memory vs Chat Memo vs AI Exporter - Feature Comparison (2026)',
  description: 'Compare AI Memory with Chat Memo, AI Exporter, Supermemory, and Mem0. Features, pricing, privacy, and platform support compared side by side.',
  keywords: ['ai memory comparison', 'chat memo vs ai memory', 'ai exporter alternative', 'best ai memory tool', 'ai conversation manager comparison'],
  openGraph: {
    title: 'AI Memory vs Competitors - Feature Comparison',
    description: 'Compare AI Memory with Chat Memo, AI Exporter, Supermemory, and Mem0. Features, pricing, privacy, and platform support.',
    url: 'https://aimemory.pro/compare',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aimemory.pro/compare',
  },
};

const competitors = [
  {
    name: 'AI Memory',
    logo: '🧠',
    highlight: true,
    pricing: 'Free (unlimited local) | Pro $6.9/mo',
    platforms: 'ChatGPT, Claude, DeepSeek, Gemini, Kimi',
    features: {
      export: true,
      search: true,
      crossPlatform: true,
      memoryInjection: true,
      mcpServer: true,
      localFirst: true,
      cloudSync: true,
      e2ee: true,
      browserExtension: true,
      apiAccess: true,
      knowledgeGraph: false,
      aiAnalysis: true,
    },
  },
  {
    name: 'Chat Memo',
    logo: '💬',
    highlight: false,
    pricing: 'Free (cloud sync planned)',
    platforms: 'ChatGPT, Claude',
    features: {
      export: true,
      search: true,
      crossPlatform: false,
      memoryInjection: false,
      mcpServer: false,
      localFirst: false,
      cloudSync: true,
      e2ee: false,
      browserExtension: true,
      apiAccess: false,
      knowledgeGraph: false,
      aiAnalysis: false,
    },
  },
  {
    name: 'AI Exporter',
    logo: '📤',
    highlight: false,
    pricing: '$3.88/mo',
    platforms: 'ChatGPT',
    features: {
      export: true,
      search: false,
      crossPlatform: false,
      memoryInjection: false,
      mcpServer: false,
      localFirst: true,
      cloudSync: false,
      e2ee: false,
      browserExtension: true,
      apiAccess: false,
      knowledgeGraph: false,
      aiAnalysis: false,
    },
  },
  {
    name: 'Supermemory',
    logo: '🌟',
    highlight: false,
    pricing: 'Free (open source)',
    platforms: 'ChatGPT, Claude',
    features: {
      export: true,
      search: true,
      crossPlatform: true,
      memoryInjection: true,
      mcpServer: false,
      localFirst: false,
      cloudSync: true,
      e2ee: false,
      browserExtension: true,
      apiAccess: true,
      knowledgeGraph: true,
      aiAnalysis: true,
    },
  },
  {
    name: 'Mem0',
    logo: '🔗',
    highlight: false,
    pricing: 'Free OSS | Cloud API $0.01/1K',
    platforms: 'API only',
    features: {
      export: true,
      search: true,
      crossPlatform: true,
      memoryInjection: false,
      mcpServer: true,
      localFirst: false,
      cloudSync: true,
      e2ee: false,
      browserExtension: false,
      apiAccess: true,
      knowledgeGraph: true,
      aiAnalysis: true,
    },
  },
];

const featureLabels: Record<string, string> = {
  export: 'Conversation Export',
  search: 'Full-Text Search',
  crossPlatform: 'Cross-Platform Support',
  memoryInjection: 'Memory Injection',
  mcpServer: 'MCP Server',
  localFirst: 'Local-First Storage',
  cloudSync: 'Cloud Sync',
  e2ee: 'End-to-End Encryption',
  browserExtension: 'Browser Extension',
  apiAccess: 'API Access',
  knowledgeGraph: 'Knowledge Graph',
  aiAnalysis: 'AI-Powered Analysis',
};

export default function ComparePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best AI memory tool in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Memory is the best all-around AI memory tool in 2026. It supports 5 AI platforms (ChatGPT, Claude, DeepSeek, Gemini, Kimi), offers memory injection, MCP server integration, and local-first privacy. Chat Memo is a good free alternative for ChatGPT-only users. Mem0 is best for developers building custom memory systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is AI Memory different from Chat Memo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Memory supports 5 AI platforms while Chat Memo only supports ChatGPT and Claude. AI Memory also offers memory injection (inserting memories into new AI conversations), MCP server integration for Claude Desktop and Cursor, and local-first storage. Chat Memo stores data in the cloud.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is AI Memory free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, AI Memory\'s core features are completely free with unlimited local storage. The Pro plan ($6.9/month) adds cloud sync, end-to-end encryption, and advanced AI analysis. All export, search, and memory injection features are free.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is memory injection?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Memory injection is AI Memory\'s unique feature that automatically inserts your saved memories into new AI conversations. When you start a new chat with ChatGPT, Claude, or DeepSeek, AI Memory injects relevant context so the AI already knows your preferences, past discussions, and project details.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI memory tool is most private?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Memory is the most private option because it stores all data locally in your browser using IndexedDB. No data is sent to any server unless you explicitly enable cloud sync (Pro feature with E2EE). Chat Memo and Supermemory store data on their servers. Mem0 requires a cloud API connection.',
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
              <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link>
              <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Memory vs The Competition
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See how AI Memory compares to Chat Memo, AI Exporter, Supermemory, and Mem0 on features, pricing, and privacy.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 min-w-[200px]">Feature</th>
                  {competitors.map((c) => (
                    <th key={c.name} className={`text-center py-4 px-3 min-w-[140px] ${c.highlight ? 'bg-blue-50 rounded-t-lg' : ''}`}>
                      <div className="text-2xl mb-1">{c.logo}</div>
                      <div className={`font-semibold ${c.highlight ? 'text-blue-700' : 'text-gray-900'}`}>{c.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{c.pricing}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(featureLabels).map(([key, label]) => (
                  <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-700">{label}</td>
                    {competitors.map((c) => (
                      <td key={c.name} className={`text-center py-3 px-3 ${c.highlight ? 'bg-blue-50' : ''}`}>
                        {c.features[key as keyof typeof c.features] ? (
                          <span className="text-green-600 text-lg">✓</span>
                        ) : (
                          <span className="text-gray-300 text-lg">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">Supported Platforms</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`text-center py-3 px-3 text-sm ${c.highlight ? 'bg-blue-50' : ''}`}>
                      <span className={c.highlight ? 'text-blue-700 font-medium' : 'text-gray-600'}>{c.platforms}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Comparison Sections */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose AI Memory?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl mb-3">🔄</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-Platform Support</h3>
                <p className="text-gray-600 text-sm">
                  AI Memory supports 5 AI platforms: ChatGPT, Claude, DeepSeek, Gemini, and Kimi. Most competitors only support 1-2 platforms. Your memories are searchable across all of them in one place.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl mb-3">💉</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Memory Injection</h3>
                <p className="text-gray-600 text-sm">
                  AI Memory&apos;s unique feature: automatically inject your saved memories into new AI conversations. The AI already knows your context before you start typing. No other tool offers this.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl mb-3">🔒</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Local-First Privacy</h3>
                <p className="text-gray-600 text-sm">
                  All data stays in your browser by default. No account required, no data sent to any server. Cloud sync with E2EE is optional. Chat Memo and Supermemory store data on their servers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl mb-3">🔌</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">MCP Server</h3>
                <p className="text-gray-600 text-sm">
                  AI Memory has a built-in MCP (Model Context Protocol) server that works with Claude Desktop, Cursor, and 100+ MCP clients. Search and add memories from any MCP-compatible tool.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Memory vs Specific Competitors */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Head-to-Head Comparisons</h2>

            <div className="space-y-8">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🧠 AI Memory vs 💬 Chat Memo</h3>
                <p className="text-gray-600 mb-4">
                  Chat Memo is the most popular AI memory extension with 10K+ users and a 4.9 rating. It&apos;s free and works well for ChatGPT. However, it only supports ChatGPT and Claude — no DeepSeek, Gemini, or Kimi. It stores data on their servers (not local-first), and has no memory injection or MCP server.
                </p>
                <p className="text-gray-600">
                  <strong>Choose AI Memory if:</strong> You use multiple AI platforms, want memory injection, or care about local-first privacy. <strong>Choose Chat Memo if:</strong> You only use ChatGPT and want a simple, free cloud-based solution.
                </p>
                <Link href="/blog/chat-memo-vs-ai-memory" className="text-blue-600 text-sm mt-3 inline-block hover:underline">Read full comparison →</Link>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🧠 AI Memory vs 📤 AI Exporter</h3>
                <p className="text-gray-600 mb-4">
                  AI Exporter has 80K+ users but focuses only on exporting ChatGPT conversations to various formats. It has no search, no cross-platform support, no memory injection. At $3.88/month, it&apos;s actually more expensive than AI Memory for fewer features.
                </p>
                <p className="text-gray-600">
                  <strong>Choose AI Memory if:</strong> You want to search, organize, and reuse your AI conversations — not just export them. <strong>Choose AI Exporter if:</strong> You only need one-time ChatGPT data export.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🧠 AI Memory vs 🌟 Supermemory</h3>
                <p className="text-gray-600 mb-4">
                  Supermemory (22K GitHub stars) is an open-source AI memory tool with knowledge graph and AI analysis features. However, it requires self-hosting and stores data on servers. It&apos;s more developer-focused and less accessible to non-technical users.
                </p>
                <p className="text-gray-600">
                  <strong>Choose AI Memory if:</strong> You want a ready-to-use tool that works in your browser with zero setup. <strong>Choose Supermemory if:</strong> You&apos;re a developer who wants to self-host and customize the memory system.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🧠 AI Memory vs 🔗 Mem0</h3>
                <p className="text-gray-600 mb-4">
                  Mem0 (54K GitHub stars, $24M funding) is a B2B memory API for developers. It&apos;s not a consumer product — you can&apos;t use it to manage your personal AI conversations. It&apos;s designed for developers building memory into their own AI applications.
                </p>
                <p className="text-gray-600">
                  <strong>Choose AI Memory if:</strong> You&apos;re a user who wants to manage your personal AI conversation history. <strong>Choose Mem0 if:</strong> You&apos;re a developer building a product that needs memory capabilities.
                </p>
              </div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Try the Best AI Memory Tool?</h2>
            <p className="text-blue-100 mb-8">Free, private, and works with 5 AI platforms. No account needed.</p>
            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Free →
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
