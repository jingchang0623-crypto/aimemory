import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI对话导出工具 - 免费导出ChatGPT/Claude/DeepSeek聊天记录',
  description: '最好的AI对话导出工具。一键导出ChatGPT、Claude、DeepSeek、Gemini的聊天记录，支持JSON/TXT格式，全文搜索，100%本地存储。',
  keywords: ['AI对话导出', 'ChatGPT导出', 'Claude导出', 'DeepSeek导出', 'AI聊天记录管理', 'ChatGPT记忆', 'AI对话备份', '聊天记录导出工具'],
  openGraph: {
    title: 'AI对话导出工具 - 免费导出所有AI聊天记录',
    description: '一键导出ChatGPT、Claude、DeepSeek、Gemini的聊天记录。全文搜索，100%本地存储。',
    url: 'https://aimemory.pro/blog/ai-duihua-daochu',
    siteName: 'AI Memory',
    type: 'article',
    locale: 'zh_CN',
  },
  alternates: {
    canonical: 'https://aimemory.pro/blog/ai-duihua-daochu',
  },
};

export default function AIDialogueExportGuide() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '如何导出ChatGPT的对话记录？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '登录ChatGPT后，点击左下角头像进入Settings，选择Data Controls，然后点击Export Data。OpenAI会将包含所有对话的ZIP文件发送到你的邮箱。',
        },
      },
      {
        '@type': 'Question',
        name: '导出的AI对话数据安全吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '是的。使用AI Memory等工具时，所有数据都存储在你的本地设备上，不会上传到任何服务器。AI Memory使用浏览器本地存储（IndexedDB），完全离线运行。',
        },
      },
      {
        '@type': 'Question',
        name: '支持导出哪些AI平台的对话？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '目前支持ChatGPT、Claude、DeepSeek、Gemini四个主流AI平台的对话导出和管理。',
        },
      },
      {
        '@type': 'Question',
        name: '导出的对话文件是什么格式？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT和Claude导出JSON格式，DeepSeek支持JSON和TXT格式，Gemini通过Google Takeout导出。AI Memory支持解析所有这些格式。',
        },
      },
      {
        '@type': 'Question',
        name: '如何批量管理多个AI平台的对话？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '分别从各平台导出对话后，将所有文件打包成ZIP上传到AI Memory。AI Memory会自动识别文件来源并解析对话内容，提供统一的全文搜索功能。',
        },
      },
      {
        '@type': 'Question',
        name: '有没有自动保存AI对话的方法？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '可以使用AI Memory Chrome扩展自动检测并保存你在ChatGPT、Claude、DeepSeek、Gemini上的新对话，无需手动导出操作。',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose lg:prose-xl max-w-none">
          <h1>AI对话导出工具：完整指南（2026年更新）</h1>
          <p className="text-xl text-gray-600">
            一键导出ChatGPT、Claude、DeepSeek、Gemini聊天记录，永久保存你的AI对话记忆
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 mt-0">⚡ 快速摘要</h2>
            <ol className="text-blue-700">
              <li>从各AI平台导出聊天记录（JSON/TXT格式）</li>
              <li>上传到 <Link href="/" className="text-blue-600 underline">AI Memory</Link> 统一管理</li>
              <li>全文搜索所有对话，永不丢失重要信息</li>
              <li>100%本地存储，无需担心隐私泄露</li>
            </ol>
          </div>

          <h2>为什么需要导出AI对话？</h2>
          <p>
            随着AI工具的普及，我们在ChatGPT、Claude、DeepSeek等平台上积累了大量有价值的对话。
            这些对话包含了我们的工作思路、学习笔记、创意灵感，甚至是重要的技术方案。
            然而，<strong>大多数AI平台不会永久保存你的对话历史</strong>。
          </p>
          <ul>
            <li><strong>ChatGPT</strong>：免费用户对话数量有限，且可能因账号问题丢失</li>
            <li><strong>Claude</strong>：对话窗口关闭后，上下文会丢失</li>
            <li><strong>DeepSeek</strong>：高峰期可能无法访问历史对话</li>
            <li><strong>Gemini</strong>：Google账号安全问题可能导致数据丢失</li>
          </ul>

          <h2>各平台导出方法</h2>

          <h3>ChatGPT对话导出</h3>
          <ol>
            <li>登录 <a href="https://chat.openai.com" target="_blank" rel="noopener">chat.openai.com</a></li>
            <li>点击左下角头像 → 「Settings」</li>
            <li>选择「Data Controls」→「Export Data」</li>
            <li>点击「Export」按钮，等待邮件通知</li>
            <li>从邮件下载ZIP文件，解压后获得JSON格式对话数据</li>
          </ol>

          <h3>Claude对话导出</h3>
          <ol>
            <li>登录 <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a></li>
            <li>点击左下角头像 →「Settings」</li>
            <li>选择「Privacy」→「Export Data」</li>
            <li>确认导出，下载JSON文件</li>
          </ol>

          <h3>DeepSeek对话导出</h3>
          <ol>
            <li>登录DeepSeek平台</li>
            <li>进入设置页面，找到数据导出选项</li>
            <li>选择导出格式（JSON或TXT）</li>
            <li>下载导出文件</li>
          </ol>

          <h3>Gemini对话导出</h3>
          <ol>
            <li>访问 <a href="https://myactivity.google.com" target="_blank" rel="noopener">Google My Activity</a></li>
            <li>筛选Gemini相关的活动记录</li>
            <li>使用Google Takeout批量导出</li>
          </ol>

          <h2>导出后如何管理？</h2>
          <p>
            导出的JSON文件虽然保存了数据，但<strong>直接查看非常不便</strong>。
            你需要一个专门的工具来解析、索引和搜索这些对话。
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h3 className="text-green-800 mt-0">💡 推荐方案：AI Memory</h3>
            <p className="text-green-700">
              <Link href="/" className="text-green-600 underline font-bold">AI Memory</Link> 是一个免费的AI对话管理工具，
              支持导入ChatGPT、Claude、DeepSeek、Gemini的导出文件，提供全文搜索功能，
              让你可以快速找到任何历史对话。
            </p>
            <ul className="text-green-700">
              <li>✅ 支持JSON、TXT、ZIP多种格式</li>
              <li>✅ 全文搜索，秒级响应</li>
              <li>✅ 100%本地存储，隐私安全</li>
              <li>✅ 完全免费，无需注册</li>
            </ul>
          </div>

          <h2>AI对话管理的最佳实践</h2>
          <ul>
            <li><strong>定期备份</strong>：建议每周导出一次对话记录</li>
            <li><strong>分类整理</strong>：按项目或主题对对话进行分类</li>
            <li><strong>重要标记</strong>：标记包含重要信息的对话</li>
            <li><strong>跨平台统一</strong>：将所有AI平台的对话集中管理</li>
          </ul>

          <h2>Chrome扩展：自动保存对话</h2>
          <p>
            如果你不想每次都手动导出，可以使用 <Link href="/chrome-extension" className="text-blue-600 underline">AI Memory Chrome扩展</Link>。
            它可以自动检测并保存你在ChatGPT、Claude、DeepSeek、Gemini上的新对话，
            无需手动操作。
          </p>

          <h2>常见问题</h2>

          <h3>导出的对话数据安全吗？</h3>
          <p>
            是的。所有数据都存储在你的本地设备上，不会上传到任何服务器。
            AI Memory使用浏览器本地存储（IndexedDB），完全离线运行。
          </p>

          <h3>支持哪些AI平台？</h3>
          <p>
            目前支持ChatGPT、Claude、DeepSeek、Gemini四个主流AI平台。
            我们还在持续扩展对更多AI工具的支持。
          </p>

          <h3>导出的文件格式是什么？</h3>
          <p>
            ChatGPT和Claude导出JSON格式，DeepSeek支持JSON和TXT，Gemini通过Google Takeout导出。
            AI Memory支持解析所有这些格式。
          </p>

          <h3>如何批量导出多个平台的对话？</h3>
          <p>
            分别从各平台导出后，将所有文件打包成ZIP上传到AI Memory即可。
            我们会自动识别文件来源并解析对话内容。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h3 className="mt-0">🚀 立即开始</h3>
            <p>
              访问 <Link href="/" className="text-blue-600 underline font-bold">aimemory.pro</Link>，
              上传你的第一个AI对话导出文件，体验完整的对话管理功能。
            </p>
            <p className="text-sm text-gray-500 mt-2">
              完全免费 • 无需注册 • 100%本地存储
            </p>
          </div>
        </article>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>AI Memory — Your conversations, preserved forever</p>
          <div className="mt-2 space-x-4">
            <Link href="/features" className="hover:text-gray-700">Features</Link>
            <Link href="/chrome-extension" className="hover:text-gray-700">Chrome Extension</Link>
            <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-700">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
