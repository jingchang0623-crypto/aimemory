import type { Metadata } from 'next';
import Link from 'next/link';
import StatsDashboard from '@/components/StatsDashboard';

export const metadata: Metadata = {
  title: 'AI对话分析仪表盘 | AI Memory',
  description: '查看你的AI对话数据分析：按平台统计、时间线、对话排名。上传ChatGPT、Claude、DeepSeek数据即可查看。',
  openGraph: {
    title: 'AI对话分析仪表盘',
    description: '查看你的AI对话数据分析，上传数据即可查看。',
    url: 'https://aimemory.pro/stats',
    type: 'website',
    locale: 'zh_CN',
  },
  alternates: {
    canonical: 'https://aimemory.pro/stats',
  },
};

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">🧠 AI Memory</Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/features" className="text-gray-600 hover:text-gray-900">功能</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">博客</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">价格</Link>
            <Link href="/" className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 text-sm">免费使用</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">对话分析仪表盘</h1>
          <p className="text-gray-600">
            上传你的AI对话数据，即可查看详细的分析统计。支持ChatGPT、Claude、DeepSeek、Gemini、Kimi。
          </p>
        </div>

        {/* Stats Dashboard Component */}
        <StatsDashboard />

        {/* Empty State CTA */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-2xl mx-auto">
            <div className="text-5xl mb-4">📊</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">还没有数据？</h2>
            <p className="text-gray-600 mb-6">
              上传你的第一个AI对话文件，即可看到详细的分析数据。支持ZIP、JSON格式。
            </p>
            <Link 
              href="/#upload" 
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              📤 立即上传
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-semibold text-gray-900 mb-2">平台分布</h3>
            <p className="text-sm text-gray-600">按ChatGPT、Claude、DeepSeek等平台统计对话数量</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="text-3xl mb-3">📅</div>
            <h3 className="font-semibold text-gray-900 mb-2">时间线</h3>
            <p className="text-sm text-gray-600">查看你每月的AI对话活跃度趋势</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="font-semibold text-gray-900 mb-2">热门对话</h3>
            <p className="text-sm text-gray-600">找出消息最多的对话，快速访问重要内容</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>AI Memory — 你的AI对话，永久可搜索</p>
          <div className="mt-2 space-x-4">
            <Link href="/features" className="hover:text-gray-700">功能</Link>
            <Link href="/pricing" className="hover:text-gray-700">价格</Link>
            <Link href="/blog" className="hover:text-gray-700">博客</Link>
            <Link href="/privacy" className="hover:text-gray-700">隐私政策</Link>
            <Link href="/terms" className="hover:text-gray-700">服务条款</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
