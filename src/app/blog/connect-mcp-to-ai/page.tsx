'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

const slug = 'connect-mcp-to-ai';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is MCP (Model Context Protocol)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MCP (Model Context Protocol) is an open standard created by Anthropic that enables AI assistants to connect to external tools and data sources through a universal interface. Think of it as USB for AI — any MCP-compatible client (Claude Desktop, ChatGPT, Cursor, Windsurf, etc.) can connect to any MCP server. As of 2026, over 113 AI clients support MCP, making it the de facto standard for extending AI capabilities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I connect MCP to ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To connect an MCP server to ChatGPT, go to Settings → Connectors → MCP Servers in ChatGPT (available for Plus, Pro, Team, and Enterprise plans). Click "Add MCP Server," enter a display name and the server URL (e.g., https://aimemory.pro/api/mcp for AI Memory), then save. ChatGPT will validate the connection and the server\'s tools will become available in your conversations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I set up MCP in Claude Desktop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To set up MCP in Claude Desktop, edit your claude_desktop_config.json file located at ~/Library/Application Support/Claude/ on macOS or %APPDATA%\\Claude\\ on Windows. Add the MCP server configuration under the "mcpServers" key with the server URL, save the file, and restart Claude Desktop. The server will appear in Settings → MCP Servers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I add an MCP server to Cursor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Cursor, open Settings → MCP → Add MCP Server. You can add a server via a JSON config or by entering the URL directly. For streamable HTTP servers like AI Memory, add the server URL (https://aimemory.pro/api/mcp) in the configuration. Cursor supports both stdio and streamable HTTP MCP transports.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I connect MCP to Windsurf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Windsurf, go to Settings → Cascade → MCP Servers and click "Add MCP Server." Add the server configuration as JSON with the URL field pointing to your MCP server endpoint. For AI Memory, use https://aimemory.pro/api/mcp as the URL. Save and restart Windsurf to activate the connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the benefits of connecting AI Memory\'s MCP server to my AI tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Connecting AI Memory\'s MCP server gives every AI assistant access to your entire conversation history across ChatGPT, Claude, DeepSeek, Gemini, and more. This means you can reference past solutions, avoid repeating questions, maintain context across platforms, and leverage accumulated knowledge without switching tools. It transforms isolated AI chats into a unified, searchable knowledge base accessible from any MCP-compatible client.',
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
    { '@type': 'ListItem', position: 3, name: 'How to Connect MCP Server to Any AI Assistant', item: 'https://aimemory.pro/blog/connect-mcp-to-ai' },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Connect MCP Server to Any AI Assistant (2026 Guide)',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  author: {
    '@type': 'Organization',
    name: 'AI Memory',
  },
  publisher: {
    '@type': 'Organization',
    name: 'AI Memory',
  },
  description:
    'Complete guide to connecting MCP servers to ChatGPT, Claude Desktop, Cursor, Windsurf, and any MCP-compatible AI assistant. Includes config JSON examples, troubleshooting, and setup for AI Memory.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://aimemory.pro/blog/connect-mcp-to-ai',
  },
};

export default function ConnectMCPToAIPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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
          <li className="text-gray-200 font-medium">How to Connect MCP Server to Any AI Assistant</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-invert lg:prose-xl max-w-none">
          <h1>How to Connect MCP Server to Any AI Assistant (2026 Guide)</h1>

          <p className="lead text-lg text-gray-300">
            The Model Context Protocol (MCP) has become the universal standard for connecting AI assistants
            to external tools and data sources. Whether you use ChatGPT, Claude Desktop, Cursor, Windsurf,
            or any other MCP-compatible client, you can connect a single MCP server and unlock powerful
            capabilities across <strong>every AI tool you use</strong>. In this guide, we&apos;ll walk you
            through exactly how to <strong>connect MCP to any AI assistant</strong> — with real config
            examples for each platform.
          </p>

          <p>
            If you&apos;ve been wondering how to <strong>connect MCP to ChatGPT</strong>, set up{' '}
            <strong>MCP in Claude Desktop</strong>, or configure <strong>MCP in Cursor and Windsurf</strong>,
            this is the only guide you need. We&apos;ll also show you how{' '}
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">AI Memory</Link>{' '}
            uses MCP to give every AI assistant access to your entire conversation history.
          </p>

          {/* Table of Contents */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 my-8 not-prose">
            <h2 className="text-lg font-bold text-white mb-4">📋 Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#what-is-mcp" className="text-blue-400 hover:text-blue-300">What Is MCP (Model Context Protocol)?</a></li>
              <li><a href="#why-mcp-matters" className="text-blue-400 hover:text-blue-300">Why MCP Matters for AI Users</a></li>
              <li><a href="#connect-chatgpt" className="text-blue-400 hover:text-blue-300">How to Connect MCP to ChatGPT</a></li>
              <li><a href="#connect-claude" className="text-blue-400 hover:text-blue-300">How to Connect MCP to Claude Desktop</a></li>
              <li><a href="#connect-cursor" className="text-blue-400 hover:text-blue-300">How to Set Up MCP in Cursor</a></li>
              <li><a href="#connect-windsurf" className="text-blue-400 hover:text-blue-300">How to Connect MCP to Windsurf</a></li>
              <li><a href="#connect-other" className="text-blue-400 hover:text-blue-300">Connecting MCP to Other AI Clients</a></li>
              <li><a href="#ai-memory-mcp" className="text-blue-400 hover:text-blue-300">AI Memory MCP Server: Your Universal AI Memory</a></li>
              <li><a href="#benefits" className="text-blue-400 hover:text-blue-300">Benefits of Unified AI Conversation Access</a></li>
              <li><a href="#troubleshooting" className="text-blue-400 hover:text-blue-300">Troubleshooting Common MCP Connection Issues</a></li>
              <li><a href="#faq" className="text-blue-400 hover:text-blue-300">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Section 1: What Is MCP */}
          <h2 id="what-is-mcp">What Is MCP (Model Context Protocol)?</h2>

          <p>
            The <strong>Model Context Protocol (MCP)</strong> is an open standard created by Anthropic
            that defines how AI assistants communicate with external tools, data sources, and services.
            Introduced in late 2024 and rapidly adopted throughout 2025 and 2026, MCP has become the
            universal &quot;USB port&quot; for AI — a single protocol that lets any AI client connect
            to any compatible server.
          </p>

          <p>
            Before MCP, every AI platform had its own proprietary way of extending functionality.
            ChatGPT had plugins, Claude had tool use, and each coding assistant had its own extension
            system. This fragmentation meant developers had to build and maintain separate integrations
            for each platform. MCP solves this by providing a <strong>universal interface</strong>:
            build one MCP server, and it works with every MCP-compatible client.
          </p>

          <h3>How MCP Works</h3>

          <p>
            MCP uses a client-server architecture with two transport types:
          </p>

          <ul>
            <li>
              <strong>stdio (Standard I/O)</strong> — The MCP client spawns a local process and
              communicates via stdin/stdout. This is common for local tools and CLI-based servers.
            </li>
            <li>
              <strong>Streamable HTTP</strong> — The MCP client connects to a remote HTTP server
              using Server-Sent Events (SSE) for streaming. This is ideal for cloud-hosted servers
              like AI Memory&apos;s MCP endpoint.
            </li>
          </ul>

          <p>
            An MCP server exposes <strong>tools</strong> (functions the AI can call),{' '}
            <strong>resources</strong> (data the AI can read), and <strong>prompts</strong>{' '}
            (pre-built templates). When you connect an MCP server to your AI assistant, the AI
            discovers these capabilities automatically and can use them during conversations.
          </p>

          {/* Section 2: Why MCP Matters */}
          <h2 id="why-mcp-matters">Why MCP Matters for AI Users</h2>

          <p>
            MCP isn&apos;t just a developer specification — it fundamentally changes how you interact
            with AI. Here&apos;s why it matters:
          </p>

          <ul>
            <li>
              <strong>One server, every tool</strong> — Connect an MCP server once and use it in
              ChatGPT, Claude, Cursor, Windsurf, and 100+ other clients.
            </li>
            <li>
              <strong>No vendor lock-in</strong> — Your tools and data sources work across platforms.
              Switch AI assistants without losing integrations.
            </li>
            <li>
              <strong>Real-time data access</strong> — AI assistants can query live databases,
              APIs, and services through MCP, rather than relying solely on training data.
            </li>
            <li>
              <strong>Growing ecosystem</strong> — With 113+ MCP clients and thousands of servers
              available, the ecosystem is expanding rapidly in 2026.
            </li>
          </ul>

          {/* Section 3: Connect MCP to ChatGPT */}
          <h2 id="connect-chatgpt">How to Connect MCP to ChatGPT</h2>

          <p>
            OpenAI added native MCP support to ChatGPT in early 2026. This means you can{' '}
            <strong>connect MCP to ChatGPT</strong> directly from the settings menu — no extensions
            or workarounds needed. MCP support is available for ChatGPT Plus, Pro, Team, and
            Enterprise plans.
          </p>

          <h3>Step-by-Step: MCP Server Setup for ChatGPT</h3>

          <ol>
            <li>Open <strong>ChatGPT</strong> (web or desktop app).</li>
            <li>Navigate to <strong>Settings → Connectors → MCP Servers</strong>.</li>
            <li>Click <strong>&quot;Add MCP Server&quot;</strong>.</li>
            <li>Enter a display name (e.g., &quot;AI Memory&quot;).</li>
            <li>Paste the server URL: <code>https://aimemory.pro/api/mcp</code></li>
            <li>Click <strong>Save</strong>. ChatGPT will validate the connection.</li>
            <li>Once connected, the server&apos;s tools appear in the tools menu during conversations.</li>
          </ol>

          <h3>ChatGPT MCP Configuration JSON</h3>

          <p>
            For ChatGPT&apos;s desktop app, you can also configure MCP servers in the config file:
          </p>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-6">
{`{
  "mcpServers": {
    "ai-memory": {
      "url": "https://aimemory.pro/api/mcp",
      "description": "Search across all AI conversation history"
    }
  }
}`}
          </pre>

          <p>
            After adding the server, you can ask ChatGPT to search your past conversations, reference
            previous coding solutions, or pull context from other AI platforms — all through the MCP
            connection.
          </p>

          {/* Section 4: Connect MCP to Claude Desktop */}
          <h2 id="connect-claude">How to Connect MCP to Claude Desktop</h2>

          <p>
            Claude Desktop was the <strong>first major AI client to support MCP</strong>, since
            Anthropic created the protocol. Setting up <strong>MCP in Claude Desktop</strong> is
            straightforward and supports both stdio and streamable HTTP transports.
          </p>

          <h3>Step-by-Step: MCP Claude Desktop Setup</h3>

          <ol>
            <li>
              <strong>Locate your config file:</strong>
              <ul>
                <li>macOS: <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
                <li>Windows: <code>%APPDATA%\Claude\claude_desktop_config.json</code></li>
                <li>Linux: <code>~/.config/Claude/claude_desktop_config.json</code></li>
              </ul>
            </li>
            <li>Open the file in any text editor.</li>
            <li>Add your MCP server configuration (see JSON below).</li>
            <li>Save the file and <strong>restart Claude Desktop</strong>.</li>
            <li>Verify in <strong>Settings → MCP Servers</strong> that the server shows a green status.</li>
          </ol>

          <h3>Claude Desktop MCP Configuration JSON</h3>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-6">
{`{
  "mcpServers": {
    "ai-memory": {
      "url": "https://aimemory.pro/api/mcp"
    }
  }
}`}
          </pre>

          <p>
            For local stdio-based MCP servers, the config looks different:
          </p>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-6">
{`{
  "mcpServers": {
    "my-local-tool": {
      "command": "npx",
      "args": ["-y", "my-mcp-server"],
      "env": {
        "API_KEY": "your-key-here"
      }
    }
  }
}`}
          </pre>

          <p>
            Once connected, Claude can use the MCP server&apos;s tools natively. For AI Memory,
            Claude can search your entire conversation history from ChatGPT, DeepSeek, Gemini, and
            other platforms — directly within your Claude Desktop conversation.
          </p>

          {/* Section 5: MCP Cursor Setup */}
          <h2 id="connect-cursor">How to Set Up MCP in Cursor</h2>

          <p>
            <strong>Cursor</strong> is a popular AI-powered code editor that added MCP support to
            let developers connect external tools to its AI assistant. The <strong>MCP Cursor setup</strong>{' '}
            process is simple and supports both local and remote servers.
          </p>

          <h3>Step-by-Step: MCP Cursor Setup</h3>

          <ol>
            <li>Open <strong>Cursor</strong> and go to <strong>Settings → MCP</strong>.</li>
            <li>Click <strong>&quot;Add MCP Server&quot;</strong>.</li>
            <li>Choose <strong>&quot;URL&quot;</strong> for remote servers or <strong>&quot;JSON&quot;</strong> for custom config.</li>
            <li>For URL: paste <code>https://aimemory.pro/api/mcp</code></li>
            <li>For JSON: paste the configuration below.</li>
            <li>Click <strong>Save</strong>. Cursor will connect to the server.</li>
            <li>The MCP tools become available in Cursor&apos;s AI chat and Composer.</li>
          </ol>

          <h3>Cursor MCP Configuration JSON</h3>

          <p>
            You can also edit the MCP config file directly at <code>~/.cursor/mcp.json</code>:
          </p>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-6">
{`{
  "mcpServers": {
    "ai-memory": {
      "url": "https://aimemory.pro/api/mcp"
    },
    "local-tool-example": {
      "command": "node",
      "args": ["path/to/server.js"],
      "env": {}
    }
  }
}`}
          </pre>

          <p>
            With AI Memory connected to Cursor, you can reference past conversations where you solved
            similar coding problems, pull up previous debugging sessions, or search for code patterns
            you&apos;ve discussed with other AI assistants.
          </p>

          {/* Section 6: MCP Windsurf */}
          <h2 id="connect-windsurf">How to Connect MCP to Windsurf</h2>

          <p>
            <strong>Windsurf</strong> (formerly Codeium) is another AI-powered editor with robust MCP
            support. The <strong>MCP Windsurf</strong> setup uses a configuration-based approach similar
            to Claude Desktop.
          </p>

          <h3>Step-by-Step: MCP Windsurf Setup</h3>

          <ol>
            <li>Open <strong>Windsurf</strong> and navigate to <strong>Settings → Cascade → MCP Servers</strong>.</li>
            <li>Click <strong>&quot;Add MCP Server&quot;</strong>.</li>
            <li>Select <strong>&quot;Add Custom Server&quot;</strong>.</li>
            <li>Paste the JSON configuration (see below).</li>
            <li>Click <strong>Save</strong> and restart Windsurf if prompted.</li>
            <li>Verify the server appears with a green indicator in the MCP panel.</li>
          </ol>

          <h3>Windsurf MCP Configuration JSON</h3>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-6">
{`{
  "mcpServers": {
    "ai-memory": {
      "serverUrl": "https://aimemory.pro/api/mcp"
    }
  }
}`}
          </pre>

          <p>
            Windsurf&apos;s Cascade AI agent will automatically discover the tools provided by the
            MCP server and offer to use them when relevant to your coding task. With AI Memory
            connected, Cascade can reference your full AI conversation history to provide better
            context-aware suggestions.
          </p>

          {/* Section 7: Other Clients */}
          <h2 id="connect-other">Connecting MCP to Other AI Clients</h2>

          <p>
            The beauty of MCP is its universality. Beyond the four major platforms above, you can
            connect MCP servers to many other AI clients. Here&apos;s a quick overview of how{' '}
            <strong>MCP server setup</strong> works in other popular tools:
          </p>

          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 my-8 not-prose">
            <h3 className="text-lg font-bold text-white mb-4">MCP Client Configuration Cheat Sheet</h3>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="text-blue-400 font-semibold mb-1">Cline (VS Code Extension)</h4>
                <p className="text-gray-300">Settings → MCP Servers → Add. Supports both stdio and SSE transports.</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-1">Continue (VS Code / JetBrains)</h4>
                <p className="text-gray-300">Edit <code className="text-green-400">.continue/config.json</code> and add servers under the <code className="text-green-400">&quot;mcpServers&quot;</code> key.</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-1">Zed Editor</h4>
                <p className="text-gray-300">Settings → Extensions → MCP. Add server URL or stdio command.</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-1">Open WebUI</h4>
                <p className="text-gray-300">Admin → Settings → Connections → MCP. Enter server URL.</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-1">Any MCP-compatible client</h4>
                <p className="text-gray-300">Most clients follow the same pattern: find MCP settings, add server URL <code className="text-green-400">https://aimemory.pro/api/mcp</code>, save, and restart.</p>
              </div>
            </div>
          </div>

          <p>
            For a full list of MCP-compatible clients, visit the{' '}
            <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
              official MCP documentation
            </a>.
            As of 2026, there are over 113 clients that support the protocol.
          </p>

          {/* Section 8: AI Memory MCP */}
          <h2 id="ai-memory-mcp">AI Memory MCP Server: Your Universal AI Memory</h2>

          <p>
            Now that you know how to <strong>connect MCP to any AI assistant</strong>, let&apos;s talk
            about the most powerful use case: giving every AI tool access to your entire conversation
            history.
          </p>

          <p>
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">AI Memory</Link>{' '}
            provides a hosted MCP server at <code>https://aimemory.pro/api/mcp</code> that exposes
            your conversation data as MCP tools. When you connect this server to any AI client, the
            assistant can:
          </p>

          <ul>
            <li><strong>Search conversations</strong> — Full-text search across all your ChatGPT, Claude, DeepSeek, and Gemini conversations.</li>
            <li><strong>Retrieve context</strong> — Pull up specific past conversations by topic, date, or platform.</li>
            <li><strong>Reference solutions</strong> — Find code snippets, explanations, or answers you&apos;ve received before.</li>
            <li><strong>Cross-platform recall</strong> — Access conversations from one platform while working in another.</li>
          </ul>

          <h3>The AI Memory MCP Server URL</h3>

          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 my-6 not-prose">
            <p className="text-blue-300 font-mono text-sm mb-1">MCP Server URL:</p>
            <p className="text-white font-mono text-lg">https://aimemory.pro/api/mcp</p>
          </div>

          <p>
            This single URL works across <strong>all MCP-compatible clients</strong>. Add it to Claude
            Desktop, paste it into ChatGPT, enter it in Cursor, or configure it in Windsurf — your
            AI memory travels with you everywhere.
          </p>

          <h3>How It Works</h3>

          <ol>
            <li><strong>Export or sync your conversations</strong> — Use the AI Memory Chrome extension to auto-capture conversations, or import data exports from ChatGPT, Claude, and other platforms.</li>
            <li><strong>AI Memory indexes everything</strong> — Every message is indexed using SQLite FTS5 for instant full-text search.</li>
            <li><strong>Connect via MCP</strong> — Add the MCP server URL to any AI client.</li>
            <li><strong>Search from anywhere</strong> — Ask any connected AI to search your history, and it will query AI Memory&apos;s MCP server and return relevant results.</li>
          </ol>

          {/* Section 9: Benefits */}
          <h2 id="benefits">Benefits of Unified AI Conversation Access</h2>

          <p>
            Connecting AI Memory&apos;s MCP server to your AI tools transforms how you work with AI.
            Here are the key benefits:
          </p>

          <h3>1. Never Lose Context Again</h3>
          <p>
            How many times have you re-explained a problem to a new AI conversation because you
            couldn&apos;t find the original? With MCP-connected memory, any AI assistant can pull
            up your past conversations instantly. The context you built over hours of discussion is
            always accessible.
          </p>

          <h3>2. Cross-Platform Intelligence</h3>
          <p>
            You use ChatGPT for one thing, Claude for another, and Cursor for coding. With AI Memory
            via MCP, each tool can see what you&apos;ve discussed with the others. Your Claude
            conversations inform your ChatGPT sessions, and vice versa. This creates a{' '}
            <strong>unified knowledge layer</strong> across all your AI interactions.
          </p>

          <h3>3. Faster Problem Solving</h3>
          <p>
            When you encounter a problem, the first step should be checking if you&apos;ve solved it
            before. AI Memory&apos;s MCP server lets any AI assistant search your history for similar
            problems and solutions — saving you from re-inventing the wheel every time.
          </p>

          <h3>4. Build on Previous Work</h3>
          <p>
            Code you&apos;ve written with AI help, research you&apos;ve compiled, and strategies
            you&apos;ve developed — all of it becomes a persistent knowledge base. Instead of
            starting from scratch, your AI tools can build on your accumulated expertise.
          </p>

          <h3>5. Team Knowledge Sharing</h3>
          <p>
            For teams using AI Memory, the MCP server can provide shared access to team conversation
            history. New team members can search for institutional knowledge captured in AI
            conversations, accelerating onboarding and reducing repeated questions.
          </p>

          {/* Section 10: Troubleshooting */}
          <h2 id="troubleshooting">Troubleshooting Common MCP Connection Issues</h2>

          <p>
            Setting up MCP is usually straightforward, but here are solutions to the most common issues:
          </p>

          <h3>Issue 1: &quot;MCP Server Not Connecting&quot;</h3>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 my-4 not-prose">
            <p className="text-white font-semibold mb-2">Solutions:</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Verify the URL is correct: <code className="text-green-400">https://aimemory.pro/api/mcp</code></li>
              <li>• Check that your internet connection is working</li>
              <li>• Ensure no firewall or proxy is blocking the connection</li>
              <li>• Restart the AI client after adding the server</li>
              <li>• Try the URL in a browser — you should see a response</li>
            </ul>
          </div>

          <h3>Issue 2: &quot;Invalid JSON in Config File&quot;</h3>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 my-4 not-prose">
            <p className="text-white font-semibold mb-2">Solutions:</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Use a JSON validator (like jsonlint.com) to check your config file</li>
              <li>• Look for missing commas between entries</li>
              <li>• Ensure all strings are wrapped in double quotes, not single quotes</li>
              <li>• Check for trailing commas (invalid in JSON)</li>
              <li>• Make sure curly braces and brackets are properly balanced</li>
            </ul>
          </div>

          <h3>Issue 3: &quot;Server Connected But No Tools Available&quot;</h3>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 my-4 not-prose">
            <p className="text-white font-semibold mb-2">Solutions:</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Verify you have conversations imported into AI Memory</li>
              <li>• Check that the MCP server status shows &quot;Connected&quot; (green indicator)</li>
              <li>• Try disconnecting and reconnecting the server</li>
              <li>• Clear the AI client&apos;s cache and restart</li>
            </ul>
          </div>

          <h3>Issue 4: &quot;Connection Timeout&quot;</h3>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 my-4 not-prose">
            <p className="text-white font-semibold mb-2">Solutions:</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Check your network connection stability</li>
              <li>• If on a corporate network, verify that HTTPS traffic to external domains is allowed</li>
              <li>• Try using a different network (mobile hotspot, VPN off/on)</li>
              <li>• The server may be experiencing high traffic — try again in a few minutes</li>
            </ul>
          </div>

          <h3>Issue 5: MCP Works in One Client But Not Another</h3>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 my-4 not-prose">
            <p className="text-white font-semibold mb-2">Solutions:</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Different clients use different config formats — double-check the JSON structure for each client</li>
              <li>• Some clients require restarts after config changes</li>
              <li>• Ensure the client version supports MCP (update to the latest version)</li>
              <li>• Check the client&apos;s documentation for specific MCP transport requirements</li>
            </ul>
          </div>

          <h3>Quick Diagnostic Checklist</h3>

          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 my-6 not-prose">
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">URL is exactly <code className="text-green-400">https://aimemory.pro/api/mcp</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">JSON config file has valid syntax (no trailing commas, proper quotes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">AI client has been restarted after config changes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">Internet connection is active and not blocking HTTPS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">AI Memory account has conversations imported</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">Client version supports MCP (update if unsure)</span>
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <h2 id="faq">Frequently Asked Questions</h2>

          <h3>What is the difference between MCP and ChatGPT Plugins?</h3>
          <p>
            ChatGPT Plugins were OpenAI&apos;s proprietary extension system that only worked within
            ChatGPT. MCP is an open standard that works across 113+ AI clients. Plugins were
            deprecated in favor of GPTs and later MCP. The key advantage of MCP is universality —
            build one server, connect to every AI tool.
          </p>

          <h3>Do I need a separate MCP server for each AI client?</h3>
          <p>
            No! That&apos;s the beauty of MCP. You configure the same server URL (
            <code>https://aimemory.pro/api/mcp</code>) in each client. The server works identically
            across ChatGPT, Claude Desktop, Cursor, Windsurf, and any other MCP-compatible tool.
            One server, unlimited clients.
          </p>

          <h3>Is MCP secure? Can the AI assistant access all my data?</h3>
          <p>
            MCP servers expose specific tools and resources — the AI assistant can only access what
            the server makes available. AI Memory&apos;s MCP server provides search and retrieval
            tools for your conversation history. Your data is transmitted over HTTPS, and you control
            exactly which conversations are imported and accessible.
          </p>

          <h3>Can I use MCP servers offline?</h3>
          <p>
            stdio-based MCP servers run locally and work offline. Streamable HTTP servers like AI
            Memory require an internet connection since they&apos;re hosted remotely. However, some
            clients cache MCP tool definitions, so the tool metadata may persist even during brief
            connectivity issues.
          </p>

          <h3>How many MCP servers can I connect at once?</h3>
          <p>
            Most clients support connecting to multiple MCP servers simultaneously. There&apos;s no
            protocol-level limit, though individual clients may have their own constraints. In
            practice, connecting 5-10 MCP servers works well in most clients without performance
            issues.
          </p>

          <h3>Will MCP work with AI assistants I build myself?</h3>
          <p>
            Yes. MCP is an open protocol, and there are SDKs available for TypeScript, Python, Java,
            Kotlin, and C#. If you&apos;re building a custom AI assistant or chatbot, you can implement
            an MCP client to connect to any MCP server, including AI Memory&apos;s.
          </p>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700 rounded-xl p-8 text-center not-prose">
            <h3 className="text-2xl font-bold text-white mb-3">
              Connect Your AI Memory to Every Tool
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Stop losing valuable conversations in siloed AI platforms. AI Memory gives you one MCP
              server that connects your entire conversation history to ChatGPT, Claude Desktop,
              Cursor, Windsurf, and every MCP-compatible AI assistant. Start for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
              >
                Try AI Memory Free →
              </Link>
              <Link
                href="/docs/mcp"
                className="inline-block bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition text-lg border border-gray-600"
              >
                MCP Documentation
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Free tier available • Connect unlimited MCP clients • Works with 113+ AI tools
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
