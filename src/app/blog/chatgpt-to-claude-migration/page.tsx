import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Switching from ChatGPT to Claude: How to Migrate Your Conversations',
  description:
    'Moving from ChatGPT to Claude? Learn how to export your ChatGPT conversations and import them into AI Memory for cross-platform access.',
  keywords: [
    'chatgpt to claude',
    'switch from chatgpt to claude',
    'migrate chatgpt conversations',
    'chatgpt claude comparison',
  ],
  alternates: {
    canonical: 'https://aimemory.pro/blog/chatgpt-to-claude-migration',
  },
};

export default function ChatGPTToClaudeMigration() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I directly import ChatGPT conversations into Claude?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, Claude does not have an import feature for ChatGPT data. The best workaround is to export your ChatGPT conversations and upload them to AI Memory, where you can search and reference them while working in Claude or any other AI platform.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will I lose my ChatGPT conversations if I switch to Claude?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your ChatGPT conversations will remain in your OpenAI account even after switching to Claude. However, they will not be accessible inside Claude. Export your data first using ChatGPT Settings → Data Controls → Export Data and store it in AI Memory for ongoing access.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Claude better than ChatGPT for coding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Claude excels at large-scale code refactors and understanding complex codebases thanks to its 200K token context window. ChatGPT is strong for quick scripting and plugin integration. Many developers use both platforms and keep their full history in AI Memory for cross-platform access.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I transfer my ChatGPT history to Claude?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Go to ChatGPT Settings → Data Controls → Export Data to download a ZIP file of all conversations. Upload this ZIP to AI Memory, which will parse and index every conversation. You can then search your ChatGPT history while working in Claude for seamless context transfer.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between ChatGPT and Claude context windows?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT supports a 128K token context window, while Claude offers 200K tokens. This means Claude can process more information in a single conversation, making it better for analyzing long documents, large codebases, or multi-hour transcripts without losing earlier context.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I search my ChatGPT history while using Claude?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not natively, since each platform is isolated. However, with AI Memory you can keep a browser tab open or use the MCP server to search your full conversation archive while working in Claude. This provides the closest experience to a unified cross-platform AI memory.',
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

          <h1>
            Switching from ChatGPT to Claude? Here&apos;s How to Keep Your
            Conversations
          </h1>
          <p className="text-xl text-gray-600">
            Millions of users are migrating from ChatGPT to Claude — but
            there&apos;s one problem: your conversation history doesn&apos;t
            follow you. Here&apos;s how to fix that.
          </p>

          {/* Why People Switch */}
          <h2>Why People Switch from ChatGPT to Claude</h2>
          <p>
            Claude has rapidly become a top choice for power users. Here are the
            most common reasons people make the switch:
          </p>
          <ul>
            <li>
              <strong>Longer context window</strong> — Claude offers a 200K token
              context window compared to ChatGPT&apos;s 128K. That means you can
              feed entire codebases, long documents, or multi-hour transcripts
              into a single conversation without losing context.
            </li>
            <li>
              <strong>Better reasoning for complex tasks</strong> — Claude excels
              at multi-step reasoning, nuanced analysis, and following intricate
              instructions. For research, legal review, or technical
              problem-solving, many users find Claude&apos;s responses more
              thorough and accurate.
            </li>
            <li>
              <strong>Different strengths across use cases</strong> — Claude
              shines in coding (especially large codebase refactors), in-depth
              analysis, and creative writing with a more natural voice. If your
              work leans toward any of these, Claude may be a better fit.
            </li>
          </ul>

          {/* The Problem */}
          <h2>The Problem: Your ChatGPT History Doesn&apos;t Transfer</h2>
          <p>
            So you&apos;ve decided to switch. But when you open Claude for the
            first time, you realize something frustrating:
          </p>
          <ul>
            <li>
              <strong>Claude has no import feature.</strong> There&apos;s no way
              to upload or paste your ChatGPT conversation history into
              Claude&apos;s interface.
            </li>
            <li>
              <strong>Conversations are platform-locked.</strong> Every AI
              assistant keeps its own walled garden. Your chats live on
              OpenAI&apos;s servers and there&apos;s no cross-platform sync.
            </li>
            <li>
              <strong>You lose all your context and history.</strong> Months or
              years of refined prompts, project context, and important answers
              are suddenly inaccessible when you need them most.
            </li>
          </ul>

          {/* Solution */}
          <h2>Solution: Use AI Memory as Your Cross-Platform Hub</h2>
          <p>
            <Link href="/" className="text-blue-600 underline">
              AI Memory
            </Link>{' '}
            solves this by becoming a universal layer for all your AI
            conversations — regardless of which platform you use.
          </p>

          <h3>Step 1: Export Your Conversations from ChatGPT</h3>
          <p>
            ChatGPT lets you download your entire conversation history as a JSON
            file. Follow our{' '}
            <Link
              href="/blog/export-chatgpt"
              className="text-blue-600 underline"
            >
              complete export guide
            </Link>{' '}
            for detailed instructions.
          </p>

          <h3>Step 2: Upload to AI Memory</h3>
          <p>
            Drag and drop the exported ZIP file (or conversations.json) directly
            into AI Memory. The platform automatically parses, indexes, and makes
            every conversation instantly searchable.
          </p>

          <h3>Step 3: Search Your ChatGPT History While Using Claude</h3>
          <p>
            Now, whenever you&apos;re working in Claude and need context from a
            previous ChatGPT conversation, just search AI Memory. Find the exact
            answer, prompt, or code snippet in seconds — then paste it into your
            Claude session.
          </p>

          <h3>Bonus: Export Claude Conversations Too</h3>
          <p>
            Claude also lets you export your data. Upload your Claude
            conversations to AI Memory as well, and you&apos;ll have a single
            searchable archive of <em>every</em> AI conversation you&apos;ve
            ever had. See our{' '}
            <Link
              href="/blog/export-claude"
              className="text-blue-600 underline"
            >
              Claude export guide
            </Link>
            .
          </p>

          {/* Comparison Table */}
          <h2>ChatGPT vs Claude: Quick Comparison</h2>
          <div className="overflow-x-auto my-8">
            <table className="min-w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-300 font-semibold">
                    Feature
                  </th>
                  <th className="px-4 py-3 border-b border-gray-300 font-semibold">
                    ChatGPT
                  </th>
                  <th className="px-4 py-3 border-b border-gray-300 font-semibold">
                    Claude
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200">
                    Context Window
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">128K tokens</td>
                  <td className="px-4 py-3 border-b border-gray-200">200K tokens</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200">
                    Data Export
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">JSON via Settings</td>
                  <td className="px-4 py-3 border-b border-gray-200">JSON via Settings</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200">
                    Built-in Memory
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    Yes (limited, per-account)
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    No (Projects only)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200">
                    Starting Price
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">Free tier available</td>
                  <td className="px-4 py-3 border-b border-gray-200">Free tier available</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-200">
                    Cross-Platform History
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">❌ No</td>
                  <td className="px-4 py-3 border-b border-gray-200">❌ No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 -mt-4">
            Neither platform supports cross-platform conversation access natively
            — that&apos;s what{' '}
            <Link href="/" className="text-blue-600 underline">
              AI Memory
            </Link>{' '}
            is for.
          </p>

          {/* CTA */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h2 className="text-green-800 mt-0">
              Start Your Cross-Platform Memory
            </h2>
            <p className="text-green-700 mb-4">
              Upload your ChatGPT export today and never lose context when
              switching between AI assistants.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Get Started Free →
            </Link>
          </div>

          {/* FAQ */}
          <h2>Frequently Asked Questions</h2>

          <h3>Can I directly import ChatGPT conversations into Claude?</h3>
          <p>
            No. Claude does not have an import feature for ChatGPT data. The best
            workaround is to upload your exported ChatGPT history to{' '}
            <Link href="/" className="text-blue-600 underline">
              AI Memory
            </Link>
            , where you can search and reference it anytime — even while using
            Claude.
          </p>

          <h3>Will I lose my ChatGPT conversations if I switch to Claude?</h3>
          <p>
            Your ChatGPT conversations will remain in your OpenAI account, but
            they won&apos;t be accessible inside Claude. Export your data first
            (see our{' '}
            <Link
              href="/blog/export-chatgpt"
              className="text-blue-600 underline"
            >
              export guide
            </Link>
            ) and upload it to AI Memory so you always have access.
          </p>

          <h3>Is Claude better than ChatGPT for coding?</h3>
          <p>
            It depends on the task. Claude is excellent at large-scale refactors
            and understanding complex codebases thanks to its 200K context
            window. ChatGPT is strong for quick scripting and has great plugin
            support. Many developers use both — and keep their history in{' '}
            <Link href="/" className="text-blue-600 underline">
              AI Memory
            </Link>
            .
          </p>

          <h3>
            Can I search my ChatGPT history from inside Claude?
          </h3>
          <p>
            Not natively. But with AI Memory, you can keep a browser tab open (or
            use the API) to search your full conversation archive while you work
            in Claude. It&apos;s the closest thing to a unified AI memory across
            platforms.
          </p>

          {/* Related Links */}
          <h2>Related Articles</h2>
          <ul>
            <li>
              <Link
                href="/blog/chatgpt-vs-claude"
                className="text-blue-600 underline"
              >
                ChatGPT vs Claude: Full Comparison
              </Link>
            </li>
            <li>
              <Link
                href="/blog/export-chatgpt"
                className="text-blue-600 underline"
              >
                How to Export Your ChatGPT Conversations
              </Link>
            </li>
            <li>
              <Link
                href="/blog/export-claude"
                className="text-blue-600 underline"
              >
                How to Export Your Claude Conversations
              </Link>
            </li>
            <li>
              <Link
                href="/blog/chatgpt-context-window-limit"
                className="text-blue-600 underline"
              >
                ChatGPT Context Window Limits Explained
              </Link>
            </li>
          </ul>
        </article>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} AI Memory. Your cross-platform
            conversation archive.
          </p>
        </div>
      </footer>
    </div>
  );
}
