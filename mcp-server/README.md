# AI Memory MCP Server

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that gives AI assistants persistent memory. Works with **Claude Desktop**, **Cursor**, **VS Code**, and **113+ MCP clients**.

## Features

- 🔍 **Full-text search** — powered by SQLite FTS5
- 🏷️ **Tag-based organization** — categorize memories with tags
- 💾 **Persistent storage** — memories survive restarts (SQLite)
- 🔧 **5 core tools** — save, search, list, update, delete

## Quick Start

### 1. Install dependencies

```bash
pip install fastmcp   # or: pip install --break-system-packages fastmcp
```

### 2. Run the server

```bash
cd /home/agentuser/aimemory/mcp-server
python3.12 server.py
```

The server runs in **stdio** transport mode (communicates via stdin/stdout).

## MCP Client Configuration

### Claude Desktop

Add to `~/.config/claude-desktop/claude_desktop_config.json` (Linux/macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "ai-memory": {
      "command": "python3.12",
      "args": ["/home/agentuser/aimemory/mcp-server/server.py"],
      "env": {
        "AIMEMORY_DB": "/home/agentuser/aimemory/mcp-server/aimemory.db"
      }
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
      "command": "python3.12",
      "args": ["/home/agentuser/aimemory/mcp-server/server.py"]
    }
  }
}
```

### VS Code (with Continue or MCP extension)

Add to your VS Code settings or MCP configuration file with the same JSON structure above.

## Available Tools

| Tool | Description | Parameters |
|------|-------------|------------|
| `save_memory` | Save a new memory | `content` (required), `tags` (optional list), `source` (optional) |
| `search_memories` | Full-text search | `query` (required), `limit` (default: 10) |
| `list_memories` | List memories | `limit` (default: 20), `tag` (optional filter) |
| `update_memory` | Update a memory | `memory_id` (required), `content` (optional), `tags` (optional) |
| `delete_memory` | Delete a memory | `memory_id` (required) |

## Search Syntax

The search uses SQLite FTS5 syntax:

- **Simple**: `python tutorial`
- **AND**: `python AND machine learning`
- **OR**: `react OR vue`
- **Phrase**: `"exact phrase match"`
- **NEAR**: `NEAR/3(word1 word2)` — words within 3 tokens of each other
- **Prefix**: `prog*` — matches "program", "programming", etc.

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `AIMEMORY_DB` | `./aimemory.db` | Path to the SQLite database file |

## File Structure

```
mcp-server/
├── server.py          # MCP Server with 5 tools
├── storage.py         # SQLite + FTS5 storage layer
├── requirements.txt   # Python dependencies
├── README.md          # This file
└── mcp-config.json    # Claude Desktop config example
```

## License

MIT
