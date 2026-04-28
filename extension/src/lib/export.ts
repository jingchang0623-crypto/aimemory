/**
 * Conversation Export Module
 * 
 * Supports exporting conversations in multiple formats:
 * - JSON (raw data)
 * - Markdown (readable)
 * - TXT (plain text)
 * - CSV (spreadsheet)
 */

import type { Conversation, Message } from './types';

export type ExportFormat = 'json' | 'markdown' | 'txt' | 'csv';

export interface ExportOptions {
  format: ExportFormat;
  includeMetadata?: boolean;
  includeTimestamps?: boolean;
}

/**
 * Export a single conversation to the specified format.
 */
export function exportConversation(conversation: Conversation, options: ExportOptions): string {
  const { format, includeMetadata = true, includeTimestamps = true } = options;

  switch (format) {
    case 'json':
      return exportAsJson(conversation, includeMetadata);
    case 'markdown':
      return exportAsMarkdown(conversation, includeMetadata, includeTimestamps);
    case 'txt':
      return exportAsTxt(conversation, includeTimestamps);
    case 'csv':
      return exportAsCsv(conversation, includeTimestamps);
    default:
      throw new Error(`Unsupported export format: ${format}`);
  }
}

/**
 * Export multiple conversations as a batch.
 */
export function exportMultipleConversations(
  conversations: Conversation[],
  options: ExportOptions
): string {
  if (options.format === 'json') {
    return JSON.stringify(conversations, null, 2);
  }

  // For other formats, concatenate with separators
  return conversations
    .map(conv => exportConversation(conv, options))
    .join('\n\n' + '='.repeat(80) + '\n\n');
}

/**
 * Download exported content as a file.
 */
export function downloadExport(content: string, filename: string, format: ExportFormat): void {
  const mimeTypes: Record<ExportFormat, string> = {
    json: 'application/json',
    markdown: 'text/markdown',
    txt: 'text/plain',
    csv: 'text/csv',
  };

  const blob = new Blob([content], { type: mimeTypes[format] });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ─────────────────────────────────────────────────────────────────────────────
// Format Implementations
// ─────────────────────────────────────────────────────────────────────────────

function exportAsJson(conversation: Conversation, includeMetadata: boolean): string {
  if (includeMetadata) {
    return JSON.stringify(conversation, null, 2);
  }

  // Export only messages
  const simplified = {
    title: conversation.title,
    platform: conversation.platform,
    messages: conversation.messages.map(m => ({
      role: m.role,
      content: m.content,
    })),
  };
  return JSON.stringify(simplified, null, 2);
}

function exportAsMarkdown(
  conversation: Conversation,
  includeMetadata: boolean,
  includeTimestamps: boolean
): string {
  const lines: string[] = [];

  // Title
  lines.push(`# ${conversation.title}`);
  lines.push('');

  // Metadata
  if (includeMetadata) {
    lines.push('## Metadata');
    lines.push(`- **Platform:** ${conversation.platform}`);
    lines.push(`- **Created:** ${new Date(conversation.createdAt).toLocaleString()}`);
    lines.push(`- **Updated:** ${new Date(conversation.updatedAt).toLocaleString()}`);
    lines.push(`- **Messages:** ${conversation.messages.length}`);
    if (conversation.url) {
      lines.push(`- **URL:** ${conversation.url}`);
    }
    if (conversation.tags?.length) {
      lines.push(`- **Tags:** ${conversation.tags.join(', ')}`);
    }
    lines.push('');
  }

  // Messages
  lines.push('## Conversation');
  lines.push('');

  for (const msg of conversation.messages) {
    const roleLabel = msg.role === 'user' ? '👤 User' : 
                      msg.role === 'assistant' ? '🤖 Assistant' : 
                      '⚙️ System';
    
    const timestamp = includeTimestamps 
      ? ` *(${new Date(msg.timestamp).toLocaleString()})*`
      : '';

    lines.push(`### ${roleLabel}${timestamp}`);
    lines.push('');
    lines.push(msg.content);
    lines.push('');
    lines.push('---');
    lines.push('');
  }

  return lines.join('\n');
}

function exportAsTxt(conversation: Conversation, includeTimestamps: boolean): string {
  const lines: string[] = [];

  lines.push(conversation.title);
  lines.push('='.repeat(conversation.title.length));
  lines.push('');

  for (const msg of conversation.messages) {
    const role = msg.role.toUpperCase();
    const timestamp = includeTimestamps 
      ? ` [${new Date(msg.timestamp).toLocaleString()}]`
      : '';

    lines.push(`[${role}]${timestamp}:`);
    lines.push(msg.content);
    lines.push('');
  }

  return lines.join('\n');
}

function exportAsCsv(conversation: Conversation, includeTimestamps: boolean): string {
  const rows: string[] = [];

  // Header
  if (includeTimestamps) {
    rows.push('Role,Content,Timestamp');
  } else {
    rows.push('Role,Content');
  }

  // Messages
  for (const msg of conversation.messages) {
    const escapedContent = escapeCsvField(msg.content);
    const timestamp = includeTimestamps 
      ? new Date(msg.timestamp).toISOString()
      : '';

    if (includeTimestamps) {
      rows.push(`${msg.role},"${escapedContent}",${timestamp}`);
    } else {
      rows.push(`${msg.role},"${escapedContent}"`);
    }
  }

  return rows.join('\n');
}

/**
 * Escape a CSV field value (double quotes and wrap in quotes if needed).
 */
function escapeCsvField(field: string): string {
  // Replace double quotes with two double quotes
  return field.replace(/"/g, '""');
}

/**
 * Generate a filename for the export.
 */
export function generateExportFilename(conversation: Conversation, format: ExportFormat): string {
  const extensions: Record<ExportFormat, string> = {
    json: 'json',
    markdown: 'md',
    txt: 'txt',
    csv: 'csv',
  };

  // Sanitize title for filename
  const safeTitle = conversation.title
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
    .slice(0, 50);

  const date = new Date().toISOString().split('T')[0];
  return `ai-memory-${safeTitle}-${date}.${extensions[format]}`;
}
