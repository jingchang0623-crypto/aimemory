import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/BlogLayout';

const slug = 'export-import-ai-chat-history';

export const metadata: Metadata = {
  title: 'How to Export and Import AI Chat History Across Platforms (2026) — Complete Guide',
  description:
    'Learn how to export and import AI chat history from ChatGPT, Claude, DeepSeek, Gemini, Grok, and more. Transfer conversations between platforms seamlessly with AI Memory.',
  keywords: [
    'export import ai chat history',
    'transfer ai conversations',
    'move chatgpt to claude',
    'ai chat migration',
    'export ai conversations',
    'import ai chat data',
    'cross platform ai chat',
    'ai conversation transfer',
    'chatgpt export import',
    'claude conversation export',
    'ai chat backup',
    'move conversations between ai',
  ],
  openGraph: {
    title: 'How to Export and Import AI Chat History Across Platforms (2026)',
    description:
      'Learn how to export and import AI chat history from ChatGPT, Claude, DeepSeek, Gemini, Grok, and more. Transfer conversations between platforms seamlessly.',
    url: 'https://aimemory.pro/blog/export-import-ai-chat-history',
    type: 'article',
  },
  alternates: {
    canonical: 'https://aimemory.pro/blog/export-import-ai-chat-history',
  },
};

export const tags = ['export', 'import', 'migration', 'cross-platform', 'backup', 'chat-history'];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I export my ChatGPT conversation history?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Go to ChatGPT Settings → Data Controls → Export Data. OpenAI will email you a downloadable ZIP file containing all your conversations in JSON format. This typically arrives within minutes and includes every conversation, including shared chats and code interpreter sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I transfer conversations from ChatGPT to Claude?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Export your ChatGPT data via Settings → Data Controls → Export Data, then use AI Memory to import the JSON files. The Chrome extension captures conversations from both platforms natively, and you can search across them in one unified interface. You can also use memory injection to bring ChatGPT context into new Claude conversations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best way to migrate AI chat history between platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most efficient method is using AI Memory, which supports auto-capture across ChatGPT, Claude, DeepSeek, Gemini, Grok, Kimi, Copilot, Perplexity, and more. Install the Chrome extension on each platform, and all conversations are automatically saved locally with full-text search. No manual export/import needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Claude have a built-in export feature?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Anthropic added a data export feature to Claude. Go to Settings → Data → Export to download your conversations. You can also use the AI Memory Chrome extension for automatic real-time capture of every Claude conversation, which provides more granular control and instant search.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I export conversations from DeepSeek AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DeepSeek offers a data export option in Settings → Data → Export. For automatic ongoing capture, install the AI Memory Chrome extension which saves DeepSeek conversations in real-time as you chat, including code blocks and reasoning traces from DeepThink mode.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use AI Memory to unify all my AI conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI Memory is designed as a universal bridge across all AI platforms. The Chrome extension auto-captures conversations from ChatGPT, Claude, DeepSeek, Gemini, Grok, Kimi, Copilot, Perplexity, and more. Everything is stored locally using SQLite FTS5 on WebAssembly, giving you instant full-text search across your entire AI conversation history. You can also inject past context into any AI platform via the extension or MCP server.',
      },
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Export and Import AI Chat History Across Platforms',
  description:
    'Comprehensive guide to exporting and importing AI chat history from ChatGPT, Claude, DeepSeek, Gemini, Grok, and more. Learn every method to transfer conversations between AI platforms.',
  author: {
    '@type': 'Organization',
    name: 'AI Memory',
    url: 'https://aimemory.pro',
  },
  publisher: {
    '@type': 'Organization',
    name: 'AI Memory',
    url: 'https://aimemory.pro',
  },
  datePublished: '2026-04-30',
  dateModified: '2026-04-30',
  url: 'https://aimemory.pro/blog/export-import-ai-chat-history',
  mainEntityOfPage: 'https://aimemory.pro/blog/export-import-ai-chat-history',
};

export default function ExportImportAIChatHistoryPage() {
  return (
    <BlogLayout
      slug={slug}
      title="How to Export and Import AI Chat History Across Platforms"
      category="Guides"
      date="2026-04-30"
      readTime="15 min"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <h1>How to Export and Import AI Chat History Across Platforms (2026)</h1>

      <p className="lead">
        You use ChatGPT for writing, Claude for coding, DeepSeek for reasoning, and
        Gemini for research. But every time you switch platforms, you lose all your
        context — your preferences, your past discussions, your hard-won insights.
        <strong> Your AI conversation history is trapped in silos.</strong>
      </p>

      <p>
        This guide covers <strong>every method to export and import AI chat history</strong>{' '}
        across all major platforms. Whether you&apos;re migrating from ChatGPT to Claude,
        consolidating conversations from five different AI tools, or simply want a
        local backup of your chats, you&apos;ll find the complete solution here.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
        <h2 className="text-blue-800 mt-0">TL;DR — The Fastest Way</h2>
        <ol className="text-blue-700">
          <li>Install the <Link href="/" className="text-blue-600 underline">AI Memory</Link> Chrome extension</li>
          <li>Chat on any supported AI platform — conversations are auto-captured</li>
          <li>Search across all your AI chats from one unified interface</li>
          <li>Inject past context into any AI platform with one click</li>
        </ol>
      </div>

      <h2>Why Export &amp; Import Your AI Chat History?</h2>

      <h3>Continuity Across Platforms</h3>
      <p>
        When you start a new conversation on a different AI platform, you lose all
        the context from previous sessions. You have to re-explain your project,
        re-describe your preferences, and re-share relevant background. Exporting and
        importing your chat history eliminates this repetition and preserves the
        thread of your work across platforms.
      </p>

      <h3>Avoid Repeating Yourself</h3>
      <p>
        Power users spend significant time re-establishing context in every new AI
        conversation. If you&apos;ve already explored a topic deeply with ChatGPT, that
        knowledge should carry over when you try Claude or DeepSeek for the same
        task. Cross-platform chat history makes this possible.
      </p>

      <h3>Backup &amp; Data Ownership</h3>
      <p>
        AI platforms can change their terms, limit access, or shut down. Your
        conversations contain valuable intellectual work — research, code,
        brainstorming, analysis. Exporting ensures you always own your data,
        regardless of what happens to any single platform.
      </p>

      <h3>Unified Search</h3>
      <p>
        When your conversations are spread across ChatGPT, Claude, DeepSeek, Gemini,
        and Grok, finding a specific discussion becomes nearly impossible. A unified
        export lets you search your entire AI conversation history in one place.
      </p>

      <h2>How to Export from Each AI Platform</h2>

      <h3>ChatGPT (OpenAI)</h3>
      <p>
        ChatGPT offers the most mature export system among AI platforms:
      </p>
      <ol>
        <li>Open <strong>Settings</strong> (gear icon in the bottom-left corner)</li>
        <li>Navigate to <strong>Data Controls</strong></li>
        <li>Click <strong>Export Data</strong></li>
        <li>Confirm the export request</li>
        <li>OpenAI emails you a downloadable ZIP file (usually within minutes)</li>
        <li>The ZIP contains <code>conversations.json</code> with all your chats</li>
      </ol>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
        <p className="text-amber-800 font-medium">💡 Key Insight</p>
        <p className="text-amber-700 text-sm mt-1">
          The ChatGPT export includes conversations, message history, code interpreter
          sessions, and uploaded files. However, it does <strong>not</strong> include
          ChatGPT&apos;s memory entries — those are separate. For a complete backup, use
          the AI Memory Chrome extension to capture everything in real-time.
        </p>
      </div>

      <h3>Claude (Anthropic)</h3>
      <p>
        Anthropic added data export to Claude:
      </p>
      <ol>
        <li>Open <strong>Settings</strong> from the Claude sidebar</li>
        <li>Navigate to <strong>Data</strong></li>
        <li>Click <strong>Export</strong></li>
        <li>Anthropic prepares your data for download</li>
      </ol>
      <p>
        For more granular capture, the AI Memory Chrome extension saves every Claude
        conversation in real-time, including artifacts, code blocks, and extended
        thinking traces.
      </p>

      <h3>DeepSeek</h3>
      <p>
        DeepSeek provides a data export option:
      </p>
      <ol>
        <li>Open <strong>Settings</strong></li>
        <li>Navigate to <strong>Data</strong></li>
        <li>Click <strong>Export</strong></li>
      </ol>
      <p>
        DeepSeek conversations often contain valuable DeepThink reasoning chains.
        The AI Memory Chrome extension captures these reasoning traces automatically,
        preserving the full thought process — not just the final answer.
      </p>

      <h3>Gemini (Google)</h3>
      <p>
        Gemini conversations can be exported through <strong>Google Takeout</strong>:
      </p>
      <ol>
        <li>Visit <a href="https://takeout.google.com" target="_blank" rel="noopener" className="text-blue-600 underline">takeout.google.com</a></li>
        <li>Deselect all, then find and select <strong>Gemini Apps</strong></li>
        <li>Choose your export format (JSON recommended)</li>
        <li>Click <strong>Export</strong> and download when ready</li>
      </ol>
      <p>
        Google Takeout exports are part of your broader Google data. The AI Memory
        extension provides a cleaner, real-time alternative that captures Gemini
        conversations as they happen.
      </p>

      <h3>Grok (xAI / X)</h3>
      <p>
        Grok does <strong>not</strong> offer a built-in bulk export. Your options:
      </p>
      <ul>
        <li><strong>AI Memory Chrome Extension:</strong> Auto-captures Grok conversations in real-time on X</li>
        <li><strong>xAI API:</strong> Creates new conversations programmatically but cannot export existing history</li>
        <li><strong>Manual copy-paste:</strong> Select and copy individual conversations</li>
      </ul>
      <p>
        See our detailed <Link href="/blog/export-grok-ai">Grok AI export guide</Link> for
        complete instructions.
      </p>

      <h3>Kimi AI</h3>
      <p>
        Kimi AI (by Moonshot AI) has limited native export. The AI Memory Chrome
        extension is the best way to capture Kimi conversations automatically. See
        our <Link href="/blog/export-kimi-ai">Kimi export guide</Link> for details.
      </p>

      <h3>Microsoft Copilot</h3>
      <p>
        Copilot conversations can be exported through your Microsoft account&apos;s privacy
        dashboard. However, this provides limited formatting. The AI Memory extension
        captures Copilot chats with full formatting in real-time. See our{' '}
        <Link href="/blog/export-microsoft-copilot">Copilot export guide</Link>.
      </p>

      <h3>Perplexity AI</h3>
      <p>
        Perplexity stores conversation history but lacks a one-click bulk export.
        The AI Memory Chrome extension captures Perplexity threads — including
        citations and sources — automatically. See our{' '}
        <Link href="/blog/perplexity-ai-history">Perplexity history guide</Link>.
      </p>

      <h2>Export Methods Comparison</h2>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Platform</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Native Export</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Format</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">AI Memory Auto-Capture</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>ChatGPT</strong></td>
              <td className="border border-gray-300 px-4 py-3">✅ Full export</td>
              <td className="border border-gray-300 px-4 py-3">JSON (ZIP)</td>
              <td className="border border-gray-300 px-4 py-3">✅ Real-time</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3"><strong>Claude</strong></td>
              <td className="border border-gray-300 px-4 py-3">✅ Export available</td>
              <td className="border border-gray-300 px-4 py-3">JSON</td>
              <td className="border border-gray-300 px-4 py-3">✅ Real-time</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>DeepSeek</strong></td>
              <td className="border border-gray-300 px-4 py-3">✅ Export available</td>
              <td className="border border-gray-300 px-4 py-3">JSON</td>
              <td className="border border-gray-300 px-4 py-3">✅ Real-time</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3"><strong>Gemini</strong></td>
              <td className="border border-gray-300 px-4 py-3">✅ Google Takeout</td>
              <td className="border border-gray-300 px-4 py-3">JSON</td>
              <td className="border border-gray-300 px-4 py-3">✅ Real-time</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Grok</strong></td>
              <td className="border border-gray-300 px-4 py-3">❌ No native export</td>
              <td className="border border-gray-300 px-4 py-3">—</td>
              <td className="border border-gray-300 px-4 py-3">✅ Real-time</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3"><strong>Kimi</strong></td>
              <td className="border border-gray-300 px-4 py-3">⚠️ Limited</td>
              <td className="border border-gray-300 px-4 py-3">—</td>
              <td className="border border-gray-300 px-4 py-3">✅ Real-time</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Copilot</strong></td>
              <td className="border border-gray-300 px-4 py-3">⚠️ Privacy dashboard</td>
              <td className="border border-gray-300 px-4 py-3">JSON</td>
              <td className="border border-gray-300 px-4 py-3">✅ Real-time</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3"><strong>Perplexity</strong></td>
              <td className="border border-gray-300 px-4 py-3">❌ No bulk export</td>
              <td className="border border-gray-300 px-4 py-3">—</td>
              <td className="border border-gray-300 px-4 py-3">✅ Real-time</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How to Import AI Chat History into Another Platform</h2>

      <p>
        Exporting is only half the equation. The real value comes from{' '}
        <strong>importing your conversations</strong> into a unified system where you
        can search, reference, and reuse context across platforms.
      </p>

      <h3>The Import Problem</h3>
      <p>
        Most AI platforms do <strong>not</strong> support importing external
        conversation data. You can&apos;t upload your ChatGPT export into Claude or feed
        DeepSeek conversations into Gemini. Each platform&apos;s data format is
        proprietary, and no standard for AI conversation exchange exists yet.
      </p>

      <h3>Solution: AI Memory as a Universal Import Layer</h3>
      <p>
        AI Memory solves the import problem by acting as a <strong>universal
        conversation layer</strong> that sits on top of all AI platforms:
      </p>

      <ol>
        <li><strong>Auto-capture:</strong> The Chrome extension saves conversations from every supported platform in real-time</li>
        <li><strong>Import exports:</strong> Upload JSON/TXT exports from ChatGPT, Claude, or any platform into AI Memory</li>
        <li><strong>Unified search:</strong> Search across all imported and captured conversations with instant full-text search</li>
        <li><strong>Memory injection:</strong> Bring context from past conversations into any AI platform via the extension or MCP server</li>
      </ol>

      <h2>Using AI Memory as a Universal Bridge</h2>

      <p>
        <Link href="/">AI Memory</Link> was designed specifically to solve the
        cross-platform conversation fragmentation problem. Here&apos;s how it works as
        a universal bridge between all your AI tools:
      </p>

      <h3>1. Install Once, Capture Everywhere</h3>
      <p>
        The AI Memory Chrome extension supports{' '}
        <strong>9+ AI platforms</strong> out of the box. Install it once, and every
        conversation you have on ChatGPT, Claude, DeepSeek, Gemini, Grok, Kimi,
        Copilot, Perplexity, and more is automatically captured and indexed.
      </p>

      <h3>2. Local-First Storage</h3>
      <p>
        All data stays on your device. AI Memory uses{' '}
        <strong>SQLite compiled to WebAssembly</strong> with FTS5 (Full-Text Search 5)
        for blazing-fast search. No cloud servers, no accounts required, no data
        leaving your browser. Your conversations are your own.
      </p>

      <h3>3. Instant Full-Text Search</h3>
      <p>
        Find any conversation, topic, code snippet, or idea across your entire AI
        history in milliseconds. FTS5-powered search is faster and more capable than
        any native AI platform&apos;s built-in history browsing.
      </p>

      <h3>4. Export &amp; Import Flexibility</h3>
      <p>
        Import existing exports from any platform (ChatGPT JSON, Claude exports,
        etc.) and combine them with real-time captures. Export your entire unified
        library as TXT or JSON at any time.
      </p>

      <h2>Cross-Platform Memory Injection via Chrome Extension</h2>

      <p>
        One of AI Memory&apos;s most powerful features is <strong>memory injection</strong> —
        the ability to bring context from past conversations into new ones, on{' '}
        <em>any</em> platform.
      </p>

      <h3>How Memory Injection Works</h3>
      <ol>
        <li>Open any AI platform (ChatGPT, Claude, DeepSeek, etc.)</li>
        <li>Click the AI Memory extension icon</li>
        <li>Search for relevant past conversations or topics</li>
        <li>Select the context you want to inject</li>
        <li>The selected context is automatically inserted into your current conversation</li>
      </ol>

      <p>
        This means you can discuss a topic with Claude on Monday, then inject that
        context into a ChatGPT conversation on Wednesday — without retyping
        anything. It&apos;s like giving each AI platform a shared memory.
      </p>

      <h3>Use Cases for Memory Injection</h3>
      <ul>
        <li><strong>Cross-platform continuity:</strong> Continue a Claude conversation in ChatGPT</li>
        <li><strong>Multi-model comparison:</strong> Give multiple AI models the same context and compare their outputs</li>
        <li><strong>Research synthesis:</strong> Combine insights from conversations across different platforms</li>
        <li><strong>Project handoff:</strong> Transfer project context when switching between AI tools for different tasks</li>
      </ul>

      <h2>MCP Server Integration for Developers</h2>

      <p>
        For developers who want programmatic access to their AI conversation
        history, AI Memory provides a <strong>Model Context Protocol (MCP) server</strong>.
      </p>

      <h3>What Is the MCP Server?</h3>
      <p>
        The MCP server is a local server that exposes your AI Memory data through a
        standardized protocol. Any MCP-compatible AI tool can query your conversation
        history, search for specific topics, and retrieve relevant context
        automatically.
      </p>

      <h3>Setting Up the MCP Server</h3>
      <ol>
        <li>Install AI Memory and the Chrome extension</li>
        <li>Enable the MCP server from the extension settings</li>
        <li>Configure your AI tools (Claude Code, Cursor, etc.) to connect to the MCP endpoint</li>
        <li>AI tools can now automatically access your conversation history as context</li>
      </ol>

      <p>
        See our detailed <Link href="/blog/mcp-server-guide">MCP server guide</Link> for
        setup instructions and configuration examples.
      </p>

      <h2>Best Practices for AI Chat History Management</h2>

      <h3>1. Start Capturing Early</h3>
      <p>
        Don&apos;t wait until you need to migrate. Install AI Memory now so all future
        conversations are automatically captured. You can always import historical
        exports later.
      </p>

      <h3>2. Use Consistent Naming &amp; Tagging</h3>
      <p>
        When saving important conversations, add descriptive titles and tags. This
        makes cross-platform search far more effective when you have hundreds or
        thousands of conversations.
      </p>

      <h3>3. Regular Backups</h3>
      <p>
        Periodically export your AI Memory database as a backup. While all data
        is stored locally (which is good for privacy), local data can be lost if
        your browser data is cleared. Keep backups in a safe location.
      </p>

      <h3>4. Leverage Memory Injection Wisely</h3>
      <p>
        Don&apos;t inject your entire conversation history into every new chat. Be
        selective — choose the most relevant past context for each conversation to
        keep responses focused and within context limits.
      </p>

      <h3>5. Consolidate Platforms</h3>
      <p>
        If you&apos;re using multiple AI platforms for similar tasks, consider
        consolidating. AI Memory&apos;s unified search means you can be more strategic
        about which platform you use for which purpose — without losing the ability
        to find past conversations.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>How do I export my ChatGPT conversation history?</h3>
      <p>
        Go to ChatGPT <strong>Settings → Data Controls → Export Data</strong>.
        OpenAI emails you a ZIP file containing all conversations in JSON format.
        The file typically arrives within minutes and includes all your chat history.
      </p>

      <h3>Can I transfer conversations from ChatGPT to Claude?</h3>
      <p>
        Direct import is not supported, but you can export from ChatGPT and use
        AI Memory to import and search those conversations. With memory injection,
        you can bring ChatGPT context directly into Claude conversations via the
        Chrome extension.
      </p>

      <h3>What is the best way to migrate AI chat history between platforms?</h3>
      <p>
        AI Memory is the most efficient solution. Install the Chrome extension once,
        and it auto-captures conversations from all supported platforms. For
        historical data, import existing exports (JSON/TXT) into AI Memory for a
        complete unified archive.
      </p>

      <h3>Does Claude have a built-in export feature?</h3>
      <p>
        Yes. Anthropic provides a data export option in <strong>Settings → Data → Export</strong>.
        You can download your conversations in a structured format. For real-time
        automatic capture, the AI Memory Chrome extension is more convenient.
      </p>

      <h3>How do I export conversations from DeepSeek AI?</h3>
      <p>
        DeepSeek offers data export in <strong>Settings → Data → Export</strong>.
        The AI Memory Chrome extension provides an automatic alternative that
        captures DeepThink reasoning traces alongside regular conversations.
      </p>

      <h3>Can I use AI Memory to unify all my AI conversations?</h3>
      <p>
        Yes. AI Memory supports ChatGPT, Claude, DeepSeek, Gemini, Grok, Kimi,
        Copilot, Perplexity, and more. All conversations are stored locally using
        SQLite FTS5 on WebAssembly, giving you instant full-text search across your
        entire AI conversation history — regardless of which platform it came from.
      </p>

      <h2>Conclusion: Take Control of Your AI Conversation History</h2>

      <p>
        The era of using a single AI platform is over. Today&apos;s power users switch
        between ChatGPT, Claude, DeepSeek, Gemini, Grok, and more — sometimes
        within the same hour. But each platform keeps your conversations locked in
        its own silo, forcing you to repeat context and lose valuable history.
      </p>

      <p>
        <strong>AI Memory solves this.</strong> With automatic cross-platform
        capture, unified search, memory injection, and MCP server support, it gives
        you a single, searchable, portable home for all your AI conversations.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
        <h3 className="text-blue-800 mt-0">Ready to Unify Your AI Conversations?</h3>
        <p className="text-blue-700 mb-4">
          Install AI Memory today and never lose another conversation — regardless of
          which AI platform you use.
        </p>
        <ol className="text-blue-700">
          <li>
            Install the{' '}
            <Link href="/chrome-extension" className="text-blue-600 underline font-medium">
              AI Memory Chrome Extension
            </Link>
          </li>
          <li>Start chatting on any AI platform — everything is auto-captured</li>
          <li>Search your entire history from one place</li>
          <li>Import existing exports to complete your archive</li>
        </ol>
        <p className="text-blue-600 font-medium mt-4">
          <Link href="/" className="underline">
            Get started with AI Memory →
          </Link>
        </p>
      </div>
    </BlogLayout>
  );
}
