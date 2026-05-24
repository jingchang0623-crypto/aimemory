import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI对话记忆工具 — 跨平台AI聊天记录保存与管理',
  description: 'AI Memory帮您自动保存和管理ChatGPT、Claude、DeepSeek、Gemini的对话记录。免费使用，支持全文搜索、记忆注入、MCP服务器。',
  keywords: ['AI对话记忆', 'AI记忆工具', 'AI聊天记录保存', 'ChatGPT对话导出', 'DeepSeek对话保存', '跨平台AI记忆', 'AI记忆管理'],
  alternates: {
    canonical: 'https://aimemory.pro/zh',
  },
};

export default function ChineseLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI对话记忆工具 — 跨平台AI聊天记录保存",
            "description": "AI Memory帮您自动保存和管理ChatGPT、Claude、DeepSeek、Gemini的对话记录。",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "首页",
                  "item": "https://aimemory.pro"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "中文版",
                  "item": "https://aimemory.pro/zh"
                }
              ]
            }
          })
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/zh" className="text-2xl font-bold text-gray-900">
              🧠 AI对话记忆
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/zh/features" className="text-gray-600 hover:text-gray-900">功能</Link>
              <Link href="/zh/blog" className="text-gray-600 hover:text-gray-900">博客</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">定价</Link>
              <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">English →</Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI对话记忆工具
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              自动保存、搜索和管理您的AI对话记录。支持ChatGPT、Claude、DeepSeek、Gemini等所有主流AI平台。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                免费开始使用 →
              </Link>
              <Link
                href="/zh/blog"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                查看教程
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ✅ 完全免费 • ✅ 无需注册 • ✅ 隐私保护
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">📥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">自动保存</h3>
              <p className="text-gray-600">
                安装Chrome扩展后，自动捕获ChatGPT、Claude、DeepSeek等平台的对话记录，无需手动导出。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">全文搜索</h3>
              <p className="text-gray-600">
                在所有AI对话中快速搜索。几秒钟内找到三个月前那个完美的解决方案。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">💉</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">记忆注入</h3>
              <p className="text-gray-600">
                将相关历史对话注入到新的AI聊天中。让AI拥有您的完整上下文记忆。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">跨平台同步</h3>
              <p className="text-gray-600">
                一套记忆，所有AI。在ChatGPT中提问，在Claude中继续，记忆永不断层。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100%隐私保护</h3>
              <p className="text-gray-600">
                数据存储在您的独立会话中，只有您能通过会话Cookie访问。无追踪、无数据出售。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">MCP服务器</h3>
              <p className="text-gray-600">
                集成Claude Desktop、Cursor、VS Code等113+ MCP客户端。12个MCP工具供高级用户使用。
              </p>
            </div>
          </div>

          {/* Supported Platforms */}
          <div className="bg-white rounded-2xl p-8 mb-16 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              支持的主流AI平台
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { name: 'ChatGPT', icon: '💬', desc: 'OpenAI' },
                { name: 'Claude', icon: '🤖', desc: 'Anthropic' },
                { name: 'DeepSeek', icon: '🔍', desc: '深度求索' },
                { name: 'Gemini', icon: '✨', desc: 'Google' },
                { name: 'Kimi', icon: '🌙', desc: '月之暗面' },
              ].map((platform) => (
                <div key={platform.name} className="text-center p-4 rounded-lg bg-gray-50">
                  <div className="text-3xl mb-2">{platform.icon}</div>
                  <div className="font-semibold text-gray-900">{platform.name}</div>
                  <div className="text-sm text-gray-500">{platform.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              谁在使用AI对话记忆？
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: '👨‍💻 开发者',
                  desc: '保存ChatGPT中的代码解决方案，在Claude中继续提问。所有技术对话集中管理。'
                },
                {
                  title: '✍️ 写作者',
                  desc: '存储Claude中的角色设定，在DeepSeek中继续创作。灵感永不丢失。'
                },
                {
                  title: '🔬 研究人员',
                  desc: '跨平台交叉引用AI答案。比较不同AI对同一问题的回答。'
                }
              ].map((useCase) => (
                <div key={useCase.title} className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-700">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              准备好保存您的AI对话了吗？
            </h2>
            <p className="text-xl mb-8 opacity-90">
              免费开始，无需注册，立即使用。
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              上传第一个对话 →
            </Link>
          </div>

          {/* Guides Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              平台指南
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/zh/doubao-jiyi-guanli" className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900">豆包记忆管理</h3>
                <p className="text-sm text-gray-600 mt-1">解决豆包记忆缺陷，跨平台管理</p>
              </Link>
              <Link href="/zh/deepseek-duihua-daochu-jiaocheng" className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition">
                <div className="text-3xl mb-2">📤</div>
                <h3 className="font-semibold text-gray-900">DeepSeek对话导出</h3>
                <p className="text-sm text-gray-600 mt-1">完整教程保存DeepSeek聊天记录</p>
              </Link>
              <Link href="/zh/kimi-jiyi-kongjian-guanli" className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition">
                <div className="text-3xl mb-2">🌙</div>
                <h3 className="font-semibold text-gray-900">Kimi记忆空间管理</h3>
                <p className="text-sm text-gray-600 mt-1">管理Kimi对话记录，跨平台搜索</p>
              </Link>
            </div>
          </div>

          {/* SEO FAQ */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              常见问题
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'AI对话记录会丢失吗？',
                  a: '如果未备份，AI平台的对话记录可能因平台限制或账户问题而丢失。AI Memory自动保存所有对话，确保您的AI知识库永不丢失。'
                },
                {
                  q: '如何导出DeepSeek对话？',
                  a: 'DeepSeek目前没有原生的批量导出功能。安装AI Memory Chrome扩展后，它会自动保存您的DeepSeek对话，并支持导出为多种格式。'
                },
                {
                  q: 'ChatGPT对话达到上限怎么办？',
                  a: 'ChatGPT对话有上下文长度限制。使用AI Memory保存历史对话，需要时通过"记忆注入"功能将相关上下文重新注入到新对话中。'
                },
                {
                  q: 'AI记忆工具安全吗？',
                  a: 'AI Memory采用会话隔离存储，只有您能通过会话Cookie访问数据。无追踪、无广告、无数据出售。支持一键导出或删除所有数据。'
                }
              ].map((faq) => (
                <div key={faq.q} className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
