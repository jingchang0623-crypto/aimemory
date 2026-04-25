import { v4 as uuidv4 } from 'uuid';
import { Conversation, Message } from '@/types/conversation';

/**
 * Parse ChatMemo-style TXT export files
 * Supports multiple common formats:
 * 1. [User] / [Assistant] markers
 * 2. User: / Assistant: prefixes
 * 3. Human: / AI: prefixes
 * 4. Timestamps in brackets
 */

interface ParsedMessage {
  role: 'user' | 'assistant';
  content: string;
}

// Try to detect and parse different TXT formats
function parseTxtContent(content: string): ParsedMessage[] {
  const messages: ParsedMessage[] = [];
  const lines = content.split('\n');
  
  let currentRole: 'user' | 'assistant' | null = null;
  let currentContent: string[] = [];

  // Pattern 1: [User] / [Assistant] / [Human] / [AI]
  const bracketPattern = /^\[(User|Assistant|Human|AI|System)\]\s*$/i;
  // Pattern 2: User: / Assistant: / Human: / AI: at start of line
  const prefixPattern = /^(User|Assistant|Human|AI|System):\s*/i;
  // Pattern 3: ---User--- / ---Assistant---
  const dividerPattern = /^---\s*(User|Assistant|Human|AI)\s*---\s*$/i;
  // Pattern 4: 【User】/ 【Assistant】
  const chineseBracketPattern = /^【(User|Assistant|Human|AI|用户|助手)】\s*$/;

  function flushMessage() {
    if (currentRole && currentContent.length > 0) {
      messages.push({
        role: currentRole,
        content: currentContent.join('\n').trim(),
      });
    }
    currentContent = [];
  }

  for (const line of lines) {
    let matched = false;
    let detectedRole: string | null = null;

    // Try bracket pattern
    const bracketMatch = line.match(bracketPattern);
    if (bracketMatch) {
      detectedRole = bracketMatch[1];
      matched = true;
    }

    // Try divider pattern
    if (!matched) {
      const dividerMatch = line.match(dividerPattern);
      if (dividerMatch) {
        detectedRole = dividerMatch[1];
        matched = true;
      }
    }

    // Try Chinese bracket pattern
    if (!matched) {
      const chineseMatch = line.match(chineseBracketPattern);
      if (chineseMatch) {
        const role = chineseMatch[1];
        detectedRole = (role === '用户') ? 'User' : (role === '助手') ? 'Assistant' : role;
        matched = true;
      }
    }

    // Try prefix pattern
    if (!matched) {
      const prefixMatch = line.match(prefixPattern);
      if (prefixMatch) {
        detectedRole = prefixMatch[1];
        flushMessage();
        currentRole = (detectedRole.toLowerCase() === 'user' || detectedRole.toLowerCase() === 'human') 
          ? 'user' 
          : 'assistant';
        const remaining = line.replace(prefixPattern, '').trim();
        if (remaining) {
          currentContent.push(remaining);
        }
        continue;
      }
    }

    if (matched && detectedRole) {
      flushMessage();
      currentRole = (detectedRole.toLowerCase() === 'user' || detectedRole.toLowerCase() === 'human') 
        ? 'user' 
        : 'assistant';
      continue;
    }

    // Regular content line
    if (currentRole) {
      currentContent.push(line);
    }
  }

  flushMessage();
  return messages;
}

// Extract title from filename or first line
function extractTitle(content: string, filename?: string): string {
  // Try filename first
  if (filename) {
    const nameWithoutExt = filename.replace(/\.(txt|text|md)$/i, '').trim();
    if (nameWithoutExt && nameWithoutExt !== 'conversation' && nameWithoutExt !== 'chat') {
      return nameWithoutExt;
    }
  }
  
  // Try first non-empty line
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('[') && !trimmed.startsWith('---') && trimmed.length > 3) {
      return trimmed.substring(0, 100);
    }
  }
  
  return 'Imported Conversation';
}

export function parseTxtExport(content: string, filename?: string): Conversation[] {
  const messages = parseTxtContent(content);
  
  if (messages.length === 0) {
    throw new Error('No messages found in the file. Please ensure it follows a supported format:\n' +
      '- [User] / [Assistant] markers\n' +
      '- User: / Assistant: prefixes\n' +
      '- Human: / AI: prefixes');
  }

  const title = extractTitle(content, filename);
  
  return [{
    id: uuidv4(),
    title,
    platform: 'other',
    messages: messages.map(m => ({
      id: uuidv4(),
      role: m.role,
      content: m.content,
    })),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }];
}
