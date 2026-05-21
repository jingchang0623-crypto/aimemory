# 🧠 AI Memory

**Your AI conversations, organized and searchable.**

🌐 Live: [aimemory.pro](https://aimemory.pro)

## What is AI Memory?

AI Memory is a web tool that helps you manage conversations across ChatGPT, Claude, DeepSeek, Gemini, and more. Upload your AI chat exports and search across all your conversations with full-text search.

### Features

- 📤 **Multi-platform Import** — ChatGPT, Claude, DeepSeek, Gemini (JSON, TXT, ZIP)
- 🔍 **Full-Text Search** — FTS5-powered search across all conversations
- 🔒 **100% Private** — All data stays on your device, no cloud uploads
- 🏷️ **Smart Organization** — Tags, folders, and automatic categorization
- 📊 **Conversation Analytics** — Stats, trends, and insights from your AI chats

## Components

### 🌐 Web App (aimemory.pro)
The main web application for uploading, searching, and browsing your AI conversations. No account required, data stays in your session.

### 🔌 Chrome Extension
Auto-save your AI conversations from ChatGPT, Claude, DeepSeek, and Gemini as you chat. No manual exports needed.

- **Download:** [ai-memory-extension.zip](https://aimemory.pro/ai-memory-extension.zip)
- **Supported:** ChatGPT, Claude, DeepSeek, Gemini
- **Install:** Load unpacked extension in Chrome (Developer mode)
- **Learn more:** [/chrome-extension](https://aimemory.pro/chrome-extension)

### 📦 MCP Server
Give your AI assistant persistent memory via the Model Context Protocol. Works with **Claude Desktop**, **Cursor**, **Windsurf**, **VS Code**, and **113+ MCP clients**.

- **Package:** `aimemory-mcp-server`
- **PyPI:** v1.5.0 Live (https://pypi.org/project/aimemory-mcp-server/)
- **GitHub Install:** `pip install git+https://github.com/jingchang0623-crypto/aimemory.git#subdirectory=mcp-server`
- **Tools:** 12 memory tools (search, save, list, get, update, delete, stats, export, import, batch_save, get_all_tags, clear_all)
- **Learn more:** [/mcp-server](https://aimemory.pro/mcp-server)

## Tech Stack

- **Framework:** Next.js 16 + TailwindCSS
- **Database:** SQLite with FTS5 (full-text search)
- **Extension:** WXT framework (Manifest V3)
- **MCP Server:** FastMCP 2.0+ with SQLite + FTS5
- **Deployment:** PM2 + Nginx + Let's Encrypt on Ubuntu VPS

## Getting Started

```bash
# Clone the repo
git clone https://github.com/jingchang0623-crypto/aimemory.git
cd aimemory

# Install dependencies
npm install

# Development server
npm run dev

# Production build (must use --webpack flag)
npx next build --webpack

# Start with PM2
pm2 start ecosystem.config.js
```

## Project Structure

```
aimemory/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── page.tsx            # Homepage (upload/search/browse)
│   │   ├── blog/               # 151+ SEO blog pages
│   │   ├── chrome-extension/   # Extension landing page
│   │   ├── mcp-server/         # MCP Server landing page
│   │   ├── docs/mcp/           # MCP documentation
│   │   ├── directory/          # AI tools directory
│   │   └── api/
│   │       ├── upload/         # File upload endpoint
│   │       ├── search/         # FTS5 search endpoint
│   │       ├── conversations/  # CRUD for conversations
│   │       └── mcp/            # MCP API endpoint (JSON-RPC 2.0)
│   ├── components/             # React components
│   ├── lib/
│   │   ├── db.ts               # SQLite database layer
│   │   ├── blog-data.ts        # Blog registry (151 posts)
│   │   └── sitemap.ts          # Dynamic sitemap (166 URLs)
│   └── types/                  # TypeScript types
├── extension/                  # Chrome extension (WXT)
│   ├── src/
│   │   ├── entrypoints/
│   │   │   ├── sidepanel/      # Side panel UI
│   │   │   └── content/        # Platform content scripts
│   │   └── lib/
│   │       └── memory-inject.ts # Memory injection system
│   └── .output/chrome-mv3/     # Built extension
├── mcp-server/                 # Python MCP Server
│   ├── aimemory_mcp/
│   │   └── server.py           # FastMCP server
│   ├── dist/                   # Built packages
│   └── pyproject.toml          # Package config (v1.4.0)
└── public/
    └── ai-memory-extension.zip # Downloadable extension
```

## SEO & Content

- **151+ SEO guides** covering ChatGPT history, export, memory, and MCP topics
- **166 sitemap URLs** for comprehensive search engine coverage
- **Multi-language** support (English + Chinese guides)
- **Programmatic SEO** via directory and comparison pages

## Research

See [`/docs/research/`](docs/research/) for our market research reports covering:
- Competitive landscape analysis (Mem0, Chat Memo, etc.)
- SEO keyword research (Google Trends data)
- Technical feasibility assessment
- Monetization model research
- Chrome extension development learnings
- Memory injection technology path

## Deployment

The app is deployed on a single VPS with:
- **PM2** for process management
- **Nginx** as reverse proxy
- **Let's Encrypt** for SSL

Server: `43.128.84.40` (Ubuntu)

## License

MIT
