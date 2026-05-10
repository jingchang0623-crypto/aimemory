"""
AI Memory Storage Layer - SQLite + FTS5

Provides CRUD operations for memories with full-text search support.
"""

import sqlite3
import os
import json
from datetime import datetime, timezone
from typing import Optional
from dataclasses import dataclass, asdict

DB_PATH = os.environ.get("AIMEMORY_DB", os.path.join(os.path.dirname(os.path.abspath(__file__)), "aimemory.db"))


@dataclass
class Memory:
    id: int
    content: str
    tags: str  # JSON array stored as string
    source: Optional[str]
    created_at: str
    updated_at: str


def get_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def init_db() -> None:
    """Initialize database with memories table and FTS5 index."""
    conn = get_connection()
    try:
        conn.executescript("""
            CREATE TABLE IF NOT EXISTS memories (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                content TEXT NOT NULL,
                tags TEXT NOT NULL DEFAULT '[]',
                source TEXT,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            );

            CREATE VIRTUAL TABLE IF NOT EXISTS memories_fts USING fts5(
                content,
                tags,
                source,
                content=memories,
                content_rowid=id
            );

            -- Triggers to keep FTS index in sync
            CREATE TRIGGER IF NOT EXISTS memories_ai AFTER INSERT ON memories BEGIN
                INSERT INTO memories_fts(rowid, content, tags, source)
                VALUES (new.id, new.content, new.tags, new.source);
            END;

            CREATE TRIGGER IF NOT EXISTS memories_ad AFTER DELETE ON memories BEGIN
                INSERT INTO memories_fts(memories_fts, rowid, content, tags, source)
                VALUES ('delete', old.id, old.content, old.tags, old.source);
            END;

            CREATE TRIGGER IF NOT EXISTS memories_au AFTER UPDATE ON memories BEGIN
                INSERT INTO memories_fts(memories_fts, rowid, content, tags, source)
                VALUES ('delete', old.id, old.content, old.tags, old.source);
                INSERT INTO memories_fts(rowid, content, tags, source)
                VALUES (new.id, new.content, new.tags, new.source);
            END;
        """)
        conn.commit()
    finally:
        conn.close()


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


def save_memory(content: str, tags: Optional[list[str]] = None, source: Optional[str] = None) -> Memory:
    """Save a new memory. Returns the created Memory."""
    tags_json = json.dumps(tags or [])
    now = _now()
    conn = get_connection()
    try:
        cursor = conn.execute(
            "INSERT INTO memories (content, tags, source, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
            (content, tags_json, source, now, now)
        )
        conn.commit()
        memory_id = cursor.lastrowid
        row = conn.execute("SELECT * FROM memories WHERE id = ?", (memory_id,)).fetchone()
        return Memory(**dict(row))
    finally:
        conn.close()


def search_memories(query: str, limit: int = 10) -> list[Memory]:
    """Full-text search memories. Returns matching memories ordered by relevance."""
    conn = get_connection()
    try:
        rows = conn.execute(
            """
            SELECT m.* FROM memories m
            JOIN memories_fts fts ON m.id = fts.rowid
            WHERE memories_fts MATCH ?
            ORDER BY rank
            LIMIT ?
            """,
            (query, limit)
        ).fetchall()
        return [Memory(**dict(r)) for r in rows]
    finally:
        conn.close()


def get_memory(memory_id: int) -> Optional[Memory]:
    """Retrieve a single memory by ID. Returns None if not found."""
    conn = get_connection()
    try:
        row = conn.execute("SELECT * FROM memories WHERE id = ?", (memory_id,)).fetchone()
        if row is None:
            return None
        return Memory(**dict(row))
    finally:
        conn.close()


def list_memories(limit: int = 20, tag: Optional[str] = None) -> list[Memory]:
    """List memories, optionally filtered by tag. Returns newest first."""
    conn = get_connection()
    try:
        if tag:
            # Filter by tag using JSON array search
            rows = conn.execute(
                """
                SELECT * FROM memories
                WHERE tags LIKE ?
                ORDER BY created_at DESC
                LIMIT ?
                """,
                (f'%"{tag}"%', limit)
            ).fetchall()
        else:
            rows = conn.execute(
                "SELECT * FROM memories ORDER BY created_at DESC LIMIT ?",
                (limit,)
            ).fetchall()
        return [Memory(**dict(r)) for r in rows]
    finally:
        conn.close()


def update_memory(memory_id: int, content: Optional[str] = None, tags: Optional[list[str]] = None) -> Optional[Memory]:
    """Update a memory's content and/or tags. Returns updated Memory or None if not found."""
    conn = get_connection()
    try:
        existing = conn.execute("SELECT * FROM memories WHERE id = ?", (memory_id,)).fetchone()
        if not existing:
            return None

        new_content = content if content is not None else existing["content"]
        new_tags = json.dumps(tags) if tags is not None else existing["tags"]
        now = _now()

        conn.execute(
            "UPDATE memories SET content = ?, tags = ?, updated_at = ? WHERE id = ?",
            (new_content, new_tags, now, memory_id)
        )
        conn.commit()

        row = conn.execute("SELECT * FROM memories WHERE id = ?", (memory_id,)).fetchone()
        return Memory(**dict(row))
    finally:
        conn.close()


def delete_memory(memory_id: int) -> bool:
    """Delete a memory by ID. Returns True if deleted, False if not found."""
    conn = get_connection()
    try:
        cursor = conn.execute("DELETE FROM memories WHERE id = ?", (memory_id,))
        conn.commit()
        return cursor.rowcount > 0
    finally:
        conn.close()


def export_memories() -> list[dict]:
    """Export all memories as a list of dicts. Useful for backup/migration."""
    conn = get_connection()
    try:
        rows = conn.execute("SELECT * FROM memories ORDER BY created_at DESC").fetchall()
        return [
            {
                "id": r["id"],
                "content": r["content"],
                "tags": json.loads(r["tags"]),
                "source": r["source"],
                "created_at": r["created_at"],
                "updated_at": r["updated_at"],
            }
            for r in rows
        ]
    finally:
        conn.close()


def import_memories(memories: list[dict], skip_existing: bool = True) -> dict:
    """Import memories from a list of dicts.
    
    Args:
        memories: List of memory dicts with content, tags, source fields.
        skip_existing: If True, skip duplicates based on content hash. If False, insert all.
    
    Returns:
        Dict with imported_count and skipped_count.
    """
    imported = 0
    skipped = 0
    now = _now()
    conn = get_connection()
    try:
        for m in memories:
            content = m.get("content", "")
            if not content:
                continue
            
            tags = json.dumps(m.get("tags", []))
            source = m.get("source")
            
            if skip_existing:
                # Check if memory with same content exists
                existing = conn.execute(
                    "SELECT id FROM memories WHERE content = ?", (content,)
                ).fetchone()
                if existing:
                    skipped += 1
                    continue
            
            conn.execute(
                "INSERT INTO memories (content, tags, source, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
                (content, tags, source, now, now)
            )
            imported += 1
        conn.commit()
        return {"imported": imported, "skipped": skipped}
    finally:
        conn.close()


def batch_save_memories(memories: list[dict]) -> dict:
    """Save multiple memories at once. Optimized for bulk operations.
    
    Args:
        memories: List of memory dicts. Each should have:
            - content (required): The memory text
            - tags (optional): List of tag strings
            - source (optional): Source identifier
    
    Returns:
        Dict with saved count and list of saved memory IDs.
    """
    saved_ids = []
    now = _now()
    conn = get_connection()
    try:
        for m in memories:
            content = m.get("content", "")
            if not content:
                continue
            tags = json.dumps(m.get("tags", []))
            source = m.get("source")
            
            cursor = conn.execute(
                "INSERT INTO memories (content, tags, source, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
                (content, tags, source, now, now)
            )
            saved_ids.append(cursor.lastrowid)
        conn.commit()
        return {"saved": len(saved_ids), "ids": saved_ids}
    finally:
        conn.close()


def get_all_tags() -> dict[str, int]:
    """Get all unique tags with their usage counts.
    
    Returns:
        Dict mapping tag name to count of memories using that tag.
    """
    conn = get_connection()
    try:
        rows = conn.execute(
            "SELECT tags FROM memories WHERE tags != '[]'"
        ).fetchall()
        tag_counts: dict[str, int] = {}
        for row in rows:
            try:
                for tag in json.loads(row[0]):
                    tag_counts[tag] = tag_counts.get(tag, 0) + 1
            except Exception:
                pass
        return dict(sorted(tag_counts.items(), key=lambda x: -x[1]))
    finally:
        conn.close()


def clear_all_memories() -> dict:
    """Delete all memories from the database. Use with caution!
    
    Returns:
        Dict with success status and count of deleted memories.
    """
    conn = get_connection()
    try:
        count = conn.execute("SELECT COUNT(*) FROM memories").fetchone()[0]
        conn.execute("DELETE FROM memories")
        conn.commit()
        return {"success": True, "deleted_count": count}
    finally:
        conn.close()


# Auto-initialize database on import
init_db()
