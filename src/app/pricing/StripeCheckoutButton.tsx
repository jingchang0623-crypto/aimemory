'use client';

import { useState, useTransition } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

interface StripeCheckoutButtonProps {
  plan: 'plus' | 'lifetime' | 'pro';
  interval?: 'monthly' | 'yearly';
  className?: string;
  children?: React.ReactNode;
}

export default function StripeCheckoutButton({
  plan,
  interval = 'monthly',
  className = '',
  children,
}: StripeCheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, interval, sessionId: undefined }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // In Stripe.js v9+, redirect to the session URL directly
      if (data.url) {
        window.location.href = data.url;
        return;
      }

      // Fallback: use stripe.js redirect if available
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe not loaded');
      }

      // For newer Stripe.js versions, use the session URL to redirect
      if (data.sessionId) {
        // Stripe.js v9+ - redirect to checkout URL
        window.location.href = `https://checkout.stripe.com/pay/${data.sessionId}`;
      }
    } catch (err: any) {
      console.error('[Checkout] Error:', err);
      setError(err.message || 'Failed to start checkout');
    } finally {
      setLoading(false);
    }
  };

  // If Stripe is not configured, show a message
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    return (
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-2">Payment setup in progress</p>
        <button
          disabled
          className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-semibold cursor-not-allowed"
        >
          Buy Now (Coming Soon)
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`w-full py-3 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      >
        {loading ? 'Redirecting...' : children || 'Buy Now'}
      </button>
      {error && (
        <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
      )}
    </div>
  );
}
