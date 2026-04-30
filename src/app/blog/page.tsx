import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'AI Memory Blog - Tips, Guides & Tutorials for Managing AI Conversations',
  description: 'Learn how to export, search, and organize your ChatGPT, Claude, DeepSeek and Gemini conversations. Expert guides on AI conversation management.',
  openGraph: {
    title: 'AI Memory Blog - Tips, Guides & Tutorials',
    description: 'Learn how to export, search, and organize your AI conversations from ChatGPT, Claude, DeepSeek and Gemini.',
    url: 'https://aimemory.pro/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aimemory.pro/blog',
  },
};

const categories = ['All', 'Export Guides', 'Extensions', 'Troubleshooting', 'Guides', 'Comparisons', 'Technical', 'Platforms', 'Migration', 'Developers', 'Privacy', '中文指南'];

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'AI Memory Blog',
    description: 'Tips, guides and tutorials for managing your AI conversations',
    url: 'https://aimemory.pro/blog',
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://aimemory.pro/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-100 py-4 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🧠</span>
              <span className="text-xl font-bold text-gray-900">AI Memory</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/features" className="text-gray-500 hover:text-gray-900">Features</Link>
              <Link href="/chrome-extension" className="text-gray-500 hover:text-gray-900">Extension</Link>
              <Link href="/blog" className="text-gray-900 font-medium">Blog</Link>
              <Link href="/pricing" className="text-gray-500 hover:text-gray-900">Pricing</Link>
            </nav>
            <Link href="/" className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
              Try Free
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Memory Blog
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Tips, guides and tutorials for managing your AI conversations. Learn how to export, search and organize chats from ChatGPT, Claude, DeepSeek and Gemini.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 py-4">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1.5 text-sm rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 cursor-default"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-gray-400 mb-6">{blogPosts.length} articles</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-6 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <span className="inline-block text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <time className="text-xs text-gray-400">{post.date}</time>
                    {post.readTime && (
                      <span className="text-xs text-gray-400">· {post.readTime}</span>
                    )}
                    {post.lang === 'zh' && (
                      <span className="text-xs text-orange-500">🇨🇳 中文</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to organize your AI conversations?</h2>
            <p className="text-gray-500 mb-6">Import your ChatGPT, Claude, DeepSeek and Gemini chats. Search everything instantly. 100% private.</p>
            <Link href="/" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">
              Get Started Free →
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/chrome-extension">Extension</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/docs/mcp">MCP Docs</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Compare</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/compare">vs Competitors</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
            © 2026 AI Memory. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
