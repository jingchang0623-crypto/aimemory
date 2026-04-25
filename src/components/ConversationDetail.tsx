'use client';

import { useState, useEffect } from 'react';

interface Message {
  id: string;
  role: string;
  content: string;
  timestamp: string | null;
}

interface Conversation {
  id: string;
  title: string;
  platform: string;
  created_at: string;
  messages: Message[];
}

export default function ConversationDetail({ 
  conversationId,
  onClose 
}: { 
  conversationId: string;
  onClose?: () => void;
}) {
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        const response = await fetch(`/api/conversations/${conversationId}`);
        const data = await response.json();
        setConversation(data.conversation);
      } catch (err) {
        console.error('Failed to fetch conversation:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchConversation();
  }, [conversationId]);

  if (isLoading) {
    return (
      <div className="text-center py-8 text-gray-500">
        Loading conversation...
      </div>
    );
  }

  if (!conversation) {
    return (
      <div className="text-center py-8 text-gray-500">
        Conversation not found
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-gray-900">{conversation.title}</h2>
            <p className="text-sm text-gray-500">
              {conversation.platform} • {conversation.messages.length} messages
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
        {conversation.messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.content}</div>
              {msg.timestamp && (
                <div
                  className={`text-xs mt-2 ${
                    msg.role === 'user' ? 'text-blue-200' : 'text-gray-500'
                  }`}
                >
                  {new Date(msg.timestamp).toLocaleString()}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
