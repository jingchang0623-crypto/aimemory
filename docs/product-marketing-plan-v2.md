# AI Memory — 产品+营销优化方案 v2

> 基于 8 轮深度研究（关键词、技术、变现、竞品、LTD、B2B、Chrome扩展、API成本）
> 更新日期：2026-04-25

---

## 一、核心定位（不变但更清晰）

```
不做：又一个"保存+导出"工具（红海，AI Exporter 8万用户）
要做：让记忆"活起来"的 AI 记忆引擎
```

**一句话定位**：AI Memory — Your cross-platform AI conversation hub with intelligent search and memory injection.

---

## 二、产品路线图（基于技术可行性更新）

### Phase 1：Chrome 扩展 MVP（0-3个月）

**为什么先做扩展而非网页工具？**
- 所有中国平台（DeepSeek/Kimi/豆包）无导出 API，浏览器扩展是**唯一路径**
- 竞品 Chat Memo 靠扩展做到 10K 用户
- 扩展的 toolbar 图标 = 免费每日曝光，留存率远高于网页

**技术架构（已验证可行）**：
```
Content Script (MAIN world)
  ├─ 网络拦截 fetch/XHR → 获取 API 原始响应（比 DOM 稳定 10 倍）
  ├─ MutationObserver → 捕获实时流式内容
  └─ 发送到 Service Worker

Service Worker
  ├─ 处理/去重/格式化数据
  ├─ 存储到 IndexedDB（无大小限制）
  └─ 管理同步逻辑

Side Panel (Chrome 114+)
  ├─ 全文搜索（FTS5 级别）
  ├─ 标签/文件夹管理
  └─ 始终保持打开状态
```

**MVP 支持平台优先级**：
1. ChatGPT + Claude（用户基数最大，DOM 最稳定）
2. DeepSeek（无竞品支持，**中国市场空白**，Loominary 也不支持）
3. Gemini（有 Loominary 参考实现）

**差异化功能（MVP 就要有）**：
- 记忆注入：`execCommand('insertText')` 将历史上下文注入新对话输入框
- 全文搜索：跨所有平台对话的 FTS5 搜索
- 自动标签：基于内容关键词自动分类

### Phase 2：付费 + 云同步（3-6个月）

- E2E 加密云同步（libsodium.js，XChaCha20-Poly1305）
- BYOK 选项（用户自带 API 密钥解锁 AI 分析）
- Chrome Web Store 正式上架

### Phase 3：Web 端 + 团队版（6-12个月）

- Web 端同步浏览（已有 aimemory.pro 基础）
- 团队共享记忆库
- 对话审计日志（B2B 切入点）

---

## 三、变现方案（基于 LTD + API 成本研究更新）

### 定价矩阵

| 套餐 | 价格 | AI 调用 | 核心功能 | 毛利率 |
|------|------|---------|---------|--------|
| **Free** | $0 | 30次/月 | 本地保存+搜索，3个平台 | — |
| **Pro** | $9/月 或 $69/年 | 500次/月 | 全平台+AI分析+云同步 | 97% |
| **Pro+** | $29/月 或 $199/年 | 2,000次/月 | 无限平台+记忆注入+优先支持 | 97% |
| **Team** | $79/月 | 10,000次/月 | 5用户+共享记忆库+审计日志 | 95% |
| **LTD** | $79 一次性 | 500次/月永久 | Pro 全部功能 | 现金流优先 |

**定价依据**：
- $9/月 < $10 心理门槛，竞品区间 $3.88-$9.99
- API 成本极低：重度用户 $0.45/月，毛利率 97%
- LTD $79 = Pro 年费 $69 × 1.14，用户感觉"赚了"

### 变现时间线

```
M1-M3:   Chrome 扩展 MVP，完全免费，目标 1K 用户
M3-M6:   上架 Chrome Web Store，积累 4.8+ 评分
M6-M8:   AppSumo LTD 发布（$79），目标 $50K-$100K 现金流
M8-M12:  推出 Pro 订阅，Free 版加 30次/月限制
M12-18:  推出 Team 版，探索 B2B 对话审计
M18+:    Enterprise 版，瞄准金融/医疗合规市场
```

### AppSumo LTD 关键数据

| 指标 | 数据 |
|------|------|
| 最佳定价区间 | $49-$69（$79 稍高但可接受） |
| AppSumo 分成 | 40-50%（平台拿走） |
| 60 天平均收入 | $40K-$80K（中等表现） |
| 申请通过率 | ~3-10%（非常严格） |
| AI 工具存活率 | ~45%（需注意） |
| 前提条件 | 产品完全可用、已有付费用户、公开路线图 |

### AI 成本控制策略

| 策略 | 节省 |
|------|------|
| 智能路由（短→Nano，中→Mini，复杂→Flash） | 40% |
| Batch API（非实时任务） | 50% |
| 应用层缓存（相同内容 24h） | 30% |
| BYOK（重度用户自带密钥） | 100% |

推荐模型：Gemini 2.5 Flash-Lite（$0.10/$0.40 per 1M tokens）

---

## 四、SEO/内容营销方案（基于关键词研究更新）

### 已完成

- ✅ 16 篇 SEO 博文，17 个 URL 在 sitemap
- ✅ PageSpeed 95-100，全绿
- ✅ 所有页面有 meta description、keywords、CTA

### 高价值未覆盖关键词

| 关键词 | 月搜索量 | 竞争度 | 建议页面 |
|--------|---------|--------|---------|
| save chatgpt as pdf | 高 | 低 | /blog/save-chatgpt-as-pdf |
| chatgpt conversation disappeared | 高 | 低 | ✅ 已有 |
| chatgpt to claude | 中 | 极低 | ✅ 已有 |
| chatgpt chrome extension | 高 | 中 | /blog/best-chatgpt-chrome-extensions |
| ai chat history manager | 中 | 极低 | ✅ 已覆盖 |
| export deepseek conversations | 中 | 极低 | ✅ 已有 |
| chatgpt memory vs custom instructions | 中 | 低 | /blog/chatgpt-memory-vs-custom-instructions |

### 内容策略

**教育型内容（流量入口）**：
- "How to Export Any AI Chat"（通用指南）
- "ChatGPT Memory vs Custom Instructions: What's the Difference?"
- "Best ChatGPT Chrome Extensions in 2026"

**对比型内容（精准用户）**：
- ✅ "Chat Memo vs AI Memory"（已有）
- ✅ "Best AI Conversation Managers 2026"（已有）
- "AI Memory vs Supermemory: Which is Better?"

**问题解决型内容（高转化）**：
- ✅ "AI Conversation Disappeared"（已有）
- ✅ "ChatGPT Context Window Limit"（已有）
- "How to Search Across All Your AI Conversations"

### Chrome Web Store SEO（ASO）

**标题格式**：`AI Memory Manager | Save & Search ChatGPT/Claude/DeepSeek`

**高价值关键词**：ChatGPT, Claude, DeepSeek, Gemini, export, search, memory, backup

**多语言**：支持 10 种语言（AI Exporter 靠此显著扩大覆盖面）

**目标**：4.5+ 评分 → Featured 徽章

---

## 五、技术方案（基于深度研究更新）

### Chrome 扩展关键技术决策

| 决策点 | 方案 | 理由 |
|--------|------|------|
| 数据捕获 | **网络拦截为主**，DOM 抓取为辅 | 网络拦截比 DOM 稳定 10 倍 |
| 存储 | **IndexedDB** | 无大小限制，支持结构化查询 |
| 加密 | **libsodium.js** (XChaCha20-Poly1305) | 最完整的浏览器加密方案 |
| 同步架构 | **模仿 Joplin** | 成熟、简单、支持多后端 |
| UI | **Side Panel** (Chrome 114+) | 持续可用，不占页面空间 |
| 扩展框架 | **WXT** (wxt.dev) | 自动生成多浏览器适配 |

### 核心风险与缓解

| 风险 | 严重性 | 缓解 |
|------|--------|------|
| DOM 选择器失效 | 高 | 网络拦截为主 + 级联回退 + 健康监控 |
| 平台反扩展检测 | 高 | MAIN world 注入 + 尊重 ToS |
| Service Worker 30s 超时 | 中 | 即时持久化到 chrome.storage |
| 中国平台 DOM 不稳定 | 高 | 配置驱动选择器 + 社区贡献 |

### 深度支持 DeepSeek（差异化机会）

Loominary（432 stars）和所有主流竞品**都不支持 DeepSeek**。这是明确的市场空白。

DeepSeek 的特点：
- 无原生导出功能
- React 基础，选择器不稳定
- 中国用户增长极快（Bilibili 相关视频播放量 1.8 万+）

**建议**：MVP 就支持 DeepSeek，作为差异化卖点。

---

## 六、B2B 远期机会（6-12 个月后）

### 法规驱动的需求

| 法规 | 核心要求 | 与 AI Memory 的关联 |
|------|---------|-------------------|
| EU AI Act Art.12 | 高风险 AI 系统必须自动记录运行事件 | 对话记录管理直接相关 |
| EU AI Act Art.19 | 日志保留至少 6 个月，不可篡改 | 需要可靠的对话存储 |
| SOC 2 CC7.2 | AI 交互持续监控和日志记录 | 企业审计需求 |
| HIPAA | 医疗 AI 对话记录保留 6 年 | 垂直行业机会 |

### B2B 定价参考

| 层级 | 月费 | 目标客户 |
|------|------|---------|
| Starter | $500-$2,000 | 初创/小团队 |
| Professional | $5,000-$15,000 | 中型企业 |
| Enterprise | $25,000-$100,000+ | 大型企业 |

### 中国 B2B 渠道

- 钉钉（7 亿用户）/ 飞书 / 企业微信应用市场
- 阿里云 / 腾讯云 / 华为云市场
- 等保三级认证（政企市场门票）

---

## 七、立即行动清单（更新版）

### 本周（P0）

| # | 任务 | 耗时 | 影响 |
|---|------|------|------|
| 1 | 注册 Chrome Web Store 开发者账号（$5） | 10分钟 | 基础设施 |
| 2 | 用 WXT 框架搭建扩展骨架 | 2小时 | 产品 |
| 3 | 实现 ChatGPT 网络拦截 + IndexedDB 存储 | 4小时 | 核心功能 |
| 4 | 新增博文：save-chatgpt-as-pdf | 1小时 | SEO |

### 下周（P1）

| # | 任务 | 耗时 | 影响 |
|---|------|------|------|
| 5 | 实现 Claude 网络拦截 | 3小时 | 产品 |
| 6 | 实现 DeepSeek DOM 抓取 | 4小时 | 差异化 |
| 7 | Side Panel 搜索 UI | 4小时 | 用户体验 |
| 8 | 提交 Chrome Web Store 审核 | 1小时 | 分发 |

### 本月（P2）

| # | 任务 | 耗时 | 影响 |
|---|------|------|------|
| 9 | 记忆注入功能 | 4小时 | 核心差异化 |
| 10 | 自动标签系统 | 4小时 | 产品 |
| 11 | 积累 4.8+ 评分 | 持续 | CWS 排名 |
| 12 | Reddit/HN/即刻 推广 | 2小时 | 增长 |

---

## 八、关键数据仪表盘

| 指标 | 当前值 | M3 目标 | M6 目标 |
|------|--------|---------|---------|
| 网站博文数 | 16 | 20 | 30 |
| Sitemap URL | 17 | 25 | 40 |
| Chrome 扩展用户 | 0 | 500 | 2,000 |
| CWS 评分 | — | 4.8+ | 4.8+ |
| 月活用户 | 0 | 200 | 1,000 |
| MRR | $0 | $0 | $500 |

---

*本方案基于 8 轮自动化深度研究（关键词、技术、变现、竞品、LTD、B2B、Chrome 扩展、API 成本）综合制定。*
