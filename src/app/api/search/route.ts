import { NextRequest, NextResponse } from 'next/server';
import { searchConversations, getAllConversations, getConversationCount } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    if (query) {
      // Full-text search
      const results = searchConversations(query, limit);
      return NextResponse.json({
        success: true,
        query,
        results,
        total: results.length,
      });
    } else {
      // List all conversations
      const conversations = getAllConversations(limit, offset);
      const total = getConversationCount();
      return NextResponse.json({
        success: true,
        conversations,
        total,
        limit,
        offset,
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
