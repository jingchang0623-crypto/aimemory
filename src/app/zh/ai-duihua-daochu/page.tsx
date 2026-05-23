import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI对话导出工具推荐 — 5款最好用的导出工具（2026）',
  description: '对比5款主流AI对话导出工具：ChatGPT Export、AI Memory、Chat Memo等，帮你选最佳方案。',
  keywords: ['AI对话导出', 'AI导出工具', 'ChatGPT导出工具', 'AI记忆工具推荐'],
  alternates: {
    canonical: 'https://aimemory.pro/zh/ai-duihua-daochu',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'AI Memory 支持哪些AI平台？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Memory 支持ChatGPT、Claude、DeepSeek、Gemini、Kimi等所有主流AI平台，实现跨平台对话记忆管理。',
      },
    },
    {
      '@type': 'Question',
      name: 'DeepSeek有记忆功能吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DeepSeek目前没有原生记忆功能，但您可以使用AI Memory来保存和管理所有DeepSeek对话记录。',
      },
    },
    {
      '@type': 'Question',
      name: '如何导出DeepSeek对话？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '复制DeepSeek对话内容，粘贴到AI Memory即可。支持文本、JSON、Markdown等多种格式。',
      },
    },
  ],
};

export default function ZhPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/zh" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory 中文
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose lg:prose-xl max-w-none">
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd)}} />

          <h1>AI对话导出工具推荐 — 5款最好用的导出工具（2026）</h1>
          <p className="text-xl text-gray-600">
            对比5款主流AI对话导出工具：ChatGPT Export、AI Memory、Chat Memo等，帮你选最佳方案。
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 mt-0">🧠 AI Memory 解决方案</h2>
            <p className="text-blue-700">
              支持ChatGPT、Claude、DeepSeek、Gemini、Kimi等所有主流AI平台，
              无限存储空间，全文搜索，本地优先保护隐私。
            </p>
            <Link href="/zh" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              免费开始使用 →
            </Link>
          </div>

          <h2>为什么需要AI对话记忆管理？</h2>
          <p>
            随着AI助手的普及，用户在与AI的对话中积累了大量有价值的信息。
            然而，各个平台的记忆功能都有局限性：
          </p>
          <ul>
            <li><strong>ChatGPT</strong>：记忆限制1,500词，无法导出</li>
            <li><strong>Claude</strong>：项目知识功能有限，不支持跨项目</li>
            <li><strong>DeepSeek</strong>：暂无原生记忆功能</li>
            <li><strong>Gemini</strong>：记忆功能仍在完善中</li>
            <li><strong>Kimi</strong>：对话记录保存功能有限</li>
          </ul>

          <h2>AI Memory 核心功能</h2>
          <ul>
            <li>✅ 无限存储空间</li>
            <li>✅ 全文搜索所有对话</li>
            <li>✅ 支持5大AI平台</li>
            <li>✅ 本地优先，隐私保护</li>
            <li>✅ MCP协议，113+客户端兼容</li>
            <li>✅ Chrome扩展，自动捕获对话</li>
          </ul>

          <h2>立即开始使用</h2>
          <p>
            上传您的AI对话记录，体验跨平台记忆管理的强大功能。
          </p>
          <Link href="/zh" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            上传对话记录 →
          </Link>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h3 className="mt-0">相关资源</h3>
            <ul>
              <li><Link href="/zh/ai-duihua-jilu-diushi" className="text-blue-600 hover:underline">AI对话记录丢失怎么办？</Link></li>
              <li><Link href="/zh/ai-liaotian-jilu-daochu" className="text-blue-600 hover:underline">AI聊天记录导出教程</Link></li>
              <li><Link href="/zh/deepseek-duihua-baocun" className="text-blue-600 hover:underline">DeepSeek对话保存方法</Link></li>
            </ul>
          </div>
        </article>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/zh" className="text-blue-600 hover:underline">
            ← 返回中文首页
          </Link>
        </div>
      </footer>
    </div>
  );
}
