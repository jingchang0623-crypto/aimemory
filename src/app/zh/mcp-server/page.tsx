import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Memory MCP服务器 — 让AI拥有永久记忆（中文指南 2026）',
  description: 'MCP (Model Context Protocol) 服务器安装指南。通过pip install aimemory-mcp-server一键安装，让Claude Desktop、Cursor等113+AI客户端访问你的对话记忆。',
  keywords: ['MCP服务器', 'AI记忆工具', 'MCP协议', 'Claude MCP', '跨平台AI记忆', 'pip安装', '内存注入'],
  alternates: {
    canonical: 'https://aimemory.pro/zh/mcp-server',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '什么是MCP服务器？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MCP（Model Context Protocol）是AI的"USB-C标准"，让AI客户端通过统一协议访问外部工具和数据。AI Memory MCP服务器让你的AI助手（Claude、Cursor等）能直接搜索和调用你的记忆库。',
      },
    },
    {
      '@type': 'Question',
      name: '如何安装AI Memory MCP服务器？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '只需一条命令：pip install aimemory-mcp-server。然后运行 aimemory-mcp-server，配置Claude Desktop的claude_desktop_config.json即可使用。完全免费，无需API密钥。',
      },
    },
    {
      '@type': 'Question',
      name: 'AI Memory MCP服务器支持哪些AI客户端？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '支持Claude Desktop、Cursor、Windsurf、VS Code + Cline/Continue、Zed、Augment、Aider等113+个MCP客户端。',
      },
    },
    {
      '@type': 'Question',
      name: 'MCP服务器能做什么？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '提供12个记忆工具：搜索记忆(search_memories)、保存记忆(save_memory)、列出记忆(list_memories)、获取记忆(get_memory)、更新记忆(update_memory)、删除记忆(delete_memory)、统计(memory_stats)、导出(export_memories)、导入(import_memories)、批量保存(batch_save_memories)、标签管理(get_all_tags)、清除全部(clear_all_memories)。',
      },
    },
    {
      '@type': 'Question',
      name: 'AI Memory MCP服务器安全吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '完全安全。数据存储在本地SQLite数据库中，不离开你的电脑。开源代码（MIT协议），可随时审查。',
      },
    },
    {
      '@type': 'Question',
      name: 'AI Memory MCP服务器与其他MCP服务器有什么区别？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Memory MCP是唯一支持跨平台（5大AI平台）对话搜索的MCP服务器。安装只需10秒（vs Mem0需30+分钟），原生支持MCP标准（vs Mem0仅REST API），完全开源免费。',
      },
    },
  ],
};

export default function ZhMcpPage() {
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

          <h1>AI Memory MCP服务器 — 让AI拥有永久记忆</h1>
          <p className="text-xl text-gray-600">
            MCP (Model Context Protocol) 是AI的"USB-C标准"。通过AI Memory MCP服务器，
            你的AI助手可以访问跨平台的对话记忆——不再需要每次重新解释你的技术栈。
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 my-8">
            <h2 className="text-purple-800 mt-0">⚡ 一键安装，永久记忆</h2>
            <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm">
              $ pip install aimemory-mcp-server<br />
              $ aimemory-mcp-server
            </div>
            <p className="text-gray-700 mt-3">
              ✓ Python 3.8+ ✓ macOS/Linux/Windows ✓ 无需API密钥<br />
              <span className="text-purple-600 font-bold">已发布至PyPI v1.5.1</span> — 12个MCP工具，免费开源
            </p>
          </div>

          <h2>为什么需要MCP服务器？</h2>
          <p>
            使用AI助手最大的痛点之一：每次对话AI都不记得之前的对话内容。即使你告诉ChatGPT你的技术栈、项目背景或编码偏好，
            下一个对话它又会完全忘记。AI Memory MCP服务器解决了这个问题——让你的AI真正"记住"你。
          </p>

          <h2>12个强大的MCP记忆工具</h2>
          <p>AI Memory MCP服务器提供12个专用工具，让你的AI助手可以全面管理你的记忆库：</p>
          <ul>
            <li><strong>🔍 search_memories</strong> — 全文搜索所有保存的对话，支持FTS5语法、平台过滤、日期范围</li>
            <li><strong>💾 save_memory</strong> — 保存新的对话、洞察或记忆片段，自动标注标签</li>
            <li><strong>📋 list_memories</strong> — 浏览你的记忆库，支持标签过滤和分页</li>
            <li><strong>📌 get_memory</strong> — 按ID获取特定的记忆</li>
            <li><strong>✏️ update_memory</strong> — 编辑已有的记忆，更新内容、添加标签</li>
            <li><strong>🗑️ delete_memory</strong> — 永久删除过期或不相关的记忆</li>
            <li><strong>📊 memory_stats</strong> — 获取记忆总数、近期活动、标签分布</li>
            <li><strong>📤 export_memories</strong> — 将记忆库导出为JSON备份</li>
            <li><strong>📥 import_memories</strong> — 从JSON备份导入记忆</li>
            <li><strong>📦 batch_save_memories</strong> — 批量保存多条记忆</li>
            <li><strong>🏷️ get_all_tags</strong> — 列出所有标签及使用次数</li>
            <li><strong>🧹 clear_all_memories</strong> — 清除所有记忆（谨慎使用）</li>
          </ul>

          <h2>与主流AI客户端集成</h2>

          <h3>Claude Desktop</h3>
          <p>在 <code>claude_desktop_config.json</code> 中添加：</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm">
{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}`}
          </pre>
          <p>重启Claude Desktop，然后问："搜索我的记忆，找出React性能优化的建议"</p>

          <h3>Cursor</h3>
          <p><strong>设置 → MCP → 添加新的MCP服务器</strong></p>
          <ul>
            <li>名称：AI Memory</li>
            <li>类型：stdio</li>
            <li>命令：aimemory-mcp-server</li>
          </ul>

          <h3>Windsurf</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm">
{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}`}
          </pre>

          <h3>VS Code + Cline / Continue</h3>
          <p>在MCP设置中添加：</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm">
{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}`}
          </pre>
          <p>也支持Zed、Continue、Augment、Aider等100+个MCP客户端。</p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 mt-0">💡 使用场景</h2>
            <ul className="text-blue-700">
              <li><strong>开发者</strong>：AI记住你的技术栈、项目架构、编码偏好——每次对话都能立即进入状态</li>
              <li><strong>研究人员</strong>：跨对话追踪研究思路、文献笔记、实验方法</li>
              <li><strong>内容创作者</strong>：AI记住你的写作风格、项目背景、受众偏好</li>
              <li><strong>产品经理</strong>：跨平台保存用户反馈、竞品分析、产品决策记录</li>
            </ul>
          </div>

          <h2>与竞品对比</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">特性</th>
                <th className="border border-gray-300 p-2">AI Memory MCP</th>
                <th className="border border-gray-300 p-2">Mem0</th>
                <th className="border border-gray-300 p-2">其他MCP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">安装时间</td>
                <td className="border border-gray-300 p-2 text-green-600">10秒</td>
                <td className="border border-gray-300 p-2 text-orange-600">30+分钟</td>
                <td className="border border-gray-300 p-2 text-orange-600">数小时</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">跨平台搜索</td>
                <td className="border border-gray-300 p-2 text-green-600">✅ 5个平台</td>
                <td className="border border-gray-300 p-2 text-red-600">❌ 单一</td>
                <td className="border border-gray-300 p-2 text-orange-600">⚠️ 手动</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">MCP标准</td>
                <td className="border border-gray-300 p-2 text-green-600">✅ 原生</td>
                <td className="border border-gray-300 p-2 text-red-600">❌ REST API</td>
                <td className="border border-gray-300 p-2 text-green-600">✅ DIY</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">价格</td>
                <td className="border border-gray-300 p-2 text-green-600">免费开源</td>
                <td className="border border-gray-300 p-2 text-red-600">收费</td>
                <td className="border border-gray-300 p-2 text-green-600">免费</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">记忆注入</td>
                <td className="border border-gray-300 p-2 text-green-600">✅ 支持</td>
                <td className="border border-gray-300 p-2 text-orange-600">⚠️ 有限</td>
                <td className="border border-gray-300 p-2 text-red-600">❌</td>
              </tr>
            </tbody>
          </table>

          <h2>开始使用</h2>
          <ol>
            <li><strong>安装</strong>：<code>pip install aimemory-mcp-server</code></li>
            <li><strong>运行</strong>：<code>aimemory-mcp-server</code></li>
            <li><strong>配置</strong>：在Claude Desktop、Cursor等客户端中添加MCP配置</li>
            <li><strong>使用</strong>：让AI搜索你的记忆——"Search my memory for..."</li>
          </ol>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h2 className="text-green-800 mt-0">🚀 立即开始使用AI Memory</h2>
            <p className="text-green-700">
              无需安装，直接上传AI对话记录即可体验跨平台记忆搜索。完全免费，无需注册。
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                🧠 免费开始 →
              </Link>
              <Link href="/mcp-server" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                📖 English MCP Guide
              </Link>
              <a href="https://pypi.org/project/aimemory-mcp-server/" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                📦 PyPI v1.5.1
              </a>
            </div>
          </div>

          <h2>常见问题（FAQ）</h2>

          <h3>AI Memory MCP服务器是免费的吗？</h3>
          <p>
            是的，完全免费开源（MIT协议）。所有12个MCP工具都可以免费使用。本地模式数据100%存储在你的电脑上，无需网络连接。
          </p>

          <h3>需要编程经验吗？</h3>
          <p>
            只需要知道如何打开终端输入命令。pip install + 配置文件复制粘贴，全程不需要写代码。非技术用户建议先使用网页版（aimemory.pro）。
          </p>

          <h3>数据安全吗？</h3>
          <p>
            本地模式下，数据完全存储在你的SQLite数据库中，永远不会离开你的电脑。所有代码开源，可自行审计。
          </p>

          <h3>和ChatGPT的Memory功能有什么区别？</h3>
          <p>
            ChatGPT Memory局限于ChatGPT平台，有1500词限制。AI Memory MCP服务器支持跨平台（ChatGPT、Claude、DeepSeek、Gemini、Kimi），无限存储，全文搜索，而且可以通过113+个AI客户端访问。
          </p>
        </article>
      </main>

      <footer className="border-t border-gray-200 bg-white mt-12">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
          <p>© 2026 AI Memory. 跨平台AI对话记忆管理工具。</p>
          <div className="flex gap-4 justify-center mt-2">
            <Link href="/zh" className="hover:text-blue-600">中文首页</Link>
            <Link href="/mcp-server" className="hover:text-blue-600">English MCP Guide</Link>
            <a href="https://github.com/jingchang0623-crypto/aimemory" className="hover:text-blue-600">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
