import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/BlogLayout';

const slug = 'mcp-server-for-claude';

export const metadata: Metadata = {
  title: 'MCP Server for Claude Desktop: Complete Setup Guide (2026)',
  description:
    'Set up an MCP server for Claude Desktop in minutes. Step-by-step guide to installing aimemory-mcp-server, configuring claude_desktop_config.json, and using 12 powerful memory tools.',
  keywords: [
    'mcp server for claude desktop',
    'mcp server for claude',
    'claude desktop mcp server',
    'claude mcp server setup',
    'aimemory mcp server',
    'claude desktop memory',
    'mcp server claude config',
    'model context protocol claude',
    'claude desktop tools',
    'mcp memory server claude',
  ],
  openGraph: {
    title: 'MCP Server for Claude Desktop: Complete Setup Guide',
    description:
      'Set up an MCP server for Claude Desktop in minutes. Install aimemory-mcp-server, configure Claude, and unlock 7 memory tools.',
    url: 'https://aimemory.pro/blog/mcp-server-for-claude',
    type: 'article',
  },
  alternates: {
    canonical: 'https://aimemory.pro/blog/mcp-server-for-claude',
  },
};

export default function MCPServerForClaude() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an MCP server for Claude Desktop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An MCP server for Claude Desktop is a service that implements the Model Context Protocol, allowing Claude to access external tools and data sources. The AI Memory MCP server gives Claude the ability to search, retrieve, and manage your entire conversation history from any AI platform through a standardized protocol.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I install the AI Memory MCP server for Claude?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Install the AI Memory MCP server by running "pip install aimemory-mcp-server" in your terminal. Then add the server configuration to your Claude Desktop config file (claude_desktop_config.json) and restart Claude Desktop. The entire setup takes less than 5 minutes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the MCP server for Claude Desktop free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the AI Memory MCP server for Claude Desktop is completely free and open source. You can install it via pip, and there are no API keys, subscriptions, or usage limits required. You just need to upload your conversations to aimemory.pro first.',
        },
      },
      {
        '@type': 'Question',
        name: 'What tools does the Claude Desktop MCP server provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Claude Desktop MCP server provides 12 tools: search_memory (full-text search), get_context (relevant snippets), list_memories (browse conversations), get_conversation (full conversation by ID), add_memory (save new notes), delete_memory (remove data), get_stats (memory statistics), save_memory (store with tags), export_memories (backup to JSON), import_memories (restore from backup), batch_save_memories (bulk save), and get_all_tags (tag overview).',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is the Claude Desktop MCP config file?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On macOS, the Claude Desktop config file is located at ~/Library/Application Support/Claude/claude_desktop_config.json. On Windows, it is at %APPDATA%\\Claude\\claude_desktop_config.json. Add your MCP server configuration to the mcpServers object in this file.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use the MCP server with Claude Desktop and other AI tools at the same time?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The AI Memory MCP server works with 113+ MCP-compatible clients simultaneously. You can connect Claude Desktop, Cursor, Windsurf, Cline, and many other AI tools to the same memory server. All clients share access to the same conversation history.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need Python installed to run the MCP server for Claude?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the pip-installed MCP server requires Python 3.10 or higher. However, you can also use the hosted version at aimemory.pro/api/mcp which requires no local installation at all — just add the URL to your Claude Desktop config.',
        },
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'MCP Server for Claude Desktop: Complete Setup Guide (2026)',
    description:
      'Comprehensive guide to setting up an MCP server for Claude Desktop. Install aimemory-mcp-server, configure Claude, and unlock 7 memory tools for persistent AI memory.',
    author: { '@type': 'Organization', name: 'AI Memory' },
    publisher: {
      '@type': 'Organization',
      name: 'AI Memory',
      url: 'https://aimemory.pro',
    },
    datePublished: '2026-05-05',
    dateModified: '2026-05-05',
    url: 'https://aimemory.pro/blog/mcp-server-for-claude',
    mainEntityOfPage: 'https://aimemory.pro/blog/mcp-server-for-claude',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aimemory.pro',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://aimemory.pro/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'MCP Server for Claude Desktop',
        item: 'https://aimemory.pro/blog/mcp-server-for-claude',
      },
    ],
  };

  return (
    <BlogLayout
      slug={slug}
      title="MCP Server for Claude Desktop: Complete Setup Guide"
      category="Technical"
      date="2026-05-05"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="prose prose-invert max-w-none">
        <h1>
          MCP Server for Claude Desktop: The Complete Setup Guide
        </h1>
        <p className="text-lg text-gray-400">
          Claude Desktop becomes exponentially more powerful when connected to an{' '}
          <strong>MCP server</strong>. Instead of starting every conversation from
          scratch, your Claude desktop MCP server gives Claude access to your
          entire conversation history — across every AI platform you use. Here is
          everything you need to know to set it up.
        </p>

        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 my-6">
          <p className="text-sm text-purple-300 font-medium mb-1">
            🔑 Key Takeaway
          </p>
          <p className="text-sm text-gray-300">
            An <strong>MCP server for Claude Desktop</strong> lets Claude search,
            read, and add to your AI conversation memory using the open Model
            Context Protocol. Install it with{' '}
            <code>pip install aimemory-mcp-server</code> or use the hosted
            version — setup takes under 5 minutes.
          </p>
        </div>

        {/* === Section 1: What is MCP === */}
        <h2>What Is MCP and Why Does It Matter for Claude?</h2>
        <p>
          The <strong>Model Context Protocol (MCP)</strong> is an open standard
          created by Anthropic that defines how AI assistants connect to external
          data sources and tools. Think of it as a universal adapter — any
          MCP-compatible client can talk to any MCP-compatible server using the
          same protocol. Over <strong>113 clients</strong> already support MCP,
          including Claude Desktop, Cursor, Windsurf, Cline, and more.
        </p>
        <p>
          Before MCP, every AI tool had its own isolated memory or none at all.
          If you spent an hour debugging a React hydration error with ChatGPT,
          Claude had no idea that conversation existed. An{' '}
          <strong>MCP server for Claude</strong> breaks down those silos by
          exposing your conversation history through a standardized set of tools
          that Claude can call directly inside Claude Desktop.
        </p>
        <p>
          This matters because Claude Desktop is one of the most popular MCP
          clients available. Anthropic built native MCP support directly into the
          desktop app, meaning you can connect any claude desktop MCP server
          without plugins, extensions, or workarounds. The configuration is a
          simple JSON file.
        </p>

        {/* === Section 2: Installation === */}
        <h2>Step-by-Step Installation</h2>
        <p>
          There are two ways to set up an MCP server for Claude Desktop: the
          <strong> pip install</strong> method for a local server, or the{' '}
          <strong>hosted URL</strong> method if you prefer zero local setup.
        </p>

        <h3>Option A: Install via pip (Local Server)</h3>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <h4 className="text-sm font-semibold text-white mb-2">
            Step 1: Install the package
          </h4>
          <div className="bg-gray-800 rounded p-3 font-mono text-xs text-green-400">
            pip install aimemory-mcp-server
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Requires Python 3.10+. The package includes all dependencies.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <h4 className="text-sm font-semibold text-white mb-2">
            Step 2: Upload your conversations
          </h4>
          <p className="text-sm text-gray-400">
            Visit{' '}
            <Link href="/" className="text-purple-400 hover:text-purple-300">
              aimemory.pro
            </Link>{' '}
            and upload your ChatGPT, Claude, DeepSeek, or other AI conversation
            exports. This populates the memory database that your MCP server for
            Claude will query.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <h4 className="text-sm font-semibold text-white mb-2">
            Step 3: Start the server
          </h4>
          <div className="bg-gray-800 rounded p-3 font-mono text-xs text-green-400">
            aimemory-mcp-server --port 8080
          </div>
          <p className="text-sm text-gray-400 mt-2">
            The server starts on localhost:8080 by default. It uses the SSE
            transport protocol for real-time communication with Claude Desktop.
          </p>
        </div>

        <h3>Option B: Use the Hosted URL (No Installation)</h3>
        <p>
          If you do not want to run a local server, you can use the hosted
          version directly. Skip the pip install entirely and just point Claude
          Desktop at the remote endpoint. See the config JSON below.
        </p>

        {/* === Section 3: Claude Desktop Config === */}
        <h2>Claude Desktop Config JSON</h2>
        <p>
          Claude Desktop reads its MCP server configuration from a JSON file.
          Open it in any text editor:
        </p>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <p className="text-sm text-gray-300 mb-2">
            <strong>macOS:</strong>{' '}
            <code className="bg-gray-800 px-1 rounded text-green-400">
              ~/Library/Application Support/Claude/claude_desktop_config.json
            </code>
          </p>
          <p className="text-sm text-gray-300">
            <strong>Windows:</strong>{' '}
            <code className="bg-gray-800 px-1 rounded text-green-400">
              %APPDATA%\Claude\claude_desktop_config.json
            </code>
          </p>
        </div>

        <p>
          Add one of the following configurations to your{' '}
          <strong>claude_desktop_config.json</strong>:
        </p>

        <h3>Hosted Version (Recommended)</h3>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <div className="bg-gray-800 rounded p-3 font-mono text-xs text-green-400 whitespace-pre">
{`{
  "mcpServers": {
    "ai-memory": {
      "url": "https://aimemory.pro/api/mcp"
    }
  }
}`}
          </div>
        </div>

        <h3>Local Server (After pip install)</h3>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <div className="bg-gray-800 rounded p-3 font-mono text-xs text-green-400 whitespace-pre">
{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server",
      "args": ["--port", "8080"]
    }
  }
}`}
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-6">
          <p className="text-sm text-yellow-300 font-medium mb-1">
            ⚠️ Important
          </p>
          <p className="text-sm text-gray-300">
            After editing the config file, you must{' '}
            <strong>restart Claude Desktop</strong> for the changes to take
            effect. The MCP server for Claude Desktop will appear in the tools
            panel once connected successfully.
          </p>
        </div>

        {/* === Section 4: Tools === */}
        <h2>Available Tools: 12 MCP Memory Tools</h2>
        <p>
          Once your claude desktop MCP server is connected, Claude gains access
          to these 12 tools for managing your conversation memory:
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-green-400 mb-2">
              🔍 search_memory
            </h3>
            <p className="text-sm text-gray-400">
              Full-text search across all your conversations using FTS5 syntax.
              Supports AND, OR, NOT operators and phrase matching. Filter by
              platform, date range, or limit results.
            </p>
            <div className="mt-2 bg-gray-800 rounded p-2 font-mono text-xs text-gray-400">
              Input: {'{'}query: string, platform?: string, limit?: number{'}'}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-400 mb-2">
              📝 get_context
            </h3>
            <p className="text-sm text-gray-400">
              Retrieve relevant context snippets for a given topic, optimized for
              providing Claude with conversation history. Token-budget aware —
              respects the max_tokens parameter to stay within context limits.
            </p>
            <div className="mt-2 bg-gray-800 rounded p-2 font-mono text-xs text-gray-400">
              Input: {'{'}topic: string, max_tokens?: number{'}'}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-purple-400 mb-2">
              📋 list_memories
            </h3>
            <p className="text-sm text-gray-400">
              List recent conversations with optional platform filtering. Browse
              your entire conversation history with pagination support. Great for
              exploring what you have discussed across AI tools.
            </p>
            <div className="mt-2 bg-gray-800 rounded p-2 font-mono text-xs text-gray-400">
              Input: {'{'}limit?: number, platform?: string{'}'}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-yellow-400 mb-2">
              💬 get_conversation
            </h3>
            <p className="text-sm text-gray-400">
              Retrieve a full conversation by its ID, including every message
              with role, content, and timestamps. Use this when Claude needs
              detailed context from a specific past discussion.
            </p>
            <div className="mt-2 bg-gray-800 rounded p-2 font-mono text-xs text-gray-400">
              Input: {'{'}conversation_id: string{'}'}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-green-400 mb-2">
              ➕ add_memory
            </h3>
            <p className="text-sm text-gray-400">
              Add a new conversation or note to your memory store. Claude can
              save important context, decisions, or summaries for future
              reference. Supports tagging by platform.
            </p>
            <div className="mt-2 bg-gray-800 rounded p-2 font-mono text-xs text-gray-400">
              Input: {'{'}title: string, content: string, platform?: string{'}'}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-red-400 mb-2">
              🗑️ delete_memory
            </h3>
            <p className="text-sm text-gray-400">
              Delete a specific conversation by ID or wipe all session data with
              a confirmation flag. Full data control — nothing is stored without
              your consent.
            </p>
            <div className="mt-2 bg-gray-800 rounded p-2 font-mono text-xs text-gray-400">
              Input: {'{'}conversation_id?: string, confirm?: boolean{'}'}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-cyan-400 mb-2">
              📊 get_stats
            </h3>
            <p className="text-sm text-gray-400">
              Get memory statistics including total conversation count, per
              platform breakdown, storage size, and date ranges. Useful for
              understanding the scope of your AI memory at a glance.
            </p>
            <div className="mt-2 bg-gray-800 rounded p-2 font-mono text-xs text-gray-400">
              Input: {'{'}'{'}'}
            </div>
          </div>
        </div>

        {/* === Section 5: Use Cases === */}
        <h2>Use Cases for Your MCP Server for Claude</h2>
        <div className="grid gap-4 my-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">
              🐛 Cross-Platform Debugging
            </h3>
            <p className="text-sm text-gray-400">
              &quot;Search my memory for the PostgreSQL connection pooling issue
              we solved last month.&quot; — Your MCP server for Claude Desktop
              finds the exact solution from a ChatGPT conversation you had weeks
              ago, saving you from re-debugging the same problem.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">
              📚 Research Synthesis
            </h3>
            <p className="text-sm text-gray-400">
              &quot;What have I learned about React Server Components across all
              my AI conversations?&quot; — Claude Desktop pulls insights from
              ChatGPT, DeepSeek, and previous Claude discussions, synthesizing a
              comprehensive answer from your entire history.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">
              🏗️ Project Continuity
            </h3>
            <p className="text-sm text-gray-400">
              &quot;What authentication approach did we decide on for
              project-alpha?&quot; — Instead of searching through Slack threads or
              old notes, your claude desktop MCP server retrieves the exact
              architecture decision from a past AI conversation.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">
              💡 Knowledge Capture
            </h3>
            <p className="text-sm text-gray-400">
              &quot;Save this conversation summary to my memory with tag
              &apos;onboarding-patterns&apos;.&quot; — Claude uses the
              add_memory tool to store important context for future sessions,
              building a persistent knowledge base across all your AI
              interactions.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">
              🔄 Workflow Automation
            </h3>
            <p className="text-sm text-gray-400">
              Connect your MCP server for Claude to multiple AI tools
              simultaneously. Use Claude Desktop for planning, Cursor for coding,
              and both share the same memory. Your context travels with you
              across every tool.
            </p>
          </div>
        </div>

        {/* === Section 6: Technical Details === */}
        <h2>Technical Details</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-4">
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <strong>Protocol:</strong> JSON-RPC 2.0 over HTTPS (Streamable
              HTTP Transport)
            </li>
            <li>
              <strong>Endpoint:</strong>{' '}
              <code className="bg-gray-800 px-1 rounded">
                https://aimemory.pro/api/mcp
              </code>
            </li>
            <li>
              <strong>Database:</strong> SQLite with FTS5 full-text search and
              WAL mode
            </li>
            <li>
              <strong>Authentication:</strong> Session cookie (aim_session) — no
              API keys needed
            </li>
            <li>
              <strong>Tools:</strong> 7 (search_memory, get_context,
              list_memories, get_conversation, add_memory, delete_memory,
              get_stats)
            </li>
            <li>
              <strong>Python Package:</strong>{' '}
              <code className="bg-gray-800 px-1 rounded">
                aimemory-mcp-server
              </code>{' '}
              on PyPI
            </li>
          </ul>
        </div>

        {/* === Section 7: FAQ === */}
        <h2>Frequently Asked Questions</h2>

        <div className="space-y-4 my-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">
              What is an MCP server for Claude Desktop?
            </h3>
            <p className="text-sm text-gray-400">
              An MCP server for Claude Desktop is a service that implements the
              Model Context Protocol, giving Claude the ability to access
              external tools and data. The AI Memory MCP server specifically lets
              Claude search, read, and manage your conversation history from
              every AI platform you use.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">
              How do I install the MCP server for Claude?
            </h3>
            <p className="text-sm text-gray-400">
              Run{' '}
              <code className="bg-gray-800 px-1 rounded">
                pip install aimemory-mcp-server
              </code>{' '}
              to install locally, then add the configuration to your
              claude_desktop_config.json. Alternatively, use the hosted URL{' '}
              <code className="bg-gray-800 px-1 rounded">
                https://aimemory.pro/api/mcp
              </code>{' '}
              for zero-installation setup.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">
              Is the MCP server for Claude Desktop free?
            </h3>
            <p className="text-sm text-gray-400">
              Yes, the AI Memory MCP server is completely free and open source.
              No API keys, no subscriptions, no usage limits. Upload your
              conversations to aimemory.pro and connect Claude Desktop — that is
              all you need.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">
              Where is the Claude Desktop config file?
            </h3>
            <p className="text-sm text-gray-400">
              On macOS:{' '}
              <code className="bg-gray-800 px-1 rounded text-xs">
                ~/Library/Application Support/Claude/claude_desktop_config.json
              </code>
              . On Windows:{' '}
              <code className="bg-gray-800 px-1 rounded text-xs">
                %APPDATA%\Claude\claude_desktop_config.json
              </code>
              . Add your MCP server entries to the{' '}
              <code>mcpServers</code> object in this file.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">
              Can I use the same MCP server with other AI tools?
            </h3>
            <p className="text-sm text-gray-400">
              Absolutely. The AI Memory MCP server works with 113+ MCP-compatible
              clients. Connect Claude Desktop, Cursor, Windsurf, Cline, and more
              to the same server — they all share access to your unified
              conversation memory.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">
              Do I need Python installed to use the MCP server?
            </h3>
            <p className="text-sm text-gray-400">
              Only if you want to run a local server. The pip-based installation
              requires Python 3.10+. However, the hosted version at
              aimemory.pro/api/mcp requires no local installation — just add the
              URL to your Claude Desktop config JSON.
            </p>
          </div>
        </div>

        {/* === CTA === */}
        <h2>Get Started with Your MCP Server for Claude Desktop</h2>
        <p>
          Setting up an MCP server for Claude Desktop takes less than 5 minutes
          and transforms Claude from a stateless assistant into a persistent
          knowledge partner. Whether you choose the{' '}
          <code>pip install aimemory-mcp-server</code> route or the hosted URL,
          Claude will gain access to your full conversation history across every
          AI platform.
        </p>
        <ol>
          <li>
            Visit{' '}
            <Link href="/" className="text-purple-400 hover:text-purple-300">
              aimemory.pro
            </Link>{' '}
            and upload your AI conversations
          </li>
          <li>
            Add the MCP server configuration to your Claude Desktop config JSON
          </li>
          <li>
            Restart Claude Desktop and start asking about your conversation
            history
          </li>
        </ol>
        <p>
          Your AI memory is persistent, searchable, and private — powered by an
          open protocol that works across 113+ clients.
        </p>
        <p>
          <Link
            href="/docs/mcp"
            className="text-purple-400 hover:text-purple-300"
          >
            Read the full MCP documentation →
          </Link>
        </p>
      </article>
    </BlogLayout>
  );
}
