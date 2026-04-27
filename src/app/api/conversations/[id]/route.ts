import { NextRequest, NextResponse } from 'next/server';
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
