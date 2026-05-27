import { NextRequest, NextResponse } from 'next/server';
import { getConversation } from '@/lib/db';
import { getSessionId, jsonToMarkdown, getAllConversations } from '@/lib/export';

export async function GET(request: NextRequest) {
  const sessionId = getSessionId(request);
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format') || 'json';
  const conversationId = searchParams.get('id');

  try {
    if (conversationId) {
      // Export single conversation
      const conversation = getConversation(conversationId, sessionId);
      if (!conversation) {
        return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
      }

      const messages = conversation.messages || [];
      
      if (format === 'markdown') {
        const markdown = jsonToMarkdown(conversation, messages);
        return new NextResponse(markdown, {
          headers: {
            'Content-Type': 'text/markdown',
            'Content-Disposition': `attachment; filename="${conversation.title || 'conversation'}.md"`,
          },
        });
      } else {
        return NextResponse.json({
          id: conversation.id,
          title: conversation.title,
          platform: conversation.platform,
          created_at: conversation.created_at,
          updated_at: conversation.updated_at,
          messages,
        }, {
          headers: {
            'Content-Disposition': `attachment; filename="${conversation.title || 'conversation'}.json"`,
          },
        });
      }
    } else {
      // Export all conversations
      const conversations = getAllConversations(sessionId, 10000, 0);
      
      if (format === 'markdown') {
        const allMarkdown = conversations.map((conv: any) => {
          const messages = getConversation(conv.id, sessionId)?.messages || [];
          return jsonToMarkdown(conv, messages);
        }).join('\n\n---\n\n');
        
        return new NextResponse(allMarkdown, {
          headers: {
            'Content-Type': 'text/markdown',
            'Content-Disposition': 'attachment; filename="ai-memory-export-all.md"',
          },
        });
      } else {
        const data = conversations.map((conv: any) => {
          const fullConv = getConversation(conv.id, sessionId);
          return {
            id: conv.id,
            title: conv.title,
            platform: conv.platform,
            created_at: conv.created_at,
            updated_at: conv.updated_at,
            messages: fullConv?.messages || [],
          };
        });
        
        return NextResponse.json(data, {
          headers: {
            'Content-Disposition': 'attachment; filename="ai-memory-export-all.json"',
          },
        });
      }
    }
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json({ error: 'Export failed' }, { status: 500 });
  }
}
