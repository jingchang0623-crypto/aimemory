import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/BlogLayout';

const slug = 'mcp-server-setup-guide';

export const metadata: Metadata = {
  title: 'How to Set Up MCP Server: Complete Guide for AI Memory',
  description:
    'Learn how to set up MCP server with Claude Desktop, Cursor, Windsurf, Cline, and more. Complete model context protocol setup guide for AI Memory integration.',
  keywords: [
    'mcp server setup',
    'model context protocol setup',
    'mcp server ai',
    'how to use mcp server',
    'claude desktop mcp',
    'cursor mcp server',
    'windsurf mcp setup',
    'cline mcp',
    'ai memory mcp server',
    'model context protocol tutorial',
    'mcp server configuration',
    'mcp server guide 2026',
  ],
  openGraph: {
    title: 'How to Set Up MCP Server: Complete Guide for AI Memory',
    description:
      'Learn how to set up MCP server with Claude Desktop, Cursor, Windsurf, Cline, and more. Complete model context protocol setup guide for AI Memory integration.',
    url: 'https://aimemory.pro/blog/mcp-server-setup-guide',
    type: 'article',
  },
  alternates: {
    canonical: 'https://aimemory.pro/blog/mcp-server-setup-guide',
  },
};

export const tags = ['mcp', 'protocol', 'technical', 'integration', 'setup', 'ai-memory', 'guide'];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is MCP (Model Context Protocol)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Model Context Protocol (MCP) is an open standard created by Anthropic that enables AI assistants to connect to external tools and data sources through a universal interface. Think of it like USB for AI — any MCP-compatible client can connect to any MCP server. As of 2026, over 113 clients support MCP, making it the dominant standard for AI tool integration.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I set up an MCP server with Claude Desktop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To set up MCP server with Claude Desktop, open your claude_desktop_config.json file (located at ~/Library/Application Support/Claude/ on macOS or %APPDATA%\\Claude\\ on Windows), add the MCP server configuration with the server URL and transport type, save the file, and restart Claude Desktop. The server will appear in Claude\'s MCP servers section.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI tools support MCP server connections?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Over 113 MCP clients support the Model Context Protocol as of 2026, including Claude Desktop, Cursor, Windsurf, Cline, Continue, Zed, Sourcegraph Cody, and many more. Any tool that implements the MCP client specification can connect to any MCP server.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tools does AI Memory\'s MCP server provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Memory\'s MCP server exposes four core tools: search_memory for full-text search across all saved conversations, add_memory for saving new conversations or notes, get_context for retrieving relevant context snippets for a topic, and list_memories for browsing recent conversations with platform filtering and pagination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the AI Memory MCP server secure and private?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI Memory\'s MCP server is designed with privacy as a priority. All data is stored locally by default, the MCP endpoint only accesses your own conversations, you can self-host for complete control, and there is no third-party data sharing. Authentication is handled via API keys.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use MCP server to search ChatGPT conversations in Claude?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! That\'s one of the most powerful use cases. By connecting AI Memory\'s MCP server to Claude Desktop (or any MCP client), you can search through your saved ChatGPT, Claude, DeepSeek, and Gemini conversations. Simply ask your AI assistant to search your memory, and it will find relevant past discussions across all platforms.',
      },
    },
  ],
};

export default function MCPServerSetupGuidePage() {
  return (
    <BlogLayout
      slug={slug}
      title="How to Set Up MCP Server: Complete Guide for AI Memory"
      category="Technical"
      date="2026-05-01"
      readTime="18 min"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How to Set Up MCP Server: Complete Guide for AI Memory',
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
              'Learn how to set up MCP server with Claude Desktop, Cursor, Windsurf, Cline, and more. Complete model context protocol setup guide for AI Memory integration.',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://aimemory.pro/blog/mcp-server-setup-guide',
            },
          }),
        }}
      />

      <h1>How to Set Up MCP Server: Complete Guide for AI Memory</h1>

      <p className="lead">
        The <strong>Model Context Protocol (MCP)</strong> is transforming how AI assistants interact with external
        tools and data sources. In this comprehensive guide, you&apos;ll learn exactly how to set up an MCP server —
        specifically AI Memory&apos;s MCP server — with every major AI client including Claude Desktop, Cursor,
        Windsurf, and Cline. By the end, your AI assistants will be able to search your entire conversation
        history across ChatGPT, Claude, DeepSeek, and Gemini.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
        <h2 className="text-blue-800 mt-0">TL;DR — Quick MCP Server Setup</h2>
        <ul className="text-blue-700">
          <li><strong>What is MCP?</strong> An open standard for connecting AI tools to external data sources</li>
          <li><strong>Why it matters:</strong> Lets your AI search past conversations across all platforms</li>
          <li><strong>Setup time:</strong> Under 2 minutes for any MCP client</li>
          <li><strong>Best for:</strong> Developers, researchers, and anyone who uses multiple AI tools</li>
          <li><strong>AI Memory URL:</strong> <code>https://aimemory.pro/api/mcp</code></li>
        </ul>
      </div>

      {/* ============ SECTION 1: What is MCP ============ */}
      <h2 id="what-is-mcp">What is MCP (Model Context Protocol)?</h2>

      <p>
        The <strong>Model Context Protocol</strong>, or <strong>MCP</strong>, is an open standard created by
        Anthropic that enables AI assistants to connect to external tools and data sources through a universal
        interface. Launched in late 2024, MCP has rapidly become the dominant standard for AI tool integration.
      </p>

      <p>
        Think of MCP like <strong>USB for AI</strong>. Before USB, every device had its own proprietary connector.
        Similarly, before MCP, every AI tool integration required custom code. MCP provides a single, standardized
        way for any AI assistant to connect to any data source or tool.
      </p>

      <h3>Why MCP Matters for Your AI Workflow</h3>

      <p>
        As of 2026, over <strong>113 MCP clients</strong> support the protocol. This means the MCP server setup
        you do once will work across dozens of AI tools. Here&apos;s why this is a game-changer:
      </p>

      <ul>
        <li>
          <strong>Universal compatibility</strong> — One server works with Claude Desktop, Cursor, Windsurf, Cline,
          and 100+ other tools
        </li>
        <li>
          <strong>Standardized interface</strong> — No custom integrations needed for each AI client
        </li>
        <li>
          <strong>Growing ecosystem</strong> — New MCP servers and clients are added weekly
        </li>
        <li>
          <strong>Open standard</strong> — No vendor lock-in; switch clients without losing integrations
        </li>
        <li>
          <strong>Bidirectional</strong> — AI tools can both read from and write to MCP servers
        </li>
      </ul>

      <h3>How MCP Works</h3>

      <p>
        MCP uses a client-server architecture. The <strong>MCP client</strong> (your AI tool) connects to
        an <strong>MCP server</strong> (a data source or tool). Communication happens over a standardized protocol
        that supports:
      </p>

      <ul>
        <li><strong>Tools</strong> — Functions the AI can call (like searching, adding data)</li>
        <li><strong>Resources</strong> — Data the AI can read</li>
        <li><strong>Prompts</strong> — Pre-built prompt templates</li>
        <li><strong>Sampling</strong> — Server-initiated AI completions</li>
      </ul>

      <p>
        For AI Memory, the MCP server exposes <strong>tools</strong> that let your AI assistant search through
        your saved conversations, add new memories, and retrieve context — all through the standard MCP protocol.
      </p>

      {/* ============ SECTION 2: MCP Client Comparison ============ */}
      <h2 id="mcp-clients">MCP Client Comparison: Which Tool Should You Use?</h2>

      <p>
        Not sure which MCP client to use? Here&apos;s a comprehensive comparison of the most popular MCP-compatible
        tools and how they work with AI Memory&apos;s MCP server:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">MCP Client</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Transport</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Setup Difficulty</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Claude Desktop</strong></td>
              <td className="border border-gray-300 px-4 py-3">Desktop App</td>
              <td className="border border-gray-300 px-4 py-3">HTTP / stdio</td>
              <td className="border border-gray-300 px-4 py-3">⭐⭐ Easy</td>
              <td className="border border-gray-300 px-4 py-3">General AI conversations, research</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3"><strong>Cursor</strong></td>
              <td className="border border-gray-300 px-4 py-3">Code Editor</td>
              <td className="border border-gray-300 px-4 py-3">HTTP / stdio</td>
              <td className="border border-gray-300 px-4 py-3">⭐ Easiest</td>
              <td className="border border-gray-300 px-4 py-3">Coding with AI assistance</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Windsurf</strong></td>
              <td className="border border-gray-300 px-4 py-3">Code Editor</td>
              <td className="border border-gray-300 px-4 py-3">HTTP / stdio</td>
              <td className="border border-gray-300 px-4 py-3">⭐⭐ Easy</td>
              <td className="border border-gray-300 px-4 py-3">AI-powered development</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3"><strong>Cline</strong></td>
              <td className="border border-gray-300 px-4 py-3">VS Code Extension</td>
              <td className="border border-gray-300 px-4 py-3">HTTP / stdio</td>
              <td className="border border-gray-300 px-4 py-3">⭐⭐ Easy</td>
              <td className="border border-gray-300 px-4 py-3">VS Code users, autonomous coding</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Continue</strong></td>
              <td className="border border-gray-300 px-4 py-3">VS Code / JetBrains</td>
              <td className="border border-gray-300 px-4 py-3">HTTP / stdio</td>
              <td className="border border-gray-300 px-4 py-3">⭐⭐⭐ Medium</td>
              <td className="border border-gray-300 px-4 py-3">Multi-IDE support</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3"><strong>Zed</strong></td>
              <td className="border border-gray-300 px-4 py-3">Code Editor</td>
              <td className="border border-gray-300 px-4 py-3">HTTP</td>
              <td className="border border-gray-300 px-4 py-3">⭐⭐ Easy</td>
              <td className="border border-gray-300 px-4 py-3">High-performance editing</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Sourcegraph Cody</strong></td>
              <td className="border border-gray-300 px-4 py-3">IDE Extension</td>
              <td className="border border-gray-300 px-4 py-3">HTTP</td>
              <td className="border border-gray-300 px-4 py-3">⭐⭐⭐ Medium</td>
              <td className="border border-gray-300 px-4 py-3">Code intelligence, large codebases</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3"><strong>OpenAI ChatGPT</strong></td>
              <td className="border border-gray-300 px-4 py-3">Web / Desktop</td>
              <td className="border border-gray-300 px-4 py-3">HTTP</td>
              <td className="border border-gray-300 px-4 py-3">⭐⭐ Easy</td>
              <td className="border border-gray-300 px-4 py-3">General conversations with tools</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        All of these clients support the HTTP transport method, which is what AI Memory&apos;s MCP server uses.
        This means setup is straightforward regardless of which tool you choose. Below, we provide step-by-step
        instructions for each major client.
      </p>

      {/* ============ SECTION 3: Claude Desktop Setup ============ */}
      <h2 id="claude-desktop-setup">Step-by-Step: Claude Desktop MCP Server Setup</h2>

      <p>
        Claude Desktop has the most mature MCP support, as the protocol was created by Anthropic. Setting up
        model context protocol with Claude Desktop takes under 2 minutes.
      </p>

      <h3>Step 1: Locate Your Configuration File</h3>

      <p>Find the Claude Desktop configuration file on your system:</p>

      <ul>
        <li>
          <strong>macOS:</strong>{' '}
          <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>
        </li>
        <li>
          <strong>Windows:</strong>{' '}
          <code>%APPDATA%\\Claude\\claude_desktop_config.json</code>
        </li>
        <li>
          <strong>Linux:</strong>{' '}
          <code>~/.config/Claude/claude_desktop_config.json</code>
        </li>
      </ul>

      <h3>Step 2: Add the AI Memory MCP Server Configuration</h3>

      <p>
        Open the configuration file in any text editor and add the AI Memory MCP server:
      </p>

      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-6">
{`{
  "mcpServers": {
    "ai-memory": {
      "url": "https://aimemory.pro/api/mcp",
      "transport": "http"
    }
  }
}`}
      </pre>

      <p>
        If you already have other MCP servers configured, simply add the <code>&quot;ai-memory&quot;</code> entry
        inside the <code>&quot;mcpServers&quot;</code> object alongside your existing servers.
      </p>

      <h3>Step 3: Restart Claude Desktop</h3>

      <p>
        Save the configuration file and completely quit Claude Desktop (not just close the window). Reopen it
        and navigate to <strong>Settings → MCP Servers</strong>. You should see &quot;AI Memory&quot; listed with
        a green status indicator showing the connection is active.
      </p>

      <h3>Step 4: Test the Connection</h3>

      <p>Start a new conversation with Claude and try these prompts:</p>

      <ul>
        <li>&ldquo;Search my AI Memory for conversations about React hooks&rdquo;</li>
        <li>&ldquo;List my recent memories from ChatGPT&rdquo;</li>
        <li>&ldquo;Get context about the database migration I discussed last week&rdquo;</li>
      </ul>

      <p>
        Claude will automatically call the appropriate MCP tools and return results from your AI Memory database.
      </p>

      {/* ============ SECTION 4: Cursor Setup ============ */}
      <h2 id="cursor-setup">Step-by-Step: Cursor MCP Server Setup</h2>

      <p>
        Cursor has excellent MCP support with the easiest setup process. If you&apos;re a developer who uses Cursor
        as your primary editor, connecting AI Memory gives your coding assistant access to your entire
        conversation history.
      </p>

      <h3>Step 1: Open MCP Settings</h3>

      <p>
        In Cursor, navigate to <strong>Settings → Features → MCP Servers</strong>. You can also access this
        via the command palette (<code>Cmd+Shift+P</code> / <code>Ctrl+Shift+P</code>) by searching for
        &ldquo;MCP&rdquo;.
      </p>

      <h3>Step 2: Add a New MCP Server</h3>

      <p>Click <strong>&ldquo;Add New MCP Server&rdquo;</strong> and enter the following details:</p>

      <ul>
        <li><strong>Name:</strong> AI Memory</li>
        <li><strong>Type:</strong> HTTP</li>
        <li><strong>URL:</strong> <code>https://aimemory.pro/api/mcp</code></li>
      </ul>

      <p>
        Alternatively, you can edit the <code>.cursor/mcp.json</code> file in your project directory:
      </p>

      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-6">
{`{
  "mcpServers": {
    "ai-memory": {
      "url": "https://aimemory.pro/api/mcp",
      "transport": "http"
    }
  }
}`}
      </pre>

      <h3>Step 3: Verify the Connection</h3>

      <p>
        Cursor will automatically verify the connection when you save. A green checkmark indicates success.
        You can now use AI Memory tools in Cursor&apos;s AI chat and composer.
      </p>

      <h3>Using AI Memory in Cursor</h3>

      <p>
        Once connected, you can reference past conversations in your coding workflow:
      </p>

      <ul>
        <li>&ldquo;Search my memory for the API design discussion I had with ChatGPT&rdquo;</li>
        <li>&ldquo;Find my notes about the authentication refactor&rdquo;</li>
        <li>&ldquo;What did I discuss about WebSocket vs SSE last month?&rdquo;</li>
      </ul>

      {/* ============ SECTION 5: Windsurf Setup ============ */}
      <h2 id="windsurf-setup">Step-by-Step: Windsurf MCP Server Setup</h2>

      <p>
        Windsurf (formerly Codeium) supports MCP servers natively. Here&apos;s how to set up the AI Memory MCP
        server in Windsurf:
      </p>

      <h3>Step 1: Open Windsurf Settings</h3>

      <p>
        Go to <strong>Windsurf → Settings → Cascade → MCP Servers</strong>. Click the option to add a new
        MCP server.
      </p>

      <h3>Step 2: Configure the Server</h3>

      <p>
        You can configure the MCP server through the UI or by editing the configuration file directly.
        The Windsurf MCP config file is located at:
      </p>

      <ul>
        <li><strong>macOS:</strong> <code>~/.codeium/windsurf/mcp_config.json</code></li>
        <li><strong>Windows:</strong> <code>%USERPROFILE%\\.codeium\\windsurf\\mcp_config.json</code></li>
      </ul>

      <p>Add the AI Memory server configuration:</p>

      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-6">
{`{
  "mcpServers": {
    "ai-memory": {
      "serverUrl": "https://aimemory.pro/api/mcp"
    }
  }
}`}
      </pre>

      <h3>Step 3: Restart and Verify</h3>

      <p>
        Restart Windsurf and open the Cascade panel. You should see AI Memory listed as an available MCP
        server. Try asking Cascade to search your memory to verify everything is working.
      </p>

      {/* ============ SECTION 6: Cline Setup ============ */}
      <h2 id="cline-setup">Step-by-Step: Cline MCP Server Setup</h2>

      <p>
        Cline is a popular VS Code extension for autonomous AI coding. It has full MCP support, making it
        easy to connect AI Memory.
      </p>

      <h3>Step 1: Open Cline Settings</h3>

      <p>
        In VS Code, open the Cline extension panel. Click the <strong>MCP Servers</strong> icon (looks like a
        plug) in the Cline sidebar, or use the command palette to search for &ldquo;Cline: MCP Servers&rdquo;.
      </p>

      <h3>Step 2: Edit the MCP Configuration</h3>

      <p>
        Click <strong>&ldquo;Edit Configuration&rdquo;</strong> to open the MCP settings file. Add the AI Memory
        server:
      </p>

      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-6">
{`{
  "mcpServers": {
    "ai-memory": {
      "url": "https://aimemory.pro/api/mcp",
      "transport": "http"
    }
  }
}`}
      </pre>

      <h3>Step 3: Verify and Test</h3>

      <p>
        Save the configuration and Cline will automatically attempt to connect. Once connected, Cline can
        search your AI Memory when helping you code. You can explicitly ask it to look up past discussions
        or let it automatically retrieve context when relevant.
      </p>

      {/* ============ SECTION 7: Other MCP Clients ============ */}
      <h2 id="other-clients">Setting Up AI Memory with Other MCP Clients</h2>

      <p>
        The MCP server setup is similar across all clients. For any MCP-compatible tool, you need:
      </p>

      <ul>
        <li><strong>Server URL:</strong> <code>https://aimemory.pro/api/mcp</code></li>
        <li><strong>Transport:</strong> HTTP (also called &ldquo;Streamable HTTP&rdquo;)</li>
        <li><strong>Name:</strong> Any name you prefer (e.g., &ldquo;ai-memory&rdquo;)</li>
      </ul>

      <h3>Continue (VS Code / JetBrains)</h3>
      <p>
        Edit your Continue configuration file at <code>~/.continue/config.json</code> and add the MCP server
        under the <code>&quot;mcpServers&quot;</code> key. Continue supports both HTTP and stdio transports.
      </p>

      <h3>Zed Editor</h3>
      <p>
        In Zed, open <strong>Settings</strong> and navigate to the MCP section. Add a new HTTP server with the
        AI Memory URL. Zed will connect automatically and make the tools available in its AI assistant panel.
      </p>

      <h3>Custom / Programmatic Clients</h3>
      <p>
        If you&apos;re building a custom MCP client, connect to <code>https://aimemory.pro/api/mcp</code> using
        the MCP SDK. The server supports the Streamable HTTP transport, which works over standard HTTP
        requests with optional Server-Sent Events for streaming responses.
      </p>

      {/* ============ SECTION 8: AI Memory MCP Tools ============ */}
      <h2 id="ai-memory-tools">AI Memory MCP Server: Tool Reference</h2>

      <p>
        AI Memory&apos;s MCP server exposes four powerful tools that give your AI assistants access to your
        entire conversation history. Here&apos;s a detailed look at each tool and how to use them:
      </p>

      <h3 id="search-memory">1. search_memory</h3>

      <p>
        <strong>Full-text search across all your saved conversations.</strong> This is the most commonly used
        tool. It performs a semantic and keyword search across your ChatGPT, Claude, DeepSeek, and Gemini
        conversations.
      </p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>query</code> (required) — The search query text</li>
        <li><code>platform</code> (optional) — Filter by platform: &ldquo;chatgpt&rdquo;, &ldquo;claude&rdquo;, &ldquo;deepseek&rdquo;, &ldquo;gemini&rdquo;</li>
        <li><code>limit</code> (optional) — Maximum number of results to return (default: 10)</li>
      </ul>

      <p><strong>Example usage in conversation:</strong></p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
        &ldquo;Search my AI Memory for conversations about Kubernetes deployment strategies&rdquo;
      </blockquote>

      <h3 id="add-memory">2. add_memory</h3>

      <p>
        <strong>Save new conversations or notes directly from your AI assistant.</strong> This is useful for
        preserving important insights or decisions made during a conversation so you can reference them later.
      </p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>content</code> (required) — The conversation content or note to save</li>
        <li><code>title</code> (optional) — A title for the memory</li>
        <li><code>platform</code> (optional) — Source platform tag</li>
        <li><code>tags</code> (optional) — Array of tags for categorization</li>
      </ul>

      <p><strong>Example usage in conversation:</strong></p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
        &ldquo;Save this conversation about the new API architecture to my AI Memory&rdquo;
      </blockquote>

      <h3 id="get-context">3. get_context</h3>

      <p>
        <strong>Retrieve relevant context snippets for a specific topic.</strong> This tool is designed for AI
        assistants that need background information before answering a question. It returns the most relevant
        excerpts from your conversation history.
      </p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>topic</code> (required) — The topic to find context for</li>
        <li><code>max_snippets</code> (optional) — Maximum number of context snippets (default: 5)</li>
      </ul>

      <p><strong>Example usage in conversation:</strong></p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
        &ldquo;Get context about my previous discussions on microservices vs monolith&rdquo;
      </blockquote>

      <h3 id="list-memories">4. list_memories</h3>

      <p>
        <strong>Browse your recent conversations with filtering and pagination.</strong> Use this to see what
        you&apos;ve saved recently or to browse conversations from a specific platform.
      </p>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>platform</code> (optional) — Filter by platform</li>
        <li><code>limit</code> (optional) — Number of results per page (default: 20)</li>
        <li><code>offset</code> (optional) — Pagination offset</li>
      </ul>

      <p><strong>Example usage in conversation:</strong></p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
        &ldquo;List my 10 most recent memories from Claude&rdquo;
      </blockquote>

      {/* ============ SECTION 9: Use Cases ============ */}
      <h2 id="use-cases">Real-World Use Cases</h2>

      <p>
        Here are practical scenarios where setting up an MCP server with AI Memory transforms your workflow:
      </p>

      <h3>Use Case 1: Developer Searching Past Code Discussions</h3>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
        <p className="font-semibold text-gray-900 mb-2">The Problem:</p>
        <p className="text-gray-700 mb-4">
          Sarah is a full-stack developer who uses ChatGPT for architecture discussions and Cursor for coding.
          Three months ago, she had a detailed conversation with ChatGPT about implementing OAuth2 with PKCE
          flow. Now she&apos;s implementing it in Cursor and can&apos;t remember the specifics.
        </p>
        <p className="font-semibold text-gray-900 mb-2">With MCP Server:</p>
        <p className="text-gray-700">
          Sarah simply asks Cursor: <em>&ldquo;Search my AI Memory for the OAuth2 PKCE implementation discussion I had
          with ChatGPT.&rdquo;</em> Cursor finds the conversation, extracts the relevant code snippets and design
          decisions, and incorporates them directly into the current coding session. No context switching,
          no re-explaining, no lost time.
        </p>
      </div>

      <h3>Use Case 2: Researcher Finding Cross-Platform Insights</h3>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
        <p className="font-semibold text-gray-900 mb-2">The Problem:</p>
        <p className="text-gray-700 mb-4">
          Dr. Chen is a researcher who discusses papers across multiple AI tools — ChatGPT for brainstorming,
          Claude for detailed analysis, and DeepSeek for code generation. His insights are scattered across
          all three platforms.
        </p>
        <p className="font-semibold text-gray-900 mb-2">With MCP Server:</p>
        <p className="text-gray-700">
          Dr. Chen connects AI Memory&apos;s MCP server to Claude Desktop. Now he can ask: <em>&ldquo;Search all my
          memories for discussions about transformer attention mechanisms.&rdquo;</em> Claude finds relevant
          discussions from ChatGPT, Claude, and DeepSeek — all in one search. The AI can synthesize insights
          across all his past conversations, giving him a comprehensive view of his research discussions.
        </p>
      </div>

      <h3>Use Case 3: Team Knowledge Sharing</h3>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
        <p className="font-semibold text-gray-900 mb-2">The Problem:</p>
        <p className="text-gray-700 mb-4">
          A development team has multiple members using different AI tools. Knowledge is siloed — the
          frontend developer&apos;s ChatGPT discussions about component architecture are inaccessible to the
          backend developer using Claude.
        </p>
        <p className="font-semibold text-gray-900 mb-2">With MCP Server:</p>
        <p className="text-gray-700">
          Team members upload their conversations to a shared AI Memory instance. When any team member
          connects via MCP, they can search across the entire team&apos;s knowledge base. A simple query like
          <em>&ldquo;What has the team discussed about the payment processing system?&rdquo;</em> returns insights from
          everyone&apos;s conversations, breaking down knowledge silos.
        </p>
      </div>

      <h3>Use Case 4: Personal AI Knowledge Base</h3>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
        <p className="font-semibold text-gray-900 mb-2">The Problem:</p>
        <p className="text-gray-700 mb-4">
          Alex uses AI assistants daily for learning new technologies, debugging, and brainstorming. Over
          time, hundreds of valuable conversations are buried in different platforms with no way to search
          across them.
        </p>
        <p className="font-semibold text-gray-900 mb-2">With MCP Server:</p>
        <p className="text-gray-700">
          Alex exports all conversations into AI Memory and connects via MCP to Claude Desktop. Now
          conversations become a searchable knowledge base. When starting a new project, Alex asks:
          <em>&ldquo;What have I learned about Docker networking in past conversations?&rdquo;</em> The AI retrieves
          relevant discussions, helping Alex build on past knowledge instead of starting from scratch.
        </p>
      </div>

      {/* ============ SECTION 10: Troubleshooting ============ */}
      <h2 id="troubleshooting">MCP Server Setup Troubleshooting</h2>

      <p>
        Having trouble with your model context protocol setup? Here are common issues and solutions:
      </p>

      <h3>Server Not Showing Up</h3>
      <ul>
        <li>Verify the URL is exactly <code>https://aimemory.pro/api/mcp</code></li>
        <li>Ensure the transport is set to &ldquo;http&rdquo; (or &ldquo;Streamable HTTP&rdquo;)</li>
        <li>Restart your MCP client after changing the configuration</li>
        <li>Check that your configuration file is valid JSON</li>
      </ul>

      <h3>Connection Errors</h3>
      <ul>
        <li>Check your internet connection</li>
        <li>Verify there are no firewall rules blocking outbound HTTPS connections</li>
        <li>Try accessing <code>https://aimemory.pro</code> in your browser to confirm the site is reachable</li>
        <li>Check your AI Memory account status and API key if authentication is required</li>
      </ul>

      <h3>Tools Not Working</h3>
      <ul>
        <li>Make sure you have uploaded conversations to AI Memory before searching</li>
        <li>Try a simple search query first to test the connection</li>
        <li>Check the MCP server logs in your client for detailed error messages</li>
        <li>Verify your AI Memory API key has the necessary permissions</li>
      </ul>

      <h3>Performance Tips</h3>
      <ul>
        <li>Use specific search queries rather than very broad terms</li>
        <li>Filter by platform when you know which source you&apos;re looking for</li>
        <li>Use the <code>limit</code> parameter to control result count</li>
        <li>Keep your AI Memory database organized with tags for faster retrieval</li>
      </ul>

      {/* ============ SECTION 11: Security ============ */}
      <h2 id="security">Privacy and Security</h2>

      <p>
        Security is a top priority for AI Memory&apos;s MCP server implementation. Here&apos;s how your data is
        protected:
      </p>

      <ul>
        <li>
          <strong>Local storage by default</strong> — Your conversation data is stored locally. The MCP server
          reads from your local database, not a remote server.
        </li>
        <li>
          <strong>API key authentication</strong> — All MCP requests are authenticated using your personal API
          key. No one else can access your data.
        </li>
        <li>
          <strong>Self-hosting option</strong> — For maximum control, you can self-host the AI Memory MCP
          server on your own infrastructure.
        </li>
        <li>
          <strong>No third-party sharing</strong> — Your conversation data is never shared with third parties
          or used for model training.
        </li>
        <li>
          <strong>Encrypted transport</strong> — All MCP communication happens over HTTPS, ensuring your data
          is encrypted in transit.
        </li>
      </ul>

      {/* ============ SECTION 12: Getting Started ============ */}
      <h2 id="getting-started">Getting Started with AI Memory MCP Server</h2>

      <p>
        Ready to give your AI assistants a memory upgrade? Here&apos;s how to get started in under 5 minutes:
      </p>

      <ol>
        <li className="mb-3">
          <strong>Upload your conversations</strong> — Visit{' '}
          <Link href="/" className="text-blue-600 hover:underline">aimemory.pro</Link>{' '}
          and upload your ChatGPT, Claude, DeepSeek, or Gemini conversation exports. AI Memory supports
          all major export formats.
        </li>
        <li className="mb-3">
          <strong>Connect via MCP</strong> — Follow the setup guide above for your preferred AI tool (Claude
          Desktop, Cursor, Windsurf, Cline, or any other MCP client).
        </li>
        <li className="mb-3">
          <strong>Start searching</strong> — Ask your AI assistant to search your memory. Try queries like
          &ldquo;What have I discussed about [topic]?&rdquo; or &ldquo;Find my notes about [project].&rdquo;
        </li>
        <li className="mb-3">
          <strong>Save new insights</strong> — Use the <code>add_memory</code> tool to save important
          conversations or notes directly from your AI assistant for future reference.
        </li>
      </ol>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
        <h3 className="text-green-800 mt-0">Pro Tip: Enable Auto-Context</h3>
        <p className="text-green-700 mb-0">
          Some MCP clients support automatic tool invocation, where the AI proactively searches your memory
          without being asked. This means your AI assistant automatically pulls relevant past discussions
          into new conversations — creating a truly persistent memory across all your AI interactions.
        </p>
      </div>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>What is the difference between MCP and API integration?</h3>
      <p>
        While traditional API integrations require custom code for each tool, MCP provides a universal
        standard. One MCP server works with any MCP client — no custom integration code needed. This means
        AI Memory&apos;s MCP server works out of the box with 113+ clients.
      </p>

      <h3>Do I need a paid AI Memory account to use the MCP server?</h3>
      <p>
        AI Memory offers a free tier that includes MCP server access. For larger conversation libraries and
        advanced features, paid plans are available. Visit our{' '}
        <Link href="/pricing" className="text-blue-600 hover:underline">pricing page</Link>{' '}
        for details.
      </p>

      <h3>Can I use AI Memory MCP server with multiple clients simultaneously?</h3>
      <p>
        Yes! You can connect AI Memory&apos;s MCP server to Claude Desktop, Cursor, Windsurf, and Cline all at
        the same time. Each client maintains its own connection and can independently search and add memories.
      </p>

      <h3>How fast is the search through MCP?</h3>
      <p>
        Search speed depends on the size of your conversation library. For most users with hundreds of
        conversations, searches return results in under 1 second. The MCP server uses optimized indexing
        for fast full-text and semantic search.
      </p>

      <h3>Does the MCP server work offline?</h3>
      <p>
        If you self-host the AI Memory MCP server locally, it can work without an internet connection.
        The hosted version at aimemory.pro requires an internet connection but provides a hassle-free
        experience with no setup required.
      </p>

      <p className="mt-8 text-gray-500 text-sm">
        For the full API reference and additional setup guides, see the{' '}
        <Link href="/docs/mcp" className="text-blue-600 hover:underline">MCP documentation page</Link>.{' '}
        For a comparison of AI Memory with other memory management tools, check out our{' '}
        <Link href="/blog/ai-memory-management-tools-2026" className="text-blue-600 hover:underline">
          AI Memory Management Tools 2026
        </Link>{' '}
        guide.
      </p>
    </BlogLayout>
  );
}
