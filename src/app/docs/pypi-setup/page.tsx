import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'PyPI Publishing Setup Guide - AI Memory MCP Server | aimemory.pro',
  description: 'Step-by-step guide to configure PyPI trusted publishing for aimemory-mcp-server. Complete the setup in 3 minutes.',
  openGraph: {
    title: 'PyPI Publishing Setup Guide - AI Memory MCP Server',
    description: 'Step-by-step guide to configure PyPI trusted publishing for aimemory-mcp-server.',
    url: 'https://aimemory.pro/docs/pypi-setup',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aimemory.pro/docs/pypi-setup',
  },
};

export default function PyPISetupGuide() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        {/* Header */}
        <header className="border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
            <Link href="/" className="text-lg font-bold hover:text-blue-400 transition">🧠 AI Memory</Link>
            <nav className="flex gap-6 text-sm text-gray-400">
              <Link href="/mcp-server" className="hover:text-white transition">MCP Server</Link>
              <Link href="/docs/mcp" className="hover:text-white transition">Docs</Link>
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-12">
          {/* Title */}
          <div className="mb-12">
            <span className="text-sm text-blue-400 font-medium">📋 Distribution Guide</span>
            <h1 className="text-3xl font-bold mt-2 mb-4">PyPI Publishing Setup Guide</h1>
            <p className="text-gray-400 text-lg">Configure PyPI trusted publishing to enable <code className="text-blue-400 bg-gray-800 px-2 py-0.5 rounded">pip install aimemory-mcp-server</code></p>
            <p className="text-gray-500 mt-2">⏱️ 3 minutes • 🔒 Uses GitHub Actions (no API token needed)</p>
          </div>

          {/* Status */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-10">
            <h2 className="text-lg font-semibold mb-3">📊 Current Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-lg">✅</span>
                <div>
                  <div className="text-sm font-medium">Package Built</div>
                  <div className="text-xs text-gray-500">v1.4.0 in dist/ (11.9KB)</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-lg">✅</span>
                <div>
                  <div className="text-sm font-medium">GitHub Actions Workflow</div>
                  <div className="text-xs text-gray-500">.github/workflows/publish-pypi.yml</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-lg">✅</span>
                <div>
                  <div className="text-sm font-medium">Published on PyPI</div>
                  <div className="text-xs text-gray-500">v1.5.0 • <a href="https://pypi.org/project/aimemory-mcp-server/" target="_blank" className="text-blue-400 hover:underline">pypi.org/project/aimemory-mcp-server</a></div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Setup Steps</h2>

            {/* Step 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <h3 className="text-lg font-semibold">Create PyPI Account (if needed)</h3>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                <li>Go to <a href="https://pypi.org/account/register/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">pypi.org/account/register</a></li>
                <li>Create an account with email <code className="text-blue-400 bg-gray-800 px-1.5 py-0.5 rounded text-sm">hello@aimemory.pro</code></li>
                <li>Verify your email address</li>
                <li>Enable 2FA (recommended but not required for trusted publishing)</li>
              </ol>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <h3 className="text-lg font-semibold">Configure Trusted Publishing</h3>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                <li>Go to <a href="https://pypi.org/manage/account/publishing/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">pypi.org/manage/account/publishing</a></li>
                <li>Click <strong>&quot;Add a new pending publisher&quot;</strong></li>
                <li>Fill in the form with these values:</li>
              </ol>
              <div className="mt-4 bg-gray-950 rounded-lg p-4 font-mono text-sm space-y-1">
                <p><span className="text-gray-500">PyPI Project Name:</span> <span className="text-green-400">aimemory-mcp-server</span></p>
                <p><span className="text-gray-500">Owner:</span> <span className="text-green-400">jingchang0623-crypto</span></p>
                <p><span className="text-gray-500">Repository:</span> <span className="text-green-400">aimemory</span></p>
                <p><span className="text-gray-500">Workflow name:</span> <span className="text-green-400">publish.yml</span></p>
                <p><span className="text-gray-500">Environment name:</span> <span className="text-green-400">(leave blank)</span></p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <h3 className="text-lg font-semibold">Trigger Publishing</h3>
              </div>
              <p className="text-gray-300 mb-4">After trusted publishing is configured, publish by either:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-950 rounded-lg p-4">
                  <h4 className="font-medium text-sm mb-2">Option A: Create a GitHub Release</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-400 text-sm">
                    <li>Go to GitHub repo → Releases</li>
                    <li>Click &quot;Draft a new release&quot;</li>
                    <li>Tag: <code className="text-blue-400">v1.4.0</code> (or higher)</li>
                    <li>Publish → Actions runs automatically</li>
                  </ol>
                </div>
                <div className="bg-gray-950 rounded-lg p-4">
                  <h4 className="font-medium text-sm mb-2">Option B: Manual Workflow Dispatch</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-400 text-sm">
                    <li>Go to repo → Actions tab</li>
                    <li>Select &quot;Publish to PyPI&quot; workflow</li>
                    <li>Click &quot;Run workflow&quot; button</li>
                    <li>Branch: <code className="text-blue-400">main</code></li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                <h3 className="text-lg font-semibold">Verify Installation</h3>
              </div>
              <p className="text-gray-300 mb-3">After publishing succeeds, verify with:</p>
              <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
                <p className="text-green-400">$ pip install aimemory-mcp-server</p>
                <p className="text-green-400">$ aimemory-mcp-server</p>
                <p className="text-gray-500"># Should output: &quot;AI Memory MCP Server running on stdio...&quot;</p>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-red-400 mb-2">Error: &quot;invalid-publisher&quot;</h3>
                <p className="text-gray-300 text-sm">The trusted publisher configuration doesn&apos;t match the GitHub Actions workflow. Double-check:</p>
                <ul className="list-disc list-inside text-gray-400 text-sm mt-2 ml-4">
                  <li>Owner matches exactly: <code className="text-blue-400">jingchang0623-crypto</code></li>
                  <li>Repository matches exactly: <code className="text-blue-400">aimemory</code></li>
                  <li>Workflow filename matches: <code className="text-blue-400">publish.yml</code></li>
                  <li>Environment name is blank (not &quot;production&quot; or anything else)</li>
                </ul>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-red-400 mb-2">Error: &quot;project already exists&quot;</h3>
                <p className="text-gray-300 text-sm">Someone already claimed the package name on PyPI. You may need to file a name dispute or choose a different package name.</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-red-400 mb-2">Package not showing on PyPI</h3>
                <p className="text-gray-300 text-sm">PyPI may take a few minutes to index. Check the GitHub Actions run logs for errors. If it succeeded, search for &quot;aimemory-mcp-server&quot; on <a href="https://pypi.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">pypi.org</a>.</p>
              </div>
            </div>
          </div>

          {/* Post-publish checklist */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">✅ Post-Publish Checklist</h2>
            <div className="bg-green-950 border border-green-800 rounded-lg p-6">
              <p className="text-green-400 font-medium mb-3">The following items have been completed for the PyPI launch:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✅</span>
                  <span className="text-gray-300">MCP Server page: Updated to show <code className="text-blue-400">pip install aimemory-mcp-server</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✅</span>
                  <span className="text-gray-300">Homepage: Updated install command from GitHub URL to <code className="text-blue-400">pip install aimemory-mcp-server</code> with link to PyPI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✅</span>
                  <span className="text-gray-300">README.md: Add PyPI badge and update install instructions (see below)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✅</span>
                  <span className="text-gray-300">Docs: Updated MCP docs page with PyPI link</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">⏳</span>
                  <span className="text-gray-300">GitHub Actions: Configure Trusted Publishing for automated future releases</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <Link href="/docs/mcp" className="text-blue-400 hover:underline">← Back to MCP Documentation</Link>
            <span className="text-gray-600 mx-4">|</span>
            <Link href="/mcp-server" className="text-blue-400 hover:underline">MCP Server Page →</Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
