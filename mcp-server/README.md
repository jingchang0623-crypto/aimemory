# AI Memory MCP Server

[![PyPI version](https://img.shields.io/pypi/v/aimemory-mcp-server.svg)](https://pypi.org/project/aimemory-mcp-server/)
[![Python versions](https://img.shields.io/pypi/pyversions/aimemory-mcp-server.svg)](https://pypi.org/project/aimemory-mcp-server/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue.svg)](https://modelcontextprotocol.io/)
[![Smithery](https://smithery.ai/badge/aimemory-mcp-server)](https://smithery.ai/server/aimemory-mcp-server)
[![Homepage](https://img.shields.io/badge/Web-aimemory.pro-purple.svg)](https://aimemory.pro)

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that gives AI assistants **persistent memory**. Works with **Claude Desktop**, **Cursor**, **VS Code**, **Windsurf**, and **113+ MCP clients**.

---

## 🚀 Quick Install (One-Click)

### Smithery (Cursor, Windsurf, Claude Desktop)

```bash
npx @smithery/cli install aimemory-mcp-server --client cursor
# or for windsurf:
npx @smithery/cli install aimemory-mcp-server --client windsurf
```

### VS Code / Continue

Add to your MCP settings:
```json
{
  "mcpServers": {
    "ai-memory": {
      "command": "npx",
      "args": ["-y", "@smithery/cli@latest", "run", "aimemory-mcp-server", "--client", "vscode"]
    }
  }
}
```

---

## Installation

### Option 1: PyPI Install (Recommended)

```bash
pip install aimemory-mcp-server
```

### Option 2: GitHub Install

```bash
pip install git+https://github.com/jingchang0623-crypto/aimemory.git#subdirectory=mcp-server
```

> **Note:** GitHub install provides the latest development version directly from the repository.

That's it! The `aimemory-mcp-server` command is now available.

## Quick Start

### Claude Desktop

Add to `~/.config/claude-desktop/claude_desktop_config.json` (Linux/macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}
```

### Cursor

Add to `.cursor/mcp.json` in your project root or `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}
```

### VS Code (with Continue or MCP extension)

Add to your MCP configuration file:

```json
{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}
```

### Windsurf

Add to `~/.windsurf/config.json`:

```json
{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}
```

> **Tip:** To use a custom database location, add `"env": {"AIMEMORY_DB": "/path/to/your/aimemory.db"}` to any configuration above.

---

## Features

- 🔍 **Full-text search** — powered by SQLite FTS5 for fast, ranked results
- 🏷️ **Tag-based organization** — categorize memories with tags
- 💾 **Persistent storage** — memories survive restarts (SQLite)
    "🔧 **12 core tools** — save, search, list, get, update, delete, stats, export, import, batch_save, get_tags, clear\n
- 🚀 **Easy install** — `pip install aimemory-mcp-server` from PyPI
- 🪶 **Zero config** — works out of the box with sensible defaults

---

## Available Tools

### `save_memory` — Save a new memory

```json
{
  "content": "The user prefers Python over JavaScript for backend work",
  "tags": ["preferences", "coding"],
  "source": "conversation-123"
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `content` | string | ✅ | The memory content to store |
| `tags` | list[str] | ❌ | Tags for categorization, e.g. `["work", "meeting"]` |
| `source` | string | ❌ | Source identifier (URL, file path, conversation ID) |

### `search_memories` — Full-text search

```json
{
  "query": "python backend",
  "limit": 5
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | ✅ | Search query (supports FTS5 syntax) |
| `limit` | int | ❌ | Max results (default: 10, max: 100) |

### `list_memories` — List memories

```json
{
  "limit": 20,
  "tag": "coding"
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | int | ❌ | Max results (default: 20, max: 200) |
| `tag` | string | ❌ | Filter by tag |

### `update_memory` — Update a memory

```json
{
  "memory_id": 42,
  "content": "Updated content",
  "tags": ["updated-tag"]
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memory_id` | int | ✅ | ID of the memory to update |
| `content` | string | ❌ | New content (keeps existing if omitted) |
| `tags` | list[str] | ❌ | New tags (keeps existing if omitted) |

### `delete_memory` — Delete a memory

```json
{
  "memory_id": 42
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memory_id` | int | ✅ | ID of the memory to delete |

### `get_memory` — Retrieve a memory by ID

```json
{
  "memory_id": 42
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memory_id` | int | ✅ | ID of the memory to retrieve |

### `memory_stats` — Get memory store statistics

```json
{}
```

Returns total memory count, memories created in the last 7 days, and top tags distribution.

### `export_memories` — Export all memories for backup

```json
{}
```

Returns all memories as a JSON list with count and export timestamp. Use this to backup your knowledge base or migrate to another system.

**Returns:**
- `count`: Number of memories exported
- `memories`: List of all memory objects (id, content, tags, source, timestamps)
- `exported_at`: UTC timestamp of export

### `import_memories` — Import memories from backup

```json
{
  "memories": [
    {"content": "User prefers dark mode", "tags": ["preferences"]},
    {"content": "Project uses PostgreSQL", "tags": ["tech-stack"]}
  ],
  "skip_duplicates": true
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memories` | list[dict] | ✅ | List of memory dicts to import |
| `skip_duplicates` | bool | ❌ | Skip memories with existing content (default: true) |

**Returns:** `imported` count and `skipped` count (duplicates).

### `batch_save_memories` — Save multiple memories at once

```json
{
  "memories": [
    {"content": "User prefers dark mode", "tags": ["preferences"]},
    {"content": "Project uses PostgreSQL", "tags": ["tech-stack"]},
    {"content": "Team uses GitHub for CI/CD", "tags": ["devops"]}
  ]
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memories` | list[dict] | ✅ | List of memory dicts (content required, tags/source optional) |

**Returns:** `saved` count and `ids` list of newly created memory IDs.

Use this for bulk operations — much faster than calling `save_memory` repeatedly. Perfect for extracting key takeaways from a conversation in one call.

### `get_all_tags` — List all unique tags with counts

```json
{}
```

**Returns:** `total_tags` count and `tags` dict mapping tag name to usage count (sorted by most-used first).

Use this to discover what categories of memories you have stored. Great for building navigation UI or understanding your knowledge base structure.

### `clear_all_memories` — Delete all memories

```json
{}
```

⚠️ **WARNING:** This permanently removes every memory. Export first using `export_memories` if you want to keep a backup.

**Returns:** `success` boolean and `deleted_count` (number of memories removed).

---

## Search Syntax

The search uses SQLite FTS5 syntax:

| Syntax | Example | Description |
|--------|---------|-------------|
| Simple | `python tutorial` | Words appearing anywhere |
| AND | `python AND machine learning` | Both terms required |
| OR | `react OR vue` | Either term matches |
| Phrase | `"exact phrase match"` | Exact phrase in quotes |
| NEAR | `NEAR/3(word1 word2)` | Words within 3 tokens of each other |
| Prefix | `prog*` | Matches "program", "programming", etc. |

---

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `AIMEMORY_DB` | `./aimemory.db` | Path to the SQLite database file |
| `AIMEMORY_TRANSPORT` | `stdio` | Transport mode: `stdio` (local) or `http` (remote via SSE) |
| `AIMEMORY_PORT` | `8090` | Port for HTTP transport mode |
| `AIMEMORY_HOST` | `0.0.0.0` | Host for HTTP transport mode |

Set a custom database path:

```bash
export AIMEMORY_DB="/path/to/your/aimemory.db"
```

### HTTP/SSE Transport (Remote Access)

For remote access or integration with web-based MCP clients:

```bash
AIMEMORY_TRANSPORT=http AIMEMORY_PORT=8090 aimemory-mcp-server
```

Then configure your MCP client to connect via SSE:

```json
{
  "mcpServers": {
    "ai-memory": {
      "url": "http://your-server:8090/sse"
    }
  }
}
```

Or in your MCP client configuration:

```json
{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server",
      "env": {
        "AIMEMORY_DB": "/path/to/your/aimemory.db"
      }
    }
  }
}
```

---

## Running Without pip Install

You can also run directly from the repository:

```bash
cd mcp-server
pip install -r requirements.txt
python server.py
```

And configure the MCP client with the full path:

```json
{
  "mcpServers": {
    "ai-memory": {
      "command": "python3",
      "args": ["/path/to/mcp-server/server.py"]
    }
  }
}
```

---

## Troubleshooting

### `aimemory-mcp-server: command not found`

Make sure the pip install directory is in your `PATH`:

```bash
# Check where it was installed
pip show aimemory-mcp-server

# Common fix: use python -m instead
python -m aimemory_mcp.server
```

### `ModuleNotFoundError: No module named 'fastmcp'`

```bash
pip install fastmcp>=2.0.0
```

### MCP client doesn't see the tools

1. Restart your MCP client after changing configuration
2. Verify the server runs: `aimemory-mcp-server` (should block/wait for stdin)
3. Check MCP client logs for connection errors

### Database locked errors

Only one process should write to the database at a time. If you see lock errors, ensure you don't have multiple server instances running.

---

## 📋 MCP Registry

Register this server in the official [MCP Registry](https://github.com/modelcontextprotocol/registry) to make it discoverable:

1. Fork the [MCP Registry repository](https://github.com/modelcontextprotocol/registry)
2. Add to `servers.json`:
```json
{
  "io.github.jingchang0623-crypto/ai-memory": {
    "name": "AI Memory MCP Server",
    "description": "Persistent memory for AI assistants with cross-platform conversation search",
    "repository": "https://github.com/jingchang0623-crypto/aimemory",
    "homepage": "https://aimemory.pro",
    "license": "MIT",
    "tags": ["memory", "search", "conversation", "cross-platform"],
    "install": {
      "type": "pip",
      "package": "aimemory-mcp-server"
    }
  }
}
```
3. Submit a Pull Request

---

## Contributing

Contributions are welcome! Please see the [main repository](https://github.com/jingchang0623-crypto/aimemory) for details.

```bash
git clone https://github.com/jingchang0623-crypto/aimemory.git
cd aimemory/mcp-server
pip install -e ".[dev]"
```

---

## License

MIT — see [LICENSE](https://opensource.org/licenses/MIT) for details.

---

## Links

- 🌐 **Website**: [aimemory.pro](https://aimemory.pro)
- 📦 **PyPI**: [pypi.org/project/aimemory-mcp-server](https://pypi.org/project/aimemory-mcp-server/)
- 🐙 **GitHub**: [github.com/jingchang0623-crypto/aimemory](https://github.com/jingchang0623-crypto/aimemory)
- 📋 **MCP Spec**: [modelcontextprotocol.io](https://modelcontextprotocol.io/)
