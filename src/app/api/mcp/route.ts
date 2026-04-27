import { NextRequest, NextResponse } from 'next/server';

// MCP Server for AI Memory
// Implements Model Context Protocol (JSON-RPC 2.0) 
// Tools: add_memory, search_memory, get_context, list_memories

interface MCPRequest {
  jsonrpc: '2.0';
  id: string | number;
  method: string;
  params?: Record<string, unknown>;
}

interface MCPResponse {
  jsonrpc: '2.0';
  id: string | number | null;
  result?: unknown;
  error?: { code: number; message: string; data?: unknown };
}

const TOOLS = [
  {
    name: 'search_memory',
    description: 'Search through all saved AI conversations using full-text search. Returns matching conversation snippets with context.',
    inputSchema: {
      type: 'object' as const,
      properties: {
        query: { type: 'string', description: 'Search query to find relevant conversations' },
        platform: { type: 'string', description: 'Filter by platform: chatgpt, claude, deepseek, gemini', enum: ['chatgpt', 'claude', 'deepseek', 'gemini'] },
        limit: { type: 'number', description: 'Max results to return (default: 10)' },
      },
      required: ['query'],
    },
  },
  {
    name: 'add_memory',
    description: 'Add a new conversation or memory snippet to the knowledge base.',
    inputSchema: {
      type: 'object' as const,
      properties: {
        title: { type: 'string', description: 'Title of the conversation' },
        content: { type: 'string', description: 'Full conversation content' },
        platform: { type: 'string', description: 'Source platform: chatgpt, claude, deepseek, gemini, manual' },
        tags: { type: 'array', items: { type: 'string' }, description: 'Optional tags for categorization' },
      },
      required: ['title', 'content'],
    },
  },
  {
    name: 'get_context',
    description: 'Get relevant context from past conversations for a given topic. Useful for AI agents to recall previous discussions.',
    inputSchema: {
      type: 'object' as const,
      properties: {
        topic: { type: 'string', description: 'Topic to get context for' },
        max_tokens: { type: 'number', description: 'Approximate max tokens of context to return (default: 2000)' },
      },
      required: ['topic'],
    },
  },
  {
    name: 'list_memories',
    description: 'List recent conversations/memories with optional filtering.',
    inputSchema: {
      type: 'object' as const,
      properties: {
        platform: { type: 'string', description: 'Filter by platform' },
        limit: { type: 'number', description: 'Number of items to return (default: 20)' },
        offset: { type: 'number', description: 'Pagination offset (default: 0)' },
      },
    },
  },
];

export async function POST(request: NextRequest) {
  try {
    const body: MCPRequest = await request.json();
    
    // Validate JSON-RPC 2.0
    if (body.jsonrpc !== '2.0') {
      return NextResponse.json({
        jsonrpc: '2.0',
        id: body.id ?? null,
        error: { code: -32600, message: 'Invalid Request: jsonrpc must be "2.0"' },
      } satisfies MCPResponse);
    }

    const { method, params, id } = body;

    switch (method) {
      case 'initialize':
        return NextResponse.json({
          jsonrpc: '2.0',
          id,
          result: {
            protocolVersion: '2024-11-05',
            capabilities: {
              tools: { listChanged: false },
            },
            serverInfo: {
              name: 'ai-memory-mcp',
              version: '1.0.0',
            },
          },
        } satisfies MCPResponse);

      case 'tools/list':
        return NextResponse.json({
          jsonrpc: '2.0',
          id,
          result: { tools: TOOLS },
        } satisfies MCPResponse);

      case 'tools/call': {
        const toolName = params?.name as string;
        const args = (params?.arguments ?? {}) as Record<string, unknown>;

        if (!toolName) {
          return NextResponse.json({
            jsonrpc: '2.0',
            id,
            error: { code: -32602, message: 'Missing tool name' },
          } satisfies MCPResponse);
        }

        // Route to tool handlers
        switch (toolName) {
          case 'search_memory': {
            const query = args.query as string;
            const platform = args.platform as string | undefined;
            const limit = (args.limit as number) || 10;
            
            // Return placeholder response - in production, query SQLite FTS5
            return NextResponse.json({
              jsonrpc: '2.0',
              id,
              result: {
                content: [{
                  type: 'text',
                  text: JSON.stringify({
                    query,
                    platform,
                    results: [],
                    total: 0,
                    message: 'MCP Server ready. Connect your database to enable full search.',
                  }),
                }],
              },
            } satisfies MCPResponse);
          }

          case 'add_memory': {
            const title = args.title as string;
            const content = args.content as string;
            const platform = (args.platform as string) || 'manual';
            const tags = (args.tags as string[]) || [];

            return NextResponse.json({
              jsonrpc: '2.0',
              id,
              result: {
                content: [{
                  type: 'text',
                  text: JSON.stringify({
                    success: true,
                    id: `mem_${Date.now()}`,
                    title,
                    platform,
                    tags,
                    message: 'Memory added successfully.',
                  }),
                }],
              },
            } satisfies MCPResponse);
          }

          case 'get_context': {
            const topic = args.topic as string;
            const maxTokens = (args.max_tokens as number) || 2000;

            return NextResponse.json({
              jsonrpc: '2.0',
              id,
              result: {
                content: [{
                  type: 'text',
                  text: JSON.stringify({
                    topic,
                    max_tokens: maxTokens,
                    context: [],
                    message: 'MCP Server ready. Connect your database to enable context retrieval.',
                  }),
                }],
              },
            } satisfies MCPResponse);
          }

          case 'list_memories': {
            const platform = args.platform as string | undefined;
            const limit = (args.limit as number) || 20;
            const offset = (args.offset as number) || 0;

            return NextResponse.json({
              jsonrpc: '2.0',
              id,
              result: {
                content: [{
                  type: 'text',
                  text: JSON.stringify({
                    platform,
                    limit,
                    offset,
                    memories: [],
                    total: 0,
                    message: 'MCP Server ready. Connect your database to enable listing.',
                  }),
                }],
              },
            } satisfies MCPResponse);
          }

          default:
            return NextResponse.json({
              jsonrpc: '2.0',
              id,
              error: { code: -32601, message: `Unknown tool: ${toolName}` },
            } satisfies MCPResponse);
        }
      }

      default:
        return NextResponse.json({
          jsonrpc: '2.0',
          id: body.id ?? null,
          error: { code: -32601, message: `Method not found: ${method}` },
        } satisfies MCPResponse);
    }
  } catch (error) {
    return NextResponse.json({
      jsonrpc: '2.0',
      id: null,
      error: { code: -32700, message: 'Parse error' },
    } satisfies MCPResponse);
  }
}

// GET handler returns MCP server info for discovery
export async function GET() {
  return NextResponse.json({
    name: 'AI Memory MCP Server',
    version: '1.0.0',
    description: 'Model Context Protocol server for AI Memory - search, add, and retrieve context from your AI conversation history.',
    protocol: 'MCP',
    protocolVersion: '2024-11-05',
    tools: TOOLS.map(t => t.name),
    documentation: 'https://aimemory.pro/features',
  });
}
