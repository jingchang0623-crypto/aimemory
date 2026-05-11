import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

function getSessionId(request: NextRequest): string {
  const cookie = request.cookies.get('aim_session');
  return cookie?.value || '';
}

// GET /api/tags - Get all unique tags for the session
export async function GET(request: NextRequest) {
  try {
    const sessionId = getSessionId(request);
    if (!sessionId) {
      return NextResponse.json({ success: true, tags: [] });
    }

    // Get all tags from conversations
    const conversations = db.prepare(
      'SELECT tags FROM conversations WHERE session_id = ?'
    ).all(sessionId) as { tags: string }[];

    // Extract unique tags
    const tagSet = new Set<string>();
    for (const conv of conversations) {
      try {
        const tags = JSON.parse(conv.tags || '[]');
        if (Array.isArray(tags)) {
          tags.forEach(tag => tagSet.add(tag));
        }
      } catch {
        // Skip invalid JSON
      }
    }

    // Count usage for each tag
    const tagsWithCount = Array.from(tagSet).map(tag => {
      const count = conversations.filter(conv => {
        try {
          const tags = JSON.parse(conv.tags || '[]');
          return tags.includes(tag);
        } catch {
          return false;
        }
      }).length;
      return { tag, count };
    }).sort((a, b) => b.count - a.count);

    return NextResponse.json({
      success: true,
      tags: tagsWithCount,
    });
  } catch (error) {
    console.error('Get tags error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to get tags' },
      { status: 500 }
    );
  }
}

// PUT /api/tags - Update tags for a conversation
export async function PUT(request: NextRequest) {
  try {
    const sessionId = getSessionId(request);
    if (!sessionId) {
      return NextResponse.json({ error: 'No session' }, { status: 401 });
    }

    const body = await request.json();
    const { conversationId, tags } = body;

    if (!conversationId) {
      return NextResponse.json({ error: 'Missing conversationId' }, { status: 400 });
    }

    if (!Array.isArray(tags)) {
      return NextResponse.json({ error: 'Tags must be an array' }, { status: 400 });
    }

    // Validate tags (max 10 tags, max 30 chars each, alphanumeric + spaces + hyphens)
    const validTags = tags
      .filter((tag: string) => typeof tag === 'string' && tag.length <= 30)
      .map((tag: string) => tag.trim())
      .filter((tag: string) => /^[a-zA-Z0-9\u4e00-\u9fa5\s\-_]+$/.test(tag))
      .slice(0, 10);

    // Update the conversation
    const result = db.prepare(
      'UPDATE conversations SET tags = ? WHERE id = ? AND session_id = ?'
    ).run(JSON.stringify(validTags), conversationId, sessionId);

    if (result.changes === 0) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      tags: validTags,
    });
  } catch (error) {
    console.error('Update tags error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to update tags' },
      { status: 500 }
    );
  }
}
