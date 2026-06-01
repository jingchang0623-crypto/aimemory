/**
 * Site-wide constants.
 * These values are manually maintained to keep client bundle size minimal.
 * Update when adding new content pages.
 */

// Content counts - update manually when adding new content pages
export const BLOG_COUNT = 245; // Actual blog directories in src/app/blog/ (2026-06-01: 245 dirs after new blog)
export const GUIDE_PAGES = 2; // /guides/getting-started, /guides/mcp-quickstart
export const CONTENT_COUNT = BLOG_COUNT + GUIDE_PAGES; // Total "SEO Guides" for homepage (247)

// MCP Server stats
export const MCP_CLIENTS_COUNT = 113; // MCP-compatible clients (Claude, Cursor, Windsurf, etc.)
export const MCP_TOOLS_COUNT = 12; // Memory tools in aimemory-mcp-server

// Platform count
export const AI_PLATFORMS_COUNT = 5; // ChatGPT, Claude, DeepSeek, Gemini, Kimi
