import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

function getSessionId(request: NextRequest): string {
  const cookie = request.cookies.get('aim_session');
  return cookie?.value || '';
}

export async function GET(request: NextRequest) {
  try {
    const sessionId = getSessionId(request);
    if (!sessionId) {
      return NextResponse.json({ error: 'No session' }, { status: 401 });
    }

    // Total counts
    const totalConv = db.prepare(
      'SELECT COUNT(*) as count FROM conversations WHERE session_id = ?'
    ).get(sessionId) as { count: number };

    const totalMsg = db.prepare(
      'SELECT COUNT(*) as count FROM messages m JOIN conversations c ON m.conversation_id = c.id WHERE c.session_id = ?'
    ).get(sessionId) as { count: number };

    // Platform breakdown
    const platforms = db.prepare(
      'SELECT platform, COUNT(*) as count FROM conversations WHERE session_id = ? GROUP BY platform ORDER BY count DESC'
    ).all(sessionId) as { platform: string; count: number }[];

    // Activity timeline (conversations by month)
    const timeline = db.prepare(`
      SELECT 
        substr(created_at, 1, 7) as month,
        COUNT(*) as count
      FROM conversations 
      WHERE session_id = ? AND created_at IS NOT NULL
      GROUP BY month 
      ORDER BY month ASC
    `).all(sessionId) as { month: string; count: number }[];

    // Top conversations by message count
    const topConversations = db.prepare(
      'SELECT title, platform, message_count, created_at FROM conversations WHERE session_id = ? ORDER BY message_count DESC LIMIT 5'
    ).all(sessionId) as { title: string; platform: string; message_count: number; created_at: string }[];

    // User vs assistant message ratio
    const roleBreakdown = db.prepare(`
      SELECT m.role, COUNT(*) as count 
      FROM messages m 
      JOIN conversations c ON m.conversation_id = c.id 
      WHERE c.session_id = ? 
      GROUP BY m.role
    `).all(sessionId) as { role: string; count: number }[];

    // Average messages per conversation
    const avgMessages = totalConv.count > 0 
      ? Math.round(totalMsg.count / totalConv.count) 
      : 0;

    // Date range
    const dateRange = db.prepare(`
      SELECT 
        MIN(created_at) as first_conversation,
        MAX(created_at) as last_conversation
      FROM conversations WHERE session_id = ? AND created_at IS NOT NULL
    `).get(sessionId) as { first_conversation: string | null; last_conversation: string | null };

    return NextResponse.json({
      totalConversations: totalConv.count,
      totalMessages: totalMsg.count,
      avgMessagesPerConversation: avgMessages,
      platforms,
      timeline,
      topConversations,
      roleBreakdown,
      dateRange,
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: 'Failed to load stats' }, { status: 500 });
  }
}
