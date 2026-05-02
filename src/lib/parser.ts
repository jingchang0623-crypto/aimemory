import { v4 as uuidv4 } from 'uuid';
import { Conversation, Message } from '@/types/conversation';

interface ChatGPTMessage {
  id: string;
  author: {
    role: string;
  };
  content: {
    content_type: string;
    parts: string[];
  };
  create_time?: number;
}

interface ChatGPTConversation {
  id: string;
  title: string;
  create_time: number;
  update_time: number;
  mapping: {
    [key: string]: {
      id: string;
      parent: string | null;
      children: string[];
      message: ChatGPTMessage | null;
    };
  };
  current_node: string;
}

interface ClaudeMessage {
  uuid: string;
  sender: 'human' | 'assistant';
  content: Array<{
    type: string;
    text: string;
  }>;
  created_at: string;
}

interface ClaudeConversation {
  uuid: string;
  name: string;
  created_at: string;
  updated_at: string;
  chat_messages: ClaudeMessage[];
}

export function detectPlatform(data: any): 'chatgpt' | 'claude' | 'unknown' {
  // ChatGPT export has 'mapping' field
  if (data.mapping && data.current_node) {
    return 'chatgpt';
  }
  // Claude export has 'chat_messages' array
  if (data.chat_messages && Array.isArray(data.chat_messages)) {
    return 'claude';
  }
  // Check if it's an array of conversations (ChatGPT bulk export)
  if (Array.isArray(data) && data.length > 0 && data[0].mapping) {
    return 'chatgpt';
  }
  return 'unknown';
}

function extractChatGPTMessages(mapping: ChatGPTConversation['mapping']): Message[] {
  const messages: Message[] = [];
  
  function traverse(nodeId: string) {
    const node = mapping[nodeId];
    if (!node) return;
    
    if (node.message && node.message.content) {
      const { role } = node.message.author;
      const parts = node.message.content.parts || [];
      const content = parts.join('\n');
      
      if (content && (role === 'user' || role === 'assistant')) {
        messages.push({
          id: node.message.id || uuidv4(),
          role: role as 'user' | 'assistant',
          content,
          timestamp: node.message.create_time 
            ? new Date(node.message.create_time * 1000).toISOString()
            : undefined
        });
      }
    }
    
    // Traverse children
    for (const childId of node.children || []) {
      traverse(childId);
    }
  }
  
  // Find root node (parent is null)
  const rootId = Object.keys(mapping).find(id => mapping[id].parent === null);
  if (rootId) {
    traverse(rootId);
  }
  
  return messages;
}

export function parseChatGPTExport(data: any): Conversation[] {
  const conversations: Conversation[] = [];
  
  // Handle single conversation
  if (data.mapping) {
    const conv = data as ChatGPTConversation;
    const messages = extractChatGPTMessages(conv.mapping);
    conversations.push({
      id: conv.id || uuidv4(),
      title: conv.title || 'Untitled Conversation',
      platform: 'chatgpt',
      messages,
      createdAt: conv.create_time 
        ? new Date(conv.create_time * 1000).toISOString()
        : new Date().toISOString(),
      updatedAt: conv.update_time
        ? new Date(conv.update_time * 1000).toISOString()
        : new Date().toISOString(),
    });
  }
  
  // Handle bulk export (array of conversations)
  if (Array.isArray(data)) {
    for (const item of data) {
      if (item.mapping) {
        const conv = item as ChatGPTConversation;
        const messages = extractChatGPTMessages(conv.mapping);
        conversations.push({
          id: conv.id || uuidv4(),
          title: conv.title || 'Untitled Conversation',
          platform: 'chatgpt',
          messages,
          createdAt: conv.create_time
            ? new Date(conv.create_time * 1000).toISOString()
            : new Date().toISOString(),
          updatedAt: conv.update_time
            ? new Date(conv.update_time * 1000).toISOString()
            : new Date().toISOString(),
        });
      }
    }
  }
  
  return conversations;
}

export function parseClaudeExport(data: any): Conversation[] {
  const conversations: Conversation[] = [];
  
  // Handle single conversation
  if (data.chat_messages) {
    const conv = data as ClaudeConversation;
    const messages: Message[] = conv.chat_messages.map(msg => ({
      id: msg.uuid,
      role: msg.sender === 'human' ? 'user' : 'assistant',
      content: msg.content.map(c => c.text).join('\n'),
      timestamp: msg.created_at,
    }));
    
    conversations.push({
      id: conv.uuid,
      title: conv.name || 'Untitled Conversation',
      platform: 'claude',
      messages,
      createdAt: conv.created_at,
      updatedAt: conv.updated_at,
    });
  }
  
  return conversations;
}

// DeepSeek export format detection and parsing
interface DeepSeekMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface DeepSeekConversation {
  id?: string;
  title?: string;
  conversation_id?: string;
  create_time?: string | number;
  update_time?: string | number;
  created_at?: string;
  updated_at?: string;
  messages?: DeepSeekMessage[];
  chat_messages?: Array<{ role: string; content: string }>;
}

function isDeepSeekExport(data: any): boolean {
  // DeepSeek exports: chat_list key, or conversations with messages/chat_messages
  if (data.chat_list && Array.isArray(data.chat_list)) return true;
  // Single conversation with messages in DeepSeek format
  if (data.messages && Array.isArray(data.messages) && data.messages.length > 0 &&
      data.messages[0].role && !data.mapping && !data.chat_messages) return true;
  // DeepSeek bulk export as array
  if (Array.isArray(data) && data.length > 0 && data[0].messages && !data[0].mapping) return true;
  return false;
}

export function parseDeepSeekExport(data: any): Conversation[] {
  const conversations: Conversation[] = [];

  function parseOne(conv: DeepSeekConversation, index?: number): Conversation {
    const rawMessages = conv.messages || conv.chat_messages || [];
    const messages: Message[] = rawMessages.map((msg, i) => ({
      id: `deepseek-${index ?? 0}-${i}`,
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content || '',
    }));

    const convId = conv.id || conv.conversation_id || uuidv4();
    const createdAt = conv.create_time || conv.created_at;
    const updatedAt = conv.update_time || conv.updated_at;

    return {
      id: convId,
      title: conv.title || 'Untitled Conversation',
      platform: 'deepseek',
      messages,
      createdAt: typeof createdAt === 'number' ? new Date(createdAt * 1000).toISOString() : (createdAt || new Date().toISOString()),
      updatedAt: typeof updatedAt === 'number' ? new Date(updatedAt * 1000).toISOString() : (updatedAt || new Date().toISOString()),
    };
  }

  // Handle chat_list wrapper
  if (data.chat_list && Array.isArray(data.chat_list)) {
    data.chat_list.forEach((conv: DeepSeekConversation, i: number) => {
      if (conv.messages || conv.chat_messages) {
        conversations.push(parseOne(conv, i));
      }
    });
    return conversations;
  }

  // Handle single conversation
  if (data.messages || data.chat_messages) {
    conversations.push(parseOne(data));
    return conversations;
  }

  // Handle array of conversations
  if (Array.isArray(data)) {
    data.forEach((item, i) => {
      if (item.messages || item.chat_messages) {
        conversations.push(parseOne(item, i));
      }
    });
  }

  return conversations;
}

// Gemini export format detection and parsing (via Google Takeout)
interface GeminiMessage {
  author?: string;
  role?: string;
  content?: string;
  text?: string;
  parts?: Array<{ text: string }>;
}

interface GeminiConversation {
  conversation_id?: string;
  id?: string;
  create_time?: string;
  update_time?: string;
  title?: string;
  events?: GeminiMessage[];
  messages?: GeminiMessage[];
  contents?: GeminiMessage[];
}

function isGeminiExport(data: any): boolean {
  // Google Takeout Gemini/Bard format
  if (data.events && Array.isArray(data.events)) return true;
  // Alternative Gemini format with contents
  if (data.contents && Array.isArray(data.contents) && data.contents.length > 0 &&
      (data.contents[0].role || data.contents[0].author)) return true;
  // Gemini conversations wrapper
  if (data.conversations && Array.isArray(data.conversations)) return true;
  return false;
}

function extractGeminiText(msg: GeminiMessage): string {
  if (msg.content) return msg.content;
  if (msg.text) return msg.text;
  if (msg.parts && Array.isArray(msg.parts)) {
    return msg.parts.map(p => p.text || '').join('\n');
  }
  return '';
}

function mapGeminiRole(msg: GeminiMessage): 'user' | 'assistant' {
  const role = (msg.author || msg.role || '').toLowerCase();
  if (role === 'user' || role === 'human') return 'user';
  return 'assistant';
}

export function parseGeminiExport(data: any): Conversation[] {
  const conversations: Conversation[] = [];

  function parseOne(conv: GeminiConversation): Conversation {
    const rawMessages = conv.events || conv.messages || conv.contents || [];
    const messages: Message[] = rawMessages
      .filter(msg => extractGeminiText(msg).trim())
      .map((msg, i) => ({
        id: `gemini-${conversations.length}-${i}`,
        role: mapGeminiRole(msg),
        content: extractGeminiText(msg),
      }));

    const convId = conv.conversation_id || conv.id || uuidv4();

    return {
      id: convId,
      title: conv.title || 'Untitled Conversation',
      platform: 'gemini',
      messages,
      createdAt: conv.create_time || new Date().toISOString(),
      updatedAt: conv.update_time || new Date().toISOString(),
    };
  }

  // Handle conversations wrapper
  if (data.conversations && Array.isArray(data.conversations)) {
    data.conversations.forEach((conv: GeminiConversation) => {
      const parsed = parseOne(conv);
      if (parsed.messages.length > 0) conversations.push(parsed);
    });
    return conversations;
  }

  // Handle single conversation
  if (data.events || data.messages || data.contents) {
    const parsed = parseOne(data);
    if (parsed.messages.length > 0) conversations.push(parsed);
    return conversations;
  }

  return conversations;
}

export function parseExportFile(data: any): Conversation[] {
  // Try DeepSeek format first (most specific)
  if (isDeepSeekExport(data)) {
    const results = parseDeepSeekExport(data);
    if (results.length > 0) return results;
  }

  // Try Gemini format
  if (isGeminiExport(data)) {
    const results = parseGeminiExport(data);
    if (results.length > 0) return results;
  }

  // Fall back to ChatGPT/Claude detection
  const platform = detectPlatform(data);
  
  switch (platform) {
    case 'chatgpt':
      return parseChatGPTExport(data);
    case 'claude':
      return parseClaudeExport(data);
    default:
      throw new Error('Unable to detect platform. Supported formats: ChatGPT (JSON), Claude (JSON), DeepSeek (JSON), Gemini (JSON via Google Takeout). Please ensure you uploaded a valid export file.');
  }
}
