import { NextRequest, NextResponse } from 'next/server';
import { searchConversations, getAllConversations, getConversationCount } from '@/lib/db';

function getSessionId(request: NextRequest): string {
  const cookie = request.cookies.get('aim_session');
  return cookie?.value || '';  // No session = no data
}

export async function GET(request: NextRequest) {
  try {
    const sessionId = getSessionId(request);
    if (!sessionId) {
      return NextResponse.json({ success: true, conversations: [], results: [], total: 0 });
    }

    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const tag = searchParams.get('tag');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    if (query) {
      const results = searchConversations(query, sessionId, limit);
      return NextResponse.json({
        success: true,
        query,
        results,
        total: results.length,
      });
    } else {
      const conversations = getAllConversations(sessionId, limit, offset, tag || undefined);
      const total = getConversationCount(sessionId, tag || undefined);
      return NextResponse.json({
        success: true,
        conversations,
        total,
        limit,
        offset,
        ...(tag ? { tag } : {}),
      });
    }

  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Search failed' },
      { status: 500 }
    );
  }
}
