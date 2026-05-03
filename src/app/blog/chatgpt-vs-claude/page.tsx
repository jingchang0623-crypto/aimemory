import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ChatGPT vs Claude: Which AI is Better? Export & Compare Guide 2026',
  description: 'Compare ChatGPT and Claude AI assistants. Learn how to export conversations from both platforms and analyze them side-by-side with AI Memory.',
  keywords: ['ChatGPT vs Claude', 'compare AI', 'ChatGPT Claude comparison', 'AI assistant comparison', 'export AI conversations'],
  alternates: {
    canonical: 'https://aimemory.pro/blog/chatgpt-vs-claude',
  },
};

export default function ChatGPTVsClaude() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between ChatGPT and Claude?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT is developed by OpenAI and has a 128K token context window, while Claude is developed by Anthropic and supports a 200K token context window. Both offer JSON exports and web-based interfaces, but differ in training approaches and response styles.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which has a larger context window, ChatGPT or Claude?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Claude has a larger context window at 200K tokens, compared to ChatGPT's 128K tokens. This means Claude can process and retain more information in a single conversation.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I export conversations from both ChatGPT and Claude?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For ChatGPT: go to Settings → Data Controls → Export Data. For Claude: go to Settings → Privacy → Export Data. Both platforms deliver a JSON export via email. You can then upload both exports to AI Memory for unified search.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I search across ChatGPT and Claude conversations at the same time?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. AI Memory lets you upload exports from both ChatGPT and Claude, then search across all your AI conversations in one place with full-text search, platform filtering, and usage tracking.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is ChatGPT or Claude better for coding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Both ChatGPT and Claude are capable coding assistants. Claude's larger context window (200K tokens) can be advantageous for analyzing large codebases, while ChatGPT offers strong code generation. The best choice depends on your specific workflow and preferences.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose lg:prose-xl max-w-none">
          <h1>ChatGPT vs Claude: A Complete Comparison</h1>
          <p className="text-xl text-gray-600">
            How to export, compare, and manage conversations from both AI platforms
          </p>

          <h2>Platform Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Feature</th>
                  <th className="border p-3 text-left">ChatGPT</th>
                  <th className="border p-3 text-left">Claude</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Developer</td>
                  <td className="border p-3">OpenAI</td>
                  <td className="border p-3">Anthropic</td>
                </tr>
                <tr>
                  <td className="border p-3">Context Window</td>
                  <td className="border p-3">128K tokens</td>
                  <td className="border p-3">200K tokens</td>
                </tr>
                <tr>
                  <td className="border p-3">Export Format</td>
                  <td className="border p-3">JSON (via email)</td>
                  <td className="border p-3">JSON (via email)</td>
                </tr>
                <tr>
                  <td className="border p-3">Real-time Save</td>
                  <td className="border p-3">No (requires export)</td>
                  <td className="border p-3">No (requires export)</td>
                </tr>
                <tr>
                  <td className="border p-3">Web Access</td>
                  <td className="border p-3">chat.openai.com</td>
                  <td className="border p-3">claude.ai</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How to Export Both</h2>
          <p>
            To compare your conversations across platforms, export from both and import to AI Memory:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-green-800 mt-0">ChatGPT Export</h3>
              <p className="text-green-700 mb-4">
                Settings → Data Controls → Export Data
              </p>
              <Link 
                href="/blog/export-chatgpt" 
                className="text-green-600 underline"
              >
                Full guide →
              </Link>
            </div>
            <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg">
              <h3 className="text-purple-800 mt-0">Claude Export</h3>
              <p className="text-purple-700 mb-4">
                Settings → Privacy → Export Data
              </p>
              <Link 
                href="/blog/export-claude" 
                className="text-purple-600 underline"
              >
                Full guide →
              </Link>
            </div>
          </div>

          <h2>Compare with AI Memory</h2>
          <p>
            Once you export from both platforms, upload them to AI Memory to:
          </p>
          <ul>
            <li>🔍 <strong>Search across both</strong> — Find any conversation instantly</li>
            <li>📊 <strong>Compare responses</strong> — See how each AI answered similar questions</li>
            <li>📈 <strong>Track usage</strong> — Understand which platform you use more</li>
            <li>🔒 <strong>Backup everything</strong> — Never lose valuable conversations</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 mt-0">Ready to Compare?</h2>
            <p className="text-blue-700 mb-4">
              Upload exports from both ChatGPT and Claude to AI Memory and search across all your AI conversations.
            </p>
            <Link 
              href="/" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Upload to AI Memory →
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
