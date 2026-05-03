import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Export Claude Conversations - Complete Guide 2026',
  description: 'Step-by-step guide to export your Claude AI conversation history. Download all your chats and import them into AI Memory for permanent searchable storage.',
  keywords: ['Claude export', 'export Claude conversations', 'Claude data download', 'Claude chat history', 'backup Claude'],
  alternates: {
    canonical: 'https://aimemory.pro/blog/export-claude',
  },
};

export default function ExportClaudeGuide() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I export my Claude conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Go to Claude Settings, click on Privacy in the left sidebar, then click the Export Data button. Claude will prepare your data and send you an email with a download link containing your conversation archive.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the Claude export download link last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Claude export download link expires in 24 hours. Be sure to download your data promptly after receiving the email from Anthropic. If the link expires, you can request a new export.',
        },
      },
      {
        '@type': 'Question',
        name: 'What format does Claude export use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Claude exports your conversations as a JSON file inside a ZIP archive. The JSON contains all your conversation history and can be imported into tools like AI Memory for searchable storage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I export Claude conversations from the mobile app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, the Claude data export feature is only available on the web version at claude.ai. It is not available through the mobile app. You need to use a desktop browser to request an export.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does exporting Claude data delete my conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, exporting your data creates a downloadable copy without affecting your existing conversations. Your chats will remain accessible in Claude as usual. However, Claude does not support importing conversations back.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I search through exported Claude conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Upload your Claude export JSON file to AI Memory at aimemory.pro. AI Memory will automatically parse, index, and make every conversation instantly searchable with full-text search across all messages.',
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
          <h1>How to Export Your Claude Conversations</h1>
          <p className="text-xl text-gray-600">
            A complete guide to downloading and preserving your Claude AI chat history
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 mt-0">Quick Summary</h2>
            <ol className="text-blue-700">
              <li>Go to Claude Settings → Privacy → Export Data</li>
              <li>Click &quot;Export&quot; and wait for the email</li>
              <li>Download the ZIP file from your email</li>
              <li>Upload to <Link href="/" className="text-blue-600 underline">AI Memory</Link> for searchable storage</li>
            </ol>
          </div>

          <h2>Step-by-Step Guide</h2>

          <h3>Step 1: Open Claude Settings</h3>
          <p>
            Visit <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> and 
            click on your profile icon in the top-right corner. Select &quot;Settings&quot; from the menu.
          </p>

          <h3>Step 2: Navigate to Privacy</h3>
          <p>
            In the Settings dialog, click on &quot;Privacy&quot; in the left sidebar. 
            You&apos;ll find the &quot;Export Data&quot; option.
          </p>

          <h3>Step 3: Request Export</h3>
          <p>
            Click the &quot;Export&quot; button. Claude will prepare your data and send you an email 
            with a download link. The link expires in 24 hours.
          </p>

          <h3>Step 4: Download Your Data</h3>
          <p>
            Check your email for a message from Anthropic. Click the download link to get your 
            conversation archive.
          </p>

          <h3>Step 5: Import to AI Memory</h3>
          <p>
            Go to <Link href="/" className="text-blue-600 underline">aimemory.pro</Link> and 
            upload the JSON file. Your Claude conversations will be instantly searchable!
          </p>

          <h2>Important Notes</h2>
          <ul>
            <li>⚠️ The download link expires in <strong>24 hours</strong></li>
            <li>📱 Export is only available on web (not mobile apps)</li>
            <li>🔒 Claude does not support importing conversations back</li>
          </ul>

          <h2>Why Export Your Claude Data?</h2>
          <ul>
            <li>🔒 <strong>Backup</strong> — Preserve important discussions</li>
            <li>🔍 <strong>Search</strong> — Full-text search across all chats</li>
            <li>📊 <strong>Review</strong> — Analyze your conversation patterns</li>
            <li>🔄 <strong>Consolidate</strong> — Merge with ChatGPT conversations</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h2 className="text-green-800 mt-0">Ready to Import?</h2>
            <p className="text-green-700 mb-4">
              Upload your Claude export to AI Memory and make all your conversations searchable.
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
