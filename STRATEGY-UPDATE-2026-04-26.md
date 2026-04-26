# AI Memory (aimemory.pro) — 产品与营销策略 v2.0

**更新日期**: 2026-04-26
**基于**: 10轮深度研究（关键词/技术/变现/竞品/蚕食风险/MCP/Mem0/AppSumo）

---

## 一、市场形势判断

### 1.1 关键趋势（最重要发现）

| 信号 | 数据 | 含义 |
|------|------|------|
| "chatgpt memory"搜索量均值34，已超"chatgpt export"的24 | +42% | **记忆赛道比导出赛道更热** |
| ChatGPT 2025年两次大规模记忆数据丢失 | 用户信任危机 | 恐惧营销素材 |
| ChatGPT记忆仅1,500词上限 | YouTube上大量"memory full fix"视频 | 明确痛点 |
| Claude率先推出记忆导入/导出（实验性） | 行业风向标 | 记忆可移植性被认可 |
| Google上线"切换工具"（单向迁入记忆） | 平台锁定策略 | 跨平台需求不会消失 |
| Mem0获$24M融资、54K GitHub Stars | 开发者记忆API赛道火爆 | B2B方向有前景 |

### 1.2 蚕食风险评估：**65/100（中高风险），但12-18个月窗口期明确**

**已被蚕食（不要做）**:
- 基本偏好记忆 — 三家都有
- 自定义指令 — 完全覆盖
- 记忆开关/删除 — 完全覆盖

**不会被蚕食（必须做）**:
- 跨平台统一记忆管理 — 三家竞品关系决定不会互通
- 跨AI记忆迁移 — 标准化格式不存在
- 记忆AI分析/可视化 — 原生只有基础列表
- 记忆注入任意AI — 无平台主动把记忆送给竞品
- 用户数据主权 — 原生记忆存在平台服务器上

### 1.3 竞争格局

```
开发者层:    Mem0 ($24M, 54K⭐) ← 统治级，B2B基础设施
MCP生态:    官方memory server, engram (2.8K⭐) ← 开发者工具
应用层:      AI Context Flow (2K用户, AppSumo, 5.0评分) ← 直接竞品
             MemoryPlugin ($60-80/年, 18+平台) ← 直接竞品
终端用户:    Chat Memo (10K用户), AI Exporter (80K) ← 功能同质化
我们的位置:  终端用户记忆管理 + 跨平台聚合 + 记忆活化
```

---

## 二、产品策略

### 2.1 核心定位（更新）

**旧定位**: AI对话记忆管理工具
**新定位**: **"跨AI记忆中枢" — 让你的AI记忆活起来，跨越所有平台**

核心文案:
> "ChatGPT's memory is 1,500 words. Your life is not."
> "The AI memory solution ChatGPT can't give you. Unlimited, cross-platform, you own your data."

### 2.2 产品架构（三层）

```
┌─────────────────────────────────────────────────┐
│              AI Memory Platform                  │
├─────────────┬─────────────┬─────────────────────┤
│  MCP Server │  Web App    │  Chrome Extension   │
│  (核心引擎)  │  (管理界面)  │  (数据采集层)        │
├─────────────┴─────────────┴─────────────────────┤
│              统一存储层 (SQLite+FTS5 / 云端pgvector) │
└─────────────────────────────────────────────────┘
```

**优先级排序**:
1. **MCP Server** — 最高优先级。113个客户端生态 = 同时在Claude Desktop、Cursor、VS Code Copilot中可用，比Chrome Web Store更高效
2. **Chrome Extension** — 数据采集层，支持ChatGPT/Claude/Gemini/DeepSeek
3. **Web Dashboard** — 记忆管理、分析、可视化界面

### 2.3 功能优先级矩阵

| 优先级 | 功能 | 理由 | 竞品差距 |
|--------|------|------|----------|
| 🔴 P0 | MCP Server（stdio + HTTP双模式） | 113客户端分发渠道 | AI Context Flow有但不完善 |
| 🔴 P0 | ChatGPT记忆导出（DOM拦截） | "memory full"搜索量暴涨 | 现有方案不稳定 |
| 🔴 P0 | Claude记忆导入/导出（对接实验性功能） | 窗口期，Claude官方刚开放 | 无竞品做好 |
| 🟡 P1 | 记忆格式标准化（统一JSON Schema） | 先发优势=生态壁垒 | 行业空白 |
| 🟡 P1 | DeepSeek支持 | 中文市场蓝海 | 无竞品支持 |
| 🟡 P1 | 记忆AI分析（知识图谱、洞察报告） | 原生功能无此能力 | MemoryPlugin有但弱 |
| 🟢 P2 | 记忆注入（自动推荐相关记忆） | 核心差异化 | AI Context Flow有Ctrl+i |
| 🟢 P2 | 云端同步（E2E加密） | #1付费转化杠杆 | AI Context Flow有 |
| 🟢 P2 | 记忆层级演化（Episode→Fact→Pattern→Wisdom） | 深度差异化 | 全行业无此功能 |
| 🔵 P3 | 团队共享记忆库 | B2B方向 | 市场空白 |

### 2.4 记忆注入技术方案（分层）

| 层级 | 方案 | 适用场景 | 稳定性 |
|------|------|----------|--------|
| 第一层 | API直接调用（用户API Key） | 高级用户 | ⭐⭐⭐⭐⭐ |
| 第二层 | 浏览器扩展 API拦截 | 中级用户 | ⭐⭐⭐⭐ |
| 第三层 | 浏览器扩展 DOM注入 | 免费用户 | ⭐⭐⭐ |
| 兜底 | 注入为第一条消息+引导提示 | 所有平台通用 | ⭐⭐⭐⭐⭐ |

---

## 三、定价策略

### 3.1 定价方案

```
Free（永久免费）
├── 本地存储，无限制
├── 支持3个AI平台（ChatGPT/Claude/Gemini）
├── 基础全文搜索
├── 每月5次AI分析
└── MCP Server基础版（stdio）

Pro — $9.9/月 或 $69/年（$5.75/月，省42%）
├── 无限AI平台支持（含DeepSeek）
├── 云端同步（E2E加密）
├── AI记忆召回 / 知识图谱
├── 每月500次AI分析
├── 跨设备同步
├── 记忆注入（自动推荐）
├── MCP Server完整版（stdio + HTTP）
└── 优先支持

中国版 Pro — ¥29/月 或 ¥199/年（¥16.6/月）
└── 同Pro功能，微信支付/支付宝

Team — $19.9/用户/月（≥3人）
├── Pro全部功能
├── 团队共享记忆库
├── 管理员仪表板
├── SSO (SAML)
└── 使用量分析

AppSumo LTD — $49/$129/$299（三档）
├── T1: 1用户, 5GB存储
├── T2: 3用户, 20GB存储
├── T3: 10用户, 50GB存储
└── 对标AI Context Flow ($59-$339)，更低价+更多存储
```

### 3.2 定价依据

- 行业共识$3.88-$9.9/月，低于$10心理门槛
- AI Context Flow: $59-$339 LTD, $10-20/月 → 我们定价略低抢占市场
- MemoryPlugin: $60-80/年 → 我们$69/年对标
- Freemium转化率基准: 3-5%（Chrome扩展2-5%）
- AI原生<$50/月产品年流失率77% → 必须用数据引力建立切换成本

---

## 四、营销策略

### 4.1 SEO策略（更新）

**核心洞察**: "chatgpt memory"搜索量（均值34）已超"chatgpt export"（均值24）42%。每次ChatGPT更新记忆功能，反而驱动更多人搜索替代方案。

**关键词优先级**:

| 优先级 | 关键词 | 月搜索量估算 | 竞争度 | 内容策略 |
|--------|--------|-------------|--------|----------|
| 🔴 | chatgpt memory full | 5K-10K | 低 | 教程页 "How to Fix ChatGPT Memory Full" |
| 🔴 | chatgpt memory backup | 2K-5K | 低 | 教程页 "Backup ChatGPT Memory Permanently" |
| 🔴 | chatgpt memory alternative | 1K-3K | 极低 | 对比页 "Best ChatGPT Memory Alternatives 2026" |
| 🔴 | save chatgpt chats as pdf | 3K-8K | 低 | 教程页（已有类似页面，需优化） |
| 🟡 | chatgpt conversation history search | 2K-5K | 中 | 已有页面 |
| 🟡 | claude conversation export | 200-500 | 极低 | 教程页（新兴领域，先发优势大） |
| 🟡 | chatgpt to claude migration | 500-1K | 极低 | 迁移指南 |
| 🟢 | ai memory tool | 500-1K | 极低 | 首页定位词 |
| 🟢 | best ai conversation manager 2026 | 1K-2K | 低 | 已有页面 |

**内容更新计划**:

已有13篇博客页面。需要新增:

| 页面 | 目标关键词 | 优先级 |
|------|-----------|--------|
| /blog/chatgpt-memory-full-fix | chatgpt memory full | 🔴 P0 |
| /blog/chatgpt-memory-backup | chatgpt memory backup | 🔴 P0 |
| /blog/chatgpt-memory-alternative | chatgpt memory alternative | 🔴 P0 |
| /blog/claude-memory-export | claude conversation export, claude memory export | 🟡 P1 |
| /blog/chatgpt-to-claude-migrate | chatgpt to claude migration | 🟡 P1 |
| /blog/build-personal-ai-knowledge-base | ai knowledge base | 🟢 P2 |

**SEO技术任务**:
- [ ] 提交sitemap.xml到Google Search Console
- [ ] 为所有博客页添加FAQPage Schema标记
- [ ] 建立内部链接网络（记忆类文章互链）
- [ ] 添加OG/Twitter meta tags

### 4.2 渠道策略

| 渠道 | 优先级 | 预期效果 | 行动 |
|------|--------|----------|------|
| **MCP Server生态** | 🔴 最高 | 113客户端自动分发 | 开发并发布MCP Server到npm/pip |
| **Chrome Web Store** | 🔴 高 | 免费用户基础 | 上架扩展（当前仅ZIP分发） |
| **AppSumo** | 🟡 中 | 早期现金流$40K-$80K | 产品成熟后申请（通过率~10%） |
| **Reddit r/ChatGPT** | 🟡 中 | 早期用户+口碑 | 发布"我做了个ChatGPT记忆备份工具"帖子 |
| **Product Hunt** | 🟡 中 | 曝光+早期用户 | MCP Server发布时同步PH首发 |
| **YouTube** | 🟡 中 | SEO+教程流量 | 制作"ChatGPT Memory Full Fix"教程视频 |
| **V2EX/少数派** | 🟢 低 | 中文市场种子用户 | 中文版上线后推广 |
| **小红书/B站** | 🟢 低 | 中文市场流量 | 等英文市场验证后 |

### 4.3 内容营销策略

**核心原则**: 竞品无内容营销，教育性内容是明确机会。

**内容矩阵**:

| 类型 | 频率 | 平台 | 示例 |
|------|------|------|------|
| SEO博客 | 2篇/周 | aimemory.pro/blog | 教程、对比、指南 |
| YouTube教程 | 1个/月 | YouTube | "ChatGPT Memory Full Fix" |
| Reddit帖子 | 2篇/周 | r/ChatGPT, r/ClaudeAI | 痛点讨论+工具推荐 |
| Twitter/X | 每日 | X | AI记忆相关tips |

**恐惧营销素材**（验证有效）:
- "ChatGPT lost all my memories TWICE in 2025"
- "Your ChatGPT memory is only 1,500 words. Here's what happens when it's full."
- "Google's 'Switch Tool' only lets memories IN, never OUT. Here's how to protect yours."

---

## 五、技术路线图

### Phase 1（本月 — 0-4周）: MCP Server + 核心采集

| 周 | 任务 | 产出 |
|----|------|------|
| W1 | MCP Server开发（Python FastMCP） | stdio模式，5个核心Tools |
| W1 | ChatGPT记忆导出（拦截/backend-api/memories） | 浏览器扩展功能 |
| W2 | Claude记忆导入/导出（对接实验性功能） | 浏览器扩展功能 |
| W2 | 统一记忆格式JSON Schema设计 | 标准化文档 |
| W3 | MCP Server远程模式（Streamable HTTP） | Web端可用 |
| W3 | Chrome扩展上架Chrome Web Store | 公开分发 |
| W4 | 3篇新SEO博客页面 | 内容上线 |
| W4 | FAQ Schema + sitemap提交Google | SEO基础 |

### Phase 2（第2-3月）: 记忆活化 + AppSumo

| 任务 | 产出 |
|------|------|
| AI记忆分析（知识图谱、洞察报告） | Pro核心功能 |
| 记忆注入（自动推荐相关记忆） | Pro核心功能 |
| 云端同步（E2E加密） | Pro付费门控 |
| DeepSeek支持 | 平台扩展 |
| AppSumo LTD上架申请 | 收入渠道 |
| Product Hunt首发 | 曝光 |

### Phase 3（第4-6月）: B2B + 中国市场

| 任务 | 产出 |
|------|------|
| Team层（共享记忆库+管理后台） | B2B产品 |
| 中国版（微信支付/支付宝） | 中国市场 |
| 企业版规划（SSO/审计/合规） | B2B准备 |

---

## 六、收入预测

### 保守模型

| 时间点 | 用户数 | 转化率 | 付费用户 | MRR |
|--------|--------|--------|----------|-----|
| M3 | 2,000 | 2% | 40 | $400 |
| M6 | 8,000 | 3% | 240 | $2,400 |
| M12 | 30,000 | 4% | 1,200 | $12,000 |
| M18 | 80,000 | 4% | 3,200 | $32,000 |

### AppSumo一次性收入（Phase 2）
- 标准表现: $40K-$80K（60天campaign）
- 高表现: $100K-$400K
- 到手约50%（AppSumo分成）

### 关键假设
- MCP Server带来30%+用户增长（113客户端生态）
- Chrome Web Store自然流量每月1K-3K新增
- SEO内容每月贡献2K-5K访问
- AppSumo 60天campaign带来2,000-5,000 LTD用户

---

## 七、风险与应对

| 风险 | 概率 | 影响 | 应对 |
|------|------|------|------|
| ChatGPT推出跨平台记忆 | 中 | 致命 | 强化"用户数据主权"+"记忆分析"差异化 |
| AI Context Flow快速增长 | 中 | 高 | 低价+更多存储+MCP先发 |
| Mem0推出终端用户产品 | 低 | 致命 | Mem0是B2B层，短期不会 |
| Chrome扩展API变更 | 中 | 中 | MCP Server作为备选分发渠道 |
| AI原生产品流失率高 | 高 | 中 | 数据引力+习惯养成+年付锁定 |
| AppSumo申请被拒 | 中 | 低 | 自有渠道+Product Hunt首发 |

---

## 八、立即行动清单（本周）

### 🔴 本周必做

1. **开发MCP Server MVP**（Python FastMCP，stdio模式，5个Tools）
   - `save_memory` / `search_memories` / `list_memories` / `update_memory` / `delete_memory`
   - 存储: SQLite + FTS5（复用现有后端）

2. **ChatGPT记忆导出功能**（浏览器扩展）
   - 拦截 `/backend-api/memories` 端点
   - 导出为统一JSON格式

3. **新增3篇SEO博客**:
   - `/blog/chatgpt-memory-full-fix`
   - `/blog/chatgpt-memory-backup`
   - `/blog/chatgpt-memory-alternative`

4. **提交sitemap到Google Search Console**

### 🟡 下周

5. Chrome Web Store上架
6. Claude记忆导入/导出对接
7. FAQ Schema标记
8. 内部链接网络建立

---

## 九、记忆（更新到项目MEMORY）

```
AI Memory项目关键研究发现（2026-04-26更新）：

【最重要的发现】
1. "chatgpt memory"搜索量（均值34）已超"chatgpt export"（均值24）42%
2. 每次ChatGPT更新记忆功能，反而驱动更多人搜索替代方案
3. MCP协议是比Chrome Web Store更高效的分发渠道（113客户端）
4. Mem0 ($24M, 54K⭐) 是B2B基础设施层，不直接竞争但需关注
5. AI Context Flow是直接竞品（2K用户, $59-$339 LTD, AppSumo）
6. 12-18个月窗口期，跨平台统一记忆是唯一安全差异化

【竞品更新】
- AI Context Flow: 2K用户, 5.0评分, AppSumo Select, $59-$339 LTD
- MemoryPlugin: $60-80/年, 18+平台, "Cure ChatGPT AI Amnesia"
- Mem0: $24M融资, 54K⭐, B2B开发者记忆API
- Unmarkdown: 基于MCP的外部知识库

【定价共识】
- 海外: $9.9/月, $69/年
- 中国: ¥29/月, ¥199/年
- AppSumo LTD: $49/$129/$299

【技术路线】
- MCP Server为核心引擎（最高优先级）
- Chrome扩展为采集层
- Web Dashboard为管理界面
- 记忆注入分层: API调用→API拦截→DOM注入→消息引导
```
