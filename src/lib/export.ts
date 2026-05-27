import Database from 'better-sqlite3';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'aimemory.db');
const db = new Database(DB_PATH);

export function getSessionId(request: Request): string {
  // Try cookie first
  const cookieHeader = request.headers.get('cookie');
  if (cookieHeader) {
    const match = cookieHeader.match(/session_id=([^;]+)/);
    if (match) return match[1];
  }
  
  // Try session_token header (for API clients)
  const sessionToken = request.headers.get('x-session-token');
  if (sessionToken) return sessionToken;
  
  return 'public'; // Fallback
}

export function jsonToMarkdown(conversation: any, messages: any[]): string {
  let md = `# ${conversation.title || 'Untitled Conversation'}\n\n`;
  md += `**Platform**: ${conversation.platform || 'Unknown'}\n`;
  md += `**Date**: ${conversation.created_at || 'Unknown'}\n`;
  if (conversation.tags) {
    const tags = JSON.parse(conversation.tags || '[]');
    if (tags.length > 0) {
      md += `**Tags**: ${tags.join(', ')}\n`;
    }
  }
  md += `\n---\n\n`;

  for (const msg of messages) {
    const role = msg.role === 'user' ? '**User**' : '**Assistant**';
    const content = msg.content || '';
    md += `### ${role}\n\n${content}\n\n`;
  }

  return md;
}

export function getAllConversations(sessionId: string, limit = 50, offset = 0, tag?: string) {
  if (tag) {
    return db.prepare(
      `SELECT * FROM conversations 
       WHERE session_id = ? AND tags LIKE ? 
       ORDER BY updated_at DESC LIMIT ? OFFSET ?`
    ).all(sessionId, `%\"${tag}\"%`, limit, offset) as any[];
  }
  return db.prepare('SELECT * FROM conversations WHERE session_id = ? ORDER BY updated_at DESC LIMIT ? OFFSET ?').all(sessionId, limit, offset) as any[];
}
