# AI Memory MCP Server

[![PyPI version](https://img.shields.io/pypi/v/aimemory-mcp-server.svg)](https://pypi.org/project/aimemory-mcp-server/)
[![Python versions](https://img.shields.io/pypi/pyversions/aimemory-mcp-server.svg)](https://pypi.org/project/aimemory-mcp-server/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue.svg)](https://modelcontextprotocol.io/)
[![Homepage](https://img.shields.io/badge/Web-aimemory.pro-purple.svg)](https://aimemory.pro)

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that gives AI assistants **persistent memory**. Works with **Claude Desktop**, **Cursor**, **VS Code**, **Windsurf**, and **113+ MCP clients**.

---

## Installation

```bash
pip install aimemory-mcp-server
```

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
- 🔧 **5 core tools** — save, search, list, update, delete
- 🚀 **One-command install** — `pip install aimemory-mcp-server`
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

Set a custom database path:

```bash
export AIMEMORY_DB="/path/to/your/aimemory.db"
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

## Contributing

Contributions are welcome! Please see the [main repository](https://github.com/aimemory/aimemory) for details.

```bash
git clone https://github.com/aimemory/aimemory.git
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
- 🐙 **GitHub**: [github.com/aimemory/aimemory](https://github.com/aimemory/aimemory)
- 📋 **MCP Spec**: [modelcontextprotocol.io](https://modelcontextprotocol.io/)
