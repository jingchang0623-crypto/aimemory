import { defineConfig } from 'wxt';

export default defineConfig({
  srcDir: 'src',
  outDir: '.output',
  manifest: {
    name: 'AI Memory Manager',
    description: 'Save, search, and manage your AI conversations across ChatGPT, Claude, DeepSeek, and Gemini.',
    version: '1.0.0',
    permissions: ['storage', 'sidePanel', 'activeTab', 'unlimitedStorage'],
    host_permissions: [
      'https://chat.openai.com/*',
      'https://chatgpt.com/*',
      'https://claude.ai/*',
      'https://chat.deepseek.com/*',
      'https://gemini.google.com/*'
    ],
    side_panel: {
      default_path: 'sidepanel/index.html'
    },
    icons: {
      '16': 'icon/16.png',
      '48': 'icon/48.png',
      '128': 'icon/128.png'
    }
  }
});
