'use client';

import { useState } from 'react';

interface CopyToClipboardProps {
  text: string;
  label?: string;
}

export function CopyToClipboard({ text, label = 'Copy' }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 px-3 py-1.5 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 rounded transition-colors"
      type="button"
    >
      {copied ? '✓ Copied!' : label}
    </button>
  );
}
