import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Features & Pricing - AI Memory',
  description: 'Explore AI Memory features: import from ChatGPT, Claude, DeepSeek & Gemini. Full-text search, Chrome extension auto-save, session-isolated private storage.',
  alternates: {
    canonical: 'https://aimemory.pro/features',
  },
};

const features = [
  {
    icon: '📥',
    title: 'Multi-Platform Import',
    description: 'Import conversations from ChatGPT, Claude, DeepSeek, and Gemini. One upload, all your AI history in one place.',
  },
  {
    icon: '🔍',
    title: 'Full-Text Search',
    description: 'Search across all your conversations instantly. Find that one answer from months ago in seconds.',
  },
  {
    icon: '🔌',
    title: 'Chrome Extension Auto-Save',
    description: 'Automatically save new conversations as they happen. Never lose an important AI interaction again.',
  },
  {
    icon: '🔒',
    title: '100% Private — Session-Isolated Storage',
    description: 'Your data is stored in an isolated session on our server. Only you can access it with your session cookie. No tracking, no data selling.',
  },
  {
    icon: '🌐',
    title: 'Cross-Platform Unified Management',
    description: 'View and manage conversations from every AI platform in a single, unified interface.',
  },
  {
    icon: '🖥️',
    title: 'MCP Server',
    description: 'Connect AI Memory to Claude Desktop, Cursor, and 100+ other MCP-compatible AI tools. Search your conversation history directly from your AI assistant.',
  },
];

const upcoming = [
  { icon: '💉', title: 'Memory Injection', description: 'Inject past conversation context into new AI sessions automatically.' },
  { icon: '🧠', title: 'AI Analysis', description: 'Get AI-powered summaries, insights, and knowledge extraction from your conversations.' },
  { icon: '🔄', title: 'Cross-Platform Sync', description: 'Sync your memories across devices with end-to-end encryption.' },
];

const comparison = [
  { feature: 'Multi-platform import', aimemory: true, chatmemo: false, aiexporter: false },
  { feature: 'Full-text search', aimemory: true, chatmemo: true, aiexporter: false },
  { feature: 'Chrome extension auto-save', aimemory: true, chatmemo: true, aiexporter: false },
  { feature: '100% local/private', aimemory: true, chatmemo: false, aiexporter: true },
  { feature: 'No account required', aimemory: true, chatmemo: false, aiexporter: true },
  { feature: 'Cross-platform unified view', aimemory: true, chatmemo: false, aiexporter: false },
  { feature: 'Memory injection (upcoming)', aimemory: true, chatmemo: false, aiexporter: false },
  { feature: 'MCP Server (100+ clients)', aimemory: true, chatmemo: false, aiexporter: false },
];

function CheckIcon() {
  return <span className="text-green-600 font-bold">✓</span>;
}

function XIcon() {
  return <span className="text-red-400">✗</span>;
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-3xl font-bold text-gray-900 hover:opacity-80">
            🧠 AI Memory
          </Link>
          <p className="text-gray-600 mt-1">
            Your AI conversations, organized and searchable
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The complete toolkit for managing your AI conversation history — privately and effortlessly.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Coming Soon</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcoming.map((u) => (
              <div key={u.title} className="bg-blue-50 rounded-xl border border-blue-100 p-6">
                <div className="text-3xl mb-3">{u.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-gray-600 text-sm">{u.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Compare</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-6 py-3 text-sm font-semibold text-blue-600">AI Memory</th>
                  <th className="text-center px-6 py-3 text-sm font-semibold text-gray-600">Chat Memo</th>
                  <th className="text-center px-6 py-3 text-sm font-semibold text-gray-600">AI Exporter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-3 text-sm text-gray-800">{row.feature}</td>
                    <td className="text-center px-6 py-3">{row.aimemory ? <CheckIcon /> : <XIcon />}</td>
                    <td className="text-center px-6 py-3">{row.chatmemo ? <CheckIcon /> : <XIcon />}</td>
                    <td className="text-center px-6 py-3">{row.aiexporter ? <CheckIcon /> : <XIcon />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-md mx-auto">
            <div className="text-5xl font-bold text-blue-600 mb-2">Free</div>
            <p className="text-gray-600 mb-6">Full features, no hidden costs. AI Memory is free and open.</p>
            <ul className="text-left text-gray-600 space-y-2 mb-6">
              <li>✓ Unlimited conversation imports</li>
              <li>✓ Full-text search</li>
              <li>✓ Chrome extension auto-save</li>
              <li>✓ Session-isolated private storage</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Started</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Upload Conversations
            </Link>
            <Link
              href="/chrome-extension"
              className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Download Chrome Extension
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
