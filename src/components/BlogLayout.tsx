import Link from 'next/link';
import { getRelatedPosts, type BlogPost, SITE_URL, BLOG_BASE } from '@/lib/blog-data';

interface BlogLayoutProps {
  slug: string;
  /** Current post metadata for breadcrumbs */
  title: string;
  category?: string;
  date?: string;
  readTime?: string;
  children: React.ReactNode;
}

export default function BlogLayout({ slug, title, category, date, readTime, children }: BlogLayoutProps) {
  const related = getRelatedPosts(slug, 4);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: title, item: `${BLOG_BASE}/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" className="hover:text-blue-600" itemProp="item">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li className="mx-1">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/blog" className="hover:text-blue-600" itemProp="item">
              <span itemProp="name">Blog</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li className="mx-1">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-gray-900 font-medium">{title}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose lg:prose-xl max-w-none">
          {children}
        </article>

        {/* CTA */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Ready to organize your AI conversations?</h3>
          <p className="text-blue-700 mb-4">Import your ChatGPT, Claude, and DeepSeek conversations into AI Memory. Search everything instantly.</p>
          <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Try AI Memory Free →
          </Link>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition"
                >
                  <span className="text-xs font-medium text-blue-600 uppercase">{post.category}</span>
                  <h4 className="text-base font-semibold text-gray-900 mt-1 mb-1">{post.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-2">{post.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/" className="text-white hover:text-blue-400">🧠 AI Memory</Link>
            <Link href="/features" className="hover:text-white">Features</Link>
            <Link href="/chrome-extension" className="hover:text-white">Extension</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/docs/mcp" className="hover:text-white">MCP Server</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
          <p className="text-xs text-gray-500 mt-4">Your conversations, searchable forever.</p>
        </div>
      </footer>
    </div>
  );
}
