import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import FeedbackForm from './FeedbackForm';

export const metadata: Metadata = {
  title: 'Feedback - AI Memory | Share Your Thoughts',
  description: 'Help us improve AI Memory. Share your feedback, feature requests, and bug reports.',
  alternates: {
    canonical: 'https://aimemory.pro/feedback',
  },
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">We&apos;d Love Your Feedback</h1>
          <p className="text-lg text-gray-600">
            Help us make AI Memory better. Tell us what you think, request features, or report bugs.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <FeedbackForm />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            You can also reach us at{' '}
            <a href="mailto:hello@aimemory.pro" className="text-blue-600 hover:underline">
              hello@aimemory.pro
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
