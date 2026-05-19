'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import TagManager from '@/components/TagManager';

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
  updated_at: string;
  tags: string;
  summary: string | null;
  message_count: number;
  messages: Message[];
}

export default function ConversationPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchConversation = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/conversations/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to load conversation');
        }

        setConversation(data.conversation);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load conversation');
      } finally {
        setIsLoading(false);
      }
    };

    fetchConversation();
  }, [id]);

  const handleTagsChange = (newTags: string[]) => {
    if (conversation) {
      setConversation({ ...conversation, tags: JSON.stringify(newTags) });
    }
  };

  const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
      chatgpt: 'bg-green-100 text-green-700',
      claude: 'bg-purple-100 text-purple-700',
      gemini: 'bg-blue-100 text-blue-700',
      deepseek: 'bg-orange-100 text-orange-700',
      kimi: 'bg-pink-100 text-pink-700',
    };
    return colors[platform] || 'bg-gray-100 text-gray-700';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center py-16">
            <div className="animate-spin h-8 w-8 border-2 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-gray-500">Loading conversation...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center py-16">
            <p className="text-red-600 mb-4">{error}</p>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!conversation) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center py-16">
            <p className="text-gray-500 mb-4">Conversation not found</p>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const parsedTags = (() => {
    try {
      return JSON.parse(conversation.tags || '[]');
    } catch {
      return [];
    }
  })();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          ← Back to all conversations
        </Link>

        {/* Conversation card */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {conversation.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getPlatformColor(conversation.platform)}`}>
                {conversation.platform}
              </span>
              <span>{conversation.messages.length} messages</span>
              <span>•</span>
              <span>{new Date(conversation.created_at).toLocaleDateString()}</span>
            </div>

            {/* Tags section */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <TagManager
                conversationId={id}
                initialTags={parsedTags}
                onTagsChange={handleTagsChange}
              />
            </div>

            {/* Summary */}
            {conversation.summary && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">
                  {conversation.summary}
                </p>
              </div>
            )}
          </div>

          {/* Messages */}
          <div className="p-6 space-y-4">
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
                  <div className="text-xs font-medium mb-1 opacity-70">
                    {msg.role === 'user' ? 'You' : 'Assistant'}
                  </div>
                  <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
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
      </div>
    </div>
  );
}
