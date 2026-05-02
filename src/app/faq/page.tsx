import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FAQ - AI Memory | Frequently Asked Questions About AI Chat History',
  description: 'Get answers to frequently asked questions about AI Memory — the free tool for saving, searching, and managing your ChatGPT, Claude, and DeepSeek conversations.',
  keywords: ['ai memory faq', 'chatgpt memory faq', 'ai chat history questions', 'ai memory tool help'],
  openGraph: {
    title: 'FAQ - AI Memory | Your Questions Answered',
    description: 'Get answers to frequently asked questions about AI Memory — save, search, and manage your AI conversations.',
    url: 'https://aimemory.pro/faq',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aimemory.pro/faq',
  },
};

const faqCategories = [
  {
    category: 'Getting Started',
    icon: '🚀',
    questions: [
      {
        q: 'What is AI Memory?',
        a: 'AI Memory is a free tool that lets you save, search, and manage all your AI conversations in one place. It works with ChatGPT, Claude, DeepSeek, Gemini, and Kimi. You can upload your chat exports, search across all conversations instantly, and even inject your saved memories into new AI chats.',
      },
      {
        q: 'How do I get started with AI Memory?',
        a: 'Simply visit aimemory.pro and upload your ChatGPT, Claude, or DeepSeek export file. No account is needed. Go to your AI platform\'s settings, export your data (you\'ll get a ZIP or JSON file), then drag and drop it on our upload page. Your conversations will be searchable in seconds.',
      },
      {
        q: 'Is AI Memory really free?',
        a: 'Yes, all core features are completely free with unlimited storage. You can upload, search, and browse your conversations without any limits. The optional Pro plan ($6.9/month) adds cloud sync with end-to-end encryption and advanced AI analysis features.',
      },
      {
        q: 'Do I need to install anything?',
        a: 'No installation is required for the web version — just visit aimemory.pro in your browser. For the best experience, we recommend installing the free Chrome extension, which automatically captures new conversations from ChatGPT, Claude, DeepSeek, Gemini, and Kimi.',
      },
    ],
  },
  {
    category: 'Supported Platforms',
    icon: '🌐',
    questions: [
      {
        q: 'Which AI platforms does AI Memory support?',
        a: 'AI Memory supports ChatGPT, Claude, DeepSeek, Gemini, and Kimi. You can upload export files from any of these platforms, and the Chrome extension automatically captures conversations from all five. We\'re continuously adding support for more platforms.',
      },
      {
        q: 'Can I search across all my AI platforms at once?',
        a: 'Yes! That\'s one of AI Memory\'s key features. When you search, results come from all your uploaded conversations across ChatGPT, Claude, DeepSeek, Gemini, and Kimi. No other tool offers this cross-platform unified search.',
      },
      {
        q: 'How do I export my data from ChatGPT?',
        a: 'Go to ChatGPT → Settings → Data Controls → Export Data. You\'ll receive an email with a ZIP file containing all your conversations in JSON format. Upload this ZIP to AI Memory and everything will be parsed automatically.',
      },
      {
        q: 'How do I export my data from Claude?',
        a: 'Go to Claude → Settings → Privacy → Request Data Export. Anthropic will email you a JSON file with all your conversations. Upload it to AI Memory to make everything searchable.',
      },
    ],
  },
  {
    category: 'Privacy & Security',
    icon: '🔒',
    questions: [
      {
        q: 'Is my data private?',
        a: 'Yes. AI Memory stores your data in an isolated session on our server — only you can access it with your session cookie. No tracking, no ads, no data selling. You can export or delete everything with one click.',
      },
      {
        q: 'Can AI Memory read my conversations?',
        a: 'No. Your data is stored in an isolated session that only you can access. We have no ability to view your conversations. You can export or delete everything with one click at any time.',
      },
      {
        q: 'How do I delete my data?',
        a: 'You can delete individual conversations or all data with one click on the upload page. You can also export your data at any time before deleting.',
      },
      {
        q: 'Is AI Memory GDPR compliant?',
        a: 'Yes. AI Memory stores data locally by default, meaning no personal data is processed on our servers. If you use cloud sync, data is end-to-end encrypted and we cannot access it. We don\'t use cookies for tracking, and no data is shared with third parties.',
      },
    ],
  },
  {
    category: 'Features',
    icon: '⚡',
    questions: [
      {
        q: 'What is memory injection?',
        a: 'Memory injection is AI Memory\'s unique feature that automatically inserts your saved memories into new AI conversations. When you start a new chat with ChatGPT, Claude, or DeepSeek, AI Memory can inject relevant context — your preferences, past discussions, project details — so the AI already knows your background.',
      },
      {
        q: 'What is the MCP Server?',
        a: 'MCP (Model Context Protocol) is a standard for connecting AI tools. AI Memory has a built-in MCP server that lets you search and add memories from Claude Desktop, Cursor, and 100+ other MCP-compatible tools. It\'s like giving every AI tool access to your memory bank.',
      },
      {
        q: 'Can I use AI Memory offline?',
        a: 'Yes! Since all data is stored locally in your browser, AI Memory works completely offline. You can search, browse, and manage your conversations without an internet connection.',
      },
      {
        q: 'How much data can AI Memory handle?',
        a: 'AI Memory uses IndexedDB, which typically allows 50MB-2GB of storage depending on your browser. This is enough for thousands of conversations. The system uses full-text search (FTS5) for fast results even with large datasets.',
      },
    ],
  },
  {
    category: 'Pricing & Plans',
    icon: '💰',
    questions: [
      {
        q: 'What\'s included in the free plan?',
        a: 'The free plan includes unlimited local storage, full-text search across all conversations, export from 5 AI platforms, memory injection, the Chrome extension, and MCP server access. There are no limits on the number of conversations you can store.',
      },
      {
        q: 'What does the Pro plan include?',
        a: 'The Pro plan ($6.9/month) adds: cloud sync with end-to-end encryption, AI-powered memory analysis and insights, knowledge graph visualization, priority support, and early access to new features.',
      },
      {
        q: 'Is there a free trial for Pro?',
        a: 'Yes, all new users get a 14-day free trial of Pro features. No credit card required. After the trial, you can continue with the free plan or upgrade to Pro.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes, you can cancel your Pro subscription at any time. Your data remains accessible — you just lose access to Pro features like cloud sync. All locally stored data is unaffected.',
      },
    ],
  },
];

export default function FAQPage() {
  const allQuestions = faqCategories.flatMap(cat => 
    cat.questions.map(q => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.a,
      },
    }))
  );

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="border-b border-gray-100 py-4 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl">🧠</span>
              <span className="font-bold text-gray-900">AI Memory</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/features" className="text-sm text-gray-600 hover:text-gray-900">Features</Link>
              <Link href="/chrome-extension" className="text-sm text-gray-600 hover:text-gray-900">Extension</Link>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link>
              <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to know about AI Memory — the free tool for managing your AI conversations.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="pb-20 px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  {cat.category}
                </h2>
                <div className="space-y-4">
                  {cat.questions.map((item, i) => (
                    <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                        <h3 className="font-semibold text-gray-900 pr-4">{item.q}</h3>
                        <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Try AI Memory yourself — it&apos;s free and takes 30 seconds to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started Free →
              </Link>
              <Link href="/docs/mcp" className="inline-block border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                MCP Server Docs
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
