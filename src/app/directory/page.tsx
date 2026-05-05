import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import DirectoryGrid from './DirectoryGrid';

export const metadata: Metadata = {
  title: 'AI Memory Tools Directory — Every AI Memory Tool Compared (2026)',
  description:
    'The most comprehensive AI memory tools directory for 2026. Compare AI Memory, MemoryPlugin, Supermemory, Mem0, Chat Memo, and every AI memory tool available. Features, pricing, and platform support at a glance.',
  keywords: [
    'ai memory tools directory',
    'best ai memory tools 2026',
    'ai memory tools list',
    'ai memory comparison',
    'all ai memory tools',
    'ai conversation memory tools',
    'chatgpt memory tools',
    'ai memory extensions',
  ],
  openGraph: {
    title: 'AI Memory Tools Directory — Every AI Memory Tool Compared (2026)',
    description:
      'The most comprehensive directory of AI memory tools. Compare pricing, features, and platform support for every tool available in 2026.',
    url: 'https://aimemory.pro/directory',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aimemory.pro/directory',
  },
};

export default function DirectoryPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best AI memory tool in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Memory (aimemory.pro) is the best all-around AI memory tool in 2026. It supports 5 AI platforms (ChatGPT, Claude, DeepSeek, Gemini, Kimi), offers memory injection, MCP server integration, and local-first privacy. It is free for core features with a Pro plan at $6.9/month for cloud sync and E2EE.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best free AI memory tool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Memory offers the best free tier among AI memory tools — unlimited local storage, full-text search, memory injection, and cross-platform support, all at no cost. Chat Memo is another solid free option for ChatGPT and Claude users. Open-source alternatives like Supermemory (22K GitHub stars) and Mem0 (54K GitHub stars) are also free to self-host.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do AI memory tools work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI memory tools save, index, and organize your AI conversations so you can search and recall them later. They work by capturing conversation data from platforms like ChatGPT and Claude, storing it locally or in the cloud, and providing search and retrieval features. Advanced tools like AI Memory also offer memory injection — automatically inserting your saved context into new conversations so the AI remembers your preferences and past discussions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many AI memory tools exist in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There are at least 9 notable AI memory tools available in 2026: AI Memory, MemoryPlugin, AI Context Flow, Chat Memo, Supermemory, Mem0, AI Exporter, Zep, and MemGPT/Letta. They range from browser extensions for consumers to developer APIs for building custom memory systems. This directory covers all of them.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between consumer and developer AI memory tools?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Consumer AI memory tools (like AI Memory, Chat Memo, MemoryPlugin) are browser extensions or apps that help individual users save and search their AI conversations. Developer AI memory tools (like Mem0, Zep, MemGPT/Letta) are APIs and frameworks for building memory capabilities into AI applications and agents. AI Memory bridges both worlds with a consumer-friendly interface and MCP server/API access for developers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI memory tools support multiple AI platforms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Memory supports the most platforms (5): ChatGPT, Claude, DeepSeek, Gemini, and Kimi. MemoryPlugin supports 18+ platforms via its Chrome extension. Chat Memo supports ChatGPT and Claude only. AI Exporter only works with ChatGPT. Open-source tools like Mem0 and Zep are platform-agnostic since they work via API.',
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
            <div className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Updated May 2026 · {9} tools listed
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Memory Tools Directory
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Every AI memory tool available in 2026, compared by features, pricing, and platform support. From browser extensions to developer APIs — find the right tool for your workflow.
            </p>
          </div>
        </section>

        {/* Directory Grid (Client Component) */}
        <section className="py-4 px-6">
          <div className="max-w-6xl mx-auto">
            <DirectoryGrid />
          </div>
        </section>

        {/* Quick Comparison Summary */}
        <section className="py-16 px-6 bg-gray-50 mt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quick Comparison: Who Should Use What?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl mb-3">👤</div>
                <h3 className="font-semibold text-gray-900 mb-2">For Individual Users</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Use <strong>AI Memory</strong> if you want cross-platform memory injection and local-first privacy. Use <strong>Chat Memo</strong> if you only use ChatGPT.
                </p>
                <Link href="/blog/best-ai-memory-extension-2026" className="text-sm text-blue-600 hover:underline">
                  Read our guide →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl mb-3">👩‍💻</div>
                <h3 className="font-semibold text-gray-900 mb-2">For Developers</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Use <strong>Mem0</strong> for a production-ready memory API with 54K GitHub stars. Use <strong>Zep</strong> for agent-based memory architectures. Use <strong>MemGPT/Letta</strong> for research.
                </p>
                <Link href="/blog/mem0-alternative" className="text-sm text-blue-600 hover:underline">
                  Compare developer tools →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl mb-3">💰</div>
                <h3 className="font-semibold text-gray-900 mb-2">Best Value</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>AI Memory</strong> offers the most features for free. <strong>AI Context Flow</strong> has a one-time lifetime deal. Open-source tools are free if you self-host.
                </p>
                <Link href="/blog/ai-memory-comparison-2026" className="text-sm text-blue-600 hover:underline">
                  Full comparison →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How We Evaluate Tools</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-4">
                Every tool in this directory has been tested and evaluated on these criteria:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">1.</span>
                  <span><strong>Platform support</strong> — How many AI platforms does it work with?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">2.</span>
                  <span><strong>Features</strong> — Does it offer search, memory injection, export, or API access?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">3.</span>
                  <span><strong>Privacy</strong> — Is data stored locally or in the cloud? Is E2EE available?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">4.</span>
                  <span><strong>Pricing</strong> — Is there a free tier? What does the paid plan include?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">5.</span>
                  <span><strong>User base</strong> — Active users, GitHub stars, ratings, and community size.</span>
                </li>
              </ul>
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

        {/* Submit Your Tool CTA */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-10">
              <div className="text-4xl mb-4">📬</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Have an AI Memory Tool?
              </h2>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Submit your tool to be included in this directory. We review every submission and add qualifying tools within 48 hours.
              </p>
              <Link
                href="/feedback"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Your Tool →
              </Link>
              <p className="text-xs text-gray-500 mt-4">
                Free listings for all AI memory tools. No sponsorship required.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-blue-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start with the #1 Rated AI Memory Tool
            </h2>
            <p className="text-blue-100 mb-8">
              Free, private, and works with 5 AI platforms. No account needed.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get AI Memory Free →
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
