'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Tool {
  name: string;
  logo: string;
  url: string;
  blogSlug?: string;
  pricing: string;
  isFree: boolean;
  isRecommended?: boolean;
  platforms: string;
  features: string[];
  category: string;
}

const tools: Tool[] = [
  {
    name: 'AI Memory',
    logo: '🧠',
    url: 'https://aimemory.pro',
    blogSlug: '/blog/best-ai-memory-extension-2026',
    pricing: 'Free / Plus $3.9 / Pro $7.9',
    isFree: true,
    isRecommended: true,
    platforms: 'ChatGPT, Claude, DeepSeek, Gemini, Kimi',
    features: [
      'Memory injection into new AI conversations',
      'MCP server for Claude Desktop & Cursor',
      'Local-first storage with E2EE cloud sync',
      'Cross-platform search across 5 AI tools',
    ],
    category: 'User Tool',
  },
  {
    name: 'MemoryPlugin',
    logo: '🔌',
    url: 'https://memoryplugin.com',
    pricing: '$60–80/yr',
    isFree: false,
    platforms: '18+ AI platforms',
    features: [
      'Chrome extension for broad platform support',
      'Works across 18+ AI platforms',
      'Conversation memory and recall',
      'Browser-based memory management',
    ],
    category: 'Browser Extension',
  },
  {
    name: 'AI Context Flow',
    logo: '🌊',
    url: 'https://appsumo.com/products/ai-context-flow',
    pricing: '$59–$339 LTD',
    isFree: false,
    platforms: 'Multiple AI platforms',
    features: [
      'AppSumo Select product',
      'Lifetime deal pricing ($59–$339)',
      '2K+ users with 5.0 rating',
      'Context management for AI workflows',
    ],
    category: 'Lifetime Deal',
  },
  {
    name: 'Chat Memo',
    logo: '💬',
    url: 'https://chromewebstore.google.com/detail/chat-memo',
    blogSlug: '/blog/chat-memo-vs-ai-memory',
    pricing: 'Free',
    isFree: true,
    platforms: 'ChatGPT, Claude',
    features: [
      '10K+ users, 4.9 Chrome rating',
      'Save and search ChatGPT conversations',
      'Cloud sync for conversation history',
      'Simple browser extension interface',
    ],
    category: 'Browser Extension',
  },
  {
    name: 'Supermemory',
    logo: '🌟',
    url: 'https://github.com/supermemory/supermemory',
    blogSlug: '/blog/ai-memory-comparison-2026',
    pricing: 'Free (Open Source)',
    isFree: true,
    platforms: 'ChatGPT, Claude, API',
    features: [
      '22K+ GitHub stars',
      'Knowledge graph for memory connections',
      'AI-powered analysis and search',
      'Self-hostable open source solution',
    ],
    category: 'Open Source',
  },
  {
    name: 'Mem0',
    logo: '🔗',
    url: 'https://mem0.ai',
    blogSlug: '/blog/mem0-alternative',
    pricing: 'Free OSS / $0.01 per 1K API calls',
    isFree: true,
    platforms: 'API / Developer Platform',
    features: [
      '54K+ GitHub stars, $24M in funding',
      'B2B memory API for AI applications',
      'Knowledge graph and semantic search',
      'MCP server integration available',
    ],
    category: 'Developer API',
  },
  {
    name: 'AI Exporter',
    logo: '📤',
    url: 'https://chromewebstore.google.com/detail/ai-exporter',
    pricing: '$3.88/mo',
    isFree: false,
    platforms: 'ChatGPT only',
    features: [
      '80K+ users on Chrome Web Store',
      'Export ChatGPT to PDF, Markdown, HTML',
      'Batch export entire conversation history',
      'ChatGPT-only — no other AI platforms',
    ],
    category: 'Export Tool',
  },
  {
    name: 'Zep',
    logo: '⚡',
    url: 'https://www.getzep.com',
    pricing: 'Free (Open Source)',
    isFree: true,
    platforms: 'API / Agent Framework',
    features: [
      'B2B memory API for AI agents',
      'Fact extraction and temporal awareness',
      'Designed for agent-based architectures',
      'Open source with managed cloud option',
    ],
    category: 'Developer API',
  },
  {
    name: 'MemGPT / Letta',
    logo: '🧪',
    url: 'https://www.letta.com',
    pricing: 'Free (Open Source)',
    isFree: true,
    platforms: 'API / Research Platform',
    features: [
      'Research-focused memory system',
      'Hierarchical memory architecture',
      'Self-editing memory for long conversations',
      'Academic foundation (UC Berkeley research)',
    ],
    category: 'Open Source',
  },
];

const categories = ['All', 'Free', 'User Tool', 'Open Source', 'Developer API', 'Browser Extension'];

export default function DirectoryGrid() {
  const [filter, setFilter] = useState('All');

  const filteredTools = tools.filter((tool) => {
    if (filter === 'All') return true;
    if (filter === 'Free') return tool.isFree;
    return tool.category === filter;
  });

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
            {cat === 'Free' && (
              <span className="ml-1 text-xs opacity-75">
                ({tools.filter((t) => t.isFree).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-500 text-center mb-8">
        Showing {filteredTools.length} of {tools.length} tools
        {filter !== 'All' && (
          <> in <span className="font-medium text-gray-700">{filter}</span></>
        )}
      </p>

      {/* Tool Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <div
            key={tool.name}
            className={`relative bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow ${
              tool.isRecommended
                ? 'border-blue-500 ring-2 ring-blue-100'
                : 'border-gray-200'
            }`}
          >
            {tool.isRecommended && (
              <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                ⭐ RECOMMENDED
              </div>
            )}

            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">{tool.logo}</span>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{tool.name}</h3>
                <span className="text-sm text-gray-500">{tool.category}</span>
              </div>
            </div>

            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                tool.isFree
                  ? 'bg-green-50 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {tool.pricing}
              </span>
            </div>

            <div className="mb-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Platforms</p>
              <p className="text-sm text-gray-700">{tool.platforms}</p>
            </div>

            <ul className="space-y-2 mb-5">
              {tool.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                  {feat}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 text-center py-2 rounded-lg text-sm font-medium transition-colors ${
                  tool.isRecommended
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Visit {tool.name} →
              </a>
              {tool.blogSlug && (
                <Link
                  href={tool.blogSlug}
                  className="text-sm text-blue-600 hover:underline whitespace-nowrap"
                >
                  Read more
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
