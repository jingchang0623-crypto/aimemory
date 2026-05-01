import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Export AI Conversations to Markdown, PDF, or JSON: Best Formats Compared (2026)',
  description:
    'Complete comparison of AI conversation export formats: JSON, Markdown, PDF, and TXT. Learn which format is best for developers, documentation, sharing, and archiving your ChatGPT, Claude, and DeepSeek conversations.',
  keywords: [
    'export ai conversations',
    'ai conversation formats',
    'export chatgpt markdown',
    'export chatgpt pdf',
    'export chatgpt json',
    'ai conversation export format',
    'chatgpt markdown export',
    'chatgpt json export',
    'claude conversation export',
    'ai chat export formats',
  ],
  openGraph: {
    title: 'Export AI Conversations to Markdown, PDF, or JSON: Best Formats Compared (2026)',
    description:
      'Complete comparison of AI conversation export formats: JSON, Markdown, PDF, and TXT. Learn which format is best for developers, documentation, sharing, and archiving.',
    url: 'https://aimemory.pro/blog/export-ai-conversations-formats',
    type: 'article',
  },
  alternates: {
    canonical: 'https://aimemory.pro/blog/export-ai-conversations-formats',
  },
};

export default function ExportAIConversationsFormats() {
  const slug = 'export-ai-conversations-formats';

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best format to export AI conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best format depends on your use case. JSON is best for developers and data backup because it preserves full metadata including timestamps, model info, and conversation structure. Markdown is best for documentation and version control because it is human-readable and editable in any text editor. PDF is best for sharing and printing because it maintains formatting across all devices. TXT is best for lightweight, universal access. For most users, we recommend keeping JSON as your primary backup format and exporting to Markdown or PDF when you need to share or present conversations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I convert ChatGPT JSON exports to Markdown or PDF?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. ChatGPT\'s official data export gives you conversations.json files which you can convert to other formats. You can write a Python or JavaScript script to parse the JSON and generate Markdown or PDF output. Alternatively, you can upload the JSON export to AI Memory, which automatically parses it and lets you export individual conversations as clean Markdown or PDF files with proper formatting, code blocks, and metadata.',
        },
      },
      {
        '@type': 'Question',
        name: 'What information is preserved in a JSON export vs Markdown?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JSON exports preserve everything: message timestamps, model used (e.g., GPT-4o, Claude 3.5), conversation title, message IDs, parent-child relationships between messages, token counts, and system prompts. Markdown exports typically preserve the conversation text, roles (user/assistant), and basic formatting like headers, code blocks, and lists, but may lose timestamps and model metadata. PDF exports focus on visual presentation and typically include formatted text but minimal machine-readable metadata.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I export Claude conversations to Markdown?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Claude does not have a built-in Markdown export feature. You can copy the conversation text manually and paste it into a Markdown editor, which preserves most formatting since Claude uses Markdown natively in its responses. For automated export, use the AI Memory Chrome extension which auto-saves Claude conversations and lets you export them as clean Markdown files. You can also use the Claude API to retrieve conversations programmatically.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is JSON or Markdown better for backing up AI conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JSON is better for backup because it preserves all metadata and can be perfectly re-imported into tools like AI Memory. The data is structured and lossless. Markdown is better for human review and editing but loses some metadata like exact timestamps and model information. The ideal approach is to keep JSON as your archival format (lossless, complete) and use Markdown for day-to-day browsing and documentation. AI Memory lets you do both: import JSON for full-text search, and export as Markdown when needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I batch export multiple AI conversations at once?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, but the method depends on the platform. ChatGPT offers a bulk data export (Settings → Data Controls → Export Data) that downloads all conversations as JSON in a ZIP file. Claude and DeepSeek do not have native bulk export, so you need third-party tools. The AI Memory Chrome extension automatically saves all conversations from ChatGPT, Claude, DeepSeek, and Gemini in real-time, and you can then export any or all of them in your preferred format (JSON or Markdown) from one interface.',
        },
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Export AI Conversations to Markdown, PDF, or JSON: Best Formats Compared (2026)',
    description:
      'Complete comparison of AI conversation export formats: JSON, Markdown, PDF, and TXT for ChatGPT, Claude, and DeepSeek.',
    author: {
      '@type': 'Organization',
      name: 'AI Memory',
      url: 'https://aimemory.pro',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Memory',
      url: 'https://aimemory.pro',
    },
    datePublished: '2026-05-02',
    dateModified: '2026-05-02',
    url: 'https://aimemory.pro/blog/export-ai-conversations-formats',
    mainEntityOfPage: 'https://aimemory.pro/blog/export-ai-conversations-formats',
  };

  return (
    <BlogLayout slug={slug} title="Export AI Conversations: Best Formats Compared" category="Export Guides" date="May 2026" readTime="15 min">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <h1>Export AI Conversations to Markdown, PDF, or JSON: Best Formats Compared (2026)</h1>

      <p className="text-xl text-gray-600">
        When it comes to <strong>exporting AI conversations</strong> from ChatGPT, Claude, DeepSeek, or Gemini, the format you choose matters more than you think. JSON preserves every detail. Markdown keeps things readable and editable. PDF looks polished for sharing. And plain TXT works everywhere. This guide breaks down <strong>every major export format</strong> so you can pick the right one for your workflow.
      </p>

      <p className="text-sm text-gray-500">Last updated: May 2026 · 15 min read</p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
        <h2 className="text-blue-800 mt-0">TL;DR</h2>
        <p className="text-blue-700 mb-0">
          <strong>JSON</strong> is the best format for developers and full backups (lossless metadata). <strong>Markdown</strong> is best for documentation and version control. <strong>PDF</strong> is best for sharing and presenting. <strong>TXT</strong> is best for lightweight, universal access. The ideal workflow: keep JSON backups, use <a href="/" className="underline font-semibold">AI Memory</a> for search, and export to Markdown or PDF on demand.
        </p>
      </div>

      {/* ===== Section 1: JSON Format ===== */}
      <h2>1. JSON Format — The Developer&apos;s Choice</h2>
      <p>
        <strong>JSON (JavaScript Object Notation)</strong> is the native export format for most AI platforms, including ChatGPT&apos;s official data export. When you <strong>export AI conversations as JSON</strong>, you get the complete, structured data with every detail preserved.
      </p>

      <h3>What JSON Exports Include</h3>
      <ul>
        <li>✅ <strong>Full conversation structure</strong> — message IDs, parent-child relationships, branching conversations</li>
        <li>✅ <strong>Timestamps</strong> — exact creation time for every message</li>
        <li>✅ <strong>Model information</strong> — which AI model generated each response (GPT-4o, Claude 3.5, etc.)</li>
        <li>✅ <strong>Token counts</strong> — usage data for cost tracking</li>
        <li>✅ <strong>System prompts</strong> — custom instructions and system messages</li>
        <li>✅ <strong>Conversation metadata</strong> — title, creation date, update date, plugin data</li>
      </ul>

      <h3>JSON Structure Example</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>
{`{
  "title": "Python async debugging help",
  "create_time": "2026-04-28T14:32:00Z",
  "model": "gpt-4o",
  "mapping": {
    "msg_001": {
      "message": {
        "author": { "role": "user" },
        "content": { "parts": ["How do I debug async Python code?"] },
        "create_time": "2026-04-28T14:32:00Z"
      }
    },
    "msg_002": {
      "message": {
        "author": { "role": "assistant" },
        "content": { "parts": ["Here's how to debug async code..."] },
        "create_time": "2026-04-28T14:32:05Z",
        "model": "gpt-4o"
      }
    }
  }
}`}
      </code></pre>

      <h3>When to Use JSON</h3>
      <ul>
        <li>📁 <strong>Full backups</strong> — Complete, lossless archive of all your conversations</li>
        <li>🔧 <strong>Programmatic access</strong> — Parse, filter, and process conversations with code</li>
        <li>🔄 <strong>Data migration</strong> — Import into tools like AI Memory for search and management</li>
        <li>📊 <strong>Analytics</strong> — Track usage patterns, token consumption, and conversation trends</li>
      </ul>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
        <p className="text-yellow-700 mb-0">
          <strong>Drawback:</strong> JSON is not human-readable in its raw form. You need a parser, viewer, or tool like <a href="/" className="underline font-semibold">AI Memory</a> to browse and search JSON exports comfortably.
        </p>
      </div>

      {/* ===== Section 2: Markdown Format ===== */}
      <h2>2. Markdown Format — Best for Documentation</h2>
      <p>
        <strong>Markdown (.md)</strong> strikes the perfect balance between human readability and machine parseability. When you <strong>export AI conversations to Markdown</strong>, you get clean, formatted text that works in virtually any text editor, documentation platform, or code repository.
      </p>

      <h3>Why Markdown is Popular</h3>
      <ul>
        <li>📖 <strong>Human-readable</strong> — Open in any text editor, no special viewer needed</li>
        <li>🔀 <strong>Version-control friendly</strong> — Track changes with Git, compare diffs easily</li>
        <li>📝 <strong>Easy to edit</strong> — Add annotations, remove sections, or restructure content</li>
        <li>🌐 <strong>Universal support</strong> — Renders beautifully on GitHub, Notion, Obsidian, VS Code, and more</li>
        <li>💻 <strong>Code blocks preserved</strong> — Syntax highlighting works when rendered</li>
        <li>📦 <strong>Small file size</strong> — Much smaller than PDF or HTML for the same content</li>
      </ul>

      <h3>Markdown Export Example</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>
{`# Python async debugging help
*Exported from ChatGPT (GPT-4o) on 2026-04-28*

---

**User:** How do I debug async Python code?

**Assistant:** Here's how to debug async code:

\`\`\`python
import asyncio
import logging

logging.basicConfig(level=logging.DEBUG)

async def my_function():
    await asyncio.sleep(1)
    return "done"

asyncio.run(my_function())
\`\`\`

The key tools are...
`}
      </code></pre>

      <h3>When to Use Markdown</h3>
      <ul>
        <li>📚 <strong>Documentation</strong> — Add AI conversations to wikis, knowledge bases, or README files</li>
        <li>🔀 <strong>Git workflows</strong> — Version-control your AI-assisted research and notes</li>
        <li>📝 <strong>Personal notes</strong> — Obsidian, Notion, or any Markdown-based note system</li>
        <li>🤝 <strong>Team sharing</strong> — Share formatted conversations in Slack, Discord, or internal docs</li>
      </ul>

      {/* ===== Section 3: PDF Format ===== */}
      <h2>3. PDF Format — Best for Sharing &amp; Presentations</h2>
      <p>
        <strong>PDF (Portable Document Format)</strong> is the gold standard for sharing documents that need to look the same everywhere. When you <strong>export AI conversations to PDF</strong>, you get a polished, print-ready file that anyone can open.
      </p>

      <h3>Advantages of PDF Export</h3>
      <ul>
        <li>🎨 <strong>Consistent formatting</strong> — Looks identical on every device and operating system</li>
        <li>🖨️ <strong>Print-ready</strong> — Optimized for physical printing with proper page breaks</li>
        <li>💼 <strong>Professional appearance</strong> — Ideal for reports, presentations, and client deliverables</li>
        <li>📧 <strong>Easy sharing</strong> — Attach to emails, upload to shared drives, embed in documents</li>
        <li>🔒 <strong>Read-only</strong> — Content cannot be accidentally modified by recipients</li>
        <li>📱 <strong>Universal viewer</strong> — Every browser, phone, and computer can open PDFs natively</li>
      </ul>

      <h3>When to Use PDF</h3>
      <ul>
        <li>📊 <strong>Client reports</strong> — Present AI-generated analysis in a professional format</li>
        <li>📧 <strong>Email sharing</strong> — Send conversations to colleagues who don&apos;t use AI tools</li>
        <li>🖨️ <strong>Printing</strong> — Physical copies for meetings, workshops, or records</li>
        <li>📋 <strong>Compliance</strong> — Some organizations require PDF documentation of AI interactions</li>
      </ul>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
        <p className="text-yellow-700 mb-0">
          <strong>Drawback:</strong> PDFs are not easily searchable across multiple files, difficult to edit, and lose machine-readable structure. Use PDF for <em>presenting</em>, not for <em>archiving</em>. For the best of both worlds, keep JSON backups and export to PDF only when needed.
        </p>
      </div>

      {/* ===== Section 4: Plain TXT Format ===== */}
      <h2>4. Plain TXT Format — Lightweight &amp; Universal</h2>
      <p>
        <strong>Plain text (.txt)</strong> is the simplest export format. No formatting, no structure — just the raw conversation text. While it loses many features, it has one unbeatable advantage: <strong>it works absolutely everywhere</strong>.
      </p>

      <h3>Advantages of TXT Export</h3>
      <ul>
        <li>⚡ <strong>Tiny file size</strong> — The smallest possible representation of your conversation</li>
        <li>🖥️ <strong>Universal compatibility</strong> — Opens on any device, any operating system, any text editor</li>
        <li>🔍 <strong>Fast search</strong> — Grep, ripgrep, and every search tool works with plain text</li>
        <li>🔧 <strong>Easy processing</strong> — No parser needed; any programming language can read text files</li>
      </ul>

      <h3>When to Use TXT</h3>
      <ul>
        <li>⚡ <strong>Quick reference</strong> — Fast access to conversation content without any viewer</li>
        <li>🔧 <strong>Scripting</strong> — Feed conversations into text processing pipelines</li>
        <li>📱 <strong>Low-resource environments</strong> — When file size or compatibility matters most</li>
        <li>🗄️ <strong>Simple archiving</strong> — Long-term storage where formatting doesn&apos;t matter</li>
      </ul>

      {/* ===== Comparison Table ===== */}
      <h2>JSON vs Markdown vs PDF vs TXT: Format Comparison</h2>
      <p>
        Here&apos;s a side-by-side comparison to help you choose the right <strong>AI conversation export format</strong>:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-3">Feature</th>
              <th className="text-left p-3">JSON</th>
              <th className="text-left p-3">Markdown</th>
              <th className="text-left p-3">PDF</th>
              <th className="text-left p-3">TXT</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-semibold">File Size</td>
              <td className="p-3">Medium-Large</td>
              <td className="p-3">Small</td>
              <td className="p-3">Large</td>
              <td className="p-3">⭐ Smallest</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Metadata Preserved</td>
              <td className="p-3">✅ Full (timestamps, model, tokens)</td>
              <td className="p-3">⚠️ Partial (date, model name)</td>
              <td className="p-3">⚠️ Partial (visible only)</td>
              <td className="p-3">❌ Minimal</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Human-Readable</td>
              <td className="p-3">❌ Needs a viewer</td>
              <td className="p-3">✅ Excellent</td>
              <td className="p-3">✅ Excellent</td>
              <td className="p-3">✅ Good (no formatting)</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Searchable</td>
              <td className="p-3">✅ With tools</td>
              <td className="p-3">✅ Text editors &amp; grep</td>
              <td className="p-3">⚠️ Limited</td>
              <td className="p-3">✅ Grep &amp; any tool</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Editable</td>
              <td className="p-3">⚠️ Needs editor</td>
              <td className="p-3">✅ Any text editor</td>
              <td className="p-3">❌ Read-only</td>
              <td className="p-3">✅ Any text editor</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Code Blocks</td>
              <td className="p-3">✅ Preserved as data</td>
              <td className="p-3">✅ Syntax highlighting</td>
              <td className="p-3">✅ With right tool</td>
              <td className="p-3">❌ Plain text only</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Version Control</td>
              <td className="p-3">⚠️ Verbose diffs</td>
              <td className="p-3">⭐ Clean Git diffs</td>
              <td className="p-3">❌ Binary diffs</td>
              <td className="p-3">✅ Clean diffs</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Sharing</td>
              <td className="p-3">⚠️ Needs viewer</td>
              <td className="p-3">⚠️ Needs renderer</td>
              <td className="p-3">⭐ Universal</td>
              <td className="p-3">✅ Universal</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Re-importable</td>
              <td className="p-3">⭐ Perfect re-import</td>
              <td className="p-3">⚠️ Some data loss</td>
              <td className="p-3">❌ Cannot re-import</td>
              <td className="p-3">❌ Cannot re-import</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Best Use Case</td>
              <td className="p-3">Backup &amp; developers</td>
              <td className="p-3">Documentation &amp; notes</td>
              <td className="p-3">Sharing &amp; presenting</td>
              <td className="p-3">Quick reference</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
        <p className="text-blue-700 mb-0">
          <strong>Our recommendation:</strong> Use <strong>JSON</strong> as your primary archival format. Import it into <a href="/" className="underline font-semibold">AI Memory</a> for full-text search across all conversations. Export to <strong>Markdown</strong> for documentation or <strong>PDF</strong> for sharing when needed.
        </p>
      </div>

      {/* ===== Section 5: How to Export from Different Platforms ===== */}
      <h2>How to Export AI Conversations from ChatGPT, Claude &amp; DeepSeek</h2>
      <p>
        Each AI platform has different export capabilities. Here&apos;s how to <strong>export AI conversations</strong> from the most popular platforms:
      </p>

      <h3>ChatGPT Export</h3>
      <p>
        ChatGPT offers the most comprehensive export options among all AI platforms:
      </p>
      <ol>
        <li><strong>Official bulk export:</strong> Go to <strong>Settings → Data Controls → Export Data</strong>. You&apos;ll receive a ZIP file containing <code>conversations.json</code> with all your conversations. Format: <strong>JSON only</strong>.</li>
        <li><strong>Single conversation share:</strong> Click the share icon (🔗) on any conversation to get a public link. You can then print-to-PDF from the shared page.</li>
        <li><strong>AI Memory extension:</strong> Auto-saves every conversation in real-time and supports export to <strong>JSON</strong> and <strong>Markdown</strong> formats.</li>
      </ol>

      <h3>Claude Export</h3>
      <p>
        Claude (Anthropic) has more limited native export:
      </p>
      <ol>
        <li><strong>Copy conversation:</strong> Select and copy the text manually. Claude&apos;s output is already in Markdown format, so pasting into a .md file preserves structure.</li>
        <li><strong>AI Memory extension:</strong> The best option for Claude — auto-saves all conversations and lets you export as JSON or Markdown.</li>
        <li><strong>API access:</strong> Developers can use the Claude API to retrieve conversation data programmatically.</li>
      </ol>

      <h3>DeepSeek Export</h3>
      <p>
        DeepSeek has the most limited native export:
      </p>
      <ol>
        <li><strong>Copy conversation:</strong> Manual copy-paste is the only native option.</li>
        <li><strong>AI Memory extension:</strong> Auto-saves DeepSeek conversations alongside ChatGPT and Claude conversations. Export to JSON or Markdown from one unified interface.</li>
      </ol>

      {/* ===== Section 6: How AI Memory Handles All Formats ===== */}
      <h2>How AI Memory Handles All Export Formats</h2>
      <p>
        <a href="/" className="text-blue-600 underline font-semibold">AI Memory</a> is designed to be the central hub for all your AI conversations, regardless of platform or format. Here&apos;s how it handles <strong>export AI conversations</strong> across formats:
      </p>

      <h3>Import: Accept All Formats</h3>
      <ul>
        <li>📤 <strong>Upload ChatGPT JSON exports</strong> — Drop your ZIP or JSON file and AI Memory parses every conversation automatically</li>
        <li>📤 <strong>Upload Markdown files</strong> — Import conversations saved in .md format</li>
        <li>📤 <strong>Auto-capture</strong> — The Chrome extension saves ChatGPT, Claude, DeepSeek, and Gemini conversations in real-time as structured JSON</li>
      </ul>

      <h3>Store: Unified &amp; Searchable</h3>
      <ul>
        <li>🔍 <strong>Full-text search</strong> — SQLite FTS5 indexes every word in every message across all platforms</li>
        <li>📂 <strong>Unified interface</strong> — Browse all your AI conversations from one place, regardless of source platform</li>
        <li>🔒 <strong>100% local storage</strong> — Everything stays in your browser. No cloud, no third-party servers</li>
      </ul>

      <h3>Export: Output Any Format</h3>
      <ul>
        <li>📥 <strong>Export as JSON</strong> — Full structured data with metadata for backup or migration</li>
        <li>📥 <strong>Export as Markdown</strong> — Clean, formatted .md files ready for documentation or notes</li>
        <li>📥 <strong>Export as PDF</strong> — Polished, shareable documents with proper formatting and code blocks</li>
      </ul>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
        <h3 className="text-green-800 mt-0">The Best Workflow: Import JSON → Search → Export on Demand</h3>
        <ol className="text-green-700 mb-0">
          <li><strong>Import</strong> all your conversations (JSON from ChatGPT, auto-save from Claude/DeepSeek)</li>
          <li><strong>Search</strong> across everything with full-text search</li>
          <li><strong>Export</strong> individual conversations in the format you need (Markdown for docs, PDF for sharing, JSON for backup)</li>
        </ol>
      </div>

      {/* ===== Section 7: Code Examples ===== */}
      <h2>Processing AI Conversation JSON Exports with Code</h2>
      <p>
        For developers who want to work with their <strong>AI conversation exports</strong> programmatically, here are code examples for parsing ChatGPT&apos;s JSON export format:
      </p>

      <h3>Python: Parse ChatGPT JSON and Convert to Markdown</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>
{`import json
from datetime import datetime

def chatgpt_json_to_markdown(json_path, output_dir="output"):
    """Convert ChatGPT JSON export to individual Markdown files."""
    with open(json_path, "r", encoding="utf-8") as f:
        conversations = json.load(f)

    for conv in conversations:
        title = conv.get("title", "Untitled")
        model = conv.get("default_model_slug", "unknown")
        created = datetime.fromtimestamp(
            conv.get("create_time", 0)
        ).strftime("%Y-%m-%d")

        lines = [f"# {title}\\n"]
        lines.append(f"*Model: {model} | Date: {created}*\\n\\n---\\n")

        # Walk the message mapping in order
        for node_id, node in conv.get("mapping", {}).items():
            msg = node.get("message")
            if not msg:
                continue

            role = msg["author"]["role"]
            content_parts = msg["content"].get("parts", [])
            content = "\\n".join(str(p) for p in content_parts)

            if role == "user":
                lines.append(f"**User:** {content}\\n")
            elif role == "assistant":
                lines.append(f"**Assistant:** {content}\\n")

        safe_title = title[:50].replace("/", "_").replace("\\\\", "_")
        md_content = "\\n".join(lines)

        with open(f"{output_dir}/{safe_title}.md", "w") as out:
            out.write(md_content)

        print(f"Exported: {safe_title}.md")

# Usage
chatgpt_json_to_markdown("conversations.json")`}
      </code></pre>

      <h3>JavaScript: Filter and Search JSON Exports</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>
{`import { readFileSync } from "fs";

/**
 * Search through ChatGPT JSON export for keywords.
 * Returns matching conversations with context.
 */
function searchConversations(jsonPath, query) {
  const conversations = JSON.parse(
    readFileSync(jsonPath, "utf-8")
  );
  const results = [];
  const lowerQuery = query.toLowerCase();

  for (const conv of conversations) {
    const title = conv.title || "Untitled";
    const matches = [];

    for (const node of Object.values(conv.mapping || {})) {
      const msg = node?.message;
      if (!msg?.content?.parts) continue;

      const text = msg.content.parts.join(" ");
      if (text.toLowerCase().includes(lowerQuery)) {
        matches.push({
          role: msg.author.role,
          snippet: text.substring(0, 200),
          timestamp: new Date(
            msg.create_time * 1000
          ).toISOString(),
        });
      }
    }

    if (matches.length > 0) {
      results.push({
        title,
        matchCount: matches.length,
        model: conv.default_model_slug,
        matches: matches.slice(0, 3), // Top 3 matches
      });
    }
  }

  return results.sort((a, b) => b.matchCount - a.matchCount);
}

// Usage
const results = searchConversations(
  "./conversations.json",
  "async python"
);
console.log(\`Found \${results.length} conversations\`);
results.forEach(r => {
  console.log(\`\\n📖 \${r.title} (\${r.matchCount} matches)\`);
  r.matches.forEach(m => console.log(\`  [\${m.role}] \${m.snippet}...\`));
});`}
      </code></pre>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
        <p className="text-blue-700 mb-0">
          <strong>Don&apos;t want to write code?</strong> <a href="/" className="underline font-semibold">AI Memory</a> does all of this automatically — upload your JSON export and get instant full-text search, browsing, and export to Markdown/PDF without writing a single line.
        </p>
      </div>

      {/* ===== CTA ===== */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 my-8">
        <h2 className="text-white mt-0 text-2xl">Try AI Memory — Export Any Format, Search Everything</h2>
        <p className="text-blue-100 mb-4">
          Stop juggling export formats. AI Memory lets you import conversations from ChatGPT, Claude, DeepSeek, and Gemini — then search, browse, and export in JSON, Markdown, or PDF whenever you need. Free, open-source, and 100% private.
        </p>
        <ul className="text-blue-100 mb-4 space-y-1">
          <li>✅ Auto-save all AI conversations in real-time</li>
          <li>✅ Full-text search across every platform</li>
          <li>✅ Export to JSON, Markdown, or PDF on demand</li>
          <li>✅ 100% local — your data never leaves your browser</li>
        </ul>
        <a
          href="/"
          className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Get AI Memory Free →
        </a>
      </div>

      {/* ===== Related Reading ===== */}
      <h2>Related Guides</h2>
      <p>
        Want to learn more about managing your AI conversations? Check out these related guides:
      </p>
      <ul>
        <li>
          <Link href="/blog/export-chatgpt-to-pdf" className="text-blue-600 underline">
            How to Export ChatGPT to PDF — 4 Methods Compared
          </Link>
          <span className="text-gray-500"> — Step-by-step PDF export guide</span>
        </li>
        <li>
          <Link href="/blog/export-chatgpt" className="text-blue-600 underline">
            How to Export ChatGPT Conversations — Complete Guide
          </Link>
          <span className="text-gray-500"> — All export methods explained</span>
        </li>
        <li>
          <Link href="/blog/export-claude" className="text-blue-600 underline">
            How to Export Claude Conversations
          </Link>
          <span className="text-gray-500"> — Claude-specific export guide</span>
        </li>
        <li>
          <Link href="/blog/export-import-ai-chat-history" className="text-blue-600 underline">
            Export &amp; Import AI Chat History Across Platforms
          </Link>
          <span className="text-gray-500"> — Cross-platform migration guide</span>
        </li>
      </ul>

      {/* ===== FAQ ===== */}
      <h2>Frequently Asked Questions</h2>

      <h3>What is the best format to export AI conversations?</h3>
      <p>
        The best format depends on your use case. <strong>JSON</strong> is best for developers and full backups because it preserves every detail including timestamps, model info, and conversation structure. <strong>Markdown</strong> is best for documentation and version control because it&apos;s human-readable and editable. <strong>PDF</strong> is best for sharing and presenting because it looks the same on every device. For most users, we recommend keeping JSON as your primary backup format and exporting to Markdown or PDF when you need to share or present.
      </p>

      <h3>Can I convert ChatGPT JSON exports to Markdown or PDF?</h3>
      <p>
        Yes. You can write a Python or JavaScript script to parse the JSON and generate Markdown or PDF (see code examples above). Alternatively, upload the JSON export to <a href="/" className="text-blue-600 underline">AI Memory</a>, which automatically parses it and lets you export individual conversations as clean Markdown or PDF files with proper formatting, code blocks, and metadata.
      </p>

      <h3>What information is preserved in a JSON export vs Markdown?</h3>
      <p>
        <strong>JSON</strong> preserves everything: message timestamps, model used, conversation title, message IDs, parent-child relationships, token counts, and system prompts. <strong>Markdown</strong> preserves conversation text, roles (user/assistant), and basic formatting like headers, code blocks, and lists, but may lose timestamps and model metadata. <strong>PDF</strong> focuses on visual presentation with minimal machine-readable metadata.
      </p>

      <h3>How do I export Claude conversations to Markdown?</h3>
      <p>
        Claude does not have a built-in Markdown export feature. You can copy the conversation text manually — since Claude uses Markdown natively, pasting into a .md file preserves most formatting. For automated export, use the <a href="/" className="text-blue-600 underline">AI Memory</a> Chrome extension which auto-saves Claude conversations and lets you export them as clean Markdown files.
      </p>

      <h3>Is JSON or Markdown better for backing up AI conversations?</h3>
      <p>
        <strong>JSON</strong> is better for backup because it preserves all metadata and can be perfectly re-imported into tools like <a href="/" className="text-blue-600 underline">AI Memory</a>. The data is structured and lossless. <strong>Markdown</strong> is better for human review and editing but loses some metadata. The ideal approach: keep JSON as your archival format and use Markdown for day-to-day browsing.
      </p>

      <h3>Can I batch export multiple AI conversations at once?</h3>
      <p>
        Yes. ChatGPT offers a bulk data export (<strong>Settings → Data Controls → Export Data</strong>) that downloads all conversations as JSON. Claude and DeepSeek do not have native bulk export, so you need third-party tools. The <a href="/" className="text-blue-600 underline">AI Memory</a> Chrome extension automatically saves all conversations from ChatGPT, Claude, DeepSeek, and Gemini in real-time, and you can export any or all of them in your preferred format from one interface.
      </p>

    </BlogLayout>
  );
}
