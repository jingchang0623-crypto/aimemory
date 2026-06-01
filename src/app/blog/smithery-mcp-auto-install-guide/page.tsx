import BlogLayout from '@/components/BlogLayout';
import type { Metadata } from 'next';
import Link from 'next/link';

const slug = 'smithery-mcp-auto-install-guide';

export const metadata: Metadata = {
  title: 'Smithery MCP Auto-Install Guide: One-Click AI Memory Setup (2026) | AI Memory Blog',
  description: 'Learn how to auto-install AI Memory MCP Server with Smithery CLI. One command sets up persistent memory for Claude Desktop, Cursor, Windsurf, and 113+ MCP clients. Step-by-step guide.',
  keywords: [
    'smithery mcp server',
    'smithery install mcp',
    'mcp auto install',
    'smithery cli install',
    'one click mcp setup',
    'smithery claude desktop',
    'smithery cursor setup',
    'mcp server quick install',
    'npx smithery install',
    'smithery ai memory',
    'auto install mcp server',
    'smithery windsurf',
    'mcp protocol setup 2026',
    'smithery tutorial',
    'ai memory mcp smithery',
  ],
  openGraph: {
    url: 'https://aimemory.pro/blog/smithery-mcp-auto-install-guide',
    type: 'article',
  },
  alternates: {
    canonical: 'https://aimemory.pro/blog/smithery-mcp-auto-install-guide',
  },
};

export default function SmitheryMCPAutoInstallGuide() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Smithery and how does it work with MCP servers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Smithery is a package manager and auto-configuration tool for MCP (Model Context Protocol) servers. Instead of manually editing JSON configuration files for each AI client (Claude Desktop, Cursor, Windsurf, etc.), you simply run one Smithery CLI command, and it automatically configures your AI tools to use the MCP server. Smithery supports over 113 MCP clients and handles all the configuration details for you.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I install AI Memory MCP Server with Smithery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Install AI Memory MCP Server with one command: npx @smithery/cli install aimemory-mcp-server. The Smithery CLI will detect your installed MCP clients (Claude Desktop, Cursor, Windsurf, etc.), ask which ones you want to configure, and automatically add the AI Memory server to their configuration. The entire process takes under 30 seconds.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI tools work with Smithery auto-install?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Smithery auto-install works with all MCP-compatible clients including Claude Desktop, Cursor, Windsurf, VS Code (with Cline or Continue), Zed, Augment, and over 100 other tools. When you run the Smithery install command, it scans your system for supported clients and configures each one automatically.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between pip install and Smithery install?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'pip install aimemory-mcp-server installs the server package on your machine, but you still need to manually configure each AI client to use it. Smithery (npx @smithery/cli install aimemory-mcp-server) does both: it installs the package AND automatically configures all your MCP clients. Smithery is the faster, zero-config option for most users.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Smithery install safe and open source?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Smithery is an open-source CLI tool that simply automates the MCP client configuration process. It reads your existing config files, adds the AI Memory server entry, and saves the updated config. The AI Memory MCP Server is also open-source (MIT License) and available on PyPI. No data is sent to external servers during the Smithery install process.',
        },
      },
      {
        '@type': 'Question',
        name: 'What tools does the AI Memory MCP Server provide after Smithery install?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'After installing with Smithery, your AI clients gain access to 12 MCP tools: search_memories, save_memory, get_memory, list_memories, update_memory, delete_memory, memory_stats, export_memories, import_memories, batch_save_memories, get_all_tags, and clear_all_memories. These let your AI search, save, and manage conversation memories across Claude, Cursor, Windsurf, and 113+ other MCP clients.',
        },
      },
    ],
  };

  return (
    <BlogLayout slug={slug} title="Smithery MCP Auto-Install Guide: One-Click AI Memory Setup (2026)" category="MCP" date="2026-06-01" readTime="10 min">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <p className="text-xl text-gray-600 mb-8">
        Setting up MCP servers used to mean editing JSON config files, finding the right paths, and troubleshooting connection issues. <strong>Smithery changes everything.</strong> With one CLI command, you can auto-install and configure AI Memory MCP Server for Claude Desktop, Cursor, Windsurf, and 113+ other AI tools. Here&apos;s how.
      </p>

      <h2>What is Smithery?</h2>
      <p>
        <Link href="https://smithery.ai" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Smithery</Link> is an open-source package manager and auto-configuration tool built specifically for the <strong>Model Context Protocol (MCP)</strong> ecosystem. Think of it as <code>npm</code> for MCP servers — but with a superpower: it doesn&apos;t just install packages, it <strong>automatically configures your AI clients</strong> to use them.
      </p>
      <p>
        Before Smithery, setting up an MCP server required:
      </p>
      <ul>
        <li className="mb-2">Finding the correct configuration file for your AI client (e.g., <code>claude_desktop_config.json</code> for Claude Desktop)</li>
        <li className="mb-2">Writing the correct JSON configuration with the right command paths</li>
        <li className="mb-2">Restarting your AI client and hoping the connection works</li>
        <li className="mb-2">Repeating the process for each AI tool you use (Cursor, Windsurf, etc.)</li>
      </ul>
      <p>
        With Smithery, you run <strong>one command</strong>, and it handles everything automatically.
      </p>

      <h2>Why Use Smithery for AI Memory MCP Server?</h2>
      <p>
        The <Link href="/" className="text-blue-600 hover:underline">AI Memory MCP Server</Link> gives your AI assistants persistent memory — the ability to search, save, and retrieve conversations across Claude, Cursor, Windsurf, and 113+ MCP clients. But setting it up manually can be tedious if you use multiple AI tools.
      </p>
      <p>
        Smithery solves this by:
      </p>
      <ul>
        <li><strong>Auto-detecting your installed MCP clients</strong> — Claude Desktop, Cursor, Windsurf, VS Code + Cline, and more</li>
        <li><strong>Generating correct configuration</strong> — No JSON editing required</li>
        <li><strong>Configuring all clients at once</strong> — One command sets up everything</li>
        <li><strong>Verifying the connection</strong> — Confirms the server is working after install</li>
      </ul>

      <h2>Step-by-Step: Auto-Install AI Memory with Smithery</h2>

      <h3>Step 1: Install the Smithery CLI (if needed)</h3>
      <p>
        The Smithery CLI runs via <code>npx</code>, so you don&apos;t need a separate install. Just run:
      </p>
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
{`npx @smithery/cli --version`}
      </pre>
      <p>
        This confirms Smithery is available. If you don&apos;t have Node.js installed, <Link href="https://nodejs.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener">download it here</Link>.
      </p>

      <h3>Step 2: Run the Auto-Install Command</h3>
      <p>
        Now run the Smithery install command for AI Memory:
      </p>
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
{`npx @smithery/cli install aimemory-mcp-server`}
      </pre>
      <p>
        Smithery will:
      </p>
      <ol>
        <li className="mb-2"><strong>Detect your MCP clients</strong> — Scans your system for Claude Desktop, Cursor, Windsurf, etc.</li>
        <li className="mb-2"><strong>Ask which clients to configure</strong> — You can select all, or pick specific ones</li>
        <li className="mb-2"><strong>Install the AI Memory MCP Server</strong> — Runs <code>pip install aimemory-mcp-server</code> automatically</li>
        <li className="mb-2"><strong>Update each client&apos;s config file</strong> — Adds the correct JSON configuration</li>
        <li className="mb-2"><strong>Verify the installation</strong> — Confirms each client can connect to the server</li>
      </ol>

      <h3>Step 3: Restart Your AI Clients</h3>
      <p>
        After Smithery finishes, restart each configured AI client:
      </p>
      <ul>
        <li><strong>Claude Desktop:</strong> Quit and reopen the app</li>
        <li><strong>Cursor:</strong> Reload the window (Cmd/Ctrl + Shift + P → "Reload Window")</li>
        <li><strong>Windsurf:</strong> Restart the application</li>
      </ul>
      <p>
        You should see "AI Memory" (or "aimemory-mcp-server") listed in the MCP servers section of your client.
      </p>

      <h3>Step 4: Test the Connection</h3>
      <p>
        Open a conversation in any configured client and try:
      </p>
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
{`Search my memories for "database optimization"`}
      </pre>
      <p>
        Your AI should respond using the <code>search_memories</code> tool from the AI Memory MCP Server. If it works, you&apos;re all set!
      </p>

      <h2>Manual Install vs. Smithery: Comparison</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Method</th>
              <th className="p-3 border">Time Required</th>
              <th className="p-3 border">Config Editing</th>
              <th className="p-3 border">Multi-Client Support</th>
              <th className="p-3 border">Recommended For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border"><strong>pip install</strong> (manual)</td>
              <td className="p-3 border">5-10 min per client</td>
              <td className="p-3 border">✅ Required</td>
              <td className="p-3 border">❌ Configure each manually</td>
              <td className="p-3 border">Developers who want full control</td>
            </tr>
            <tr>
              <td className="p-3 border"><strong>Smithery auto-install</strong></td>
              <td className="p-3 border">30 seconds</td>
              <td className="p-3 border">❌ None needed</td>
              <td className="p-3 border">✅ All at once</td>
              <td className="p-3 border">Everyone (fastest setup)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Configuring Specific AI Clients with Smithery</h2>

      <h3>Claude Desktop + Smithery</h3>
      <p>
        Smithery auto-detects Claude Desktop&apos;s config file:
      </p>
      <ul>
        <li><strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
        <li><strong>Windows:</strong> <code>%APPDATA%\Claude\claude_desktop_config.json</code></li>
        <li><strong>Linux:</strong> <code>~/.config/Claude/claude_desktop_config.json</code></li>
      </ul>
      <p>
        After Smithery runs, the config file will include the AI Memory server entry. Restart Claude Desktop to see it in the MCP servers list.
      </p>

      <h3>Cursor + Smithery</h3>
      <p>
        Cursor&apos;s MCP settings are at <strong>Settings → MCP</strong>. Smithery automatically adds the AI Memory server to Cursor&apos;s MCP configuration. After restarting Cursor, you&apos;ll see the server in the MCP panel.
      </p>

      <h3>Windsurf + Smithery</h3>
      <p>
        Windsurf stores MCP config in its settings directory. Smithery detects and updates it automatically. Open Windsurf&apos;s settings to verify the AI Memory server is listed.
      </p>

      <h2>What MCP Tools Are Available After Install?</h2>
      <p>
        Once Smithery configures your AI clients, they gain access to <strong>12 MCP tools</strong> from the AI Memory server:
      </p>
      <ul>
        <li><code>search_memories</code> — Full-text search across all saved conversations</li>
        <li><code>save_memory</code> — Save new memories, insights, or conversation snippets</li>
        <li><code>get_memory</code> — Retrieve a specific memory by ID</li>
        <li><code>list_memories</code> — Browse all memories with filtering and pagination</li>
        <li><code>update_memory</code> — Edit existing memories to correct or expand them</li>
        <li><code>delete_memory</code> — Remove outdated or irrelevant memories</li>
        <li><code>memory_stats</code> — Get statistics about your memory store</li>
        <li><code>export_memories</code> — Backup all memories to JSON</li>
        <li><code>import_memories</code> — Import memories from JSON backup</li>
        <li><code>batch_save_memories</code> — Save multiple memories at once</li>
        <li><code>get_all_tags</code> — List all tags with usage counts</li>
        <li><code>clear_all_memories</code> — Delete all memories (use with caution)</li>
      </ul>
      <p>
        These tools work across all your MCP clients. Save a memory in Claude Desktop, retrieve it in Cursor — the memory store is shared.
      </p>

      <h2>Troubleshooting Smithery Install</h2>

      <h3>&quot;Command not found: npx&quot;</h3>
      <p>
        You need Node.js installed. Download it from <Link href="https://nodejs.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener">nodejs.org</Link> and retry.
      </p>

      <h3>&quot;No MCP clients detected&quot;</h3>
      <p>
        Make sure you&apos;ve installed at least one MCP client (Claude Desktop, Cursor, or Windsurf). Smithery can only configure clients that are already installed.
      </p>

      <h3>&quot;AI Memory tools not showing up&quot;</h3>
      <p>
        Restart your AI client completely (quit and reopen). MCP servers are loaded on startup, so a restart is required.
      </p>

      <h3>&quot;Connection refused&quot; or &quot;Server not responding&quot;</h3>
      <p>
        Make sure the AI Memory MCP Server is installed: <code>pip install aimemory-mcp-server</code>. You can test it manually by running <code>aimemory-mcp-server</code> in your terminal.
      </p>

      <h2>Advanced: Using Smithery with Custom Configurations</h2>
      <p>
        If you need custom arguments or environment variables for the AI Memory server, you can edit the configuration after Smithery installs it. For example, to use a custom database path:
      </p>
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-4">
{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server",
      "args": [],
      "env": {
        "AIMEMORY_DB": "/path/to/custom.db"
      }
    }
  }
}`}
      </pre>
      <p>
        Smithery generates the base configuration, and you can customize it further if needed.
      </p>

      <h2>Conclusion: One Command, Persistent AI Memory</h2>
      <p>
        Smithery transforms MCP server setup from a manual, error-prone process into a one-command experience. With <code>npx @smithery/cli install aimemory-mcp-server</code>, you get:
      </p>
      <ul>
        <li>✅ AI Memory MCP Server installed and running</li>
        <li>✅ All your MCP clients auto-configured</li>
        <li>✅ 12 memory tools available in Claude, Cursor, Windsurf, and 113+ other clients</li>
        <li>✅ Persistent, searchable memory across all your AI conversations</li>
      </ul>
      <p>
        Ready to give your AI persistent memory? Visit <Link href="/" className="text-blue-600 hover:underline font-semibold">aimemory.pro</Link> to upload your existing conversations, or run the Smithery command above to get started in 30 seconds.
      </p>
      <p className="mt-4">
        <Link href="https://smithery.ai/server/aimemory-mcp-server" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" target="_blank" rel="noopener">
          View on Smithery →
        </Link>
      </p>
    </BlogLayout>
  );
}
