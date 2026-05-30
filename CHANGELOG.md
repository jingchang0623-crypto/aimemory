# Changelog

All notable changes to the AI Memory project are documented here.

## [Round 145] - 2026-05-30

### Fixed
- **BLOG_COUNT fix**: Updated from 242 → 244 to match actual blog-data.ts entries (244 slugs)
- **CONTENT_COUNT auto-updated**: Now correctly shows 246 (244 blogs + 2 guides)

### Technical Details
- `src/lib/constants.ts`: BLOG_COUNT=244, CONTENT_COUNT=246
- Build verified: `npm run build` passes
- Homepage now displays correct count: "246+ SEO Guides Published"

---

## [Round 144] - 2026-05-30

### Fixed
- **Version consistency across entire site**: Updated 16 files to resolve version drift
  - Homepage download link: `v1.1.0` → `v1.2.0` (correct filename without "v" prefix)
  - layout.tsx JSON-LD: `downloadUrl` and `softwareVersion` updated
  - MCP Server version: `v1.5.0` → `v1.5.1` across all pages (homepage, /mcp-server, /docs/mcp, blog posts, Chinese pages)
  - Chrome extension version: `v1.1.0` → `v1.2.0` across blog posts and comparison tables
  - PyPI date updated from `5/19/2026` to `5/30/2026`

### Technical Details
- 16 files modified, 25 insertions(+), 25 deletions(-)
- Build verified: `npm run build` passes (303 static pages)
- PM2 restarted, live site verified at aimemory.pro
- Git push: `ab37a98` pushed to origin/main

## [Round 143] - 2026-05-30

### Added
- **MCP Server v1.5.1 released**: Enhanced tool descriptions with usage examples for all 13 tools (save, search, list, update, delete, get, stats, export, import, batch_save, get_all_tags, inject_memory, clear_all)
- **Cross-platform keywords**: Added `chatgpt-memory`, `deepseek-memory`, `cross-platform-memory`, `ai-conversation-search`, `memory-injection` keywords to PyPI package metadata
- **Extension package.json**: Updated version from 1.1.0 → 1.2.0 to match built ZIP

### Fixed
- **Chrome extension download links**: Fixed both download button hrefs to point to correct filename (`ai-memory-extension-1.2.0.zip` instead of `ai-memory-extension-v1.2.0.zip`)

### Technical Details
- MCP Server v1.5.1 published to PyPI (commit: 086ef2b)
- Extension download page: `/chrome-extension` version references now consistent
- Build verified: `npm run build` passes (242 blog entries)
- Git push: all changes pushed to origin/main

## [Round 142] - 2026-05-30

### Fixed
- **BLOG_COUNT correction**: Fixed from 243 → 242 to match actual blog directories
- **CONTENT_COUNT correction**: Fixed from 245 → 244 (BLOG_COUNT + GUIDE_PAGES)
- **Sitemap expansion**: Added missing `/tags` and `/stats` pages to sitemap.xml for SEO

### Technical Details
- `src/lib/constants.ts`: BLOG_COUNT=242, CONTENT_COUNT=244
- `src/app/sitemap.ts`: Added /tags (priority 0.9, weekly) and /stats (priority 0.7, monthly)
- All 13 Chinese-language pages verified present in sitemap ✅

## [Round 141] - 2026-05-22

### Added
- **MCP Server Smithery Configuration**
  - Created `mcp-server/smithery.yaml` for one-click install in Cursor/Windsurf
  - Updated `mcp-server/README.md` with Smithery installation instructions
  - Added "🚀 Quick Install (One-Click)" section with CLI commands

- **MCP Registry Registration Preparation**
  - Added "📋 MCP Registry" section to README with complete JSON configuration
  - Registry namespace: `io.github.jingchang0623-crypto/ai-memory`
  - Ready to submit PR to https://github.com/modelcontextprotocol/registry

- **New Blog Post: Superpower Chat vs AI Memory**
  - Created `superpower-chat-vs-ai-memory-privacy-alternative` (22,253 bytes)
  - Privacy-focused comparison targeting 100K+ Superpower Chat users
  - Includes FAQ schema, comparison table, migration guide
  - 6 FAQ items with JSON-LD structured data
  - Registered in `src/lib/blog-data.ts`

### Modified
- **MCP Server README**
  - Added Smithery badge and installation section
  - Added MCP Registry registration guide with complete JSON config
  - Installation commands for npm/pip/uv

- **Blog Registry**
  - Added new Superpower Chat comparison blog to `blog-data.ts`
  - Total blog count: 197

### Technical Details
- Smithery config type: `stdio` (stdio mode MCP server)
- MCP Server version: v1.5.0 (PyPI)
- Blog sitemap: dynamically reads from `src/app/blog/` directories
- Chrome extension: v1.1.0 ready for Chrome Web Store submission

### Next Steps (P1)
- Submit MCP Registry PR: https://github.com/modelcontextprotocol/registry
- Chrome Web Store: Pay $5 fee, prepare 5-14 screenshots (1280×800)
- Create additional SEO pages: Mem0 vs AI Memory, Echoes vs AI Memory
- Implement paid features: E2EE cloud sync, AI analysis

---

## [Round 140] - 2026-05-21

### Added
- **New Blog Post: AI Memory vs Claude Project Knowledge**
  - Created `ai-memory-vs-claude-project-knowledge` (detailed comparison)
  - Cross-platform memory vs single-platform knowledge bases
  - Migration guide from Claude Projects

### Fixed
- **Tag Management Verification**
  - Confirmed Tag API fully implemented (`/api/tags` GET/PUT)
  - Confirmed TagManager component fully implemented (7,785 bytes)
  - Confirmed integration in conversation detail page
  - Updated task status: P0-2 marked as completed

- **Pricing & Features Page Audit**
  - Verified Memory Injection marked as ✅ (Chrome extension has 852-line implementation)
  - Verified Free tier description is accurate
  - Pricing page: Waitlist mode (correct for pre-launch)

---

## [Round 139] - 2026-05-19

### Added
- **New Blog Post: Cross-Platform AI Memory Guide**
  - Unified memory system for ChatGPT, Claude, DeepSeek, Gemini, Kimi
  - Technical implementation details
  - Step-by-step setup guide

### Improved
- **MCP Server Enhancements**
  - 12 tools implemented
  - 113+ MCP clients compatible
  - PyPI package: aimemory-mcp-server v1.5.0

---

## [Round 138] - 2026-05-17

### Added
- **New Blog Post: GPT-5 ChatGPT Memory Guide**
  - Future-looking guide for GPT-5 memory features
  - ChatGPT memory limitations and workarounds
  - AI memory strategy preparation

---

## [Round 137] - 2026-05-15

### Added
- **New Blog Post: What Is Memory Injection?**
  - Comprehensive guide to memory injection concept
  - Cross-platform implementation details
  - Comparison with built-in memory systems

### Core Features Verified
- Chrome Extension: v1.1.0 with Memory Injection (852 lines)
- Web App: Next.js 16.2.4 + SQLite FTS5
- MCP Server: PyPI v1.5.0, 12 tools
- Blog System: 196 posts (now 197)

---

## [Pre-137] - 2026-04-24 to 2026-05-14

### Research Completed
- ✅ SEO keyword research (2026-04-24)
- ✅ Technical feasibility study (2026-04-24/25)
- ✅ Monetization model (2026-04-25)
- ✅ Competitor deep dive (2026-04-24)
- ✅ Chrome extension development (2026-04-25)
- ✅ Memory injection technical path (2026-04-26)

### Product Recommendations Identified
- **P0**: MCP Server open-source release (113+ clients)
- **P0**: Chrome Extension + Web App (capture conversations)
- **P1**: Chrome Web Store launch ($5 fee)
- **P1**: DeepSeek support (China market gap)
- **P2**: Smart memory injection (Claude Memory Tool protocol)
- **P2**: E2EE cloud sync (Pro paid feature)
- **P3**: Memory expiration alerts, knowledge graph visualization
