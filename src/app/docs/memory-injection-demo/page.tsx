import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Memory Injection Demo — Make AI Remember You | aimemory.pro',
  description: 'Watch how AI Memory injects your saved memories into new conversations automatically. Demo: ChatGPT, Claude, Cursor remember your preferences, projects, and facts across sessions.',
  keywords: ['memory injection demo', 'ai memory injection', 'context injection', 'chatgpt memory injection', 'claude memory context', 'persistent ai memory demo', 'mcp memory injection', 'aimemory demo'],
  openGraph: {
    title: 'Memory Injection Demo — See AI Remember You in Real-Time',
    description: 'Watch how saved memories are automatically injected into new AI conversations. Works with ChatGPT, Claude, Cursor, and 113+ MCP clients.',
    url: 'https://aimemory.pro/docs/memory-injection-demo',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aimemory.pro/docs/memory-injection-demo',
  },
};

export default function MemoryInjectionDemo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Enable Memory Injection in AI Conversations",
            "description": "Step-by-step guide to configure memory injection for Claude Desktop, Cursor, and other MCP-compatible AI tools.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Install AI Memory MCP Server",
                "text": "Run: pip install aimemory-mcp-server"
              },
              {
                "@type": "HowToStep",
                "name": "Configure Claude Desktop/Cursor",
                "text": "Add MCP server configuration to your AI client"
              },
              {
                "@type": "HowToStep",
                "name": "Save Memories via Web App or Extension",
                "text": "Use aimemory.pro web app or Chrome extension to save conversation memories"
              },
              {
                "@type": "HowToStep",
                "name": "Start New Conversation - Memory Auto-Injects",
                "text": "Your saved memories automatically appear in new AI conversations"
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/0 to-transparent" />
          
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Live Demo
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Memory</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Injection</span>
              <br />
              <span className="text-3xl sm:text-4xl text-slate-300 font-normal">in Action</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
              Watch how AI Memory automatically injects your saved memories into new conversations. 
              No more repeating yourself — your AI remembers you.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#demo"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-colors"
              >
                Watch Demo
              </Link>
              <Link
                href="/mcp-server"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium border border-slate-700 transition-colors"
              >
                Get MCP Server
              </Link>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-white">How It </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Works</span>
            </h2>

            {/* Step 1: Save Memories */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white">Save Your Memories</h3>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300 mb-4">
                  Use the <Link href="/" className="text-blue-400 hover:text-blue-300">Web App</Link> or 
                  {' '}<Link href="/chrome-extension" className="text-blue-400 hover:text-blue-300">Chrome Extension</Link> to save important facts:
                </p>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400 mb-2">✓ Saved Memories:</div>
                  <div className="text-slate-300 space-y-1">
                    <div>• &quot;User prefers TypeScript over JavaScript&quot;</div>
                    <div>• &quot;Working on aimemory.pro - AI memory tool&quot;</div>
                    <div>• &quot;Team uses Linear for project management&quot;</div>
                    <div>• &quot;Located in San Francisco, PST timezone&quot;</div>
                    <div>• &quot;Favorite AI model: Claude Sonnet 4&quot;</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Configure MCP */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white">Connect via MCP Server</h3>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300 mb-4">Install and configure the MCP server:</p>
                
                <div className="mb-4">
                  <div className="text-sm text-slate-400 mb-2">Terminal:</div>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400">
                    pip install aimemory-mcp-server
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-slate-400 mb-2">Claude Desktop Config (~/.claude/claude_desktop_config.json):</div>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-slate-300 overflow-x-auto">
                    {`{
  "mcpServers": {
    "aimemory": {
      "command": "aimemory-mcp",
      "args": []
    }
  }
}`}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-slate-400 mb-2">Cursor Config (~/.cursor/mcp.json):</div>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-slate-300 overflow-x-auto">
                    {`{
  "mcpServers": {
    "aimemory": {
      "command": "aimemory-mcp",
      "args": []
    }
  }
}`}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Memory Injection */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center font-bold text-white">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white">Memory Auto-Injects Into New Chats</h3>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300 mb-4">
                  When you start a new conversation, AI Memory&apos;s MCP server provides relevant memories as context:
                </p>

                {/* Simulated Chat Interface */}
                <div className="bg-slate-900 rounded-lg p-4 space-y-4">
                  <div className="text-xs text-slate-500 text-center border-b border-slate-800 pb-2">
                    New Conversation Started — Claude Sonnet 4
                  </div>

                  {/* System Message (Memory Injection) */}
                  <div className="bg-blue-950/50 border border-blue-900/50 rounded-lg p-3">
                    <div className="text-xs text-blue-400 mb-2">🔵 Context from AI Memory (auto-injected):</div>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div><span className="text-slate-500">→</span> User prefers TypeScript over JavaScript</div>
                      <div><span className="text-slate-500">→</span> Working on aimemory.pro - AI memory tool</div>
                      <div><span className="text-slate-500">→</span> Team uses Linear for project management</div>
                      <div><span className="text-slate-500">→</span> Located in San Francisco, PST timezone</div>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold">
                      U
                    </div>
                    <div className="flex-1">
                      <div className="bg-slate-800 rounded-lg p-3 text-sm text-slate-200">
                        &quot;Can you help me write a function to search conversations?&quot;
                      </div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-sm font-bold">
                      AI
                    </div>
                    <div className="flex-1">
                      <div className="bg-slate-800 rounded-lg p-3 text-sm text-slate-200">
                        <span className="text-green-400 text-xs">✓ Remembers context</span>
                        <br /><br />
                        &quot;I see you&apos;re working on aimemory.pro and prefer TypeScript. 
                        Here&apos;s a TypeScript function to search conversations using SQLite FTS...&quot;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Works Everywhere */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center font-bold text-white">
                  4
                </div>
                <h3 className="text-2xl font-bold text-white">Works Across 113+ AI Tools</h3>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <p className="text-slate-300 mb-6">
                  Memory injection works with any MCP-compatible client:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[
                    'Claude Desktop', 'Cursor', 'Windsurf', 'Continue.dev',
                    'ChatGPT (via plugin)', 'Zed', 'VS Code + Copilot', 'Emacs',
                    'Neovim', 'Claude Code', 'Open WebUI', 'Hermes Agent',
                    'Obsidian + MCP', 'Logseq + MCP', 'And 99+ more...'
                  ].map((tool) => (
                    <div key={tool} className="bg-slate-900 rounded-lg p-3 text-sm text-slate-300 text-center border border-slate-800">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Technical Behind-the-Scenes
            </h2>

            <div className="space-y-8">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">How Memory Injection Works</h3>
                <ol className="space-y-3 text-slate-300 list-decimal list-inside">
                  <li>You save a memory via Web App or Chrome Extension</li>
                  <li>Memory is stored in your local SQLite database (or cloud sync if Pro)</li>
                  <li>MCP server exposes memories via <code className="text-blue-400">search_memory</code> and <code className="text-blue-400">get_all_memories</code> tools</li>
                  <li>When you chat, the AI client calls these tools and receives relevant memories</li>
                  <li>Memories are injected as context — the AI &quot;remembers&quot; you automatically</li>
                </ol>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">MCP Tools Available</h3>
                <div className="space-y-4">
                  {[
                    { name: 'search_memory', desc: 'Search saved memories by keyword. Returns relevant matches with context.' },
                    { name: 'save_memory', desc: 'Save a new memory (fact, preference, project note) to your database.' },
                    { name: 'get_all_memories', desc: 'Retrieve all saved memories, optionally filtered by tag or date.' },
                    { name: 'delete_memory', desc: 'Remove a memory by ID. Useful for cleaning up outdated info.' },
                  ].map((tool) => (
                    <div key={tool.name} className="bg-slate-900 rounded-lg p-4">
                      <div className="font-mono text-blue-400 text-sm mb-1">{tool.name}</div>
                      <div className="text-sm text-slate-400">{tool.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Privacy & Security</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>All memories stored locally by default (SQLite on your machine)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>MCP server runs locally — no data sent to external servers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>Optional E2EE cloud sync (Pro feature) — server cannot read your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>You control which memories are injected — tag and filter support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Make Your AI Remember You?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Get started in 10 seconds. Install the MCP server, save your first memory, and watch your AI remember you across every conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/mcp-server"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium text-lg transition-colors"
              >
                Get MCP Server (Free)
              </Link>
              <Link
                href="/chrome-extension"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium text-lg border border-slate-700 transition-colors"
              >
                Install Chrome Extension
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              Open-source • Local-first • Works with 113+ AI tools
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
