import type { Metadata } from 'next';
import TagsPageContent from './TagsPageContent';

export const metadata: Metadata = {
  title: 'Tag Management - AI Memory',
  description: 'Organize and filter your AI conversations with custom tags. Browse conversations by tag across ChatGPT, Claude, DeepSeek, Gemini, and Kimi.',
  alternates: {
    canonical: 'https://aimemory.pro/tags',
  },
};

export default function TagsPage() {
  return <TagsPageContent />;
}
