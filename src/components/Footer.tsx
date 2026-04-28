import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="/chrome-extension" className="hover:text-white transition">Chrome Extension</Link></li>
              <li><Link href="/docs/mcp" className="hover:text-white transition">MCP Server</Link></li>
              <li><Link href="/changelog" className="hover:text-white transition">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/blog/export-chatgpt" className="hover:text-white transition">Export ChatGPT</Link></li>
              <li><Link href="/blog/export-claude" className="hover:text-white transition">Export Claude</Link></li>
              <li><Link href="/blog/export-deepseek" className="hover:text-white transition">Export DeepSeek</Link></li>
              <li><Link href="/blog/mcp-server-guide" className="hover:text-white transition">MCP Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Compare</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/chat-memo-vs-ai-memory" className="hover:text-white transition">vs Chat Memo</Link></li>
              <li><Link href="/blog/chatgpt-vs-claude" className="hover:text-white transition">ChatGPT vs Claude</Link></li>
              <li><Link href="/blog/best-ai-conversation-manager-2026" className="hover:text-white transition">Best AI Manager</Link></li>
              <li><Link href="/blog/chatgpt-memory-alternative" className="hover:text-white transition">Memory Alternatives</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
            <div className="mt-6">
              <Link href="/" className="text-white text-lg font-bold hover:text-blue-400 transition">🧠 AI Memory</Link>
              <p className="text-xs text-gray-500 mt-1">Your conversations, searchable forever.</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>© 2026 AI Memory. Built for developers, researchers, and anyone who talks to AI.</p>
        </div>
      </div>
    </footer>
  );
}
