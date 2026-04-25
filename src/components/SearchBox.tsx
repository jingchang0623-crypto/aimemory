'use client';

import { useState, useCallback } from 'react';

interface SearchResult {
  id: string;
  title: string;
  platform: string;
  snippet: string;
  message_count: number;
  created_at: string;
}

export default function SearchBox({ onSelect }: { onSelect?: (id: string) => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return;

    setIsSearching(true);
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      setResults(data.results || []);
    } catch (err) {
      console.error('Search error:', err);
    } finally {
      setIsSearching(false);
    }
  }, [query]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex gap-2 mb-4">
        <input
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
                className="text-sm text-gray-600 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: result.snippet }}
              />
              <div className="mt-2 text-xs text-gray-500">
                {result.message_count} messages • {new Date(result.created_at).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}

      {query && !isSearching && results.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          No results found for &quot;{query}&quot;
        </p>
      )}
    </div>
  );
}
