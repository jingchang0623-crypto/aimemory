import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Roadmap - AI Memory | What We\'re Building Next',
  description: 'See what features and improvements are coming to AI Memory. Public roadmap with quarterly goals, current priorities, and community-driven development.',
  keywords: ['AI memory roadmap', 'AI memory features', 'AI conversation manager roadmap', 'AI memory planned features'],
  alternates: {
    canonical: 'https://aimemory.pro/docs/roadmap',
  },
  openGraph: {
    title: 'AI Memory Roadmap — What We\'re Building Next',
    description: 'Public roadmap for AI Memory. See upcoming features, priorities, and how to influence development.',
    url: 'https://aimemory.pro/docs/roadmap',
    type: 'website',
  },
};

const phases = [
  {
    phase: 'Phase 1',
    title: 'Distribution & Growth',
    status: 'current',
    description: 'Making AI Memory easy to discover and install across all platforms.',
    items: [
      { title: 'MCP Server on PyPI', detail: 'pip install aimemory-mcp-server — one-command setup for Claude Desktop, Cursor, and 113+ MCP clients.', status: 'ready' },
      { title: 'Chrome Web Store Launch', detail: 'One-click install for the Chrome extension. No more "load unpacked" workaround.', status: 'ready' },
      { title: 'Google Search Console', detail: 'Verify site ownership for indexing analytics and sitemap submission.', status: 'ready' },
      { title: 'Product Hunt Launch', detail: 'Day-one launch with early-adopter positioning and community engagement.', status: 'planned' },
      { title: 'Reddit & Hacker News Launch', detail: 'Share the project with developer communities. Gather early feedback and users.', status: 'planned' },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Smart Features (Plus Tier)',
    status: 'upcoming',
    description: 'AI-powered features that bring your conversations to life.',
    items: [
      { title: 'AI Conversation Summary', detail: 'One-click summary of any conversation. Key points, decisions, and action items extracted automatically.', status: 'planned' },
      { title: 'Smart Auto-Tagging', detail: 'AI-powered tag suggestions based on conversation content. Automatic categorization.', status: 'planned' },
      { title: 'Knowledge Extraction', detail: 'Extract facts, preferences, and recurring themes across all your conversations.', status: 'planned' },
      { title: 'Conversation Analytics', detail: 'Usage patterns, topic distribution, platform comparison, and growth insights.', status: 'planned' },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Pro Features & Sync',
    status: 'future',
    description: 'Paid features for power users who need cloud sync and advanced capabilities.',
    items: [
      { title: 'End-to-End Encrypted Sync', detail: 'Sync your memories across devices with XChaCha20-Poly1305 encryption. Your data, your keys.', status: 'planned' },
      { title: 'MCP Cloud Endpoint', detail: 'Hosted MCP server with your data. No local setup needed — connect Claude/Cursor from anywhere.', status: 'planned' },
      { title: 'Knowledge Graph Visualization', detail: 'See how your conversations and topics connect. Interactive graph of your AI knowledge base.', status: 'planned' },
      { title: 'BYOK (Bring Your Own Key)', detail: 'Use your own API keys for AI analysis. No usage limits, no subscription needed for AI features.', status: 'planned' },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Platform Expansion',
    status: 'future',
    description: 'Expand to more platforms and collaboration features.',
    items: [
      { title: 'Team Shared Memory', detail: 'Shared knowledge base for teams. Collaborative AI conversation management.', status: 'planned' },
      { title: 'Firefox & Edge Extensions', detail: 'Bring auto-save and memory injection to all major browsers.', status: 'planned' },
      { title: 'Desktop App (Electron/Tauri)', detail: 'Native desktop experience with offline-first architecture.', status: 'planned' },
      { title: 'B2B Conversation Audit', detail: 'Enterprise-grade conversation logging and compliance features for regulated industries.', status: 'planned' },
    ],
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    shipped: 'bg-green-100 text-green-700',
    ready: 'bg-yellow-100 text-yellow-700',
    planned: 'bg-gray-100 text-gray-600',
    researching: 'bg-blue-100 text-blue-700',
  };
  const labels: Record<string, string> = {
    shipped: '✓ Shipped',
    ready: '● Ready',
    planned: '○ Planned',
    researching: '🔍 Researching',
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles[status] || styles.planned}`}>
      {labels[status] || status}
    </span>
  );
};

const PhaseBadge = ({ status }: { status: string }) => {
  if (status === 'current') {
    return (
      <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        In Progress
      </span>
    );
  }
  if (status === 'upcoming') {
    return <span className="text-sm text-gray-500">Up Next</span>;
  }
  return <span className="text-sm text-gray-400">Future</span>;
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">🧠 AI Memory</Link>
          <p className="text-gray-600 mt-1">Your AI conversations, organized and searchable</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Public Roadmap</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            What we&apos;re building, why, and when. This roadmap is driven by user feedback and our vision for the future of AI conversation management.
          </p>
          <p className="text-sm text-gray-500">
            Last updated: May 2026 • <Link href="/changelog" className="text-blue-600 underline">View Changelog</Link>
          </p>
        </section>

        {/* Philosophy */}
        <section className="mb-12 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Our Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🔒 Privacy First</h3>
              <p className="text-sm text-gray-600">Free tier stays 100% private. No data selling, no tracking. Premium features add intelligence, not surveillance.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🌐 Open & Extensible</h3>
              <p className="text-sm text-gray-600">Open-source MCP server, documented APIs, standard protocols. Your data is never locked in.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">⚡ Ship Fast, Iterate</h3>
              <p className="text-sm text-gray-600">We ship weekly (160+ updates so far). Community feedback shapes priorities.</p>
            </div>
          </div>
        </section>

        {/* Phases */}
        {phases.map((phase) => (
          <section key={phase.phase} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{phase.phase}</p>
                <h2 className="text-2xl font-bold text-gray-900">{phase.title}</h2>
              </div>
              <PhaseBadge status={phase.status} />
            </div>
            <p className="text-gray-600 mb-4">{phase.description}</p>
            <div className="space-y-3">
              {phase.items.map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                  <StatusBadge status={item.status} />
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Already Shipped */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">✅ Already Shipped</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                'Multi-platform import (ChatGPT, Claude, DeepSeek, Gemini, Kimi)',
                'Full-text search with FTS5',
                'Chrome extension with auto-save (ChatGPT, Claude, DeepSeek, Gemini, Kimi)',
                'Memory injection into AI chat inputs',
                'MCP Server v1.4.0 (12 tools)',
                'Tag management with autocomplete',
                'Conversation export (JSON, TXT, CSV)',
                'Stats dashboard',
                '160+ SEO guides & documentation',
                'Session-isolated private storage',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback CTA */}
        <section className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have a Feature Request?</h2>
          <p className="text-gray-600 mb-6">
            We build what users need. Share your ideas and vote on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/feedback" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Submit Feedback →
            </Link>
            <Link href="https://github.com/jingchang0623-crypto/aimemory" className="inline-block bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition" target="_blank" rel="noopener noreferrer">
              GitHub Issues ↗
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
