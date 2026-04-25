import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Find Old ChatGPT Conversations - Search & Recover Past Chats',
  description: 'Can\'t find an old ChatGPT conversation? Learn how to search, find, and recover past ChatGPT chats. Full-text search across all your AI conversations.',
  keywords: ['find old chatgpt conversation', 'chatgpt conversation history search', 'search chatgpt history', 'find old chatgpt ai', 'chatgpt conversation not found'],
};

export default function FindOldChatGPT() {
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
          <h1>How to Find Old ChatGPT Conversations</h1>
          <p className="text-xl text-gray-600">
            Can&apos;t find that important conversation from last week? Here&apos;s how to search and recover it.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 mt-0">Why You Can&apos;t Find Old Conversations</h2>
            <ul className="text-blue-700">
              <li>ChatGPT sidebar only shows recent conversations</li>
              <li>No full-text search within conversation content</li>
              <li>Conversations are organized by date, not by topic</li>
              <li>No folders, tags, or organization features</li>
            </ul>
          </div>

          <h2>3 Ways to Find Old ChatGPT Conversations</h2>

          <h3>1. Use ChatGPT&apos;s Built-in Search (Limited)</h3>
          <p>
            ChatGPT has a search bar in the sidebar, but it only searches by conversation 
            <strong>title</strong>, not by content. If you didn&apos;t give your conversation 
            a descriptive title, you won&apos;t find it.
          </p>

          <h3>2. Export and Search Locally</h3>
          <p>
            Export your ChatGPT data (Settings → Data Controls → Export Data), then search 
            through the JSON file. This is tedious but works.
          </p>

          <h3>3. Use AI Memory (Recommended)</h3>
          <p>
            <Link href="/" className="text-blue-600 underline">AI Memory</Link> provides 
            <strong> full-text search</strong> across ALL your conversations. Upload your 
            ChatGPT export and instantly find any conversation by searching for keywords 
            in the content.
          </p>

          <h2>What Makes AI Memory Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-red-800 mt-0">❌ ChatGPT Search</h3>
              <ul className="text-red-700 text-sm">
                <li>Only searches titles</li>
                <li>No content search</li>
                <li>No organization</li>
                <li>Limited to one platform</li>
              </ul>
            </div>
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-green-800 mt-0">✅ AI Memory Search</h3>
              <ul className="text-green-700 text-sm">
                <li>Full-text content search</li>
                <li>Highlighted matches</li>
                <li>Cross-platform search</li>
                <li>Search across ALL chats</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h2 className="text-green-800 mt-0">Find Any Conversation Instantly</h2>
            <p className="text-green-700 mb-4">
              Upload your ChatGPT export to AI Memory and search across all your 
              conversations by content, not just titles.
            </p>
            <Link 
              href="/" 
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Search Your Chats →
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
