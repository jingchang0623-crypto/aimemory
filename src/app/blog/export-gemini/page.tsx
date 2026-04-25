import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Export Gemini Conversations - Complete Guide 2026',
  description: 'Step-by-step guide to export your Google Gemini AI conversation history. Download all your chats and import them into AI Memory for permanent searchable storage.',
  keywords: ['Gemini export', 'export Gemini conversations', 'Google Gemini data', 'Gemini chat history', 'backup Gemini'],
};

export default function ExportGeminiGuide() {
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
          <h1>How to Export Your Google Gemini Conversations</h1>
          <p className="text-xl text-gray-600">
            A complete guide to downloading and preserving your Gemini AI chat history
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 mt-0">Quick Summary</h2>
            <ol className="text-blue-700">
              <li>Use Google Takeout to export Gemini data</li>
              <li>Or use ChatMemo extension for auto-save</li>
              <li>Upload to <Link href="/" className="text-blue-600 underline">AI Memory</Link> for searchable storage</li>
            </ol>
          </div>

          <h2>Method 1: Google Takeout</h2>
          <p>
            Google provides a way to export your Gemini conversations through Google Takeout:
          </p>
          <ol>
            <li>Visit <a href="https://takeout.google.com" target="_blank" rel="noopener">takeout.google.com</a></li>
            <li>Click &quot;Deselect all&quot; first</li>
            <li>Find and select &quot;Gemini&quot; or &quot;Google Bard&quot;</li>
            <li>Click &quot;Next step&quot; and choose export format</li>
            <li>Download the export file</li>
            <li>Upload to AI Memory</li>
          </ol>

          <h2>Method 2: Using ChatMemo Extension</h2>
          <p>
            The ChatMemo browser extension automatically saves Gemini conversations:
          </p>
          <ol>
            <li>Install ChatMemo from Chrome Web Store</li>
            <li>Visit <a href="https://gemini.google.com" target="_blank" rel="noopener">gemini.google.com</a></li>
            <li>ChatMemo automatically saves your conversations</li>
            <li>Export and upload to AI Memory</li>
          </ol>

          <h2>Why Export Your Gemini Data?</h2>
          <ul>
            <li>🔒 <strong>Backup</strong> — Preserve important discussions</li>
            <li>🔍 <strong>Search</strong> — Full-text search across all chats</li>
            <li>📊 <strong>Consolidate</strong> — Merge with other AI conversations</li>
            <li>🔄 <strong>Portability</strong> — Your data, your control</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h2 className="text-green-800 mt-0">Ready to Import?</h2>
            <p className="text-green-700 mb-4">
              Upload your Gemini export to AI Memory and make all your conversations searchable.
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
