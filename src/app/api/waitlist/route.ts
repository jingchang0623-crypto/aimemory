import { NextRequest, NextResponse } from 'next/server';

// In-memory waitlist store (persists during server lifetime)
// In production, replace with a database table or external service
const waitlist: Map<string, { email: string; timestamp: string; source: string }> = new Map();

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
    if (waitlist.has(normalizedEmail)) {
      return NextResponse.json({
        success: true,
        message: 'You are already on the waitlist!',
        position: Array.from(waitlist.keys()).indexOf(normalizedEmail) + 1,
      });
    }

    // Add to waitlist
    waitlist.set(normalizedEmail, {
      email: normalizedEmail,
      timestamp: new Date().toISOString(),
      source,
    });

    // Log for monitoring (remove in production or use proper logging)
    console.log(`[Waitlist] New signup: ${normalizedEmail} from ${source}. Total: ${waitlist.size}`);

    return NextResponse.json({
      success: true,
      message: 'You have been added to the waitlist!',
      position: waitlist.size,
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
  return NextResponse.json({
    total: waitlist.size,
    message: 'Waitlist is active',
  });
}
