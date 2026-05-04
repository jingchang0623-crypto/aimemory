import type { Metadata } from 'next';
import ExportAllAIConversationsContent from './ExportAllAIConversationsContent';

const slug = 'export-all-ai-conversations-at-once';

export const metadata: Metadata = {
  title: 'How to Export All AI Conversations at Once (2026 Guide)',
  description: 'Learn how to batch export AI chats from ChatGPT, Claude, DeepSeek, Gemini, and Kimi at once. Complete guide to backing up all your AI conversations in 2026.',
  alternates: { canonical: 'https://aimemory.pro/blog/export-all-ai-conversations-at-once' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I export all AI conversations at once from every platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No single platform lets you export all AI conversations from every service at once. Each AI platform (ChatGPT, Claude, DeepSeek, Gemini, Kimi) has its own export mechanism. You need to manually export from each platform separately, then use a tool like AI Memory to unify them into one searchable database.',
      },
    },
    {
      '@type': 'Question',
      name: 'What format does each AI platform export conversations in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT exports as JSON files inside a ZIP archive. Claude exports conversations as JSON. DeepSeek provides JSON exports from its data controls. Gemini uses Google Takeout which exports in MBOX or JSON format. Kimi exports as JSON. The challenge is that while most use JSON, the schema and structure differ across platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to batch export AI chats from all platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Export times vary by platform. ChatGPT typically takes 10-30 minutes to prepare your export. Claude exports are usually ready within a few minutes. DeepSeek exports are fairly quick. Gemini via Google Takeout can take hours to days depending on your data volume. Kimi exports are typically fast. Budget about 1-2 hours total if you do them all in sequence.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I search across all my exported AI conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once you have exported your conversations from each platform, you can upload all the export files to AI Memory (aimemory.pro). AI Memory automatically parses every format, unifies the data, and makes all your conversations searchable through a single interface with full-text search.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I backup all my AI conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend exporting your AI conversations at least once a month, or more frequently if you use AI tools heavily for work. Some platforms may limit how often you can request an export. Setting a monthly calendar reminder to export from all platforms and upload to AI Memory ensures you never lose valuable conversations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do AI platforms delete old conversations automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most major AI platforms do not automatically delete your conversations, but policies can change. ChatGPT retains conversations indefinitely unless you delete them. Claude stores conversations in your account history. However, platforms can change retention policies, accounts can be compromised, or services can shut down. Regular exports ensure you always have a local backup.',
      },
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Export All AI Conversations at Once (2026 Guide)',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: {
    '@type': 'Organization',
    name: 'AI Memory',
  },
  publisher: {
    '@type': 'Organization',
    name: 'AI Memory',
  },
  description:
    'Learn how to batch export AI chats from ChatGPT, Claude, DeepSeek, Gemini, and Kimi at once. Complete guide to backing up all your AI conversations in 2026.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://aimemory.pro/blog/export-all-ai-conversations-at-once',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aimemory.pro' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://aimemory.pro/blog' },
    { '@type': 'ListItem', position: 3, name: 'Export All AI Conversations at Once', item: 'https://aimemory.pro/blog/export-all-ai-conversations-at-once' },
  ],
};

export default function ExportAllAIConversationsAtOnce() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ExportAllAIConversationsContent />
    </>
  );
}
