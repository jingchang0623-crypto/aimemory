import { NextRequest, NextResponse } from 'next/server';

// MCP endpoint: only operates on the caller's session, not 'public'
function getSessionId(request: NextRequest): string {
  const cookie = request.cookies.get('aim_session');
  return cookie?.value || '';
}

// Simple MCP info endpoint — no data exposure
export async function GET() {
  return NextResponse.json({
    name: 'aimemory-mcp',
    version: '1.1.0',
    protocolVersion: '2024-11-05',
    capabilities: { tools: true },
    endpoint: 'https://aimemory.pro/api/mcp',
    docs: 'https://aimemory.pro/docs/mcp',
  });
}

export async function POST(request: NextRequest) {
  let id: string | number | null = null;
  try {
    const sessionId = getSessionId(request);
    if (!sessionId) {
      return NextResponse.json({
        jsonrpc: '2.0',
        error: { code: -32001, message: 'No session. Upload data first via https://aimemory.pro' },
        id: null,
      });
    }

    // Dynamic import to avoid build-time issues
    const { default: db, searchConversations, getAllConversations, getConversation, deleteSession } = await import('@/lib/db');

    const body = await request.json();
    const { method, id: reqId, params } = body;
    id = reqId ?? null;

    if (method === 'initialize') {
      return NextResponse.json({
        jsonrpc: '2.0',
        id,
        result: {
          protocolVersion: '2024-11-05',
          serverInfo: { name: 'aimemory-mcp', version: '1.1.0' },
          capabilities: { tools: {} },
        },
      });
    }

    if (method === 'notifications/initialized') {
      return new NextResponse(null, { status: 204 });
    }

    if (method === 'tools/list') {
      return NextResponse.json({
        jsonrpc: '2.0',
        id,
        result: {
          tools: [
            {
              name: 'search_memory',
              description: 'Full-text search across all your AI conversations. Returns matching conversations with highlighted snippets.',
              inputSchema: {
                type: 'object',
                properties: {
                  query: { type: 'string', description: 'Search query (supports FTS5 syntax: AND, OR, NOT, phrases in quotes)' },
                  platform: { type: 'string', enum: ['chatgpt', 'claude', 'deepseek', 'gemini', 'other'], description: 'Filter by platform' },
                  limit: { type: 'number', default: 10, description: 'Max results to return (1-50)' },
                },
                required: ['query'],
              },
            },
            {
              name: 'add_memory',
              description: 'Add a new conversation or note to your memory store',
              inputSchema: {
                type: 'object',
                properties: {
                  title: { type: 'string', description: 'Conversation title' },
                  content: { type: 'string', description: 'Conversation content or message text' },
                  platform: { type: 'string', default: 'other', description: 'Source platform (chatgpt, claude, deepseek, gemini, other)' },
                },
                required: ['title', 'content'],
              },
            },
            {
              name: 'get_context',
              description: 'Get relevant context snippets for a topic, useful for providing AI assistants with conversation history',
              inputSchema: {
                type: 'object',
                properties: {
                  topic: { type: 'string', description: 'Topic to find context for' },
                  max_tokens: { type: 'number', default: 2000, description: 'Approximate token budget for returned context' },
                },
                required: ['topic'],
              },
            },
            {
              name: 'list_memories',
              description: 'List recent conversations with optional platform filtering',
              inputSchema: {
                type: 'object',
                properties: {
                  limit: { type: 'number', default: 10, description: 'Max conversations to return (1-100)' },
                  platform: { type: 'string', enum: ['chatgpt', 'claude', 'deepseek', 'gemini', 'other'], description: 'Filter by platform' },
                },
              },
            },
            {
              name: 'get_conversation',
              description: 'Retrieve a full conversation with all messages by ID',
              inputSchema: {
                type: 'object',
                properties: {
                  conversation_id: { type: 'string', description: 'The conversation ID to retrieve' },
                },
                required: ['conversation_id'],
              },
            },
            {
              name: 'delete_memory',
              description: 'Delete a specific conversation or all data for your session',
              inputSchema: {
                type: 'object',
                properties: {
                  conversation_id: { type: 'string', description: 'Delete a specific conversation by ID. Omit to delete ALL your data.' },
                  confirm: { type: 'boolean', default: false, description: 'Must be true for bulk deletion (no conversation_id)' },
                },
              },
            },
          ],
        },
      });
    }

    if (method !== 'tools/call') {
      return NextResponse.json({
        jsonrpc: '2.0',
        id,
        error: { code: -32601, message: `Method not found: ${method}` },
      });
    }

    const toolName = params?.name as string;
    const args = (params?.arguments ?? {}) as Record<string, unknown>;

    if (!toolName) {
      return NextResponse.json({
        jsonrpc: '2.0',
        id,
        error: { code: -32602, message: 'Missing tool name' },
      });
    }

    switch (toolName) {
      case 'search_memory': {
        const query = args.query as string;
        const platform = args.platform as string | undefined;
        const limit = Math.min(Math.max((args.limit as number) || 10, 1), 50);
        if (!query || typeof query !== 'string') {
          return NextResponse.json({
            jsonrpc: '2.0', id,
            error: { code: -32602, message: 'query is required and must be a string' },
          });
        }
        try {
          let results = searchConversations(query, sessionId, limit * 2);
          if (platform) {
            results = results.filter((r: { platform: string }) => r.platform?.toLowerCase() === platform.toLowerCase());
          }
          results = results.slice(0, limit);
          const formatted = results.map((r: { id: string; title: string; platform: string; snippet?: string; updated_at: string }) => ({
            id: r.id, title: r.title, platform: r.platform,
            snippet: r.snippet?.replace(/<[^>]*>/g, '') || '',
            updated_at: r.updated_at,
          }));
          return NextResponse.json({
            jsonrpc: '2.0', id,
            result: { content: [{ type: 'text', text: JSON.stringify({ results: formatted, total: formatted.length }) }] },
          });
        } catch (e) {
          return NextResponse.json({
            jsonrpc: '2.0', id,
            result: { isError: true, content: [{ type: 'text', text: JSON.stringify({ error: 'Search failed', details: e instanceof Error ? e.message : 'Unknown error' }) }] },
          });
        }
      }

      case 'add_memory': {
        const title = args.title as string;
        const content = args.content as string;
        const platform = (args.platform as string) || 'other';
        if (!title || !content) {
          return NextResponse.json({
            jsonrpc: '2.0', id,
            error: { code: -32602, message: 'title and content are required' },
          });
        }
        try {
          const { v4: genId } = await import('uuid');
          const convId = genId();
          const now = new Date().toISOString();
          db.prepare(`INSERT INTO conversations (id, session_id, title, platform, created_at, updated_at, message_count) VALUES (?, ?, ?, ?, ?, ?, ?)`)
            .run(convId, sessionId, title, platform, now, now, 1);
          db.prepare(`INSERT INTO messages (id, conversation_id, role, content, timestamp) VALUES (?, ?, ?, ?, ?)`)
            .run(genId(), convId, 'user', content, now);
          return NextResponse.json({
            jsonrpc: '2.0', id,
            result: { content: [{ type: 'text', text: JSON.stringify({ success: true, id: convId, title }) }] },
          });
        } catch (e) {
          return NextResponse.json({
            jsonrpc: '2.0', id,
            result: { isError: true, content: [{ type: 'text', text: JSON.stringify({ error: e instanceof Error ? e.message : 'Failed to add memory' }) }] },
          });
        }
      }

      case 'get_context': {
        const topic = args.topic as string;
        const maxTokens = Math.min(Math.max((args.max_tokens as number) || 2000, 100), 10000);
        if (!topic || typeof topic !== 'string') {
          return NextResponse.json({
            jsonrpc: '2.0', id,
            error: { code: -32602, message: 'topic is required and must be a string' },
          });
        }
        try {
          const results = searchConversations(topic, sessionId, 5);
          const totalChars = maxTokens * 4;
          let usedChars = 0;
          const context: Array<{ title: string; platform: string; snippet: string }> = [];
          for (const r of results as Array<{ title: string; platform: string; snippet?: string }>) {
            const snippet = (r.snippet || '').replace(/<[^>]*>/g, '');
            if (usedChars + snippet.length > totalChars) {
              const remaining = totalChars - usedChars;
              if (remaining > 100) {
                context.push({ title: r.title, platform: r.platform, snippet: snippet.slice(0, remaining) + '...' });
              }
              break;
            }
            context.push({ title: r.title, platform: r.platform, snippet });
            usedChars += snippet.length;
          }
          return NextResponse.json({
            jsonrpc: '2.0', id,
            result: { content: [{ type: 'text', text: JSON.stringify({ topic, context, sourcesUsed: context.length }) }] },
          });
        } catch (e) {
          return NextResponse.json({
            jsonrpc: '2.0', id,
            result: { isError: true, content: [{ type: 'text', text: JSON.stringify({ error: 'Context retrieval failed', details: e instanceof Error ? e.message : 'Unknown error' }) }] },
          });
        }
      }

      case 'list_memories': {
        const limit = Math.min(Math.max((args.limit as number) || 10, 1), 100);
        const platform = args.platform as string | undefined;
        try {
          let conversations = getAllConversations(sessionId, limit * (platform ? 2 : 1), 0);
          if (platform) {
            conversations = conversations.filter((c: { platform: string }) => c.platform?.toLowerCase() === platform.toLowerCase());
          }
          conversations = conversations.slice(0, limit);
          const formatted = conversations.map((c: { id: string; title: string; platform: string; created_at: string; message_count: number }) => ({
            id: c.id, title: c.title, platform: c.platform,
            created_at: c.created_at, message_count: c.message_count,
          }));
          return NextResponse.json({
            jsonrpc: '2.0', id,
            result: { content: [{ type: 'text', text: JSON.stringify({ conversations: formatted, total: formatted.length }) }] },
          });
        } catch (e) {
          return NextResponse.json({
            jsonrpc: '2.0', id,
            result: { isError: true, content: [{ type: 'text', text: JSON.stringify({ error: 'Failed to list memories', details: e instanceof Error ? e.message : 'Unknown error' }) }] },
          });
        }
      }

      case 'get_conversation': {
        const conversationId = args.conversation_id as string;
        if (!conversationId) {
          return NextResponse.json({
            jsonrpc: '2.0', id,
            error: { code: -32602, message: 'conversation_id is required' },
          });
        }
        try {
          const conv = getConversation(conversationId, sessionId);
          if (!conv) {
            return NextResponse.json({
              jsonrpc: '2.0', id,
              result: { isError: true, content: [{ type: 'text', text: JSON.stringify({ error: 'Conversation not found' }) }] },
            });
          }
          return NextResponse.json({
            jsonrpc: '2.0', id,
            result: { content: [{ type: 'text', text: JSON.stringify({ conversation: conv }) }] },
          });
        } catch (e) {
          return NextResponse.json({
            jsonrpc: '2.0', id,
            result: { isError: true, content: [{ type: 'text', text: JSON.stringify({ error: 'Failed to get conversation', details: e instanceof Error ? e.message : 'Unknown error' }) }] },
          });
        }
      }

      case 'delete_memory': {
        const conversationId = args.conversation_id as string | undefined;
        const confirm = args.confirm as boolean | undefined;
        try {
          if (conversationId) {
            // Delete specific conversation (session-scoped)
            const conv = db.prepare('SELECT id FROM conversations WHERE id = ? AND session_id = ?').get(conversationId, sessionId) as { id: string } | undefined;
            if (!conv) {
              return NextResponse.json({
                jsonrpc: '2.0', id,
                result: { isError: true, content: [{ type: 'text', text: JSON.stringify({ error: 'Conversation not found or access denied' }) }] },
              });
            }
            db.prepare('DELETE FROM messages WHERE conversation_id = ?').run(conversationId);
            db.prepare('DELETE FROM conversations WHERE id = ? AND session_id = ?').run(conversationId, sessionId);
            return NextResponse.json({
              jsonrpc: '2.0', id,
              result: { content: [{ type: 'text', text: JSON.stringify({ success: true, deleted: conversationId }) }] },
            });
          } else if (confirm) {
            // Delete all session data
            deleteSession(sessionId);
            return NextResponse.json({
              jsonrpc: '2.0', id,
              result: { content: [{ type: 'text', text: JSON.stringify({ success: true, message: 'All session data deleted' }) }] },
            });
          } else {
            return NextResponse.json({
              jsonrpc: '2.0', id,
              error: { code: -32602, message: 'Specify conversation_id to delete one, or set confirm=true to delete all' },
            });
          }
        } catch (e) {
          return NextResponse.json({
            jsonrpc: '2.0', id,
            result: { isError: true, content: [{ type: 'text', text: JSON.stringify({ error: 'Delete failed', details: e instanceof Error ? e.message : 'Unknown error' }) }] },
          });
        }
      }

      default:
        return NextResponse.json({
          jsonrpc: '2.0', id,
          error: { code: -32601, message: `Unknown tool: ${toolName}` },
        });
    }
  } catch (error) {
    console.error('MCP error:', error);
    return NextResponse.json({
      jsonrpc: '2.0',
      id,
      error: { code: -32603, message: error instanceof Error ? error.message : 'Internal error' },
    });
  }
}
