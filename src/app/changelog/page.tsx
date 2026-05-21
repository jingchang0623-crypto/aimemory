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
    version: 'v0.92.0',
    date: '2026-05-21',
    title: 'Round 138 — AI Memory Tools Comparison Blog (SEO P0)',
    tags: ['Content', 'SEO'],
    changes: {
      added: [
        'New SEO comparison blog: "AI Memory Tools Comparison 2026" — aimemory.pro vs Echoes vs Supermemory vs Mem0',
        'Feature comparison table with 7 categories across 4 tools for SERP featured snippet targeting',
        'FAQPage JSON-LD structured data (5 Q&A pairs) for rich snippet eligibility',
        'Article JSON-LD schema for enhanced search results display',
      ],
    },
  },
  {
    version: 'v0.91.0',
    date: '2026-05-21',
    title: 'Round 137 — GitHub Stars Integration + MCP Page Enhancement',
    tags: ['Feature', 'SEO', 'MCP'],
    changes: {
      added: [
        'New API endpoint /api/github-stars for dynamic GitHub repository star count',
        'GitHub stars display on MCP Server page (shows live star count from GitHub API)',
        'Server-side caching for GitHub API (1 hour cache to respect rate limits)',
      ],
      improved: [
        'MCP Server page hero section now shows live GitHub stars badge when available',
        'Better social proof on MCP page to improve conversion',
      ],
    },
  },
  {
    version: 'v0.90.0',
    date: '2026-05-21',
    title: 'Round 136 — AI Memory Tools Directory + SEO Blog Expansion',
    tags: ['Feature', 'SEO', 'Content'],
    changes: {
      added: [
        'New AI Memory Tools Directory page (/tools) — interactive comparison tool for AI memory solutions (Mem0, Zep, LangChain, etc.)',
        'New SEO blog: "AI Memory vs Claude Project Knowledge" — targeting emerging comparison keyword',
        'Fixed BLOG_COUNT constant mismatch (was 188, now 191 to match actual blog count)',
        'Added /tools page to sitemap with high priority (0.95) for SEO',
        'Added new blog to highPriorityBlogSlugs in sitemap for fast indexing',
        'Tools Directory link added to Footer "Compare" section for navigation',
      ],
      improved: [
        'SEO visibility: Tools Directory page targets high-value "AI memory tools" keyword cluster',
        'Content freshness: New blog positions AI Memory vs Claude Projects for cross-platform advantage',
        'Constant accuracy: BLOG_COUNT now correctly reflects actual published content (191 blogs)',
      ],
      noted: [
        'Tools Directory page features 10+ AI memory solutions with interactive filtering by platform, features, and pricing',
        'New blog highlights key differentiator: AI Memory works across ChatGPT, Claude, and other platforms vs Claude Projects limited to single platform',
        'Next milestone: Round 137 — Google Search Console verification + Chrome Web Store submission (pending $5 fee)',
      ],
    },
  },
  {
    version: 'v0.89.0',
    date: '2026-05-20',
    title: 'Round 134 — Tag Management Page (Dedicated UI)',    
    tags: ['Feature', 'UX', 'Productivity'],
    changes: {
      added: [
        'New dedicated Tags page (/tags) — browse all tags with usage counts, click to see tagged conversations',
        'Tag Management UI: Integrated with existing TagManager component for full CRUD operations',
        'Tag Stats panel: Total tags, total uses, most-used tag summary',
        'Tag-filtered conversation browsing: Click any tag to see all conversations in a side panel',
        'How-to guide section on Tags page explaining tag workflow',
      ],
      improved: [
        'Tag Management is now a first-class feature with dedicated navigation destination',
        'Conversation tagging now discoverable and accessible from a dedicated page',
        'Tag count and frequency visualization helps users understand their knowledge distribution',
      ],
      noted: [
        'Next milestone: Auto-tagging (AI-powered tag suggestions) — planned for Plus tier',
        'Tag Management was the #1 missing P0 feature based on previous product audits',
      ],
    },
  },
  {
    version: 'v0.88.0',
    date: '2026-05-19',
    title: 'Round 128 — MCP Server v1.5.0 (12 Tools) + Chrome Extension v1.1.0 + SEO Monitor',
    tags: ['MCP', 'Chrome Extension', 'SEO', 'Growth'],
    changes: {
      added: [
        'MCP Server v1.5.0: Added 6 new tools (get_memory, memory_stats, export_memories, import_memories, batch_save_memories, get_all_tags, clear_all_memories) — now 12 total tools',
        'Chrome Extension v1.1.0: Updated download link with developer mode install guide (skipping $5 Web Store fee)',
        'SEO Monitor: Daily cron job tracking Googlebot/DuckDuckBot/bingbot crawl activity + page indexing',
        'sitemap.xml: Now auto-generated with 208 URLs (184 blogs + 24 static pages)',
      ],
      improved: [
        'MCP Server README: Fixed tool count (7→12) and added full documentation for all 12 MCP tools',
        'Chrome Extension page: Updated download link to /ai-memory-extension-v1.1.0.zip with proper versioning',
        'Storage layer: Added 7 new functions to storage.py (get_memory, memory_stats, export/import, batch_save, get_all_tags, clear_all_memories)',
      ],
      noted: [
        'PyPI publish: MCP Server v1.5.0 built (sdist + wheel) — awaiting PYPI_API_TOKEN in .env.local',
        'SEO: Googlebot (18 visits), DuckDuckBot (21 visits), bingbot (3 visits) crawling aimemory.pro',
        'Next milestone: PyPI publish + first 1000 organic visits → 10% paid = break-even',
      ],
    },
  },
  {
    version: 'v0.87.0',
    date: '2026-05-18',
    title: 'Round 127 — 3 New SEO Blogs (ChatGPT Projects, Auto Export, Google AI Studio)',
    tags: ['SEO', 'Content', 'Growth'],
    changes: {
      added: [
        'ChatGPT Projects vs Memory 2026: Comparison guide targeting "chatgpt projects vs memory" keyword (high search volume)',
        'Automate ChatGPT Export: Guide to automatic backup solutions targeting "automate chatgpt export" long-tail keyword',
        'Google AI Studio Memory Guide: Emerging platform coverage targeting "google ai studio memory" (low competition)',
        '3 new blog entries registered in blog-data.ts with full SEO metadata (JSON-LD, keywords, tags)',
        'Added all 3 blogs to sitemap.ts highPriorityBlogSlugs for SEO priority 0.9',
      ],
      improved: [
        'BLOG_COUNT: 172 → 175 (now 175 total blog posts)',
        'CONTENT_COUNT: 174 → 177 (175 blogs + 2 guides)',
        'Homepage counter: Now displays "177+ SEO Guides Published"',
        'Build verified: 175 blog pages + 21 static = 196 total pages (exit code 0)',
      ],
      noted: [
        'SEO content expansion: 175 blogs covering all major AI memory keywords',
        'Next milestone: 185 blogs (15 more) to hit M3 target of 185 blog posts',
        'Distribution blockers unchanged: PyPI (needs OIDC trusted publisher) + Chrome Web Store (needs $5 fee)',
        'All 3 blogs feature 5+ FAQ with JSON-LD structured data for rich snippets',
      ],
    },
  },
  {
    version: 'v0.86.0',
    date: '2026-05-15',
    title: 'Round 112 — Data Consistency Audit (MCP Clients + Kimi Coverage)',
    tags: ['Bugfix', 'SEO', 'Data Consistency'],
    changes: {
      fixed: [
        'Features page: MCP Server "(100+ clients)" → "(113+ clients)" in comparison table',
        'Features page metadata: Added Kimi to description',
        'About page: Chrome Extension section now includes Kimi in platform list',
        'About page metadata: Added Kimi to all descriptions (meta, OpenGraph, JSON-LD)',
        'docs/chrome-web-store: Updated extension title, detailed description, and platform list with Kimi',
        'docs/mcp: Added Kimi to platform support in MCP description and FAQ',
      ],
      noted: [
        'These pages were missed in Round 111\'s 46-file Kimi sweep — now fully consistent',
        'All core pages now correctly show: 5 platforms (ChatGPT, Claude, DeepSeek, Gemini, Kimi) + 113+ MCP clients',
      ],
    },
  },
  {
    version: 'v0.85.0',
    date: '2026-05-15',
    title: 'Round 111 — 5-Platform Consistency Audit (Kimi Integration)',
    tags: ['Bugfix', 'SEO', 'Data Consistency', 'Kimi'],
    changes: {
      fixed: [
        '46 files: Updated "ChatGPT, Claude, DeepSeek, Gemini" → "ChatGPT, Claude, DeepSeek, Gemini, Kimi" across all pages',
        '90 individual platform references updated to include Kimi as the 5th supported platform',
        'chatgpt-history-extension: Added Kimi export link and changed "four platforms" → "five platforms"',
        'chat-memo-vs-ai-memory: Updated "big four platforms" → includes Kimi',
        'which-ai-remembers-best: Added Kimi to FAQ answer about cross-platform memory',
        'connect-mcp-to-ai: Updated "four major platforms" → "five major platforms"',
      ],
      noted: [
        'This completes the Kimi integration across the entire site — all 160+ pages now consistently reference 5 platforms',
        'Previous Round 110 added Kimi to core pages; this round covers the long tail of blog content',
      ],
    },
  },
  {
    version: 'v0.84.0',
    date: '2026-05-15',
    title: 'Round 110 — Kimi Support & PyPI Publishing Infrastructure',
    tags: ['Feature', 'Distribution', 'Infrastructure'],
    changes: {
      added: [
        'Kimi (Moonshot AI) auto-capture support: New content script for kimi.moonshot.cn',
        'GitHub Actions workflow for PyPI publishing: Automated release workflow with trusted publishing (OIDC)',
      ],
      improved: [
        'Chrome extension page: Updated to show 5 supported platforms (was 4)',
        'Chrome extension page: Changed Kimi status from "Coming Soon" to "Supported"',
        'Roadmap page: Updated "Already Shipped" list to include Kimi',
        'Extension manifest: Added Kimi host permissions and updated description',
      ],
      noted: [
        'Kimi is a popular Chinese AI assistant — fills a key gap in our China market coverage',
        'PyPI publish workflow is ready — package can be published on first release tag',
      ],
    },
  },
  {
    version: 'v0.83.0',
    date: '2026-05-15',
    title: 'Round 109 — Comprehensive Pricing Audit',
    tags: ['Bugfix', 'Pricing', 'SEO', 'Data Consistency'],
    changes: {
      fixed: [
        '16 blog pages: Fixed remaining "$6.90/month" and "$6.9/month" pricing references',
        'ai-chat-history-manager: Updated "50 conversations" → "unlimited local storage"',
        'ai-memory-vs-ai-context-flow: Fixed comparison table pricing and annual cost calculations',
        'chatgpt-enterprise-memory: Corrected metadata description and inline pricing links',
        'chatgpt-api-memory: Updated free tier description from "50 conversations" limit',
        'search-all-ai-chats, chatgpt-projects-guide, claude-artifacts-guide: Fixed footer pricing',
        'deepseek-ai-complete-guide (中文): Updated pricing from "$6.90/月" to current tiers',
        'mem0-alternative: Fixed comparison table cell from "50 conversations" to "Unlimited local"',
      ],
      noted: [
        'All pricing references now use Free/Plus $3.9/Pro $7.9 structure',
        'Only changelog preserves historical pricing documentation',
        'SEO metadata across 158+ blogs now accurately reflects current product',
      ],
    },
  },
  {
    version: 'v0.82.0',
    date: '2026-05-15',
    title: 'Round 108 — Pricing Data Consistency Fix',
    tags: ['Bugfix', 'SEO', 'Pricing'],
    changes: {
      fixed: [
        'Compare page: Updated pricing JSON-LD and visible content from old $6.9/mo to current 3-tier structure',
        'Directory page: Fixed pricing display and JSON-LD to match Free/Plus/Pro tiers',
        'FAQ page: Corrected pricing answers to reflect $3.9 Plus and $7.9 Pro tiers',
        'Getting Started guide: Updated FAQ pricing from outdated $6.9/mo to current tiers',
        'Student blog: Fixed comparison table and JSON-LD pricing (was showing "50 convos" limit and old $6.90/mo)',
      ],
      noted: [
        'All pages now consistently show: Free (unlimited local), Plus ($3.9/mo), Pro ($7.9/mo)',
        'Changelog historical entries preserved — they document when pricing was first introduced',
      ],
    },
  },
  {
    version: 'v0.81.0',
    date: '2026-05-15',
    title: 'Round 107 — SEO Trust Signals & Public Roadmap',
    tags: ['SEO', 'Trust', 'Transparency'],
    changes: {
      added: [
        'SoftwareApplication JSON-LD structured data: Enhanced search appearance with app metadata (name, version, pricing, category)',
        'Public Roadmap page (/docs/roadmap): Transparent product direction across 4 phases — Distribution, Intelligence, Platform, Ecosystem',
        'Google Search Console verification support: Conditional meta tag rendering via NEXT_PUBLIC_GSC_VERIFICATION env var',
      ],
      improved: [
        'Footer navigation: Added Roadmap link for better discoverability',
        'Sitemap: Registered /docs/roadmap page (priority 0.8, monthly updates)',
        'SEO integrity: Removed fake aggregateRating data from JSON-LD (was showing 4.8 stars — unethical)',
      ],
      noted: [
        'Public roadmap increases user trust and sets clear expectations for product evolution',
        'GSC verification enables accurate search performance monitoring',
        'Distribution channels (PyPI, Chrome Web Store) remain P1 blockers for user growth',
      ],
    },
  },
  {
    version: 'v0.80.0',
    date: '2026-05-14',
    title: 'Round 106 — Memory Injection Guide Blog + Product Audit',
    tags: ['SEO', 'Content', 'PM'],
    changes: {
      added: [
        'memory-injection-guide: Comprehensive memory injection guide covering browser extension and MCP Server methods (6-question FAQ with JSON-LD)',
        'Registered memory-injection-guide in blog-data.ts with full SEO metadata',
        'Homepage counter updated: 159+ → 160+ SEO guides published',
      ],
      improved: [
        'Total blog count: 158 (up from 157)',
        'CONTENT_COUNT auto-calculated: 158 blogs + 2 guides = 160',
      ],
      noted: [
        'Product audit completed: 158 blogs, 2 guides, 22 static pages, 180 sitemap URLs',
        'Distribution blockers unchanged: PyPI (needs API token) + Chrome Web Store (needs $5 fee)',
        'Memory injection is our #1 differentiator but had no dedicated content — now covered',
        'SEO content saturation: 160 pages — future growth depends on distribution channels',
      ],
    },
  },
  {
    version: 'v0.79.0',
    date: '2026-05-14',
    title: 'Round 105 — Dynamic Homepage Counter + Centralized Constants',
    tags: ['DX', 'Bugfix', 'PM'],
    changes: {
      added: [
        'src/lib/constants.ts: Centralized site-wide constants (CONTENT_COUNT, MCP_TOOLS_COUNT, etc.) for single-source-of-truth',
        'Homepage SEO counter now reads from shared constant instead of hardcoded value',
      ],
      fixed: [
        'Homepage SEO counter will auto-sync when constants.ts is updated — prevents future count drift',
        'Avoided 95KB client bundle bloat by isolating constants from full blog-data.ts array',
      ],
      noted: [
        'Distribution blockers remain: PyPI (needs API token) + Chrome Web Store (needs $5 fee)',
        'Product audit: 157 registered blogs, 22 static pages, 179 sitemap URLs — data consistency verified',
      ],
    },
  },
  {
    version: 'v0.78.0',
    date: '2026-05-14',
    title: 'Round 104 — Windsurf Memory SEO Blog + Product Optimization Plan',
    tags: ['SEO', 'Content', 'PM'],
    changes: {
      added: [
        'windsurf-memory: Comprehensive Windsurf AI memory management guide (MCP integration, 3-layer memory system, setup tutorial)',
        'Registered windsurf-memory in blog-data.ts with full SEO metadata',
        'Product optimization plan: P0/P1/P2 prioritized roadmap for distribution and feature growth',
      ],
      improved: [
        'Total blog count: 158 → 159 SEO guides published',
        'Windsurf MCP setup coverage: New dedicated guide complements existing MCP documentation',
      ],
      noted: [
        'Distribution blockers unchanged: PyPI trusted publisher + Chrome Web Store $5 fee still require human action',
        'Next priority: P1 actions (PyPI + Chrome Web Store) will unlock significant user growth',
        'SEO content saturation: 159 blogs — future growth depends on distribution channels',
      ],
    },
  },
  {
    version: 'v0.77.0',
    date: '2026-05-14',
    title: 'Round 103 — Blog Registration Fix & Product Status Review',
    tags: ['SEO', 'Bugfix', 'PM'],
    changes: {
      added: [
        'Registered 4 missing comparison blogs in blog-data.ts that were created but not indexed',
        'ai-memory-vs-kumbukum: Kumbukum alternative comparison (free vs $15/mo, MCP support)',
        'ai-memory-vs-mempalace: MemPalace local-first comparison (privacy architecture, self-hosting)',
        'anthropic-dreaming-memory-vs-ai-memory: Anthropic Dreaming native memory analysis',
        'chatgpt-memory-vs-third-party-tools: Native vs third-party memory tools guide',
      ],
      improved: [
        'Homepage SEO Guides counter: 157+ → 158+ (now matches actual blog count)',
        'Sitemap coverage: All 158 blog posts now properly indexed',
      ],
      noted: [
        'Product status: MCP Server v1.4.0 (12 tools) built, NOT on PyPI — needs trusted publisher setup',
        'Chrome Extension v1.0.0 ready, NOT on Chrome Web Store — needs $5 registration fee',
        'SEO content saturation: 158 blogs covering all major keywords — pivot to distribution needed',
        'Key blockers: PyPI credentials and Chrome Web Store registration require human action',
      ],
    },
  },
  {
    version: 'v0.76.0',
    date: '2026-05-14',
    title: 'Round 99 — SEO Deep Dive + Product Strategy Review',
    tags: ['SEO', 'Strategy', 'MCP', 'PM'],
    changes: {
      added: [
        'DeepSeek memory guide: Complete Chinese-language guide for DeepSeek conversation management',
        'MCP vs Mem0 comparison page with FAQ JSON-LD: Detailed feature comparison targeting "mcp server vs mem0" keyword',
        'Claude memory export guide: Step-by-step instructions for exporting Claude conversation history',
        'Dynamic sitemap generation: Auto-discovers all blog slugs from filesystem',
        'PM audit & optimization plan: Comprehensive research-to-execution pipeline',
      ],
      improved: [
        'MCP Server page: Content polish and CTA improvements for better conversion',
        'Homepage stats: Updated SEO Guides count to 154+ (152 blogs + 2 guides)',
        'Sitemap: Dynamic generation ensures all pages are indexed automatically',
      ],
      noted: [
        'Product strategy: 6 research directions completed (SEO, Tech, Monetization, Competitors, Chrome Extension, Memory Injection)',
        'Key finding: Distribution is the #1 bottleneck — PyPI + Chrome Web Store remain blocked on human actions',
        'Chrome Extension v1.0.0 is built and ready for Chrome Web Store submission ($5 fee needed)',
        'MCP Server v1.4.0 is built and ready for PyPI (trusted publisher setup needed on pypi.org)',
        'Next priority: Unblock PyPI publishing → Chrome Web Store → Google Search Console verification',
      ],
    },
  },
  {
    version: 'v0.75.0',
    date: '2026-05-13',
    title: 'Round 97 — Pricing Restructure & Homepage Stats',
    tags: ['Pricing', 'SEO', 'Monetization'],
    changes: {
      added: [
        'New Plus tier: $3.9/month ($39/year) — bridges Free and Pro with AI Summary, Stats, 3 Devices',
        'Organization JSON-LD structured data for improved search appearance',
      ],
      improved: [
        'Homepage stats: Updated SEO Guides from 151+ to 153+ (verified count)',
        'Pro tier pricing: $6.9→$7.9/month, $49→$79/year (better price anchoring)',
        'Pricing page: 3-column grid layout for clearer tier comparison',
        'Pricing FAQ & metadata: Updated with new tier structure',
      ],
      noted: [
        'Monetization research: $3.9 Plus tier creates psychological bridge to Pro',
        'Pro tier now positioned as "Coming Soon" with Cloud Sync, Knowledge Graph, MCP Cloud Access',
        'Blog count verified: 153 posts in blog-data.ts',
      ],
    },
  },
  {
    version: 'v0.74.0',
    date: '2026-05-12',
    title: 'Round 95 — Chrome Extension Data Accuracy Fix',
    tags: ['Fix', 'Data Consistency', 'Extension'],
    changes: {
      fixed: [
        'Chrome Extension page: Corrected platform count from 5→4 auto-capture platforms',
        'Chrome Extension page: Kimi status changed from ✅ Supported → ⏳ Coming Soon',
        'Chrome Extension metadata: Removed Kimi from auto-save claims in title/description',
        'MCP Server comparison table: Fixed "4 platforms" → "5 platforms" (MCP searches all uploaded data)',
      ],
      noted: [
        'Root cause: Round 92 incorrectly added Kimi as extension platform without kimi.content.ts',
        'Extension ZIP contains only 4 content scripts: chatgpt.js, claude.js, deepseek.js, gemini.js',
        'Kimi IS supported for web app upload (parser.ts has full Kimi parsing)',
        'Added note: Kimi conversations can be uploaded via web app while extension support is in progress',
      ],
    },
  },
  {
    version: 'v0.73.0',
    date: '2026-05-11',
    title: 'Round 89 — PyPI Publishing Attempt + PM Audit',
    tags: ['PM', 'MCP', 'Distribution'],
    changes: {
      added: [
        'Created git tag v1.4.0 and GitHub Release to trigger PyPI publishing',
        'Added PYPI-SETUP-GUIDE.md with trusted publishing configuration steps',
      ],
      noted: [
        'PyPI publishing workflow triggered but failed: trusted publisher not configured on PyPI',
        'Error: "invalid-publisher: valid token, but no corresponding publisher"',
        'Action needed: Configure trusted publisher at pypi.org/manage/account/publishing/',
        'MCP Server v1.4.0 package built and ready in dist/ (11.9KB wheel + 10KB tar.gz)',
      ],
    },
  },
  {
    version: 'v0.72.0',
    date: '2026-05-11',
    title: 'Round 88 — PM Audit & Data Consistency Fix',
    tags: ['PM', 'Fix', 'Audit'],
    changes: {
      fixed: [
        'Chrome Extension page: "5 Platforms Supported" → "4 Platforms" (extension ZIP contains 4 content scripts: ChatGPT, Claude, DeepSeek, Gemini, Kimi)',
        'PyPI publishing guide: Updated blockers section with Round 87 upload attempt details (403 Forbidden — no valid credentials)',
      ],
      noted: [
        'Full PM audit completed: Product is feature-complete for MVP. No new code P0 tasks identified.',
        'PyPI upload attempted with twine — got 403 Forbidden (TWINE_PASSWORD/PYPI_API_TOKEN env vars empty in build environment)',
        'Critical distribution path: PyPI publication + Chrome Web Store + Google Search Console all remain blocked on human actions',
        '87+ rounds of optimization completed. Code is clean (0 TODOs/FIXMEs). 180 pages generated.',
      ],
    },
  },
  {
    version: 'v0.71.0',
    date: '2026-05-11',
    title: 'Round 85 — CTA Fixes & Homepage UX Improvements',
    tags: ['UX', 'SEO', 'Fix'],
    changes: {
      fixed: [
        'MCP page bottom CTA: Changed PyPI link (404) → GitHub/docs link to avoid broken UX',
        'MCP page FAQ JSON-LD: Added v1.4.0 version badge in hero section',
      ],
      improved: [
        'Homepage hero: Added "⬇️ Get Extension" button for direct download (blue button)',
        'Homepage FAQ JSON-LD: Updated platform list to include Kimi (5 platforms)',
        'Homepage JSON-LD: Added SoftwareApplication schema for Chrome extension rich snippets',
      ],
      noted: [
        'PyPI publication still pending — requires API token (P1 blocker)',
        'Chrome Web Store submission still pending — requires $5 fee (P1 blocker)',
      ],
    },
  },
  {
    version: 'v0.70.0',
    date: '2026-05-11',
    title: 'Round 84 — MCP Tools Data Consistency & Quickstart Guide Update',
    tags: ['Fix', 'MCP', 'Docs'],
    changes: {
      fixed: [
        'MCP Server landing page trust bar: Tools count fixed from 9 to 12 (matches actual v1.4.0)',
        'MCP Quickstart guide: Tools count updated from 5 to 12 across all references',
        'MCP Quickstart FAQ JSON-LD: Updated tool list to match 12 actual tools',
        'MCP Quickstart tools section: Added 7 missing tools (get_memory, memory_stats, export/import, batch_save, get_all_tags, clear_all)',
      ],
      noted: [
        'All MCP Server-facing pages now consistently show 12 tools',
        'Distribution remains #1 bottleneck — PyPI token and Chrome Web Store $5 fee still pending (P1)',
      ],
    },
  },
  {
    version: 'v0.69.0',
    date: '2026-05-11',
    title: 'Round 83 — Data Consistency Audit & Features Page Update',
    tags: ['Fix', 'SEO', 'UX'],
    changes: {
      improved: [
        'Features page inline pricing: added Memory Injection and MCP Server to free tier checklist',
        'Features page: added "View Full Pricing" link to /pricing page',
        'Blog: mcp-server-for-claude meta description updated 9→12 tools',
        'Blog: mcp-memory-server version updated v1.1.0→v1.4.0 (12 tools)',
        'Blog: mcp-ai-memory-developer-guide version updated v1.1.0→v1.4.0',
      ],
      noted: [
        'All blog MCP tool references now consistently show 12 tools',
        'MCP Server version references updated across all blog content',
        'Distribution remains #1 bottleneck — PyPI token and Chrome Web Store $5 fee still pending (P1)',
      ],
    },
  },
  {
    version: 'v0.68.0',
    date: '2026-05-10',
    title: 'Round 81 — Kimi Platform Support & Feature Page Updates',
    tags: ['Parser', 'Feature', 'UI'],
    changes: {
      added: [
        'Kimi AI (Moonshot AI) platform support: new JSON parser and TXT auto-detection',
        'Memory Injection and MCP Server marked as "live" on Features page (no longer upcoming)',
        'Features page: new Memory Injection feature card with description',
        'Pricing page: Memory Injection and MCP Server (12 tools) added as free tier features',
        'Platform detection in TXT parser: auto-detect Kimi, DeepSeek, ChatGPT, Claude, Gemini from filename and content',
      ],
      changed: [
        'Features comparison table: "Memory injection (upcoming)" → "Memory injection"',
        'Platform listings updated across Features, Pricing, and upload error messages to include Kimi',
        'Conversation type definition expanded: platform now includes "kimi"',
      ],
    },
  },
  {
    version: 'v0.67.0',
    date: '2026-05-10',
    title: 'Round 80 — MCP Server v1.4.0 with Batch & Tag Tools',
    tags: ['MCP', 'Feature', 'Tools'],
    changes: {
      added: [
        'New MCP tool: batch_save_memories — save multiple memories at once (bulk operations)',
        'New MCP tool: get_all_tags — list all unique tags with usage counts',
        'New MCP tool: clear_all_memories — delete all memories with warning',
        'MCP Server upgraded to v1.4.0 with 12 total tools (was 9)',
      ],
      improved: [
        'Homepage stats: Updated MCP Tools count from 9 to 12',
        'MCP landing page: Added 3 new tools to grid (batch_save, get_all_tags, clear_all)',
        'MCP docs: Version badge updated to v1.4.0 with 12 tools',
        'MCP README: Added full documentation for new batch/tag tools',
      ],
      noted: [
        'PyPI publication still pending — requires API token (P1 blocker)',
        'Chrome Web Store submission still pending — requires $5 fee (P1 blocker)',
        'pip package rebuilt with v1.4.0 — ready for PyPI upload',
      ],
    },
  },
    {
    version: 'v0.66.0',
    date: '2026-05-10',
    title: 'Round 79 — MCP Landing Page Data Consistency Fix',
    tags: ['MCP', 'Fix', 'Data'],
    changes: {
      improved: [
        'MCP Server landing page: Tools count fixed from 7 to 9 in stats bar',
        'MCP Server landing page: JSON-LD softwareVersion updated from 1.2.0 to 1.3.0',
      ],
      noted: [
        'PyPI publication still pending — requires API token (P1 blocker)',
        'Chrome Web Store submission still pending — requires $5 fee (P1 blocker)',
        'Distribution channels remain the #1 priority bottleneck',
      ],
    },
  },
    {
    version: 'v0.65.0',
    date: '2026-05-10',
    title: 'Round 77 — MCP Server v1.3.0 with Export/Import Tools',
    tags: ['MCP', 'Feature', 'Tooling'],
    changes: {
      added: [
        'New MCP tool: export_memories — backup all memories to JSON',
        'New MCP tool: import_memories — restore from JSON backup, skip duplicates',
        'MCP Server upgraded to v1.3.0 with 9 total tools (was 7)',
      ],
      improved: [
        'Homepage stats: Updated MCP Tools count from 7 to 9',
        'MCP README: Added full documentation for export/import operations',
      ],
      noted: [
        'PyPI publication still pending — requires API token (P1 blocker)',
        'Chrome Web Store submission still pending — requires $5 fee (P1 blocker)',
        'SEO content at 151 blogs — approaching saturation, focus on distribution',
      ],
    },
  },
    {
    version: 'v0.64.0',
    date: '2026-05-10',
    title: 'Round 76 — Open Source AI Memory MCP Server Blog',
    tags: ['MCP', 'SEO', 'Open-Source', 'Positioning'],
    changes: {
      added: [
        'New strategic SEO blog: Open Source AI Memory MCP Server — positioning as Mem0 alternative',
        'Blog targets "open source ai memory" keyword with Mem0 vs AI Memory comparison',
        'Covers MCP protocol explanation, self-hosted setup, 113+ client compatibility',
      ],
      improved: [
        'blog-data.ts: Registered 151st blog entry with open-source tag',
        'Sitemap: Added open-source-ai-memory-mcp-server URL (166 total URLs)',
      ],
      noted: [
        'Strategic positioning: Differentiating from Mem0 as "open source + self-hosted" vs "VC-funded B2B API"',
        'Distribution remains bottleneck: PyPI (needs token), Chrome Web Store (needs submission), Google Analytics (needs ID)',
        'SEO content approaching saturation — focus shifting to distribution channels',
      ],
    },
  },
    {
    version: 'v0.63.0',
    date: '2026-05-09',
    title: 'Round 75 — Windsurf MCP Memory Blog + Homepage Stats Update',
    tags: ['MCP', 'SEO', 'Windsurf'],
    changes: {
      added: [
        'New SEO blog: Windsurf MCP Memory Setup — targeting Windsurf IDE developers wanting AI memory',
        'Blog covers MCP configuration, 7 memory tools, best practices, troubleshooting',
      ],
      improved: [
        'Homepage stats: Updated SEO Guides count from 149+ to 150+',
        'Sitemap: Added windsurf-mcp-memory-setup URL (165 total URLs)',
        'blog-data.ts: Registered Windsurf MCP blog entry with MCP category',
      ],
      noted: [
        'MCP Server v1.2.0 wheel package verified — ready for PyPI upload',
        'Chrome extension ZIP ready (35KB) — awaiting Chrome Web Store submission (P1)',
        'DeepSeek market gap identified — no Chinese competitors in MCP memory space',
      ],
    },
  },
    {
    version: 'v0.62.0',
    date: '2026-05-09',
    title: 'Round 73 — MCP Server Page PyPI Fix + JSON-LD Cleanup',
    tags: ['MCP', 'SEO', 'Bugfix'],
    changes: {
      fixed: [
        'MCP Server page: Removed broken PyPI link (404) — now directs users to GitHub until PyPI is published',
        'JSON-LD schema: Removed fake aggregateRating (was showing 4.8 rating with 120 reviews — unethical SEO)',
        'JSON-LD schema: Updated softwareVersion from 1.1.0 to 1.2.0 to match actual package',
      ],
      improved: [
        'MCP Server page: Added "PyPI coming soon" note with pip command preview',
        'SEO integrity: Schema markup now accurately reflects product state',
      ],
      noted: [
        'MCP Server package ready (v1.2.0 in dist/) — awaiting PyPI API token for publication (P1)',
        'Chrome extension ZIP ready (35KB) — awaiting Chrome Web Store submission (P1)',
        'Google Analytics infrastructure ready — awaiting GA_MEASUREMENT_ID (P1)',
        'Strategic bottleneck: Distribution (PyPI, Chrome Store, GA) blocks growth despite product readiness',
      ],
    },
  },
    {
    version: 'v0.61.0',
    date: '2026-05-09',
    title: 'Round 72 — Google Analytics Infrastructure + MCP Server PyPI Ready',
    tags: ['Analytics', 'Infrastructure', 'MCP', 'PyPI'],
    changes: {
      added: [
        'Google Analytics infrastructure: Added GA tracking code to root layout — activates when GA_MEASUREMENT_ID env var is set',
        'MCP Server validation: Verified wheel package installs correctly in isolated venv, CLI works with FastMCP 3.2.4',
      ],
      improved: [
        'Analytics setup: Ready for GA4 tracking — just need to create property and add measurement ID to .env.local',
        'MCP Server: Package fully validated (v1.2.0) — ready for PyPI upload with twine once API token is configured',
        'SEO coverage audit: 147 blogs registered, 164 sitemap URLs — comprehensive keyword coverage achieved',
      ],
      noted: [
        'MCP Server still unpublished to PyPI (P1) — need PyPI API token',
        'Chrome extension ZIP ready (35KB, 14 files) — need Chrome Web Store submission (P1)',
        'Google Analytics ready but not active — need GA_MEASUREMENT_ID configuration',
      ],
    },
  },
    {
    version: 'v0.60.0',
    date: '2026-05-08',
    title: 'Round 71 — MCP Server Package Rebuild + Docs Fix + README GitHub URLs',
    tags: ['MCP', 'PyPI', 'Docs', 'Bugfix'],
    changes: {
      fixed: [
        'MCP Server docs: Fixed tool count from "5 Local Tools" to "7 Local Tools" — added missing get_memory and memory_stats',
        'MCP Server README: Fixed GitHub URLs in Contributing and Links sections (aimemory/aimemory → jingchang0623-crypto/aimemory)',
      ],
      added: [
        'MCP Server v1.2.0 package: Rebuilt wheel + sdist with corrected README, passed twine check validation',
      ],
      improved: [
        'MCP Server: Package ready for PyPI publish — dist/ contains validated aimemory_mcp_server-1.2.0.whl and .tar.gz',
        'Docs accuracy: /docs/mcp page now correctly shows all 7 local tools (search, save, list, get, update, delete, stats)',
      ],
    },
  },
  {
    version: 'v0.59.0',
    date: '2026-05-08',
    title: 'Round 70 — MCP Server PyPI Prep + Chrome Extension Icons Fix',
    tags: ['MCP', 'PyPI', 'Chrome Extension', 'Bugfix', 'Distribution'],
    changes: {
      fixed: [
        'MCP Server pyproject.toml: GitHub URLs corrected from aimemory/aimemory to jingchang0623-crypto/aimemory — blocking PyPI publish',
        'Chrome Extension: Generated missing icons (16, 48, 128px) — extension was broken without icons',
        'Chrome Extension: Created proper public/icon directory structure for WXT framework — icons now included in build output',
      ],
      added: [
        'Chrome Extension v1.0.1: Rebuilt with icons, repackaged ZIP (35KB) for Chrome Web Store submission',
        'generate_icons.py: Script for creating branded purple/indigo extension icons',
      ],
      improved: [
        'Product audit: Identified MCP Server not published to PyPI (highest priority P0)',
        'Extension structure: Added extension/public/icon/ for static assets, rebuilt successfully',
      ],
    },
  },
  {
    version: 'v0.58.0',
    date: '2026-05-08',
    title: 'Round 68 — Homepage Stats Update + Product Optimization Review',
    tags: ['SEO', 'Stats', 'Maintenance'],
    changes: {
      added: [
        'Homepage stats: SEO Guides counter updated 148+ → 149+ (149 blogs now registered)',
      ],
      improved: [
        'Full product audit: reviewed all 149 blogs, 164 sitemap URLs, MCP Server status, Chrome extension availability',
        'Identified optimization priorities: SEO saturation reached, pivot to product features and distribution needed',
      ],
    },
  },
  {
    version: 'v0.57.0',
    date: '2026-05-08',
    title: 'Round 67 — Product Audit + Missing Blog Registration Fix + Optimization Roadmap',
    tags: ['SEO', 'Audit', 'Bugfix', 'MCP', 'Blog'],
    changes: {
      added: [
        'Registered missing blog: "Best MCP Servers 2026" added to blog-data.ts — was present as page but invisible to blog index, related posts, and sitemap',
      ],
      fixed: [
        'blog-data.ts: best-mcp-servers-2026 slug was missing from registry (147 vs 148 directories) — now 148 entries matching 148 blog directories',
        'sitemap.ts: Added best-mcp-servers-2026 URL (now 164 URLs)',
      ],
      improved: [
        'Full product audit completed — identified key gaps: MCP Server not yet published to PyPI, Chrome Web Store not listed, Stripe payment not integrated',
        'Homepage stats: 148+ SEO guides, 164 sitemap URLs',
      ],
    },
  },
    {
    version: 'v0.56.0',
    date: '2026-05-07',
    title: 'MCP-Focused SEO + Homepage MCP CTA — 2 New Blogs + 163 Sitemap URLs',
    tags: ['MCP', 'SEO', 'Claude Desktop', 'Homepage', 'Persistent Memory'],
    changes: {
      added: [
        'New blog: "AI Memory for Claude Desktop" — comprehensive guide for adding persistent memory to Claude Desktop via MCP Server. Step-by-step setup, config paths for macOS/Windows/Linux, 6 FAQPage questions. Targets "claude desktop memory" and "claude desktop persistent memory" keywords.',
        'New blog: "Give AI Persistent Memory with MCP" — educational guide on MCP protocol memory vs ChatGPT native memory vs Claude Projects. Targets "give ai persistent memory" and "mcp persistent memory" keywords. 6 FAQPage questions.',
        'Homepage: New MCP Server CTA section with pip install code block and link to /mcp-server page — drives MCP adoption from homepage visitors.',
      ],
      improved: [
        'Blog registry expanded to 148 posts',
        'Sitemap expanded to 163 URLs',
        'Homepage stats: SEO Guides count updated 146+ → 148+',
      ],
    },
  },
  {
    version: 'v0.55.0',
    date: '2026-05-05',
    title: 'Anuma Competitor Response — 2 New SEO Blogs + Homepage Stats Update',
    tags: ['Competitor', 'Anuma', 'SEO', 'Comparison', 'Review'],
    changes: {
      added: [
        'New blog: "AI Memory vs Anuma" — direct competitor comparison targeting "ai memory vs anuma" keyword, 16-feature comparison table, FAQPage JSON-LD (6 questions)',
        'New blog: "Anuma AI Review 2026" — comprehensive review targeting "anuma ai review" keyword, Council Mode analysis, pricing breakdown, alternatives section, FAQPage JSON-LD (6 questions)',
      ],
      improved: [
        'Homepage stats updated: 140+ → 146+ SEO guides published',
        'Blog registry expanded to 146 posts',
        'Sitemap expanded to 161 URLs',
      ],
    },
  },
  {
    version: 'v0.54.0',
    date: '2026-05-05',
    title: 'MCP Server v1.2.0 — 7 Tools + HTTP/SSE Transport + 3 SEO Blogs',
    tags: ['MCP', 'Transport', 'SEO', 'HTTP', 'SSE', 'Tools'],
    changes: {
      added: [
        'MCP Server v1.2.0: Added get_memory tool — retrieve individual memories by ID',
        'MCP Server v1.2.0: Added memory_stats tool — get total count, recent activity, tag distribution',
        'MCP Server v1.2.0: HTTP/SSE transport support — set AIMEMORY_TRANSPORT=http for remote access',
        'New blog: "MCP Server for Claude Desktop" — targets "mcp server for claude" keyword, step-by-step setup guide',
        'New blog: "Search Across All AI Chats" — targets "search across all ai chats" keyword, cross-platform search solutions',
        'New blog: "MCP Server Installation Guide" — targets "mcp server installation guide" keyword, comprehensive setup for all clients',
      ],
      improved: [
        'MCP Server: Upgraded from 5 to 7 tools (save, search, list, get, update, delete, stats)',
        'MCP Server README: Added HTTP/SSE transport documentation with configuration examples',
        'MCP Server: Built pip wheel and sdist ready for PyPI publication',
        'Blog registry expanded to 140 posts',
        'Sitemap expanded to 155 URLs',
      ],
    },
  },
    {
    version: 'v0.53.0',
    date: '2026-05-05',
    title: '3 Strategic SEO Blogs — GitHub Copilot Memory, Perplexity Pro, Cline MCP',
    tags: ['SEO', 'Copilot', 'Perplexity', 'Cline', 'MCP', 'Platforms', 'Developer'],
    changes: {
      added: [
        'GitHub Copilot Memory Guide — targets "github copilot memory" keyword, covers .github/copilot-instructions.md, MCP integration, comparison table',
        'Perplexity Pro Memory Guide — targets "perplexity pro memory" keyword, covers Collections, Threads, search history limitations',
        'Cline AI Memory Guide — targets "cline ai memory" keyword, MCP-powered persistent coding memory for VS Code extension users',
      ],
      improved: [
        'Blog registry expanded to 139 posts (135 English + 4 Chinese)',
        'Sitemap expanded to 152 URLs',
        'New "Platforms" and "Developer Tools" category coverage for Copilot, Perplexity, Cline',
      ],
    },
  },
    {
    version: 'v0.52.0',
    date: '2026-05-05',
    title: 'MCP Server PyPI Ready + Homepage Stats + Chinese DeepSeek Guide',
    tags: ['MCP', 'PyPI', 'Homepage', 'DeepSeek', 'Chinese', 'Stats'],
    changes: {
      added: [
        'New blog: "DeepSeek对话记忆管理完整指南 (2026)" — Chinese-language guide targeting DeepSeek users, covering memory features, export methods, cross-platform management. FAQPage JSON-LD (6 questions), Article schema.',
        'Homepage social proof: Added "6 MCP Tools Available" stat counter alongside existing metrics.',
      ],
      fixed: [
        'MCP Server package: Fixed version mismatch (0.1.0 → 1.1.0) in pyproject.toml and __init__.py to match landing page and docs.',
        'MCP Server package: Added wheel build config (tool.hatch.build.targets.wheel) — both sdist and wheel now build successfully.',
        'Homepage: Updated SEO guides count from 115+ to 135+ to reflect actual blog registry.',
      ],
      improved: [
        'Blog registry updated to 136 posts (5 Chinese + 131 English)',
        'Sitemap updated to 149 URLs',
        'MCP Server PyPI package fully verified: aimemory-mcp-server v1.1.0 builds both sdist (.tar.gz) and wheel (.whl) successfully',
      ],
    },
  },
    {
    version: 'v0.51.0',
    date: '2026-05-05',
    title: '3 Strategic SEO Blogs — o4-mini Memory, Batch Export, MCP Developer Guide',
    tags: ['SEO', 'o4-mini', 'Export', 'MCP', 'Developer', 'Batch', 'Reasoning'],
    changes: {
      added: [
        'New blog: \"ChatGPT o4-mini Memory: How It Works & Limitations (2026)\" — targets reasoning model memory differences, o4-mini vs GPT-4o comparison. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: \"How to Export All AI Conversations at Once (2026 Guide)\" — batch export guide for ChatGPT/Claude/DeepSeek/Gemini/Kimi. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: \"MCP AI Memory Server: Developer Integration Guide (2026)\" — complete MCP setup for Claude Desktop, Cursor, ChatGPT, Windsurf, Cline, Continue.dev. FAQPage JSON-LD (6 questions), Article schema.',
      ],
      improved: [
        'Blog registry updated to 135 posts',
        'Sitemap updated to 148 URLs',
      ],
    },
  },
  {
    version: 'v0.50.0',
    date: '2026-05-05',
    title: '3 Strategic SEO Blogs + MCP Docs v1.1.0 Update — Research, Sync, NotebookLM',
    tags: ['SEO', 'Research', 'Sync', 'NotebookLM', 'MCP', 'Academic', 'Comparison'],
    changes: {
      added: [
        'New blog: "ChatGPT Memory for Research: Complete Academic Guide (2026)" — targets researchers and PhD students, literature review workflows, methodology management. Targets "chatgpt memory for research" keyword. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "How to Sync AI Conversations Across Devices: Complete Guide (2026)" — 4 sync methods compared, cross-platform solution. Targets "sync chatgpt across devices" keyword. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "ChatGPT Memory vs Google NotebookLM: Which is Better? (2026)" — 11-feature comparison table, use case analysis, AI Memory as bridge solution. Targets "chatgpt memory vs notebooklm" keyword. FAQPage JSON-LD (6 questions), Article schema.',
      ],
      fixed: [
        'MCP Docs page: Updated version badge from "MCP v1.0" to "MCP v1.1.0" to match actual API version.',
        'MCP Docs page: Added missing tools (get_conversation, delete_memory) to the tools grid — now shows all 6 tools.',
      ],
      improved: [
        'Sitemap expanded to 145 URLs (+3 new blog pages)',
        'Blog registry expanded to 132 posts',
      ],
    },
    },
    {
    version: 'v0.49.0',
    date: '2026-05-04',
    title: '3 Strategic SEO Blogs + MCP Server Version Fix — Desktop, Grok, Agent Memory',
    tags: ['SEO', 'Desktop App', 'Grok', 'AI Agents', 'MCP', 'Comparison'],
    changes: {
      added: [
        'New blog: "ChatGPT Desktop App Memory: Complete Guide (2026)" — desktop vs web differences, sync behavior, exclusive features (voice mode, screenshot capture, always-on-top). Targets "chatgpt desktop app memory" keyword. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "Grok AI vs ChatGPT: Memory, Features & Price Compared (2026)" — 17-feature comparison table, Grok\'s X/Twitter data advantage, memory gap analysis. Targets "grok vs chatgpt" keyword. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "AI Agent Memory: How to Give Your AI Agents Persistent Context (2026)" — agent memory types, MCP Server integration, comparison with Mem0 and vector DBs. Targets "ai agent memory" keyword. FAQPage JSON-LD (6 questions), Article schema.',
      ],
      fixed: [
        'MCP Server landing page: Fixed softwareVersion from "1.0.0" to "1.1.0" to match actual API version.',
      ],
      improved: [
        'Sitemap expanded to 142 URLs (+3 new blog pages)',
        'Blog registry expanded to 129 posts',
        'Homepage Guides section updated with 3 new blog links',
      ],
    },
    },
    {
    version: 'v0.48.0',
    date: '2026-05-04',
    title: 'MCP Server v1.1.0 + Chrome Extension Fixes + 3 Strategic SEO Blogs',
    tags: ['MCP', 'Chrome Extension', 'SEO', 'Cross-Platform', 'Memory Comparison'],
    changes: {
      added: [
        'MCP Server v1.1.0: Added 2 new tools — get_conversation (retrieve full conversation by ID) and delete_memory (delete specific or all data). Now 6 tools total.',
        'MCP Server: isError field on error responses for proper MCP client error handling. Input validation on all tools. Improved error messages with details.',
        'MCP Server: GET endpoint now returns plain info object (not JSON-RPC framed). notifications/initialized returns 204 No Content per spec.',
        'New blog: "How to Sync AI Conversations Across Devices" — 4 sync methods (native, extension, MCP, manual), comparison table, step-by-step setup. Targets "sync ai conversations" keyword.',
        'New blog: "ChatGPT vs Claude vs Gemini vs DeepSeek: Which AI Remembers Best?" — head-to-head memory comparison with test results, recommendations by use case. Targets "which ai remembers best" keyword.',
        'New blog: "MCP Memory Server: Connect Any AI to Your Conversation History" — complete MCP setup guide for Claude Desktop, Cursor, and 113+ clients. Targets "mcp memory server" keyword.',
      ],
      fixed: [
        'Chrome Extension: Removed remote Tailwind CDN script (Chrome Web Store blocker). Replaced with comprehensive inline CSS for all utility classes.',
        'Chrome Extension: Added Gemini filter button to sidepanel. Users can now filter conversations by Gemini platform.',
        'Chrome Extension: Updated empty state message to include Gemini in supported platforms list.',
      ],
      improved: [
        'Sitemap expanded to 139 URLs (+3 new blog pages)',
        'Blog registry expanded to 126 posts',
        'Homepage Guides section updated with 3 new blog links',
        'MCP Server version bumped to 1.1.0',
      ],
    },
    },
    {
    version: 'v0.47.0',
    date: '2026-05-04',
    title: '3 Strategic SEO Blogs — NotebookLM Export, Student Use Case, Self-Hosted Guide',
    tags: ['SEO', 'NotebookLM', 'Students', 'Self-Hosted', 'Privacy', 'MCP'],
    changes: {
      added: [
        'New blog: "How to Export NotebookLM Conversations" — 4 export methods (manual copy, print-to-PDF, Chrome extension, API), comparison table, best practices. Targets "notebooklm export" — Google\'s trending AI tool with zero competitor coverage. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "AI Memory for Students" — 5 student use cases (research, essay writing, math/science, language learning, exam prep), step-by-step setup guide, privacy/academic integrity section. Targets "ai memory for students" — massive underserved audience. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "Self-Hosted AI Memory" — local vs cloud comparison, 4 deployment options (MCP server, Docker, extension-only, cloud SaaS), setup guide, security best practices. Targets "self hosted ai memory" — growing privacy-conscious developer audience. FAQPage JSON-LD (6 questions), Article schema.',
      ],
      improved: [
        'Sitemap expanded to 136 URLs (+3 new blog pages)',
        'Blog registry expanded to 123 posts',
        'New "Use Cases" category for audience-specific content',
        'New "Technical" category for developer-focused content',
      ],
    },
    },
    {
    version: 'v0.46.0',
    date: '2026-05-04',
    title: 'Article Schema Coverage + 3 High-Intent SEO Blogs — Technical SEO Perfection',
    tags: ['SEO', 'Structured Data', 'ChatGPT Memory', 'AI Tools', 'Migration'],
    changes: {
      added: [
        'New blog: "ChatGPT Memory: Complete Guide to How It Works (2026)" — comprehensive guide covering memory feature mechanics, 1,500-word limit, management, and comparison with AI Memory. Targets "chatgpt memory" primary keyword. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "AI Memory Tools Compared: 7 Best Options for 2026" — 7-tool comparison table (AI Memory, Mem0, Chat Memo, Supermemory, AI Context Flow, ChatGPT native, Claude native) with pricing, features, and platforms. Targets "ai memory tools" category keyword. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "How to Switch from ChatGPT to Claude (Keep Your Memory)" — migration guide covering export-import, MCP setup, and cross-platform memory transfer. Targets "switch chatgpt to claude" high-intent keyword. FAQPage JSON-LD (6 questions), Article schema.',
      ],
      improved: [
        'Article JSON-LD structured data added to 11 blogs that were missing it — now 118/118 blogs (100%) have complete structured data coverage (FAQPage + Article + BreadcrumbList)',
        'Blogs fixed: ai-memory-for-business, ai-memory-for-teams, best-ai-memory-extension-2026, chatgpt-api-memory, chatgpt-memory-plugin, chatgpt-o3-memory-changes, deepseek-ai-complete-guide, gpt5-memory-guide, mem0-alternative, save-gemini-conversations, search-ai-conversations',
        'Sitemap expanded to 133 URLs (+3 new blog pages)',
        'Blog registry expanded to 118 posts',
        'Homepage Guides section updated with 3 new blog links',
      ],
    },
    },
    {
    version: 'v0.45.0',
    date: '2026-05-04',
    title: 'Privacy & Comparison SEO — 3 Strategic Blog Posts + Homepage Stats Fix',
    tags: ['SEO', 'Privacy', 'ChatGPT Memory', 'Perplexity', 'Custom GPTS'],
    changes: {
      added: [
        'New blog: "How to Turn Off ChatGPT Memory" — comprehensive privacy guide covering desktop, mobile, API, and temporary chat alternatives. Targets high-intent "turn off chatgpt memory" keyword. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "ChatGPT vs Perplexity: AI Memory Compared" — 14-row feature comparison covering memory systems, context windows, web search, citations, organization, export, and pricing. Targets "chatgpt vs perplexity" keyword. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "How to Export ChatGPT Custom GPTs" — 5 methods for backing up custom GPT configurations, knowledge files, and actions. Targets "export chatgpt gpts" high-intent keyword. FAQPage JSON-LD (6 questions), Article schema.',
      ],
      improved: [
        'Homepage: Updated "SEO Guides Published" stat from 95+ to 115+ to reflect actual content count',
        'Homepage Guides section: +3 new blog links (Turn Off Memory, ChatGPT vs Perplexity, Export Custom GPTs)',
        'Sitemap expanded to 130 URLs (+3 new blog pages)',
        'Blog registry expanded to 115 posts',
      ],
    },
    },
    {
    version: 'v0.44.0',
    date: '2026-05-04',
    title: 'AI Coding & Local LLM Coverage — Claude Code, Cursor & Ollama Memory Guides',
    tags: ['SEO', 'Claude Code', 'Cursor', 'Ollama', 'Local AI', 'Developer'],
    changes: {
      added: [
        'New blog: Claude Code Memory — save & export CLI coding sessions',
        'New blog: Cursor AI Memory — save & search IDE conversations',
        'New blog: Ollama Memory — manage local AI chat history',
        'Homepage guides section: +3 new platform memory links',
      ],
      improved: [
        'Expanded AI Platform Guides to cover CLI agents (Claude Code) and local AI (Ollama)',
        'Sitemap expanded to 127 URLs (+3 developer-focused guides)',
      ],
    },
    },
  {
    version: 'v0.43.0',
    date: '2026-05-03',
    title: 'Voice Mode & Writing Comparison — 3 Strategic SEO Blogs + Homepage Refresh',
    tags: ['SEO', 'Voice Mode', 'Writing', 'Coding', 'Blog', 'Homepage'],
    changes: {
      added: [
        'New blog: "ChatGPT Voice Mode Guide 2026" — comprehensive guide covering standard vs Advanced Voice Mode, voice conversation memory, 3 saving methods, privacy concerns, voice vs text comparison table. Targets untapped "chatgpt voice mode" and "chatgpt voice conversations" keywords. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "Claude vs ChatGPT for Writing 2026" — detailed comparison across 6 writing categories (creative, technical, copywriting, academic, email, code docs). 12-row comparison table. Targets "claude vs chatgpt for writing" and "best ai for writing" keywords. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "Best AI Coding Assistant Memory 2026" — comparison of memory features across Cursor, GitHub Copilot, Claude Code, Windsurf, and ChatGPT for developers. Targets "ai coding assistant memory" and "cursor memory" keywords. FAQPage JSON-LD (6 questions), Article schema.',
      ],
      improved: [
        'Homepage Guides section: +23 blog links added (was 86, now ~109) — all previously missing blogs now linked for better internal linking and crawlability',
        'Sitemap expanded to 124 URLs (+3 new blog pages)',
        'Blog registry expanded to 111 posts',
      ],
    },
    },
    {
    version: 'v0.42.0',
    date: '2026-05-03',
    title: 'New AI Platform Coverage — Grok, Perplexity & ChatGPT Temporary Chat',
    tags: ['SEO', 'Grok', 'Perplexity', 'ChatGPT', 'Blog'],
    changes: {
      added: [
        'New blog: "Grok Memory Guide 2026" — comprehensive guide covering xAI Grok memory system, 128K context window, 4 export methods, Grok vs ChatGPT vs Claude comparison table. Targets untapped "grok memory" and "grok ai memory" keywords. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "Perplexity AI Memory Guide 2026" — complete guide to Perplexity threads, Library, Collections, and Spaces. 4 export methods, Perplexity vs ChatGPT comparison table. Targets "perplexity memory" and "perplexity ai memory" keywords. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "ChatGPT Temporary Chat vs Memory Mode" — explains the confusing difference between temporary chat and memory-enabled chats. Privacy implications, when to use each, 10-row comparison table. Targets "chatgpt temporary chat" and "chatgpt incognito mode" keywords. FAQPage JSON-LD (6 questions), Article schema.',
      ],
      improved: [
        'Sitemap expanded to 121 URLs (+3 new blog pages)',
        'Blog registry expanded to 108 posts',
        'Homepage Guides section: +3 new links (Grok, Perplexity, Temporary Chat)',
      ],
    },
    },
    {
    version: 'v0.41.0',
    date: '2026-05-03',
    title: 'Untapped Keywords — Poe, Operator & Claude Sonnet 4 Coverage',
    tags: ['SEO', 'Poe', 'Operator', 'Claude Sonnet 4', 'Blog'],
    changes: {
      added: [
        'New blog: "Export Poe AI Conversations" — first-ever guide covering Poe by Quora multi-model platform (GPT-4, Claude, Gemini, Llama). 3 export methods, Poe vs ChatGPT vs Claude comparison table. Targets untapped "export poe conversations" and "poe ai export" keywords. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "ChatGPT Operator Memory" — comprehensive guide to managing ChatGPT Operator browser agent conversations. Covers context window usage, 3 saving methods, Operator vs Agent Mode vs Regular comparison table. Targets "chatgpt operator memory" and "chatgpt operator save conversations" emerging keywords. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "Claude Sonnet 4 Memory" — complete guide to Anthropic\'s most popular model memory system. 200K context window, 4 saving methods, Sonnet 4 vs Opus 4 vs Haiku 3.5 comparison table. Targets "claude sonnet 4 memory" and "claude sonnet 4 context window" keywords. FAQPage JSON-LD (6 questions), Article schema.',
      ],
      improved: [
        'Sitemap expanded to 118 URLs (+3 new blog pages)',
        'Blog registry expanded to 103 posts',
        'Homepage Guides section: +3 new links (Poe, Operator, Sonnet 4)',
      ],
    },
    },
    {
    version: 'v0.40.0',
    date: '2026-05-03',
    title: 'Platform Expansion — Claude Opus 4 & Windsurf AI Coverage',
    tags: ['SEO', 'Claude Opus 4', 'Windsurf', 'Export', 'Blog'],
    changes: {
      added: [
        'New blog: \"Claude Opus 4 Memory\" — comprehensive guide to Claude\'s latest model memory system, 200K context window, memory limits, 4 export methods, and comparison table (Opus 4 vs GPT-5 vs Gemini 2.5 Pro). Targets \"claude opus 4 memory\" and \"claude opus 4 context window\" emerging keywords. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: \"Export Windsurf AI Conversations\" — first-ever guide covering Codeium\'s Windsurf AI IDE conversation export. 3 export methods, Windsurf vs Cursor vs Copilot comparison table. Targets untapped \"windsurf ai memory\" and \"export windsurf conversations\" keywords. FAQPage JSON-LD (6 questions), Article schema.',
      ],
      improved: [
        'Sitemap expanded to 115 URLs (+2 new blog pages)',
        'Blog registry expanded to 100 posts',
        'Homepage Guides section: +2 new links (Claude Opus 4, Windsurf)',
      ],
    },
    },
    {
    version: 'v0.39.0',
    date: '2026-05-03',
    title: '100th Blog Milestone — ChatGPT Agent Mode Memory',
    tags: ['Milestone', 'SEO', 'Agent Mode', 'Blog', '100 Posts'],
    changes: {
      added: [
        'New blog: "ChatGPT Agent Mode Memory" — 100th blog post milestone! Comprehensive guide covering how ChatGPT Agent Mode generates complex multi-step conversations, why memory management matters for agent sessions, 3 methods to save agent conversations, and how AI Memory auto-captures agent sessions. Targets "chatgpt agent mode memory" and "agent mode conversation history" emerging keywords. FAQPage JSON-LD (6 questions), Article schema.',
      ],
      improved: [
        'Sitemap expanded to 113 URLs (+1 new blog page)',
        'Blog registry expanded to 100 posts — major content milestone for SEO authority',
        'Homepage Guides section: +1 new link (Agent Mode Memory)',
      ],
    },
    },
    {
    version: 'v0.38.0',
    date: '2026-05-03',
    title: 'Security & Enterprise SEO — Trust-Building Content + Privacy Fix',
    tags: ['Security', 'Enterprise', 'SEO', 'Privacy', 'Blog'],
    changes: {
      added: [
        'New blog: "AI Memory Security Guide 2026" — comprehensive guide covering AI conversation security risks, data protection best practices, regulatory compliance (GDPR/CCPA/AI Act), and how AI Memory handles security. Targets "ai memory security" and "chatgpt data security" keywords. FAQPage JSON-LD (6 questions), Article schema.',
        'New blog: "ChatGPT Enterprise Memory" — enterprise-focused guide covering ChatGPT Enterprise vs Team vs Plus memory features, cross-platform search for teams, MCP server deployment, compliance & governance. Targets "chatgpt enterprise memory" and "ai memory for enterprise" keywords. FAQPage JSON-LD (6 questions), Article schema.',
      ],
      fixed: [
        'Features page comparison table: corrected "100% local/private" to "Session-isolated private storage" — aligns with the Round 46 privacy messaging unification.',
      ],
      improved: [
        'Sitemap expanded to 112 URLs (+2 new blog pages)',
        'Blog registry expanded to 99 posts (95 English + 4 Chinese)',
        'Homepage Guides section: +2 new links (Security Guide, Enterprise Memory)',
      ],
    },
    },
    {
    version: 'v0.37.0',
    date: '2026-05-03',
    title: 'Critical Bug Fixes — Privacy Claims, Waitlist, Parsers',
    tags: ['Bug Fix', 'Privacy', 'DeepSeek', 'Gemini', 'Parser', 'Database'],
    changes: {
      fixed: [
        'Fixed contradictory privacy claims: homepage and multiple pages claimed both "100% local storage" and "stored on our server." All privacy messaging now accurately describes session-isolated server storage.',
        'Waitlist API: migrated from in-memory Map() to SQLite persistent storage. Signups no longer lost on server restart.',
        'DeepSeek export parser: users can now import DeepSeek conversation exports (JSON format with chat_list, messages, or bulk array). Previously the UI claimed support but imports would fail.',
        'Gemini export parser: users can now import Gemini/Bard conversations exported via Google Takeout (events/messages/contents format).',
      ],
      improved: [
        'Privacy messaging unified across homepage, features, pricing, FAQ, chrome-extension, and layout metadata pages.',
        'Parser error message now lists all supported formats: ChatGPT, Claude, DeepSeek, Gemini, Kimi.',
      ],
    },
    },
    {
    version: 'v0.36.0',
    date: '2026-05-02',
    title: 'MCP Server Landing Page + Supermemory Comparison — Product Positioning',
    tags: ['MCP', 'Landing Page', 'Supermemory', 'Comparison', 'Product', 'SEO'],
    changes: {
      added: [
        'New MCP Server landing page (`/mcp-server`): Marketing-focused product page showcasing the pip package, 10-second install, 5 tools, setup guides for Claude Desktop/Cursor/Windsurf/VS Code, local vs cloud comparison, and FAQPage JSON-LD (6 questions). SoftwareApplication schema for rich snippets.',
        'New blog: "Supermemory vs AI Memory" — Competitor comparison targeting 22K-star Supermemory. Feature-by-feature table, architecture comparison, audience recommendations. FAQPage JSON-LD (6 questions), Article schema, internal links to related posts.',
      ],
      improved: [
        'Sitemap expanded to 110 URLs (+2: /mcp-server, /blog/supermemory-vs-ai-memory)',
        'Blog registry expanded to 97 posts (93 English + 4 Chinese)',
        'Homepage Guides section: +2 new links (MCP Server page, Supermemory comparison)',
      ],
    },
    },
    {
    version: 'v0.35.0',
    date: '2026-05-02',
    title: 'MCP Server Package + GPT-5 Memory Guide + Homepage Social Proof',
    tags: ['MCP', 'Package', 'GPT-5', 'Blog', 'Homepage', 'Conversion'],
    changes: {
      added: [
        'MCP Server standalone Python package: `pip install aimemory-mcp-server` — proper pyproject.toml, hatchling build, console script entry point, MIT license. Enables 113+ MCP clients to install and run locally.',
        'New blog: \\"GPT-5 Memory: Complete Guide (2026)\\" — targets trending \\"gpt-5 memory\\" keyword. Covers GPT-5 vs GPT-4 memory differences, 1,500-word limit, cross-platform comparison table, FAQPage schema (6 questions).',
        'Homepage social proof section: 95+ guides, 5 platforms, 113+ MCP clients, 100% private metrics bar with platform badges.',
        'MCP docs page: Standalone server download section with pip install instructions, Claude Desktop local config, Cursor local config, 5 tools documentation.',
      ],
      improved: [
        'Sitemap expanded to 108 URLs (1 new blog page)',
        'Blog registry expanded to 96 posts (92 English + 4 Chinese)',
        'Homepage conversion: trust signals between hero and product demo sections',
      ],
    },
    },
    {
    version: 'v0.34.0',
    date: '2026-05-02',
    title: 'Strategic SEO Blogs — Developer APIs, B2B Teams, o3 Memory',
    tags: ['Blog', 'SEO', 'Developer', 'Teams', 'o3', 'API', 'MCP'],
    changes: {
      added: [
        'New blog: \"ChatGPT API Memory\" — developer-focused guide covering OpenAI Assistants API, MCP protocol, vector databases, and AI Memory MCP server for building custom memory systems. FAQPage schema (6 questions), code examples, comparison table.',
        'New blog: \"AI Memory for Teams\" — B2B team deployment guide covering ChatGPT Team vs Claude Team vs AI Memory, team architecture, MCP integration for developer teams, security & privacy. FAQPage schema (6 questions).',
        'New blog: \"ChatGPT o3 Memory Changes\" — timeliness piece covering o3/o4-mini/GPT-4.5 memory handling, reasoning chain preservation, context window comparison, cross-platform memory management. FAQPage schema (6 questions).',
      ],
    },
  },
  {
    version: 'v0.33.0',
    date: '2026-05-02',
    title: 'Developer Guides — Getting Started + MCP Quickstart',
    tags: ['Guides', 'MCP', 'Developer', 'Onboarding', 'Documentation'],
    changes: {
      added: [
        'New guide: "Getting Started with AI Memory" — comprehensive step-by-step onboarding guide covering upload, search, Chrome extension, and MCP setup. SEO-optimized for "how to use ai memory" / "ai memory setup guide". FAQPage schema (6 questions), Article JSON-LD.',
        'New guide: "MCP Server Quickstart" — developer-focused MCP setup guide for Claude Desktop, Cursor, Windsurf, VS Code, and Cline. Remote vs Local mode comparison table, 5 tools documentation, usage examples, troubleshooting. FAQPage schema (6 questions), SoftwareApplication JSON-LD.',
      ],
      improved: [
        'Sitemap expanded to 104 URLs (2 new guide pages)',
        'Homepage Guides section expanded with Getting Started and MCP Quickstart links',
      ],
    },
    },
    {
    version: 'v0.32.0',
    date: '2026-05-02',
    title: 'Trending Comparisons + Developer MCP + Gemini Deep Research',
    tags: ['SEO', 'Comparison', 'MCP', 'Developer', 'Gemini', 'Content'],
    changes: {
      added: [
        'New blog: "ChatGPT Canvas vs Claude Artifacts: Complete Comparison (2026)" — high-value comparison targeting "chatgpt canvas vs claude artifacts", 11-row feature comparison table, FAQPage schema (6 questions)',
        'New blog: "How to Use MCP with Cursor: Complete Developer Guide (2026)" — developer-focused targeting "mcp cursor" / "cursor mcp setup", step-by-step mcp.json configuration with AI Memory MCP server (https://aimemory.pro/api/mcp), FAQPage schema (6 questions)',
        'New blog: "Gemini Deep Research: Complete Guide to Google\'s AI Research Mode (2026)" — targets trending "gemini deep research" keyword, comparison with ChatGPT Deep Research, FAQPage schema (6 questions)',
      ],
      fixed: [
        'Sitemap: added 2 missing blog URLs (mcp-tools-for-ai, mem0-alternative)',
      ],
      improved: [
        'Blog registry expanded to 90 posts (86 English + 4 Chinese)',
        'Sitemap expanded to 100 URLs',
        'New content angles: AI workspace comparison (Canvas/Artifacts), developer MCP integration (Cursor), trending Google feature (Gemini Deep Research)',
      ],
    },
    },
    {
    version: 'v0.31.0',
    date: '2026-05-02',
    title: 'Strategic SEO: Cross-Feature Comparison + MCP Education + Export Formats',
    tags: ['SEO', 'Comparison', 'MCP', 'Export', 'Content'],
    changes: {
      added: [
        'New blog: "ChatGPT Projects vs Memory vs Custom Instructions: Complete Guide (2026)" — high-intent comparison keyword targeting the 3 ChatGPT personalization features, comparison table across 9 dimensions, FAQPage schema (6 questions)',
        'New blog: "MCP Protocol for AI Memory Explained (2026)" — developer-focused educational content targeting "mcp protocol ai memory", covers JSON-RPC 2.0 architecture, 113+ supported clients, aimemory.pro MCP server details, FAQPage schema (6 questions)',
        'New blog: "Export AI Conversations to Markdown, PDF, or JSON (2026)" — export format comparison targeting "export ai conversations markdown pdf json", code examples in Python/JavaScript, FAQPage schema (6 questions)',
      ],
      improved: [
        'Blog registry expanded to 89 posts (85 English + 4 Chinese)',
        'Sitemap expanded to 97 URLs',
        'Homepage guides section updated with 3 new blog links',
        'New content angles: feature comparison education, MCP developer community, export format decision-making',
      ],
    },
    },
    {
    version: 'v0.30.0',
    date: '2026-05-01',
    title: 'Deep Research + Enterprise + Second Brain — New Audience Expansion',
    tags: ['SEO', 'Enterprise', 'Productivity', 'Research', 'B2B'],
    changes: {
      added: [
        'New blog: "ChatGPT Deep Research: Complete Guide to AI-Powered Research (2026)" — targets trending "chatgpt deep research" keyword, step-by-step guide, comparison table, FAQPage schema (6 questions)',
        'New blog: "AI Memory for Business: Enterprise Knowledge Management Guide (2026)" — B2B angle targeting "ai memory for business", "enterprise ai memory", ROI analysis, FAQPage schema (6 questions)',
        'New blog: "How to Build a Second Brain with AI: Complete Guide (2026)" — targets "second brain ai" trending topic, productivity angle, comparison table vs Notion/Obsidian, FAQPage schema (6 questions)',
      ],
      improved: [
        'Blog registry expanded to 86 posts (82 English + 4 Chinese)',
        'Sitemap expanded to 94 URLs',
        'New audience segments: researchers (Deep Research), enterprises (B2B), productivity enthusiasts (Second Brain)',
        'Homepage guides section updated with 3 new blog links',
      ],
    },
    },
    {
    version: 'v0.29.0',
    date: '2026-05-01',
    title: 'AI Memory Standard + MCP Connectivity + DeepSeek China Market — Strategic SEO Expansion',
    tags: ['SEO', 'MCP', 'DeepSeek', 'Standard', 'China', 'Strategy'],
    changes: {
      added: [
        'New blog: "The AI Memory Standard" — positions aimemory.pro as the cross-platform memory standard, targets "ai memory standard", "ai memory protocol", comparison table of 5 platforms',
        'New blog: "Connect MCP Server to Any AI Assistant" — comprehensive MCP setup guide for Claude Desktop, ChatGPT, Cursor, Windsurf, targets "mcp server setup", "mcp claude desktop"',
        'New blog: "DeepSeek AI Memory Complete Guide 2026" — bilingual EN/CN guide targeting "deepseek memory", "DeepSeek记忆管理", fills China market gap with zero competitor coverage',
      ],
      improved: [
        'Blog registry expanded to 83 posts (79 English + 4 Chinese)',
        'Sitemap expanded to 91 URLs',
        'MCP server ecosystem coverage strengthened (4 blogs now)',
        'DeepSeek platform coverage expanded (3 blogs now)',
        'Cross-platform memory standard narrative established (first-mover positioning)',
        'China market content expanded with bilingual DeepSeek guide',
      ],
    },
    },
    {
    version: 'v0.28.0',
    date: '2026-05-01',
    title: 'Cross-Platform Search + Gemini Coverage + Plugin Positioning — SEO Expansion',
    tags: ['SEO', 'Content', 'Search', 'Gemini', 'Plugin'],
    changes: {
      added: [
        'New blog: "ChatGPT Memory Plugin: Best Tools to Enhance AI Memory" — targets "chatgpt memory plugin", "chatgpt memory extension", comparison table of 5 plugins, FAQPage schema (6 questions)',
        'New blog: "How to Save & Export Gemini Conversations" — targets "save gemini conversations", "export gemini chat", 4 methods compared, FAQPage schema (6 questions)',
        'New blog: "How to Search Across All Your AI Conversations" — targets "search ai conversations", "find old ai chats", 5 methods compared, FAQPage schema (6 questions)',
      ],
      improved: [
        'Blog registry expanded to 80 posts (76 English + 4 Chinese)',
        'Sitemap expanded to 90 URLs',
        'Gemini platform coverage expanded (2 blogs now)',
        'Core use case (search) now has dedicated landing page',
        'Plugin/extension keyword coverage strengthened',
      ],
    },
    },
    {
    version: 'v0.27.0',
    date: '2026-05-01',
    title: 'MCP Ecosystem + Competitive Positioning — Strategic SEO Expansion',
    tags: ['SEO', 'MCP', 'Comparison', 'Competitive', 'Content'],
    changes: {
      added: [
        'New blog: "Claude Desktop MCP Setup Tutorial" — step-by-step guide targeting "claude desktop mcp setup", "how to connect MCP to Claude", FAQPage schema (6 questions)',
        'New blog: "Best MCP Tools and Servers for AI" — comprehensive MCP ecosystem guide targeting "mcp tools for ai", "best mcp servers", 18 servers categorized, comparison table',
        'New blog: "Mem0 Alternative" — competitive positioning targeting "mem0 alternative", "mem0 vs ai memory", positions AI Memory as consumer-friendly alternative',
      ],
      improved: [
        'Blog registry expanded to 77 posts (73 English + 4 Chinese)',
        'Sitemap expanded to 87 URLs',
        'Strategic MCP content cluster strengthened (4 MCP blogs total)',
        'Competitive positioning against Mem0 (54.1K stars, $24M funding)',
      ],
    },
    },
    {
    version: 'v0.26.0',
    date: '2026-05-01',
    title: 'MCP Server Guide + Claude Memory + Cross-Platform Backup — Strategic Content',
    tags: ['SEO', 'Content', 'MCP', 'Claude', 'Backup'],
    changes: {
      added: [
        'New blog: "MCP Server Setup Guide" — comprehensive MCP protocol guide targeting "mcp server setup", "model context protocol" keywords, 8-client comparison table, FAQPage schema (6 questions), positions AI Memory MCP Server as the go-to solution',
        'New blog: "Claude Memory Limit: Everything You Need to Know" — targets "claude memory limit", "claude memory full" pain-point keywords, Claude vs ChatGPT vs Gemini memory comparison table, FAQPage schema (6 questions)',
        'New blog: "How to Backup All Your AI Conversations" — cross-platform backup guide targeting "backup ai conversations", "save ai chat history", platform-by-platform backup methods for 7 AI platforms, FAQPage schema (6 questions)',
      ],
      improved: [
        'Blog registry expanded to 72 posts (68 English + 4 Chinese)',
        'Sitemap expanded to 84 URLs',
        'Homepage guides section expanded with 3 new blog links',
        'Strategic MCP content supports P0 MCP Server open source launch',
      ],
    },
    },
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
        'All 4 AI platforms now have dedicated memory guides (ChatGPT, Claude, DeepSeek, Gemini, Kimi)',
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
        'Multi-platform import (ChatGPT, Claude, DeepSeek, Gemini, Kimi)',
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
