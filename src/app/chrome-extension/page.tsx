import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Memory Chrome Extension - Auto-Save AI Conversations',
  description: 'Download the AI Memory Chrome extension to automatically save your ChatGPT, Claude, DeepSeek and Gemini conversations. Never lose an AI chat again.',
  keywords: ['Chrome extension', 'AI memory', 'ChatGPT extension', 'Claude extension', 'save AI chats'],
  alternates: {
    canonical: 'https://aimemory.pro/chrome-extension',
  },
};

export default function ChromeExtension() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Memory Chrome Extension
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Automatically save and sync your AI conversations
          </p>
          <a 
            href="/ai-memory-extension.zip"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            ⬇️ Download Extension (v1.0)
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-4xl mb-4">💾</div>
            <h3 className="font-semibold mb-2">Auto-Save</h3>
            <p className="text-sm text-gray-600">
              Automatically saves conversations as you chat with AI
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="font-semibold mb-2">Instant Search</h3>
            <p className="text-sm text-gray-600">
              Search across all your saved conversations
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-semibold mb-2">100% Private</h3>
            <p className="text-sm text-gray-600">
              All data stored in session-isolated private storage
            </p>
          </div>
        </div>

        <section className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Supported Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-medium">ChatGPT</div>
              <div className="text-sm text-green-600">✅ Supported</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-medium">Claude</div>
              <div className="text-sm text-green-600">✅ Supported</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-medium">DeepSeek</div>
              <div className="text-sm text-green-600">✅ Supported</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-medium">Gemini</div>
              <div className="text-sm text-green-600">✅ Supported</div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-6">Installation Instructions</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">1</span>
              <div>
                <p className="font-medium">Download the extension</p>
                <p className="text-sm text-gray-600">Click the download button above to get the ZIP file</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">2</span>
              <div>
                <p className="font-medium">Extract the ZIP file</p>
                <p className="text-sm text-gray-600">Unzip to a folder on your computer</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">3</span>
              <div>
                <p className="font-medium">Open Chrome Extensions</p>
                <p className="text-sm text-gray-600">Go to chrome://extensions and enable &quot;Developer mode&quot;</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">4</span>
              <div>
                <p className="font-medium">Load unpacked extension</p>
                <p className="text-sm text-gray-600">Click &quot;Load unpacked&quot; and select the extracted folder</p>
              </div>
            </li>
          </ol>
        </section>
      </main>
      <Footer />
    </div>
  );
}
