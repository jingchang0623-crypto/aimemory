import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Memory Chrome Extension — Auto-Save ChatGPT, Claude, DeepSeek Conversations',
  description: 'Install AI Memory from Chrome Web Store. Free extension auto-saves ChatGPT, Claude, DeepSeek, Gemini conversations with AI fact extraction. 100% private, no account needed.',
  keywords: ['chrome web store ai memory', 'chatgpt chrome extension', 'ai conversation saver chrome', 'chatgpt history extension', 'claude chrome extension', 'deepseek extension', 'save ai conversations chrome'],
  alternates: { canonical: 'https://aimemory.pro/chrome-web-store' },
  openGraph: {
    title: 'AI Memory Chrome Extension — Auto-Save All AI Conversations',
    description: 'Free Chrome extension that auto-saves and organizes your AI conversations with smart fact extraction.',
    url: 'https://aimemory.pro/chrome-web-store',
    type: 'website',
  },
};

export default function ChromeWebStore() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Memory Chrome Extension",
            "applicationCategory": "BrowserApplication",
            "operatingSystem": "Chrome",
            "description": "Auto-save ChatGPT, Claude, DeepSeek, Gemini conversations with AI fact extraction. 100% private.",
            "url": "https://aimemory.pro/chrome-web-store",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "150" },
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
            <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              v1.2.0 — AI Fact Extraction
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Memory<br />
              <span className="text-green-600">Chrome 扩展</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              自动保存 ChatGPT、Claude、DeepSeek、Gemini 的所有对话。AI 智能提取关键信息。100% 本地存储，无需注册。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/ai-memory-extension.zip" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition" download>
                ⬇ 下载扩展 (ZIP)
              </a>
              <Link href="/chrome-extension" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                查看详情
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">核心功能</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '🔄', title: '自动保存', desc: '打开即用。自动捕获 ChatGPT、Claude、DeepSeek、Gemini、Kimi 对话。' },
                { icon: '🧠', title: 'AI 事实提取', desc: '自动从对话中提取关键事实、代码片段、决策记录、用户偏好。' },
                { icon: '🔍', title: '全文搜索', desc: '跨平台搜索所有对话。支持中英文、正则表达式。毫秒级响应。' },
                { icon: '🔒', title: '100% 隐私', desc: '所有数据存储在浏览器本地 IndexedDB。不上传任何数据到服务器。' },
                { icon: '📤', title: '数据导出', desc: '一键导出为 JSON/CSV。支持 ChatGPT/Claude 标准格式。' },
                { icon: '🔌', title: 'MCP 集成', desc: '免费 MCP Server，让 Claude Desktop、Cursor 直接搜索你的记忆。' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Install Steps */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">安装步骤</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: '下载扩展', desc: '点击上方下载按钮获取 ZIP 文件' },
                { step: '2', title: '加载扩展', desc: '打开 chrome://extensions → 开启开发者模式 → 加载已解压的扩展' },
                { step: '3', title: '开始使用', desc: '打开任意 AI 对话页面，扩展会自动保存对话' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Supported Platforms */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">支持的平台</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['ChatGPT', 'Claude', 'DeepSeek', 'Gemini', 'Kimi'].map((platform) => (
                <span key={platform} className="bg-white border border-gray-200 rounded-full px-6 py-3 font-medium text-gray-700 shadow-sm">
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">常见问题</h2>
            <div className="space-y-4">
              {[
                { q: '扩展安全吗？会不会读取我的对话？', a: '扩展只在你访问 AI 网站时保存对话内容到浏览器本地存储。数据不会发送到任何外部服务器。代码完全开源可审计。' },
                { q: '支持哪些 AI 平台？', a: '目前支持 ChatGPT、Claude、DeepSeek、Gemini、Kimi。更多平台持续添加中。' },
                { q: '需要注册账号吗？', a: '不需要。下载安装即可使用，无需任何注册或登录。' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-green-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">立即安装 AI Memory 扩展</h2>
            <p className="text-gray-600 mb-8">免费，无需注册，30 秒安装完成。</p>
            <a href="/ai-memory-extension.zip" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition" download>
              ⬇ 下载 v1.2.0 (ZIP)
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
