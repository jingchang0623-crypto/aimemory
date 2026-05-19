import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { getConversation } from '@/lib/db';

function getSessionId(request: NextRequest): string {
  const cookie = request.cookies.get('aim_session');
  if (cookie?.value) return cookie.value;
  return '';
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const sessionId = getSessionId(request);
    if (!sessionId) {
      return NextResponse.json({ error: 'No session' }, { status: 401 });
    }

    const { id } = await params;
    const conversation = getConversation(id, sessionId);
    
    if (!conversation) {
      return NextResponse.json(
        { error: 'Conversation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      conversation,
    });

  } catch (error) {
    console.error('Conversation error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to get conversation' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const sessionId = getSessionId(request);
    if (!sessionId) {
      return NextResponse.json({ error: 'No session' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { tags, title, summary } = body;

    // Build update query dynamically based on provided fields
    const updates: string[] = [];
    const values: any[] = [];

    if (tags !== undefined) {
      if (!Array.isArray(tags)) {
        return NextResponse.json({ error: 'Tags must be an array' }, { status: 400 });
      }
      // Validate tags (max 10 tags, max 30 chars each)
      const validTags = tags
        .filter((tag: string) => typeof tag === 'string' && tag.length <= 30)
        .map((tag: string) => tag.trim())
        .filter((tag: string) => /^[a-zA-Z0-9\u4e00-\u9fa5\s\-_]+$/.test(tag))
        .slice(0, 10);
      
      updates.push('tags = ?');
      values.push(JSON.stringify(validTags));
    }

    if (title !== undefined) {
      if (typeof title !== 'string' || title.trim().length === 0) {
        return NextResponse.json({ error: 'Title must be a non-empty string' }, { status: 400 });
      }
      updates.push('title = ?');
      values.push(title.trim());
    }

    if (summary !== undefined) {
      updates.push('summary = ?');
      values.push(summary || null);
    }

    if (updates.length === 0) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 });
    }

    values.push(id, sessionId);

    const result = db.prepare(
      `UPDATE conversations SET ${updates.join(', ')} WHERE id = ? AND session_id = ?`
    ).run(...values);

    if (result.changes === 0) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
    }

    // Fetch and return updated conversation
    const updatedConversation = getConversation(id, sessionId);

    return NextResponse.json({
      success: true,
      conversation: updatedConversation,
    });

  } catch (error) {
    console.error('Update conversation error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to update conversation' },
      { status: 500 }
    );
  }
}
