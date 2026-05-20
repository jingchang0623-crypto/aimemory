/**
 * Site-wide constants.
 * These values are manually maintained to keep client bundle size minimal.
 * Update when adding new content pages.
 */

// Content counts - update manually when adding new content pages
export const BLOG_COUNT = 188; // Actual blog posts in blog-data.ts (updated 2026-05-20: added ai-memory-best-practices-2026)
export const GUIDE_PAGES = 2; // /guides/getting-started, /guides/mcp-quickstart
export const CONTENT_COUNT = BLOG_COUNT + GUIDE_PAGES; // Total "SEO Guides" for homepage (190)

// MCP Server stats
export const MCP_CLIENTS_COUNT = 113; // MCP-compatible clients (Claude, Cursor, Windsurf, etc.)
export const MCP_TOOLS_COUNT = 12; // Memory tools in aimemory-mcp-server

// Platform count
export const AI_PLATFORMS_COUNT = 5; // ChatGPT, Claude, DeepSeek, Gemini, Kimi