import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'DeepSeek Memory — Never Lose Your DeepSeek Conversations | aimemory.pro',
  description: 'Free DeepSeek memory manager. Save, search, and organize all your DeepSeek conversations. Chrome extension auto-captures chats. MCP server for AI-powered recall. No limits, 100% private.',
  keywords: ['deepseek memory', 'deepseek conversation history', 'deepseek chat export', 'save deepseek conversations', 'deepseek memory manager', 'deepseek chat backup', 'deepseek AI memory', 'deepseek 对话记忆', 'deepseek 导出'],
  alternates: { canonical: 'https://aimemory.pro/deepseek-memory' },
  openGraph: {
    title: 'DeepSeek Memory — Never Lose Your DeepSeek Conversations',
    description: 'Free DeepSeek memory manager. Save, search, and organize all your DeepSeek conversations.',
    url: 'https://aimemory.pro/deepseek-memory',
    type: 'website',
  },
};

export default function DeepSeekMemory() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Memory — DeepSeek Memory Manager",
            "applicationCategory": "ProductivityApplication",
            "operatingSystem": "Web, Chrome",
            "description": "Free tool to save, search, and manage all your DeepSeek conversations. Chrome extension auto-captures chats with AI fact extraction.",
            "url": "https://aimemory.pro/deepseek-memory",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          })
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="border-b border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <Link href="/" className="text-2xl font-bold text-gray-900">🧠 AI Memory</Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-16">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              DeepSeek 专属
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              DeepSeek Memory<br />
              <span className="text-blue-600">永远不丢失对话</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              DeepSeek 没有内置记忆功能？没关系。AI Memory 自动保存、搜索、管理你所有的 DeepSeek 对话。免费，无限制，100% 隐私。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chrome-extension" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                安装 Chrome 扩展
              </Link>
              <Link href="/upload" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                上传 DeepSeek 导出
              </Link>
            </div>
          </div>

          {/* Why */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">为什么 DeepSeek 用户需要记忆管理？</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🚫', title: '无内置记忆', desc: 'DeepSeek 不像 ChatGPT 有 Memory 功能。关闭对话 = 永久丢失。' },
                { icon: '🇨🇳', title: '中国用户首选', desc: 'DeepSeek 在中国拥有数百万用户，但没有任何记忆管理工具覆盖它。' },
                { icon: '📊', title: '对话越多越难找', desc: '几百个 DeepSeek 对话，找不到之前的代码方案？AI Memory 帮你秒搜。' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">如何使用</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: '安装扩展', desc: 'Chrome 扩展自动捕获 DeepSeek 对话。一键安装，无需注册。' },
                { step: '2', title: 'AI 提取关键信息', desc: '自动从对话中提取代码片段、关键决策、偏好设置。' },
                { step: '3', title: '跨平台搜索', desc: '在 DeepSeek、ChatGPT、Claude 所有对话中统一搜索。' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* vs ChatGPT Memory */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">vs ChatGPT Memory</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 text-gray-600">功能</th>
                    <th className="text-center p-4 text-gray-600">ChatGPT Memory</th>
                    <th className="text-center p-4 text-blue-600 font-bold">AI Memory</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['记忆容量', '1,500 词上限', '无限制 ✅'],
                    ['跨平台', '仅 ChatGPT', 'DeepSeek + ChatGPT + Claude + Gemini ✅'],
                    ['搜索功能', '无', '全文搜索 + AI 语义搜索 ✅'],
                    ['数据导出', '不可导出', 'JSON/CSV 任意导出 ✅'],
                    ['隐私', '存储在 OpenAI 服务器', '100% 本地 ✅'],
                    ['价格', '$20/月 (Plus)', '免费 ✅'],
                  ].map(([feature, chatgpt, aim], i) => (
                    <tr key={i} className="border-t border-gray-100">
                      <td className="p-4 font-medium text-gray-900">{feature}</td>
                      <td className="p-4 text-center text-gray-500">{chatgpt}</td>
                      <td className="p-4 text-center text-blue-600 font-medium">{aim}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">常见问题</h2>
            <div className="space-y-4">
              {[
                { q: 'AI Memory 支持 DeepSeek 的哪些版本？', a: '支持 DeepSeek Chat 网页版和 API 对话。Chrome 扩展自动捕获网页端对话，你也可以手动上传 DeepSeek 的 JSON 导出文件。' },
                { q: '数据安全吗？', a: '100% 安全。所有数据存储在你的浏览器本地（IndexedDB），不上传到任何服务器。MCP Server 也完全在本地运行。' },
                { q: '和 Mem0 有什么区别？', a: 'Mem0 是面向开发者的 API 服务，需要付费。AI Memory 是面向终端用户的免费工具，提供 Chrome 扩展 + Web 界面 + MCP Server，开箱即用。' },
                { q: '支持中文对话吗？', a: '完全支持。AI Memory 对中文对话有专门的优化，包括中文分词、拼音搜索等。DeepSeek 中文对话的提取效果最佳。' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-blue-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">开始管理你的 DeepSeek 记忆</h2>
            <p className="text-gray-600 mb-8">免费，无限制，100% 隐私。30 秒开始。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chrome-extension" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                安装 Chrome 扩展 →
              </Link>
              <Link href="/upload" className="border border-blue-300 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                上传对话记录
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
