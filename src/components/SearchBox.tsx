'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

interface SearchResult {
  id: string;
  title: string;
  platform: string;
  snippet: string;
  message_count: number;
  created_at: string;
}

// Sanitize FTS5 snippet: only allow <mark> tags, escape everything else
function sanitizeSnippet(html: string): string {
  // First escape all HTML entities
  const escaped = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  // Then restore the <mark> tags that FTS5 inserts
  return escaped
    .replace(/&lt;mark&gt;/g, '<mark>')
    .replace(/&lt;\/mark&gt;/g, '</mark>');
}

export default function SearchBox({ onSelect }: { onSelect?: (id: string) => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return;
    setIsSearching(true);
    setError(null);
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || 'Search failed');
        setResults([]);
      } else {
        setResults(data.results || []);
      }
    } catch (err) {
      setError('Network error — please try again');
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [query]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  }, [handleSearch]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex gap-2 mb-4">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search your AI conversations..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleSearch}
          disabled={isSearching || !query.trim()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-gray-600">
            Found {results.length} result{results.length !== 1 ? 's' : ''}
          </p>
          {results.map((result) => (
            <div
              key={result.id}
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors"
              onClick={() => onSelect?.(result.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{result.title}</h3>
                <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                  {result.platform}
                </span>
              </div>
              <p
                className="text-sm text-gray-600 line-clamp-2 [&_mark]:bg-yellow-200 [&_mark]:text-gray-900 [&_mark]:rounded [&_mark]:px-0.5"
                dangerouslySetInnerHTML={{ __html: sanitizeSnippet(result.snippet) }}
              />
              <div className="mt-2 text-xs text-gray-500">
                {result.message_count} messages • {new Date(result.created_at).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}

      {query && !isSearching && results.length === 0 && !error && (
        <p className="text-center text-gray-500 py-8">
          No results found for &quot;{query}&quot;
        </p>
      )}
    </div>
  );
}
