import { MetadataRoute } from 'next';
import * as fs from 'fs';
import * as path from 'path';

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
  { path: '/deepseek-ai-memory', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/ai-conversation-backup', priority: 0.95, changeFrequency: 'monthly' },
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
  { path: '/docs/memory-injection-demo', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/tools', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/demo/memory-injection', priority: 0.9, changeFrequency: 'monthly' },
  // Chinese pages
  { path: '/zh', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/zh/mcp-server', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/zh/ai-duihua-daochu', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/zh/ai-duihua-jilu-diushi', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/zh/ai-liaotian-jilu-daochu', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/zh/chatgpt-jiyi-gao-le', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/zh/claude-jiyi-shezhi', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/zh/deepseek-duihua-baocun', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/zh/deepseek-jiyi-baocun', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/zh/gemini-jiyi-ruhe-yong', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/zh/kimi-jiyi-changjian-wenti', priority: 0.8, changeFrequency: 'monthly' },
  // New Chinese SEO landing pages (2026-05-25)
  { path: '/zh/doubao-jiyi-guanli', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/zh/deepseek-duihua-daochu-jiaocheng', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/zh/kimi-jiyi-kongjian-guanli', priority: 0.9, changeFrequency: 'weekly' },
];

// High-priority blog posts (SEO important)
const highPriorityBlogSlugs = [
  'ai-memory-vs-claude-project-knowledge',
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
  'chatgpt-conversation-disappeared',
  'recover-deleted-chatgpt-conversation',
  'chatgpt-projects-vs-memory',
  'automate-chatgpt-export',
  'google-ai-studio-memory-guide',
  'cherry-studio-vs-ai-memory',
  'deepseek-memory-management',
  'memory-injection-guide',
  'claude-code-vs-cursor-memory',
  'ai-memory-for-product-managers',
  'ai-memory-for-product-managers-2026',
  'mcp-memory-for-ai-agents',
  'ai-memory-injection-guide',
  'ai-agent-memory-management',
  'ai-memory-for-freelancers-2026',
  'cross-platform-ai-memory-guide',
  'ai-memory-vs-echoes-supermemory-mem0-2026',
  'kimi-jiyi-kongjian',
  'ai-duihua-jiyi-guanli',
  'ai-memory-best-practices-2026',
  'ai-memory-pro-privacy-guide',
  'ai-conversation-backup-2026',
  'ai-memory-for-developers-2026',
  // Chinese pages
  'ai-duihua-daochu',
  'kimi-jiyi-shangkong-jian-using-guide',
  'export-kimi-ai',
  'deepseek-ai-memory',
  // More high-value SEO pages
  'ai-memory-tools-comparison-2026',
  // New high-priority SEO pages (2026-05-23)
  'chatgpt-conversation-history-search',
  'claude-memory-import',
  // New Chinese SEO blog pages (2026-05-22)
  'ai-duihua-daochu-gongju-pingce',
  'chatgpt-jiyi-gao-le-zenmeban',
  'claude-jiyi-shuruzenme-yong',
  'deepseek-jiyi-guanli-zhinan',
  'gemini-jiyi-gongneng-shiyong',
  'best-ai-memory-tools-2026',
  'best-ai-conversation-manager-2026',
  'ai-memory-comparison-2026',
  'what-is-memory-injection',
  'mcp-protocol-ai-memory-explained',
  'self-hosted-ai-memory',
  'ai-persistent-memory',
  // New high-priority SEO pages (2026-05-24)
  'ai-memory-injection-2026',
  // Chinese SEO pages (2026-05-24)
  'ai-duihua-baocun-gongju',
  'deepseek-memory-export-guide-zh',
  // New high-priority SEO pages (2026-05-24)
  'ai-memory-vs-chatgpt-memory-2026',
  // New high-priority SEO pages (2026-05-25)
  'rag-for-personal-ai-memory',
  // New high-priority comparison blog (2026-05-25)
  'best-ai-memory-tools-2026-complete-guide',
  // New Chinese comparison blog (2026-05-25)
  'ai-jiyi-gongju-bijiao-2026',
  // New professional niche blogs (2026-05-27)
  'ai-memory-for-devops-2026',
  'ai-memory-for-healthcare-2026',
  'ai-memory-for-lawyers-2026',
  'ai-memory-for-product-managers-2026',
  'ai-memory-for-designers-2026',
  'ai-memory-for-finance-accounting-2026',
  // New team collaboration blog (2026-05-25)
  'ai-memory-for-teams-2026',
  // New productivity blog (2026-05-26)
  'ai-memory-for-productivity-2026',
  // New Cursor & Windsurf AI Memory Guide (2026-05-26)
  'cursor-windsurf-ai-memory-guide-2026',
  // New AI Memory for Freelancers 2026 (2026-05-26)
  'ai-memory-for-freelancers-2026',
  // New AI Memory for Marketers 2026 (2026-05-26)
  'ai-memory-for-marketers-2026',
  // New AI Memory for Data Scientists 2026 (2026-05-26)
  'ai-memory-for-data-scientists-2026',
  // New AI Memory for Researchers 2026 (2026-05-26)
  'ai-memory-for-researchers-2026',
  // New AI Memory for Students 2026 (2026-05-26)
  'ai-memory-for-students-2026',
  // New AI Memory for Teachers 2026 (2026-05-27)
  'ai-memory-for-teachers-2026',
  // New AI Memory for Business Professionals 2026 (2026-05-27)
  'ai-memory-for-business-professionals-2026',
  // New AI Memory for HR & Recruiters 2026 (2026-05-27)
  'ai-memory-for-hr-recruiters-2026',
  // New AI Memory for Sales Professionals 2026 (2026-05-27)
  'ai-memory-for-sales-professionals-2026',
  // New AI Memory for Entrepreneurs 2026 (2026-05-27)
  'ai-memory-for-entrepreneurs-2026',
  // New AI Memory for Customer Support Teams 2026 (2026-05-28)
  'ai-memory-for-customer-support-2026',
  // New AI Memory for Consultants & Strategy Advisors 2026 (2026-05-28)
  'ai-memory-for-consultants-strategy-advisors-2026',
  // New AI Memory for Coaches & Trainers 2026 (2026-05-28)
  'ai-memory-for-coaches-2026',
  // New AI Memory for Startup Founders 2026 (2026-05-28)
  'ai-memory-for-startup-founders-2026',
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
