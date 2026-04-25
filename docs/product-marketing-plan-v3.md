# AI Memory — 产品+营销优化方案 v3

> 基于 11 轮深度研究（v2 的 8 轮 + 新增：MCP协议、记忆注入技术、竞品深度分析、AI记忆缺陷）
> 更新日期：2026-04-26
> 基线版本：v2（2026-04-25）

---

## 一、核心定位（进化：从记忆引擎到记忆基础设施）

```
不做：又一个"保存+导出"工具（红海，AI Exporter 8万用户）
不做：另一个线性聊天历史管理器（AI Context Flow 已占位）
要做：跨平台 AI 认知记忆引擎 — 带有 E/F/P/W 层级结构
```

**一句话定位**：AI Memory — Your cross-platform AI memory engine with cognitive hierarchy and MCP integration.

**定位升级理由**：
- Stash（HN 133 pts）证明了认知层级记忆（Episodes→Facts→Patterns→Wisdom）是新范式
- AI Context Flow 已占据"线性记忆管理"定位，正面硬刚不利
- MCP 协议 35x 爆发式增长（4M→150M npm 下载/年），记忆是 MCP 核心用例
- ChatGPT 原生记忆有致命缺陷（污染、无法删除、无法关闭），窗口期存在

---

## 二、产品路线图（重大更新：MCP + 认知层级）

### Phase 1：Chrome 扩展 MVP（0-3个月）

**为什么先做扩展而非网页工具？**
- 所有中国平台（DeepSeek/Kimi/豆包）无导出 API，浏览器扩展是**唯一路径**
- 竞品 Chat Memo 靠扩展做到 10K 用户
- 扩展的 toolbar 图标 = 免费每日曝光，留存率远高于网页
- mcp-chrome（11.3K stars）已证明浏览器扩展可作为 MCP Server

**技术架构（v3 更新 — Native Setter Hack 替代 execCommand）**：
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
  ├─ E/F/P/W 层级记忆浏览器
  └─ 始终保持打开状态
```

**记忆注入技术方案（v3 关键更新）**：

| 平台 | 编辑器类型 | 注入方案 | 备注 |
|------|-----------|---------|------|
| ChatGPT | ProseMirror | **Native Setter Hack**：`nativeInputValueSetter.call(el, value)` + `input` event | 最可靠，绕过 React 合成事件 |
| Gemini | Quill | **innerHTML + dataset 模式** | Supermemory 验证可行 |
| Kimi | Lexical | **Native Setter Hack** + `dispatchEvent` | Lexical 拦截原生 input，需双重触发 |
| DeepSeek | 自定义 React | **Native Setter Hack** | React 项目通用 |
| Claude | 自定义 | `execCommand('insertText')` **仍可用** | 作为最后 fallback |

**为什么弃用 execCommand？**
- `document.execCommand()` 已被 W3C 标记为 **deprecated**
- ChatGPT ProseMirror 编辑器会拦截 execCommand 并阻止写入
- Native Setter Hack 直接调用原生 HTMLInputElement.prototype，绕过所有框架层
- Supermemory 的实践证明 innerHTML + dataset 是最可靠的跨平台方案

**MVP 支持平台优先级（不变）**：
1. ChatGPT + Claude（用户基数最大，DOM 最稳定）
2. DeepSeek（无竞品支持，**中国市场空白**，Loominary 也不支持）
3. Gemini（有 Loominary 参考实现）

**差异化功能（MVP 就要有）**：
- 记忆注入：Native Setter Hack 将历史上下文注入新对话输入框
- 全文搜索：跨所有平台对话的 FTS5 搜索
- 自动标签：基于内容关键词自动分类

### Phase 2：付费 + MCP Server + 认知层级（3-6个月）

- E2E 加密云同步（libsodium.js，XChaCha20-Poly1305）
- BYOK 选项（用户自带 API 密钥解锁 AI 分析）
- Chrome Web Store 正式上架
- **🆕 MCP Server 模式**（见第九节详细方案）
- **🆕 Stash 式 E/F/P/W 记忆层级**（见第八节详细方案）

### Phase 3：Web 端 + 团队版（6-12个月）

- Web 端同步浏览（已有 aimemory.pro 基础）
- 团队共享记忆库
- 对话审计日志（B2B 切入点）
- MCP Client 模式（连接其他 MCP Server 的记忆）

---

## 三、竞品格局与竞争定位（全新章节）

### 3.1 竞品全景图

| 竞品 | 类型 | 用户/Stars | 定价 | 核心能力 | 弱点 | 威胁级别 |
|------|------|-----------|------|---------|------|---------|
| **AI Context Flow** | Chrome 扩展 | <1000用户 | LTD $59-$339 | Memory Studio, MCP, TEE 隐私 | 无层级结构、无富媒体、线性聊天 UX | 🔴 **最高** |
| **Mem0** | API 基础设施 | 90K 开发者 | API 按量付费 | 开发者记忆层 | 面向开发者、无终端用户 UI | 🟡 间接 |
| **Zep** | API 基础设施 | 25.4K stars | 开源+企业版 | 时序知识图谱 | 面向开发者、无终端用户 UI | 🟡 间接 |
| **Stash** | 本地工具 | HN 133 pts | 开源 | E/F/P/W 层级记忆 | 早期、无跨平台 | 🟡 潜在 |
| **OpenMemory** | MCP Server | 4K stars | 开源 | MCP 标准记忆 | 纯 API、无 UI | 🟢 合作机会 |
| **Chat Memo** | Chrome 扩展 | 10K+ 用户 | 免费 | 基础保存 | 无 AI、无注入 | 🟢 低 |
| **Supermemory** | Chrome 扩展 | 新上线 | 未知 | AI 治理记忆 | 早期、未经验证 | 🟡 中 |
| **Loominary** | Chrome 扩展 | 432 stars | 停更 | 多平台支持 | **已停更 1 个月+**，收购目标 | 🟢 低 |

### 3.2 竞争定位 vs AI Context Flow（核心竞争对手）

**AI Context Flow 优势**：
- 4.99 评分（Chrome Web Store），产品成熟
- 已有 MCP 集成、TEE 隐私
- AppSumo LTD 定价已建立锚点（$59/$149/$339）
- 团队有区块链/Web3 背景，技术能力强

**AI Context Flow 弱点（我们的攻击面）**：
1. **无记忆层级** — Bucket 是扁平的，没有 E/F/P/W 认知结构
2. **线性聊天 UX** — Memory Studio 是线性对话，非知识图谱
3. **无富媒体支持** — 纯文本，无图片/代码块/表格记忆
4. **Chrome 扩展为主** — 无原生桌面/移动端
5. **区块链背景** — 部分用户对 Web3 有抵触

**我们的差异化定位**：
```
AI Context Flow = "跨平台记忆同步器"（存储导向）
AI Memory       = "跨平台认知记忆引擎"（认知导向）
```

**核心叙事差异**：
- AI Context Flow："保存你的 AI 对话，跨平台同步"
- AI Memory："让 AI 记住你的认知进化 — 从对话到智慧"

### 3.3 潜在收购目标

**Loominary**（432 stars，已停更 1 个月+）：
- 已有 ChatGPT/Claude/Gemini/Perplexity 支持
- 开源，可直接 fork
- 团队可能已放弃，有低成本收购/接管机会
- 建议：联系作者，提出合作或代码贡献

---

## 四、变现方案（v3 定价更新：精准打击 AI Context Flow）

### 定价矩阵（v3 更新）

| 套餐 | 价格 | AI 调用 | 核心功能 | 毛利率 |
|------|------|---------|---------|--------|
| **Free** | $0 | 30次/月 | 本地保存+搜索，3个平台 | — |
| **Pro** | **$4.99/月** 或 $39/年 | 500次/月 | 全平台+AI分析+云同步+E/F/P/W | 97% |
| **Pro+** | **$14.99/月** 或 $99/年 | 2,000次/月 | 无限平台+记忆注入+MCP+优先支持 | 97% |
| **Team** | $49/月 | 10,000次/月 | 5用户+共享记忆库+审计日志 | 95% |
| **LTD** | **$49-$99 一次性** | 500次/月永久 | Pro 全部功能 | 现金流优先 |

**v3 定价策略 vs AI Context Flow**：

| 维度 | AI Context Flow | AI Memory v3 | 策略 |
|------|----------------|-------------|------|
| 月费 | $10-$20 | **$4.99** | 低于 $5 心理门槛，直接半价 |
| LTD | $59/$149/$339 | **$49/$99** | 低价档 $49 抢用户，高价档 $99 留利润空间 |
| 定位 | "记忆同步" | "认知记忆引擎" | 价值感更高但价格更低 |

**定价依据**：
- $4.99/月 < $5 心理门槛，直接击穿 AI Context Flow 的 $10-$20 区间
- API 成本极低：重度用户 $0.45/月，毛利率 97%
- LTD $49 = 入门引流，$99 = 利润款（仍是 AI Context Flow $149 的 66%）
- 战略意图：**价格 + 功能双重打击**，让 AI Context Flow 无法通过降价应对

### 变现时间线（v3 更新）

```
M1-M3:   Chrome 扩展 MVP，完全免费，目标 1K 用户
M3-M5:   上架 Chrome Web Store，积累 4.8+ 评分
M5-M6:   AppSumo LTD 发布（$49/$99），目标 $30K-$80K 现金流
M6-M9:   推出 Pro 订阅（$4.99/月），Free 版加 30次/月限制
M6-M9:   🆕 MCP Server 模式上线，进入开发者生态
M9-M12:  推出 Team 版，探索 B2B 对话审计
M12+:    Enterprise 版，瞄准金融/医疗合规市场
```

### AppSumo LTD 关键数据（不变）

| 指标 | 数据 |
|------|------|
| 最佳定价区间 | $49-$69（我们的 $49 入门在最佳区间低端） |
| AppSumo 分成 | 40-50%（平台拿走） |
| 60 天平均收入 | $40K-$80K（中等表现） |
| 申请通过率 | ~3-10%（非常严格） |
| AI 工具存活率 | ~45%（需注意） |
| 前提条件 | 产品完全可用、已有付费用户、公开路线图 |

### AI 成本控制策略（不变）

| 策略 | 节省 |
|------|------|
| 智能路由（短→Nano，中→Mini，复杂→Flash） | 40% |
| Batch API（非实时任务） | 50% |
| 应用层缓存（相同内容 24h） | 30% |
| BYOK（重度用户自带密钥） | 100% |

推荐模型：Gemini 2.5 Flash-Lite（$0.10/$0.40 per 1M tokens）

---

## 五、SEO/内容营销方案（v3 更新）

### 已完成

- ✅ 16 篇 SEO 博文，17 个 URL 在 sitemap
- ✅ PageSpeed 95-100，全绿
- ✅ 所有页面有 meta description、keywords、CTA

### 高价值未覆盖关键词（v3 新增）

| 关键词 | 月搜索量 | 竞争度 | 建议页面 |
|--------|---------|--------|---------|
| save chatgpt as pdf | 高 | 低 | /blog/save-chatgpt-as-pdf |
| chatgpt conversation disappeared | 高 | 低 | ✅ 已有 |
| chatgpt to claude | 中 | 极低 | ✅ 已有 |
| chatgpt chrome extension | 高 | 中 | /blog/best-chatgpt-chrome-extensions |
| ai chat history manager | 中 | 极低 | ✅ 已覆盖 |
| export deepseek conversations | 中 | 极低 | ✅ 已有 |
| chatgpt memory vs custom instructions | 中 | 低 | /blog/chatgpt-memory-vs-custom-instructions |
| **🆕 chatgpt memory not working** | 高 | 低 | /blog/chatgpt-memory-bugs |
| **🆕 mcp memory server** | 中 | 极低 | /blog/mcp-memory-server-guide |
| **🆕 ai context flow vs** | 中 | 极低 | /blog/ai-context-flow-vs-ai-memory |
| **🆕 chatgpt memory delete** | 高 | 低 | /blog/how-to-delete-chatgpt-memory |

### 内容策略（v3 新增攻击性内容）

**教育型内容（流量入口）**：
- "How to Export Any AI Chat"（通用指南）
- "ChatGPT Memory vs Custom Instructions: What's the Difference?"
- "Best ChatGPT Chrome Extensions in 2026"
- **🆕 "MCP Protocol Explained: The Future of AI Memory"**

**对比型内容（精准用户）**：
- ✅ "Chat Memo vs AI Memory"（已有）
- ✅ "Best AI Conversation Managers 2026"（已有）
- **🆕 "AI Context Flow vs AI Memory: Feature & Price Comparison"**
- **🆕 "Why ChatGPT Memory is Broken (And What to Use Instead)"**

**问题解决型内容（高转化）**：
- ✅ "AI Conversation Disappeared"（已有）
- ✅ "ChatGPT Context Window Limit"（已有）
- **🆕 "How to Fix ChatGPT Memory Pollution"**
- **🆕 "How to Actually Delete ChatGPT Memory (It's Harder Than You Think)"**

### Chrome Web Store SEO（ASO）

**标题格式**：`AI Memory Manager | Save & Search ChatGPT/Claude/DeepSeek`

**高价值关键词**：ChatGPT, Claude, DeepSeek, Gemini, export, search, memory, backup, MCP

**多语言**：支持 10 种语言（AI Exporter 靠此显著扩大覆盖面）

**目标**：4.5+ 评分 → Featured 徽章

---

## 六、技术方案（v3 重大更新）

### Chrome 扩展关键技术决策

| 决策点 | 方案 | 理由 |
|--------|------|------|
| 数据捕获 | **网络拦截为主**，DOM 抓取为辅 | 网络拦截比 DOM 稳定 10 倍 |
| 存储 | **IndexedDB** | 无大小限制，支持结构化查询 |
| 加密 | **libsodium.js** (XChaCha20-Poly1305) | 最完整的浏览器加密方案 |
| 同步架构 | **模仿 Joplin** | 成熟、简单、支持多后端 |
| UI | **Side Panel** (Chrome 114+) | 持续可用，不占页面空间 |
| 扩展框架 | **WXT** (wxt.dev) | 自动生成多浏览器适配 |
| **🆕 记忆注入** | **Native Setter Hack** | execCommand 已 deprecated，Native Setter 绕过所有框架 |
| **🆕 MCP 通信** | **stdio/SSE over Service Worker** | mcp-chrome 已验证此架构 |

### 记忆注入技术详解（v3 新增）

```javascript
// Native Setter Hack — 跨框架通用方案
function injectText(element, text) {
  // 1. 获取原生 setter（绕过 React/Vue 拦截）
  const nativeSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype, 'value'
  ).set;
  const nativeTextAreaSetter = Object.getOwnPropertyDescriptor(
    window.HTMLTextAreaElement.prototype, 'value'
  ).set;

  // 2. 根据元素类型调用对应 setter
  const setter = element.tagName === 'TEXTAREA'
    ? nativeTextAreaSetter : nativeSetter;
  setter.call(element, text);

  // 3. 触发框架感知的事件链
  element.dispatchEvent(new Event('input', { bubbles: true }));
  element.dispatchEvent(new Event('change', { bubbles: true }));

  // 4. 针对 Lexical（Kimi）的额外触发
  if (element.dataset.lexicalEditor) {
    element.dispatchEvent(new InputEvent('beforeinput', {
      inputType: 'insertText', data: text, bubbles: true
    }));
  }
}
```

**fallback 链**：Native Setter → innerHTML + dataset → execCommand('insertText') → 剪贴板 paste

### 核心风险与缓解

| 风险 | 严重性 | 缓解 |
|------|--------|------|
| DOM 选择器失效 | 高 | 网络拦截为主 + 级联回退 + 健康监控 |
| 平台反扩展检测 | 高 | MAIN world 注入 + 尊重 ToS |
| Service Worker 30s 超时 | 中 | 即时持久化到 chrome.storage |
| 中国平台 DOM 不稳定 | 高 | 配置驱动选择器 + 社区贡献 |
| **🆕 Native Setter 被新框架封堵** | 中 | 三层 fallback 链 + 快速响应机制 |
| **🆕 MCP 协议版本迭代** | 中 | 紧跟官方 spec，参与社区 |

### 深度支持 DeepSeek（差异化机会，不变）

Loominary（432 stars）和所有主流竞品**都不支持 DeepSeek**。这是明确的市场空白。

DeepSeek 的特点：
- 无原生导出功能
- React 基础，选择器不稳定
- 中国用户增长极快（Bilibili 相关视频播放量 1.8 万+）

**建议**：MVP 就支持 DeepSeek，作为差异化卖点。

---

## 七、B2B 远期机会（6-12 个月后，不变）

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

## 八、🆕 Stash 式认知记忆层级（E/F/P/W）产品方案

### 背景

Stash 在 Hacker News 引发热议（133 pts），其核心创新是**认知层级记忆**：
- **E (Episodes)** — 原始对话片段，未经处理
- **F (Facts)** — 从对话中提取的事实性信息
- **P (Patterns)** — 多次对话中浮现的行为/偏好模式
- **W (Wisdom)** — 高度抽象的用户认知模型

### 为什么要做？

1. **差异化护城河** — AI Context Flow 的 Bucket 是扁平的，没有认知结构
2. **用户价值递进** — 层级越高，AI 回复质量提升越显著
3. **留存率** — Wisdom 层级是用户的核心资产，迁移成本极高
4. **叙事优势** — "认知记忆引擎"远比"记忆同步器"有技术感

### 实现路径

```
Phase 1 (MVP):
  └─ 只做 E 层：原始对话存储 + 全文搜索

Phase 2 (3-6月):
  ├─ 用 AI 提取 F 层：关键事实自动提取
  └─ 用户可编辑/确认/删除 Facts

Phase 3 (6-12月):
  ├─ P 层：跨对话模式识别（"用户偏好简洁回复"）
  └─ W 层：认知画像（"用户是后端工程师，偏好 Go/Rust"）

Phase 4 (12月+):
  └─ 认知记忆可注入任意 AI 平台的 system prompt
```

### 技术方案

| 层级 | 生成方式 | 存储格式 | 更新频率 |
|------|---------|---------|---------|
| E (Episodes) | 网络拦截直接捕获 | 原始 JSON | 实时 |
| F (Facts) | AI 提取 + 用户确认 | 结构化 KV | 每次对话后 |
| P (Patterns) | 批量分析历史对话 | 图结构 | 每周 |
| W (Wisdom) | 长期趋势聚合 | 向量嵌入 | 每月 |

### AI 成本估算

| 操作 | 模型 | 单次成本 | 频率 | 月成本/用户 |
|------|------|---------|------|-----------|
| E→F 提取 | Flash-Lite | $0.001 | 100次/月 | $0.10 |
| F→P 分析 | Flash | $0.005 | 4次/月 | $0.02 |
| P→W 聚合 | Flash | $0.02 | 1次/月 | $0.02 |
| **合计** | | | | **$0.14/用户/月** |

---

## 九、🆕 MCP 集成策略

### MCP 爆发式增长数据

| 指标 | 数据 | 来源 |
|------|------|------|
| npm 月下载量 | 4M → 150M（1年，35x） | npm trends |
| 已知 MCP Clients | 113+（Claude, ChatGPT, VS Code, Cursor） | mcp.so |
| mcp-chrome stars | 11.3K | GitHub |
| Memory Server 月下载 | 390K | npm |
| 官方 Memory Server | ✅ 已有 | modelcontextprotocol |

### MCP 对 AI Memory 的战略意义

1. **记忆是 MCP 核心用例** — 官方就有 Memory Server，说明这是刚需
2. **mcp-chrome 证明了浏览器扩展做 MCP Server 的可行性** — 11.3K stars
3. **113+ MCP Client 自动兼容** — 一次接入，覆盖所有主流 AI 工具
4. **开发者生态入口** — MCP 是进入开发者市场的最佳路径

### 实施方案：两阶段 MCP 集成

#### Phase 2A：Chrome 扩展作为 MCP Server

```
Chrome Extension (Service Worker)
  ├─ MCP Server over stdio（通过 native messaging）
  ├─ 暴露 tools:
  │   ├─ search_conversations(query, platform?, date_range?)
  │   ├─ get_conversation(id)
  │   ├─ get_epmemories(level, query?)
  │   ├─ inject_memory(conversation_id, target_platform)
  │   └─ get_user_facts() / get_user_patterns()
  └─ 暴露 resources:
      ├─ memory://episodes/{id}
      ├─ memory://facts/{category}
      └─ memory://wisdom
```

#### Phase 2B：独立 MCP Server 进程

```
ai-memory-mcp-server (Node.js)
  ├─ MCP Server over stdio + SSE
  ├─ 读取 IndexedDB 数据（通过 Chrome Extension 同步）
  ├─ 或直接连接云端记忆存储
  ├─ 支持 Claude Desktop, Cursor, VS Code 等
  └─ 发布为 npm 包：npx @ai-memory/mcp-server
```

### MCP 内容营销

- **博客**："How to Use AI Memory as Your MCP Memory Server"
- **教程**："Connect Claude Desktop to Your Cross-Platform AI Memory"
- **GitHub**：开源 MCP Server，吸引开发者 star & contribute
- **社区**：在 mcp.so 提交收录，参与 MCP 生态建设

### 竞品 MCP 对比

| 竞品 | MCP 支持 | 我们的优势 |
|------|---------|-----------|
| AI Context Flow | ✅ 有 | 我们有 E/F/P/W 层级，他们只有扁平 Bucket |
| OpenMemory | ✅ 纯 MCP | 我们有 UI + 扩展 + 跨平台捕获 |
| Mem0 | ✅ API | 我们是本地优先，无 API 依赖 |
| Stash | ❌ 无 | 我们有 MCP 生态接入 |
| Chat Memo | ❌ 无 | 完全领先 |

---

## 十、🆕 AI 记忆缺陷与蚕食防御策略

### ChatGPT 原生记忆的致命缺陷（我们的机会）

| 缺陷 | 严重性 | 用户影响 | AI Memory 如何解决 |
|------|--------|---------|-------------------|
| **记忆污染/偏见泄漏** | 🔴 致命 | A 对话的记忆影响 B 对话 | 平台隔离 + 用户可控 |
| **无法真正删除** | 🔴 致命 | 用户清空 2-3 次仍被记住 | IndexedDB 本地存储，完全可删 |
| **无法按对话关闭** | 🟡 严重 | 敏感对话也自动记忆 | 手动选择记忆范围 |
| **扁平列表无组织** | 🟡 严重 | 记忆越多越混乱 | E/F/P/W 层级结构 |
| **无跨平台** | 🟡 严重 | 只在 ChatGPT 内有效 | 跨 ChatGPT/Claude/DeepSeek/Gemini |

### 各平台记忆蚕食评估

| 平台 | 威胁级别 | 蚕食风险 | 防御策略 |
|------|---------|---------|---------|
| **ChatGPT Memory** | 🔴 HIGH | 高 — 但有致命缺陷 | 突出"记忆污染"和"无法删除"痛点 |
| **Gemini Memory** | 🟡 MEDIUM | 中 — 地区锁定、不透明 | 强调跨平台优势 |
| **Claude** | 🟢 LOW | 低 — 无自动记忆，仅手动 Projects | 强调自动化优势 |
| **DeepSeek/Kimi/豆包** | 🟢 NEAR ZERO | 几乎为零 — 无记忆功能 | **独占市场**，无需防御 |

### 蚕食防御核心策略

**策略一：差异化叙事**
```
"ChatGPT Memory 记住了你不想要的。AI Memory 记住你真正需要的。"
"Your AI remembers everything — including things you don't want it to. We fix that."
```

**策略二：痛点内容矩阵**

| 痛点 | 内容标题 | 目标关键词 | 转化路径 |
|------|---------|-----------|---------|
| 记忆污染 | "Why ChatGPT Memory Cross-Contaminates Your Conversations" | chatgpt memory bug | Blog → Extension |
| 无法删除 | "How to Actually Delete ChatGPT Memory (3 Methods)" | delete chatgpt memory | Blog → Extension |
| 无法关闭 | "How to Disable ChatGPT Memory Per Conversation" | disable chatgpt memory | Blog → Extension |
| 跨平台 | "One Memory Engine for All Your AI Chatbots" | ai memory cross platform | Landing → Extension |

**策略三：功能对抗表**

在 Landing Page 和 Chrome Web Store 描述中加入对比表：

| 功能 | ChatGPT Memory | AI Memory |
|------|---------------|-----------|
| 跨平台记忆 | ❌ 仅 ChatGPT | ✅ ChatGPT + Claude + DeepSeek + Gemini |
| 删除记忆 | ❌ 无法真正删除 | ✅ 完全可控 |
| 按对话关闭 | ❌ 全局开关 | ✅ 逐对话控制 |
| 记忆层级 | ❌ 扁平列表 | ✅ E/F/P/W 认知层级 |
| MCP 支持 | ❌ 无 | ✅ MCP Server |
| 数据导出 | ❌ 无 | ✅ JSON/Markdown/PDF |

**策略四：抢占"ChatGPT Memory 替代品"心智**
- 在 Reddit r/ChatGPT、r/artificial 等社区积极回答记忆相关问题
- 创建 "ChatGPT Memory Alternatives 2026" 对比页面
- 与 ChatGPT 记忆 Bug 相关的 YouTube 视频合作

---

## 十一、立即行动清单（v3 更新版）

### 本周（P0）— 基础设施

| # | 任务 | 耗时 | 影响 |
|---|------|------|------|
| 1 | 注册 Chrome Web Store 开发者账号（$5） | 10分钟 | 基础设施 |
| 2 | 用 WXT 框架搭建扩展骨架 | 2小时 | 产品 |
| 3 | 实现 ChatGPT 网络拦截 + IndexedDB 存储 | 4小时 | 核心功能 |
| 4 | **🆕 实现 Native Setter Hack 记忆注入（ChatGPT）** | 3小时 | 核心差异化 |

### 下周（P1）— 多平台 + SEO

| # | 任务 | 耗时 | 影响 |
|---|------|------|------|
| 5 | 实现 Claude 网络拦截 | 3小时 | 产品 |
| 6 | 实现 DeepSeek DOM 抓取 | 4小时 | 差异化 |
| 7 | Side Panel 搜索 UI | 4小时 | 用户体验 |
| 8 | 提交 Chrome Web Store 审核 | 1小时 | 分发 |
| 9 | **🆕 新增博文：chatgpt-memory-bugs** | 1.5小时 | SEO/获客 |
| 10 | **🆕 新增博文：save-chatgpt-as-pdf** | 1小时 | SEO |

### 本月（P2）— 差异化 + 增长

| # | 任务 | 耗时 | 影响 |
|---|------|------|------|
| 11 | Native Setter Hack 适配 Gemini/Kimi | 4小时 | 产品覆盖 |
| 12 | 自动标签系统 | 4小时 | 产品 |
| 13 | 积累 4.8+ 评分 | 持续 | CWS 排名 |
| 14 | Reddit/HN/即刻 推广 | 2小时 | 增长 |
| 15 | **🆕 新增博文：AI Context Flow vs AI Memory** | 1.5小时 | 竞品 SEO |
| 16 | **🆕 联系 Loominary 作者探讨合作/收购** | 1小时 | 战略 |

### 下月（P3）— MCP + 认知层级

| # | 任务 | 耗时 | 影响 |
|---|------|------|------|
| 17 | **🆕 设计 E/F/P/W 数据模型** | 4小时 | 产品架构 |
| 18 | **🆕 实现 E 层（原始对话存储）** | 已有 | 基础 |
| 19 | **🆕 实现 F 层（AI 事实提取）** | 8小时 | 差异化 |
| 20 | **🆕 MCP Server 原型（stdio over native messaging）** | 8小时 | 开发者生态 |
| 21 | **🆕 开源 MCP Server 到 GitHub** | 2小时 | 社区增长 |

---

## 十二、关键数据仪表盘（v3 更新）

| 指标 | 当前值 | M3 目标 | M6 目标 | M12 目标 |
|------|--------|---------|---------|---------|
| 网站博文数 | 16 | 22 | 35 | 50 |
| Sitemap URL | 17 | 28 | 45 | 70 |
| Chrome 扩展用户 | 0 | 500 | 2,000 | 10,000 |
| CWS 评分 | — | 4.8+ | 4.8+ | 4.8+ |
| 月活用户 | 0 | 200 | 1,000 | 5,000 |
| MRR | $0 | $0 | $500 | $5,000 |
| **🆕 MCP Server 下载** | 0 | 0 | 100 | 2,000 |
| **🆕 GitHub Stars** | 0 | 0 | 50 | 500 |
| **🆕 E/F/P/W 层级** | 无 | E 层 | E+F 层 | E+F+P+W |

---

## 十三、附录：关键决策记录

| 日期 | 决策 | 理由 |
|------|------|------|
| v1 | 先做 Chrome 扩展 | 中国平台无 API，扩展是唯一路径 |
| v2 | 网络拦截为主 | 比 DOM 抓取稳定 10 倍 |
| v3 | **弃用 execCommand，改用 Native Setter Hack** | execCommand deprecated，Native Setter 绕过所有框架 |
| v3 | **Pro 定价 $4.99/月** | 精准打击 AI Context Flow 的 $10-$20 |
| v3 | **LTD $49-$99** | 低于 AI Context Flow 的 $59-$339 |
| v3 | **Phase 2 加入 MCP Server** | MCP 35x 爆发增长，记忆是核心用例 |
| v3 | **引入 E/F/P/W 认知层级** | Stash 证明这是新范式，AI Context Flow 没有 |
| v3 | **蚕食防御：痛点叙事** | ChatGPT Memory 有致命缺陷，窗口期存在 |
| v3 | **联系 Loominary 作者** | 停更 1 月+，低成本收购机会 |

---

*本方案基于 11 轮自动化深度研究综合制定。v3 新增：MCP 协议生态研究、记忆注入技术对比、AI Context Flow 深度分析、ChatGPT 记忆缺陷研究、Stash 认知层级分析、蚕食风险评估。*
