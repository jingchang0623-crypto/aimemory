import type { Metadata } from 'next';
import Link from 'next/link';
import FAQJsonLd from '@/components/FAQJsonLd';

export const metadata: Metadata = {
  title: 'Kimi记忆空间常见问题：开启、关闭、删除、找回 | AI Memory',
  description: 'Kimi记忆空间在哪里？怎么开启/关闭？记忆消失了怎么找回？本文解答Kimi AI记忆功能的10个常见问题，并教你如何导出备份。',
  keywords: ['Kimi记忆空间', 'Kimi记忆消失', 'Kimi记忆怎么删除', 'Kimi记忆在哪里', 'Kimi AI记忆功能', 'Kimi记忆空间关闭', 'Kimi记忆备份', 'Kimi对话记忆'],
  openGraph: {
    title: 'Kimi记忆空间常见问题解答（2026最新）',
    description: 'Kimi记忆空间在哪里？怎么开启/关闭？记忆消失了怎么找回？完整教程。',
    url: 'https://aimemory.pro/blog/kimi-jiyi-changjian-wenti',
    type: 'article',
    locale: 'zh_CN',
  },
  alternates: {
    canonical: 'https://aimemory.pro/blog/kimi-jiyi-changjian-wenti',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kimi记忆空间在哪里找到？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '打开Kimi智能助手网页版或App，点击左下角头像，在弹出菜单中选择"记忆空间"即可进入。目前仅支持Kimi网页版，App端暂不支持。',
      },
    },
    {
      '@type': 'Question',
      name: 'Kimi记忆空间怎么关闭？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '进入记忆空间后，点击右上角"设置"图标，选择"关闭记忆空间"。注意：关闭后历史记忆仍保留7天，7天后自动删除。建议先导出备份。',
      },
    },
    {
      '@type': 'Question',
      name: 'Kimi记忆消失了怎么找回？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '如果记忆突然消失，请先检查是否误关闭了记忆空间。如果已关闭但未超过7天，重新开启即可恢复。超过7天则无法找回，建议定期使用AI Memory工具备份。',
      },
    },
    {
      '@type': 'Question',
      name: 'Kimi记忆空间有大小限制吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '目前Kimi官方未公布具体容量限制，但根据用户体验反馈，当记忆内容过多时可能出现加载缓慢。建议定期整理，或使用AI Memory跨平台管理。',
      },
    },
    {
      '@type': 'Question',
      name: '如何导出Kimi的对话和记忆？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kimi目前不提供官方导出功能。但你可以使用AI Memory工具：复制Kimi对话文本，粘贴到AI Memory即可实现搜索、备份和跨平台同步。',
      },
    },
  ],
};

export default function KimiMemoryFAQ() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article>
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>🇨🇳 中文指南</span>
              <span>•</span>
              <span>2026-05-22</span>
              <span>•</span>
              <span>10 分钟阅读</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kimi记忆空间常见问题解答
            </h1>
            <p className="text-xl text-gray-600">
              手把手教你使用Kimi记忆功能，解决记忆消失、无法找到、导出备份等10个常见问题。
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            {/* 问题1 */}
            <section className="mb-10" id="where-is-kimi-memory">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Kimi记忆空间在哪里找到？
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-gray-800">
                  <strong>位置：</strong>打开 <a href="https://kimi.moonshot.cn" className="text-blue-600 hover:underline">kimi.moonshot.cn</a>，点击左下角头像 → 选择"记忆空间"。
                </p>
              </div>
              <p className="text-gray-700">
                目前Kimi记忆空间<strong>仅支持网页版</strong>，手机App暂不支持此功能。如果你在头像菜单中找不到"记忆空间"选项，可能是因为：
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>你使用的是App端（请切换到网页版）</li>
                <li>账号未完成实名认证（部分功能需要实名）</li>
                <li>浏览器缓存问题（尝试清除缓存或换浏览器）</li>
              </ul>
            </section>

            {/* 问题2 */}
            <section className="mb-10" id="how-to-enable">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Kimi记忆空间怎么开启？
              </h2>
              <p className="text-gray-700 mb-4">
                首次使用需要手动开启：
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>进入"记忆空间"页面</li>
                <li>点击"开启记忆空间"按钮</li>
                <li>阅读并同意《记忆功能协议》</li>
                <li>开始使用（Kimi会自动记录重要信息）</li>
              </ol>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                <p className="text-green-800 font-medium">
                  ✅ 开启后，Kimi会在对话中自动识别并保存你的偏好、项目信息、常用设置等。
                </p>
              </div>
            </section>

            {/* 问题3 */}
            <section className="mb-10" id="how-to-disable">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Kimi记忆空间怎么关闭？
              </h2>
              <p className="text-gray-700 mb-4">
                如果你不想使用记忆功能，可以按以下步骤关闭：
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>进入"记忆空间"</li>
                <li>点击右上角"设置"图标（⚙️）</li>
                <li>选择"关闭记忆空间"</li>
                <li>确认操作</li>
              </ol>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-yellow-800">
                  ⚠️ <strong>重要提示：</strong>关闭后，记忆内容会保留7天。7天后系统会自动永久删除所有记忆数据。如需保留，请先备份。
                </p>
              </div>
            </section>

            {/* 问题4 */}
            <section className="mb-10" id="memory-lost">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Kimi记忆消失了怎么找回？
              </h2>
              <p className="text-gray-700 mb-4">
                记忆"消失"通常有以下几种原因和解决方法：
              </p>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">情况1：误关闭记忆空间</h3>
                  <p className="text-gray-700">如果关闭未超过7天，重新开启即可自动恢复。超过7天则无法找回。</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">情况2：浏览器Cookie被清除</h3>
                  <p className="text-gray-700">Kimi依赖浏览器Cookie识别用户。清除Cookie后需要重新登录，记忆仍在服务器上。</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">情况3：账号切换</h3>
                  <p className="text-gray-700">确认你登录的是同一个账号（手机号/微信/Apple ID）。不同登录方式可能对应不同账号。</p>
                </div>
              </div>
            </section>

            {/* 问题5 */}
            <section className="mb-10" id="export-backup">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. 如何导出和备份Kimi记忆？
              </h2>
              <p className="text-gray-700 mb-4">
                Kimi目前不提供官方的导出功能，但你可以通过以下方法备份：
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">方法1：手动复制粘贴</h3>
              <p className="text-gray-700 mb-4">
                进入记忆空间，逐条复制记忆内容，粘贴到本地文档或使用AI Memory工具保存。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">方法2：使用AI Memory跨平台管理（推荐）</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-gray-800 mb-4">
                  AI Memory支持将Kimi对话和记忆统一管理，还能同步到ChatGPT、Claude等平台：
                </p>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                  <li>复制Kimi对话文本</li>
                  <li>访问 <Link href="/" className="text-blue-600 hover:underline">aimemory.pro</Link></li>
                  <li>粘贴内容并上传</li>
                  <li>即可实现全文搜索、跨平台同步</li>
                </ol>
                <Link
                  href="/"
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  🚀 立即免费使用
                </Link>
              </div>
            </section>

            {/* 问题6-10 简略版 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                6-10. 更多常见问题
              </h2>
              <div className="space-y-6">
                {[
                  { q: 'Kimi记忆可以跨设备同步吗？', a: '可以。只要使用同一账号登录，网页版和App的记忆空间会自动同步。但注意App端目前无法查看和管理记忆。' },
                  { q: 'Kimi记忆有大小限制吗？', a: '官方未公布具体限制。但当记忆内容过多时可能出现加载缓慢。建议定期整理，或使用AI Memory进行跨平台管理。' },
                  { q: '如何删除某条特定的记忆？', a: '进入记忆空间，找到要删除的记忆条目，点击右侧"删除"按钮（🗑️）确认即可。删除后无法恢复。' },
                  { q: 'Kimi记忆会被用于训练吗？', a: '根据Kimi的隐私政策，用户记忆数据不会被用于模型训练。但为了保险起见，建议不要在记忆中保存敏感信息（密码、银行卡号等）。' },
                  { q: '为什么Kimi不记得之前说过的话？', a: '可能原因：1) 记忆空间未开启；2) 对话内容未达到"重要信息"标准（Kimi会自动过滤）；3) 记忆空间已满或需要整理。' },
                ].map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Q: {item.q}</h3>
                    <p className="text-gray-700">A: {item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                想要更强大的AI记忆管理？
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AI Memory不仅支持Kimi，还支持ChatGPT、Claude、DeepSeek、Gemini等主流AI平台。
                一次上传，跨平台搜索，永不丢失。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  📤 免费上传对话
                </Link>
                <Link
                  href="/blog/export-kimi-ai"
                  className="px-8 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  📖 Kimi导出教程
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>

      <footer className="border-t border-gray-200 bg-white mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
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

      <FAQJsonLd faqs={[
    { question: "Kimi记忆空间在哪里找到？", answer: "打开Kimi智能助手网页版或App，点击左下角头像，在弹出菜单中选择'记忆空间'即可进入。" },
    { question: "Kimi记忆空间怎么关闭？", answer: "关闭后历史记忆仍保留7天，7天后自动删除。建议先导出备份。" },
    { question: "Kimi记忆消失了怎么找回？", answer: "如果记忆突然消失，请先检查是否误关闭了记忆空间。如果已关闭但未超过7天，重新开启即可恢复。" },
    { question: "Kimi记忆空间有大小限制吗？", answer: "目前Kimi官方未公布具体容量限制。建议定期整理，或使用AI Memory跨平台管理。" },
    { question: "如何导出Kimi的对话和记忆？", answer: "Kimi目前不提供官方导出功能。可以使用AI Memory工具保存备份。" },
  ]} />
    </div>
  );
}
