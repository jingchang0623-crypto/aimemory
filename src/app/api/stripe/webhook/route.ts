import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// Stripe webhook secret from env
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

// Ensure subscriptions table exists
db.exec(`
  CREATE TABLE IF NOT EXISTS subscriptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    stripe_customer_id TEXT,
    stripe_subscription_id TEXT UNIQUE,
    session_id TEXT,
    plan TEXT NOT NULL,
    interval TEXT,
    status TEXT NOT NULL,
    current_period_end INTEGER,
    cancel_at_period_end BOOLEAN DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

export async function POST(request: NextRequest) {
  try {
    // Dynamically import Stripe
    const stripeModule = await import('stripe').catch(() => null);
    if (!stripeModule) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 503 });
    }

    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 503 });
    }

    const stripe = new stripeModule.default(secretKey);

    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature || !webhookSecret) {
      return NextResponse.json({ error: 'Missing webhook signature or secret' }, { status: 400 });
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('[Stripe Webhook] Signature verification failed:', err);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    console.log(`[Stripe Webhook] Received event: ${event.type}`);

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as any;
        const { plan, interval } = session.metadata || {};
        
        if (session.mode === 'payment' || session.mode === 'subscription') {
          db.prepare(`
            INSERT OR REPLACE INTO subscriptions 
            (stripe_customer_id, stripe_subscription_id, session_id, plan, interval, status, current_period_end)
            VALUES (?, ?, ?, ?, ?, ?, ?)
          `).run(
            session.customer,
            session.subscription || null,
            session.id,
            plan || 'unknown',
            interval || 'monthly',
            'active',
            session.subscription?.current_period_end || null
          );
          console.log(`[Stripe Webhook] Subscription created: ${session.id}`);
        }
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as any;
        db.prepare(`
          UPDATE subscriptions 
          SET status = ?, current_period_end = ?, cancel_at_period_end = ?, updated_at = datetime('now')
          WHERE stripe_subscription_id = ?
        `).run(
          subscription.status,
          subscription.current_period_end,
          subscription.cancel_at_period_end ? 1 : 0,
          subscription.id
        );
        console.log(`[Stripe Webhook] Subscription updated: ${subscription.id} -> ${subscription.status}`);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as any;
        db.prepare(`
          UPDATE subscriptions 
          SET status = 'canceled', updated_at = datetime('now')
          WHERE stripe_subscription_id = ?
        `).run(subscription.id);
        console.log(`[Stripe Webhook] Subscription canceled: ${subscription.id}`);
        break;
      }

      default:
        console.log(`[Stripe Webhook] Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('[Stripe Webhook] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
