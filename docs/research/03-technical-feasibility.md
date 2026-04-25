# AI Memory — 技术可行性研究报告

**研究日期**: 2026-04-24
**研究方向**: 技术可行性

---

## 一、API限制结论

| 平台 | API读取对话历史 | 官方批量导出 | 程序化抓取 |
|------|:-:|:-:|:-:|
| ChatGPT | ❌ | ✅ 手动ZIP导出 | ❌ |
| Claude | ❌ | ❌ 无原生导出 | ❌ |
| Gemini | ❌ | ✅ Google Takeout | ❌ |

**核心结论：没有任何平台提供API方式读取用户对话历史。浏览器扩展（本地捕获）是唯一合规技术路线。**

## 二、DOM稳定性评估

| 平台 | 捕获方式 | 稳定性 | 风险点 |
|------|---------|:------:|--------|
| ChatGPT | DOM爬取 | ⭐⭐⭐ 中 | data-testid偶尔变动 |
| Gemini | DOM爬取 | ⭐⭐⭐⭐ 高 | 自定义Web组件，语义化强 |
| Claude | 内部API | ⭐⭐⭐⭐⭐ 最高 | 绕过DOM直接取JSON |

## 三、记忆注入技术方案

| 优先级 | 方案 | 原理 | 可靠性 |
|--------|------|------|--------|
| 1️⃣ | execCommand('insertText') | 浏览器原生命令，绕过React | ⭐⭐⭐⭐⭐ |
| 2️⃣ | nativeInputValueSetter | 绕过React的value setter拦截 | ⭐⭐⭐⭐⭐ |
| 3️⃣ | React Props直接调用onChange | 操控React内部Fiber节点 | ⭐⭐⭐⭐ |

## 四、端到端加密方案

推荐使用 Bitwarden 模型：
- 密钥派生：Argon2id 或 PBKDF2
- 对称加密：Web Crypto API (AES-GCM-256)
- 密钥存储：chrome.storage.session（内存），浏览器关闭即清空

## 五、Manifest V3关键约束

- Service Worker 替代后台页面，30秒无活动即终止
- 不允许 eval() / new Function()
- Content Script运行在隔离世界
- 所有JS必须打包在扩展内

## 六、核心依赖库

| 用途 | 推荐库 |
|------|--------|
| 扩展框架 | WXT (wxt.dev) |
| HTML→Markdown | Turndown.js + gfm插件 |
| DOM观察 | MutationObserver (原生) |
| 存储 | chrome.storage.local + IndexedDB |
