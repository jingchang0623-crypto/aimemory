# Chrome Web Store 上架准备清单

## ✅ 已完成
- [x] 扩展构建成功 (v1.1.0, 38.52 KB)
- [x] 5个平台支持：ChatGPT, Claude, DeepSeek, Gemini, Kimi
- [x] Manifest V3 格式 (符合Web Store要求)
- [x] 图标资源齐全 (16/48/128px)
- [x] 权限配置合理 (storage, sidePanel, activeTab, unlimitedStorage)

## 📋 上架前待办

### 1. 支付开发者费用 ($5)
- 访问 https://chrome.google.com/webstore/devconsole/
- 登录Google账号
- 支付$5一次性开发者注册费
- 等待账户验证（通常即时）

### 2. 准备上架材料

#### 必填信息
- **名称**: `AI Memory - ChatGPT & Claude History Manager`
- **摘要**: `Save, search, and manage AI conversations across ChatGPT, Claude, DeepSeek, Gemini, Kimi`
- **详细描述**: (见下方模板)
- **分类**: Productivity
- **语言**: English (可选中文)

#### 图片素材
- [ ] 小图标: 128x128 px (已有: `extension/public/icon/128.png`)
- [ ] 截图 x5 (1280x800或640x400):
  1. 扩展弹出窗口界面
  2. 搜索对话功能展示
  3. ChatGPT对话导出流程
  4. Claude对话导入展示
  5. 多平台支持说明
- [ ] 宣传图 (1400x560 px) - Optional but recommended
- [ ] YouTube视频链接 - Optional

### 3. 描述模板

```markdown
🧠 AI Memory - Your AI Conversation Vault

Manage all your AI conversations in one place. Supports ChatGPT, Claude, DeepSeek, Gemini, and Kimi.

🔥 Key Features:
• 📥 One-click export from ChatGPT, Claude, DeepSeek
• 🔍 Full-text search across ALL your AI conversations
• 🏷️ Smart tagging and organization
• 💾 Local-first: Your data stays on your device
• ⚡ Memory injection: Give AI assistants context automatically
• 🔌 MCP Server support: Works with Claude Desktop, Cursor, 113+ clients

🚀 How it works:
1. Install extension
2. Visit ChatGPT/Claude/DeepSeek - conversations auto-saved
3. Search across all platforms instantly
4. Inject relevant memories into new conversations

✨ Why AI Memory?
• 100% Private - No accounts, no tracking
• Cross-platform - All your AI tools in one place
• Free forever - Core features always free
• Open source - Transparent and trustworthy

🌟 Supported Platforms:
✓ ChatGPT (OpenAI)
✓ Claude (Anthropic)
✓ DeepSeek
✓ Gemini (Google)
✓ Kimi (Moonshot)

🔗 Web App: https://aimemory.pro
📖 Documentation: https://aimemory.pro/chrome-extension
🐙 GitHub: https://github.com/jingchang0623-crypto/aimemory

---

Keywords: AI memory, ChatGPT history, Claude conversations, conversation search, AI tools, productivity, DeepSeek, Gemini, Kimi, memory management
```

### 4. 提交步骤
1. 访问 https://chrome.google.com/webstore/devconsole/
2. 点击 "New Item"
3. 上传 `extension/.output/ai-memory-extension-1.1.0-chrome.zip`
4. 填写所有必填信息（使用上方模板）
5. 上传截图和图标
6. 选择分类: Productivity
7. 勾选隐私政策（需先创建隐私政策页面）
8. 提交审核

### 5. 隐私政策要求
需在网站添加: https://aimemory.pro/privacy
（已有！检查是否需要更新提及Chrome扩展）

## 📊 预期效果
- **自然流量**: 2K-5K 新用户/月
- **转换率**: ~5% 的网站访问者会安装扩展
- **SEO增益**: Web Store页面可被Google索引

## 🎯 ASO优化建议
- 标题包含关键词: "AI Memory", "ChatGPT", "Claude", "History"
- 描述前200字包含核心关键词
- 截图标注关键功能（用箭头/文字说明）

## ⏱️ 审核时间线
- 首次提交: 3-7 个工作日
- 更新版本: 1-3 个工作日
- 避免违规: 不提及"免费试用"、"最佳"等绝对化用语

---
**Status**: 等待支付$5开发者费用
**Next Step**: 用户完成Chrome Web Store开发者注册
