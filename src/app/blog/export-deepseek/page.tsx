import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Export DeepSeek Conversations - Complete Guide 2026',
  description: 'Step-by-step guide to export your DeepSeek AI conversation history. Download all your chats and import them into AI Memory for permanent searchable storage.',
  keywords: ['DeepSeek export', 'export DeepSeek conversations', 'DeepSeek data download', 'DeepSeek chat history', 'backup DeepSeek'],
};

export default function ExportDeepSeekGuide() {
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
        <article className="prose lg:prose-xl max-w-none">
          <h1>How to Export Your DeepSeek Conversations</h1>
          <p className="text-xl text-gray-600">
            A complete guide to downloading and preserving your DeepSeek AI chat history
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 mt-0">Quick Summary</h2>
            <ol className="text-blue-700">
              <li>Use DeepSeek&apos;s built-in export feature or browser tools</li>
              <li>Save conversations as JSON or TXT files</li>
              <li>Upload to <Link href="/" className="text-blue-600 underline">AI Memory</Link> for searchable storage</li>
            </ol>
          </div>

          <h2>Method 1: Using ChatMemo Extension</h2>
          <p>
            The easiest way to export DeepSeek conversations is using the{' '}
            <a href="https://chromewebstore.google.com/detail/memnnheiikbfdcobfkghhfihnegkfici" target="_blank" rel="noopener">
              ChatMemo browser extension
            </a>.
          </p>
          <ol>
            <li>Install ChatMemo from Chrome Web Store</li>
            <li>Visit <a href="https://chat.deepseek.com" target="_blank" rel="noopener">chat.deepseek.com</a></li>
            <li>ChatMemo automatically saves your conversations</li>
            <li>Click ChatMemo icon → Settings → Export</li>
            <li>Upload the exported TXT files to AI Memory</li>
          </ol>

          <h2>Method 2: Manual Copy</h2>
          <p>
            For individual conversations, you can manually copy the text:
          </p>
          <ol>
            <li>Open the conversation in DeepSeek</li>
            <li>Select all text (Ctrl+A / Cmd+A)</li>
            <li>Copy and paste into a TXT file</li>
            <li>Upload to AI Memory</li>
          </ol>

          <h2>Why Export Your DeepSeek Data?</h2>
          <ul>
            <li>🔒 <strong>Backup</strong> — Preserve important discussions</li>
            <li>🔍 <strong>Search</strong> — Full-text search across all chats</li>
            <li>📊 <strong>Consolidate</strong> — Merge with ChatGPT and Claude conversations</li>
            <li>🔄 <strong>Switch</strong> — Easily migrate between AI platforms</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h2 className="text-green-800 mt-0">Ready to Import?</h2>
            <p className="text-green-700 mb-4">
              Upload your DeepSeek export to AI Memory and make all your conversations searchable.
            </p>
            <Link 
              href="/" 
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Upload to AI Memory →
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
