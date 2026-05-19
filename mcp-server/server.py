"""
AI Memory MCP Server

A Model Context Protocol (MCP) server that provides persistent memory capabilities
for AI assistants. Works with Claude Desktop, Cursor, VS Code, and 113+ MCP clients.

Transport: stdio (local mode)
Storage: SQLite + FTS5 full-text search
"""

from fastmcp import FastMCP
from typing import Optional
import storage

mcp = FastMCP("AI Memory")


@mcp.tool()
def save_memory(content: str, tags: Optional[list[str]] = None, source: Optional[str] = None) -> dict:
    """Save a new memory to the knowledge base.

    Args:
        content: The memory content to store (required). Can be any text: facts, notes, preferences, etc.
        tags: Optional list of tags for categorization, e.g. ["work", "meeting", "todo"].
        source: Optional source identifier, e.g. a URL, file path, or conversation ID.

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
    """Search memories using full-text search.

    Searches across content, tags, and source fields. Results are ranked by relevance.

    Args:
        query: Search query string. Supports FTS5 syntax (e.g. "python AND tutorial", "NEAR/3").
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
        The memory object with id, content, tags, source, created_at, and updated_at fields.
    """
    memory = storage.get_memory(memory_id)
    if memory is None:
        return {"error": f"Memory with id {memory_id} not found"}
    return {
        "id": memory.id,
        "content": memory.content,
        "tags": memory.tags,
        "source": memory.source,
        "created_at": memory.created_at,
        "updated_at": memory.updated_at,
    }


@mcp.tool()
def memory_stats() -> dict:
    """Get memory store statistics.

    Returns total memory count, memories created in the last 7 days,
    and top tags distribution.

    Returns:
        A dict with "total", "recent_7_days", and "top_tags" fields.
    """
    return storage.memory_stats()


@mcp.tool()
def export_memories() -> dict:
    """Export all memories for backup.

    Returns all memories as a JSON list with count and export timestamp.
    Use this to backup your knowledge base or migrate to another system.

    Returns:
        A dict with "count", "exported_at", and "memories" (list of all memory objects).
    """
    return storage.export_memories()


@mcp.tool()
def import_memories(memories: list[dict], skip_duplicates: bool = True) -> dict:
    """Import memories from a backup.

    Args:
        memories: List of memory dicts to import. Each dict should have "content" (required)
                  and optionally "tags", "source".
        skip_duplicates: Skip memories with content that already exists (default: True).

    Returns:
        A dict with "imported" count and "skipped" count.
    """
    return storage.import_memories(memories, skip_duplicates)


@mcp.tool()
def batch_save_memories(memories: list[dict]) -> dict:
    """Save multiple memories at once.

    Much faster than calling save_memory repeatedly. Perfect for extracting
    key takeaways from a conversation in one call.

    Args:
        memories: List of memory dicts. Each must have "content", optionally "tags" and "source".

    Returns:
        A dict with "saved" count and "ids" list of newly created memory IDs.
    """
    return storage.batch_save_memories(memories)


@mcp.tool()
def get_all_tags() -> dict:
    """List all unique tags with usage counts.

    Use this to discover what categories of memories you have stored.
    Great for building navigation UI or understanding your knowledge base structure.

    Returns:
        A dict with "total_tags" count and "tags" dict mapping tag name to usage count.
    """
    return storage.get_all_tags()


@mcp.tool()
def clear_all_memories() -> dict:
    """⚠️ Delete ALL memories. This cannot be undone.

    Permanently removes every memory. Export first using export_memories
    if you want to keep a backup.

    Returns:
        A dict with "success" boolean and "deleted_count" (number of memories removed).
    """
    return storage.clear_all_memories()


if __name__ == "__main__":
    mcp.run(transport="stdio")
