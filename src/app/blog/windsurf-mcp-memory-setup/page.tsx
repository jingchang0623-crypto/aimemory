import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';

const slug = 'windsurf-mcp-memory-setup';

export const metadata: Metadata = {
  title: 'Windsurf MCP Memory Setup — Give Your AI Persistent Memory',
  description: 'Step-by-step guide to setting up MCP memory server for Windsurf IDE. Give your Windsurf AI assistant persistent memory across all your conversations with AI Memory MCP.',
  alternates: {
    canonical: 'https://aimemory.pro/blog/windsurf-mcp-memory-setup',
  },
};

export default function WindsurfMCPMemorySetup() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does Windsurf have memory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Windsurf (formerly Codeium) does not have built-in persistent memory across conversations. However, you can add memory capabilities to Windsurf through MCP (Model Context Protocol) servers. The AI Memory MCP server gives Windsurf the ability to search, save, and retrieve memories from all your AI conversations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I set up MCP memory in Windsurf?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To set up MCP memory in Windsurf: (1) Install the AI Memory MCP server with pip install aimemory-mcp-server, (2) Open Windsurf Settings → MCP → Add New Server, (3) Configure with command "aimemory-mcp-server" and transport "stdio", (4) Restart Windsurf. Your AI now has persistent memory that works across sessions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What MCP servers work with Windsurf?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Windsurf supports MCP servers through its MCP integration. Popular MCP servers for Windsurf include: AI Memory MCP (conversation memory), filesystem-mcp (file operations), brave-search-mcp (web search), github-mcp (repository management), and puppeteer-mcp (browser automation). Each extends Windsurf\'s capabilities beyond its native features.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is AI Memory MCP free for Windsurf?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the AI Memory MCP server is completely free and open-source. Install with pip install aimemory-mcp-server and use it with Windsurf at no cost. The server runs locally on your machine with SQLite storage — no cloud fees, no API keys, no subscription.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Windsurf remember my coding preferences?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! With the AI Memory MCP server, Windsurf can remember your coding preferences, project context, and past solutions. Save memories like "I prefer TypeScript with strict mode" or "Use Tailwind CSS for styling" and Windsurf will retrieve this context in future conversations.',
        },
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Windsurf MCP Memory Setup — Give Your AI Persistent Memory',
    description: 'Step-by-step guide to setting up MCP memory server for Windsurf IDE. Give your Windsurf AI assistant persistent memory across all your conversations.',
    url: 'https://aimemory.pro/blog/windsurf-mcp-memory-setup',
    datePublished: '2026-05-09',
    dateModified: '2026-05-09',
    author: { '@type': 'Organization', name: 'AI Memory', url: 'https://aimemory.pro' },
    publisher: { '@type': 'Organization', name: 'AI Memory', url: 'https://aimemory.pro' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <BlogLayout slug={slug} title="Windsurf MCP Memory Setup — Give Your AI Persistent Memory" category="MCP" date="2026-05-09" readTime="8 min">
        <p className="text-gray-600 mb-6">
          Windsurf IDE (formerly Codeium) has become a favorite among developers for its fast, AI-powered code completion. But one thing Windsurf lacks out of the box is <strong className="text-gray-900">persistent memory</strong> — the ability to remember context, preferences, and past solutions across conversations. In this guide, we&apos;ll show you how to add memory to Windsurf using the Model Context Protocol (MCP).
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 font-medium">🎯 What you&apos;ll learn:</p>
          <ul className="list-disc list-inside text-blue-700 mt-2 space-y-1">
            <li>How to install the AI Memory MCP server</li>
            <li>How to configure MCP in Windsurf IDE</li>
            <li>How to use memory tools in your coding workflow</li>
            <li>Tips for organizing your AI memories</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Windsurf Needs Memory</h2>
        <p className="text-gray-600 mb-4">
          If you&apos;ve used Windsurf for more than a few days, you&apos;ve probably experienced this frustration: You explain your tech stack, coding preferences, and project architecture to Windsurf. The AI gives great help. But next session? It&apos;s all forgotten. You start from zero again.
        </p>
        <p className="text-gray-600 mb-4">
          This isn&apos;t Windsurf&apos;s fault — most AI coding assistants don&apos;t have cross-conversation memory. They treat each session as a blank slate. But with MCP, you can change that.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">What is MCP?</h2>
        <p className="text-gray-600 mb-4">
          The <strong className="text-gray-900">Model Context Protocol (MCP)</strong> is an open standard that lets AI assistants connect to external tools and data sources. Think of it as a universal plugin system — one protocol that works with Claude Desktop, Cursor, Windsurf, and 113+ other AI clients.
        </p>
        <p className="text-gray-600 mb-6">
          MCP servers provide <strong className="text-gray-900">tools</strong> that AI assistants can call. For memory, we use the AI Memory MCP server — a free, open-source server that provides 7 memory tools including search, save, update, and delete.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Install the AI Memory MCP Server</h2>
        <p className="text-gray-600 mb-4">
          First, install the AI Memory MCP server on your machine. You&apos;ll need Python 3.10 or higher.
        </p>
        <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto">
          <p># Install via pip</p>
          <p>pip install aimemory-mcp-server</p>
        </div>
        <p className="text-gray-600 mb-4">
          This installs the <code className="bg-gray-100 px-1 rounded">aimemory-mcp-server</code> command, which you&apos;ll use in Windsurf&apos;s MCP configuration.
        </p>
        <p className="text-gray-600 mb-6">
          Verify the installation:
        </p>
        <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm mb-6 overflow-x-auto">
          <p>aimemory-mcp-server --help</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Configure MCP in Windsurf</h2>
        <p className="text-gray-600 mb-4">
          Now add the AI Memory server to Windsurf&apos;s MCP configuration:
        </p>
        <ol className="list-decimal list-inside text-gray-600 mb-4 space-y-2">
          <li>Open Windsurf IDE</li>
          <li>Go to <strong className="text-gray-900">Settings</strong> (gear icon or Cmd/Ctrl + ,)</li>
          <li>Navigate to <strong className="text-gray-900">MCP</strong> or <strong className="text-gray-900">Model Context Protocol</strong></li>
          <li>Click <strong className="text-gray-900">Add New MCP Server</strong></li>
        </ol>
        <p className="text-gray-600 mb-4">Configure the server with these settings:</p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <p className="font-mono text-sm"><strong>Name:</strong> AI Memory</p>
          <p className="font-mono text-sm"><strong>Command:</strong> aimemory-mcp-server</p>
          <p className="font-mono text-sm"><strong>Transport:</strong> stdio</p>
          <p className="font-mono text-sm"><strong>Env (optional):</strong></p>
          <pre className="bg-gray-100 p-2 rounded mt-1 text-xs overflow-x-auto">{`{
  "AIMEMORY_DB": "/path/to/your/aimemory.db"
}`}</pre>
        </div>
        <p className="text-gray-600 mb-6">
          The <code className="bg-gray-100 px-1 rounded">AIMEMORY_DB</code> environment variable lets you specify where memories are stored. If omitted, it defaults to <code className="bg-gray-100 px-1 rounded">~/.aimemory/memories.db</code>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Restart Windsurf</h2>
        <p className="text-gray-600 mb-4">
          After saving the MCP configuration, restart Windsurf to load the new server. You should see &quot;AI Memory&quot; in your MCP servers list.
        </p>
        <p className="text-gray-600 mb-6">
          To verify the connection, open Windsurf&apos;s MCP panel and check that AI Memory shows <strong className="text-gray-900">Connected</strong> status with 12 tools available.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Using Memory in Windsurf</h2>
        <p className="text-gray-600 mb-4">
          Now you can use memory tools directly in your Windsurf conversations. Here are some examples:
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Save Coding Preferences</h3>
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-gray-700 italic">&quot;Save this to memory: I prefer TypeScript with strict mode enabled, and I use Tailwind CSS for all styling. My testing framework is Vitest.&quot;</p>
        </div>
        <p className="text-gray-600 mb-4">
          Windsurf will call the <code className="bg-gray-100 px-1 rounded">save_memory</code> tool and store these preferences. Next time you start a new session, you can say:
        </p>
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <p className="text-gray-700 italic">&quot;Search my memory for coding preferences&quot;</p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Remember Project Context</h3>
        <p className="text-gray-600 mb-4">
          When you&apos;ve explained your project architecture, save it:
        </p>
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-gray-700 italic">&quot;Save memory: This project uses Next.js 15 with App Router, Prisma ORM with PostgreSQL, and authentication via Clerk. The main entities are User, Project, and Task.&quot;</p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Find Past Solutions</h3>
        <p className="text-gray-600 mb-6">
          When you encounter a problem you&apos;ve solved before:
        </p>
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <p className="text-gray-700 italic">&quot;Search my memories for PostgreSQL connection pool issues&quot;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">12 Memory Tools Available</h2>
        <p className="text-gray-600 mb-4">
          The AI Memory MCP server provides 12 tools that Windsurf can use:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Tool</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">search_memories</td>
                <td className="border border-gray-200 px-4 py-2">Full-text search with FTS5 syntax</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">save_memory</td>
                <td className="border border-gray-200 px-4 py-2">Store new memories with tags</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">list_memories</td>
                <td className="border border-gray-200 px-4 py-2">Browse memories with filtering</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">get_memory</td>
                <td className="border border-gray-200 px-4 py-2">Retrieve a specific memory by ID</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">update_memory</td>
                <td className="border border-gray-200 px-4 py-2">Edit existing memory content</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">delete_memory</td>
                <td className="border border-gray-200 px-4 py-2">Remove outdated memories</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">memory_stats</td>
                <td className="border border-gray-200 px-4 py-2">View total count and tag distribution</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices for Windsurf Memory</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-green-800 mb-2">✅ Do:</h3>
          <ul className="list-disc list-inside text-green-700 space-y-1">
            <li>Use tags when saving memories (e.g., &quot;typescript&quot;, &quot;preferences&quot;, &quot;project-context&quot;)</li>
            <li>Be specific when searching — &quot;React performance optimization&quot; works better than &quot;react&quot;</li>
            <li>Save important decisions and why you made them</li>
            <li>Update memories when your preferences or tech stack changes</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-red-800 mb-2">❌ Don&apos;t:</h3>
          <ul className="list-disc list-inside text-red-700 space-y-1">
            <li>Save sensitive data like API keys or passwords</li>
            <li>Save every single conversation — focus on reusable insights</li>
            <li>Forget to clean up outdated memories periodically</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Import Existing AI Conversations</h2>
        <p className="text-gray-600 mb-4">
          Already have conversations in ChatGPT, Claude, or other AI tools? You can import them into AI Memory:
        </p>
        <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-2">
          <li>Export conversations from ChatGPT (Settings → Data Controls → Export)</li>
          <li>Upload to <a href="https://aimemory.pro" className="text-blue-600 hover:underline">aimemory.pro</a></li>
          <li>The web tool parses and indexes all your conversations</li>
          <li>Windsurf can now search across all imported conversations via MCP</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
        <div className="space-y-4 mb-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="font-semibold text-yellow-800">Server not connecting?</p>
            <p className="text-yellow-700">Make sure <code className="bg-yellow-100 px-1 rounded">aimemory-mcp-server</code> is in your PATH. Run <code className="bg-yellow-100 px-1 rounded">which aimemory-mcp-server</code> to verify.</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="font-semibold text-yellow-800">Tools not showing?</p>
            <p className="text-yellow-700">Check Windsurf&apos;s MCP logs for errors. Ensure the transport is set to &quot;stdio&quot; not &quot;http&quot;.</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="font-semibold text-yellow-800">Python version issues?</p>
            <p className="text-yellow-700">AI Memory MCP requires Python 3.10+. Check with <code className="bg-yellow-100 px-1 rounded">python3 --version</code>.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
        <p className="text-gray-600 mb-4">
          Adding memory to Windsurf via MCP transforms it from a stateless code assistant into an AI that remembers your context, preferences, and past solutions. The setup takes just 5 minutes:
        </p>
        <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-1">
          <li>Install: <code className="bg-gray-100 px-1 rounded">pip install aimemory-mcp-server</code></li>
          <li>Configure: Add to Windsurf MCP settings</li>
          <li>Restart: Reload Windsurf</li>
          <li>Use: Save and search memories in conversations</li>
        </ol>
        <p className="text-gray-600 mb-4">
          Best of all, it&apos;s <strong className="text-gray-900">completely free</strong> — no cloud costs, no API keys, no subscriptions. Your memories stay on your machine.
        </p>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-bold text-purple-900 mb-2">Ready to give Windsurf memory?</h3>
          <p className="text-purple-700 mb-4">Install the AI Memory MCP server and transform your coding workflow.</p>
          <div className="bg-gray-900 text-green-400 rounded-lg p-3 font-mono text-sm mb-3">
            pip install aimemory-mcp-server
          </div>
          <a href="/mcp-server" className="text-purple-600 hover:text-purple-800 font-medium">View full MCP documentation →</a>
        </div>
      </BlogLayout>
    </>
  );
}
