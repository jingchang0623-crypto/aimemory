import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI Memory Tools Directory 2026 — Compare 20+ ChatGPT, Claude & AI Memory Tools',
  description:
    'Comprehensive directory of 20+ AI memory tools, extensions, and MCP servers. Compare features, pricing, platforms, and find the best AI memory solution for your workflow.',
  keywords: ['ai memory tools directory', 'ai memory tools list', 'chatgpt memory extension list', 'claude memory tool comparison', 'best ai memory tools 2026', 'ai conversation manager tools', 'mcp memory servers', 'ai memory extensions chrome'],
  alternates: {
    canonical: 'https://aimemory.pro/tools',
  },
};

const tools = [
  {
    name: 'AI Memory',
    logo: '🧠',
    url: 'https://aimemory.pro',
    price: 'Free',
    platforms: 5,
    mcp: true,
    e2ee: true,
    search: 'FTS5 (excellent)',
    injection: true,
    highlight: 'Best overall — free, MCP Server, cross-platform',
    rating: 4.8,
  },
  {
    name: 'Mem0',
    logo: '⚡',
    url: 'https://mem0.ai',
    price: '$24M funded',
    platforms: 'API-only',
    mcp: true,
    e2ee: false,
    search: 'Vector search',
    injection: true,
    highlight: 'Best for developers building AI apps',
    rating: 4.5,
  },
  {
    name: 'AI Context Flow',
    logo: '🌊',
    url: 'https://aicontextflow.com',
    price: '$29 lifetime',
    platforms: 18,
    mcp: false,
    e2ee: false,
    search: 'Basic',
    injection: false,
    highlight: 'Best for multi-platform support',
    rating: 4.2,
  },
  {
    name: 'Chat Memo',
    logo: '💬',
    url: 'https://chatmemo.com',
    price: 'Free',
    platforms: 7,
    mcp: false,
    e2ee: false,
    search: 'Basic',
    injection: false,
    highlight: 'Best for Chinese AI platforms',
    rating: 4.9,
  },
  {
    name: 'MemoryPlugin',
    logo: '🔌',
    url: 'https://memoryplugin.com',
    price: '$60-80/yr',
    platforms: 18,
    mcp: false,
    e2ee: false,
    search: 'Good',
    injection: false,
    highlight: 'Best for enterprise teams',
    rating: 4.3,
  },
  {
    name: 'AI Exporter',
    logo: '📤',
    url: 'https://aiexporter.com',
    price: 'Free',
    platforms: 5,
    mcp: false,
    e2ee: false,
    search: 'None',
    injection: false,
    highlight: 'Best for one-time exports',
    rating: 4.0,
  },
  {
    name: 'Supermemory',
    logo: '🚀',
    url: 'https://supermemory.ai',
    price: 'Freemium',
    platforms: 'Web',
    mcp: false,
    e2ee: false,
    search: 'Good',
    injection: true,
    highlight: 'Best for researchers',
    rating: 4.4,
  },
  {
    name: 'Anuma AI',
    logo: '🎯',
    url: 'https://anuma.ai',
    price: '$9.99/mo',
    platforms: 'Web',
    mcp: false,
    e2ee: false,
    search: 'Basic',
    injection: true,
    highlight: 'Council Mode, 13+ models',
    rating: 4.1,
  },
  {
    name: 'Kumbukum',
    logo: '🧩',
    url: 'https://kumbukum.com',
    price: 'Free',
    platforms: 'Web',
    mcp: false,
    e2ee: false,
    search: 'Basic',
    injection: false,
    highlight: 'Best for knowledge management',
    rating: 3.9,
  },
  {
    name: 'MemPalace',
    logo: '🏰',
    url: 'https://mempalace.ai',
    price: 'Freemium',
    platforms: 'Web',
    mcp: false,
    e2ee: false,
    search: 'Good',
    injection: false,
    highlight: 'Visual memory palace design',
    rating: 4.0,
  },
  {
    name: 'Tallei AI',
    logo: '📊',
    url: 'https://tallei.com',
    price: '$9-19/mo',
    platforms: 5,
    mcp: false,
    e2ee: false,
    search: 'Good',
    injection: false,
    highlight: 'Usage-based pricing model',
    rating: 4.2,
  },
  {
    name: 'agentmemory',
    logo: '🤖',
    url: 'https://github.com/agentmemory/agentmemory',
    price: 'Free (Open Source)',
    platforms: 'Coding agents',
    mcp: true,
    e2ee: false,
    search: 'Vector + KV',
    injection: true,
    highlight: 'Best for coding agents (Claude Code, Cursor)',
    rating: 4.6,
  },
  {
    name: 'Memex-MVP',
    logo: '📚',
    url: 'https://github.com/parallelclaw/memex-mvp',
    price: 'Free (Open Source)',
    platforms: 'Local-first',
    mcp: false,
    e2ee: true,
    search: 'Good',
    injection: false,
    highlight: 'Local-first, privacy-focused',
    rating: 4.0,
  },
  {
    name: 'Echoes',
    logo: '🔊',
    url: 'https://echoes.ai',
    price: 'Freemium',
    platforms: 3,
    mcp: false,
    e2ee: false,
    search: 'Basic',
    injection: false,
    highlight: 'Conversation management focused',
    rating: 3.8,
  },
  {
    name: 'Zep',
    logo: '⚡',
    url: 'https://getzep.com',
    price: 'Enterprise',
    platforms: 'API',
    mcp: true,
    e2ee: false,
    search: 'Vector + Graph',
    injection: true,
    highlight: 'Context engineering platform',
    rating: 4.3,
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are AI memory tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI memory tools help you save, search, and manage conversations with AI assistants like ChatGPT, Claude, and DeepSeek. They solve the problem of AI platforms forgetting context between sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which AI memory tool is best for ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Memory is the best free tool for ChatGPT users, offering full-text search, Chrome extension auto-save, and MCP Server integration. Chat Memo is also popular for Chinese users.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there free AI memory tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! AI Memory, Chat Memo, AI Exporter, Kumbukum, agentmemory, and Memex-MVP are all free. AI Memory offers the most features for free, including MCP Server and cross-platform support.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is MCP Server for AI memory?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MCP (Model Context Protocol) servers let AI assistants like Claude Desktop and Cursor directly access your saved memories. AI Memory provides a free MCP server with 12 memory tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I choose the right AI memory tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Consider: (1) Platform support - do you use ChatGPT, Claude, or others? (2) Features - search, injection, sync? (3) Pricing - free vs paid? (4) Privacy - local vs cloud? AI Memory covers all these with a free tier.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best alternative to Mem0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Memory is the best alternative to Mem0 for end users. While Mem0 focuses on B2B API, AI Memory provides user-facing features: Chrome extension, web UI, cross-platform search, and free MCP server.',
      },
    },
  ],
};

export default function ToolsDirectoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Memory Tools Directory 2026
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Compare 20+ AI memory tools, extensions, and MCP servers. Find the best solution for managing your ChatGPT, Claude, and AI conversations.
          </p>
          <div className="flex gap-4 flex-wrap">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              🧠 20+ Tools Listed
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              ⚡ MCP Servers Included
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              📊 Side-by-Side Comparison
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              🆓 Free Options Highlighted
            </span>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">Quick Links</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="#comparison-table" className="text-blue-700 hover:text-blue-900 underline">
              Comparison Table
            </Link>
            <span className="text-blue-300">•</span>
            <Link href="#free-tools" className="text-blue-700 hover:text-blue-900 underline">
              Free Tools
            </Link>
            <span className="text-blue-300">•</span>
            <Link href="#mcp-servers" className="text-blue-700 hover:text-blue-900 underline">
              MCP Servers
            </Link>
            <span className="text-blue-300">•</span>
            <Link href="#chrome-extensions" className="text-blue-700 hover:text-blue-900 underline">
              Chrome Extensions
            </Link>
            <span className="text-blue-300">•</span>
            <Link href="#faq" className="text-blue-700 hover:text-blue-900 underline">
              FAQ
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div id="comparison-table" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-900">Tool</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Price</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Platforms</th>
                  <th className="text-left p-4 font-semibold text-gray-900">MCP</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Search</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Injection</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Rating</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, i) => (
                  <tr key={i} className={`border-b hover:bg-gray-50 ${tool.name === 'AI Memory' ? 'bg-blue-50' : ''}`}>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{tool.logo}</span>
                        <div>
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-medium ${tool.name === 'AI Memory' ? 'text-blue-600' : 'text-gray-900'} hover:underline`}
                          >
                            {tool.name}
                          </a>
                          {tool.name === 'AI Memory' && (
                            <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Recommended</span>
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{tool.highlight}</div>
                    </td>
                    <td className="p-4">
                      <span className={`font-medium ${tool.price === 'Free' || tool.price.includes('Free') ? 'text-green-600' : 'text-gray-900'}`}>
                        {tool.price}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{tool.platforms}</td>
                    <td className="p-4">
                      {tool.mcp ? (
                        <span className="text-green-600">✓</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="p-4 text-gray-600">{tool.search}</td>
                    <td className="p-4">
                      {tool.injection ? (
                        <span className="text-green-600">✓</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-gray-900 font-medium">{tool.rating}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Free Tools Section */}
        <div id="free-tools" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Free AI Memory Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tools.filter(t => t.price.includes('Free')).map((tool, i) => (
              <div key={i} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">{tool.logo}</span>
                  <h3 className="text-lg font-semibold">{tool.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{tool.highlight}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Platforms:</span>
                    <span className="font-medium">{tool.platforms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">MCP Server:</span>
                    <span className={tool.mcp ? 'text-green-600' : 'text-gray-400'}>
                      {tool.mcp ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Search:</span>
                    <span className="font-medium">{tool.search}</span>
                  </div>
                </div>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Visit {tool.name} →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* MCP Servers Section */}
        <div id="mcp-servers" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">MCP Memory Servers</h2>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 mb-6">
            <p className="text-gray-700">
              MCP (Model Context Protocol) servers let AI assistants like Claude Desktop, Cursor, and Windsurf
              directly access your saved memories. This is the future of AI memory integration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tools.filter(t => t.mcp).map((tool, i) => (
              <div key={i} className="border rounded-lg p-6 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">{tool.logo}</span>
                  <h3 className="text-lg font-semibold">{tool.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{tool.highlight}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">MCP Compatible</span>
                  {tool.e2ee && <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">E2EE</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chrome Extensions Section */}
        <div id="chrome-extensions" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Chrome Extensions for AI Memory</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tools.filter(t => typeof t.platforms === 'number' && t.platforms > 3).map((tool, i) => (
              <div key={i} className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">{tool.logo}</span>
                  <h3 className="text-lg font-semibold">{tool.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{tool.highlight}</p>
                <div className="space-y-1 text-sm">
                  <div>Platforms: <strong>{tool.platforms}</strong></div>
                  <div>Memory Injection: <strong>{tool.injection ? 'Yes' : 'No'}</strong></div>
                  <div>Price: <strong className={tool.price.includes('Free') ? 'text-green-600' : ''}>{tool.price}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">What are AI memory tools?</h3>
              <p className="text-gray-600 text-sm">
                AI memory tools help you save, search, and manage conversations with AI assistants like ChatGPT, Claude, and DeepSeek.
                They solve the problem of AI platforms forgetting context between sessions.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Which AI memory tool is best for ChatGPT?</h3>
              <p className="text-gray-600 text-sm">
                AI Memory is the best free tool for ChatGPT users, offering full-text search, Chrome extension auto-save,
                and MCP Server integration. Chat Memo is also popular for Chinese users.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Are there free AI memory tools?</h3>
              <p className="text-gray-600 text-sm">
                Yes! AI Memory, Chat Memo, AI Exporter, Kumbukum, agentmemory, and Memex-MVP are all free.
                AI Memory offers the most features for free, including MCP Server and cross-platform support.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">What is MCP Server for AI memory?</h3>
              <p className="text-gray-600 text-sm">
                MCP (Model Context Protocol) servers let AI assistants like Claude Desktop and Cursor directly access your saved memories.
                AI Memory provides a free MCP server with 12 memory tools via <code className="bg-gray-100 px-1 rounded">pip install aimemory-mcp-server</code>.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">How do I choose the right AI memory tool?</h3>
              <p className="text-gray-600 text-sm">
                Consider: (1) Platform support - do you use ChatGPT, Claude, or others? (2) Features - search, injection, sync?
                (3) Pricing - free vs paid? (4) Privacy - local vs cloud? AI Memory covers all these with a free tier.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Try AI Memory?</h2>
          <p className="text-xl mb-6 opacity-90">
            Start free today. No signup required. Search across all your AI conversations.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Upload Your Chats — It's Free
          </Link>
        </div>
      </div>
    </div>
  );
}
