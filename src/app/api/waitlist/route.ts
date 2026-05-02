import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// Ensure waitlist table exists
db.exec(`
  CREATE TABLE IF NOT EXISTS waitlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    timestamp TEXT NOT NULL,
    source TEXT DEFAULT 'pricing'
  );
`);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source = 'pricing' } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check for duplicate
    const normalizedEmail = email.toLowerCase().trim();
    const existing = db.prepare('SELECT id FROM waitlist WHERE email = ?').get(normalizedEmail) as { id: number } | undefined;
    if (existing) {
      const position = (db.prepare('SELECT COUNT(*) as cnt FROM waitlist WHERE id <= ?').get(existing.id) as { cnt: number }).cnt;
      return NextResponse.json({
        success: true,
        message: 'You are already on the waitlist!',
        position,
      });
    }

    // Add to waitlist
    db.prepare('INSERT INTO waitlist (email, timestamp, source) VALUES (?, ?, ?)').run(
      normalizedEmail,
      new Date().toISOString(),
      source
    );

    const total = (db.prepare('SELECT COUNT(*) as cnt FROM waitlist').get() as { cnt: number }).cnt;
    console.log(`[Waitlist] New signup: ${normalizedEmail} from ${source}. Total: ${total}`);

    return NextResponse.json({
      success: true,
      message: 'You have been added to the waitlist!',
      position: total,
    });
  } catch (error) {
    console.error('[Waitlist] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const total = (db.prepare('SELECT COUNT(*) as cnt FROM waitlist').get() as { cnt: number }).cnt;
  return NextResponse.json({
    total,
    message: 'Waitlist is active',
  });
}
