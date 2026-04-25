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

## Tech Stack

- **Framework:** Next.js 16 + TailwindCSS
- **Database:** SQLite with FTS5 (full-text search)
- **Deployment:** PM2 + Nginx + Let's Encrypt
- **Server:** Ubuntu on single VPS

## Getting Started

```bash
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
src/
├── app/
│   ├── page.tsx              # Homepage (upload/search/browse)
│   ├── layout.tsx            # Root layout
│   ├── blog/                 # SEO blog pages (13 articles)
│   ├── chrome-extension/     # Chrome extension landing page
│   └── api/
│       ├── upload/           # File upload endpoint
│       ├── search/           # FTS5 search endpoint
│       └── conversations/    # CRUD for conversations
├── components/
│   ├── FileUpload.tsx        # Drag & drop file upload
│   ├── SearchBox.tsx         # Search interface
│   ├── ConversationList.tsx  # Browse conversations
│   └── ConversationDetail.tsx # View conversation
├── lib/
│   ├── db.ts                 # SQLite database layer
│   ├── parser.ts             # ChatGPT/Claude JSON parser
│   └── parser-txt.ts         # ChatMemo TXT parser
└── types/
    └── conversation.ts       # TypeScript types
```

## Research

See [`/docs/research/`](docs/research/) for our market research reports covering:
- Competitive landscape analysis
- SEO keyword data
- Technical feasibility assessment
- Monetization model research

## Deployment

The app is deployed on a 2-core VPS with:
- **PM2** for process management
- **Nginx** as reverse proxy
- **Let's Encrypt** for HTTPS

Build command: `npx next build --webpack` (Turbopack doesn't support native modules like better-sqlite3)

## License

MIT

---

Built with 🧠 by [AIwalker](https://github.com/jingchang0623-crypto)
