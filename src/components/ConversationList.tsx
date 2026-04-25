'use client';

import { useState, useEffect } from 'react';

interface Conversation {
  id: string;
  title: string;
  platform: string;
  message_count: number;
  created_at: string;
  updated_at: string;
}

export default function ConversationList({ 
  refreshTrigger,
  onSelect 
}: { 
  refreshTrigger?: number;
  onSelect?: (id: string) => void;
}) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await fetch('/api/search');
        const data = await response.json();
        setConversations(data.conversations || []);
      } catch (err) {
        console.error('Failed to fetch conversations:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchConversations();
  }, [refreshTrigger]);

  if (isLoading) {
    return (
      <div className="text-center py-8 text-gray-500">
        Loading conversations...
      </div>
    );
  }

  if (conversations.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No conversations yet. Upload your first AI chat export above!
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-900">
        Recent Conversations ({conversations.length})
      </h2>
      {conversations.map((conv) => (
        <div
          key={conv.id}
          className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors"
          onClick={() => onSelect?.(conv.id)}
        >
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium text-gray-900 truncate">{conv.title}</h3>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded ml-2">
              {conv.platform}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {conv.message_count} messages • {new Date(conv.updated_at).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
}
