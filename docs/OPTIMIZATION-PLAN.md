# AI Memory 产品优化方案 (Round 123 — 2026-05-17)

> 本文档由定时 cron 任务自动生成，记录每轮产品优化决策和执行结果。

## 本轮执行摘要 (Round 123)

**执行时间**: 2026-05-17 13:54 UTC  
**触发方式**: 定时 cron 任务  
**模型**: tc-code-latest

### 研究进展摘要

根据 session_search 检索历史研究会话，核心发现：

| 研究方向 | 完成日期 | 核心发现 |
|---------|---------|---------|
| SEO关键词研究 | 2026-04-24 | "chatgpt export" 年增670%，"AI memory tools comparison 2026" 有缺口 |
| 技术可行性 | 2026-04-24/25 | 无API可读取对话历史，浏览器扩展是唯一合规方案 |
| 变现模型 | 2026-04-25 | **$6.9/月 Pro档**，freemium模式，M12预计收入 $24,000/月 |
| 竞品深度分析 | 2026-04-24 | 30+产品碎片化，无绝对领导者；Chat Memo 10K用户 |
| Chrome扩展开发实战 | 2026-04-25 | v1.1.0 已发布ZIP，未上架Chrome Web Store |
| 记忆注入技术路径 | 2026-04-26 | 成熟注入逻辑存在于代码，未完全集成到UI |

### 产品现状评估

**当前状态（2026-05-17）**：
- ✅ aimemory.pro HTTP 200 正常
- ✅ 博客总数：171篇（SEO内容饱和）
- ✅ MCP Server v1.4.0 开发完成（12工具）
- ✅ Chrome扩展 v1.1.0 ZIP可用
- ✅ 支持5个平台：ChatGPT、Claude、DeepSeek、Gemini、Kimi
- ✅ **本轮修复**：定价页 $3.9 → $6.9/月（与研究一致）
- ✅ **本轮修复**：首页 MCP 区域改为 GitHub install + PyPI 提示
- ❌ **MCP Server 未上PyPI**（PyPI页面404）
- ❌ **Chrome扩展未上架Chrome Web Store**
- ❌ **parser.ts detectPlatform() 未返回 deepseek/gemini/kimi** 类型（代码存在但函数签名未更新）
- ❌ **Google Analytics 未激活**（GA_MEASUREMENT_ID 未设置）

---

## 优化方案清单

### P0 — 立即执行（可直接落地代码）

#### P0-1: 修复 parser.ts detectPlatform() 返回类型 ✅ 已完成代码存在
- **状态**: parser.ts 已有完整 DeepSeek/Gemini/Kimi 解析代码
- **待修复**: `detectPlatform()` 函数签名和返回值需要更新为 `'chatgpt' | 'claude' | 'deepseek' | 'gemini' | 'kimi' | 'unknown'`
- **预估工时**: 1小时
- **验收标准**: `detectPlatform()` 能正确识别5个平台

#### P0-2: 修复定价与研究对齐 ✅ 本轮完成 (commit 47134dd)
- **修改文件**: `src/app/pricing/page.tsx`
- **变更**: Plus $3.9/mo → $6.9/mo, $39/年 → $69/年
- **FAQ JSON-LD**: 同步更新价格信息
- **build**: ✅ 通过
- **部署**: ✅ 已重启 PM2，线上验证通过

#### P0-3: 修复首页 MCP 区域误导信息 ✅ 本轮完成 (commit 47134dd)
- **修改文件**: `src/app/page.tsx` (两处)
- **变更**: 
  - `pip install aimemory-mcp-server` → `pip install git+https://github.com/...`
  - 添加 "PyPI release coming soon" 提示
  - 添加链接到 `/docs/pypi-setup`
- **build**: ✅ 通过
- **部署**: ✅ 线上验证通过

#### P0-4: DeepSeek 专题页 SEO 优化
- **现有页面**: `src/app/deepseek-ai-memory/page.tsx`, `src/app/deepseek-memory-guide/page.tsx`
- **优化点**: 增加 DeepSeek 相关关键词，FAQ JSON-LD
- **预期效果**: 捕获 "DeepSeek memory" 流量，月增 500+ 访问
- **预估工时**: 1小时

---

### P1 — 本周内（需外部操作）

#### P1-1: MCP Server PyPI 发布 🔴 阻塞中
- **阻塞原因**: 需在 pypi.org 配置 Trusted Publishers
- **执行步骤**:
  1. 登录 pypi.org
  2. 配置 Trusted Publishers: Repository `jingchang0623-crypto/aimemory`, Workflow `publish-pypi.yml`
  3. 在 GitHub 创建 Release v1.4.0
  4. 等待 GitHub Actions 完成
- **预估工时**: 1小时（含等待）
- **验收标准**: `pip install aimemory-mcp-server` 成功

#### P1-2: Chrome Web Store 上架 🔴 阻塞中
- **阻塞原因**: 需支付 $5 开发者注册费
- **执行步骤**:
  1. 访问 [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
  2. 支付 $5 注册费
  3. 使用 `chrome-extension/` 目录打包
  4. 提交审核（预计 1-3 天）
- **预估工时**: 2小时（含素材准备）

#### P1-3: Google Search Console 配置
- 添加 `aimemory.pro` 域名验证
- 提交 sitemap.xml
- 监控索引覆盖率

---

### P2 — 规划中（需更多研究或较大开发量）

#### P2-1: 智能记忆注入功能完善
- 扩展端：完善 `memory-inject.ts` 与 Sidepanel UI 集成
- Web端：开发 MCP 记忆注入 API
- 预估工时：2-3周

#### P2-2: E2EE 云同步（Pro功能）
- 参考：`docs/e2ee-technical-research.md`
- 预估工时：3-4周

#### P2-3: AI 分析功能（Plus/Pro层级）
- 集成 LLM API（DeepSeek 成本最低）
- BYOK（Bring Your Own Key）选项
- 预估工时：2-3周

---

## 本轮执行记录

### 已完成的代码修改 (commit 47134dd)

| 文件 | 修改内容 | 状态 |
|------|---------|------|
| `src/app/pricing/page.tsx` | Plus价格 $3.9→$6.9/mo, $39→$69/年；FAQ JSON-LD更新 | ✅ 已提交、已部署 |
| `src/app/page.tsx` | MCP区域：GitHub install替换PyPI；添加PyPI提示 | ✅ 已提交、已部署 |

### 构建验证
```
✅ npm run build 通过
✅ PM2 重启成功 (pid 908129)
✅ Nginx 运行正常
```

### 线上验证
- ✅ https://aimemory.pro/pricing 显示 $6.9/mo
- ✅ https://aimemory.pro/ MCP区域显示 GitHub install
- ✅ "PyPI release coming soon" 消息可见

---

## 待执行清单（下次 cron 继续）

### 下次优先执行（P0）
1. [ ] 修复 `detectPlatform()` 返回类型（添加 deepseek/gemini/kimi）
2. [ ] DeepSeek 专题页 SEO 优化
3. [ ] 检查 `src/lib/parser.ts` line 50 函数签名更新

### 下次执行（P1 — 需人工操作）
1. [ ] PyPI Trusted Publishers 配置（需登录 pypi.org）
2. [ ] Chrome Web Store $5 付费 + 上架
3. [ ] Google Search Console 配置

### 长期规划（P2）
1. [ ] E2EE 云同步开发
2. [ ] AI 分析功能（Plus层级）
3. [ ] 知识图谱可视化

---

## 历史轮次记录

| Round | 日期 | 主要成果 | 提交 |
|-------|------|---------|------|
| 123 | 2026-05-17 | 定价修复 $6.9/mo，MCP GitHub install 提示 | 47134dd |
| 122 | 2026-05-16 | BLOG_COUNT 170→171, Chrome Web Store checklist | c4835d1 |
| 121 | 2026-05-15 | OPTIMIZATION-PLAN 更新 | 9d4abb2 |
| 120 | 2026-05-14 | GPT-5 ChatGPT Memory Guide 博客 | 28f07f7 |
| ... | ... | ... | ... |

---

*本文档由 Hermes Agent 自动维护，最后更新：2026-05-17 14:30 UTC*
