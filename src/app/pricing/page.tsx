import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTENT_COUNT } from '@/lib/constants';
import Footer from '@/components/Footer';
import WaitlistForm from './WaitlistForm';
import StripeCheckoutButton from './StripeCheckoutButton';

export const metadata: Metadata = {
  title: 'Pricing - AI Memory | Free Forever, Pro from $9.9/mo',
  description: 'AI Memory is free with all core features. Upgrade to Plus ($6.9/mo) for AI summaries and multi-device, or Pro ($9.9/mo) for full AI analysis, cross-platform sync, and knowledge graph.',
  keywords: ['AI memory pricing', 'chatgpt extension free', 'AI conversation manager pricing', 'lifetime deal ai memory', 'mem0 alternative pricing'],
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
                  "text": "AI Memory Plus is $6.9/month or $69/year. AI Memory Pro is $9.9/month or $99/year with unlimited AI analysis, cross-platform sync, cloud sync, and knowledge graph. Waitlist members get founding member discounts and early access."
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

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
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

          {/* Lifetime Deal */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-400 rounded-2xl p-8 relative shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
              🔥 Limited Offer
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Lifetime</h2>
              <div className="text-5xl font-bold text-amber-600 mb-2">$49<span className="text-lg text-gray-500">/once</span></div>
              <p className="text-amber-600 font-medium mb-8">Pay once, use forever</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Everything in Free</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">🧠</span>
                <span><strong>AI Summary</strong> — summarize any conversation (50/month)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">📊</span>
                <span><strong>Conversation Stats</strong> — usage analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">📱</span>
                <span><strong>3 Devices</strong> — access from multiple devices</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">🏷️</span>
                <span><strong>Auto-Tagging</strong> — AI-powered tag suggestions</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">📧</span>
                <span><strong>Priority Support</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">🎁</span>
                <span><strong>Future Pro Features</strong> — free upgrades</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>No recurring fees</strong> — ever</span>
              </li>
            </ul>
            <StripeCheckoutButton 
              plan="lifetime" 
              className="block w-full text-center bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition"
            >
              Buy Lifetime - $49
            </StripeCheckoutButton>
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
            <StripeCheckoutButton 
              plan="plus" 
              interval="monthly"
              className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Subscribe - $6.9/mo
            </StripeCheckoutButton>
          </div>

          {/* Pro Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
              Best Value
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Pro</h2>
              <div className="text-5xl font-bold text-gray-900 mb-2">$9.9<span className="text-lg text-gray-500">/mo</span></div>
              <p className="text-gray-500 mb-8">or $99/year (save 17%)</p>
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
            <StripeCheckoutButton 
              plan="pro" 
              interval="monthly"
              className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Subscribe - $9.9/mo
            </StripeCheckoutButton>
          </div>
        </div>

        {/* Social Proof - Trusted by Thousands */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl p-10 border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted by the AI Community</h2>
              <p className="text-gray-600">Join thousands of developers, marketers, and researchers using AI Memory</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="text-3xl font-bold text-gray-900 mb-1">{CONTENT_COUNT}</div>
              <div className="text-sm text-gray-500">Blog Posts & Guides</div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-1">113+</div>
                <div className="text-sm text-gray-500">MCP-Compatible Clients</div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
                <div className="text-sm text-gray-500">MCP Server Tools</div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-1">5</div>
                <div className="text-sm text-gray-500">AI Platforms Supported</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                🐙 Open source on <a href="https://github.com/jingchang0623-crypto/aimemory" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a> 
                {' · '}📦 <a href="https://pypi.org/project/aimemory-mcp-server/" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">PyPI</a>
              </p>
            </div>
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
              <h3 className="font-semibold text-gray-900 mb-2">What&apos;s included in Plus ($6.9/mo)?</h3>
              <p className="text-gray-600">Plus adds AI-powered conversation summaries (50/month), usage analytics, auto-tagging with AI suggestions, and access from up to 3 devices.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What&apos;s included in Pro ($9.9/mo)?</h3>
              <p className="text-gray-600">Pro adds unlimited AI analysis (summaries, insights, knowledge extraction), cross-platform sync between AI tools, encrypted cloud sync across all your devices, and a knowledge graph to visualize connections across conversations. Join the waitlist for early access and founding member discounts.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Will there be a lifetime deal?</h3>
              <p className="text-gray-600 mb-4">Yes! We offer a limited lifetime deal at $49 (one-time payment) that unlocks all Pro features when they launch. Lock in your price now.</p>
              <WaitlistForm plan="lifetime-deal" />
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
