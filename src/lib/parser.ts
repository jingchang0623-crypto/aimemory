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

export function parseExportFile(data: any): Conversation[] {
  const platform = detectPlatform(data);
  
  switch (platform) {
    case 'chatgpt':
      return parseChatGPTExport(data);
    case 'claude':
      return parseClaudeExport(data);
    default:
      throw new Error('Unable to detect platform. Please ensure you uploaded a valid ChatGPT or Claude export file.');
  }
}
