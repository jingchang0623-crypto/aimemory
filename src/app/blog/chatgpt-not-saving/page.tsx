import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ChatGPT Not Saving Conversations? Here\'s How to Recover & Backup',
  description: 'ChatGPT not saving your conversations or lost chat history? Learn how to recover lost chats and backup all your conversations with AI Memory.',
  keywords: ['chatgpt not saving conversations', 'chatgpt lost chat history', 'chatgpt lost chats', 'chatgpt conversation not found', 'recover chatgpt conversations'],
};

export default function ChatGPTNotSaving() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why are my ChatGPT conversations not saving?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT conversations may not save due to server outages, browser cache clearing, logging out and back in, or using a different device or browser. Account issues can also cause conversations to disappear from your sidebar.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I recover lost ChatGPT conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can try checking your email for ChatGPT notification links, using the Data Controls export feature to download all conversations as a ZIP file, or searching your browser history for chat.openai.com or chatgpt.com URLs to find past sessions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does ChatGPT automatically back up my conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT stores conversations on its servers, but they can disappear due to technical issues. There is no built-in automatic backup to an external location. Using a tool like AI Memory with its Chrome extension ensures conversations are saved independently.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I prevent losing ChatGPT conversations in the future?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Export your ChatGPT data regularly from Settings → Data Controls → Export Data, install the AI Memory Chrome Extension for automatic real-time backup, and upload your exports to AI Memory for permanent searchable storage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I recover a ChatGPT conversation that was deleted?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If a conversation was deleted by ChatGPT due to a bug or server issue, the export feature may still include it. Go to Settings → Data Controls → Export Data and check the ZIP file. Deleted conversations often remain in the export even if they are not visible in the sidebar.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a way to search old ChatGPT conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT only offers basic title-based search in the sidebar. For full-text search across all your conversations, export your data and import it into AI Memory, which indexes every message for instant keyword and semantic search.',
        },
      },
    ],
  };

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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

          <h1>ChatGPT Not Saving Conversations? Here&apos;s What to Do</h1>
          <p className="text-xl text-gray-600">
            Your ChatGPT conversations disappeared? Here&apos;s how to recover them and prevent future data loss.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
            <h2 className="text-yellow-800 mt-0">⚠️ Common Causes</h2>
            <ul className="text-yellow-700">
              <li>ChatGPT server issues or outages</li>
              <li>Browser cache cleared</li>
              <li>Logged out and back in</li>
              <li>Using a different device/browser</li>
              <li>Account issues</li>
            </ul>
          </div>

          <h2>How to Recover Lost Conversations</h2>

          <h3>1. Check Your Email</h3>
          <p>
            ChatGPT sends email notifications when conversations are created. Search your 
            email for &quot;ChatGPT&quot; to find links to past conversations.
          </p>

          <h3>2. Export Your Data</h3>
          <p>
            Go to ChatGPT Settings → Data Controls → Export Data. This will give you a 
            ZIP file with all your conversations, even ones that don&apos;t appear in the sidebar.
          </p>

          <h3>3. Check Browser History</h3>
          <p>
            Your browser history may have links to past ChatGPT conversations. Search for 
            &quot;chat.openai.com&quot; or &quot;chatgpt.com&quot; in your browser history.
          </p>

          <h2>How to Prevent Future Data Loss</h2>

          <h3>✅ Use AI Memory for Automatic Backup</h3>
          <p>
            <Link href="/" className="text-blue-600 underline">AI Memory</Link> lets you 
            export and store all your conversations in one searchable place. Never lose 
            a conversation again.
          </p>

          <h3>✅ Regular Exports</h3>
          <p>
            Export your ChatGPT data monthly. Store the ZIP files in a safe place.
          </p>

          <h3>✅ Use the Chrome Extension</h3>
          <p>
            Install the <Link href="/chrome-extension" className="text-blue-600 underline">AI Memory Chrome Extension</Link> to 
            automatically save conversations as you chat.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h2 className="text-green-800 mt-0">Never Lose a Conversation Again</h2>
            <p className="text-green-700 mb-4">
              Upload your ChatGPT export to AI Memory and keep all your conversations 
              safe, searchable, and accessible.
            </p>
            <Link 
              href="/" 
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Backup Your Chats →
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
