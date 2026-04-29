import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Use AI Memory MCP Server with Claude Desktop & Cursor',
  description: 'Step-by-step guide to connecting AI Memory as an MCP server. Let Claude, Cursor, and other AI tools search your ChatGPT and Claude conversation history.',
  keywords: ['MCP server setup', 'Claude Desktop MCP', 'Cursor MCP server', 'AI memory MCP', 'Model Context Protocol tutorial', 'chatgpt history search'],
};

export default function MCPServerBlogPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the Model Context Protocol (MCP)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Model Context Protocol is an open standard created by Anthropic that lets AI assistants connect to external tools and data sources. It works like a universal plug that any AI tool can use to access your data. Over 113 clients support it as of April 2026.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I set up AI Memory MCP server with Claude Desktop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Open your Claude Desktop configuration file (claude_desktop_config.json), add the AI Memory MCP server with URL https://aimemory.pro/api/mcp and transport set to http, save the file, and restart Claude Desktop. You should see AI Memory listed in the MCP servers section.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I connect AI Memory to Cursor via MCP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Open Cursor, go to Settings then MCP, click Add New MCP Server, enter AI Memory as the name, select HTTP as the type, and set the URL to https://aimemory.pro/api/mcp. Click Save and Cursor will verify the connection automatically.',
        },
      },
      {
        '@type': 'Question',
        name: 'What tools does the AI Memory MCP server expose?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Memory exposes four MCP tools: search_memory for full-text search across conversations, add_memory for saving new conversations, get_context for retrieving relevant context snippets, and list_memories for browsing recent conversations with filtering and pagination.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the AI Memory MCP server private and secure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all data is stored locally by default. The MCP endpoint only accesses your own conversations, and you can self-host for complete control. There is no third-party data sharing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI tools support the AI Memory MCP server?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Any MCP-compatible client can connect, including Claude Desktop, Cursor, Windsurf, Cline, and over 100 other tools. The Model Context Protocol is supported by a growing ecosystem of AI assistants and development tools.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">🧠 AI Memory</Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm">← Back to AI Memory</Link>
        </div>

        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span>April 27, 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Use AI Memory MCP Server with Claude Desktop & Cursor
          </h1>
          <p className="text-xl text-gray-600">
            Connect your AI assistants to your entire conversation history. Search past discussions, retrieve context, and never lose an important insight again.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>What is the Model Context Protocol (MCP)?</h2>
          <p>
            The <strong>Model Context Protocol</strong> is an open standard created by Anthropic that lets AI assistants connect to external tools and data sources.
            Think of it like USB for AI — a universal plug that any AI tool can use to access your data.
          </p>
          <p>
            As of April 2026, over <strong>113 MCP clients</strong> support the protocol, including Claude Desktop, Cursor, Windsurf, Cline, and many more.
            AI Memory now offers a built-in MCP Server, so any of these tools can search through your saved conversations.
          </p>

          <h2>Why Connect AI Memory to Your AI Tools?</h2>
          <p>Consider this scenario: You had a detailed conversation with ChatGPT three months ago about database optimization. Now you&apos;re working on a similar problem in Cursor. Instead of trying to remember or re-ask, you can simply say:</p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
            &quot;Search my AI Memory for conversations about database indexing strategies&quot;
          </blockquote>
          <p>Your AI assistant finds the relevant snippets from your past conversations and uses that context to give you better, more personalized answers.</p>

          <h3>Key Benefits</h3>
          <ul>
            <li><strong>Cross-platform memory</strong> — Search ChatGPT, Claude, DeepSeek, and Gemini conversations from one place</li>
            <li><strong>Context injection</strong> — AI tools can automatically pull relevant past discussions into new conversations</li>
            <li><strong>No re-explaining</strong> — Your AI already knows your history and preferences</li>
            <li><strong>Works with 100+ tools</strong> — Any MCP-compatible client can connect</li>
          </ul>

          <h2>Step-by-Step: Claude Desktop Setup</h2>
          <p>Setting up AI Memory with Claude Desktop takes under 2 minutes:</p>
          <ol>
            <li className="mb-3">Open your Claude Desktop configuration file:
              <ul>
                <li><strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
                <li><strong>Windows:</strong> <code>%APPDATA%\Claude\claude_desktop_config.json</code></li>
              </ul>
            </li>
            <li className="mb-3">Add the AI Memory MCP server configuration:
              <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-3">
{`{
  "mcpServers": {
    "ai-memory": {
      "url": "https://aimemory.pro/api/mcp",
      "transport": "http"
    }
  }
}`}
              </pre>
            </li>
            <li className="mb-3">Save the file and restart Claude Desktop</li>
            <li className="mb-3">You should see &quot;AI Memory&quot; listed in the MCP servers section of Claude&apos;s settings</li>
          </ol>
          <p>That&apos;s it! You can now ask Claude to search your conversation history.</p>

          <h2>Step-by-Step: Cursor Setup</h2>
          <p>For Cursor users, the process is even simpler:</p>
          <ol>
            <li className="mb-3">Open Cursor and go to <strong>Settings → MCP</strong></li>
            <li className="mb-3">Click <strong>&quot;Add New MCP Server&quot;</strong></li>
            <li className="mb-3">Enter these details:
              <ul>
                <li><strong>Name:</strong> AI Memory</li>
                <li><strong>Type:</strong> HTTP</li>
                <li><strong>URL:</strong> <code>https://aimemory.pro/api/mcp</code></li>
              </ul>
            </li>
            <li className="mb-3">Click Save. Cursor will verify the connection automatically.</li>
          </ol>
          <p>Once connected, Cursor&apos;s AI can search your past conversations when helping you code.</p>

          <h2>Available Tools</h2>
          <p>AI Memory exposes four MCP tools:</p>

          <h3>1. search_memory</h3>
          <p>Full-text search across all your saved conversations. Filter by platform (ChatGPT, Claude, DeepSeek, Gemini) and limit results.</p>

          <h3>2. add_memory</h3>
          <p>Save new conversations or notes directly from your AI assistant. Tag them for easy retrieval later.</p>

          <h3>3. get_context</h3>
          <p>Get relevant context snippets for a specific topic. Perfect for AI assistants that need background information before answering.</p>

          <h3>4. list_memories</h3>
          <p>Browse your recent conversations with platform filtering and pagination.</p>

          <h2>Privacy & Security</h2>
          <p>
            Your privacy matters. AI Memory&apos;s MCP Server is designed with security in mind:
          </p>
          <ul>
            <li>All data is stored locally by default</li>
            <li>The MCP endpoint only accesses your own conversations</li>
            <li>You can self-host for complete control</li>
            <li>No third-party data sharing</li>
          </ul>

          <h2>Get Started</h2>
          <p>
            Ready to give your AI assistants a memory upgrade? Upload your first conversation export and connect via MCP:
          </p>
          <ol>
            <li>Visit <Link href="/" className="text-blue-600 hover:underline">aimemory.pro</Link> and upload your ChatGPT/Claude export</li>
            <li>Follow the setup guide for your AI tool (Claude Desktop, Cursor, etc.)</li>
            <li>Start asking your AI to search your conversation history!</li>
          </ol>

          <p className="mt-8 text-gray-500 text-sm">
            For the full API reference and setup guides for other MCP clients, see the <Link href="/docs/mcp" className="text-blue-600 hover:underline">MCP documentation page</Link>.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/chatgpt-history-extension" className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900">ChatGPT History Extension</h4>
              <p className="text-sm text-gray-600 mt-1">Save and search your ChatGPT conversations.</p>
            </Link>
            <Link href="/features" className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900">All Features</h4>
              <p className="text-sm text-gray-600 mt-1">Explore everything AI Memory can do.</p>
            </Link>
          </div>
        </div>
      </article>

      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>AI Memory — Your conversations, preserved forever</p>
          <div className="mt-2 space-x-4">
            <Link href="/features" className="hover:text-gray-700">Features</Link>
            <Link href="/docs/mcp" className="hover:text-gray-700">MCP Server</Link>
            <Link href="/pricing" className="hover:text-gray-700">Pricing</Link>
            <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}