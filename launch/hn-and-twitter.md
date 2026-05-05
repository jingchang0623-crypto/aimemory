# AI Memory - Launch Copy

---

## Show HN Post

### Title

**Show HN: AI Memory – Universal conversation memory for ChatGPT, Claude, DeepSeek and Gemini**

### URL

https://aimemory.pro

### Body

Hey HN,

Every AI chat app has its own siloed memory. Your ChatGPT conversations are invisible to Claude. Your Claude context doesn't carry over to DeepSeek. And none of them remember anything from last month unless you manually curate custom instructions.

I built AI Memory to fix this — it's a local-first memory layer that works across all major AI assistants.

**What it does:**
- Captures and indexes your AI conversations across platforms
- Provides full-text search (SQLite FTS5) over your entire conversation history
- Injects relevant context into any AI chat automatically via Chrome extension
- Works with ChatGPT, Claude, DeepSeek, and Gemini today

**How it works technically:**

The core is a FastMCP Python server that exposes memory as an MCP (Model Context Protocol) service. It supports both stdio mode (for direct integration with Claude Desktop, Cursor, etc.) and HTTP mode (for the browser extension and remote access).

Conversations are stored locally in SQLite with FTS5 for fast full-text search. The Chrome extension monitors active AI chat sessions and can inject relevant memories as context — so when you ask Claude about a project, it automatically pulls in related conversations from ChatGPT.

**Dual transport modes:**
- `stdio` — plug directly into any MCP-compatible client (Claude Desktop, Cursor, Windsurf, etc.)
- `HTTP` — serves the Chrome extension and enables remote access

**Why local-first:**
Your conversation history is sensitive. Everything runs on your machine. No cloud sync, no third-party servers. The SQLite database lives in `~/.aimemory/`.

**Quick start:**
```
pip install aimemory
aimemory serve
```

Then install the Chrome extension from the Chrome Web Store, and you're live.

The MCP server means any tool that supports the protocol can read and write memories. Claude Desktop can query your ChatGPT history. Cursor can pull context from your Claude debugging sessions. It's all one shared memory space.

Would love feedback on the architecture, the MCP integration approach, and what other AI tools you'd want supported.

---

## Twitter/X Posts

### Post 1 — Developer Angle

> Built an MCP server that gives every AI assistant shared memory.
>
> FastMCP Python server with dual transport:
> • stdio for Claude Desktop, Cursor, Windsurf
> • HTTP for browser extension + remote access
>
> SQLite FTS5 for fast full-text search over all your conversations.
>
> Local-first. Open protocol.
>
> https://aimemory.pro

### Post 2 — User Pain Point

> I was explaining the same project to ChatGPT, then again to Claude, then again to DeepSeek.
>
> None of them knew what the others already understood.
>
> So I built AI Memory — one shared memory layer across all major AI assistants. Your context follows you.
>
> https://aimemory.pro

### Post 3 — Launch Announcement

> 🚀 Launched: AI Memory
>
> Universal conversation memory for ChatGPT, Claude, DeepSeek, and Gemini.
>
> • MCP server for any AI tool
> • Chrome extension for browser AI chats
> • Full-text search across all conversations
> • Local-first, your data stays on your machine
>
> Give your AI assistants a shared brain.
>
> https://aimemory.pro
