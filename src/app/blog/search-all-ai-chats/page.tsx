import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

const slug = 'search-all-ai-chats';

export const metadata: Metadata = {
  title: 'How to Search Across All Your AI Chats: Complete Guide (2026) | AI Memory Blog',
  alternates: {
    canonical: 'https://aimemory.pro/blog/search-all-ai-chats',
  },
};


const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I search across all my AI chats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective way to search across all your AI chats is with AI Memory (aimemory.pro). AI Memory captures and indexes every conversation from ChatGPT, Claude, DeepSeek, Gemini, and other AI platforms into a single searchable database. It uses SQLite FTS5 full-text search, so you can find any conversation by searching for a keyword, phrase, or topic — even if the conversation happened months ago on a different AI platform. Install the Chrome extension or export your conversation history to get started in under two minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I search my ChatGPT conversation history?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT offers a basic title-only search in the sidebar, which only matches conversation titles — not the actual content of your messages. This means if you had a deep conversation about Python debugging but the title says "Help with code," searching for "Python debugging" won\'t find it. For full-text search across all ChatGPT conversations, you need a third-party tool like AI Memory that indexes the complete message content of every conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I search through my Claude conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Claude provides a conversation list with basic filtering, but it lacks full-text search across conversation content. You can browse your conversation history and see titles, but you cannot search for specific phrases, code snippets, or topics discussed within conversations. To search your Claude conversation history, you can export your data from Claude and import it into AI Memory, which indexes every message for instant full-text search.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to search ChatGPT and Claude conversations at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, AI Memory (aimemory.pro) is the only tool that provides unified cross-platform search across ChatGPT, Claude, DeepSeek, Gemini, and other AI assistants. It captures conversations from all your AI platforms and indexes them into one searchable database. When you search, results come from every platform simultaneously. This is invaluable for power users who use multiple AI tools and need to find information regardless of which assistant they originally asked.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I export my AI chat history for searching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most AI platforms allow you to export your conversation data. ChatGPT offers a data export from Settings > Data Controls > Export Data, which downloads a ZIP file with all your conversations in JSON format. Claude also provides a data export option. You can then import these exports into AI Memory, which parses the JSON files and indexes every message for full-text search. The Chrome extension also captures conversations automatically going forward, so you don\'t need to keep exporting manually.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why can\'t I find old AI conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI platforms like ChatGPT and Claude store your conversations but provide very limited search capabilities. ChatGPT only searches conversation titles, not message content. Claude has no full-text search at all. As your conversation history grows to hundreds or thousands of chats, finding specific information becomes nearly impossible without a dedicated search tool. AI Memory solves this by indexing every message from every AI platform and providing instant full-text search with keyword highlighting.',
      },
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aimemory.pro' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://aimemory.pro/blog' },
    { '@type': 'ListItem', position: 3, name: 'How to Search Across All AI Chats', item: 'https://aimemory.pro/blog/search-all-ai-chats' },
  ],
};

export default function SearchAllAIChatsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
            🧠 AI Memory
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-400" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          </li>
          <li className="mx-1">/</li>
          <li>
            <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
          </li>
          <li className="mx-1">/</li>
          <li className="text-gray-200 font-medium">How to Search Across All AI Chats</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-invert lg:prose-xl max-w-none">
          <h1>How to Search Across All AI Chats: Find Any Conversation Instantly (2026)</h1>

          <p className="lead text-lg text-gray-300">
            You use ChatGPT for brainstorming, Claude for coding, and maybe DeepSeek or Gemini for
            research. But when you need to find something you discussed weeks ago,{' '}
            <strong>searching across all your AI chats</strong> feels impossible. ChatGPT only searches
            titles, Claude has no full-text search, and there&apos;s no way to search across platforms.
            In this guide, we&apos;ll cover every method to <strong>search AI chats</strong> — from
            native tools to workarounds to the definitive solution with{' '}
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">AI Memory</Link>.
          </p>

          <p>
            If you&apos;ve ever thought &quot;I know I discussed this with an AI before, but I can&apos;t
            find it,&quot; you&apos;re not alone. The average AI power user has hundreds of conversations
            across multiple platforms, and native search capabilities are shockingly limited. Let&apos;s fix
            that.
          </p>

          {/* Table of Contents */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 my-8 not-prose">
            <h2 className="text-lg font-bold text-white mb-4">📋 Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#why-searching-is-hard" className="text-blue-400 hover:text-blue-300">Why Searching Across AI Chats Is So Hard</a></li>
              <li><a href="#chatgpt-search-limits" className="text-blue-400 hover:text-blue-300">ChatGPT Search: What It Can and Can&apos;t Do</a></li>
              <li><a href="#claude-search-limits" className="text-blue-400 hover:text-blue-300">Claude Conversation Search: Current Limitations</a></li>
              <li><a href="#cross-platform-problem" className="text-blue-400 hover:text-blue-300">The Cross-Platform Search Problem</a></li>
              <li><a href="#five-methods" className="text-blue-400 hover:text-blue-300">5 Methods to Search Across All AI Chats</a></li>
              <li><a href="#comparison-table" className="text-blue-400 hover:text-blue-300">Comparison Table: Which Method Is Best?</a></li>
              <li><a href="#ai-memory-solution" className="text-blue-400 hover:text-blue-300">How AI Memory Solves Cross-Platform AI Search</a></li>
              <li><a href="#setup-guide" className="text-blue-400 hover:text-blue-300">Step-by-Step: Set Up AI Memory for Full Search</a></li>
              <li><a href="#faq" className="text-blue-400 hover:text-blue-300">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Section 1: Why Searching Is Hard */}
          <h2 id="why-searching-is-hard">Why Searching Across AI Chats Is So Hard</h2>

          <p>
            AI assistants have become indispensable tools for developers, writers, researchers, and
            knowledge workers. The average power user interacts with AI multiple times per day, generating
            hundreds of valuable conversations each month. These conversations contain code solutions,
            research findings, creative ideas, and hard-won debugging insights.
          </p>

          <p>
            But here&apos;s the problem: <strong>searching across all your AI chats</strong> is
            fundamentally broken. Each AI platform stores your conversations in its own siloed system
            with its own (limited) search capabilities. There&apos;s no universal search bar that
            spans ChatGPT, Claude, Gemini, and DeepSeek.
          </p>

          <h3>The Growing Conversation Problem</h3>

          <p>
            Think about how many AI conversations you&apos;ve had in the past year. If you use AI daily,
            you might have:
          </p>

          <ul>
            <li><strong>200+ ChatGPT conversations</strong> covering brainstorming, writing, code reviews, and Q&amp;A</li>
            <li><strong>100+ Claude conversations</strong> with detailed code artifacts, documents, and analysis</li>
            <li><strong>50+ DeepSeek conversations</strong> for technical problem-solving and research</li>
            <li><strong>50+ Gemini conversations</strong> for multimodal tasks and Google-integrated workflows</li>
          </ul>

          <p>
            That&apos;s 400+ conversations with no unified way to <strong>search AI chat history</strong>.
            The information is there — you just can&apos;t access it efficiently.
          </p>

          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 my-6 not-prose">
            <p className="text-blue-300 font-medium">💡 Key Insight</p>
            <p className="text-blue-200/80 text-sm mt-1">
              AI conversations are becoming a critical knowledge base. Unlike emails or documents that
              you can search with Spotlight, Finder, or grep, AI chats live inside walled gardens with
              minimal search functionality. The tool you need is <strong>AI Memory</strong> — it brings
              all your AI conversations into one searchable place.
            </p>
          </div>

          {/* Section 2: ChatGPT Search Limitations */}
          <h2 id="chatgpt-search-limits">ChatGPT Search: What It Can and Can&apos;t Do</h2>

          <p>
            ChatGPT is the most widely used AI assistant, so let&apos;s start there. When most people
            try to <strong>search ChatGPT history</strong>, they discover its limitations very quickly.
          </p>

          <h3>How ChatGPT&apos;s Native Search Works</h3>

          <p>
            ChatGPT has a search bar in the left sidebar that lets you filter your conversation list.
            You type a keyword, and conversations that match appear in the sidebar. Simple enough —
            until you realize <strong>what it actually searches</strong>.
          </p>

          <p>
            ChatGPT&apos;s search only matches <strong>conversation titles</strong>, not the actual
            content of your messages. This means:
          </p>

          <ul>
            <li>If your conversation title is &quot;Help with Python,&quot; you can find it by searching &quot;Python&quot;</li>
            <li>But if the conversation discussed <strong>Python debugging, pandas DataFrames, or Django middleware</strong>, none of those keywords will surface this conversation</li>
            <li>ChatGPT auto-generates titles, which are often vague and unhelpful for search</li>
            <li>You cannot search for specific code snippets, API names, or technical terms discussed within conversations</li>
          </ul>

          <h3>Real-World Example: Why Title-Only Search Fails</h3>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5 my-6 not-prose">
            <h4 className="text-white font-semibold mb-3">🔍 Search Failure Example</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p><strong>Scenario:</strong> Three weeks ago, you had a ChatGPT conversation about implementing OAuth2 with PKCE in a Next.js app. The conversation covered token refresh, CSRF protection, and secure cookie handling.</p>
              <p><strong>ChatGPT auto-titled it:</strong> &quot;Help with authentication&quot;</p>
              <p><strong>What you search for:</strong> &quot;OAuth2 PKCE Next.js&quot;</p>
              <p><strong>Result:</strong> ❌ No matches. The conversation title doesn&apos;t contain those keywords.</p>
              <p><strong>With AI Memory:</strong> Searching &quot;OAuth2 PKCE&quot; instantly finds the conversation because it indexes every message, not just titles.</p>
            </div>
          </div>

          <h3>ChatGPT&apos;s Other Search Limitations</h3>

          <ul>
            <li><strong>No date range filtering:</strong> You can&apos;t say &quot;show me conversations from last March&quot;</li>
            <li><strong>No content type filtering:</strong> You can&apos;t filter to only conversations with code blocks or images</li>
            <li><strong>No export-friendly search:</strong> Even after exporting your data, the JSON format requires technical skills to search</li>
            <li><strong>No cross-platform search:</strong> Results are limited to ChatGPT only — your Claude and DeepSeek conversations are invisible</li>
          </ul>

          <p>
            For anyone trying to <strong>search ChatGPT history</strong> for specific information,
            these limitations are a daily frustration. The data exists — ChatGPT stores every conversation
            you&apos;ve ever had — but finding it is another matter entirely.
          </p>

          {/* Section 3: Claude Search Limitations */}
          <h2 id="claude-search-limits">Claude Conversation Search: Current Limitations</h2>

          <p>
            Claude by Anthropic is beloved by developers and power users for its reasoning capabilities,
            large context window, and Artifacts feature. But if you&apos;re trying to{' '}
            <strong>search Claude conversations</strong>, you&apos;ll find the experience even more
            limited than ChatGPT.
          </p>

          <h3>What Claude Offers for Search</h3>

          <p>
            Claude provides a conversation history sidebar where you can browse your past chats.
            The conversations are listed chronologically with titles. You can scroll through the list
            and click on conversations to view them. That&apos;s about it.
          </p>

          <p>
            There is no search bar to filter conversations by keyword. There is no full-text search
            across conversation content. There is no way to find a specific conversation except by
            scrolling through the list and hoping you recognize the title.
          </p>

          <h3>Why This Matters for Power Users</h3>

          <ul>
            <li><strong>No keyword search:</strong> You literally cannot search your Claude conversation history by keyword</li>
            <li><strong>No code search:</strong> If you asked Claude to write a specific function weeks ago, there&apos;s no way to find it except by scrolling</li>
            <li><strong>No artifact search:</strong> Claude Artifacts — the rich code, documents, and diagrams Claude creates — are not searchable across conversations</li>
            <li><strong>No export-based search:</strong> While you can export Claude data, there&apos;s no built-in tool to search the exported files</li>
          </ul>

          <div className="bg-amber-900/30 border border-amber-700 rounded-lg p-4 my-6 not-prose">
            <p className="text-amber-300 font-medium">⚠️ Important</p>
            <p className="text-amber-200/80 text-sm mt-1">
              Claude&apos;s memory feature captures general facts about you (like &quot;prefers Python&quot;
              or &quot;building a SaaS product&quot;), but it does <strong>not</strong> store or index the
              content of your conversations. Even with memory enabled, you cannot{' '}
              <strong>search Claude conversations</strong> for specific information.
            </p>
          </div>

          {/* Section 4: Cross-Platform Problem */}
          <h2 id="cross-platform-problem">The Cross-Platform Search Problem</h2>

          <p>
            Most power users don&apos;t stick to one AI platform. You might use ChatGPT for general
            questions, Claude for coding and long documents, DeepSeek for technical reasoning, and
            Gemini for tasks that require Google integration. Each platform has its own conversation
            history, its own (limited) search, and its own data format.
          </p>

          <p>
            This creates a <strong>cross-platform search problem</strong>: the information you need
            might exist in any of your AI tools, and there&apos;s no way to search them all at once.
          </p>

          <h3>The Information Fragmentation Problem</h3>

          <p>
            Consider this common scenario: you&apos;re researching a technical topic and you ask
            questions across multiple AI platforms over several weeks. Some answers came from ChatGPT,
            some from Claude, some from DeepSeek. When you want to revisit your research, you face:
          </p>

          <ul>
            <li><strong>Platform A</strong> had the best overview of the topic</li>
            <li><strong>Platform B</strong> had the most detailed code example</li>
            <li><strong>Platform C</strong> had the key insight that ties it all together</li>
            <li><strong>You can&apos;t remember which platform had what</strong></li>
          </ul>

          <p>
            Without a unified <strong>cross-platform AI search</strong> tool, you&apos;re forced to
            manually search each platform one by one — and even then, the native search might not find
            what you&apos;re looking for because of title-only search limitations.
          </p>

          <h3>Why AI Platforms Won&apos;t Fix This</h3>

          <p>
            There&apos;s a structural reason why this problem persists: AI companies have no incentive
            to help you search conversations on competing platforms. OpenAI wants you to stay in ChatGPT.
            Anthropic wants you to stay in Claude. None of them will build a tool that makes it easy
            to switch between platforms.
          </p>

          <p>
            This is why third-party tools like <Link href="/" className="text-blue-400 hover:text-blue-300 underline">AI Memory</Link>{' '}
            are essential. AI Memory is platform-agnostic — it captures and indexes conversations from
            <strong>every</strong> AI tool, giving you the unified search that no individual platform
            will ever provide.
          </p>

          {/* Section 5: Five Methods */}
          <h2 id="five-methods">5 Methods to Search Across All AI Chats</h2>

          <p>
            Let&apos;s explore every available method for <strong>searching AI chats</strong>, from
            the most basic workarounds to the most powerful solutions.
          </p>

          <h3>Method 1: Native Platform Search (Title-Only)</h3>

          <p>
            The most basic approach is using the built-in search features of each AI platform.
            As we&apos;ve discussed, ChatGPT offers title-only search, and Claude offers no search
            at all.
          </p>

          <ul>
            <li><strong>Pros:</strong> Free, built-in, no setup required</li>
            <li><strong>Cons:</strong> Extremely limited — title-only for ChatGPT, nothing for Claude; no cross-platform capability</li>
            <li><strong>Best for:</strong> Finding a conversation you remember the title of, and nothing else</li>
          </ul>

          <p>
            If you only have a handful of conversations and remember the exact titles, native search
            works. For everyone else, it&apos;s inadequate.
          </p>

          <h3>Method 2: Export and Grep (Technical Users)</h3>

          <p>
            Both ChatGPT and Claude allow you to export your conversation data as JSON files. Technical
            users can use command-line tools to search through these files.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5 my-6 not-prose">
            <h4 className="text-white font-semibold mb-3">💻 Export + Grep Workflow</h4>
            <ol className="space-y-3 text-sm text-gray-300">
              <li><span className="text-blue-400 font-bold">Step 1:</span> Go to ChatGPT Settings → Data Controls → Export Data. Wait for the email with your ZIP file.</li>
              <li><span className="text-blue-400 font-bold">Step 2:</span> Extract the ZIP. You get a folder with <code>conversations.json</code> and media files.</li>
              <li><span className="text-blue-400 font-bold">Step 3:</span> Use grep to search: <code>grep -r &quot;OAuth2 PKCE&quot; conversations.json</code></li>
              <li><span className="text-blue-400 font-bold">Step 4:</span> Repeat for Claude&apos;s exported data, DeepSeek, and Gemini.</li>
            </ol>
          </div>

          <ul>
            <li><strong>Pros:</strong> Free, full-text search across message content, works offline</li>
            <li><strong>Cons:</strong> Requires technical skills, manual exports needed regularly, no UI — just raw JSON results, exports are point-in-time snapshots</li>
            <li><strong>Best for:</strong> Developers comfortable with the command line who only need occasional searches</li>
          </ul>

          <h3>Method 3: Browser History Workaround</h3>

          <p>
            Some users try searching their browser history to find AI conversations. Since each
            ChatGPT and Claude conversation has a unique URL, you can search your browser history
            for keywords that appear in the URL.
          </p>

          <ul>
            <li><strong>Pros:</strong> Free, no setup, works across platforms if you remember URL patterns</li>
            <li><strong>Cons:</strong> URLs don&apos;t contain conversation content — only conversation IDs; completely useless for content-based search</li>
            <li><strong>Best for:</strong> Finding a conversation you visited recently when you remember roughly when you accessed it</li>
          </ul>

          <h3>Method 4: AI Memory (Recommended)</h3>

          <p>
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">AI Memory</Link>{' '}
            is purpose-built to solve the <strong>search all AI chats</strong> problem. It captures
            conversations from every major AI platform and indexes them with full-text search powered
            by SQLite FTS5.
          </p>

          <ul>
            <li><strong>Pros:</strong> Full-text search across all AI platforms, automatic capture via Chrome extension, search results with keyword highlighting, memory injection into new sessions, 100% local storage for privacy</li>
            <li><strong>Cons:</strong> Chrome extension required for automatic capture (or manual export/import for backfill)</li>
            <li><strong>Best for:</strong> Anyone who uses AI regularly and needs to find information across conversations and platforms</li>
          </ul>

          <p>
            AI Memory is the only solution that provides <strong>unified, full-text search</strong>{' '}
            across ChatGPT, Claude, DeepSeek, Gemini, and other AI assistants — all while keeping your
            data local and private.
          </p>

          <h3>Method 5: MCP (Model Context Protocol)</h3>

          <p>
            The Model Context Protocol (MCP) is an emerging standard that allows AI tools to connect
            to external data sources. Some MCP-compatible tools can access your conversation history
            and provide search capabilities within specific AI platforms.
          </p>

          <ul>
            <li><strong>Pros:</strong> Integrated with AI workflows, can provide contextual search within active sessions</li>
            <li><strong>Cons:</strong> Requires technical setup, limited platform support, not standardized across AI tools, nascent ecosystem</li>
            <li><strong>Best for:</strong> Advanced users who are already building MCP-integrated workflows and want programmatic access to conversation data</li>
          </ul>

          {/* Section 6: Comparison Table */}
          <h2 id="comparison-table">Comparison Table: Which Method Is Best?</h2>

          <p>
            Here&apos;s a direct comparison of every method for <strong>searching across AI chats</strong>:
          </p>

          <table className="w-full text-sm my-6">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-300">Method</th>
                <th className="text-left py-3 px-4 text-gray-300">Full-Text Search</th>
                <th className="text-left py-3 px-4 text-gray-300">Cross-Platform</th>
                <th className="text-left py-3 px-4 text-gray-300">Auto-Capture</th>
                <th className="text-left py-3 px-4 text-gray-300">Privacy</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-gray-200">Native Search</td>
                <td className="py-3 px-4 text-red-400">❌ Titles only</td>
                <td className="py-3 px-4 text-red-400">❌ Single platform</td>
                <td className="py-3 px-4 text-yellow-400">⚠️ Built-in</td>
                <td className="py-3 px-4 text-yellow-400">⚠️ Cloud-based</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-gray-200">Export + Grep</td>
                <td className="py-3 px-4 text-green-400">✅ Yes</td>
                <td className="py-3 px-4 text-yellow-400">⚠️ Manual per platform</td>
                <td className="py-3 px-4 text-red-400">❌ Manual exports</td>
                <td className="py-3 px-4 text-green-400">✅ Local files</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-gray-200">Browser History</td>
                <td className="py-3 px-4 text-red-400">❌ URLs only</td>
                <td className="py-3 px-4 text-yellow-400">⚠️ All platforms</td>
                <td className="py-3 px-4 text-yellow-400">⚠️ Built-in</td>
                <td className="py-3 px-4 text-green-400">✅ Local</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-gray-200 font-semibold">AI Memory</td>
                <td className="py-3 px-4 text-green-400 font-semibold">✅ FTS5 search</td>
                <td className="py-3 px-4 text-green-400 font-semibold">✅ All platforms</td>
                <td className="py-3 px-4 text-green-400 font-semibold">✅ Auto via extension</td>
                <td className="py-3 px-4 text-green-400 font-semibold">✅ 100% local</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-200">MCP Tools</td>
                <td className="py-3 px-4 text-yellow-400">⚠️ Varies</td>
                <td className="py-3 px-4 text-yellow-400">⚠️ Limited</td>
                <td className="py-3 px-4 text-red-400">❌ Manual setup</td>
                <td className="py-3 px-4 text-yellow-400">⚠️ Depends on tool</td>
              </tr>
            </tbody>
          </table>

          <p>
            The clear winner for <strong>searching across all AI chats</strong> is{' '}
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">AI Memory</Link>.
            It&apos;s the only solution that provides full-text search, cross-platform support, automatic
            capture, and local-first privacy — all in one package.
          </p>

          {/* Section 7: AI Memory Solution */}
          <h2 id="ai-memory-solution">How AI Memory Solves Cross-Platform AI Search</h2>

          <p>
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">AI Memory</Link>{' '}
            was built from the ground up to solve the <strong>search all AI chats</strong> problem.
            Here&apos;s how it works under the hood and why it&apos;s the most effective solution available.
          </p>

          <h3>Full-Text Search with SQLite FTS5</h3>

          <p>
            AI Memory uses <strong>SQLite FTS5</strong> (Full-Text Search 5) — the same search engine
            technology used by Apple&apos;s Spotlight and many professional applications. FTS5 provides:
          </p>

          <ul>
            <li><strong>Instant keyword search:</strong> Find any word or phrase across millions of messages in milliseconds</li>
            <li><strong>Phrase matching:</strong> Search for exact phrases like &quot;OAuth2 PKCE implementation&quot; rather than individual words</li>
            <li><strong>Relevance ranking:</strong> Results are ranked by relevance, with the most matching conversations shown first</li>
            <li><strong>Keyword highlighting:</strong> Search terms are highlighted in results so you can see exactly where they appear</li>
            <li><strong>Boolean operators:</strong> Combine search terms with AND, OR, and NOT for precise queries</li>
          </ul>

          <p>
            When you <strong>search AI chats</strong> with AI Memory, every single message from every
            conversation is indexed and searchable. Not just titles — the full content of every response
            from every AI assistant.
          </p>

          <h3>Cross-Platform Unified Search</h3>

          <p>
            AI Memory captures conversations from all major AI platforms:
          </p>

          <ul>
            <li><strong>ChatGPT:</strong> Every conversation, including GPT-4, GPT-4o, and custom GPTs</li>
            <li><strong>Claude:</strong> All conversations including Artifacts content</li>
            <li><strong>DeepSeek:</strong> Full conversation capture</li>
            <li><strong>Gemini:</strong> Google Gemini conversations</li>
            <li><strong>Other platforms:</strong> Any AI chat interface supported by the Chrome extension</li>
          </ul>

          <p>
            When you search in AI Memory, results come from <strong>every platform simultaneously</strong>.
            You don&apos;t need to remember which AI you asked — just search for what you&apos;re looking
            for, and AI Memory finds it regardless of the source.
          </p>

          <h3>Automatic Conversation Capture</h3>

          <p>
            The AI Memory <Link href="/chrome-extension" className="text-blue-400 hover:text-blue-300 underline">Chrome Extension</Link>{' '}
            works silently in the background as you use AI tools. When you have a conversation with
            ChatGPT, Claude, or any supported platform, AI Memory automatically captures and indexes it.
            No manual export, no remembering to save — everything is captured as it happens.
          </p>

          <h3>Memory Injection: Bringing Past Context Forward</h3>

          <p>
            Beyond search, AI Memory offers a feature called <strong>memory injection</strong>. When you
            start a new AI conversation, AI Memory can identify relevant past conversations and inject
            them as context. This means your AI assistant effectively &quot;remembers&quot; everything
            you&apos;ve ever discussed, even across different platforms.
          </p>

          <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4 my-6 not-prose">
            <p className="text-purple-300 font-medium">💡 Pro Tip: Memory Injection</p>
            <p className="text-purple-200/80 text-sm mt-1">
              When you start a new ChatGPT or Claude session, open AI Memory first and search for
              related past conversations. Copy the most relevant ones into your new session as context.
              This gives your AI assistant a &quot;memory&quot; of your previous work, leading to
              much better, more personalized responses.
            </p>
          </div>

          <h3>100% Local Storage for Privacy</h3>

          <p>
            Your AI conversations often contain sensitive information — code, business ideas, personal
            questions, proprietary data. AI Memory stores everything <strong>locally in your browser</strong>{' '}
            using IndexedDB. Your conversation data never leaves your device unless you explicitly choose
            to sync it. No cloud servers, no third-party access, no data mining.
          </p>

          <h3>Key Features for AI Chat Search</h3>

          <table className="w-full text-sm my-6">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-300">Feature</th>
                <th className="text-left py-3 px-4 text-gray-300">Without AI Memory</th>
                <th className="text-left py-3 px-4 text-gray-300">With AI Memory</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-gray-200">Search conversation content</td>
                <td className="py-3 px-4 text-red-400">❌ Titles only (ChatGPT) / None (Claude)</td>
                <td className="py-3 px-4 text-green-400">✅ Full-text FTS5 search</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-gray-200">Search across platforms</td>
                <td className="py-3 px-4 text-red-400">❌ One platform at a time</td>
                <td className="py-3 px-4 text-green-400">✅ All platforms simultaneously</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-gray-200">Automatic capture</td>
                <td className="py-3 px-4 text-red-400">❌ Manual export only</td>
                <td className="py-3 px-4 text-green-400">✅ Chrome extension auto-capture</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-gray-200">Search result highlighting</td>
                <td className="py-3 px-4 text-red-400">❌ No highlighting</td>
                <td className="py-3 px-4 text-green-400">✅ Keyword highlighting</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-gray-200">Memory injection</td>
                <td className="py-3 px-4 text-red-400">❌ Not available</td>
                <td className="py-3 px-4 text-green-400">✅ Inject past context into new sessions</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-gray-200">Privacy</td>
                <td className="py-3 px-4 text-yellow-400">⚠️ Data on AI company servers</td>
                <td className="py-3 px-4 text-green-400">✅ 100% local storage</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-200">Historical data backfill</td>
                <td className="py-3 px-4 text-red-400">❌ Not possible</td>
                <td className="py-3 px-4 text-green-400">✅ Import past exports</td>
              </tr>
            </tbody>
          </table>

          {/* Section 8: Setup Guide */}
          <h2 id="setup-guide">Step-by-Step: Set Up AI Memory for Full Search</h2>

          <p>
            Setting up AI Memory to <strong>search across all your AI chats</strong> takes less than
            two minutes. Here&apos;s the complete guide:
          </p>

          <h3>Step 1: Install the Chrome Extension</h3>

          <p>
            Visit the <Link href="/chrome-extension" className="text-blue-400 hover:text-blue-300 underline">AI Memory Chrome Extension</Link>{' '}
            page and add it to Chrome. The extension is lightweight and works silently in the background.
            It only activates when you&apos;re using supported AI platforms.
          </p>

          <h3>Step 2: Connect Your AI Platforms</h3>

          <p>
            Once installed, the extension automatically detects when you&apos;re using ChatGPT, Claude,
            DeepSeek, Gemini, or other supported AI platforms. No API keys needed, no OAuth flows — it
            works by capturing conversations from the browser, just like you&apos;d see them on screen.
          </p>

          <h3>Step 3: Backfill Past Conversations (Optional)</h3>

          <p>
            To <strong>search AI chats</strong> from before you installed the extension, you can
            backfill your history:
          </p>

          <ol>
            <li><strong>Export from ChatGPT:</strong> Go to Settings → Data Controls → Export Data. Download the ZIP file.</li>
            <li><strong>Export from Claude:</strong> Use Claude&apos;s data export feature to download your conversation history.</li>
            <li><strong>Import into AI Memory:</strong> Open the AI Memory dashboard and use the import feature to upload your exported data. AI Memory parses the JSON files and indexes every message.</li>
          </ol>

          <p>
            After importing, all your historical conversations are instantly searchable alongside
            new conversations captured by the extension.
          </p>

          <h3>Step 4: Start Searching</h3>

          <p>
            Open AI Memory and type any keyword, phrase, or topic into the search bar. Results appear
            instantly with keyword highlighting, showing conversations from all your AI platforms.
            Click any result to jump directly to the relevant conversation.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5 my-6 not-prose">
            <h4 className="text-white font-semibold mb-3">🔧 Example Search Workflow</h4>
            <ol className="space-y-3 text-sm text-gray-300">
              <li><span className="text-blue-400 font-bold">Search:</span> Type &quot;React useEffect cleanup&quot; into AI Memory</li>
              <li><span className="text-blue-400 font-bold">Results:</span> Instantly see 5 matching conversations — 3 from ChatGPT, 2 from Claude</li>
              <li><span className="text-blue-400 font-bold">Preview:</span> Each result shows the matching text with keywords highlighted</li>
              <li><span className="text-blue-400 font-bold">Navigate:</span> Click a result to open the full conversation in the original platform</li>
              <li><span className="text-blue-400 font-bold">Reuse:</span> Copy relevant context from past conversations into your current session</li>
            </ol>
          </div>

          <h3>Step 5: Enable Memory Injection (Advanced)</h3>

          <p>
            For the ultimate <strong>search AI chats</strong> experience, enable memory injection.
            This feature automatically identifies relevant past conversations when you start a new
            AI session and offers to inject them as context. Your AI assistant gets a persistent
            memory that spans all your conversations and all your platforms.
          </p>

          {/* FAQ Section */}
          <h2 id="faq">Frequently Asked Questions About Searching AI Chats</h2>

          <h3>Can I search my ChatGPT conversations by content, not just titles?</h3>
          <p>
            ChatGPT&apos;s built-in search only matches conversation titles. To <strong>search ChatGPT
            history</strong> by message content, you need a third-party tool like{' '}
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">AI Memory</Link>{' '}
            that indexes the full text of every message. Alternatively, you can export your ChatGPT
            data and use command-line grep tools, but this requires technical skills and manual exports.
          </p>

          <h3>How do I find a specific conversation from months ago?</h3>
          <p>
            Without AI Memory, your best bet is to scroll through your conversation history and hope
            you recognize the title. With AI Memory installed, simply search for any keyword or topic
            from the conversation, and it will appear in results instantly — even if the conversation
            happened months ago on a different platform.
          </p>

          <h3>Does AI Memory work with all AI platforms?</h3>
          <p>
            AI Memory supports ChatGPT, Claude, DeepSeek, Gemini, and other major AI platforms through
            its Chrome extension. New platforms are added regularly. You can also import exported data
            from any platform for historical search.
          </p>

          <h3>Is my conversation data safe with AI Memory?</h3>
          <p>
            Yes. AI Memory stores all data locally in your browser using IndexedDB. Your conversations
            never leave your device. There are no cloud servers, no data collection, and no third-party
            access. You have complete control over your data.
          </p>

          <h3>Can I search across ChatGPT and Claude at the same time?</h3>
          <p>
            Yes, that&apos;s one of AI Memory&apos;s core features. When you search in AI Memory, results
            come from all your connected AI platforms simultaneously. You don&apos;t need to search each
            platform separately — one search covers everything.
          </p>

          <h3>What happens to new conversations after I install AI Memory?</h3>
          <p>
            The Chrome extension automatically captures and indexes new conversations as you have them.
            Within seconds of a conversation ending, it&apos;s indexed and searchable in AI Memory.
            You don&apos;t need to do anything — it just works in the background.
          </p>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700 rounded-xl p-8 text-center not-prose">
            <h3 className="text-2xl font-bold text-white mb-3">
              Search All Your AI Chats — Instantly
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Stop scrolling through hundreds of conversations. AI Memory indexes every message from
              ChatGPT, Claude, DeepSeek, Gemini, and more — giving you instant full-text search
              across all your AI chats. 100% local, 100% private.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
              >
                Try AI Memory Free →
              </Link>
              <Link
                href="/chrome-extension"
                className="inline-block bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition text-lg border border-gray-600"
              >
                Get Chrome Extension
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Free tier includes 50 conversations • No credit card required • 100% local storage
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
