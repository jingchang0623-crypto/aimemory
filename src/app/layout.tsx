import type { Metadata } from "next";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AI Memory - Save & Search Your ChatGPT History | Free Extension",
    description: "The best ChatGPT history extension. Import, search, and organize all your AI conversations from ChatGPT, Claude, DeepSeek and Gemini. 100% private, free forever.",
    keywords: ["chatgpt history extension", "chatgpt export extension", "AI conversation manager", "chatgpt memory", "save chatgpt conversations", "AI chat history", "chatgpt extension", "claude export", "deepseek export", "AI memory tool"],
    openGraph: {
      title: "AI Memory - Save & Search Your ChatGPT History",
      description: "Import, search and organize all your AI conversations. The best free ChatGPT history extension. 100% private.",
      url: "https://aimemory.pro",
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
    // canonical is per-page — each page should define its own via metadata export
    // Root canonical removed to avoid all pages pointing to homepage
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
        {children}
      </body>
    </html>
  );
}
