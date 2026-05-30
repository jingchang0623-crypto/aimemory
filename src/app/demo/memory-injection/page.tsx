import type { Metadata } from 'next';
import Link from 'next/link';
import { CopyToClipboard } from '@/components/CopyToClipboard';

export const metadata: Metadata = {
  title: 'AI记忆注入演示 - 让AI真正记住你 | AI Memory',
  description: '体验AI记忆注入功能：Claude、Cursor等AI助手可以直接搜索和调用你的历史对话记忆。基于MCP协议，113+客户端兼容。',
  keywords: ['AI记忆注入', 'MCP演示', 'Claude记忆', 'Cursor记忆', '跨平台AI记忆', 'AI上下文管理', 'memory injection demo'],
  openGraph: {
    title: 'AI记忆注入演示 - 让AI真正记住你',
    description: '体验AI记忆注入：Claude、Cursor等AI助手直接调用你的历史对话记忆。支持113+ MCP客户端。',
    url: 'https://aimemory.pro/demo/memory-injection',
    siteName: 'AI Memory',
    type: 'website',
    locale: 'zh_CN',
  },
  alternates: {
    canonical: 'https://aimemory.pro/demo/memory-injection',
  },
};

const mcpConfig = `{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}`;

const pythonExample = `# Install MCP server
pip install aimemory-mcp-server

# Claude Desktop will automatically discover tools:
# - ai_memory_search: Search your conversation history
# - ai_memory_add: Add new memory
# - ai_memory_get: Retrieve specific memory
# - ai_memory_list: List all memories
# ... and 8 more tools`;

const demoConversation = {
  user: "What did I tell you about my tech stack last month?",
  assistant: `Based on your stored memories, you mentioned:

• Frontend: React + Next.js 14
• Backend: Node.js with Express  
• Database: PostgreSQL on Railway
• Auth: Clerk
• Deployment: Vercel

Found in: "Tech Stack Discussion" • DeepSeek • 3 weeks ago`,
  toolUsed: 'ai_memory_search'
};

export default function MemoryInjectionDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory
          </Link>
          <p className="text-gray-600 mt-1">Your AI conversations, organized and searchable</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            ⚡ MCP Protocol
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI记忆注入演示
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            体验记忆注入如何让Claude、Cursor等AI助手直接调用你的历史对话记忆。
            无需重复解释，AI自动获取上下文。
          </p>
        </section>

        {/* Interactive Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🎯 交互演示
          </h2>
          
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Fake Claude Interface */}
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="ml-4 text-sm text-gray-600 font-medium">Claude Desktop</span>
            </div>
            
            <div className="p-6 space-y-6">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-2xl rounded-br-md px-5 py-3 max-w-md">
                  <p className="text-sm">{demoConversation.user}</p>
                </div>
              </div>

              {/* Tool Call Indicator */}
              <div className="flex items-center gap-2 text-xs text-gray-500 ml-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">🔧 {demoConversation.toolUsed}</span>
                <span>Called automatically</span>
              </div>

              {/* Assistant Response */}
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-5 py-4 max-w-md">
                  <p className="text-sm text-gray-800 mb-3">{demoConversation.assistant}</p>
                  <div className="text-xs text-gray-500 border-t pt-2">
                    ✅ 12 MCP Memory Tools Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MCP Tools Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🧰 12个MCP记忆工具
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'ai_memory_search', desc: '搜索历史对话', icon: '🔍' },
              { name: 'ai_memory_add', desc: '添加新记忆', icon: '➕' },
              { name: 'ai_memory_get', desc: '获取特定记忆', icon: '📖' },
              { name: 'ai_memory_list', desc: '列出所有记忆', icon: '📋' },
              { name: 'ai_memory_update', desc: '更新记忆', icon: '✏️' },
              { name: 'ai_memory_delete', desc: '删除记忆', icon: '🗑️' },
              { name: 'ai_memory_tags', desc: '管理标签', icon: '🏷️' },
              { name: 'ai_memory_stats', desc: '统计信息', icon: '📊' },
              { name: 'ai_memory_export', desc: '导出记忆', icon: '📤' },
              { name: 'ai_memory_import', desc: '导入记忆', icon: '📥' },
              { name: 'ai_memory_backup', desc: '备份记忆', icon: '💾' },
              { name: 'ai_memory_restore', desc: '恢复记忆', icon: '🔄' },
            ].map((tool) => (
              <div key={tool.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{tool.icon}</div>
                <div className="font-mono text-sm font-bold text-gray-900">{tool.name}</div>
                <div className="text-sm text-gray-600">{tool.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            💻 快速开始
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Step 1 */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <span className="inline-block w-8 h-8 bg-blue-600 text-white rounded-full text-center leading-8 mr-3">1</span>
                安装MCP Server
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <pre className="text-green-400 text-sm overflow-x-auto"><code>{pythonExample}</code></pre>
                <CopyToClipboard text={pythonExample} />
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <span className="inline-block w-8 h-8 bg-blue-600 text-white rounded-full text-center leading-8 mr-3">2</span>
                配置Claude Desktop
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <pre className="text-green-400 text-sm overflow-x-auto"><code>{mcpConfig}</code></pre>
                <CopyToClipboard text={mcpConfig} />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                配置文件位置：<code className="bg-gray-100 px-2 py-1 rounded">~/.config/claude-desktop/claude_desktop_config.json</code>
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <span className="inline-block w-8 h-8 bg-blue-600 text-white rounded-full text-center leading-8 mr-3">3</span>
                开始使用
              </h3>
              <p className="text-gray-700">
                重启Claude Desktop后，直接提问关于你历史对话的问题。Claude会自动调用<code className="bg-gray-100 px-2 py-1 rounded">ai_memory_search</code>工具获取相关记忆。
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            📊 与竞品对比
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white rounded-xl border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">功能</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-blue-600">AI Memory</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-600">Mem0</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-600">Supermemory</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['记忆注入 (MCP)', '✅ 12工具', '✅ API', '✅ API'],
                  ['客户端兼容', '✅ 113+', '⚠️ 有限', '⚠️ 有限'],
                  ['本地优先', '✅ 是', '❌ 否', '❌ 否'],
                  ['开源', '✅ MIT', '✅ MIT', '✅ MIT'],
                  ['PyPI发布', '✅ v1.5.0', '✅ 是', '❌ 否'],
                  ['网页端搜索', '✅ 是', '❌ 否', '❌ 否'],
                  ['Chrome扩展', '✅ v1.2.0', '❌ 否', '✅ 是'],
                  ['中文支持', '✅ 完整', '⚠️ 有限', '❌ 否'],
                ].map(([feature, aimemory, mem0, supermemory], i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{feature}</td>
                    <td className="px-6 py-4 text-sm text-center">{aimemory}</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">{mem0}</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">{supermemory}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-blue-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            开始使用AI记忆注入
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            上传你的AI对话，安装MCP Server，让Claude、Cursor等AI助手真正记住你。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              📤 上传对话
            </Link>
            <a
              href="https://pypi.org/project/aimemory-mcp-server/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              📦 PyPI安装
            </a>
            <Link
              href="/docs/mcp"
              className="px-8 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              📖 查看文档
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              🧠 AI Memory
            </Link>
            <p className="text-sm text-gray-500">
              © 2026 AI Memory. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
