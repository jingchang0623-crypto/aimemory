import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Export ChatMemo Conversations & Import to AI Memory',
  description: 'Export your ChatMemo saved conversations and import them into AI Memory for powerful full-text search across all your AI chats.',
  keywords: ['ChatMemo export', 'ChatMemo to AI Memory', 'ChatMemo conversations', 'AI chat backup', 'ChatGPT chat export'],
  alternates: {
    canonical: 'https://aimemory.pro/blog/chatmemo-export',
  },
};

export default function ChatMemoExportGuide() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I export conversations from ChatMemo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Click the ChatMemo extension icon in your browser, open Settings (gear icon), then select "Export" or "Export All". ChatMemo will download a ZIP file containing TXT files for each saved conversation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What format does ChatMemo export conversations in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatMemo exports conversations as a ZIP archive containing individual TXT files. Each TXT file uses [User] and [Assistant] markers to indicate the conversation structure.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I import ChatMemo conversations into AI Memory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. Go to aimemory.pro and upload the ChatMemo ZIP file directly, or upload individual TXT files. AI Memory supports ChatMemo's TXT format and will automatically parse the conversation structure.",
        },
      },
      {
        '@type': 'Question',
        name: 'Why should I migrate from ChatMemo to AI Memory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Memory offers full-text search across all conversations, works in any browser (not just Chrome), provides web-based access from any device, and lets you combine ChatGPT, Claude, and ChatMemo data in one searchable platform.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my data private when importing to AI Memory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Your data stays 100% private after importing to AI Memory. All conversations become instantly searchable, and you can browse them by date or platform while maintaining full control over your data.',
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
          <h1>How to Export ChatMemo & Import to AI Memory</h1>
          <p className="text-xl text-gray-600">
            Transfer your ChatMemo saved conversations to AI Memory for better search and organization
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
            <h2 className="text-purple-800 mt-0">Why Migrate to AI Memory?</h2>
            <ul className="text-purple-700">
              <li>✅ Full-text search across ALL conversations</li>
              <li>✅ Works in any browser (not just Chrome)</li>
              <li>✅ Web-based access from any device</li>
              <li>✅ Combine ChatGPT, Claude, and ChatMemo data</li>
            </ul>
          </div>

          <h2>Step-by-Step Guide</h2>

          <h3>Step 1: Export from ChatMemo</h3>
          <p>
            Click the ChatMemo extension icon in your browser. In the sidebar, click the 
            &quot;Settings&quot; gear icon, then select &quot;Export&quot; or &quot;Export All&quot;.
          </p>
          <p>
            ChatMemo will export your conversations as a ZIP file containing TXT files 
            for each conversation.
          </p>

          <h3>Step 2: Extract the ZIP File</h3>
          <p>
            Unzip the downloaded file. You&apos;ll see multiple TXT files, one for each 
            saved conversation.
          </p>

          <h3>Step 3: Import to AI Memory</h3>
          <p>
            Go to <Link href="/" className="text-blue-600 underline">aimemory.pro</Link> and 
            upload the ZIP file directly, or upload individual TXT files.
          </p>
          <p>
            AI Memory supports ChatMemo&apos;s TXT format and will automatically parse 
            the conversation structure.
          </p>

          <h2>Supported ChatMemo Formats</h2>
          <p>AI Memory supports these ChatMemo export formats:</p>
          <ul>
            <li><strong>TXT files</strong> — Plain text with [User]/[Assistant] markers</li>
            <li><strong>ZIP archives</strong> — Bulk upload multiple conversations at once</li>
          </ul>

          <h2>What Happens After Import?</h2>
          <p>Once imported to AI Memory:</p>
          <ul>
            <li>🔍 All conversations become <strong>instantly searchable</strong></li>
            <li>📊 You can <strong>browse</strong> conversations by date or platform</li>
            <li>💬 Click any result to view the <strong>full conversation</strong></li>
            <li>🔒 Your data stays <strong>100% private</strong> on your device</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h2 className="text-green-800 mt-0">Ready to Import?</h2>
            <p className="text-green-700 mb-4">
              Upload your ChatMemo export to AI Memory and unlock powerful search across all your AI conversations.
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
