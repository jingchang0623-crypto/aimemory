'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TagManager from '@/components/TagManager';

interface TagWithCount {
  tag: string;
  count: number;
}

export default function TagsPageContent() {
  const [tags, setTags] = useState<TagWithCount[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [tagConversations, setTagConversations] = useState<any[]>([]);
  const [isLoadingConversations, setIsLoadingConversations] = useState(false);

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/tags');
      const data = await response.json();
      if (data.success) {
        setTags(data.tags);
      } else {
        setError('Failed to load tags');
      }
    } catch (err) {
      setError('Failed to load tags');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTagClick = async (tag: string) => {
    setSelectedTag(tag);
    setIsLoadingConversations(true);
    try {
      const response = await fetch(`/api/search?tag=${encodeURIComponent(tag)}&limit=50`);
      const data = await response.json();
      if (data.success) {
        setTagConversations(data.conversations);
      }
    } catch (err) {
      console.error('Failed to fetch conversations for tag:', err);
    } finally {
      setIsLoadingConversations(false);
    }
  };

  const handleClosePanel = () => {
    setSelectedTag(null);
    setTagConversations([]);
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/" className="text-3xl font-bold text-gray-900 hover:opacity-80">
            🧠 AI Memory
          </Link>
          <p className="text-gray-600 mt-1">
            Organize your AI conversations with tags
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tag Management</h1>
          <p className="text-gray-600">
            Organize and filter your AI conversations with custom tags. Click a tag to see all conversations with that tag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tags List */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                All Tags ({tags.length})
              </h2>

              {isLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Loading tags...</p>
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              ) : tags.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm mb-4">No tags yet.</p>
                  <p className="text-xs text-gray-400">
                    Tags are added to conversations when you upload them or edit conversation details.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {tags.map(({ tag, count }) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors ${
                        selectedTag === tag ? 'bg-blue-50 border border-blue-200' : ''
                      }`}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">{tag}</span>
                      </span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                        {count}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tag Stats */}
            {tags.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Statistics</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Total tags:</span>
                    <span className="font-medium">{tags.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total uses:</span>
                    <span className="font-medium">
                      {tags.reduce((sum, t) => sum + t.count, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Most used:</span>
                    <span className="font-medium">
                      {tags[0]?.tag || 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Conversations Panel */}
          <div className="lg:col-span-2">
            {selectedTag ? (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Conversations tagged &quot;{selectedTag}&quot;
                  </h2>
                  <button
                    onClick={handleClosePanel}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    ✕ Close
                  </button>
                </div>

                {isLoadingConversations ? (
                  <div className="text-center py-8">
                    <div className="animate-spin h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Loading conversations...</p>
                  </div>
                ) : tagConversations.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500 text-sm">No conversations found with this tag.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {tagConversations.map((conv) => (
                      <Link
                        key={conv.id}
                        href={`/conversation/${conv.id}`}
                        className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-sm font-medium text-gray-900 mb-1">
                              {conv.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded ${getPlatformColor(conv.platform)}`}>
                                {conv.platform}
                              </span>
                              <span>{conv.message_count} messages</span>
                              <span>•</span>
                              <span>{new Date(conv.updated_at).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        {conv.summary && (
                          <p className="text-xs text-gray-600 mt-2 italic line-clamp-2">
                            {conv.summary}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                )}

                {tagConversations.length > 0 && (
                  <div className="mt-4 text-center">
                    <Link
                      href={`/search?tag=${encodeURIComponent(selectedTag)}`}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      View all conversations with &quot;{selectedTag}&quot; →
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
                <div className="text-4xl mb-4">🏷️</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a tag</h3>
                <p className="text-gray-500 text-sm">
                  Click on a tag from the list to see all conversations with that tag.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* How to Use Tags */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Use Tags</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <div className="font-medium text-gray-900 mb-1">1. Add Tags to Conversations</div>
              <p>Open any conversation and use the tag manager to add custom tags like &quot;work&quot;, &quot;coding&quot;, or &quot;research&quot;.</p>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-1">2. Browse by Tag</div>
              <p>Click on any tag in this page to see all conversations with that tag.</p>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-1">3. Filter Search Results</div>
              <p>Use the search page with tag filters to find exactly what you need.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-gray-900">
              🧠 AI Memory
            </Link>
            <div className="flex gap-4 text-sm text-gray-500">
              <Link href="/features" className="hover:text-gray-700">Features</Link>
              <Link href="/pricing" className="hover:text-gray-700">Pricing</Link>
              <Link href="/chrome-extension" className="hover:text-gray-700">Extension</Link>
              <Link href="/mcp-server" className="hover:text-gray-700">MCP Server</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
