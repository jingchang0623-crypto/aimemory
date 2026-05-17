import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import WaitlistForm from './WaitlistForm';

export const metadata: Metadata = {
  title: 'Pricing - AI Memory | Free Forever, Pro Features Coming',
  description: 'AI Memory is free with all core features. Upgrade to Plus ($6.9/mo) for AI summaries and multi-device, or Pro ($7.9/mo) for full AI analysis, cloud sync, and knowledge graph.',
  keywords: ['AI memory pricing', 'chatgpt extension free', 'AI conversation manager pricing'],
  alternates: {
    canonical: 'https://aimemory.pro/pricing',
  },
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is AI Memory really free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! All core features — import, search, memory injection, Chrome extension, and MCP server — are free forever. No hidden limits, no bait-and-switch."
                }
              },
              {
                "@type": "Question",
                "name": "What is included in AI Memory Pro?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pro adds AI-powered analysis (summaries, insights, knowledge extraction), cross-platform sync, encrypted cloud sync across devices, and a knowledge graph to visualize connections across your conversations."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI Memory Pro cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI Memory Plus is $6.9/month or $69/year. AI Memory Pro is $7.9/month or $79/year with unlimited AI analysis, cross-platform sync, cloud sync, and knowledge graph. Waitlist members get founding member discounts and early access."
                }
              },
              {
                "@type": "Question",
                "name": "Is my data safe with AI Memory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "100%. Your data is stored in an isolated session on our server — only you can access it with your session cookie. No tracking, no data selling. You can export or delete everything with one click."
                }
              },
              {
                "@type": "Question",
                "name": "Will there be a lifetime deal for AI Memory Pro?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! AI Memory plans to offer a limited lifetime deal when Pro launches. Waitlist members will get first access to the lifetime deal."
                }
              },
              {
                "@type": "Question",
                "name": "How does AI Memory compare to ChatGPT's built-in memory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI Memory works across all AI platforms (ChatGPT, Claude, DeepSeek, Gemini, Kimi) while ChatGPT memory only works within ChatGPT. AI Memory provides full-text search across hundreds of conversations, conversation export, and MCP server integration with 113+ AI clients."
                }
              }
            ]
          })
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">
            Start free. Upgrade when you need more power.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 relative">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Free</h2>
              <div className="text-5xl font-bold text-gray-900 mb-2">$0</div>
              <p className="text-gray-500 mb-8">Forever free</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Unlimited conversation imports</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>All platforms: ChatGPT, Claude, DeepSeek, Gemini, Kimi</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Full-text search across all conversations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Chrome extension auto-save</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Memory Injection — inject context into any AI</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>MCP Server (12 tools) for Claude Desktop, Cursor, Windsurf</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Session-isolated private storage</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>No account required</span>
              </li>
            </ul>
            <Link
              href="/"
              className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Get Started Free
            </Link>
          </div>

          {/* Plus Plan */}
          <div className="bg-white border-2 border-blue-500 rounded-2xl p-8 relative shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
              Most Popular
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Plus</h2>
              <div className="text-5xl font-bold text-gray-900 mb-2">$6.9<span className="text-lg text-gray-500">/mo</span></div>
              <p className="text-gray-500 mb-8">or $69/year (save 17%)</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Everything in Free</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">🧠</span>
                <span><strong>AI Summary</strong> — summarize any conversation with AI (50/month)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">📊</span>
                <span><strong>Conversation Stats</strong> — usage analytics & insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">📱</span>
                <span><strong>3 Devices</strong> — access from multiple devices</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">🏷️</span>
                <span><strong>Auto-Tagging</strong> — AI-powered tag suggestions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">📧</span>
                <span><strong>Priority Support</strong></span>
              </li>
            </ul>
            <WaitlistForm />
          </div>

          {/* Pro Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-semibold px-4 py-1 rounded-full">
              Coming Soon
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Pro</h2>
              <div className="text-5xl font-bold text-gray-900 mb-2">$7.9<span className="text-lg text-gray-500">/mo</span></div>
              <p className="text-gray-500 mb-8">or $79/year (save 17%)</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Everything in Plus</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-2 mt-1">🧠</span>
                <span><strong>Unlimited AI Analysis</strong> — summaries, insights, extraction</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-2 mt-1">🔄</span>
                <span><strong>Cross-Platform Sync</strong> — memories flow between AI tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-2 mt-1">☁️</span>
                <span><strong>Cloud Sync</strong> — encrypted sync across all devices</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-2 mt-1">📊</span>
                <span><strong>Knowledge Graph</strong> — visualize connections across conversations</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-2 mt-1">🔌</span>
                <span><strong>MCP Cloud Access</strong> — hosted MCP endpoint</span>
              </li>
            </ul>
            <Link
              href="#"
              className="block w-full text-center bg-gray-200 text-gray-500 py-3 rounded-lg font-semibold cursor-not-allowed"
            >
              Coming Soon
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pricing FAQ</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is AI Memory really free?</h3>
              <p className="text-gray-600">Yes! All core features — import, search, memory injection, Chrome extension, and MCP server — are free forever. No hidden limits, no bait-and-switch.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">When will Pro features launch?</h3>
              <p className="text-gray-600">We are actively building AI analysis and cloud sync features. Join the waitlist to get early access and a founding member discount.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Will there be a lifetime deal?</h3>
              <p className="text-gray-600">Yes! We plan to offer a limited lifetime deal when Pro launches. Waitlist members will get first access.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is my data safe?</h3>
              <p className="text-gray-600">100%. Your data is stored in an isolated session on our server — only you can access it with your session cookie. No tracking, no data selling. You can export or delete everything with one click.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to preserve your AI conversations?</h2>
          <p className="text-gray-600 mb-6">Start free today. No signup required.</p>
          <Link
            href="/"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Upload Your First Export →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}
