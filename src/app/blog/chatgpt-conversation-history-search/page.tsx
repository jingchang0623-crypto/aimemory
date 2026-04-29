import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Search Your ChatGPT Conversation History - 3 Methods',
  description: 'ChatGPT search only finds titles, not conversation content. Learn 3 methods to search your full ChatGPT conversation history including full-text search with AI Memory.',
  keywords: ['chatgpt conversation history search', 'find old chatgpt', 'search chatgpt chats', 'chatgpt search conversations', 'search chatgpt history', 'find chatgpt conversation'],
};

export default function ChatGPTConversationHistorySearch() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I search ChatGPT conversations by content?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not with ChatGPT\'s built-in search. It only searches titles. To search by content, you need to export your data and use a tool like AI Memory for full-text search.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I find an old ChatGPT conversation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Try the sidebar search first with keywords from the title. If that doesn\'t work, export your data and search the JSON file, or import into AI Memory for instant full-text search across all messages.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does ChatGPT save all my conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all conversations are saved to your account (unless you\'re in temporary chat mode). However, ChatGPT may occasionally fail to save conversations due to technical issues.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I search across multiple AI platforms at once?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! AI Memory supports importing from ChatGPT, Claude, DeepSeek, Gemini, and more. You can search all your AI conversations in one place with full-text search.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best way to search ChatGPT conversation history?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best method is to export your ChatGPT data and import it into AI Memory, which creates a full-text search index using SQLite FTS5. This lets you search message content, code snippets, and more — not just titles.',
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
          <h1>How to Search Your ChatGPT Conversation History</h1>
          <p className="text-xl text-gray-600">
            3 proven methods to find any past ChatGPT conversation — from basic sidebar search to full-text content search
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
            <h2 className="text-red-800 mt-0">⚠️ The Problem</h2>
            <p className="text-red-700">
              ChatGPT&apos;s built-in search only searches <strong>conversation titles</strong>, not the actual content. If you don&apos;t remember what you named a chat, you&apos;re out of luck. With hundreds of conversations, finding that one specific answer is nearly impossible.
            </p>
          </div>

          <h2>Why ChatGPT&apos;s Built-in Search Falls Short</h2>
          <p>
            If you&apos;ve been using ChatGPT for months, you probably have dozens or even hundreds of conversations. The sidebar search bar in ChatGPT only matches against <strong>conversation titles</strong> — it does not search the actual messages you exchanged.
          </p>
          <p>This means:</p>
          <ul>
            <li>You can&apos;t search for a specific code snippet ChatGPT gave you</li>
            <li>You can&apos;t find a conversation by a topic discussed (only by title)</li>
            <li>Renaming conversations with descriptive titles is tedious manual work</li>
            <li>Auto-generated titles often don&apos;t reflect the actual content</li>
          </ul>

          <h2>Method 1: ChatGPT Sidebar Search (Basic)</h2>
          <p>
            The simplest method — but also the most limited. In the ChatGPT web interface, use the search bar in the left sidebar.
          </p>
          <h3>How it works:</h3>
          <ol>
            <li>Open <a href="https://chat.openai.com" target="_blank" rel="noopener">chat.openai.com</a></li>
            <li>Click the search icon or use the search bar in the left sidebar</li>
            <li>Type a keyword that might appear in the <strong>conversation title</strong></li>
          </ol>
          <h3>Limitations:</h3>
          <ul>
            <li>Only searches titles, not conversation content</li>
            <li>No filtering by date, topic, or model</li>
            <li>No way to search within results</li>
          </ul>

          <h2>Method 2: Manual JSON Search (Advanced)</h2>
          <p>
            For power users willing to get hands-on. Export your ChatGPT data and search the raw JSON files.
          </p>
          <h3>How it works:</h3>
          <ol>
            <li>Go to ChatGPT Settings → Data Controls → Export Data</li>
            <li>Wait for the email and download the ZIP file</li>
            <li>Extract the ZIP and open <code>conversations.json</code></li>
            <li>Use a text editor&apos;s search (Ctrl+F) or a command-line tool like <code>grep</code></li>
          </ol>
          <p>
            For more details on exporting, see our <Link href="/blog/export-chatgpt" className="text-blue-600 underline">complete export guide</Link>.
          </p>
          <h3>Limitations:</h3>
          <ul>
            <li>Requires manual export every time</li>
            <li>JSON format is hard to read</li>
            <li>No full-text indexing — just raw text search</li>
            <li>Must repeat export process to get new conversations</li>
          </ul>

          <h2>Method 3: AI Memory Full-Text Search (Recommended)</h2>
          <p>
            <Link href="/" className="text-blue-600 underline">AI Memory</Link> imports your ChatGPT conversations and creates a powerful full-text search index using SQLite FTS5 technology.
          </p>
          <h3>How it works:</h3>
          <ol>
            <li><Link href="/blog/export-chatgpt" className="text-blue-600 underline">Export your ChatGPT data</Link></li>
            <li>Upload the ZIP to AI Memory</li>
            <li>Search across all your conversations instantly — titles, messages, code, everything</li>
          </ol>
          <h3>Benefits:</h3>
          <ul>
            <li>Full-text search across all message content</li>
            <li>Instant results with ranking by relevance</li>
            <li>Works offline — your data stays on your device</li>
            <li>One-time setup, then search forever</li>
          </ul>

          <h2>Comparison: Which Search Method Is Best?</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3">Feature</th>
                <th className="text-left p-3">ChatGPT Sidebar</th>
                <th className="text-left p-3">JSON Export</th>
                <th className="text-left p-3">AI Memory</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Search titles</td>
                <td className="p-3">✅</td>
                <td className="p-3">✅</td>
                <td className="p-3">✅</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Search message content</td>
                <td className="p-3">❌</td>
                <td className="p-3">✅ (manual)</td>
                <td className="p-3">✅ (indexed)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Instant results</td>
                <td className="p-3">✅</td>
                <td className="p-3">❌</td>
                <td className="p-3">✅</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">No export needed</td>
                <td className="p-3">✅</td>
                <td className="p-3">❌</td>
                <td className="p-3">❌ (one-time)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Works offline</td>
                <td className="p-3">❌</td>
                <td className="p-3">✅</td>
                <td className="p-3">✅</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Free</td>
                <td className="p-3">✅</td>
                <td className="p-3">✅</td>
                <td className="p-3">✅</td>
              </tr>
            </tbody>
          </table>

          <h2>Pro Tips for Managing ChatGPT Conversations</h2>
          <ul>
            <li>💡 <strong>Rename important chats</strong> — Give descriptive titles so sidebar search works better</li>
            <li>💡 <strong>Use folders/labels</strong> — ChatGPT now supports organizing into folders</li>
            <li>💡 <strong>Export regularly</strong> — Back up your data monthly to avoid losing conversations</li>
            <li>💡 <strong>Import to AI Memory</strong> — One upload, permanent full-text search</li>
          </ul>

          <p>
            If you&apos;re also dealing with conversations getting too long, check out our guide on{' '}
            <Link href="/blog/chatgpt-conversation-too-long" className="text-blue-600 underline">what to do when your ChatGPT conversation is too long</Link>.
          </p>

          <h2>Frequently Asked Questions</h2>

          <h3>Can I search ChatGPT conversations by content?</h3>
          <p>
            Not with ChatGPT&apos;s built-in search. It only searches titles. To search by content, you need to export your data and use a tool like <Link href="/" className="text-blue-600 underline">AI Memory</Link> for full-text search.
          </p>

          <h3>How do I find an old ChatGPT conversation?</h3>
          <p>
            Try the sidebar search first with keywords from the title. If that doesn&apos;t work, export your data and search the JSON file, or import into AI Memory for instant full-text search.
          </p>

          <h3>Does ChatGPT save all my conversations?</h3>
          <p>
            Yes, all conversations are saved to your account (unless you&apos;re in temporary chat mode). However, ChatGPT may <Link href="/blog/chatgpt-not-saving" className="text-blue-600 underline">occasionally fail to save conversations</Link> due to technical issues.
          </p>

          <h3>Can I search across multiple AI platforms?</h3>
          <p>
            Yes! AI Memory supports importing from <Link href="/blog/export-claude" className="text-blue-600 underline">Claude</Link>, <Link href="/blog/export-deepseek" className="text-blue-600 underline">DeepSeek</Link>, <Link href="/blog/export-gemini" className="text-blue-600 underline">Gemini</Link>, and more. Search all your AI conversations in one place.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h2 className="text-green-800 mt-0">Search All Your Conversations Now</h2>
            <p className="text-green-700 mb-4">
              Upload your ChatGPT export to AI Memory and find any conversation in seconds with full-text search.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Try AI Memory Free →
            </Link>
          </div>
        </article>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
          <p>AI Memory — Your personal AI conversation search engine. All data stays on your device.</p>
        </div>
      </footer>
    </div>
  );
}
