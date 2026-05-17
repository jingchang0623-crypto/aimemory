import { NextRequest, NextResponse } from 'next/server';
import { parseExportFile } from '@/lib/parser';
import { parseTxtExport } from '@/lib/parser-txt';
import { insertConversation, insertMessage } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';
import JSZip from 'jszip';

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

function getSessionId(request: NextRequest): string {
  const cookie = request.cookies.get('aim_session');
  if (cookie?.value) return cookie.value;
  return uuidv4();
}

async function processConversations(conversations: any[], sessionId: string) {
  let totalMessages = 0;
  for (const conv of conversations) {
    const convId = conv.id || uuidv4();
    insertConversation({
      id: convId,
      sessionId,
      title: conv.title,
      platform: conv.platform,
      createdAt: conv.createdAt,
      updatedAt: conv.updatedAt,
      tags: conv.tags,
      summary: conv.summary,
      messageCount: conv.messages.length,
    });
    for (const msg of conv.messages) {
      insertMessage({
        id: msg.id || uuidv4(),
        conversationId: convId,
        role: msg.role,
        content: msg.content,
        timestamp: msg.timestamp,
      });
      totalMessages++;
    }
  }
  return totalMessages;
}

// Try to parse a JSON file as an export, return conversations or null
function tryParseExport(data: any): any[] | null {
  try {
    const result = parseExportFile(data);
    return result.length > 0 ? result : null;
  } catch {
    return null;
  }
}

// Process ZIP file: find and parse JSON files inside
async function processZip(fileContent: Buffer): Promise<any[]> {
  const zip = await JSZip.loadAsync(fileContent);
  let conversations: any[] = [];

  for (const [filename, zipEntry] of Object.entries(zip.files)) {
    if (zipEntry.dir) continue;
    if (!filename.endsWith('.json')) continue;

    try {
      const content = await zipEntry.async('string');
      const data = JSON.parse(content);
      const parsed = tryParseExport(data);
      if (parsed) {
        conversations = conversations.concat(parsed);
      }
    } catch {
      // Skip files that can't be parsed
      continue;
    }
  }

  return conversations;
}

export async function POST(request: NextRequest) {
  try {
    const sessionId = getSessionId(request);
    const contentType = request.headers.get('content-type') || '';
    let fileName: string = '';
    let fileContent: string | Buffer;

    // Handle FormData upload
    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      const file = formData.get('file') as File;

      if (!file) {
        return NextResponse.json({ error: 'No file provided' }, { status: 400 });
      }

      // File size check
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json({
          error: `File too large (${(file.size / 1024 / 1024).toFixed(1)}MB). Maximum is 50MB.`
        }, { status: 413 });
      }

      fileName = file.name;
      // Use arrayBuffer for binary files (ZIP), text for others
      if (file.name?.toLowerCase().endsWith('.zip')) {
        fileContent = Buffer.from(await file.arrayBuffer());
      } else {
        fileContent = await file.text();
      }
    }
    // Handle JSON upload
    else if (contentType.includes('application/json')) {
      const body = await request.json();
      const { fileName: fn, fileData } = body;

      if (!fn || !fileData) {
        return NextResponse.json({ error: 'Missing fileName or fileData' }, { status: 400 });
      }

      fileName = fn;

      if (fileData.startsWith('data:')) {
        const base64 = fileData.split(',')[1];
        // For data URLs from client, decode after checking size
        const raw = Buffer.from(base64, 'base64');
        if (raw.length > MAX_FILE_SIZE) {
          return NextResponse.json({
            error: `File too large (${(raw.length / 1024 / 1024).toFixed(1)}MB). Maximum is 50MB.`
          }, { status: 413 });
        }
        fileContent = raw.toString('utf-8');
      } else {
        if (fileData.length > MAX_FILE_SIZE) {
          return NextResponse.json({ error: 'File too large. Maximum is 50MB.' }, { status: 413 });
        }
        fileContent = fileData;
      }
    }
    else {
      return NextResponse.json({ error: 'Unsupported content type' }, { status: 400 });
    }

    const lowerFileName = fileName.toLowerCase();
    let conversations: any[] = [];

    // Handle ZIP files (ChatGPT export format)
    if (lowerFileName.endsWith('.zip')) {
      try {
        conversations = await processZip(fileContent as Buffer);
      } catch (e) {
        return NextResponse.json({
          error: e instanceof Error ? e.message : 'Failed to process ZIP file'
        }, { status: 400 });
      }
    }
    // Handle TXT files
    else if (lowerFileName.endsWith('.txt') || lowerFileName.endsWith('.text') || lowerFileName.endsWith('.md')) {
      try {
        conversations = parseTxtExport(fileContent as string, fileName);
      } catch (e) {
        return NextResponse.json({
          error: e instanceof Error ? e.message : 'Failed to parse TXT file'
        }, { status: 400 });
      }
    }
    // Handle JSON files
    else if (lowerFileName.endsWith('.json')) {
      let data;
      try {
        data = JSON.parse(fileContent as string);
      } catch {
        return NextResponse.json({ error: 'Invalid JSON file' }, { status: 400 });
      }

      try {
        conversations = parseExportFile(data);
      } catch (e) {
        return NextResponse.json({
          error: e instanceof Error ? e.message : 'Failed to parse JSON'
        }, { status: 400 });
      }
    }
    else {
      return NextResponse.json({
        error: 'Unsupported file format. Please upload .json, .txt, .zip, or .md files.'
      }, { status: 400 });
    }

    if (conversations.length === 0) {
      return NextResponse.json({
        error: 'No conversations found in file. Make sure you exported from ChatGPT, Claude, DeepSeek, Gemini, or Kimi.'
      }, { status: 400 });
    }

    const totalMessages = await processConversations(conversations, sessionId);

    const response = NextResponse.json({
      success: true,
      conversations: conversations.length,
      messages: totalMessages,
    });

    response.cookies.set('aim_session', sessionId, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 365 * 24 * 60 * 60,
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Upload failed'
    }, { status: 500 });
  }
}
