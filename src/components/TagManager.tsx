'use client';

import { useState, useEffect, useRef } from 'react';

interface TagManagerProps {
  conversationId: string;
  initialTags?: string[];
  onTagsChange?: (tags: string[]) => void;
  variant?: 'full' | 'compact';
}

export default function TagManager({
  conversationId,
  initialTags = [],
  onTagsChange,
  variant = 'full',
}: TagManagerProps) {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [allTags, setAllTags] = useState<{ tag: string; count: number }[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch all tags for autocomplete
  useEffect(() => {
    const fetchAllTags = async () => {
      try {
        const response = await fetch('/api/tags');
        const data = await response.json();
        if (data.success) {
          setAllTags(data.tags);
        }
      } catch (err) {
        console.error('Failed to fetch tags:', err);
      }
    };
    fetchAllTags();
  }, []);

  // Sync with initialTags prop
  useEffect(() => {
    setTags(initialTags);
  }, [initialTags]);

  const saveTags = async (newTags: string[]) => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/tags', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversationId, tags: newTags }),
      });
      const data = await response.json();
      if (data.success) {
        setTags(data.tags);
        onTagsChange?.(data.tags);
      }
    } catch (err) {
      console.error('Failed to save tags:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const addTag = (tag: string) => {
    const trimmed = tag.trim();
    if (!trimmed || tags.includes(trimmed)) return;
    if (tags.length >= 10) return;
    const newTags = [...tags, trimmed];
    saveTags(newTags);
    setInputValue('');
  };

  const removeTag = (tag: string) => {
    const newTags = tags.filter(t => t !== tag);
    saveTags(newTags);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setInputValue('');
    }
  };

  // Suggested tags (existing tags not yet applied)
  const suggestions = allTags
    .filter(t => !tags.includes(t.tag))
    .filter(t => t.tag.toLowerCase().includes(inputValue.toLowerCase()))
    .slice(0, 5);

  // Compact variant for list view
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap gap-1 mt-1">
        {tags.slice(0, 3).map(tag => (
          <span
            key={tag}
            className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded"
          >
            {tag}
          </span>
        ))}
        {tags.length > 3 && (
          <span className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
            +{tags.length - 3}
          </span>
        )}
      </div>
    );
  }

  // Full variant for detail view
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Tags:</span>
        {isSaving && <span className="text-xs text-gray-400">saving...</span>}
      </div>
      
      <div className="flex flex-wrap gap-2 items-center">
        {tags.map(tag => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 text-sm px-2 py-1 bg-blue-100 text-blue-700 rounded-full"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="hover:text-blue-900"
              aria-label={`Remove tag ${tag}`}
            >
              ×
            </button>
          </span>
        ))}
        
        {isEditing || tags.length === 0 ? (
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsEditing(true)}
              onBlur={() => {
                if (inputValue.trim()) {
                  addTag(inputValue);
                }
                setTimeout(() => setIsEditing(false), 200);
              }}
              placeholder={tags.length === 0 ? 'Add tags...' : ''}
              className="text-sm px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 w-32"
              maxLength={30}
            />
            
            {/* Suggestions dropdown */}
            {isEditing && suggestions.length > 0 && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10 min-w-32">
                {suggestions.map(s => (
                  <button
                    key={s.tag}
                    onMouseDown={e => {
                      e.preventDefault();
                      addTag(s.tag);
                    }}
                    className="w-full text-left text-sm px-2 py-1 hover:bg-gray-100 flex justify-between"
                  >
                    <span>{s.tag}</span>
                    <span className="text-gray-400 text-xs">{s.count}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-sm px-2 py-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
          >
            + Add tag
          </button>
        )}
      </div>
      
      <p className="text-xs text-gray-400">
        Press Enter to add. Max 10 tags, 30 chars each.
      </p>
    </div>
  );
}
