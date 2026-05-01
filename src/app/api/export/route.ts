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

    const { searchParams } = new URL(request.url);
    const conversationId = searchParams.get('id');
    const format = searchParams.get('format') || 'markdown'; // markdown, json, txt

    if (conversationId) {
      // Export single conversation
      const conv = db.prepare(
        'SELECT * FROM conversations WHERE id = ? AND session_id = ?'
      ).get(conversationId, sessionId) as any;

      if (!conv) {
        return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
      }

      const messages = db.prepare(
        'SELECT * FROM messages WHERE conversation_id = ? ORDER BY rowid'
      ).all(conversationId) as any[];

      const conversation = { ...conv, messages };

      if (format === 'json') {
        return new NextResponse(JSON.stringify(conversation, null, 2), {
          headers: {
            'Content-Type': 'application/json',
            'Content-Disposition': `attachment; filename="${sanitizeFilename(conv.title)}.json"`,
          },
        });
      }

      // Default: markdown
      const md = toMarkdown(conversation);
      return new NextResponse(md, {
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Content-Disposition': `attachment; filename="${sanitizeFilename(conv.title)}.md"`,
        },
      });
    }

    // Export all conversations
    const conversations = db.prepare(
      'SELECT * FROM conversations WHERE session_id = ? ORDER BY created_at DESC'
    ).all(sessionId) as any[];

    if (conversations.length === 0) {
      return NextResponse.json({ error: 'No conversations to export' }, { status: 404 });
    }

    const allConversations = conversations.map(conv => {
      const messages = db.prepare(
        'SELECT * FROM messages WHERE conversation_id = ? ORDER BY rowid'
      ).all(conv.id) as any[];
      return { ...conv, messages };
    });

    if (format === 'json') {
      return new NextResponse(JSON.stringify(allConversations, null, 2), {
        headers: {
          'Content-Type': 'application/json',
          'Content-Disposition': `attachment; filename="ai-memory-export.json"`,
        },
      });
    }

    // Default: markdown
    const md = allConversations.map(toMarkdown).join('\n\n---\n\n');
    return new NextResponse(md, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Content-Disposition': `attachment; filename="ai-memory-export.md"`,
      },
    });
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json({ error: 'Export failed' }, { status: 500 });
  }
}

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9\u4e00-\u9fff-_ ]/g, '').trim().substring(0, 80) || 'conversation';
}

function toMarkdown(conv: any): string {
  const lines: string[] = [];
  lines.push(`# ${conv.title}`);
  lines.push(`> Platform: ${conv.platform} | Created: ${conv.created_at || 'Unknown'} | Messages: ${conv.messages.length}`);
  lines.push('');
  
  for (const msg of conv.messages) {
    const role = msg.role === 'user' ? '👤 User' : '🤖 Assistant';
    lines.push(`### ${role}`);
    lines.push('');
    lines.push(msg.content);
    lines.push('');
  }
  
  return lines.join('\n');
}
