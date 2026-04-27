import { NextRequest, NextResponse } from 'next/server';

// MCP endpoint: only operates on the caller's session, not 'public'
function getSessionId(request: NextRequest): string {
  const cookie = request.cookies.get('aim_session');
  return cookie?.value || '';
}

// Simple MCP info endpoint — no data exposure
export async function GET(request: NextRequest) {
  return NextResponse.json({
    jsonrpc: '2.0',
    result: {
      protocolVersion: '2024-11-05',
      serverInfo: {
        name: 'aimemory-mcp',
        version: '1.0.0',
      },
      capabilities: {
        tools: {},
      },
    },
  });
}

export async function POST(request: NextRequest) {
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
    const { default: db, searchConversations, getAllConversations, getConversationCount } = await import('@/lib/db');

    const body = await request.json();
    const { method, id, params } = body;

    if (method === 'initialize') {
      return NextResponse.json({
        jsonrpc: '2.0',
        id,
        result: {
          protocolVersion: '2024-11-05',
          serverInfo: { name: 'aimemory-mcp', version: '1.0.0' },
          capabilities: { tools: {} },
        },
      });
    }

    if (method === 'notifications/initialized') {
      return NextResponse.json({ jsonrpc: '2.0' });
    }

    if (method === 'tools/list') {
      return NextResponse.json({
        jsonrpc: '2.0',
        id,
        result: {
          tools: [
            {
              name: 'search_memory',
              description: 'Search across all your AI conversations',
              inputSchema: {
                type: 'object',
                properties: {
                  query: { type: 'string', description: 'Search query' },
                  platform: { type: 'string', enum: ['chatgpt', 'claude', 'deepseek', 'gemini', 'other'] },
                  limit: { type: 'number', default: 10 },
                },
                required: ['query'],
              },
            },
            {
              name: 'add_memory',
              description: 'Add a new conversation to your memory',
              inputSchema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  content: { type: 'string' },
                  platform: { type: 'string', default: 'other' },
                },
                required: ['title', 'content'],
              },
            },
            {
              name: 'get_context',
              description: 'Get relevant context for a topic from your AI history',
              inputSchema: {
                type: 'object',
                properties: {
                  topic: { type: 'string' },
                  max_tokens: { type: 'number', default: 2000 },
                },
                required: ['topic'],
              },
            },
            {
              name: 'list_memories',
              description: 'List your recent conversations',
              inputSchema: {
                type: 'object',
                properties: {
                  limit: { type: 'number', default: 10 },
                  platform: { type: 'string' },
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
        const limit = (args.limit as number) || 10;
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
            result: { content: [{ type: 'text', text: JSON.stringify({ results: [], total: 0, error: 'Search failed' }) }] },
          });
        }
      }

      case 'add_memory': {
        const title = args.title as string;
        const content = args.content as string;
        const platform = (args.platform as string) || 'other';
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
            error: { code: -32000, message: e instanceof Error ? e.message : 'Failed to add memory' },
          });
        }
      }

      case 'get_context': {
        const topic = args.topic as string;
        const maxTokens = (args.max_tokens as number) || 2000;
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
            result: { content: [{ type: 'text', text: JSON.stringify({ topic: args.topic, context: [], sourcesUsed: 0 }) }] },
          });
        }
      }

      case 'list_memories': {
        const limit = (args.limit as number) || 10;
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
            result: { content: [{ type: 'text', text: JSON.stringify({ conversations: [], total: 0 }) }] },
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
      error: { code: -32603, message: error instanceof Error ? error.message : 'Internal error' },
    });
  }
}
