import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ChatGPT Conversation Too Long? Here\'s How to Fix It - AI Memory',
  description: 'ChatGPT conversation getting too long and losing context? Learn how to manage long conversations, export them, and search across all your chats with AI Memory.',
  keywords: ['chatgpt conversation too long', 'chatgpt conversation limit', 'chatgpt context window', 'chatgpt context limit', 'chatgpt conversation length limit'],
};

export default function ChatGPTConversationTooLong() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why does ChatGPT forget earlier parts of a conversation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT has a context window limit (128K tokens for GPT-4). When a conversation exceeds this limit, earlier messages fall outside the window and ChatGPT can no longer access them, causing it to "forget" previous instructions and context.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the maximum conversation length for ChatGPT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GPT-4 supports a context window of approximately 128K tokens (roughly 96,000 words). However, performance and attention to older messages degrades well before hitting the hard limit.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I fix ChatGPT losing context in long conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can fix context loss by exporting and starting fresh with a summary, using Custom Instructions for persistent settings, creating a summary prompt, using Projects or GPTs for persistent context, or using AI Memory to maintain cross-conversation context.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I keep ChatGPT conversations searchable after exporting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Tools like AI Memory let you export all your ChatGPT conversations and make them fully searchable, so you never lose important context even after starting new conversations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Custom Instructions persist across ChatGPT conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. ChatGPT Custom Instructions persist across all conversations and do not count against the context window limit. They are an effective way to keep key requirements active without repeating them in every chat.',
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
          <Link href="/" className="text-2xl font-bold text-gray-900">
            🧠 AI Memory
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose lg:prose-xl max-w-none">
          <h1>ChatGPT Conversation Too Long? Here&apos;s How to Fix It</h1>
          <p className="text-xl text-gray-600">
            Your ChatGPT conversation is getting too long and losing context. Here&apos;s what to do.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
            <h2 className="text-red-800 mt-0">🚨 The Problem</h2>
            <p className="text-red-700">
              ChatGPT starts &quot;forgetting&quot; earlier parts of long conversations. 
              You give instructions at the beginning, and by the end it ignores them. 
              This is because ChatGPT has a <strong>context window limit</strong> (128K tokens for GPT-4).
            </p>
          </div>

          <h2>Why ChatGPT Forgets in Long Conversations</h2>
          <ul>
            <li><strong>Context window limit</strong> — GPT-4 can only process ~128K tokens at once</li>
            <li><strong>Early instructions get pushed out</strong> — As conversation grows, older messages fall outside the context window</li>
            <li><strong>Attention degradation</strong> — Even within the window, AI pays less attention to older messages</li>
          </ul>

          <h2>5 Solutions for Long Conversations</h2>

          <h3>1. Export and Start Fresh</h3>
          <p>
            Export your current conversation, then start a new one with a summary of key points. 
            Use <Link href="/" className="text-blue-600 underline">AI Memory</Link> to keep 
            all your conversations searchable.
          </p>

          <h3>2. Use Custom Instructions</h3>
          <p>
            Put your key requirements in ChatGPT&apos;s Custom Instructions so they persist 
            across all conversations.
          </p>

          <h3>3. Create a Summary Prompt</h3>
          <p>
            Ask ChatGPT to summarize the conversation so far, then copy that summary into 
            a new conversation.
          </p>

          <h3>4. Use Projects (Claude) or GPTs (ChatGPT)</h3>
          <p>
            These features let you set persistent context that doesn&apos;t get lost in 
            long conversations.
          </p>

          <h3>5. Use AI Memory for Cross-Conversation Context</h3>
          <p>
            Export all your conversations to <Link href="/" className="text-blue-600 underline">AI Memory</Link> 
            and search across them. Never lose context again.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h2 className="text-green-800 mt-0">✅ Quick Fix</h2>
            <p className="text-green-700 mb-4">
              Export your ChatGPT data and upload to AI Memory. Search across all your 
              conversations instantly — never lose important context again.
            </p>
            <Link 
              href="/" 
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Try AI Memory Free →
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
