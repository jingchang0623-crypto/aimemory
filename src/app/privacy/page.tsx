import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - AI Memory',
  description: 'AI Memory privacy policy. Session-isolated server storage for the web app, local IndexedDB storage for the Chrome extension. No tracking, no data selling.',
  alternates: {
    canonical: 'https://aimemory.pro/privacy',
  },
};

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: April 27, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              AI Memory is a browser-based tool that helps you manage and search your AI conversations.
              We are committed to protecting your privacy. This policy explains how we handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Data Storage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AI Memory offers two storage modes:
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Web App (aimemory.pro):</strong> Your data is stored in an isolated session on our server.
              Only you can access it with your session cookie. No tracking, no data selling. You can export or delete
              everything with one click at any time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Chrome Extension:</strong> The extension operates entirely on your device. It captures
              conversation content from supported AI platforms and stores it locally in your browser using IndexedDB.
              The extension does not transmit any data to external servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Data We Do Not Collect</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>We do not use cookies for tracking purposes (session cookies are used only for data access).</li>
              <li>We do not collect personal information such as names, email addresses, or IP addresses.</li>
              <li>We do not use analytics or tracking scripts.</li>
              <li>We do not use third-party advertising or tracking services.</li>
              <li>We do not share your conversation data with any third party.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Chrome Extension</h2>
            <p className="text-gray-700 leading-relaxed">
              The AI Memory Chrome Extension operates entirely on your device. It captures conversation
              content from supported AI platforms and stores it locally. The extension does not transmit
              any data to external servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Third-Party Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not share any data with third parties. Your web app data is stored in an isolated session
              accessible only to you, and your extension data stays on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              Since your data is stored locally on your device and never transmitted over the internet,
              the security of your data depends on the security of your device. We recommend keeping your
              browser and operating system up to date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              AI Memory is not directed at children under 13. We do not knowingly collect information
              from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time. Changes will be posted on this page
              with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this privacy policy, please contact us at{' '}
              <a href="mailto:privacy@aimemory.pro" className="text-blue-600 hover:underline">
                privacy@aimemory.pro
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
