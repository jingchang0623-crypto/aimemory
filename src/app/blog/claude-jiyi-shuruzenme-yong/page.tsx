import type { Metadata } from 'next';
import Link from 'next/link';
import FAQJsonLd from '@/components/FAQJsonLd';

export const metadata: Metadata = {
  title: 'Claude记忆输入怎么用？让AI真正记住你的项目信息',
  description: 'Claude记忆输入功能详解：如何设置、使用技巧、与ChatGPT记忆对比，以及如何用AI Memory实现更强大的跨平台记忆。',
  keywords: ['Claude记忆输入', 'Claude记忆功能', 'Claude使用技巧', 'Claude项目知识', 'Claude记忆设置'],
  alternates: {
    canonical: 'https://aimemory.pro/blog/claude-jiyi-shuruzenme-yong',
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose lg:prose-xl max-w-none">
          <h1>Claude记忆输入怎么用？让AI真正记住你的项目信息</h1>
          <p className="text-xl text-gray-600">
            Claude记忆输入功能详解：如何设置、使用技巧、与ChatGPT记忆对比，以及如何用AI Memory实现更强大的跨平台记忆。
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 mt-0">🧠 快速解决方案</h2>
            <p className="text-blue-700">
              使用 AI Memory 可以无限保存所有AI对话记录，支持ChatGPT、Claude、DeepSeek、Gemini等所有主流平台。
            </p>
            <Link href="/" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              免费开始使用 →
            </Link>
          </div>

          <h2>为什么需要AI对话记忆管理？</h2>
          <p>
            随着AI助手（ChatGPT、Claude、DeepSeek、Gemini）的普及，用户在与AI的对话中积累了大量有价值的信息。
            然而，各个平台的记忆功能都有局限性：
          </p>
          <ul>
            <li><strong>ChatGPT</strong>：记忆限制1,500词，无法导出</li>
            <li><strong>Claude</strong>：项目知识功能有限，不支持跨项目</li>
            <li><strong>DeepSeek</strong>：暂无原生记忆功能</li>
            <li><strong>Gemini</strong>：记忆功能仍在完善中</li>
          </ul>

          <h2>AI Memory 解决方案</h2>
          <p>
            AI Memory 提供跨平台的AI对话记忆管理：
          </p>
          <ul>
            <li>✅ 无限存储空间</li>
            <li>✅ 全文搜索所有对话</li>
            <li>✅ 支持5大AI平台（ChatGPT、Claude、DeepSeek、Gemini、Kimi）</li>
            <li>✅ 本地优先，隐私保护</li>
            <li>✅ MCP协议，113+客户端兼容</li>
          </ul>

          <h2>常见问题</h2>
          <h3>AI Memory 是免费的吗？</h3>
          <p>是的，AI Memory 基础功能完全免费，无需注册即可使用。</p>

          <h3>支持哪些AI平台？</h3>
          <p>支持ChatGPT、Claude、DeepSeek、Gemini、Kimi等所有主流AI平台。</p>

          <h3>数据安全性如何？</h3>
          <p>采用会话隔离存储，只有您能通过会话Cookie访问数据。无追踪、无广告、无数据出售。</p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h2 className="mt-0">立即开始</h2>
            <p>
              上传您的AI对话记录，体验跨平台记忆管理的强大功能。
            </p>
            <Link href="/" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              上传对话记录 →
            </Link>
          </div>
        </article>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← 返回博客列表
          </Link>
        </div>
      </footer>
    </div>
  );
}
