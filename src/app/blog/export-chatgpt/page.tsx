import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Export ChatGPT Conversations - Complete Guide 2026',
  description: 'Step-by-step guide to export your ChatGPT conversation history. Download all your chats as JSON and import them into AI Memory for permanent searchable storage.',
  keywords: ['ChatGPT export', 'export ChatGPT conversations', 'ChatGPT data download', 'ChatGPT chat history', 'backup ChatGPT'],
  alternates: {
    canonical: 'https://aimemory.pro/blog/export-chatgpt',
  },
};

export default function ExportChatGPTGuide() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I export my ChatGPT conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Go to ChatGPT Settings → Data Controls → Export Data, click the Export button, and wait for an email from OpenAI with a download link. The ZIP file typically arrives within 1-5 minutes and contains all your conversations in JSON format.',
        },
      },
      {
        '@type': 'Question',
        name: 'What format does ChatGPT export use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT exports as a ZIP file containing conversations.json (all conversations in JSON format), chat.html (a browser-viewable version), and any files you uploaded to ChatGPT. The JSON format is the most useful for importing into tools like AI Memory.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to receive the ChatGPT export?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'OpenAI typically sends the export email within 1-5 minutes, though it can take up to 24 hours during peak times. Check your spam folder if you do not see the email. You can also re-request the export if the link expires.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I export ChatGPT conversations for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the ChatGPT data export feature is completely free and available on all plans including the free tier. Simply go to Settings → Data Controls → Export Data. You can request an export at any time without any cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I search through exported ChatGPT conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The exported JSON file is difficult to search manually. Upload your ChatGPT export ZIP to AI Memory, which will automatically parse, index, and make every conversation instantly searchable with full-text search across all messages.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does exporting ChatGPT data delete my conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, exporting your data creates a downloadable copy without affecting your existing conversations. Your chats will remain accessible in ChatGPT as usual. The export simply gives you an additional backup of everything.',
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

          <h1>How to Export Your ChatGPT Conversations</h1>
          <p className="text-xl text-gray-600">
            A complete guide to downloading and preserving your ChatGPT chat history
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 mt-0">Quick Summary</h2>
            <ol className="text-blue-700">
              <li>Go to ChatGPT Settings → Data Controls → Export Data</li>
              <li>Click &quot;Export&quot; and wait for the email</li>
              <li>Download the ZIP file from your email</li>
              <li>Upload to <Link href="/" className="text-blue-600 underline">AI Memory</Link> for searchable storage</li>
            </ol>
          </div>

          <h2>Step-by-Step Guide</h2>

          <h3>Step 1: Open ChatGPT Settings</h3>
          <p>
            Visit <a href="https://chat.openai.com" target="_blank" rel="noopener">chat.openai.com</a> and 
            click on your profile icon in the bottom-left corner. Select &quot;Settings&quot; from the menu.
          </p>

          <h3>Step 2: Navigate to Data Controls</h3>
          <p>
            In the Settings dialog, click on &quot;Data Controls&quot; in the left sidebar. 
            You&apos;ll see the &quot;Export&quot; option under &quot;Export Data&quot;.
          </p>

          <h3>Step 3: Request Export</h3>
          <p>
            Click the &quot;Export&quot; button. ChatGPT will prepare your data and send you an email 
            with a download link. This usually takes 1-5 minutes.
          </p>

          <h3>Step 4: Download Your Data</h3>
          <p>
            Check your email for a message from OpenAI. Click the download link to get a ZIP file 
            containing all your conversations.
          </p>

          <h3>Step 5: Import to AI Memory</h3>
          <p>
            Go to <Link href="/" className="text-blue-600 underline">aimemory.pro</Link> and 
            upload the ZIP file (or extract and upload conversations.json). Your chats will be 
            instantly searchable!
          </p>

          <h2>What&apos;s in the Export?</h2>
          <p>Your ChatGPT export ZIP contains:</p>
          <ul>
            <li><strong>conversations.json</strong> — All your conversations in JSON format</li>
            <li><strong>chat.html</strong> — A browser-viewable version of your chats</li>
            <li><strong>uploaded files</strong> — Any files you shared with ChatGPT</li>
          </ul>

          <h2>Why Export Your ChatGPT Data?</h2>
          <ul>
            <li>🔒 <strong>Backup</strong> — Never lose valuable conversations</li>
            <li>🔍 <strong>Search</strong> — Find any past discussion instantly</li>
            <li>📊 <strong>Analyze</strong> — Review your AI usage patterns</li>
            <li>🔄 <strong>Migrate</strong> — Move to another platform if needed</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h2 className="text-green-800 mt-0">Ready to Import?</h2>
            <p className="text-green-700 mb-4">
              Upload your ChatGPT export to AI Memory and make all your conversations searchable.
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
