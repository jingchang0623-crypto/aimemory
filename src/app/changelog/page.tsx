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
        'Parser error message now lists all supported formats: ChatGPT, Claude, DeepSeek, Gemini.',
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
