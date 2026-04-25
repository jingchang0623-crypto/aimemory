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
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            ✅ Successfully imported!
          </p>
          <p className="text-green-700">
            {result.conversations} conversation{result.conversations !== 1 ? 's' : ''} 
            {' '}and{' '}
            {result.messages} message{result.messages !== 1 ? 's' : ''}
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
