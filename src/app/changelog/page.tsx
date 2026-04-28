import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Changelog - AI Memory | Product Updates & New Features',
  description: 'Track the latest updates, new features, and improvements to AI Memory. See what we shipped each week.',
  openGraph: {
    title: 'Changelog - AI Memory Product Updates',
    description: 'Track the latest updates, new features, and improvements to AI Memory.',
    url: 'https://aimemory.pro/changelog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aimemory.pro/changelog',
  },
};

const releases = [
  {
    version: 'v0.6.0',
    date: '2026-04-28',
    title: 'Blog Architecture + High-Value SEO Content',
    tags: ['SEO', 'Architecture', 'Content'],
    changes: {
      added: [
        'Centralized blog data registry (src/lib/blog-data.ts) — powers index, related posts, sitemap',
        'Shared BlogLayout component with Breadcrumbs JSON-LD and Related Posts',
        'New blog post: "ChatGPT Memory: Complete Guide" targeting high-volume keyword',
        'FAQPage structured data on ChatGPT Memory guide for rich snippets',
        'Internal cross-linking via intelligent related posts (tag-based matching)',
      ],
      improved: [
        'Blog pages now have consistent header, footer, and breadcrumb navigation',
        'Blog infrastructure ready for scaling to 50+ posts without code duplication',
      ],
    },
  },
  {
    version: 'v0.5.0',
    date: '2026-04-28',
    title: 'MCP Server + Chinese Market Launch',
    tags: ['MCP', 'SEO', 'Chinese'],
    changes: {
      added: [
        'MCP Server API — connect to Claude Desktop, Cursor, and 100+ MCP clients',
        'MCP documentation page with setup guides for Claude Desktop and Cursor',
        'Chinese SEO blog post for AI conversation export (AI对话导出)',
        'Pricing page with Free and Pro tiers ($6.9/month)',
        'Blog index page with all articles',
        'Open Graph images and WebSite structured data',
        'Session isolation for user data privacy',
        'Security audit fixes',
      ],
      improved: [
        'MCP API now connected to SQLite FTS5 database (real search results)',
        'Features page updated — MCP Server moved from "Coming Soon" to current',
        'Homepage navigation and footer links',
      ],
    },
  },
  {
    version: 'v0.4.0',
    date: '2026-04-27',
    title: 'SEO Foundation + Privacy Pages',
    tags: ['SEO', 'Content', 'Legal'],
    changes: {
      added: [
        'High-value SEO blog: "Best ChatGPT History Extension in 2026"',
        'SEO blog: "ChatGPT Export Extension Guide"',
        'Features page with competitive comparison table',
        'Privacy policy page (Chrome Web Store requirement)',
        'Terms of service page',
        'FAQ structured data (JSON-LD) for Google Rich Snippets',
        'Open Graph metadata and canonical URLs',
      ],
      improved: [
        'Layout title optimized for search engines',
        'Sitemap updated with all pages',
        'Keywords array expanded for better SEO coverage',
      ],
    },
  },
  {
    version: 'v0.3.0',
    date: '2026-04-26',
    title: 'Memory Injection Module',
    tags: ['Extension', 'Core Feature'],
    changes: {
      added: [
        'Memory injection module for 5 AI platforms',
        'ChatGPT/Claude support via ProseMirror (document.execCommand)',
        'Gemini support via Quill editor integration',
        'Kimi support via Lexical editor integration',
        'DeepSeek support via textarea native setter',
        'MV3 architecture with world: "MAIN" for ProseMirror access',
        'CustomEvent bridge between ISOLATED and MAIN worlds',
      ],
    },
  },
  {
    version: 'v0.2.0',
    date: '2026-04-25',
    title: 'Strategy Blogs + MCP MVP',
    tags: ['Content', 'MCP', 'SEO'],
    changes: {
      added: [
        '3 memory-focused SEO blog posts',
        'MCP Server MVP implementation',
        'ChatGPT memory export guide',
        'Content scripts for Gemini (DOM scraping + MutationObserver)',
      ],
    },
  },
  {
    version: 'v0.1.0',
    date: '2026-04-24',
    title: 'Initial Launch',
    tags: ['Launch', 'Core'],
    changes: {
      added: [
        'Chrome extension MVP (WXT framework)',
        'Web app with full-text search (SQLite FTS5)',
        'Multi-platform import (ChatGPT, Claude, DeepSeek, Gemini)',
        'Conversation parser for JSON and TXT formats',
        '20+ initial SEO blog posts',
        'Chrome extension page',
      ],
    },
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">🧠 AI Memory</Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link href="/" className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">Get Started</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Changelog</h1>
          <p className="text-lg text-gray-600">
            Track what we&apos;re building. New features, improvements, and fixes — shipped every week.
          </p>
        </div>

        <div className="space-y-12">
          {releases.map((release, idx) => (
            <div key={release.version} className={idx === 0 ? '' : 'border-t border-gray-200 pt-12'}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {release.version}
                    </span>
                    {release.tags.map(tag => (
                      <span key={tag} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{release.title}</h2>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">{release.date}</span>
              </div>

              {release.changes.added && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">Added</h3>
                  <ul className="space-y-1.5">
                    {release.changes.added.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-green-500 mt-1">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {release.changes.improved && (
                <div>
                  <h3 className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">Improved</h3>
                  <ul className="space-y-1.5">
                    {release.changes.improved.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-500 mt-1">↑</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Want to see what we build next?</h2>
          <p className="text-gray-600 mb-4">Join the Pro waitlist for early access to new features.</p>
          <Link href="/pricing" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            View Pricing →
          </Link>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>AI Memory — Your conversations, preserved forever</p>
          <div className="mt-2 space-x-4">
            <Link href="/features" className="hover:text-gray-700">Features</Link>
            <Link href="/pricing" className="hover:text-gray-700">Pricing</Link>
            <Link href="/changelog" className="hover:text-gray-700">Changelog</Link>
            <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-700">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
