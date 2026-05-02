"""
AI Memory MCP Server

A Model Context Protocol (MCP) server that provides persistent memory capabilities
for AI assistants. Works with Claude Desktop, Cursor, VS Code, and 113+ MCP clients.

Transport: stdio (local mode)
Storage: SQLite + FTS5 full-text search
"""

from fastmcp import FastMCP
from typing import Optional

from . import storage

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


def main():
    """Entry point for the aimemory-mcp-server console script."""
    mcp.run(transport="stdio")


if __name__ == "__main__":
    main()
