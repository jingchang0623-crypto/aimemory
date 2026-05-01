'use client';

import { useState, useCallback } from 'react';

interface UploadResult {
  success: boolean;
  conversations: number;
  messages: number;
}

export default function FileUpload({ onUploadComplete }: { onUploadComplete?: () => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<UploadResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = useCallback(async (file: File) => {
    setIsUploading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Server error: ${response.status}`);
      }

      setResult(data);
      onUploadComplete?.();
    } catch (err) {
      console.error('Upload error:', err);
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setIsUploading(false);
    }
  }, [onUploadComplete]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      const ext = file.name.toLowerCase();
      if (ext.endsWith('.json') || ext.endsWith('.txt') || ext.endsWith('.zip') || ext.endsWith('.md')) {
        handleUpload(file);
      } else {
        setError('Please upload a .json, .txt, or .zip file');
      }
    }
  }, [handleUpload]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpload(file);
    }
  }, [handleUpload]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="text-6xl mb-4">📤</div>
        <h3 className="text-xl font-semibold mb-2">
          Upload AI Chat Export
        </h3>
        <p className="text-gray-600 mb-4">
          Drop your export file here, or click to browse
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
            ChatGPT JSON
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
            Claude JSON
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
            ChatMemo TXT
          </span>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
            ZIP Archive
          </span>
        </div>
        
        <label className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
          {isUploading ? 'Uploading...' : 'Choose File'}
          <input
            type="file"
            accept=".json,.txt,.zip,.md,.text"
            onChange={handleFileSelect}
            className="hidden"
            disabled={isUploading}
          />
        </label>
      </div>

      {result && (
        <div className="mt-4 p-6 bg-green-50 border border-green-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="text-green-800 font-semibold text-lg">Import Complete!</p>
              <p className="text-green-600 text-sm">Your conversations are now searchable</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-white rounded-lg p-3 text-center border border-green-100">
              <div className="text-2xl font-bold text-green-700">{result.conversations}</div>
              <div className="text-xs text-green-600">Conversations</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border border-green-100">
              <div className="text-2xl font-bold text-green-700">{result.messages}</div>
              <div className="text-xs text-green-600">Messages</div>
            </div>
          </div>
          <p className="text-sm text-green-600 mt-3 text-center">
            📊 Click the <strong>Stats</strong> tab above to see your conversation analysis
          </p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">
            ❌ {error}
          </p>
        </div>
      )}
    </div>
  );
}
