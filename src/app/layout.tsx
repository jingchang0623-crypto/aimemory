import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Memory - Save & Search Your ChatGPT History | Free Extension",
  description: "The best ChatGPT history extension. Import, search, and organize all your AI conversations from ChatGPT, Claude, DeepSeek and Gemini. 100% private, free forever.",
  keywords: ["chatgpt history extension", "chatgpt export extension", "AI conversation manager", "chatgpt memory", "save chatgpt conversations", "AI chat history", "chatgpt extension", "claude export", "deepseek export", "AI memory tool"],
  openGraph: {
    title: "AI Memory - Save & Search Your ChatGPT History",
    description: "Import, search and organize all your AI conversations. The best free ChatGPT history extension. 100% private.",
    url: "https://aimemory.pro",
    siteName: "AI Memory",
    type: "website",
  },
  alternates: {
    canonical: "https://aimemory.pro",
  },
};

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
