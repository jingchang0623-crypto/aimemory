import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - AI Memory',
  description: 'AI Memory terms of service. Free tool, no warranty, you own your data.',
  alternates: {
    canonical: 'https://aimemory.pro/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-3xl font-bold text-gray-900 hover:opacity-80">
            🧠 AI Memory
          </Link>
          <p className="text-gray-600 mt-1">
            Your AI conversations, organized and searchable
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: April 27, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By using AI Memory (the &quot;Service&quot;), you agree to these Terms of Service. If you do not
              agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed">
              AI Memory is a free, browser-based tool for importing, organizing, and searching AI
              conversations from platforms including ChatGPT, Claude, DeepSeek, and Gemini. The Service
              also includes a Chrome extension for automatic conversation saving.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Free Service</h2>
            <p className="text-gray-700 leading-relaxed">
              AI Memory is provided free of charge. There are no paid plans, subscriptions, or in-app
              purchases at this time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Your Data</h2>
            <p className="text-gray-700 leading-relaxed">
              You own all data you import into AI Memory. All conversation data is stored locally on your
              device. We do not claim any ownership over your data, and we do not have access to it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. No Warranty</h2>
            <p className="text-gray-700 leading-relaxed">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
              WHETHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
              ERROR-FREE, OR SECURE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA,
              LOSS OF PROFITS, OR BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Data Loss</h2>
            <p className="text-gray-700 leading-relaxed">
              Since all data is stored locally in your browser, clearing your browser data, uninstalling
              the extension, or device failure may result in data loss. We are not responsible for any
              data loss. We recommend regularly exporting your data for backup.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to use the Service only for lawful purposes. You are responsible for ensuring
              that the data you import complies with applicable laws and the terms of the AI platforms
              from which it originates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be posted on this
              page with an updated revision date. Continued use of the Service after changes constitutes
              acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these terms, please contact us at{' '}
              <a href="mailto:support@aimemory.pro" className="text-blue-600 hover:underline">
                support@aimemory.pro
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
