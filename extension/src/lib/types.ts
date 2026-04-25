export interface Conversation {
  id: string;
  platform: 'chatgpt' | 'claude' | 'deepseek' | 'gemini';
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
  tags: string[];
  url?: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export interface SearchResult {
  conversation: Conversation;
  matchedMessages: Message[];
  score: number;
}

export interface StorageStats {
  conversationCount: number;
  messageCount: number;
  platformCounts: Record<string, number>;
}

export type Platform = 'chatgpt' | 'claude' | 'deepseek' | 'gemini';

export interface CaptureEvent {
  type: 'CONVERSATION_CAPTURED';
  platform: Platform;
  data: {
    conversationId: string;
    title: string;
    messages: Array<{ role: string; content: string; timestamp?: number }>;
    url: string;
  };
}
