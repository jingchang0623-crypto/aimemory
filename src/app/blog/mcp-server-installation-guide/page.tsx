import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';

const slug = 'mcp-server-installation-guide';

export const metadata: Metadata = {
  title: 'MCP Server Installation Guide - Step-by-Step Setup (2026) | AI Memory',
  description:
    'Complete MCP server installation guide. Install aimemory-mcp-server via pip, configure Claude Desktop, Cursor, VS Code & Windsurf. Covers HTTP/SSE transport, environment variables, and troubleshooting.',
  keywords: [
    'mcp server installation guide',
    'mcp server install',
    'aimemory mcp server',
    'mcp server pip install',
    'mcp server setup',
    'model context protocol installation',
    'mcp server configuration',
    'claude desktop mcp',
    'cursor mcp server',
    'vs code mcp server',
    'windsurf mcp setup',
    'mcp server environment variables',
    'mcp server troubleshooting',
    'mcp http transport',
    'mcp sse transport',
  ],
  openGraph: {
    title: 'MCP Server Installation Guide - Step-by-Step Setup (2026)',
    description:
      'Complete MCP server installation guide. Install aimemory-mcp-server via pip, configure Claude Desktop, Cursor, VS Code & Windsurf.',
    url: 'https://aimemory.pro/blog/mcp-server-installation-guide',
    type: 'article',
  },
  alternates: {
    canonical: 'https://aimemory.pro/blog/mcp-server-installation-guide',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Python version do I need for MCP server installation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need Python 3.10 or higher to install the AI Memory MCP server. Python 3.10+ is required because the server uses modern Python features such as match-case statements, type union syntax (X | Y), and other improvements introduced in Python 3.10. Check your version with `python --version` before installation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I install the AI Memory MCP server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Install the AI Memory MCP server with a single pip command: `pip install aimemory-mcp-server`. This installs the server package along with all required dependencies. After installation, you can start it with `aimemory-mcp-server` and configure it in your preferred MCP client.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I configure MCP server in Claude Desktop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To configure the MCP server in Claude Desktop, open your claude_desktop_config.json file (located at ~/Library/Application Support/Claude/ on macOS or %APPDATA%\\Claude\\ on Windows), add the MCP server entry under the "mcpServers" key with the "command" set to "aimemory-mcp-server", save the file, and restart Claude Desktop. The AI Memory tools will then appear in your Claude sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use the MCP server remotely via HTTP or SSE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Set the environment variable AIMEMORY_TRANSPORT=http to enable HTTP/SSE transport. The server will listen on the port specified by AIMEMORY_PORT (default: 8080). Remote clients can then connect via HTTP Streamable or SSE endpoints, allowing team-wide or cross-machine access to the same MCP server instance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the AIMEMORY_DB environment variable do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AIMEMORY_DB environment variable specifies the path to the SQLite database file where AI Memory stores all conversations and metadata. By default, the database is created at ~/.aimemory/aimemory.db. You can change this to a custom path, such as a network drive or a dedicated data directory, to control where your conversation data lives.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my MCP server not showing up in Claude Desktop or Cursor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common reasons: 1) The configuration JSON has a syntax error — validate it with a JSON linter. 2) You did not restart the client after editing the config file. 3) The aimemory-mcp-server binary is not in your system PATH. 4) Python version is below 3.10. 5) On Windows, use forward slashes or escaped backslashes in file paths. Check the client\'s MCP logs for detailed error messages.',
      },
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MCP Server Installation Guide - Step-by-Step Setup (2026)',
  description:
    'Complete MCP server installation guide covering pip installation, Claude Desktop, Cursor, VS Code, Windsurf configuration, HTTP/SSE transport, environment variables, and troubleshooting.',
  url: 'https://aimemory.pro/blog/mcp-server-installation-guide',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: {
    '@type': 'Organization',
    name: 'AI Memory',
    url: 'https://aimemory.pro',
  },
  publisher: {
    '@type': 'Organization',
    name: 'AI Memory',
    url: 'https://aimemory.pro',
    logo: {
      '@type': 'ImageObject',
      url: 'https://aimemory.pro/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://aimemory.pro/blog/mcp-server-installation-guide',
  },
};

export default function MCPServerInstallationGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogLayout
        slug={slug}
        title="MCP Server Installation Guide - Step-by-Step Setup (2026)"
        category="Technical"
        date="2026-05-05"
        readTime="16 min"
      >
        {/* Introduction */}
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Looking for a complete <strong>MCP server installation guide</strong>? This tutorial walks you through
          every step — from checking prerequisites to configuring AI Memory&apos;s MCP server with Claude Desktop,
          Cursor, VS Code, and Windsurf. By the end, your AI assistants will be able to search, add, and
          retrieve context from all your saved conversations through the Model Context Protocol.
        </p>

        {/* TL;DR */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h2 className="text-blue-800 mt-0">TL;DR — Quick MCP Server Installation</h2>
          <ol className="text-blue-700 space-y-1">
            <li><strong>Prerequisites:</strong> Python 3.10+, pip installed</li>
            <li><strong>Install:</strong> <code>pip install aimemory-mcp-server</code></li>
            <li><strong>Run:</strong> <code>aimemory-mcp-server</code></li>
            <li><strong>Configure</strong> your AI client (Claude Desktop, Cursor, VS Code, Windsurf)</li>
            <li><strong>Done!</strong> Your AI can now search your conversation history</li>
          </ol>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#prerequisites" className="hover:text-blue-600 transition-colors">Prerequisites</a></li>
            <li><a href="#installation" className="hover:text-blue-600 transition-colors">Step 1 — Install aimemory-mcp-server</a></li>
            <li><a href="#configure-claude-desktop" className="hover:text-blue-600 transition-colors">Step 2 — Configure Claude Desktop</a></li>
            <li><a href="#configure-cursor" className="hover:text-blue-600 transition-colors">Step 3 — Configure Cursor</a></li>
            <li><a href="#configure-vscode" className="hover:text-blue-600 transition-colors">Step 4 — Configure VS Code</a></li>
            <li><a href="#configure-windsurf" className="hover:text-blue-600 transition-colors">Step 5 — Configure Windsurf</a></li>
            <li><a href="#http-sse-transport" className="hover:text-blue-600 transition-colors">HTTP/SSE Transport for Remote Access</a></li>
            <li><a href="#environment-variables" className="hover:text-blue-600 transition-colors">Environment Variables Reference</a></li>
            <li><a href="#troubleshooting" className="hover:text-blue-600 transition-colors">Troubleshooting Common Issues</a></li>
            <li><a href="#faq" className="hover:text-blue-600 transition-colors">Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* ============ SECTION: Prerequisites ============ */}
        <h2 id="prerequisites" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Prerequisites
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          Before you begin this MCP server installation guide, make sure you have the following ready:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">System Requirements</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>Python 3.10 or higher</strong> — The server uses modern Python features introduced in 3.10</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>pip</strong> — Python&apos;s package manager (comes bundled with Python)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>An MCP-compatible client</strong> — Claude Desktop, Cursor, VS Code, Windsurf, etc.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>Operating System</strong> — macOS, Windows 10+, or Linux</span>
            </li>
          </ul>
        </div>

        <h3>Check Your Python Version</h3>

        <p className="text-gray-600 leading-relaxed mb-4">
          Open your terminal and run the following command to verify your Python version:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>python --version</code></pre>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          You should see <code>Python 3.10.x</code> or higher. If you have Python 3.9 or lower, upgrade
          first. On macOS with Homebrew: <code>brew install python@3.12</code>. On Ubuntu/Debian:{" "}
          <code>sudo apt install python3.12</code>. On Windows, download the latest installer from{" "}
          <a href="https://python.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">python.org</a>.
        </p>

        {/* ============ SECTION: Installation ============ */}
        <h2 id="installation" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Step 1 — Install aimemory-mcp-server
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          With Python ready, install the AI Memory MCP server package from PyPI with a single command:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>pip install aimemory-mcp-server</code></pre>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          This downloads and installs the <strong>aimemory-mcp-server</strong> package along with all its
          dependencies. The package provides:
        </p>

        <ul className="text-gray-600 space-y-2 mb-6">
          <li>An MCP server exposing tools: <code>search_memory</code>, <code>add_memory</code>, <code>get_context</code>, and <code>list_memories</code></li>
          <li>SQLite-based local storage for conversations</li>
          <li>Stdio transport (default) and HTTP/SSE transport for remote access</li>
          <li>Cross-platform support (macOS, Windows, Linux)</li>
        </ul>

        <h3>Verify the Installation</h3>

        <p className="text-gray-600 leading-relaxed mb-4">
          After installation, verify the server is available:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>aimemory-mcp-server --help</code></pre>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          You should see usage information printed to the terminal. If you get a &quot;command not found&quot;
          error, ensure your Python scripts directory is in your system PATH. On most systems this happens
          automatically.
        </p>

        <h3>Optional: Install in a Virtual Environment</h3>

        <p className="text-gray-600 leading-relaxed mb-4">
          To keep your system Python clean, you can create a virtual environment first:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>{`python -m venv ~/.aimemory-venv
source ~/.aimemory-venv/bin/activate  # macOS/Linux
# or: ~/.aimemory-venv/Scripts/activate  # Windows
pip install aimemory-mcp-server`}</code></pre>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          If you use a venv, note the full path to the <code>aimemory-mcp-server</code> binary inside
          the venv&apos;s <code>bin/</code> directory — you&apos;ll need it when configuring your MCP client.
        </p>

        {/* ============ SECTION: Claude Desktop ============ */}
        <h2 id="configure-claude-desktop" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Step 2 — Configure Claude Desktop
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          Claude Desktop has native MCP support. To add the AI Memory MCP server:
        </p>

        <ol className="text-gray-600 space-y-3 mb-6 list-decimal list-inside">
          <li>Locate your Claude Desktop configuration file:
            <ul className="ml-6 mt-2 space-y-1">
              <li><strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
              <li><strong>Windows:</strong> <code>%APPDATA%\Claude\claude_desktop_config.json</code></li>
            </ul>
          </li>
          <li>Open the file in a text editor and add the MCP server configuration:</li>
        </ol>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server",
      "args": []
    }
  }
}`}</code></pre>
        </div>

        <ol start={3} className="text-gray-600 space-y-3 mb-6 list-decimal list-inside">
          <li>Save the file and <strong>restart Claude Desktop</strong> completely.</li>
          <li>You should see the AI Memory MCP server listed in Claude&apos;s MCP servers section.</li>
        </ol>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
          <p className="text-green-800 text-sm">
            <strong>💡 Tip:</strong> If you installed in a virtual environment, replace &quot;aimemory-mcp-server&quot; with the
            full path to the binary, e.g., <code>/Users/you/.aimemory-venv/bin/aimemory-mcp-server</code>.
          </p>
        </div>

        {/* ============ SECTION: Cursor ============ */}
        <h2 id="configure-cursor" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Step 3 — Configure Cursor
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          Cursor supports MCP servers through its settings. Here&apos;s how to set it up:
        </p>

        <ol className="text-gray-600 space-y-3 mb-6 list-decimal list-inside">
          <li>Open Cursor and go to <strong>Settings → Cursor Settings → MCP</strong></li>
          <li>Click <strong>&quot;Add new global MCP server&quot;</strong></li>
          <li>Paste the following configuration:</li>
        </ol>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server",
      "args": []
    }
  }
}`}</code></pre>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Alternatively, you can edit the MCP configuration file directly at{" "}
          <code>~/.cursor/mcp.json</code> (global) or <code>.cursor/mcp.json</code> (per-project).
          After saving, Cursor will automatically detect and connect to the MCP server.
        </p>

        {/* ============ SECTION: VS Code ============ */}
        <h2 id="configure-vscode" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Step 4 — Configure VS Code (with Continue or Copilot)
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          VS Code supports MCP through extensions like <strong>Continue</strong> and GitHub Copilot. To
          configure AI Memory&apos;s MCP server in VS Code:
        </p>

        <ol className="text-gray-600 space-y-3 mb-6 list-decimal list-inside">
          <li>Install the <strong>Continue</strong> extension from the VS Code marketplace (or use Copilot Chat if you have MCP support enabled)</li>
          <li>Open your MCP configuration. For Continue, edit <code>~/.continue/config.json</code> or use the Continue settings UI</li>
          <li>Add the MCP server entry:</li>
        </ol>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>{`{
  "mcpServers": [
    {
      "name": "ai-memory",
      "command": "aimemory-mcp-server",
      "args": []
    }
  ]
}`}</code></pre>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          For GitHub Copilot, add the MCP server to your workspace <code>.vscode/settings.json</code>:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>{`{
  "github.copilot.chat.mcp.servers": {
    "ai-memory": {
      "command": "aimemory-mcp-server",
      "args": []
    }
  }
}`}</code></pre>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Restart VS Code after saving. The AI Memory tools will be available in your AI chat sessions.
        </p>

        {/* ============ SECTION: Windsurf ============ */}
        <h2 id="configure-windsurf" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Step 5 — Configure Windsurf
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          Windsurf (by Codeium) supports MCP servers natively. To add AI Memory:
        </p>

        <ol className="text-gray-600 space-y-3 mb-6 list-decimal list-inside">
          <li>Open Windsurf and go to <strong>Settings → Cascade → MCP Servers</strong></li>
          <li>Click <strong>&quot;Add Server&quot;</strong></li>
          <li>Enter the following configuration:</li>
        </ol>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server",
      "args": []
    }
  }
}`}</code></pre>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          You can also manually edit the Windsurf MCP configuration file at{" "}
          <code>~/.windsurf/mcp.json</code>. After saving, restart Windsurf and the server will be
          available in Cascade sessions.
        </p>

        {/* ============ SECTION: HTTP/SSE Transport ============ */}
        <h2 id="http-sse-transport" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          HTTP/SSE Transport for Remote Access
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          By default, the MCP server uses <strong>stdio</strong> transport — it runs as a local subprocess
          of your AI client. This is the simplest and most secure option for individual use. However, if you
          need to share the MCP server across a team, run it on a remote machine, or access it from multiple
          devices, you can switch to <strong>HTTP/SSE transport</strong>.
        </p>

        <h3>Starting the Server in HTTP Mode</h3>

        <p className="text-gray-600 leading-relaxed mb-4">
          Set the <code>AIMEMORY_TRANSPORT</code> environment variable to <code>http</code> and start the
          server:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>{`AIMEMORY_TRANSPORT=http AIMEMORY_PORT=8080 aimemory-mcp-server`}</code></pre>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          The server will start listening on <code>http://localhost:8080</code>. You can change the port
          with the <code>AIMEMORY_PORT</code> variable.
        </p>

        <h3>Connecting Remote Clients</h3>

        <p className="text-gray-600 leading-relaxed mb-4">
          Remote MCP clients can connect via the HTTP Streamable or SSE endpoint. In your client
          configuration, use the <code>url</code> field instead of <code>command</code>:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>{`{
  "mcpServers": {
    "ai-memory-remote": {
      "url": "http://your-server:8080/mcp"
    }
  }
}`}</code></pre>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-yellow-800 text-sm">
            <strong>⚠️ Security Note:</strong> When exposing the MCP server over HTTP, make sure to run it
            behind a reverse proxy with TLS (HTTPS) and authentication. Never expose the server directly
            to the public internet without encryption.
          </p>
        </div>

        {/* ============ SECTION: Environment Variables ============ */}
        <h2 id="environment-variables" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Environment Variables Reference
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          The AI Memory MCP server is configured through environment variables. Here is the complete
          reference:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Variable</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Default</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-800">AIMEMORY_DB</td>
                <td className="px-4 py-3 text-sm text-gray-600">~/.aimemory/aimemory.db</td>
                <td className="px-4 py-3 text-sm text-gray-600">Path to the SQLite database file. Set a custom path to control where conversation data is stored.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-800">AIMEMORY_TRANSPORT</td>
                <td className="px-4 py-3 text-sm text-gray-600">stdio</td>
                <td className="px-4 py-3 text-sm text-gray-600">Transport mode. Use <code>stdio</code> for local subprocess mode or <code>http</code> for HTTP/SSE remote access.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-800">AIMEMORY_PORT</td>
                <td className="px-4 py-3 text-sm text-gray-600">8080</td>
                <td className="px-4 py-3 text-sm text-gray-600">Port for HTTP transport. Only used when <code>AIMEMORY_TRANSPORT=http</code>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Examples</h3>

        <p className="text-gray-600 leading-relaxed mb-4">
          Custom database location:
        </p>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>{`AIMEMORY_DB=/data/aimemory/mydb.db aimemory-mcp-server`}</code></pre>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Run as HTTP server on a custom port:
        </p>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>{`AIMEMORY_TRANSPORT=http AIMEMORY_PORT=9090 aimemory-mcp-server`}</code></pre>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          You can also set these variables in a <code>.env</code> file or export them in your shell profile
          (<code>~/.bashrc</code>, <code>~/.zshrc</code>, etc.) for persistent configuration.
        </p>

        {/* ============ SECTION: Troubleshooting ============ */}
        <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Troubleshooting Common Issues
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          Encountering problems? Here are the most common issues and their solutions when following this
          MCP server installation guide:
        </p>

        <div className="space-y-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">❌ &quot;aimemory-mcp-server: command not found&quot;</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              This means the installed binary is not in your system PATH. Solutions:
            </p>
            <ul className="text-gray-600 text-sm space-y-1 mt-2 ml-4 list-disc">
              <li>Check if pip&apos;s bin directory is in your PATH: <code>echo $PATH</code></li>
              <li>Reinstall with <code>pip install --user aimemory-mcp-server</code> and add <code>~/.local/bin</code> to PATH</li>
              <li>If using a venv, use the full path: <code>~/.aimemory-venv/bin/aimemory-mcp-server</code></li>
              <li>On Windows, check <code>%APPDATA%\Python\Python3x\Scripts\</code></li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">❌ MCP server not appearing in Claude Desktop</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Verify your <code>claude_desktop_config.json</code> is valid JSON (use{" "}
              <a href="https://jsonlint.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">jsonlint.com</a>).
              Make sure you completely quit and restarted Claude Desktop — just closing the window may not
              be enough. Check Claude&apos;s developer console for error messages (Help → Toggle Developer Tools).
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">❌ &quot;ModuleNotFoundError&quot; or dependency errors</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Upgrade pip and try again: <code>pip install --upgrade pip</code> then{" "}
              <code>pip install --upgrade aimemory-mcp-server</code>. If conflicts persist, use a virtual
              environment to isolate the installation.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">❌ &quot;Connection refused&quot; in HTTP mode</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Make sure the server is running and the port is correct. Check for firewall rules blocking the
              port. Verify with <code>curl http://localhost:8080/mcp</code>. If running on a remote server,
              ensure the port is open in your security group / firewall.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">❌ Database locked errors</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              SQLite only allows one writer at a time. If multiple MCP server instances try to write to the
              same database simultaneously, you&apos;ll see lock errors. Solution: use a single server instance
              in HTTP mode and connect all clients to it remotely.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">❌ JSON configuration syntax error</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              JSON is strict — trailing commas, missing quotes, or wrong brackets will break the config.
              Always validate your JSON before saving. Common pitfalls: using single quotes instead of
              double quotes, adding a trailing comma after the last item, or forgetting to escape
              backslashes in Windows paths.
            </p>
          </div>
        </div>

        {/* ============ SECTION: FAQ ============ */}
        <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">What Python version do I need for MCP server installation?</h3>
            <p className="text-gray-600 leading-relaxed">
              You need <strong>Python 3.10 or higher</strong>. The server uses modern Python features
              like match-case statements and type union syntax that were introduced in Python 3.10.
              Check your version with <code>python --version</code>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">How do I install the AI Memory MCP server?</h3>
            <p className="text-gray-600 leading-relaxed">
              Run <code>pip install aimemory-mcp-server</code>. This installs the server package and all
              dependencies. After installation, start it with <code>aimemory-mcp-server</code> and configure
              it in your MCP client of choice.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Can I use the MCP server with multiple AI clients simultaneously?</h3>
            <p className="text-gray-600 leading-relaxed">
              Yes! In stdio mode, each client launches its own server subprocess. In HTTP mode, a single
              server instance can serve multiple remote clients at the same time — ideal for teams.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Is the MCP server data stored locally?</h3>
            <p className="text-gray-600 leading-relaxed">
              Yes. By default, all conversation data is stored in a local SQLite database at{" "}
              <code>~/.aimemory/aimemory.db</code>. You can customize the location with the{" "}
              <code>AIMEMORY_DB</code> environment variable. No data is sent to external servers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Can I use the MCP server remotely via HTTP or SSE?</h3>
            <p className="text-gray-600 leading-relaxed">
              Absolutely. Set <code>AIMEMORY_TRANSPORT=http</code> to enable HTTP/SSE transport. The server
              will listen on the port specified by <code>AIMEMORY_PORT</code> (default: 8080). Remote clients
              connect via <code>{'{'}"url": "http://your-server:8080/mcp"{'}}'}</code> in their configuration.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">What tools does the AI Memory MCP server expose?</h3>
            <p className="text-gray-600 leading-relaxed">
              Four core tools: <code>search_memory</code> for full-text search across saved conversations,{" "}
              <code>add_memory</code> for saving new conversations or notes, <code>get_context</code> for
              retrieving relevant context snippets for a topic, and <code>list_memories</code> for browsing
              recent conversations with platform filtering and pagination.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Why is my MCP server not showing up in Claude Desktop or Cursor?</h3>
            <p className="text-gray-600 leading-relaxed">
              Common reasons: 1) The configuration JSON has a syntax error — validate it with a JSON linter.
              2) You did not restart the client after editing the config. 3) The binary is not in your system
              PATH. 4) Python version is below 3.10. 5) On Windows, use forward slashes or escaped backslashes
              in file paths. Check the client&apos;s MCP logs for detailed error messages.
            </p>
          </div>
        </div>

        {/* ============ SECTION: Next Steps ============ */}
        <h2 id="next-steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Next Steps
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          Congratulations — your MCP server installation is complete! Here&apos;s what to do next:
        </p>

        <ul className="text-gray-600 space-y-2 mb-8">
          <li><strong>Import existing conversations</strong> — Use the AI Memory browser extension to export your ChatGPT, Claude, and DeepSeek conversations, then import them into the MCP server database</li>
          <li><strong>Try searching</strong> — Ask your AI assistant to &quot;search my memory&quot; for a topic you&apos;ve discussed before</li>
          <li><strong>Set up remote access</strong> — Switch to HTTP transport if you want to share the server across devices or team members</li>
          <li><strong>Explore more MCP servers</strong> — Browse the growing ecosystem of MCP servers for databases, APIs, file systems, and more</li>
        </ul>
      </BlogLayout>
    </>
  );
}
