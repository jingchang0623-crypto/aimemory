import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Memory - Your AI Conversations, Organized",
  description: "Import, search, and browse all your ChatGPT and Claude conversations in one place. Never lose valuable AI insights again.",
  keywords: ["AI", "ChatGPT", "Claude", "conversation", "memory", "export", "search"],
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
