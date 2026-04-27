import { NextRequest, NextResponse } from 'next/server';
import { parseExportFile } from '@/lib/parser';
import { parseTxtExport } from '@/lib/parser-txt';
import { insertConversation, insertMessage } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

// Get or create session ID from cookie
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

export async function POST(request: NextRequest) {
  try {
    const sessionId = getSessionId(request);
    const contentType = request.headers.get('content-type') || '';
    let fileName: string;
    let fileContent: string;

    // Handle FormData upload
    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      const file = formData.get('file') as File;
      
      if (!file) {
        return NextResponse.json(
          { error: 'No file provided' },
          { status: 400 }
        );
      }

      fileName = file.name;
      fileContent = await file.text();
    }
    // Handle JSON upload
    else if (contentType.includes('application/json')) {
      const body = await request.json();
      const { fileName: fn, fileType, fileData } = body;
      
      if (!fn || !fileData) {
        return NextResponse.json(
          { error: 'Missing fileName or fileData' },
          { status: 400 }
        );
      }

      fileName = fn;
      
      // Decode base64 data
      if (fileData.startsWith('data:')) {
        const base64 = fileData.split(',')[1];
        fileContent = Buffer.from(base64, 'base64').toString('utf-8');
      } else {
        fileContent = fileData;
      }
    }
    else {
      return NextResponse.json(
        { error: 'Unsupported content type' },
        { status: 400 }
      );
    }

    const lowerFileName = fileName.toLowerCase();
    let conversations: any[] = [];

    // Handle TXT files
    if (lowerFileName.endsWith('.txt') || lowerFileName.endsWith('.text') || lowerFileName.endsWith('.md')) {
      try {
        conversations = parseTxtExport(fileContent, fileName);
      } catch (e) {
        return NextResponse.json(
          { error: e instanceof Error ? e.message : 'Failed to parse TXT file' },
          { status: 400 }
        );
      }
    }
    // Handle JSON files
    else if (lowerFileName.endsWith('.json')) {
      let data;
      try {
        data = JSON.parse(fileContent);
      } catch {
        return NextResponse.json(
          { error: 'Invalid JSON file' },
          { status: 400 }
        );
      }

      try {
        conversations = parseExportFile(data);
      } catch (e) {
        return NextResponse.json(
          { error: e instanceof Error ? e.message : 'Failed to parse JSON' },
          { status: 400 }
        );
      }
    }
    else {
      return NextResponse.json(
        { error: 'Unsupported file format. Please upload .json, .txt, or .md files.' },
        { status: 400 }
      );
    }

    if (conversations.length === 0) {
      return NextResponse.json(
        { error: 'No conversations found in file' },
        { status: 400 }
      );
    }

    // Save to database with session isolation
    const totalMessages = await processConversations(conversations, sessionId);

    // Set session cookie and return result
    const response = NextResponse.json({
      success: true,
      conversations: conversations.length,
      messages: totalMessages,
      sessionId,
    });

    response.cookies.set('aim_session', sessionId, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 365 * 24 * 60 * 60, // 1 year
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Upload failed' },
      { status: 500 }
    );
  }
}
