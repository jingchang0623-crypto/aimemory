import type { Metadata } from 'next';
import Link from 'next/link';
import WaitlistForm from './WaitlistForm';

export const metadata: Metadata = {
  title: 'Pricing - AI Memory | Free Forever, Pro Features Coming',
  description: 'AI Memory is free for personal use. Import unlimited conversations from ChatGPT, Claude, DeepSeek & Gemini. Pro features coming soon.',
  keywords: ['AI memory pricing', 'chatgpt extension free', 'AI conversation manager pricing'],
};

export default function PricingPage() {
  return (
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

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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
                <span>All platforms: ChatGPT, Claude, DeepSeek, Gemini</span>
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
                <span>100% local storage — your data never leaves your device</span>
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

          {/* Pro Plan */}
          <div className="bg-white border-2 border-blue-500 rounded-2xl p-8 relative shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
              Coming Soon
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Pro</h2>
              <div className="text-5xl font-bold text-gray-900 mb-2">$6.9<span className="text-lg text-gray-500">/mo</span></div>
              <p className="text-gray-500 mb-8">or $49/year (save 41%)</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Everything in Free</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">⚡</span>
                <span><strong>Memory Injection</strong> — auto-inject context into new AI sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">🧠</span>
                <span><strong>AI Analysis</strong> — summaries, insights, knowledge extraction</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">🔄</span>
                <span><strong>Cross-Platform Sync</strong> — memories flow between AI tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">🖥️</span>
                <span><strong>MCP Server</strong> — deep integration with AI workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">📊</span>
                <span><strong>Knowledge Graph</strong> — visualize connections across conversations</span>
              </li>
            </ul>
            <WaitlistForm />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pricing FAQ</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is AI Memory really free?</h3>
              <p className="text-gray-600">Yes! The core features — import, search, browse, and Chrome extension auto-save — are free forever. No hidden limits, no bait-and-switch.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">When will Pro features launch?</h3>
              <p className="text-gray-600">We are actively building memory injection, AI analysis, and MCP server features. Join the waitlist to get early access and a founding member discount.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Will there be a lifetime deal?</h3>
              <p className="text-gray-600">Yes! We plan to offer a limited lifetime deal when Pro launches. Waitlist members will get first access.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is my data safe?</h3>
              <p className="text-gray-600">100%. All data is stored locally on your device. We never upload your conversations to any server. Even with Pro, your data stays private.</p>
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

      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>AI Memory — Your conversations, preserved forever</p>
          <div className="mt-2 space-x-4">
            <Link href="/features" className="hover:text-gray-700">Features</Link>
            <Link href="/pricing" className="hover:text-gray-700">Pricing</Link>
            <Link href="/chrome-extension" className="hover:text-gray-700">Chrome Extension</Link>
            <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-700">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
