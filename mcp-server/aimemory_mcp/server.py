"""
AI Memory MCP Server v1.5.1

A Model Context Protocol (MCP) server that provides persistent memory capabilities
for AI assistants. Works with Claude Desktop, Cursor, VS Code, Windsurf, and 113+ MCP clients.
Supports cross-platform memory search across ChatGPT, Claude, DeepSeek, Gemini, and Kimi.

Transport: stdio (local) or HTTP/SSE (remote via AIMEMORY_TRANSPORT=http)
Storage: SQLite + FTS5 full-text search
Tools: 13 (save, search, list, update, delete, get, stats, export, import, batch_save,
       get_all_tags, inject_memory, clear_all)
"""

from fastmcp import FastMCP
from typing import Optional

from . import storage

mcp = FastMCP("AI Memory")


@mcp.tool()
def save_memory(content: str, tags: Optional[list[str]] = None, source: Optional[str] = None) -> dict:
    """Save a new memory to your knowledge base.

    Use this to store important facts, preferences, code snippets, meeting notes,
    or any conversation takeaways that you want to remember for future sessions.
    The memory will be searchable via full-text search (FTS5) and can be
    retrieved by any MCP-connected AI assistant.

    Examples of what to save:
    - "User prefers Python over JavaScript for backend work" (preference)
    - "Team uses PostgreSQL for all new projects" (fact)
    - "```python\\ndef hello(): print('hi')```" (code snippet)

    Args:
        content: The memory content to store (required). Can be any text: facts, notes, preferences, code, etc.
        tags: Optional list of tags for categorization, e.g. ["work", "meeting", "python", "preference"].
        source: Optional source identifier, e.g. "chatgpt-conv-123", "claude-session-456", or platform name.

    Returns:
        The saved memory object with id, content, tags, source, created_at, and updated_at fields.
    """
    memory = storage.save_memory(content, tags, source)
    return {
        "id": memory.id,
        "content": memory.content,
        "tags": memory.tags,
        "source": memory.source,
        "created_at": memory.created_at,
        "updated_at": memory.updated_at,
    }


@mcp.tool()
def search_memories(query: str, limit: int = 10) -> dict:
    """Search your memory store using full-text search (FTS5).

    Searches across content, tags, and source fields. Results are ranked by
    relevance score. This is the primary way your AI assistant retrieves
    past information — use it to find relevant context from conversations
    across ChatGPT, Claude, DeepSeek, Gemini, Kimi, and more.

    Args:
        query: Search query string. Supports FTS5 syntax:
            - Simple: "python tutorial" (words appearing anywhere)
            - AND: "python AND machine learning" (both terms required)
            - OR: "react OR vue" (either term matches)
            - Phrase: "exact phrase match" (exact phrase in quotes)
            - NEAR: "NEAR/3(word1 word2)" (words within 3 tokens)
            - Prefix: "prog*" (matches "program", "programming", etc.)
        limit: Maximum number of results to return (default: 10, max: 100).

    Returns:
        A dict with "count" (number of results) and "memories" (list of matching memory objects).
    """
    limit = min(max(1, limit), 100)
    results = storage.search_memories(query, limit)
    return {
        "count": len(results),
        "memories": [
            {
                "id": m.id,
                "content": m.content,
                "tags": m.tags,
                "source": m.source,
                "created_at": m.created_at,
                "updated_at": m.updated_at,
            }
            for m in results
        ],
    }


@mcp.tool()
def list_memories(limit: int = 20, tag: Optional[str] = None) -> dict:
    """List memories, optionally filtered by tag. Returns newest first.

    Args:
        limit: Maximum number of memories to return (default: 20, max: 200).
        tag: Optional tag to filter by. Only memories containing this exact tag will be returned.

    Returns:
        A dict with "count" (number of results), "total_shown" and "memories" (list of memory objects).
    """
    limit = min(max(1, limit), 200)
    results = storage.list_memories(limit, tag)
    return {
        "count": len(results),
        "memories": [
            {
                "id": m.id,
                "content": m.content,
                "tags": m.tags,
                "source": m.source,
                "created_at": m.created_at,
                "updated_at": m.updated_at,
            }
            for m in results
        ],
    }


@mcp.tool()
def update_memory(memory_id: int, content: Optional[str] = None, tags: Optional[list[str]] = None) -> dict:
    """Update an existing memory's content and/or tags.

    Args:
        memory_id: The ID of the memory to update (required).
        content: New content for the memory. If omitted, keeps existing content.
        tags: New tags list for the memory. If omitted, keeps existing tags.

    Returns:
        The updated memory object, or an error if the memory was not found.
    """
    result = storage.update_memory(memory_id, content, tags)
    if result is None:
        return {"error": f"Memory with id {memory_id} not found"}
    return {
        "id": result.id,
        "content": result.content,
        "tags": result.tags,
        "source": result.source,
        "created_at": result.created_at,
        "updated_at": result.updated_at,
    }


@mcp.tool()
def delete_memory(memory_id: int) -> dict:
    """Delete a memory by its ID.

    Args:
        memory_id: The ID of the memory to permanently delete (required).

    Returns:
        A dict with "success" boolean and a message.
    """
    deleted = storage.delete_memory(memory_id)
    if deleted:
        return {"success": True, "message": f"Memory {memory_id} deleted successfully"}
    return {"success": False, "message": f"Memory with id {memory_id} not found"}


@mcp.tool()
def get_memory(memory_id: int) -> dict:
    """Retrieve a single memory by its ID.

    Args:
        memory_id: The ID of the memory to retrieve (required).

    Returns:
        The memory object with id, content, tags, source, created_at, and updated_at fields,
        or an error if not found.
    """
    result = storage.get_memory(memory_id)
    if result is None:
        return {"error": f"Memory with id {memory_id} not found"}
    return {
        "id": result.id,
        "content": result.content,
        "tags": result.tags,
        "source": result.source,
        "created_at": result.created_at,
        "updated_at": result.updated_at,
    }


@mcp.tool()
def memory_stats() -> dict:
    """Get statistics about your memory store.

    Returns:
        A dict with total count, tag distribution, and recent activity summary.
    """
    conn = storage.get_connection()
    try:
        total = conn.execute("SELECT COUNT(*) FROM memories").fetchone()[0]
        tags_rows = conn.execute(
            "SELECT tags FROM memories WHERE tags != '[]'"
        ).fetchall()
        tag_counts: dict[str, int] = {}
        for row in tags_rows:
            try:
                for tag in __import__("json").loads(row[0]):
                    tag_counts[tag] = tag_counts.get(tag, 0) + 1
            except Exception:
                pass
        recent = conn.execute(
            "SELECT COUNT(*) FROM memories WHERE created_at > datetime('now', '-7 days')"
        ).fetchone()[0]
        return {
            "total_memories": total,
            "memories_last_7_days": recent,
            "top_tags": dict(sorted(tag_counts.items(), key=lambda x: -x[1])[:10]),
        }
    finally:
        conn.close()


@mcp.tool()
def export_memories() -> dict:
    """Export all memories as JSON for backup or migration.

    Returns:
        A dict with "count" (number of memories) and "memories" (list of all memory objects).
        Use this to backup your knowledge base or migrate to another system.
    """
    memories = storage.export_memories()
    return {
        "count": len(memories),
        "memories": memories,
        "exported_at": __import__("datetime").datetime.now(__import__("datetime").timezone.utc).isoformat(),
    }


@mcp.tool()
def import_memories(memories: list[dict], skip_duplicates: bool = True) -> dict:
    """Import memories from a JSON list. Useful for restoring backup or bulk import.

    Args:
        memories: List of memory dicts. Each should have "content" (required), 
                  optional "tags" (list), and optional "source" (string).
        skip_duplicates: If True (default), skip memories with content that already exists.
                        If False, import all memories (may create duplicates).

    Returns:
        A dict with "imported" count and "skipped" count (duplicates).
    """
    result = storage.import_memories(memories, skip_existing=skip_duplicates)
    return {
        "success": True,
        "imported": result["imported"],
        "skipped": result["skipped"],
        "message": f"Imported {result['imported']} memories, skipped {result['skipped']} duplicates",
    }


@mcp.tool()
def batch_save_memories(memories: list[dict]) -> dict:
    """Save multiple new memories at once. Optimized for bulk operations and AI conversation analysis.

    Args:
        memories: List of memory dicts. Each should have:
            - content (required): The memory text to store
            - tags (optional): List of tag strings, e.g. ["meeting", "project-x"]
            - source (optional): Source identifier, e.g. "chatgpt-conv-123"

    Returns:
        A dict with "saved" count and "ids" list of newly created memory IDs.
        Example: {"saved": 5, "ids": [101, 102, 103, 104, 105]}

    Use this when you have multiple facts or insights to save at once — much faster
    than calling save_memory repeatedly. Perfect for analyzing a conversation and
    extracting key takeaways in one batch.
    """
    result = storage.batch_save_memories(memories)
    return {
        "success": True,
        "saved": result["saved"],
        "ids": result["ids"],
        "message": f"Saved {result['saved']} memories in batch",
    }


@mcp.tool()
def get_all_tags() -> dict:
    """Get all unique tags from your memory store with usage counts.

    Returns:
        A dict with "total_tags" count and "tags" mapping of tag name to usage count,
        sorted by most-used first. Example: {"total_tags": 12, "tags": {"work": 45, "project": 32, ...}}

    Use this to discover what categories of memories you have stored. Great for
    building navigation, understanding your knowledge base structure, or finding
    underused tags.
    """
    tags = storage.get_all_tags()
    return {
        "total_tags": len(tags),
        "tags": tags,
    }


@mcp.tool()
def inject_memory(query: str, max_memories: int = 5, format: str = "context") -> dict:
    """Search relevant memories and return them formatted for AI context injection (CORE FEATURE).

    This is the core "memory injection" feature — it finds memories relevant to the
    current conversation and formats them so they can be injected into the AI's context.
    Use this at the start of conversations or when you need relevant background.

    WHY THIS MATTERS: Most MCP memory servers just store/search. AI Memory formats
    the results READY for injection — saving you prompt engineering work.

    Args:
        query: The search query describing what context you need.
               Examples: "user preferences for Python", "previous meeting notes",
               "coding standards discussed before", "user's past debugging approaches".
        max_memories: Maximum number of memories to return (default: 5, max: 20).
        format: Output format:
            - "context" (default): Formatted as "=== Relevant Memories ===\\n[1] content...\\n===" ready to inject
            - "list": Simple list of memory objects for programmatic use

    Returns:
        A dict with:
            - "query": The original search query
            - "count": Number of memories found
            - "memories": List of memory objects (id, content, tags, source)
            - "injected_context": A formatted string ready to inject into the AI prompt
            - "usage_hint": Instructions on how to use the injected context

    Usage example:
        Call this tool, then copy the `injected_context` string and paste it
        into your system prompt like:
        "Here are relevant memories from past conversations:\\n{injected_context}"
    """
    max_memories = min(max(1, max_memories), 20)
    results = storage.search_memories(query, max_memories)
    
    memories_list = [
        {
            "id": m.id,
            "content": m.content,
            "tags": m.tags,
            "source": m.source,
            "created_at": m.created_at,
        }
        for m in results
    ]
    
    # Format for context injection
    if format == "context" and memories_list:
        context_parts = ["=== Relevant Memories ==="]
        for i, mem in enumerate(memories_list, 1):
            tags_str = f" [tags: {', '.join(mem['tags'])}]" if mem['tags'] else ""
            source_str = f" (source: {mem['source']})" if mem['source'] else ""
            context_parts.append(f"[{i}] {mem['content']}{tags_str}{source_str}")
        context_parts.append("=== End of Memories ===")
        injected_context = "\n".join(context_parts)
    elif format == "context":
        injected_context = "No relevant memories found."
    else:
        injected_context = ""
    
    return {
        "query": query,
        "count": len(memories_list),
        "memories": memories_list,
        "injected_context": injected_context,
        "usage_hint": "Copy the 'injected_context' string and paste it into your AI's system prompt or current message to provide relevant background." if injected_context else "",
    }


@mcp.tool()
def clear_all_memories() -> dict:
    """Delete ALL memories from the database. This action cannot be undone!

    ⚠️ WARNING: This permanently removes every memory. Export your data first
    using export_memories if you want to keep a backup.

    Returns:
        A dict with "success" boolean and "deleted_count" (number of memories removed).
    """
    result = storage.clear_all_memories()
    return {
        "success": result["success"],
        "deleted_count": result["deleted_count"],
        "message": f"Deleted {result['deleted_count']} memories. This cannot be undone.",
    }


def main():
    """Entry point for the aimemory-mcp-server console script.

    Supports two transport modes:
      - stdio (default): For local use with Claude Desktop, Cursor, VS Code
      - http: For remote access via HTTP/SSE, set AIMEMORY_TRANSPORT=http

    Environment variables:
      AIMEMORY_TRANSPORT: "stdio" (default) or "http"
      AIMEMORY_PORT: Port for HTTP mode (default: 8090)
      AIMEMORY_DB: Custom database path
    """
    import os
    transport = os.environ.get("AIMEMORY_TRANSPORT", "stdio")
    if transport == "http":
        port = int(os.environ.get("AIMEMORY_PORT", "8090"))
        host = os.environ.get("AIMEMORY_HOST", "0.0.0.0")
        mcp.run(transport="sse", host=host, port=port)
    else:
        mcp.run(transport="stdio")


if __name__ == "__main__":
    main()
