import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Google Analytics - activates when GA_MEASUREMENT_ID env var is set in .env.local
const GA_ID = process.env.GA_MEASUREMENT_ID;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AI Memory - Save & Search Your ChatGPT History | Free Extension",
    description: "The best ChatGPT history extension. Import, search, and organize all your AI conversations from ChatGPT, Claude, DeepSeek and Gemini. 100% private, free forever.",
    keywords: ["chatgpt history extension", "chatgpt export extension", "AI conversation manager", "chatgpt memory", "save chatgpt conversations", "AI chat history", "chatgpt extension", "claude export", "deepseek export", "AI memory tool"],
    openGraph: {
      title: "AI Memory - Save & Search Your ChatGPT History",
      description: "Import, search and organize all your AI conversations. The best free ChatGPT history extension. 100% private.",
      siteName: "AI Memory",
      type: "website",
      images: [
        {
          url: "https://aimemory.pro/og-image.png",
          width: 1200,
          height: 630,
          alt: "AI Memory - Save & Search Your ChatGPT History",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Memory - Save & Search Your ChatGPT History",
      description: "Import, search and organize all your AI conversations. The best free ChatGPT history extension. 100% private.",
      images: ["https://aimemory.pro/og-image.png"],
    },
    alternates: {
      canonical: 'https://aimemory.pro',
    },
    // Each child page overrides canonical with its own path via metadata export.
    // This root canonical only applies to pages that don't export their own (e.g. homepage 'use client').
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Organization JSON-LD for Google Knowledge Panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AI Memory",
              "url": "https://aimemory.pro",
              "logo": "https://aimemory.pro/og-image.png",
              "description": "AI Memory helps users save, search, and organize conversations from ChatGPT, Claude, DeepSeek, Gemini, and Kimi. Free, open-source, 100% private.",
              "sameAs": [
                "https://github.com/jingchang0623-crypto/aimemory"
              ],
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "AI Memory Team"
              }
            })
          }}
        />
        {children}
        {/* Google Analytics - only loads if GA_MEASUREMENT_ID is set */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
