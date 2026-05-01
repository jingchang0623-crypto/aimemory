'use client';

import { useState, useEffect } from 'react';

interface StatsData {
  totalConversations: number;
  totalMessages: number;
  avgMessagesPerConversation: number;
  platforms: { platform: string; count: number }[];
  timeline: { month: string; count: number }[];
  topConversations: { title: string; platform: string; message_count: number; created_at: string }[];
  roleBreakdown: { role: string; count: number }[];
  dateRange: { first_conversation: string | null; last_conversation: string | null };
}

const platformColors: Record<string, { bg: string; text: string; border: string }> = {
  chatgpt: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  claude: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  deepseek: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  gemini: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  chatmemo: { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' },
};

function getPlatformStyle(platform: string) {
  return platformColors[platform.toLowerCase()] || { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' };
}

function formatMonth(month: string): string {
  if (!month) return '';
  const [y, m] = month.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[parseInt(m) - 1]} ${y}`;
}

export default function StatsDashboard({ refreshTrigger }: { refreshTrigger?: number }) {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/stats')
      .then(r => r.json())
      .then(data => {
        if (!data.error) setStats(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [refreshTrigger]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full"></div>
      </div>
    );
  }

  if (!stats || stats.totalConversations === 0) {
    return null;
  }

  const maxTimelineCount = Math.max(...stats.timeline.map(t => t.count), 1);
  const userMsgs = stats.roleBreakdown.find(r => r.role === 'user')?.count || 0;
  const assistantMsgs = stats.roleBreakdown.find(r => r.role === 'assistant')?.count || 0;

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          icon="💬"
          label="Conversations"
          value={stats.totalConversations}
        />
        <MetricCard
          icon="📝"
          label="Messages"
          value={stats.totalMessages}
        />
        <MetricCard
          icon="📊"
          label="Avg per Chat"
          value={stats.avgMessagesPerConversation}
          suffix="msgs"
        />
        <MetricCard
          icon="🌐"
          label="Platforms"
          value={stats.platforms.length}
        />
      </div>

      {/* Platform Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Platform Distribution</h3>
        <div className="space-y-3">
          {stats.platforms.map(p => {
            const style = getPlatformStyle(p.platform);
            const pct = Math.round((p.count / stats.totalConversations) * 100);
            return (
              <div key={p.platform}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-medium ${style.text}`}>
                    {p.platform.charAt(0).toUpperCase() + p.platform.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">{p.count} ({pct}%)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${style.bg.replace('50', '400')}`}
                    style={{ width: `${pct}%`, backgroundColor: style.text.includes('green') ? '#22c55e' : style.text.includes('purple') ? '#a855f7' : style.text.includes('blue') ? '#3b82f6' : style.text.includes('orange') ? '#f97316' : '#6b7280' }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Activity Timeline */}
      {stats.timeline.length > 1 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Activity Timeline</h3>
          <div className="flex items-end gap-1.5 h-32">
            {stats.timeline.map((t, i) => (
              <div key={t.month} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs text-gray-400">{t.count}</span>
                <div
                  className="w-full bg-blue-500 rounded-t-sm transition-all duration-500 hover:bg-blue-600 min-h-[4px]"
                  style={{ height: `${Math.max((t.count / maxTimelineCount) * 100, 4)}%` }}
                  title={`${formatMonth(t.month)}: ${t.count} conversations`}
                ></div>
                <span className="text-[10px] text-gray-400 truncate w-full text-center">
                  {formatMonth(t.month)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Top Conversations */}
      {stats.topConversations.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Longest Conversations</h3>
          <div className="space-y-2">
            {stats.topConversations.map((c, i) => {
              const style = getPlatformStyle(c.platform);
              return (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                  <span className="text-sm font-bold text-gray-300 w-5">{i + 1}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
                    {c.platform}
                  </span>
                  <span className="text-sm text-gray-900 flex-1 truncate">{c.title}</span>
                  <span className="text-xs text-gray-400">{c.message_count} msgs</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Message Ratio */}
      {(userMsgs + assistantMsgs) > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Message Breakdown</h3>
          <div className="flex rounded-full overflow-hidden h-4 bg-gray-100">
            <div
              className="bg-blue-500 h-full transition-all duration-500"
              style={{ width: `${Math.round((userMsgs / (userMsgs + assistantMsgs)) * 100)}%` }}
              title={`You: ${userMsgs} messages`}
            ></div>
            <div
              className="bg-green-500 h-full transition-all duration-500"
              style={{ width: `${Math.round((assistantMsgs / (userMsgs + assistantMsgs)) * 100)}%` }}
              title={`AI: ${assistantMsgs} messages`}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-blue-600">👤 You: {userMsgs} ({Math.round((userMsgs / (userMsgs + assistantMsgs)) * 100)}%)</span>
            <span className="text-xs text-green-600">🤖 AI: {assistantMsgs} ({Math.round((assistantMsgs / (userMsgs + assistantMsgs)) * 100)}%)</span>
          </div>
        </div>
      )}

      {/* Date Range */}
      {stats.dateRange.first_conversation && (
        <div className="text-center text-xs text-gray-400">
          📅 {formatMonth(stats.dateRange.first_conversation.substring(0, 7))} — {formatMonth(stats.dateRange.last_conversation?.substring(0, 7) || '')}
        </div>
      )}
    </div>
  );
}

function MetricCard({ icon, label, value, suffix }: { icon: string; label: string; value: number; suffix?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-2xl font-bold text-gray-900">
        {value.toLocaleString()}
        {suffix && <span className="text-sm font-normal text-gray-400 ml-1">{suffix}</span>}
      </div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
