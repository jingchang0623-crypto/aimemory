'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import { useState } from 'react';

const tocItems = [
  { id: 'why-backup-all', title: 'Why Backup ALL Your AI Conversations?' },
  { id: 'platform-export-guide', title: 'Platform-by-Platform Export Guide' },
  { id: 'comparison-table', title: 'Export Comparison Table' },
  { id: 'the-problem', title: 'The Problem: 5 Exports, 5 Formats' },
  { id: 'the-solution', title: 'The Solution: AI Memory' },
  { id: 'step-by-step', title: 'Step-by-Step: Upload & Search' },
  { id: 'backup-tips', title: 'Tips for Regular Backups' },
  { id: 'faq', title: 'FAQ' },
];

export default function ExportAllAIConversationsContent() {
  const [activeSection, setActiveSection] = useState('');
  return (
    <>

      <div className="min-h-screen bg-gray-950 text-gray-100">
        {/* Header */}
        <header className="border-b border-gray-800 bg-gray-950/95 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
              🧠 AI Memory
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
              <Link href="/features" className="text-gray-400 hover:text-white transition">Features</Link>
              <Link href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link>
              <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
            </nav>
          </div>
        </header>

        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-blue-400" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className="mx-1">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/blog" className="hover:text-blue-400" itemProp="item">
                <span itemProp="name">Blog</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li className="mx-1">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-gray-300 font-medium">Export All AI Conversations at Once</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <article className="prose prose-invert lg:prose-xl max-w-none">
            <h1 className="text-4xl font-bold text-white mb-4">How to Export All AI Conversations at Once (2026 Guide)</h1>
            <p className="text-gray-400 text-sm mb-8">
              Last updated: May 5, 2026 · 13 min read · Category: Guides
            </p>

            {/* Table of Contents */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
              <h2 className="text-lg font-semibold text-white mt-0 mb-3">📋 Table of Contents</h2>
              <ul className="space-y-2 list-none pl-0">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-blue-400 hover:text-blue-300 text-sm transition"
                      onClick={() => setActiveSection(item.id)}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intro */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              In 2026, most power users don&apos;t stick to just one AI platform. You might use ChatGPT for writing,
              Claude for analysis, DeepSeek for coding, Gemini for research, and Kimi for quick tasks. Each platform
              holds a treasure trove of valuable conversations — but they&apos;re all locked in separate silos.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              What if you need to find that one conversation from three months ago? Was it on ChatGPT or Claude?
              Without a unified backup, you&apos;re forced to search each platform one by one — if they even have
              decent search. This guide shows you exactly how to <strong className="text-white">export all AI conversations at once</strong> from
              every major platform, and then unify them into a single searchable database.
            </p>

            {/* Section 1: Why Backup ALL */}
            <h2 id="why-backup-all" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-20">
              Why You Should Backup ALL Your AI Conversations (Not Just One Platform)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Many users only think about exporting from ChatGPT, their primary AI tool. But this leaves massive
              gaps in your knowledge archive. Here&apos;s why you need to batch export from every platform:
            </p>
            <ul className="text-gray-300 space-y-3 mb-6 list-disc pl-6">
              <li>
                <strong className="text-white">Platform risk:</strong> Services change policies, get acquired, or shut down.
                If you only have conversations on one platform and it disappears, your data is gone forever.
              </li>
              <li>
                <strong className="text-white">Cross-platform insights:</strong> You asked DeepSeek about a code architecture,
                Claude helped you analyze the requirements, and ChatGPT helped write the documentation. These
                conversations are deeply interconnected — but you can only see the full picture when they&apos;re in one place.
              </li>
              <li>
                <strong className="text-white">Search efficiency:</strong> Instead of logging into 5 different platforms and
                searching each one, imagine having a single search bar that queries everything at once.
              </li>
              <li>
                <strong className="text-white">Knowledge continuity:</strong> AI conversations contain your thinking process,
                decision history, and accumulated knowledge. Losing any portion means losing part of your intellectual capital.
              </li>
              <li>
                <strong className="text-white">Compliance and records:</strong> For professionals, having a complete archive of
                AI-assisted work can be important for audits, project retrospectives, and intellectual property records.
              </li>
            </ul>

            {/* Section 2: Platform Export Guide */}
            <h2 id="platform-export-guide" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-20">
              Platform-by-Platform Export Guide
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Each AI platform has a different export process. Here&apos;s the exact step-by-step for every major service
              as of May 2026:
            </p>

            {/* ChatGPT */}
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">ChatGPT (OpenAI)</h3>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <ol className="text-gray-300 space-y-2 list-decimal pl-4">
                <li>Log in to <a href="https://chat.openai.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">chat.openai.com</a></li>
                <li>Click your profile icon in the bottom-left corner</li>
                <li>Navigate to <strong className="text-white">Settings</strong></li>
                <li>Go to <strong className="text-white">Data Controls</strong></li>
                <li>Click <strong className="text-white">Export Data</strong></li>
                <li>Confirm the export request</li>
                <li>Check your email — OpenAI will send a download link (typically within 10-30 minutes)</li>
                <li>Download the ZIP file containing your conversations as JSON</li>
              </ol>
              <p className="text-gray-400 text-sm mt-4">
                <strong>Format:</strong> JSON files inside a ZIP archive &nbsp;|&nbsp;
                <strong>Time:</strong> 10-30 minutes &nbsp;|&nbsp;
                <strong>Includes:</strong> All conversations, messages, code blocks, and metadata
              </p>
            </div>

            {/* Claude */}
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Claude (Anthropic)</h3>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <ol className="text-gray-300 space-y-2 list-decimal pl-4">
                <li>Log in to <a href="https://claude.ai" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">claude.ai</a></li>
                <li>Click your name or avatar in the sidebar</li>
                <li>Go to <strong className="text-white">Settings</strong></li>
                <li>Navigate to the <strong className="text-white">Privacy</strong> section</li>
                <li>Click <strong className="text-white">Export Data</strong></li>
                <li>Confirm the export request</li>
                <li>You&apos;ll receive a download link via email</li>
                <li>Download the JSON archive containing all your conversations</li>
              </ol>
              <p className="text-gray-400 text-sm mt-4">
                <strong>Format:</strong> JSON &nbsp;|&nbsp;
                <strong>Time:</strong> 2-10 minutes &nbsp;|&nbsp;
                <strong>Includes:</strong> All conversations with artifacts, messages, and metadata
              </p>
            </div>

            {/* DeepSeek */}
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">DeepSeek</h3>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <ol className="text-gray-300 space-y-2 list-decimal pl-4">
                <li>Log in to <a href="https://chat.deepseek.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">chat.deepseek.com</a></li>
                <li>Click the menu icon or your profile</li>
                <li>Navigate to <strong className="text-white">Settings</strong></li>
                <li>Go to the <strong className="text-white">Data</strong> section</li>
                <li>Click <strong className="text-white">Export Data</strong></li>
                <li>Wait for the export to be generated</li>
                <li>Download the export file</li>
              </ol>
              <p className="text-gray-400 text-sm mt-4">
                <strong>Format:</strong> JSON &nbsp;|&nbsp;
                <strong>Time:</strong> 5-15 minutes &nbsp;|&nbsp;
                <strong>Includes:</strong> Chat history, reasoning traces, and code outputs
              </p>
            </div>

            {/* Gemini */}
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Gemini (Google)</h3>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <ol className="text-gray-300 space-y-2 list-decimal pl-4">
                <li>Go to <a href="https://takeout.google.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Takeout</a></li>
                <li>Click <strong className="text-white">Deselect all</strong> (to avoid exporting everything from Google)</li>
                <li>Scroll down and find <strong className="text-white">Gemini</strong> or <strong className="text-white">Google AI conversations</strong></li>
                <li>Check the box next to it</li>
                <li>Click <strong className="text-white">Next step</strong></li>
                <li>Choose your export format (ZIP or TGZ), frequency, and destination</li>
                <li>Click <strong className="text-white">Create export</strong></li>
                <li>Wait for the email notification — this can take hours to days</li>
                <li>Download and extract the archive</li>
              </ol>
              <p className="text-gray-400 text-sm mt-4">
                <strong>Format:</strong> MBOX / JSON via Google Takeout &nbsp;|&nbsp;
                <strong>Time:</strong> Hours to days &nbsp;|&nbsp;
                <strong>Includes:</strong> Gemini conversations, prompts, and responses
              </p>
            </div>

            {/* Kimi */}
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Kimi (Moonshot AI)</h3>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <ol className="text-gray-300 space-y-2 list-decimal pl-4">
                <li>Log in to <a href="https://kimi.moonshot.cn" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">kimi.moonshot.cn</a></li>
                <li>Open the sidebar and find <strong className="text-white">Settings</strong></li>
                <li>Navigate to <strong className="text-white">Data Management</strong> or <strong className="text-white">Export</strong></li>
                <li>Request a data export</li>
                <li>Download the export file when ready</li>
              </ol>
              <p className="text-gray-400 text-sm mt-4">
                <strong>Format:</strong> JSON &nbsp;|&nbsp;
                <strong>Time:</strong> 5-15 minutes &nbsp;|&nbsp;
                <strong>Includes:</strong> Chat history and metadata
              </p>
            </div>

            {/* Section 3: Comparison Table */}
            <h2 id="comparison-table" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-20">
              Export Comparison Table
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Here&apos;s a side-by-side comparison of what each platform offers when exporting your conversations:
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-white font-semibold bg-gray-900 rounded-tl-lg">Platform</th>
                    <th className="text-left py-3 px-4 text-white font-semibold bg-gray-900">Export Format</th>
                    <th className="text-left py-3 px-4 text-white font-semibold bg-gray-900">Time Required</th>
                    <th className="text-left py-3 px-4 text-white font-semibold bg-gray-900">Rate Limit</th>
                    <th className="text-left py-3 px-4 text-white font-semibold bg-gray-900 rounded-tr-lg">Key Limitations</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium text-white">ChatGPT</td>
                    <td className="py-3 px-4">JSON (in ZIP)</td>
                    <td className="py-3 px-4">10-30 min</td>
                    <td className="py-3 px-4">1 request / day</td>
                    <td className="py-3 px-4">No images or file attachments</td>
                  </tr>
                  <tr className="border-b border-gray-800 bg-gray-900/30">
                    <td className="py-3 px-4 font-medium text-white">Claude</td>
                    <td className="py-3 px-4">JSON</td>
                    <td className="py-3 px-4">2-10 min</td>
                    <td className="py-3 px-4">No known limit</td>
                    <td className="py-3 px-4">Artifacts may be included as text</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium text-white">DeepSeek</td>
                    <td className="py-3 px-4">JSON</td>
                    <td className="py-3 px-4">5-15 min</td>
                    <td className="py-3 px-4">Unknown</td>
                    <td className="py-3 px-4">Reasoning traces may be truncated</td>
                  </tr>
                  <tr className="border-b border-gray-800 bg-gray-900/30">
                    <td className="py-3 px-4 font-medium text-white">Gemini</td>
                    <td className="py-3 px-4">MBOX / JSON</td>
                    <td className="py-3 px-4">Hours-days</td>
                    <td className="py-3 px-4">2-3 / year</td>
                    <td className="py-3 px-4">Bundled with Google Takeout, slow process</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white rounded-bl-lg">Kimi</td>
                    <td className="py-3 px-4">JSON</td>
                    <td className="py-3 px-4">5-15 min</td>
                    <td className="py-3 px-4">Unknown</td>
                    <td className="py-3 px-4">Limited metadata, Chinese-language UI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 4: The Problem */}
            <h2 id="the-problem" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-20">
              The Problem: 5 Different Exports, 5 Different Formats, No Unified Search
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You&apos;ve exported from every platform. You now have five ZIP files sitting on your desktop. What next?
              This is where most people get stuck:
            </p>
            <ul className="text-gray-300 space-y-3 mb-6 list-disc pl-6">
              <li>
                <strong className="text-white">Incompatible formats:</strong> ChatGPT uses one JSON schema, Claude uses another,
                and Gemini gives you an MBOX email archive. You can&apos;t just open them in the same app and search.
              </li>
              <li>
                <strong className="text-white">No cross-platform search:</strong> Want to find every conversation where you
                discussed &quot;React performance optimization&quot;? You&apos;d need to manually search each export file — or write a
                custom script for each format.
              </li>
              <li>
                <strong className="text-white">Raw JSON is unreadable:</strong> Even if you can open the files, reading through
                raw JSON with nested message arrays, timestamps, and metadata is painful. You need a proper viewer.
              </li>
              <li>
                <strong className="text-white">No ongoing sync:</strong> Even if you manage to unify your data once, there&apos;s no
                built-in way to keep it updated as you have new conversations.
              </li>
              <li>
                <strong className="text-white">Storage chaos:</strong> Five exports means five folders of differently-structured
                files. As you do monthly backups, this becomes increasingly unmanageable.
              </li>
            </ul>
            <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-6 mb-6">
              <p className="text-red-300 font-medium mb-2">⚠️ The Core Issue</p>
              <p className="text-gray-300 text-sm">
                Exporting is only half the battle. Without a tool to unify, parse, index, and search across all formats,
                your exports are just dead files on a hard drive. You need a solution that turns raw exports into
                a living, searchable knowledge base.
              </p>
            </div>

            {/* Section 5: The Solution */}
            <h2 id="the-solution" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-20">
              The Solution: How AI Memory Imports ALL Formats
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <Link href="/" className="text-blue-400 hover:underline">AI Memory</Link> was built specifically to solve this problem.
              It understands the export format of every major AI platform and automatically parses, normalizes, and indexes
              all your conversations into a single unified database.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">Here&apos;s what AI Memory does with your exports:</p>
            <ul className="text-gray-300 space-y-3 mb-6 list-disc pl-6">
              <li>
                <strong className="text-white">Auto-detection:</strong> Upload any export file — ChatGPT ZIP, Claude JSON,
                DeepSeek export, Google Takeout archive, or Kimi data — and AI Memory automatically detects the source
                platform and applies the correct parser.
              </li>
              <li>
                <strong className="text-white">Format normalization:</strong> All conversations are converted into a unified
                internal format, regardless of source. Messages, code blocks, artifacts, and metadata are preserved.
              </li>
              <li>
                <strong className="text-white">Full-text indexing:</strong> Every conversation is indexed for instant full-text
                search. Search for any keyword, phrase, or topic and get results from all platforms simultaneously.
              </li>
              <li>
                <strong className="text-white">Smart tagging:</strong> Conversations are automatically tagged by platform,
                date, topic, and content type (code, writing, analysis, etc.).
              </li>
              <li>
                <strong className="text-white">Memory injection:</strong> Use your archived knowledge in new conversations.
                AI Memory can inject relevant context from your history into any AI chat session.
              </li>
            </ul>

            {/* Section 6: Step by Step */}
            <h2 id="step-by-step" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-20">
              Step-by-Step: Upload All Exports to AI Memory
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Once you&apos;ve exported from all platforms, here&apos;s how to import everything into AI Memory in under 10 minutes:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Step 1: Create Your AI Memory Account</h4>
                <p className="text-gray-300 text-sm">
                  Visit <Link href="/" className="text-blue-400 hover:underline">aimemory.pro</Link> and sign up for a free account.
                  You get generous free tier storage — enough to get started with your first batch import.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Step 2: Go to the Import Section</h4>
                <p className="text-gray-300 text-sm">
                  Navigate to the Import page from your dashboard. You&apos;ll see upload zones for each supported platform:
                  ChatGPT, Claude, DeepSeek, Gemini, and Kimi.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Step 3: Upload Your First Export</h4>
                <p className="text-gray-300 text-sm">
                  Drag and drop your ChatGPT export ZIP file. AI Memory will automatically extract, parse, and index
                  all conversations. You&apos;ll see a progress bar and real-time count of imported conversations.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Step 4: Upload Remaining Exports</h4>
                <p className="text-gray-300 text-sm">
                  Repeat for Claude, DeepSeek, Gemini, and Kimi exports. You can upload multiple files at once.
                  AI Memory processes them in parallel for speed. Each platform&apos;s export is handled by a specialized parser
                  that understands its unique format.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Step 5: Search Across Everything</h4>
                <p className="text-gray-300 text-sm">
                  Once all imports complete, use the universal search bar to query across all your conversations.
                  Filter by platform, date range, or content type. Every result shows the source platform,
                  original date, and conversation context — so you always know where each answer came from.
                </p>
              </div>
            </div>

            <div className="bg-green-950/30 border border-green-900/50 rounded-xl p-6 mb-8">
              <p className="text-green-300 font-medium mb-2">✅ That&apos;s It!</p>
              <p className="text-gray-300 text-sm">
                In about 10 minutes, you&apos;ve gone from five scattered exports across five platforms to a single,
                unified, searchable knowledge base. No scripts, no manual parsing, no headaches.
              </p>
            </div>

            {/* Section 7: Backup Tips */}
            <h2 id="backup-tips" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-20">
              Tips for Maintaining Regular Backups
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Exporting once is great, but the real value comes from regular backups. Here&apos;s how to build a sustainable
              backup routine:
            </p>
            <ul className="text-gray-300 space-y-3 mb-6 list-disc pl-6">
              <li>
                <strong className="text-white">Set a monthly calendar reminder:</strong> On the first of each month,
                spend 20 minutes exporting from all five platforms. Make it a habit like checking your bank statements.
              </li>
              <li>
                <strong className="text-white">Use a consistent folder structure:</strong> Create a folder like
                <code className="bg-gray-800 px-2 py-0.5 rounded text-sm text-blue-300">~/ai-backups/2026-05/</code> for each
                month. Inside, have subfolders for each platform.
              </li>
              <li>
                <strong className="text-white">Upload to AI Memory after each export:</strong> Don&apos;t let exports
                pile up. Upload them to AI Memory immediately so your searchable database is always current.
              </li>
              <li>
                <strong className="text-white">Keep raw exports too:</strong> While AI Memory indexes everything,
                keep the original export files as a secondary backup on an external drive or cloud storage.
              </li>
              <li>
                <strong className="text-white">Check for incomplete exports:</strong> Some platforms have conversation
                limits per export. If you have thousands of conversations, verify that everything was included.
              </li>
              <li>
                <strong className="text-white">Monitor for platform changes:</strong> AI platforms update their export
                features periodically. Follow their changelogs or blog posts so you&apos;re aware of any new options or
                limitations.
              </li>
              <li>
                <strong className="text-white">Label and tag manually when needed:</strong> After importing to AI Memory,
                add custom tags to important conversations that you know you&apos;ll want to reference later.
              </li>
            </ul>

            {/* Section 8: FAQ */}
            <h2 id="faq" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-20">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 mb-10">
              <details className="bg-gray-900 border border-gray-800 rounded-xl group">
                <summary className="p-5 cursor-pointer text-white font-medium hover:text-blue-400 transition">
                  Can I export all AI conversations at once from every platform?
                </summary>
                <p className="px-5 pb-5 text-gray-300 text-sm">
                  No single platform lets you export all AI conversations from every service at once. Each AI platform
                  (ChatGPT, Claude, DeepSeek, Gemini, Kimi) has its own export mechanism. You need to manually export
                  from each platform separately, then use a tool like AI Memory to unify them into one searchable database.
                </p>
              </details>

              <details className="bg-gray-900 border border-gray-800 rounded-xl group">
                <summary className="p-5 cursor-pointer text-white font-medium hover:text-blue-400 transition">
                  What format does each AI platform export conversations in?
                </summary>
                <p className="px-5 pb-5 text-gray-300 text-sm">
                  ChatGPT exports as JSON files inside a ZIP archive. Claude exports conversations as JSON. DeepSeek
                  provides JSON exports from its data controls. Gemini uses Google Takeout which exports in MBOX or
                  JSON format. Kimi exports as JSON. The challenge is that while most use JSON, the schema and
                  structure differ across platforms.
                </p>
              </details>

              <details className="bg-gray-900 border border-gray-800 rounded-xl group">
                <summary className="p-5 cursor-pointer text-white font-medium hover:text-blue-400 transition">
                  How long does it take to batch export AI chats from all platforms?
                </summary>
                <p className="px-5 pb-5 text-gray-300 text-sm">
                  Export times vary by platform. ChatGPT typically takes 10-30 minutes to prepare your export. Claude
                  exports are usually ready within a few minutes. DeepSeek exports are fairly quick. Gemini via Google
                  Takeout can take hours to days depending on your data volume. Kimi exports are typically fast. Budget
                  about 1-2 hours total if you do them all in sequence.
                </p>
              </details>

              <details className="bg-gray-900 border border-gray-800 rounded-xl group">
                <summary className="p-5 cursor-pointer text-white font-medium hover:text-blue-400 transition">
                  How do I search across all my exported AI conversations?
                </summary>
                <p className="px-5 pb-5 text-gray-300 text-sm">
                  Once you have exported your conversations from each platform, you can upload all the export files
                  to AI Memory (aimemory.pro). AI Memory automatically parses every format, unifies the data, and
                  makes all your conversations searchable through a single interface with full-text search.
                </p>
              </details>

              <details className="bg-gray-900 border border-gray-800 rounded-xl group">
                <summary className="p-5 cursor-pointer text-white font-medium hover:text-blue-400 transition">
                  How often should I backup all my AI conversations?
                </summary>
                <p className="px-5 pb-5 text-gray-300 text-sm">
                  We recommend exporting your AI conversations at least once a month, or more frequently if you use
                  AI tools heavily for work. Some platforms may limit how often you can request an export. Setting a
                  monthly calendar reminder to export from all platforms and upload to AI Memory ensures you never
                  lose valuable conversations.
                </p>
              </details>

              <details className="bg-gray-900 border border-gray-800 rounded-xl group">
                <summary className="p-5 cursor-pointer text-white font-medium hover:text-blue-400 transition">
                  Do AI platforms delete old conversations automatically?
                </summary>
                <p className="px-5 pb-5 text-gray-300 text-sm">
                  Most major AI platforms do not automatically delete your conversations, but policies can change.
                  ChatGPT retains conversations indefinitely unless you delete them. Claude stores conversations in
                  your account history. However, platforms can change retention policies, accounts can be compromised,
                  or services can shut down. Regular exports ensure you always have a local backup.
                </p>
              </details>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-950/50 to-gray-900 border border-blue-800/50 rounded-xl p-8 text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to Unify All Your AI Conversations?
              </h3>
              <p className="text-gray-300 mb-6">
                Stop searching across five different platforms. Import all your exports into AI Memory and search
                everything from one place.
              </p>
              <Link
                href="/"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg transition"
              >
                Get Started Free →
              </Link>
            </div>

          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
