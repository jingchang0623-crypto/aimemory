import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Stripe price IDs (create these in Stripe Dashboard)
// Replace with real price IDs when configuring Stripe
const STRIPE_PRICES = {
  'lifetime': process.env.STRIPE_PRICE_LIFETIME || 'price_lifetime_placeholder',
  'plus_monthly': process.env.STRIPE_PRICE_PLUS_MONTHLY || 'price_plus_monthly_placeholder',
  'plus_yearly': process.env.STRIPE_PRICE_PLUS_YEARLY || 'price_plus_yearly_placeholder',
  'pro_monthly': process.env.STRIPE_PRICE_PRO_MONTHLY || 'price_pro_monthly_placeholder',
  'pro_yearly': process.env.STRIPE_PRICE_PRO_YEARLY || 'price_pro_yearly_placeholder',
};

export async function POST(request: NextRequest) {
  try {
    // Dynamically import Stripe to avoid build errors if not configured
    const stripeModule = await import('stripe').catch(() => null);
    if (!stripeModule) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 503 }
      );
    }

    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey || secretKey.startsWith('sk_test_placeholder')) {
      return NextResponse.json(
        { error: 'Stripe not configured. Please set STRIPE_SECRET_KEY in .env.local' },
        { status: 503 }
      );
    }

    const stripe = new stripeModule.default(secretKey);

    const body = await request.json();
    const { plan, interval = 'monthly', sessionId } = body;

    if (!plan || !STRIPE_PRICES[`${plan}_${interval}` as keyof typeof STRIPE_PRICES]) {
      return NextResponse.json(
        { error: 'Invalid plan or interval' },
        { status: 400 }
      );
    }

    const priceId = STRIPE_PRICES[`${plan}_${interval}` as keyof typeof STRIPE_PRICES];

    // Get origin for success/cancel URLs
    const headersList = await headers();
    const origin = headersList.get('origin') || 'https://aimemory.pro';

    const session = await stripe.checkout.sessions.create({
      mode: plan === 'lifetime' ? 'payment' : 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/pricing?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing?canceled=true`,
      metadata: {
        plan,
        interval: plan === 'lifetime' ? 'one_time' : interval,
      },
      // Allow users to modify subscription later
      subscription_data: plan !== 'lifetime' ? {
        trial_period_days: 7, // 7-day free trial
      } : undefined,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('[Stripe Checkout] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
