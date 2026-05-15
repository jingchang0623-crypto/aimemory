import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Chrome Web Store Listing Guide - AI Memory Extension | aimemory.pro',
  description: 'Preparation guide for Chrome Web Store listing of AI Memory extension. Title, description, screenshots, and ASO optimization.',
  openGraph: {
    title: 'Chrome Web Store Listing Guide - AI Memory Extension',
    description: 'Preparation guide for Chrome Web Store listing of AI Memory extension.',
    url: 'https://aimemory.pro/docs/chrome-web-store',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aimemory.pro/docs/chrome-web-store',
  },
};

export default function ChromeWebStoreGuide() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        {/* Header */}
        <header className="border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
            <Link href="/" className="text-lg font-bold hover:text-blue-400 transition">🧠 AI Memory</Link>
            <nav className="flex gap-6 text-sm text-gray-400">
              <Link href="/chrome-extension" className="hover:text-white transition">Extension</Link>
              <Link href="/docs/mcp" className="hover:text-white transition">Docs</Link>
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-12">
          {/* Title */}
          <div className="mb-12">
            <span className="text-sm text-blue-400 font-medium">🧭 Distribution Guide</span>
            <h1 className="text-3xl font-bold mt-2 mb-4">Chrome Web Store Listing Guide</h1>
            <p className="text-gray-400 text-lg">Everything prepared for Chrome Web Store submission. $5 registration fee needed.</p>
          </div>

          {/* Checklist */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-10">
            <h2 className="text-lg font-semibold mb-3">📋 Pre-Submission Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Extension built (v1.0.0)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Manifest V3 compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">ZIP ready in .output/</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⏳</span>
                <span className="text-gray-300">Screenshots prepared</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⏳</span>
                <span className="text-gray-300">Store listing written</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⏳</span>
                <span className="text-gray-300">$5 developer fee paid</span>
              </div>
            </div>
          </div>

          {/* Store Listing */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Store Listing Content</h2>

            {/* Title */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">📌 Extension Title (75 chars max)</h3>
              <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                <p className="text-green-400">AI Memory - Save & Search ChatGPT, Claude, DeepSeek, Gemini, Kimi</p>
              </div>
              <p className="text-gray-500 text-xs mt-2">Contains all key keywords: AI Memory, Save, Search, ChatGPT, Claude, DeepSeek</p>
            </div>

            {/* Short Description */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">📝 Short Description (132 chars max)</h3>
              <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                <p className="text-green-400">Auto-save AI conversations from ChatGPT, Claude, DeepSeek, Gemini, Kimi. Full-text search. Free forever.</p>
              </div>
              <p className="text-gray-500 text-xs mt-2">132 characters exactly. Highlights key features and platforms.</p>
            </div>

            {/* Detailed Description */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">📄 Detailed Description</h3>
              <div className="bg-gray-950 rounded-lg p-6 text-sm text-gray-300 space-y-4">
                <p><strong>Your AI conversations, preserved forever.</strong></p>
                <p>AI Memory automatically saves your conversations from ChatGPT, Claude, DeepSeek, Gemini, and Kimi as you chat. No more manual exports, no more lost insights.</p>
                
                <p className="font-semibold mt-4">🔍 Full-Text Search</p>
                <p>Search across hundreds of conversations instantly. Find that one solution you discussed months ago — no matter which AI you used.</p>
                
                <p className="font-semibold mt-4">🔒 100% Private & Local</p>
                <p>All data stored locally in your browser. No accounts, no cloud sync, no tracking. Your conversations stay yours.</p>
                
                <p className="font-semibold mt-4">⚡ Auto-Capture</p>
                <p>Works automatically while you chat. Supports:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>ChatGPT (chatgpt.com)</li>
                  <li>Claude (claude.ai)</li>
                  <li>DeepSeek (chat.deepseek.com)</li>
                  <li>Gemini (gemini.google.com)</li>
                  <li>Kimi (kimi.moonshot.cn)</li>
                </ul>
                
                <p className="font-semibold mt-4">🧠 Memory Injection</p>
                <p>Inject relevant past conversations into your current AI chat with one click. Stop repeating yourself.</p>
                
                <p className="font-semibold mt-4">🆓 Free Forever</p>
                <p>No subscription, no limits, no hidden fees. Install and use forever.</p>
                
                <p className="mt-4 text-gray-400">---</p>
                <p className="text-xs text-gray-500">Works with Chrome, Edge, Brave, and other Chromium browsers. Also available at aimemory.pro for web-based search across all platforms.</p>
              </div>
            </div>

            {/* Screenshots */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">📸 Screenshots Needed (1280x800 or 640x400)</h3>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-950 rounded-lg p-4">
                    <p className="text-blue-400 font-medium">Screenshot 1: Main UI</p>
                    <p className="text-gray-400 text-xs mt-1">Show sidepanel with conversation list and search</p>
                  </div>
                  <div className="bg-gray-950 rounded-lg p-4">
                    <p className="text-blue-400 font-medium">Screenshot 2: Search Results</p>
                    <p className="text-gray-400 text-xs mt-1">Show search across multiple platforms</p>
                  </div>
                  <div className="bg-gray-950 rounded-lg p-4">
                    <p className="text-blue-400 font-medium">Screenshot 3: Platform Support</p>
                    <p className="text-gray-400 text-xs mt-1">Show extension working on ChatGPT</p>
                  </div>
                  <div className="bg-gray-950 rounded-lg p-4">
                    <p className="text-blue-400 font-medium">Screenshot 4: Memory Injection</p>
                    <p className="text-gray-400 text-xs mt-1">Show the injection button in action</p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs">💡 Tip: Use Chrome DevTools device toolbar to capture at exact dimensions</p>
              </div>
            </div>

            {/* Category & Keywords */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🏷️ Category & Keywords</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Category</p>
                  <p className="text-green-400 font-mono">Productivity</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Language</p>
                  <p className="text-green-400 font-mono">English + Chinese (中文)</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Keywords (implicit from title/description)</p>
                <div className="flex flex-wrap gap-2">
                  {['chatgpt history', 'claude conversation', 'deepseek memory', 'ai memory', 'save chatgpt', 'search ai chats', 'conversation backup', 'ai assistant'].map(kw => (
                    <span key={kw} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">{kw}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🔒 Privacy Disclosure</h3>
              <div className="bg-gray-950 rounded-lg p-4 text-sm text-gray-300 space-y-2">
                <p><strong>Data Usage:</strong> All conversation data is stored locally in your browser session storage. No data is transmitted to external servers.</p>
                <p><strong>Permissions:</strong> Storage (to save conversations), ActiveTab (to capture from AI platforms), Scripting (to extract conversation content).</p>
                <p><strong>Third-party:</strong> No third-party analytics, no tracking, no ads. 100% private.</p>
              </div>
            </div>
          </div>

          {/* Submission Steps */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Submission Steps</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <span className="font-medium">Pay $5 Developer Fee</span>
                </div>
                <p className="text-gray-400 text-sm ml-10">Go to <a href="https://chrome.google.com/webstore/devconsole" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Chrome Web Store Developer Console</a> and pay the one-time registration fee.</p>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <span className="font-medium">Create New Item</span>
                </div>
                <p className="text-gray-400 text-sm ml-10">Click &quot;New Item&quot; and upload the ZIP file from <code className="text-blue-400 bg-gray-800 px-1 rounded">extension/.output/ai-memory-extension-1.0.0-chrome.zip</code></p>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <span className="font-medium">Fill Store Listing</span>
                </div>
                <p className="text-gray-400 text-sm ml-10">Copy the title, short description, and detailed description from above. Upload screenshots.</p>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <span className="font-medium">Submit for Review</span>
                </div>
                <p className="text-gray-400 text-sm ml-10">Review typically takes 1-3 business days. You&apos;ll receive an email when approved.</p>
              </div>
            </div>
          </div>

          {/* Post-publish checklist */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Post-Publish Checklist</h2>
            <div className="bg-green-950 border border-green-800 rounded-lg p-6">
              <p className="text-green-400 font-medium mb-3">After Chrome Web Store approval:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 accent-green-500" readOnly />
                  <span className="text-gray-300">Update Chrome Extension page: Add &quot;Get from Chrome Web Store&quot; button</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 accent-green-500" readOnly />
                  <span className="text-gray-300">Homepage: Update download button to link to Chrome Web Store</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 accent-green-500" readOnly />
                  <span className="text-gray-300">Add Chrome Web Store ID to README.md</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 accent-green-500" readOnly />
                  <span className="text-gray-300">Blog post: &quot;AI Memory is now on Chrome Web Store&quot;</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <Link href="/chrome-extension" className="text-blue-400 hover:underline">← Back to Chrome Extension Page</Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
