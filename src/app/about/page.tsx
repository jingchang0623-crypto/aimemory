import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About AI Memory - Our Mission to Preserve AI Conversations',
  description:
    'AI Memory is a free tool that helps you save, search, and manage conversations from ChatGPT, Claude, DeepSeek, and more. Learn about our mission.',
  openGraph: {
    title: 'About AI Memory - Our Mission to Preserve AI Conversations',
    description:
      'AI Memory is a free tool that helps you save, search, and manage conversations from ChatGPT, Claude, DeepSeek, and more.',
    url: 'https://aimemory.pro/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aimemory.pro/about',
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About AI Memory',
    description:
      'AI Memory helps you save, search, and manage all your AI conversations in one place.',
    url: 'https://aimemory.pro/about',
    mainEntity: {
      '@type': 'SoftwareApplication',
      name: 'AI Memory',
      applicationCategory: 'BrowserApplication',
      operatingSystem: 'Web + Chrome Extension',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description:
        'Save, search, and manage your ChatGPT, Claude, and DeepSeek conversations. Free browser-based tool with Chrome extension.',
      url: 'https://aimemory.pro',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
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
          <h1>About AI Memory</h1>
          <p className="text-xl text-gray-600">
            We believe your conversations with AI contain valuable knowledge.
            That knowledge should never be lost.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 mt-0">🎯 Our Mission</h2>
            <p className="text-blue-700">
              AI Memory exists to solve one problem: the knowledge you build
              through AI conversations disappears into platform silos. We make
              all your AI conversations searchable, organized, and portable — so
              you never have to explain the same thing twice.
            </p>
          </div>

          <h2>The Problem We Solve</h2>
          <p>
            Every day, millions of people have conversations with ChatGPT,
            Claude, DeepSeek, and other AI assistants. These conversations
            contain valuable insights about projects, code, research, and ideas.
          </p>
          <p>But there&apos;s a problem:</p>
          <ul>
            <li>
              <strong>Platform silos</strong> — Your conversations are trapped
              in each AI platform with no way to search across them.
            </li>
            <li>
              <strong>Memory limits</strong> — ChatGPT&apos;s memory feature
              caps at ~1,500 words. Once it&apos;s full, new information
              overwrites old.
            </li>
            <li>
              <strong>No export</strong> — Most platforms make it difficult to
              get your data out in a usable format.
            </li>
            <li>
              <strong>Lost context</strong> — You spend hours re-explaining your
              tech stack, preferences, and project details to each AI.
            </li>
          </ul>

          <h2>How AI Memory Works</h2>
          <p>
            AI Memory is a free, browser-based tool with an optional Chrome
            extension. It gives you three core capabilities:
          </p>

          <h3>1. Upload & Search</h3>
          <p>
            Upload your ChatGPT, Claude, or DeepSeek export files. We parse
            them automatically and make every conversation instantly full-text
            searchable. Your data is stored on our server in an isolated session
            — only you can access it.
          </p>

          <h3>2. Chrome Extension (Auto-Capture)</h3>
          <p>
            Our Chrome extension works in the background to automatically save
            new conversations from ChatGPT, Claude, DeepSeek, and Gemini as you
            chat. No manual export needed.
          </p>

          <h3>3. MCP Server</h3>
          <p>
            AI Memory includes a built-in{' '}
            <Link href="/docs/mcp">MCP (Model Context Protocol) server</Link>{' '}
            that lets AI tools like Claude Desktop, Cursor, and ChatGPT directly
            search your memory database. This means your AI assistants can
            access your entire conversation history as context.
          </p>

          <h2>Our Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {[
              {
                icon: '🔒',
                title: 'Privacy First',
                desc: 'Your data stays in your browser. No accounts required. No tracking. Delete anytime.',
              },
              {
                icon: '🆓',
                title: 'Free to Start',
                desc: 'Core features are completely free. Upload, search, and browse without paying anything.',
              },
              {
                icon: '🌍',
                title: 'Cross-Platform',
                desc: 'Works with ChatGPT, Claude, DeepSeek, Gemini, and more. One tool for all your AI conversations.',
              },
              {
                icon: '🔌',
                title: 'Open Protocol',
                desc: 'Built on MCP, the emerging standard for AI tool integration. Your data is never locked in.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-gray-200 rounded-lg p-4"
              >
                <h3 className="mt-0 text-lg">
                  {item.icon} {item.title}
                </h3>
                <p className="text-gray-600 text-base mb-0">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2>Who We Are</h2>
          <p>
            AI Memory is built by a small team passionate about making AI
            conversations more useful. We believe that as AI becomes a daily
            tool, managing your AI knowledge should be as natural as managing
            your email.
          </p>
          <p>
            We&apos;re inspired by the open-source community and the emerging MCP
            protocol standard. Our goal is to build the best cross-platform AI
            conversation management tool — one that works regardless of which AI
            you use.
          </p>

          <h2>Get Started</h2>
          <p>
            Ready to take control of your AI conversations? It takes 30 seconds
            to get started:
          </p>
          <ol>
            <li>
              Export your ChatGPT data (Settings → Data Controls → Export Data)
            </li>
            <li>
              Upload the ZIP file to{' '}
              <Link href="/" className="text-blue-600 underline">
                AI Memory
              </Link>
            </li>
            <li>Search across all your conversations instantly</li>
          </ol>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 my-8 text-center">
            <h2 className="mt-0">Try AI Memory — It&apos;s Free</h2>
            <p className="text-gray-600">
              No account needed. No extension required. Just upload and search.
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors no-underline"
            >
              Get Started Free →
            </Link>
          </div>

          <h2>Connect With Us</h2>
          <ul>
            <li>
              <strong>Website:</strong>{' '}
              <a href="https://aimemory.pro">aimemory.pro</a>
            </li>
            <li>
              <strong>GitHub:</strong>{' '}
              <a href="https://github.com/jingchang0623-crypto/aimemory">
                jingchang0623-crypto/aimemory
              </a>
            </li>
            <li>
              <strong>MCP Server:</strong>{' '}
              <Link href="/docs/mcp">Documentation</Link>
            </li>
            <li>
              <strong>Chrome Extension:</strong>{' '}
              <Link href="/chrome-extension">Install Free</Link>
            </li>
          </ul>
        </article>
      </main>

      <Footer />
    </div>
  );
}
