import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/BlogLayout';
import FAQJsonLd from '@/components/FAQJsonLd';

export const metadata: Metadata = {
  title: 'RAG for Personal AI Memory: Build Your Own Memory System (2026)',
  description: 'Learn how RAG (Retrieval-Augmented Generation) powers personal AI memory systems. Complete guide to building your own AI memory with vector search, FTS5, and MCP Server.',
  keywords: [
    'rag for personal ai memory',
    'personal rag system',
    'rag ai memory',
    'retrieval augmented generation personal memory',
    'ai memory rag implementation',
    'build personal ai memory system',
    'vector search ai memory',
    'rag vs memory injection',
    'personal knowledge management rag',
    'ai memory retrieval system',
  ],
  alternates: {
    canonical: 'https://aimemory.pro/blog/rag-for-personal-ai-memory',
  },
  openGraph: {
    title: 'RAG for Personal AI Memory: Build Your Own System (2026)',
    description: 'Master RAG for personal AI memory. Learn how retrieval-augmented generation powers modern AI memory systems like AI Memory.',
    url: 'https://aimemory.pro/blog/rag-for-personal-ai-memory',
    type: 'article',
    publishedTime: '2026-05-25',
  },
};

const faq = [
  {
    question: 'What is RAG for personal AI memory?',
    answer: 'RAG (Retrieval-Augmented Generation) for personal AI memory is a technique that combines vector search with large language models to retrieve relevant past conversations and inject them into new AI chats. Instead of relying on the AI\'s limited context window, RAG retrieves semantically similar past conversations and provides them as context.',
  },
  {
    question: 'How does RAG differ from traditional AI memory?',
    answer: 'Traditional AI memory (like ChatGPT\'s built-in memory) uses simple keyword matching or summarizes all past conversations into a single profile. RAG uses semantic vector search to find the most relevant past conversations for each new query, providing more precise and contextual memory retrieval.',
  },
  {
    question: 'Can I build a personal RAG system for free?',
    answer: 'Yes! You can build a personal RAG system using open-source tools. AI Memory provides a ready-to-use solution with FTS5 full-text search (no vector DB required), MCP Server for Claude/Cursor integration, and Chrome Extension for automatic capture — all free and open-source.',
  },
  {
    question: 'What\'s the difference between RAG and memory injection?',
    answer: 'RAG is the retrieval mechanism — it finds relevant past conversations. Memory injection is the delivery mechanism — it puts those retrieved conversations into your new AI chat. AI Memory combines both: RAG-powered search (FTS5 + future vector search) + one-click memory injection to ChatGPT, Claude, DeepSeek, Gemini, and Kimi.',
  },
  {
    question: 'Do I need a vector database for personal AI memory?',
    answer: 'Not necessarily. While vector databases (Pinecone, Weaviate, Qdrant) provide semantic search, you can start with FTS5 full-text search (built into SQLite) for keyword-based retrieval. AI Memory uses FTS5 for fast, lightweight personal memory search. Vector search (hybrid FTS5+vector) is on our P2 roadmap.',
  },
  {
    question: 'How do I connect RAG memory to Claude or Cursor?',
    answer: 'Use the MCP (Model Context Protocol) standard. AI Memory MCP Server provides 12 tools including ai_memory_search, ai_memory_get, and ai_memory_inject. Install with `pip install aimemory-mcp-server` and configure in Claude Desktop, Cursor, or Windsurf for instant RAG-powered memory access.',
  },
];

export default function RAGForPersonalAIMemory() {
  return (
    <BlogLayout
      slug="rag-for-personal-ai-memory"
      title="RAG for Personal AI Memory: Build Your Own Memory System (2026)"
      date="2026-05-25"
      category="Guides"
      readTime="12 min read"
    >
      <FAQJsonLd faqs={faq} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 mb-10 border border-purple-100 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🧠</span>
          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">Technical Guide • 2026</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Build a RAG-Powered Personal AI Memory System
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          RAG (Retrieval-Augmented Generation) is revolutionizing how AI assistants access your past conversations. 
          Learn how to build your own personal AI memory system with vector search, FTS5, and MCP integration.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Try AI Memory Free →
          </Link>
          <Link href="/mcp-server" className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-semibold px-6 py-3 rounded-lg border border-purple-200 dark:border-purple-700 transition">
            MCP Server Setup →
          </Link>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-10">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">📋 Table of Contents</h3>
        <ol className="space-y-2 text-gray-700 dark:text-gray-300">
          <li><a href="#what-is-rag" className="text-purple-600 hover:underline">1. What is RAG (Retrieval-Augmented Generation)?</a></li>
          <li><a href="#rag-vs-traditional" className="text-purple-600 hover:underline">2. RAG vs Traditional AI Memory</a></li>
          <li><a href="#building-rag-system" className="text-purple-600 hover:underline">3. Building a Personal RAG System (Step-by-Step)</a></li>
          <li><a href="#fts5-vs-vector" className="text-purple-600 hover:underline">4. FTS5 vs Vector Search: Which to Choose?</a></li>
          <li><a href="#mcp-integration" className="text-purple-600 hover:underline">5. Connecting RAG to Claude & Cursor via MCP</a></li>
          <li><a href="#ai-memory-implementation" className="text-purple-600 hover:underline">6. AI Memory's RAG Implementation</a></li>
          <li><a href="#faq" className="text-purple-600 hover:underline">7. FAQ</a></li>
        </ol>
      </div>

      {/* Section 1 */}
      <section id="what-is-rag" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          What is RAG (Retrieval-Augmented Generation)?
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <strong>RAG (Retrieval-Augmented Generation)</strong> is an AI architecture that enhances LLM responses by retrieving relevant external data before generating an answer. 
            Instead of relying solely on the model's training data or limited context window, RAG systems:
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
            <ol className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                <span><strong>Retrieve:</strong> Search a knowledge base (your past conversations) for semantically relevant content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                <span><strong>Augment:</strong> Inject the retrieved content into the AI's context window</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                <span><strong>Generate:</strong> The AI generates a response using both the retrieved context and the user's question</span>
              </li>
            </ol>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            For personal AI memory, RAG means your AI assistant can access <strong>all your past conversations</strong> — not just the last 1,500 words. 
            When you ask "What tech stack did I mention last month?", RAG retrieves the relevant conversation and provides it as context.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">🔍 Without RAG</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "I don't have information about conversations from last month. My memory is limited to 1,500 words."
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-green-200 dark:border-green-700 bg-green-50/50 dark:bg-green-900/20">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">✅ With RAG</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Based on your conversation 'Tech Stack Discussion' on April 12, you mentioned: Frontend: React + Next.js 14, Backend: Node.js with Express, Database: PostgreSQL on Railway."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="rag-vs-traditional" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          RAG vs Traditional AI Memory
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Most AI platforms (ChatGPT, Claude) use <strong>traditional memory</strong> — a simple summary of your past interactions stored as a profile. 
            RAG takes a fundamentally different approach:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="text-left p-4 font-bold text-gray-900 dark:text-white">Feature</th>
                  <th className="text-left p-4 font-bold text-gray-900 dark:text-white">Traditional Memory</th>
                  <th className="text-left p-4 font-bold text-green-600 dark:text-green-400">RAG Memory</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="p-4 font-semibold text-gray-900 dark:text-white">Storage</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">Summary profile (1,500 words)</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">Full conversations (unlimited)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900 dark:text-white">Retrieval</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">Keyword matching</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">Semantic vector search</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900 dark:text-white">Platform</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">Platform-locked (ChatGPT only)</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">Cross-platform (5+ platforms)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900 dark:text-white">Freshness</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">Static summary (manual update)</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">Dynamic retrieval (real-time)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900 dark:text-white">Context</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">Generic ("User likes React")</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">Specific ("On April 12, user said...")</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <p className="text-amber-800 dark:text-amber-200 font-semibold mb-2">⚡ Key Insight</p>
            <p className="text-amber-700 dark:text-amber-300 text-sm">
              Traditional memory is like a <strong>static note</strong> ("User prefers React"). RAG memory is like a <strong>smart librarian</strong> — 
              when you ask a question, it finds the exact conversation where you discussed the topic.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="building-rag-system" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          Building a Personal RAG System (Step-by-Step)
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Here's how to build your own personal RAG system for AI memory in 2026. You can use AI Memory (ready-to-use) 
            or build from scratch using these components:
          </p>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                Data Collection (Export Conversations)
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Export your conversations from ChatGPT, Claude, DeepSeek, Gemini, and Kimi. Use their built-in export features or browser extensions.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <code className="text-xs text-gray-600 dark:text-gray-300">
                  ChatGPT: Settings → Data Controls → Export Data<br/>
                  Claude: Profile → Settings → Data Export<br/>
                  DeepSeek: Settings → Export Chat History
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                Data Storage (SQLite + FTS5)
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Store conversations in SQLite with FTS5 (Full-Text Search 5) extension for fast keyword search. No vector database needed for basic RAG.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <code className="text-xs text-gray-600 dark:text-gray-300">
                  CREATE VIRTUAL TABLE conversations USING fts5(title, content, platform);<br/>
                  -- FTS5 provides fast keyword search out of the box
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                Retrieval System (Semantic Search)
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                For basic RAG: Use FTS5 keyword search + BM25 ranking. For advanced RAG: Add vector embeddings (OpenAI embeddings, sentence-transformers) and use cosine similarity.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <code className="text-xs text-gray-600 dark:text-gray-300">
                  // FTS5 search<br/>
                  SELECT * FROM conversations WHERE conversations MATCH 'react next.js';
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                Injection Interface (MCP or Extension)
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Connect your RAG system to AI platforms via MCP Server (for Claude/Cursor) or Chrome Extension (for ChatGPT/DeepSeek web). 
                AI Memory provides both with 12 MCP tools.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <code className="text-xs text-gray-600 dark:text-gray-300">
                  pip install aimemory-mcp-server<br/>
                  # Then configure in Claude Desktop config
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="fts5-vs-vector" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          FTS5 vs Vector Search: Which to Choose?
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Personal AI memory systems can use two types of search: <strong>FTS5 (keyword-based)</strong> and <strong>Vector Search (semantic-based)</strong>. 
            Here's when to use each:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">🔍 FTS5 (Full-Text Search)</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Pros:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Built into SQLite (no extra dependencies)</li>
                  <li>Fast for exact keyword matches</li>
                  <li>BM25 ranking (relevance scoring)</li>
                  <li>Lightweight (perfect for personal use)</li>
                </ul>
                <p className="mt-3"><strong>Cons:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>No semantic understanding</li>
                  <li>"React" won't match "frontend framework"</li>
                </ul>
                <p className="mt-3 text-green-600 dark:text-green-400"><strong>✅ Best for:</strong> Getting started, exact-match searches</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">🧬 Vector Search</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Pros:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Semantic understanding</li>
                  <li>"React" matches "frontend framework"</li>
                  <li>Better for conceptual queries</li>
                  <li>Handles synonyms and related terms</li>
                </ul>
                <p className="mt-3"><strong>Cons:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Needs vector database (Pinecone, Qdrant)</li>
                  <li>Requires embedding model</li>
                  <li>Higher complexity</li>
                </ul>
                <p className="mt-3 text-green-600 dark:text-green-400"><strong>✅ Best for:</strong> Advanced users, semantic queries</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">💡 AI Memory's Approach</p>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              We currently use <strong>FTS5</strong> for fast, lightweight personal memory search. Hybrid FTS5+Vector search is on our roadmap (P2) — 
              this will combine keyword precision with semantic understanding for the best of both worlds.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section id="mcp-integration" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          Connecting RAG to Claude & Cursor via MCP
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            The <strong>Model Context Protocol (MCP)</strong> is the USB-C of AI memory — a standard way to connect AI tools to external data sources. 
            With AI Memory MCP Server, your RAG system connects to 113+ MCP-compatible clients:
          </p>
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="text-gray-400 text-sm mb-2"># Install AI Memory MCP Server</div>
            <code className="text-green-400 text-sm">pip install aimemory-mcp-server</code>
            <div className="text-gray-400 text-sm mt-4 mb-2"># Configure in Claude Desktop config:</div>
            <code className="text-green-400 text-sm">
{`{
  "mcpServers": {
    "ai-memory": {
      "command": "aimemory-mcp-server",
      "args": []
    }
  }
}`}
            </code>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Once configured, you get <strong>12 MCP tools</strong> for RAG-powered memory management:
          </p>
          <div className="grid md:grid-cols-3 gap-3 mb-6">
            {['ai_memory_search', 'ai_memory_get', 'ai_memory_add', 'ai_memory_list', 'ai_memory_update', 'ai_memory_delete', 'ai_memory_inject', 'ai_memory_export', 'ai_memory_tags', 'ai_memory_stats', 'ai_memory_backup', 'ai_memory_restore'].map((tool) => (
              <div key={tool} className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg border border-purple-200 dark:border-purple-700">
                <code className="text-xs text-purple-600 dark:text-purple-400">{tool}</code>
              </div>
            ))}
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-400 p-4 rounded-r-lg">
            <p className="text-green-800 dark:text-green-200 text-sm">
              <strong>Real-world example:</strong> In Claude Desktop, type "Search my memory for React performance tips" → 
              AI Memory MCP Server retrieves relevant conversations → Claude provides an answer with specific quotes from your past discussions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="ai-memory-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">6</span>
          AI Memory's RAG Implementation
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            AI Memory implements a <strong>3-layer RAG architecture</strong> for personal AI memory:
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">📥 Layer 1: Data Capture</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Chrome Extension captures conversations from 5 platforms (ChatGPT, Claude, DeepSeek, Gemini, Kimi) automatically. 
                Also supports manual JSON/ZIP uploads.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-blue-200 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">🔍 Layer 2: RAG Retrieval (FTS5)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                SQLite + FTS5 provides fast full-text search across all your conversations. 
                BM25 ranking ensures most relevant results appear first. Future: Hybrid FTS5+Vector search.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-green-200 dark:border-green-700 bg-green-50/50 dark:bg-green-900/20">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">💉 Layer 3: Memory Injection</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                One-click injection to all 5 platforms via Chrome Extension. For developers: MCP Server provides 12 tools 
                for programmatic memory access from Claude, Cursor, Windsurf, and 113+ MCP clients.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">🚀 Getting Started with AI Memory RAG</h4>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-lg text-sm transition">
                Upload Conversations →
              </Link>
              <Link href="/mcp-server" className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-semibold px-5 py-2 rounded-lg border border-purple-200 dark:border-purple-700 text-sm transition">
                MCP Server Setup →
              </Link>
              <Link href="/chrome-extension" className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-semibold px-5 py-2 rounded-lg border border-purple-200 dark:border-purple-700 text-sm transition">
                Get Extension →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Q: {item.question}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">A: {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Personal AI Memory?</h3>
        <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
          Start with AI Memory — the open-source RAG system for personal AI memory. 
          No vector database required. 5 platforms supported. MCP-ready.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-6 py-3 rounded-lg transition">
            Try Free →
          </Link>
          <Link href="https://pypi.org/project/aimemory-mcp-server/" className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg border border-purple-400 transition">
            View on PyPI →
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}
