import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Export Claude Memory: Complete Guide to Claude Memory Export',
  description: 'Learn how to export Claude memory and backup your AI conversations. Claude\'s experimental memory export feature explained, plus how to use AI Memory for permanent storage.',
  keywords: ['claude memory export', 'export claude memory', 'claude memory backup', 'claude ai memory', 'claude conversation export', 'anthropic claude memory', 'claude memory tool'],
  alternates: {
    canonical: 'https://aimemory.pro/blog/claude-memory-export',
  },
};

export default function ClaudeMemoryExport() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I export Claude memories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Claude offers experimental memory export through Settings → Personalization → Memory. You can view and export memories, though the feature is still in development. For comprehensive backup including conversations, use Claude\'s data export feature (Settings → Privacy → Export Data) combined with AI Memory for parsing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I export my Claude conversation history?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To export Claude conversations: 1) Go to Settings → Privacy → Export Data, 2) Request your data export, 3) Download the ZIP file when ready. The export contains conversations in JSON format. Use AI Memory to parse and search your exported Claude data instantly.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Claude\'s memory limit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Claude\'s memory limit varies by plan. Claude Pro users get expanded memory compared to free users. Unlike ChatGPT\'s strict 1,500-word limit, Claude\'s memory is more flexible but still has practical limits. Exporting regularly ensures you never lose important context.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I backup Claude memory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Backup Claude memory by: 1) Using Claude\'s built-in memory export (Settings → Personalization → Memory), 2) Requesting a full data export (Settings → Privacy → Export Data), 3) Uploading to AI Memory for permanent, searchable storage across all your AI platforms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I import Claude memories into ChatGPT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Direct import isn\'t supported, but you can use AI Memory to store Claude conversations and then inject relevant context into ChatGPT using Memory Injection. This gives you cross-platform memory access without vendor lock-in.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Claude memory export free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Claude memory export and data export are free features available to all Claude users. The export process may take a few hours for large conversation histories.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose lg:prose-xl max-w-none">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

          <h1>How to Export Claude Memory: Complete Guide</h1>
          <p className="text-xl text-gray-600">
            Claude&apos;s memory feature helps Anthropic&apos;s AI remember your preferences, projects, and context. But like ChatGPT, Claude&apos;s memory has limits and no built-in permanent backup. Here&apos;s how to export Claude memory and protect your AI context.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 mt-0">💡 Claude Memory Export is Experimental</h2>
            <p className="text-blue-700 mb-0">
              Claude&apos;s memory feature (sometimes called &quot;Project Memory&quot;) is newer than ChatGPT&apos;s and still experimental. The export options are limited but improving. For comprehensive backup, combine Claude&apos;s data export with AI Memory for permanent, searchable storage.
            </p>
          </div>

          <h2>Method 1: Claude&apos;s Built-in Memory Export</h2>
          <p>
            Claude offers experimental memory access through its settings:
          </p>
          <ol>
            <li>Open Claude and go to <strong>Settings</strong></li>
            <li>Navigate to <strong>Personalization</strong> or <strong>Memory</strong></li>
            <li>Look for memory settings or &quot;View Memories&quot;</li>
            <li>Export or copy your memories manually</li>
          </ol>
          <p>
            <strong>Limitation:</strong> This method may not capture all memories and the interface varies by Claude version. For users with extensive Claude history, a full data export is more reliable.
          </p>

          <h2>Method 2: Full Claude Data Export</h2>
          <p>
            For comprehensive backup including all conversations:
          </p>
          <ol>
            <li>Open Claude and go to <strong>Settings</strong></li>
            <li>Navigate to <strong>Privacy</strong> or <strong>Data Controls</strong></li>
            <li>Click <strong>&quot;Export Data&quot;</strong> or &quot;Download your data&quot;</li>
            <li>Confirm the export request</li>
            <li>Wait for the email (typically within 24 hours)</li>
            <li>Download the ZIP file containing your Claude data</li>
          </ol>
          <p>
            The export includes your conversation history in structured format. While Claude&apos;s export format differs from ChatGPT&apos;s, AI Memory can parse both automatically.
          </p>

          <h2>Method 3: Use AI Memory for Claude Backup</h2>
          <p>
            <Link href="/" className="text-blue-600 underline">AI Memory</Link> provides the most powerful way to manage your Claude memory:
          </p>
          <ul>
            <li><strong>One-click import</strong> — upload your Claude export and everything is parsed automatically</li>
            <li><strong>Full-text search</strong> — instantly find any conversation or detail</li>
            <li><strong>Cross-platform</strong> — Claude + ChatGPT + DeepSeek + Gemini + Kimi in one place</li>
            <li><strong>Memory Injection</strong> — inject Claude memories into ChatGPT and vice versa</li>
            <li><strong>MCP Server</strong> — connect Claude Desktop directly to your memory database</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
            <p className="text-green-700 mb-0">
              <strong>Pro Tip:</strong> AI Memory&apos;s MCP Server lets Claude Desktop directly search your stored memories from all platforms — giving Claude persistent memory beyond Anthropic&apos;s limits.
            </p>
          </div>

          <h2>Claude Memory vs ChatGPT Memory</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Feature</th>
                  <th className="border p-3 text-left">Claude</th>
                  <th className="border p-3 text-left">ChatGPT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Memory Limit</td>
                  <td className="border p-3">Variable by plan</td>
                  <td className="border p-3"><strong>1,500 words</strong></td>
                </tr>
                <tr>
                  <td className="border p-3">Memory Export</td>
                  <td className="border p-3">Experimental</td>
                  <td className="border p-3">Limited</td>
                </tr>
                <tr>
                  <td className="border p-3">Data Export</td>
                  <td className="border p-3"><strong>Yes</strong></td>
                  <td className="border p-3"><strong>Yes</strong></td>
                </tr>
                <tr>
                  <td className="border p-3">Memory Types</td>
                  <td className="border p-3">Project-based</td>
                  <td className="border p-3">Preferences + Facts</td>
                </tr>
                <tr>
                  <td className="border p-3">Custom Instructions</td>
                  <td className="border p-3">Yes (Projects)</td>
                  <td className="border p-3">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Why Export Claude Memory?</h2>
          <p>
            Even with Claude&apos;s flexible memory, there are important reasons to export:
          </p>
          <ul>
            <li><strong>Account protection</strong> — If you lose account access, memories are gone</li>
            <li><strong>Platform independence</strong> — Your context shouldn&apos;t be locked to one AI</li>
            <li><strong>Memory limits</strong> — Claude&apos;s memory isn&apos;t unlimited</li>
            <li><strong>Cross-platform use</strong> — Use Claude insights in ChatGPT or other tools</li>
            <li><strong>Version history</strong> — Track how your preferences evolve over time</li>
          </ul>

          <h2>Using Claude Desktop with MCP Server</h2>
          <p>
            For Claude Desktop users, AI Memory offers a powerful integration:
          </p>
          <ol>
            <li>Install AI Memory&apos;s <Link href="/mcp-server" className="text-blue-600 underline">MCP Server</Link></li>
            <li>Add the server to Claude Desktop&apos;s configuration</li>
            <li>Claude can now search your entire conversation history</li>
          </ol>
          <p>
            This gives Claude persistent memory that survives sessions and isn&apos;t limited by Anthropic&apos;s constraints — your own knowledge base that Claude can query.
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-4">
            <h3 className="text-purple-800 mt-0">Claude Desktop MCP Config</h3>
            <pre className="bg-purple-100 p-3 rounded text-sm overflow-x-auto">
{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server"
    }
  }
}`}
            </pre>
          </div>

          <h2>Frequently Asked Questions</h2>

          <h3>Can I import Claude memories into ChatGPT?</h3>
          <p>
            Direct import isn&apos;t supported by either platform. However, AI Memory&apos;s <strong>Memory Injection</strong> feature lets you inject relevant Claude context into ChatGPT prompts with one click. This gives you cross-platform memory without vendor lock-in.
          </p>

          <h3>Is Claude memory export free?</h3>
          <p>
            Yes, Claude memory export and data export are free features available to all Claude users. The export process typically completes within 24 hours.
          </p>

          <h3>How often should I export Claude data?</h3>
          <p>
            <strong>Weekly</strong> for heavy users, <strong>monthly</strong> for moderate users, and <strong>immediately</strong> before any account changes. Using AI Memory automates this — just upload new exports as you create them.
          </p>

          <h3>What&apos;s included in Claude&apos;s data export?</h3>
          <p>
            Claude&apos;s export includes your conversation history, settings, and any stored preferences. The format is JSON-based and can be parsed by AI Memory for searchable storage.
          </p>

          <h3>Can I use Claude memory on mobile?</h3>
          <p>
            Claude&apos;s mobile app has limited memory features. For full memory management and export, use the web interface. AI Memory works on any device with a browser.
          </p>

          <h2>Related Articles</h2>
          <ul>
            <li><Link href="/blog/export-claude" className="text-blue-600 underline">How to Export Claude Conversations</Link></li>
            <li><Link href="/blog/claude-memory" className="text-blue-600 underline">Complete Guide to Claude Memory</Link></li>
            <li><Link href="/blog/chatgpt-memory-backup" className="text-blue-600 underline">ChatGPT Memory Export & Backup Guide</Link></li>
            <li><Link href="/blog/mcp-server-guide" className="text-blue-600 underline">MCP Server Setup Guide</Link></li>
            <li><Link href="/blog/chatgpt-vs-claude-memory" className="text-blue-600 underline">ChatGPT vs Claude Memory Comparison</Link></li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h2 className="text-green-800 mt-0">Protect Your Claude Memory Today</h2>
            <p className="text-green-700 mb-4">
              Don&apos;t lose your Claude context. Export your data to AI Memory and get permanent, searchable storage with cross-platform access.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Start Free with AI Memory →
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
