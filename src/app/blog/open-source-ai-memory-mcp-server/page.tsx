import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/BlogLayout';

const slug = 'open-source-ai-memory-mcp-server';

export const metadata: Metadata = {
  title: 'Open Source AI Memory MCP Server — Self-Hosted Memory for Claude, Cursor & More (2026)',
  description: 'Complete guide to open source AI memory MCP servers. Compare AI Memory vs Mem0, set up self-hosted memory, and give your AI assistants persistent context across conversations.',
  keywords: [
    'open source ai memory',
    'mcp server memory',
    'self hosted ai memory',
    'ai memory github',
    'mem0 alternative',
    'mcp memory server',
    'claude memory server',
    'cursor memory',
    'ai conversation memory open source',
    'local ai memory',
  ],
  openGraph: {
    title: 'Open Source AI Memory MCP Server — Self-Hosted Memory for AI Assistants',
    description: 'Complete guide to open source AI memory MCP servers. Set up self-hosted memory for Claude Desktop, Cursor, Windsurf, and 100+ MCP clients.',
    url: 'https://aimemory.pro/blog/open-source-ai-memory-mcp-server',
    type: 'article',
  },
  alternates: {
    canonical: 'https://aimemory.pro/blog/open-source-ai-memory-mcp-server',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there an open source AI memory server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, AI Memory provides a fully open source MCP server for AI conversation memory. The aimemory-mcp-server package on GitHub lets you give persistent memory to Claude Desktop, Cursor, Windsurf, and 100+ MCP-compatible AI tools. Unlike Mem0 which is VC-funded B2B, AI Memory is community-driven and runs entirely on your local machine.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I set up a self-hosted AI memory server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To set up a self-hosted AI memory server: (1) Install Python 3.8+, (2) Run `pip install aimemory-mcp-server`, (3) Add to your MCP client config: `{"mcpServers": {"ai-memory": {"command": "aimemory-mcp-server"}}}`, (4) Restart your AI client. Your server runs locally with SQLite storage — no cloud, no API keys, no subscription fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between AI Memory and Mem0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Memory is open source and runs locally, while Mem0 is a VC-funded ($24M) B2B API platform. AI Memory gives you 100% data ownership with SQLite storage on your machine. Mem0 requires cloud API calls and data leaves your infrastructure. AI Memory supports 5 AI platforms (ChatGPT, Claude, DeepSeek, Gemini, Kimi) vs Mem0\'s single-platform focus. For developers wanting self-hosted memory, AI Memory is the open-source alternative.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which AI clients support MCP memory servers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '113+ AI clients support MCP (Model Context Protocol) memory servers including: Claude Desktop, Cursor IDE, Windsurf, VS Code + Cline, VS Code + Continue, Zed editor, and more. Any MCP-compatible client can connect to AI Memory\'s server to search, save, and retrieve conversation history.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI Memory MCP server free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the AI Memory MCP server is completely free and open source. Install with pip, run locally, no subscription, no API fees, no rate limits. Your data stays on your machine in SQLite. The web app at aimemory.pro is also free for importing and searching your AI conversations.',
      },
    },
  ],
};

export default function OpenSourceAIMemoryMCPServer() {
  return (
    <BlogLayout 
      slug={slug} 
      title="Open Source AI Memory MCP Server — Self-Hosted Memory for Claude, Cursor & More (2026)"
      category="Guides"
      date="2026-05-09"
      readTime="15 min"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h1>Open Source AI Memory MCP Server — Self-Hosted Memory for Claude, Cursor & More (2026)</h1>

      <p className="lead">
        The complete guide to open source AI memory servers. Learn how to set up self-hosted memory
        for Claude Desktop, Cursor, Windsurf, and 100+ MCP clients — no cloud required, no subscription fees.
      </p>

      <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-lg p-6 my-6">
        <h2 className="text-xl font-bold text-purple-300 mb-2">⚡ Quick Install</h2>
        <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
          <code>$ pip install aimemory-mcp-server{'\n'}$ aimemory-mcp-server</code>
        </pre>
        <p className="text-sm text-gray-400 mt-2">
          That&apos;s it. No API keys. No configuration files. Your AI now has persistent memory.
        </p>
      </div>

      <h2 id="why-open-source">Why Open Source AI Memory Matters</h2>

      <p>
        Every conversation you have with ChatGPT, Claude, or DeepSeek contains valuable context about
        your projects, your code, your thinking. That&apos;s hundreds of hours of knowledge that
        disappears into platform silos.
      </p>

      <p>
        <strong>The problem with VC-funded memory platforms:</strong> They require your data to leave
        your infrastructure. Mem0, backed by $24M in funding, runs as a cloud API. Your conversations
        flow through their servers. That&apos;s a non-starter for:
      </p>

      <ul>
        <li><strong>Security teams</strong> who can&apos;t let proprietary code leave the company</li>
        <li><strong>Privacy advocates</strong> who want 100% data ownership</li>
        <li><strong>Cost-conscious developers</strong> who don&apos;t want another subscription</li>
        <li><strong>Offline users</strong> who need memory without internet</li>
      </ul>

      <p>
        <strong>Open source AI memory</strong> gives you all the benefits without the cloud dependency:
      </p>

      <ul>
        <li>✅ 100% data ownership — SQLite database on your machine</li>
        <li>✅ Zero subscription fees — free forever</li>
        <li>✅ Offline capable — works without internet</li>
        <li>✅ Audit friendly — every line of code is public</li>
        <li>✅ No vendor lock-in — standard MCP protocol</li>
      </ul>

      <h2 id="mcp-protocol">What is MCP (Model Context Protocol)?</h2>

      <p>
        MCP is the USB-C of AI — one standard that connects any AI assistant to any data source.
        Instead of building separate integrations for Claude, Cursor, ChatGPT, and Windsurf, you
        build <strong>one MCP server</strong> and it works everywhere.
      </p>

      <p>
        For AI memory, this means you can:
      </p>

      <ul>
        <li>Search your ChatGPT history from Claude Desktop</li>
        <li>Reference Claude solutions when coding in Cursor</li>
        <li>Retrieve DeepSeek debugging sessions in Windsurf</li>
        <li>All from <strong>one unified memory server</strong></li>
      </ul>

      <p>
        <strong>113+ AI clients</strong> now support MCP, including:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <div className="bg-purple-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl mb-1">🟣</div>
          <div className="font-medium">Claude Desktop</div>
        </div>
        <div className="bg-purple-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl mb-1">⚡</div>
          <div className="font-medium">Cursor</div>
        </div>
        <div className="bg-purple-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl mb-1">🌊</div>
          <div className="font-medium">Windsurf</div>
        </div>
        <div className="bg-purple-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl mb-1">💙</div>
          <div className="font-medium">VS Code</div>
        </div>
        <div className="bg-purple-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl mb-1">🦀</div>
          <div className="font-medium">Zed</div>
        </div>
        <div className="bg-purple-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl mb-1">🔄</div>
          <div className="font-medium">Continue</div>
        </div>
        <div className="bg-purple-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl mb-1">🤖</div>
          <div className="font-medium">Cline</div>
        </div>
        <div className="bg-purple-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl mb-1">🧠</div>
          <div className="font-medium">Aider</div>
        </div>
      </div>

      <h2 id="ai-memory-vs-mem0">AI Memory vs Mem0 — The Key Differences</h2>

      <p>
        When developers search for &quot;open source AI memory,&quot; they often find Mem0. Here&apos;s
        the critical distinction:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full bg-gray-900/50 rounded-lg">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-left">Feature</th>
              <th className="p-4 text-left text-purple-400">AI Memory</th>
              <th className="p-4 text-left text-gray-400">Mem0</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800">
              <td className="p-4 font-medium">License</td>
              <td className="p-4 text-green-400">MIT (fully open source)</td>
              <td className="p-4 text-yellow-400">Apache 2.0 (core only)</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-4 font-medium">Data Location</td>
              <td className="p-4 text-green-400">100% local (SQLite)</td>
              <td className="p-4 text-yellow-400">Cloud API required</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-4 font-medium">MCP Native</td>
              <td className="p-4 text-green-400">✅ Built for MCP</td>
              <td className="p-4 text-red-400">❌ REST API only</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-4 font-medium">Platforms</td>
              <td className="p-4 text-green-400">5 (ChatGPT, Claude, DeepSeek, Gemini, Kimi)</td>
              <td className="p-4 text-yellow-400">Single platform focus</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-4 font-medium">Setup Time</td>
              <td className="p-4 text-green-400">10 seconds</td>
              <td className="p-4 text-yellow-400">30+ minutes</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-4 font-medium">Pricing</td>
              <td className="p-4 text-green-400">Free forever</td>
              <td className="p-4 text-yellow-400">Free tier + paid plans</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Offline</td>
              <td className="p-4 text-green-400">✅ Works offline</td>
              <td className="p-4 text-red-400">❌ Cloud required</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>Bottom line:</strong> Mem0 is a B2B memory API platform. AI Memory is an open-source
        MCP server for developers who want self-hosted, cross-platform AI memory.
      </p>

      <h2 id="setup-guide">How to Set Up AI Memory MCP Server</h2>

      <h3>Prerequisites</h3>
      <ul>
        <li>Python 3.8 or higher</li>
        <li>An MCP-compatible AI client (Claude Desktop, Cursor, Windsurf, etc.)</li>
        <li>2 minutes of your time</li>
      </ul>

      <h3>Step 1: Install the Server</h3>
      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
        <code>$ pip install aimemory-mcp-server</code>
      </pre>

      <p>
        This installs the MCP server and all dependencies. The server uses SQLite for storage
        with full-text search (FTS5) enabled.
      </p>

      <h3>Step 2: Configure Claude Desktop</h3>
      <p>Edit your Claude Desktop config file:</p>
      <ul>
        <li><strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
        <li><strong>Windows:</strong> <code>%APPDATA%\Claude\claude_desktop_config.json</code></li>
        <li><strong>Linux:</strong> <code>~/.config/Claude/claude_desktop_config.json</code></li>
      </ul>

      <p>Add the AI Memory server:</p>
      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
        <code>{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}`}</code>
      </pre>

      <h3>Step 3: Configure Cursor IDE</h3>
      <p>Open Cursor Settings → MCP → Add New MCP Server:</p>
      <ul>
        <li><strong>Name:</strong> AI Memory</li>
        <li><strong>Type:</strong> stdio</li>
        <li><strong>Command:</strong> aimemory-mcp-server</li>
      </ul>

      <h3>Step 4: Configure Windsurf</h3>
      <p>Edit <code>~/.windsurf/mcp_servers.json</code>:</p>
      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
        <code>{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}`}</code>
      </pre>

      <h3>Step 5: Restart Your AI Client</h3>
      <p>
        After adding the configuration, restart Claude Desktop, Cursor, or Windsurf. The AI Memory
        server will start automatically when needed.
      </p>

      <h2 id="tools">7 Memory Tools Available</h2>

      <p>Once connected, your AI assistant can use these tools:</p>

      <div className="space-y-4 my-6">
        <div className="bg-gray-900/50 p-4 rounded-lg">
          <h4 className="text-purple-400 font-mono">search_memories</h4>
          <p className="text-sm text-gray-400 mt-1">
            Full-text search across all saved conversations with FTS5 syntax support. Filter by
            platform, date, or tags.
          </p>
        </div>

        <div className="bg-gray-900/50 p-4 rounded-lg">
          <h4 className="text-purple-400 font-mono">save_memory</h4>
          <p className="text-sm text-gray-400 mt-1">
            Save new conversations, insights, or memory snippets with automatic tagging and
            source attribution.
          </p>
        </div>

        <div className="bg-gray-900/50 p-4 rounded-lg">
          <h4 className="text-purple-400 font-mono">list_memories</h4>
          <p className="text-sm text-gray-400 mt-1">
            Browse your memory library with tag filtering, date ranges, and pagination.
          </p>
        </div>

        <div className="bg-gray-900/50 p-4 rounded-lg">
          <h4 className="text-purple-400 font-mono">get_memory</h4>
          <p className="text-sm text-gray-400 mt-1">
            Retrieve a specific memory by ID for exact referencing.
          </p>
        </div>

        <div className="bg-gray-900/50 p-4 rounded-lg">
          <h4 className="text-purple-400 font-mono">update_memory</h4>
          <p className="text-sm text-gray-400 mt-1">
            Edit existing memories — update content, add tags, correct details.
          </p>
        </div>

        <div className="bg-gray-900/50 p-4 rounded-lg">
          <h4 className="text-purple-400 font-mono">delete_memory</h4>
          <p className="text-sm text-gray-400 mt-1">
            Remove outdated or irrelevant memories permanently.
          </p>
        </div>

        <div className="bg-gray-900/50 p-4 rounded-lg">
          <h4 className="text-purple-400 font-mono">memory_stats</h4>
          <p className="text-sm text-gray-400 mt-1">
            Get total memory count, recent activity, and tag distribution.
          </p>
        </div>
      </div>

      <h2 id="usage-examples">Usage Examples</h2>

      <h3>Example 1: Ask Claude to Remember Your Tech Stack</h3>
      <div className="bg-gray-900/50 p-4 rounded-lg my-4">
        <p className="text-gray-300 italic">
          &quot;I work with Next.js 16, TypeScript, Tailwind, and Prisma. My backend runs on Supabase
          and I deploy to Vercel. Please save this context for future conversations.&quot;
        </p>
      </div>
      <p>
        Claude will use <code>save_memory</code> to store this. In future conversations, you can ask:
      </p>
      <div className="bg-gray-900/50 p-4 rounded-lg my-4">
        <p className="text-gray-300 italic">
          &quot;Search my memory for my tech stack and suggest a database schema.&quot;
        </p>
      </div>

      <h3>Example 2: Reference Past Solutions in Cursor</h3>
      <p>
        When debugging in Cursor, ask: &quot;Search my memory for that React performance optimization
        we discussed last week.&quot; Cursor will use <code>search_memories</code> to find the relevant
        conversation.
      </p>

      <h3>Example 3: Track Project Decisions</h3>
      <p>
        Ask Claude to save architectural decisions: &quot;Remember that we chose PostgreSQL over MongoDB
        because we need ACID transactions for financial data.&quot; This becomes searchable context
        for future planning sessions.
      </p>

      <h2 id="import-conversations">Importing Existing Conversations</h2>

      <p>
        The MCP server works with the web app at{' '}
        <Link href="/" className="text-purple-400 hover:text-purple-300">aimemory.pro</Link>. To import
        your conversation history:
      </p>

      <ol className="list-decimal list-inside space-y-2">
        <li>Export from ChatGPT: Settings → Data Controls → Export Data</li>
        <li>Export from Claude: Settings → Data → Export conversations</li>
        <li>Export from DeepSeek: Profile → Export chat history</li>
        <li>
          Upload to <Link href="/" className="text-purple-400 hover:text-purple-300">aimemory.pro</Link>
        </li>
        <li>Your conversations sync to the MCP server automatically</li>
      </ol>

      <p>
        You can also use the Chrome extension for automatic capture of new conversations.
      </p>

      <h2 id="github">Open Source on GitHub</h2>

      <p>
        The entire AI Memory project is open source:
      </p>

      <ul>
        <li>
          <strong>Web App + MCP Server:</strong>{' '}
          <a
            href="https://github.com/jingchang0623-crypto/aimemory"
            className="text-purple-400 hover:text-purple-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/jingchang0623-crypto/aimemory
          </a>
        </li>
        <li><strong>License:</strong> MIT</li>
        <li><strong>Stars:</strong> Growing community</li>
        <li><strong>Issues:</strong> Public issue tracker</li>
        <li><strong>Contributions:</strong> PRs welcome</li>
      </ul>

      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="space-y-6 my-6">
        <div>
          <h4 className="text-purple-300">Is AI Memory completely free?</h4>
          <p className="text-gray-400">
            Yes. The MCP server, web app, and Chrome extension are all free with no usage limits.
            No account required for the web app. No subscription for the MCP server. Your data
            stays on your machine.
          </p>
        </div>

        <div>
          <h4 className="text-purple-300">Can I use this for commercial projects?</h4>
          <p className="text-gray-400">
            Yes, MIT license permits commercial use. Deploy it internally at your company,
            modify it for your needs, no restrictions.
          </p>
        </div>

        <div>
          <h4 className="text-purple-300">Where is my data stored?</h4>
          <p className="text-gray-400">
            Locally on your machine in SQLite. For the web app, data is session-isolated on our server
            and only accessible with your session cookie. We literally cannot read your conversations.
          </p>
        </div>

        <div>
          <h4 className="text-purple-300">Does it work offline?</h4>
          <p className="text-gray-400">
            The MCP server works 100% offline once installed. The web app requires internet for upload,
            but search works with your session data.
          </p>
        </div>

        <div>
          <h4 className="text-purple-300">How is this different from ChatGPT&apos;s built-in memory?</h4>
          <p className="text-gray-400">
            ChatGPT memory is limited to 1,500 words and locked to OpenAI&apos;s platform. AI Memory
            gives you unlimited storage, cross-platform search, and export capabilities. Plus you
            can use it with Claude, DeepSeek, Gemini, and Kimi — not just ChatGPT.
          </p>
        </div>
      </div>

      <h2 id="get-started">Get Started Now</h2>

      <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/30 rounded-lg p-6 my-6">
        <h3 className="text-xl font-bold mb-4">Install AI Memory MCP Server</h3>
        <pre className="bg-black/50 p-4 rounded-lg mb-4">
          <code>pip install aimemory-mcp-server</code>
        </pre>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/mcp-server"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors"
          >
            MCP Server Guide →
          </Link>
          <a
            href="https://github.com/jingchang0623-crypto/aimemory"
            className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        </div>
      </div>

      <h2 id="related">Related Guides</h2>

      <ul className="space-y-2">
        <li>
          <Link href="/blog/mcp-server-setup-guide" className="text-purple-400 hover:text-purple-300">
            How to Set Up MCP Server: Complete Guide for AI Memory
          </Link>
        </li>
        <li>
          <Link href="/blog/claude-desktop-mcp-setup" className="text-purple-400 hover:text-purple-300">
            Claude Desktop MCP Setup: Complete Tutorial (2026)
          </Link>
        </li>
        <li>
          <Link href="/blog/mcp-cursor-setup-guide" className="text-purple-400 hover:text-purple-300">
            MCP Cursor Setup Guide: Give Your AI IDE Memory
          </Link>
        </li>
        <li>
          <Link href="/blog/mem0-alternative" className="text-purple-400 hover:text-purple-300">
            Mem0 Alternative: AI Memory vs Mem0 — Which Should You Choose?
          </Link>
        </li>
        <li>
          <Link href="/blog/best-mcp-servers-2026" className="text-purple-400 hover:text-purple-300">
            Best MCP Servers 2026: Top 15 Tools for Claude, Cursor & More
          </Link>
        </li>
      </ul>
    </BlogLayout>
  );
}
