import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PyPI Setup — Install AI Memory MCP Server via pip | aimemory.pro',
  description: 'One-command installation of AI Memory MCP Server via PyPI. pip install aimemory-mcp-server — works with Claude Desktop, Cursor, Windsurf, and 113+ MCP clients.',
  keywords: ['pypi install', 'pip install aimemory-mcp-server', 'mcp server setup', 'ai memory pypi', 'python mcp server'],
  alternates: {
    canonical: 'https://aimemory.pro/docs/pypi-setup',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I install AI Memory MCP Server via pip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Run: pip install aimemory-mcp-server. Then run: aimemory-mcp-server. Configure your AI client (Claude Desktop, Cursor, Windsurf) to connect to it. That\'s it — no API keys, no accounts needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the AI Memory MCP Server free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! The PyPI package is completely free and open source (MIT License). All 12 MCP tools are available with no limits. The local mode stores data on your machine with no internet required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Python version is required?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Python 3.8 or higher is required. Works on macOS, Linux, and Windows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does AI Memory MCP Server need an API key?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No API keys are needed. The server runs entirely on your machine, connecting to a local SQLite database. For the hosted version, your session cookie provides secure access.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use AI Memory MCP Server with Cursor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Go to Settings → MCP → Add New MCP Server. Set Name to "AI Memory", Type to "stdio", and Command to "aimemory-mcp-server".',
      },
    },
  ],
};

export default function PyPiSetupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/docs" className="text-gray-600 hover:text-blue-600">Docs</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-800 font-medium">PyPI Setup</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <article className="prose lg:prose-xl max-w-none">
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd)}} />

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">v1.5.1</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">MIT License</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">PyPI</span>
          </div>

          <h1>PyPI Setup: AI Memory MCP Server</h1>
          <p className="text-xl text-gray-600">
            Install the MCP server in 10 seconds with one <code>pip install</code> command.
            No configuration files. No accounts. No API keys.
          </p>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 my-8 text-white">
            <h2 className="text-white mt-0 text-2xl">⚡ Quick Install</h2>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 mt-4">
              <div>$ pip install aimemory-mcp-server</div>
              <div className="mt-2">$ aimemory-mcp-server</div>
            </div>
            <p className="mt-4 text-purple-100">
              ✓ Python 3.8+ ✓ macOS / Linux / Windows ✓ No API keys needed ✓ MIT License
            </p>
            <a href="https://pypi.org/project/aimemory-mcp-server/"
               className="inline-block mt-4 bg-white text-purple-700 px-6 py-2 rounded-lg font-medium hover:bg-purple-50">
              📦 View on PyPI →
            </a>
          </div>

          <h2>Table of Contents</h2>
          <ul>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#running">Running the Server</a></li>
            <li><a href="#claude-desktop">Claude Desktop Configuration</a></li>
            <li><a href="#cursor">Cursor Configuration</a></li>
            <li><a href="#windsurf">Windsurf Configuration</a></li>
            <li><a href="#vs-code">VS Code (Cline/Continue) Configuration</a></li>
            <li><a href="#troubleshooting">Troubleshooting</a></li>
            <li><a href="#updating">Updating</a></li>
          </ul>

          <h2 id="prerequisites">Prerequisites</h2>
          <ul>
            <li><strong>Python 3.8+</strong> — Check with <code>python --version</code> or <code>python3 --version</code></li>
            <li><strong>pip</strong> — Check with <code>pip --version</code> or <code>pip3 --version</code></li>
            <li><strong>Operating System</strong> — macOS, Linux, or Windows (WSL recommended for Windows)</li>
          </ul>

          <h2 id="installation">Installation</h2>
          <p>Install the package from PyPI:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm">
pip install aimemory-mcp-server
          </pre>
          <p>This installs the <code>aimemory-mcp-server</code> package and all dependencies (SQLite bindings, MCP SDK, etc.).</p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
            <p className="text-yellow-800 font-medium mt-0">💡 Platform-specific notes:</p>
            <ul className="text-yellow-700">
              <li><strong>macOS</strong>: Use <code>pip3</code> instead of <code>pip</code> if Python 2 is default</li>
              <li><strong>Linux</strong>: You may need <code>pip3 install aimemory-mcp-server</code></li>
              <li><strong>Windows</strong>: Use <code>py -m pip install aimemory-mcp-server</code> or install via WSL</li>
            </ul>
          </div>

          <h2 id="running">Running the Server</h2>
          <p>Start the MCP server:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm">
aimemory-mcp-server
          </pre>
          <p>The server starts and listens on stdio (standard MCP transport). It creates a SQLite database at <code>~/.aimemory/memories.db</code> on first run.</p>

          <h2 id="claude-desktop">Claude Desktop Configuration</h2>
          <p>Add to your <code>claude_desktop_config.json</code>:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm">
{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}`}
          </pre>
          <p>Restart Claude Desktop. Try asking: <em>"Search my memories for React performance tips"</em></p>

          <h2 id="cursor">Cursor Configuration</h2>
          <ol>
            <li>Open Cursor</li>
            <li>Go to <strong>Settings → MCP → Add New MCP Server</strong></li>
            <li>Set <strong>Name</strong>: <code>AI Memory</code></li>
            <li>Set <strong>Type</strong>: <code>stdio</code></li>
            <li>Set <strong>Command</strong>: <code>aimemory-mcp-server</code></li>
            <li>Click <strong>Add</strong></li>
          </ol>
          <p>Cursor will now have access to all 12 memory tools.</p>

          <h2 id="windsurf">Windsurf Configuration</h2>
          <p>Add to your MCP configuration:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm">
{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}`}
          </pre>

          <h2 id="vs-code">VS Code (Cline / Continue) Configuration</h2>
          <p>In your MCP settings file (typically <code>~/.vscode/mcp.json</code> or via the extension settings UI):</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm">
{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}`}
          </pre>

          <h2 id="troubleshooting">Troubleshooting</h2>

          <h3>Command not found: aimemory-mcp-server</h3>
          <p>The binary may not be in your PATH. Try:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm">
python -m aimemory_mcp.server
          </pre>
          <p>Or reinstall with <code>pip install --user aimemory-mcp-server</code> to ensure it's in your user bin directory.</p>

          <h3>MCP client can't connect</h3>
          <ul>
            <li>Ensure the server is running (you should see log output in the terminal)</li>
            <li>Check the command path in your client configuration</li>
            <li>Restart your AI client after changing MCP configuration</li>
            <li>Check that <code>aimemory-mcp-server</code> works standalone in a terminal</li>
          </ul>

          <h3>Database permission errors</h3>
          <p>The server creates its database at <code>~/.aimemory/</code>. Ensure this directory is writable:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm">
mkdir -p ~/.aimemory
chmod 755 ~/.aimemory
          </pre>

          <h2 id="updating">Updating</h2>
          <p>To update to the latest version:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm">
pip install --upgrade aimemory-mcp-server
          </pre>
          <p>Check the <Link href="/changelog" className="text-blue-600">changelog</Link> for version history.</p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 mt-0">🚀 Ready to go?</h2>
            <p className="text-blue-700">
              Your AI now has persistent memory! Try it out by asking your AI to search for past conversations,
              save important insights, or retrieve your tech stack preferences.
            </p>
            <div className="flex gap-4 flex-wrap mt-4">
              <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                🧠 Try Web App →
              </Link>
              <Link href="/mcp-server" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                📖 MCP Server Guide
              </Link>
              <Link href="/docs/mcp" className="inline-block bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
                📚 API Docs
              </Link>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t border-gray-200 bg-white mt-12">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <Link href="/docs" className="hover:text-blue-600">📚 Docs</Link>
            <Link href="/docs/mcp" className="hover:text-blue-600">🔌 MCP API</Link>
            <Link href="/mcp-server" className="hover:text-blue-600">⚡ MCP Server</Link>
            <Link href="/changelog" className="hover:text-blue-600">📋 Changelog</Link>
            <a href="https://github.com/jingchang0623-crypto/aimemory" className="hover:text-blue-600">💻 GitHub</a>
            <a href="https://pypi.org/project/aimemory-mcp-server/" className="hover:text-blue-600">📦 PyPI</a>
          </div>
          <p className="text-gray-400 text-xs mt-4">© 2026 AI Memory. Open source (MIT).</p>
        </div>
      </footer>
    </div>
  );
}
