import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://aimemory.pro';

// Static pages with their priorities
const staticPages: { path: string; priority: number; changeFrequency: 'yearly' | 'monthly' | 'weekly' }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/features', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/chrome-extension', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/mcp-server', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/mcp-vs-mem0', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/deepseek-memory-guide', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/directory', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/mcp-directory', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/compare', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/changelog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/docs/mcp', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/docs/pypi-setup', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/docs/chrome-web-store', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/getting-started', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/guides/mcp-quickstart', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/feedback', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/docs/roadmap', priority: 0.8, changeFrequency: 'monthly' },
];

// High-priority blog posts (SEO important)
const highPriorityBlogSlugs = [
  'chatgpt-history-extension',
  'chatgpt-export-extension',
  'export-chatgpt',
  'export-claude',
  'export-deepseek',
  'chatgpt-memory-full',
  'chatgpt-memory-full-fix',
  'chatgpt-memory-backup',
  'chatgpt-memory-alternative',
  'chatgpt-memory-limit',
  'export-all-chatgpt-data',
  'open-source-ai-memory-mcp-server',
  'chatgpt-memory',
  'mcp-server-guide',
  'mcp-server-setup-guide',
  'claude-memory-export',
  'claude-memory-limit',
  'backup-all-ai-conversations',
  'claude-desktop-mcp-setup',
  'chatgpt-memory-plugin',
];

function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), 'src/app/blog');
  try {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .filter(name => !name.startsWith('(') && !name.startsWith('_'));
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getBlogSlugs();
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // Add static pages
  for (const page of staticPages) {
    entries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }

  // Add blog pages
  for (const slug of blogSlugs) {
    const isHighPriority = highPriorityBlogSlugs.includes(slug);
    entries.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: isHighPriority ? 0.9 : 0.8,
    });
  }

  return entries;
}
