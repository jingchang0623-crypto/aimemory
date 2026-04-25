export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string;
}

export interface Conversation {
  id: string;
  title: string;
  platform: 'chatgpt' | 'claude' | 'gemini' | 'deepseek' | 'other';
  messages: Message[];
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  summary?: string;
}

export interface SearchResult {
  conversation: Conversation;
  matchedMessages: Message[];
  relevanceScore: number;
}
