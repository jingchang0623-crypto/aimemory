import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'How to Give DeepSeek Memory — Complete Guide (2026) | AI Memory',
  description: 'Learn how to give DeepSeek AI persistent memory. Three methods: web upload, Chrome extension, and MCP server. Search your DeepSeek conversations, export chat history, and connect to Claude/Cursor.',
  keywords: ['deepseek memory', 'deepseek persistent memory', 'deepseek remember conversations', 'deepseek chat history', 'deepseek mcp server', 'deepseek memory extension', 'deepseek对话记忆', 'deepseek记忆', '给deepseek记忆'],
  alternates: {
    canonical: 'https://aimemory.pro/deepseek-memory-guide',
  },
  openGraph: {
    title: 'How to Give DeepSeek Memory — Complete Guide (2026)',
    description: 'Three methods to give DeepSeek AI persistent memory: web upload, Chrome extension, MCP server. Search, export, and cross-reference your DeepSeek conversations.',
    url: 'https://aimemory.pro/deepseek-memory-guide',
    type: 'website',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does DeepSeek have built-in memory?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DeepSeek does not have persistent memory across conversations. Each chat starts fresh. DeepSeek recently added a "memory" feature in some regions that remembers context within a session, but it does not carry over to new conversations. AI Memory solves this by letting you save, search, and reference past DeepSeek conversations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I export my DeepSeek conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DeepSeek does not currently offer a built-in export feature. You can copy individual conversations manually, or use the AI Memory Chrome Extension to capture conversations automatically as you chat. For bulk export, use browser developer tools or the Chrome extension\'s batch capture feature.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I search my DeepSeek conversations from Claude Desktop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Install AI Memory\'s MCP server, upload your DeepSeek conversations to aimemory.pro, then configure Claude Desktop with the MCP endpoint. You can then ask Claude to search your DeepSeek history and use insights from past DeepSeek conversations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI Memory free for DeepSeek conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, AI Memory is completely free. You can upload unlimited DeepSeek conversations, search across them, use the Chrome extension, and connect via MCP — all at no cost. There are no usage limits on the free plan.',
      },
    },
  ],
};

const methods = [
  {
    id: 'web-upload',
    icon: '🌐',
    title: 'Method 1: Web Upload',
    subtitle: 'Easiest — no installation needed',
    steps: [
      'Export your DeepSeek conversations from chat.deepseek.com',
      'Go to aimemory.pro and upload the JSON/ZIP file',
      'Search across all your DeepSeek chats with full-text search',
      'Access from any device with your session',
    ],
    pros: ['No installation', 'Works on any device', 'Session-isolated storage', 'AI-powered search'],
    cons: ['Requires manual export from DeepSeek', 'Data stored on AI Memory servers'],
  },
  {
    id: 'chrome-extension',
    icon: '🔗',
    title: 'Method 2: Chrome Extension',
    subtitle: 'Automatic — captures conversations in real-time',
    steps: [
      'Download the AI Memory Chrome Extension from aimemory.pro/chrome-extension',
      'Install in Chrome (Menu → Extensions → Load Unpacked)',
      'Open chat.deepseek.com — conversations are captured automatically',
      'Use the popup to search and browse your saved DeepSeek chats',
    ],
    pros: ['Fully automatic capture', 'No manual exports needed', '100% local storage', 'Works with all Chromium browsers'],
    cons: ['Chrome/Edge/Brave only', 'Desktop browser required', 'Manual install (not yet on Chrome Web Store)'],
  },
  {
    id: 'mcp-server',
    icon: '⚡',
    title: 'Method 3: MCP Server',
    subtitle: 'Most powerful — connect DeepSeek context to Claude, Cursor, and more',
    steps: [
      'Install AI Memory MCP Server: pip install aimemory-mcp-server',
      'Upload your DeepSeek conversations to aimemory.pro (or save via API)',
      'Configure MCP in Claude Desktop, Cursor, or any MCP client',
      'Ask Claude/Cursor to "search my DeepSeek conversations about [topic]"',
    ],
    pros: ['Cross-platform: search DeepSeek from Claude or Cursor', '12 powerful tools (search, save, export, batch)', '100% local — no cloud needed', 'Works with 113+ MCP clients'],
    cons: ['Requires pip install', 'Command line setup', 'Technical knowledge needed'],
  },
];

const faqs = [
  {
    q: 'Does DeepSeek have built-in memory?',
    a: 'DeepSeek does not have persistent memory across conversations. Each chat starts fresh. DeepSeek recently added a "memory" feature in some regions that remembers context within a session, but it does not carry over to new conversations. AI Memory solves this by letting you save, search, and reference past DeepSeek conversations.',
  },
  {
    q: 'How do I export my DeepSeek conversations?',
    a: 'DeepSeek does not currently offer a built-in export feature. You can copy individual conversations manually, or use the AI Memory Chrome Extension to capture conversations automatically as you chat. For bulk export, use browser developer tools or the Chrome extension\'s batch capture feature.',
  },
  {
    q: 'Can I search my DeepSeek conversations from Claude Desktop?',
    a: 'Yes! Install AI Memory\'s MCP server, upload your DeepSeek conversations to aimemory.pro, then configure Claude Desktop with the MCP endpoint (aimemory.pro/api/mcp). You can then ask Claude to search your DeepSeek history and use insights from past DeepSeek conversations.',
  },
  {
    q: 'Is AI Memory free for DeepSeek conversations?',
    a: 'Yes, AI Memory is completely free. You can upload unlimited DeepSeek conversations, search across them, use the Chrome extension, and connect via MCP — all at no cost. There are no usage limits on the free plan.',
  },
  {
    q: 'Can I use AI Memory with both DeepSeek and ChatGPT?',
    a: 'Absolutely. AI Memory supports DeepSeek, ChatGPT, Claude, Gemini, and Kimi. You can upload conversations from all platforms and search across them in one unified interface. The Chrome Extension also auto-captures from all supported platforms.',
  },
  {
    q: 'What is the difference between AI Memory and DeepSeek\'s built-in features?',
    a: 'DeepSeek has a "memory" feature that briefly remembers context during an active session. AI Memory provides persistent, cross-session memory — your conversations are saved permanently, searchable across all platforms, and accessible from Claude Desktop, Cursor, and 113+ MCP clients.',
  },
];

export default function DeepseekMemoryGuide() {
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
              <Link href="/features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Features</Link>
              <Link href="/chrome-extension" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Extension</Link>
              <Link href="/blog/deepseek-memory" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Blog</Link>
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
            <span className="text-base">🐋</span>
            DeepSeek Memory Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            How to Give DeepSeek<br />
            <span className="text-blue-600">Persistent Memory</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            DeepSeek doesn&apos;t remember your past conversations. Here are <strong className="text-gray-700">three methods</strong> to give it persistent memory — from easiest to most powerful.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {methods.map((method) => (
              <a
                key={method.id}
                href={`#${method.id}`}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                {method.icon} {method.title.replace('Method \\d+: ', '')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why DeepSeek Needs Memory */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🤔 Why does DeepSeek need memory?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-5">
                <div className="text-2xl mb-3">🔄</div>
                <h3 className="font-semibold text-gray-900 mb-2">No Cross-Chat Memory</h3>
                <p className="text-sm text-gray-600">Every DeepSeek conversation starts from zero. It cannot reference anything from previous chats.</p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <div className="text-2xl mb-3">📋</div>
                <h3 className="font-semibold text-gray-900 mb-2">No Search Across Chats</h3>
                <p className="text-sm text-gray-600">DeepSeek has no built-in way to search your past conversations. You can&apos;t find that solution from last week.</p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <div className="text-2xl mb-3">🚫</div>
                <h3 className="font-semibold text-gray-900 mb-2">No Export Feature</h3>
                <p className="text-sm text-gray-600">Unlike ChatGPT, DeepSeek doesn&apos;t offer conversation export. Your history is trapped in the browser.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Methods */}
      {methods.map((method, idx) => (
        <section key={method.id} id={method.id} className="pb-16 px-6 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{method.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{method.title}</h2>
                <p className="text-gray-500">{method.subtitle}</p>
              </div>
            </div>

            {/* Steps */}
            <div className="bg-gray-50 rounded-xl p-8 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Step-by-step:</h3>
              <div className="space-y-4">
                {method.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pros/Cons */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-5">
                <h4 className="font-semibold text-green-800 mb-3">✅ Pros</h4>
                <ul className="space-y-2">
                  {method.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-green-700">
                      <span className="mt-0.5">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-5">
                <h4 className="font-semibold text-red-800 mb-3">⚠️ Considerations</h4>
                <ul className="space-y-2">
                  {method.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-red-700">
                      <span className="mt-0.5">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA for first method */}
            {idx === 0 && (
              <div className="mt-6 text-center">
                <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  🌐 Try Web Upload →
                </Link>
              </div>
            )}
            {idx === 1 && (
              <div className="mt-6 text-center">
                <Link
                  href="/chrome-extension"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  🔗 Download Extension →
                </Link>
              </div>
            )}
            {idx === 2 && (
              <div className="mt-6 text-center">
                <Link
                  href="/mcp-server"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  ⚡ Get MCP Server →
                </Link>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Comparison: Which Method? */}
      <section className="pb-16 px-6 bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Which method should you use?</h2>
          <p className="text-gray-500 text-center mb-12">Pick based on your needs.</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Criteria</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-blue-600">🌐 Web Upload</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-green-600">🔗 Extension</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-purple-600">⚡ MCP Server</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { criteria: 'Setup Time', web: '1 minute', ext: '3 minutes', mcp: '10 seconds' },
                  { criteria: 'Automatic Capture', web: '❌', ext: '✅ Real-time', mcp: '❌ Manual' },
                  { criteria: 'Search DeepSeek', web: '✅ Full-text', ext: '✅ Local', mcp: '✅ FTS5' },
                  { criteria: 'Use from Claude', web: '❌', ext: '❌', mcp: '✅ Yes' },
                  { criteria: 'Use from Cursor', web: '❌', ext: '❌', mcp: '✅ Yes' },
                  { criteria: 'Offline Support', web: '❌', ext: '✅ Local', mcp: '✅ Yes' },
                  { criteria: 'Cost', web: 'Free', ext: 'Free', mcp: 'Free' },
                  { criteria: 'Best For', web: 'Casual users', ext: 'Daily DeepSeek users', mcp: 'Developers' },
                ].map((row) => (
                  <tr key={row.criteria}>
                    <td className="px-6 py-3 text-sm font-medium text-gray-900">{row.criteria}</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-700">{row.web}</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-700">{row.ext}</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-700">{row.mcp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bonus: Cross-Platform */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Bonus: Cross-Platform Memory</h2>
            <p className="text-gray-700 mb-6">
              The real power of AI Memory is <strong>cross-platform search</strong>. Save conversations from DeepSeek, ChatGPT, Claude, and Gemini — then search across all of them from one place.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: '🤖', name: 'ChatGPT', desc: 'Export + Upload' },
                { icon: '🟣', name: 'Claude', desc: 'Extension + Export' },
                { icon: '🐋', name: 'DeepSeek', desc: 'Extension + Upload' },
                { icon: '💎', name: 'Gemini', desc: 'Extension + Upload' },
              ].map((platform) => (
                <div key={platform.name} className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">{platform.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-sm">{platform.name}</h3>
                  <p className="text-xs text-gray-500">{platform.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/compare"
                className="text-blue-600 font-medium hover:underline"
              >
                See full platform comparison →
              </Link>
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
          <h2 className="text-3xl font-bold text-white mb-4">Give DeepSeek persistent memory today</h2>
          <p className="text-gray-400 mb-8">Free. No account needed. Works with Chrome extension, web upload, or MCP server.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              🌐 Try Web Upload
            </Link>
            <Link
              href="/chrome-extension"
              className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              🔗 Download Extension
            </Link>
            <Link
              href="/mcp-server"
              className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              ⚡ MCP Server
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
