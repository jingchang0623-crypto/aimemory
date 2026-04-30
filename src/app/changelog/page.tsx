import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

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
    version: 'v0.25.0',
    date: '2026-05-01',
    title: 'ChatGPT Projects + Cross-Platform Search + Coding Comparison — Developer Focus',
    tags: ['SEO', 'Content', 'Developers'],
    changes: {
      added: [
        'New blog: "ChatGPT Projects: Complete Guide" — targeting trending "chatgpt projects" feature keyword, FAQPage schema (6 questions), 5-step walkthrough, Projects vs regular conversations comparison table',
        'New blog: "How to Search Across All AI Chats" — high-intent product keyword, 5 methods comparison, AI Memory FTS5 cross-platform search solution, FAQPage schema (6 questions)',
        'New blog: "Claude vs ChatGPT for Coding" — high-volume developer comparison keyword, side-by-side comparison table (9 categories), pricing breakdown, FAQPage schema (6 questions)',
      ],
      improved: [
        'Blog registry expanded to 71 posts (67 English + 4 Chinese)',
        'Sitemap expanded to 81 URLs',
        'Homepage guides section expanded with 3 new blog links',
        'Fixed research-progress.sh cron script (converted from bash to Python for cron compatibility)',
      ],
    },
    },
    {
    version: 'v0.24.0',
    date: '2026-05-01',
    title: 'Claude Artifacts + Delete History + Pro vs Plus — Trending Keywords',
    tags: ['SEO', 'Content', 'Claude'],
    changes: {
      added: [
        'New blog: "Claude Artifacts: Complete Guide" — targeting extremely trending "claude artifacts" keyword, FAQPage schema (6 questions), Artifacts vs Canvas comparison table, 6 practical use cases',
        'New blog: "How to Delete ChatGPT History" — high-volume pain-point keyword, FAQPage schema (6 questions), GDPR coverage, export-before-delete workflow with AI Memory CTA',
        'New blog: "ChatGPT Pro vs Plus vs Free" — commercial-intent pricing keyword, FAQPage schema (6 questions), full pricing comparison table, plan recommendation guide',
      ],
      improved: [
        'Blog registry expanded to 69 posts (65 English + 4 Chinese)',
        'Sitemap expanded to 78 URLs',
        'Homepage guides section expanded with 3 new blog links',
      ],
    },
    },
    {
    version: 'v0.23.0',
    date: '2026-04-30',
    title: 'Custom Instructions + Workspace Guide — High-Intent Keywords',
    tags: ['SEO', 'Content', 'Enterprise'],
    changes: {
      added: [
        'New blog: "ChatGPT Custom Instructions: Complete Guide with Examples" — high-volume keyword targeting "chatgpt custom instructions", "custom instructions vs memory", FAQPage schema (6 questions), role-based examples (engineer, PM, data scientist, marketer, student)',
        'New blog: "ChatGPT Workspace Guide: Team & Enterprise Setup" — enterprise keyword targeting "chatgpt workspace", "chatgpt for business", "chatgpt enterprise", FAQPage schema (6 questions), Team vs Enterprise comparison table',
      ],
      improved: [
        'Blog registry expanded to 66 posts (62 English + 4 Chinese)',
        'Sitemap expanded to 75 URLs',
        'Homepage guides section expanded with 2 new blog links',
      ],
    },
    },
    {
    version: 'v0.22.0',
    date: '2026-04-30',
    title: 'Blog Index Refactor + ChatGPT Team Features Deep Dive',
    tags: ['SEO', 'Architecture', 'Content'],
    changes: {
      added: [
        'New blog: "ChatGPT Team Features: Everything You Need to Know" — deep dive targeting "chatgpt team features", "chatgpt team pricing", "chatgpt for teams", FAQPage schema (6 questions)',
      ],
      improved: [
        'Blog index page refactored to use centralized blog-data.ts registry — all 61 posts now visible (was 27)',
        'Blog index now shows read time and language badges for each post',
        'Blog index category filter expanded: added Platforms, Migration, Developers, Privacy',
        'BlogPosting JSON-LD schema now covers all posts (was partial)',
        'Sitemap expanded to 73 URLs',
      ],
    },
    },
    {
    version: 'v0.21.0',
    date: '2026-04-30',
    title: 'High-Value Comparison Keywords + Cross-Platform Migration + Pricing Analysis',
    tags: ['SEO', 'Content', 'Comparisons'],
    changes: {
      added: [
        'New blog: "ChatGPT vs Gemini 2026" — comparison keyword targeting "chatgpt vs gemini", "is gemini better than chatgpt", feature comparison table, FAQPage schema (6 questions)',
        'New blog: "How to Export and Import AI Chat History" — cross-platform migration guide targeting "export import ai chat history", "transfer ai conversations", FAQPage schema (6 questions)',
        'New blog: "ChatGPT Team vs Plus vs Free 2026" — pricing comparison targeting "chatgpt team vs plus", "chatgpt free vs paid", FAQPage schema (6 questions)',
      ],
      improved: [
        'Blog registry expanded to 60 posts (56 English + 4 Chinese)',
        'Sitemap expanded to 72 URLs',
        'New categories: Cross-Platform Migration, Pricing Comparisons',
        'Homepage guides section expanded with 3 new blog links',
      ],
    },
    },
    {
    version: 'v0.20.0',
    date: '2026-04-30',
    title: 'Blue Ocean Platform + Pain-Point Keywords + Privacy Guide',
    tags: ['SEO', 'Content', 'Blue Ocean'],
    changes: {
      added: [
        'New blog: "How to Delete ChatGPT Memory" — pain-point keyword targeting "how to delete chatgpt memory", "clear chatgpt memory", FAQPage schema (6 questions)',
        'New blog: "Export Grok AI Conversations" — blue ocean platform targeting X/Twitter Grok AI with zero competition, FAQPage schema (6 questions)',
        'New blog: "ChatGPT Shared Conversations" — feature-specific keyword targeting "chatgpt shared conversations", privacy concerns coverage, FAQPage schema (6 questions)',
      ],
      improved: [
        'Blog registry expanded to 57 posts (53 English + 4 Chinese)',
        'Sitemap expanded to 69 URLs',
        'New categories: Blue Ocean (emerging AI platforms), Feature Guides (ChatGPT features)',
        'Homepage guides section expanded with 3 new blog links',
      ],
    },
    },
    {
    version: 'v0.19.0',
    date: '2026-04-30',
    title: 'Developer & Backup Niche + Claude Projects Coverage',
    tags: ['SEO', 'Content', 'Developers'],
    changes: {
      added: [
        'New blog: "ChatGPT Conversation Backup Guide" — targets "chatgpt conversation backup" and "backup chatgpt chats" high-intent keywords, FAQPage schema (6 questions)',
        'New blog: "Claude Projects Guide" — targets trending "claude projects" keyword with comparison to ChatGPT Custom Instructions, FAQPage schema (6 questions)',
        'New blog: "AI Memory for Developers" — developer audience targeting Cursor, Windsurf, GitHub Copilot users, FAQPage schema (6 questions)',
      ],
      improved: [
        'Blog registry expanded to 54 posts (50 English + 4 Chinese)',
        'Sitemap expanded to 66 URLs',
        'New categories: Developers (coding assistant memory), Backup (data preservation)',
      ],
    },
    },
    {
    version: 'v0.18.0',
    date: '2026-04-30',
    title: 'Platform Expansion: Kimi AI, Microsoft Copilot & ChatGPT Canvas',
    tags: ['SEO', 'Content', 'Platforms'],
    changes: {
      added: [
        'New blog: "Export Kimi AI Conversations" — Chinese market expansion targeting Moonshot AI\'s Kimi platform, FAQPage schema (6 questions)',
        'New blog: "Export Microsoft Copilot Chat History" — Microsoft ecosystem coverage targeting Edge/Windows/M365 users, FAQPage schema (6 questions)',
        'New blog: "ChatGPT Canvas Guide" — new feature guide targeting high-volume "chatgpt canvas" keyword, FAQPage schema (6 questions)',
      ],
    },
    },
    {
    version: 'v0.17.0',
    date: '2026-04-30',
    title: 'Pain-Point & Migration Keywords + Blue Ocean Platform Coverage',
    tags: ['SEO', 'Content', 'Keywords'],
    changes: {
      added: [
        'New blog: "ChatGPT Memory Not Working" — pain-point troubleshooting guide targeting "chatgpt memory not working" keyword, FAQPage schema (6 questions)',
        'New blog: "Transfer ChatGPT to Claude" — migration guide targeting "transfer chatgpt to claude" keyword, FAQPage schema (6 questions)',
        'New blog: "Perplexity AI History" — blue ocean keyword targeting emerging Perplexity AI platform, FAQPage schema (6 questions)',
      ],
      improved: [
        'Blog registry expanded to 50 posts (44 English + 4 Chinese + 2 new)',
        'Sitemap expanded to 60 URLs',
        'New category: Migration (cross-platform conversation transfer)',
        'New category: Platforms (AI platform-specific guides)',
      ],
    },
  },
  {
    version: 'v0.16.0',
    date: '2026-04-29',
    title: 'Platform-Specific Memory Guides + Conversation Organization',
    tags: ['SEO', 'Content', 'Cross-Platform'],
    changes: {
      added: [
        'New blog: "Gemini Memory" — comprehensive guide to Google Gemini memory feature, targeting "gemini memory" / "google gemini memory" keywords, FAQPage schema (6 questions)',
        'New blog: "DeepSeek Memory" — targets "deepseek memory" / "does deepseek have memory" pain-point keywords, FAQPage schema (6 questions)',
        'New blog: "How to Organize AI Conversations" — cross-platform organization guide targeting "organize ai conversations" keywords, FAQPage schema (6 questions)',
      ],
      improved: [
        'All 4 AI platforms now have dedicated memory guides (ChatGPT, Claude, DeepSeek, Gemini)',
        'Sitemap expanded to 57 URLs',
        'Homepage Guides section updated with 3 new blog links',
      ],
    },
  },
  {
    version: 'v0.15.0',
    date: '2026-04-29',
    title: 'Full FAQPage Coverage + 2 New Comparison Blogs',
    tags: ['SEO', 'Content', 'Structured Data'],
    changes: {
      added: [
        'New blog: ChatGPT vs Claude Memory — deep comparison of memory features across platforms',
        'New blog: Best AI Memory Management Tools 2026 — category keyword targeting with 5-tool comparison',
      ],
      improved: [
        'FAQPage JSON-LD added to all 15 remaining blogs — now 100% coverage (42/42 blogs)',
        'Blogs updated: ai-conversation-disappeared, ai-duihua-daochu, best-ai-conversation-manager-2026, chatgpt-context-window-limit, chatgpt-conversation-history-search, chatgpt-conversation-too-long, chatgpt-jiyi-guanli, chatgpt-memory-full-fix, chatgpt-vs-claude, chatmemo-export, chat-memo-vs-ai-memory, export-claude, export-deepseek, export-gemini, mcp-server-guide',
        'Sitemap expanded to 54 URLs',
      ],
    },
  },
  {
    version: 'v0.14.0',
    date: '2026-04-29',
    title: 'FAQPage Schema Expansion — 60% Rich Snippet Coverage',
    tags: ['SEO', 'Structured Data'],
    changes: {
      improved: [
        'FAQPage JSON-LD added to 5 high-value blogs: chatgpt-history-extension, chatgpt-export-extension, chatgpt-memory-backup, chatgpt-memory-alternative, find-old-chatgpt',
        'Total blogs with FAQPage rich snippets: 25 out of 42 (60% coverage)',
        'Targeted highest-traffic keywords first: "chatgpt history extension" (trend avg 21), "chatgpt export extension" (avg 8)',
      ],
    },
  },
  {
    version: 'v0.13.0',
    date: '2026-04-29',
    title: 'Rich Snippets + New Keywords + FAQPage Schema Expansion',
    tags: ['SEO', 'Structured Data', 'Content'],
    changes: {
      added: [
        'New blog: \"ChatGPT History Viewer\" — targets \"chatgpt history viewer\", \"view chatgpt history\", \"browse chatgpt conversations\" keywords, FAQPage schema (6 questions)',
        'New blog: \"Claude Memory\" — targets \"claude memory\", \"claude ai memory\", \"claude vs chatgpt memory\" competitor keywords, FAQPage schema (6 questions)',
      ],
      improved: [
        'FAQPage JSON-LD structured data added to 5 high-value blogs: best-ai-memory-extension-2026, chatgpt-not-saving, chatgpt-memory-full, chatgpt-to-claude-migration, export-chatgpt',
        'Total blogs with FAQPage rich snippets: 18 out of 40 (45% coverage)',
        'Blog count now 40 posts (35 English + 5 Chinese)',
        'Sitemap updated to 52 URLs',
        'Homepage Guides section updated with 2 new blog links',
      ],
    },
  },
  {
    version: 'v0.12.0',
    date: '2026-04-29',
    title: 'SEO Expansion + Compare & FAQ Pages + Privacy Content',
    tags: ['SEO', 'Content', 'UX'],
    changes: {
      added: [
        'New blog: "How to Export ChatGPT to PDF" — high-intent export keyword, 4 methods compared, FAQPage schema (6 questions)',
        'New blog: "How to Use ChatGPT Memory" — tutorial keyword, step-by-step guide, FAQPage schema (6 questions)',
        'New blog: "ChatGPT Data Privacy" — timely privacy keyword, GDPR coverage, platform comparison, FAQPage schema (6 questions)',
        'Compare page (/compare) — competitive SEO targeting "ai memory comparison" keywords, feature comparison table, head-to-head sections',
        'FAQ page (/faq) — 20 questions across 5 categories, FAQPage JSON-LD schema for Google rich snippets, accordion UI',
      ],
      improved: [
        'Blog count now 38 posts (33 English + 5 Chinese)',
        'Sitemap updated to 50 URLs (45 existing + 3 blogs + 2 pages)',
        'Homepage Guides section updated with 3 new blog links',
        'Content coverage expanded: privacy, tutorial, PDF export, competitive comparison',
      ],
    },
  },
  {
    version: 'v0.11.0',
    date: '2026-04-29',
    title: 'SEO Expansion + About Page + Chinese Market',
    tags: ['SEO', 'Content', 'E-E-A-T'],
    changes: {
      added: [
        'New blog: "ChatGPT Memory Limit Explained" — pain-point keyword targeting users with full memory, FAQPage schema (6 questions)',
        'New blog: "How to Export All ChatGPT Data" — high-intent keyword with 4 methods, API code examples, FAQPage schema (6 questions)',
        'New blog: "ChatGPT数据备份与恢复完全指南" — Chinese market expansion, targeting data backup/export demand from DeepSeek/豆包 users',
        'About page (/about) — E-E-A-T signal for Google, SoftwareApplication JSON-LD schema, mission/principles/team content',
      ],
      improved: [
        'Blog count now 35 posts (31 English + 4 Chinese)',
        'Sitemap updated to 45 URLs (41 existing + 3 blogs + 1 about page)',
        'Chinese content library expanded from 3 to 4 posts',
      ],
    },
  },
  {
    version: 'v0.10.0',
    date: '2026-04-28',
    title: 'SEO Expansion + Security Hardening',
    tags: ['SEO', 'Security'],
    changes: {
      added: [
        'New blog: "How to Save ChatGPT Conversations" — high-intent save/backup keyword with FAQPage schema (6 questions)',
        'New blog: "Best AI Chat History Manager" — comparison keyword with top 5 tools ranked and FAQPage schema',
        'FAQPage structured data (JSON-LD) on new blog posts for Google rich snippets',
      ],
      improved: [
        'Blog count now 32 posts (29 English + 3 Chinese)',
        'Sitemap updated to 41 URLs',
        'Security: removed deprecated X-XSS-Protection header, eliminated duplicate security headers',
        'Security: enabled HSTS header, disabled x-powered-by',
      ],
    },
  },
  {
    version: 'v0.9.0',
    date: '2026-04-28',
    title: 'Unified Footer + SEO Comparison Blog',
    tags: ['UX', 'SEO', 'Infrastructure'],
    changes: {
      added: [
        'New blog: "Best AI Memory Extension in 2026" — top 5 comparison with feature table, targeting high-intent "best" keyword',
        'Footer component integrated into BlogLayout — all blog pages now have consistent 4-column footer navigation',
        'Footer component added to 6 standalone pages: Features, Privacy, Terms, Chrome Extension, MCP Docs, Pricing, Changelog',
      ],
      improved: [
        'Blog count now 31 posts (28 English + 3 Chinese)',
        'Sitemap updated to 39 URLs',
        'Internal link density improved — Footer provides consistent cross-linking across all pages',
        'All pages now share identical navigation structure (Product, Resources, Compare, Legal)',
      ],
    },
  },
  {
    version: 'v0.8.0',
    date: '2026-04-28',
    title: 'SEO Expansion + Comparison Content + Footer Component',
    tags: ['SEO', 'Content', 'UX'],
    changes: {
      added: [
        'New blog: "How to Search ChatGPT History" — targets high-intent search keyword',
        'New blog: "ChatGPT vs Claude vs DeepSeek: Complete Comparison 2026" — long-tail comparison keyword',
        'Shared Footer component (src/components/Footer.tsx) — 4-column navigation with Product, Resources, Compare, Legal sections',
        'Homepage guides section expanded with 2 new blog links',
      ],
      improved: [
        'Blog count now 30 posts (27 English + 3 Chinese)',
        'Sitemap updated to 38 URLs',
      ],
    },
  },
  {
    version: 'v0.7.0',
    date: '2026-04-28',
    title: 'Blog Architecture Refactor + ChatGPT Memory SEO',
    tags: ['SEO', 'Architecture', 'Content'],
    changes: {
      added: [
        'Centralized blog data registry (src/lib/blog-data.ts) — powers index, related posts, sitemap',
        'Shared BlogLayout component with Breadcrumbs JSON-LD and Related Posts',
        'New blog post: "ChatGPT Memory: Complete Guide" targeting high-volume keyword',
        'New blog post: "ChatGPT Memory Settings" — targets settings-related keywords',
        'New Chinese blog: "跨平台AI对话管理" — targets Chinese cross-platform management keyword',
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

      <Footer />
    </div>
  );
}
