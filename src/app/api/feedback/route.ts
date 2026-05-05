import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// Ensure feedback table exists
db.exec(`
  CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    feedback TEXT NOT NULL,
    source TEXT DEFAULT 'general',
    timestamp TEXT NOT NULL
  );
`);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, feedback, source = 'general' } = body;

    // Validate feedback text
    if (!feedback || typeof feedback !== 'string' || !feedback.trim()) {
      return NextResponse.json(
        { success: false, error: 'Feedback is required' },
        { status: 400 }
      );
    }

    // Validate optional email format if provided
    if (email && typeof email === 'string' && email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { success: false, error: 'Invalid email format' },
          { status: 400 }
        );
      }
    }

    const normalizedEmail = email && typeof email === 'string' ? email.toLowerCase().trim() : null;

    db.prepare('INSERT INTO feedback (email, feedback, source, timestamp) VALUES (?, ?, ?, ?)').run(
      normalizedEmail,
      feedback.trim(),
      source,
      new Date().toISOString()
    );

    const total = (db.prepare('SELECT COUNT(*) as cnt FROM feedback').get() as { cnt: number }).cnt;
    console.log(`[Feedback] New submission from ${normalizedEmail || 'anonymous'}, source: ${source}. Total: ${total}`);

    return NextResponse.json({
      success: true,
      message: 'Thank you for your feedback!',
    });
  } catch (error) {
    console.error('[Feedback] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const total = (db.prepare('SELECT COUNT(*) as cnt FROM feedback').get() as { cnt: number }).cnt;
  return NextResponse.json({
    total,
    message: 'Feedback endpoint is active',
  });
}
