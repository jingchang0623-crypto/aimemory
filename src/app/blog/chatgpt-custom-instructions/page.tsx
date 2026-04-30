import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/BlogLayout';

export const metadata: Metadata = {
  title: 'ChatGPT Custom Instructions: Complete Guide with Examples (2026)',
  description: 'Master ChatGPT custom instructions with real examples. Learn how to set up, optimize, and combine custom instructions with memory for better AI conversations.',
  keywords: ['chatgpt custom instructions', 'how to use chatgpt custom instructions', 'chatgpt custom instructions examples', 'chatgpt custom instructions vs memory', 'chatgpt personalized responses', 'chatgpt system prompt'],
  openGraph: {
    title: 'ChatGPT Custom Instructions: Complete Guide with Examples (2026)',
    description: 'Master ChatGPT custom instructions with real examples. Set up, optimize, and combine with memory for better AI conversations.',
    url: 'https://aimemory.pro/blog/chatgpt-custom-instructions',
    type: 'article',
  },
  alternates: {
    canonical: 'https://aimemory.pro/blog/chatgpt-custom-instructions',
  },
};

export default function ChatGPTCustomInstructions() {
  const slug = 'chatgpt-custom-instructions';

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are ChatGPT custom instructions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT custom instructions are persistent preferences you set that tell ChatGPT how to respond to you. They include two fields: "What would you like ChatGPT to know about you?" (context about you) and "How would you like ChatGPT to respond?" (response style preferences). These instructions are applied to every conversation automatically.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I set up custom instructions in ChatGPT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Click your profile icon in the bottom-left corner → Settings → Personalization → Custom Instructions. Toggle it on, then fill in both fields: (1) tell ChatGPT about your background, role, and preferences, and (2) specify how you want responses formatted (tone, length, language, detail level). Save and your instructions apply to all future conversations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between custom instructions and memory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Custom instructions are things you explicitly tell ChatGPT about yourself and how to respond — you control 100% of the content. Memory is what ChatGPT automatically learns from your conversations — it picks up facts, preferences, and patterns without you explicitly telling it. Custom instructions are static (you update them manually), while memory evolves over time. Both work together: custom instructions set the foundation, memory adds learned context.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can custom instructions be used in ChatGPT Team or Enterprise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. ChatGPT Team and Enterprise plans support custom instructions. In workspace environments, each user sets their own personal custom instructions. Admins can also configure workspace-level GPTs with custom instructions for shared team bots. The combination of personal custom instructions and shared workspace GPTs gives teams both individual personalization and consistent team-wide behavior.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do custom instructions work with ChatGPT plugins or GPTs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Custom instructions work with standard ChatGPT conversations. For GPTs (custom versions of ChatGPT), the GPT creator defines the system instructions, but your personal custom instructions can still influence responses. Some GPTs may override certain custom instruction preferences depending on how they were configured by their creator.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do custom instructions interact with AI Memory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Memory and custom instructions serve complementary purposes. Custom instructions tell ChatGPT how to behave in new conversations. AI Memory preserves and searches across all your past conversations from ChatGPT, Claude, DeepSeek, and Gemini — including the context you have built up over months of use. Together, they create a comprehensive personalization layer: custom instructions for behavior, AI Memory for knowledge retention across all platforms.',
        },
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'ChatGPT Custom Instructions: Complete Guide with Examples (2026)',
    description: 'Master ChatGPT custom instructions with real examples and optimization tips.',
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    author: { '@type': 'Organization', name: 'AI Memory' },
    publisher: { '@type': 'Organization', name: 'AI Memory' },
    mainEntityOfPage: 'https://aimemory.pro/blog/chatgpt-custom-instructions',
  };

  return (
    <BlogLayout slug={slug} title="ChatGPT Custom Instructions" category="Guides" date="2026-04-30" readTime="14 min">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <p className="text-lg text-gray-300 mb-8">
        ChatGPT custom instructions let you tell ChatGPT who you are and how you want it to respond — <strong>once</strong>, for every conversation.
        Instead of repeating &quot;I&apos;m a senior developer, keep responses concise with code examples&quot; in every chat, custom instructions do it automatically.
        This guide covers everything: setup, real-world examples, advanced tips, and how to combine custom instructions with <Link href="/blog/chatgpt-memory" className="text-blue-400 hover:text-blue-300">ChatGPT memory</Link> for maximum personalization.
      </p>

      {/* What Are Custom Instructions */}
      <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Are ChatGPT Custom Instructions?</h2>
      <p className="text-gray-300 mb-4">
        Custom instructions are two text fields that tell ChatGPT about you and your preferences. They were introduced in July 2023 and have become one of the most powerful — yet underused — ChatGPT features.
      </p>
      <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-3">The Two Fields</h3>
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-blue-400 font-medium mb-1">Field 1: &quot;What would you like ChatGPT to know about you?&quot;</p>
            <p className="text-gray-400 text-sm">Your role, background, expertise level, projects, tech stack, goals. This gives ChatGPT context about who you are.</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-green-400 font-medium mb-1">Field 2: &quot;How would you like ChatGPT to respond?&quot;</p>
            <p className="text-gray-400 text-sm">Tone, length, format, language, detail level, code style. This controls how ChatGPT communicates with you.</p>
          </div>
        </div>
      </div>

      <p className="text-gray-300 mb-6">
        These instructions are injected into every new conversation as a system-level context. ChatGPT treats them as persistent preferences — not commands — so it will follow them while still being responsive to specific requests that may override them.
      </p>

      {/* How to Set Up */}
      <h2 className="text-2xl font-bold text-white mt-10 mb-4">How to Set Up Custom Instructions (Step by Step)</h2>
      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
          <div>
            <p className="text-white font-medium">Open Settings</p>
            <p className="text-gray-400 text-sm">Click your profile icon in the bottom-left corner of ChatGPT → Settings</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</span>
          <div>
            <p className="text-white font-medium">Navigate to Personalization</p>
            <p className="text-gray-400 text-sm">In the left sidebar, click &quot;Personalization&quot; → &quot;Custom Instructions&quot;</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</span>
          <div>
            <p className="text-white font-medium">Enable Custom Instructions</p>
            <p className="text-gray-400 text-sm">Toggle the switch to &quot;On&quot; to enable the feature</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</span>
          <div>
            <p className="text-white font-medium">Fill in Field 1 — About You</p>
            <p className="text-gray-400 text-sm">Describe your role, expertise, current projects, and what context ChatGPT should know</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</span>
          <div>
            <p className="text-white font-medium">Fill in Field 2 — Response Style</p>
            <p className="text-gray-400 text-sm">Specify tone, format, length, language preferences, and any rules for how ChatGPT should respond</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">6</span>
          <div>
            <p className="text-white font-medium">Save and Test</p>
            <p className="text-gray-400 text-sm">Click Save, then start a new conversation to verify your instructions are working</p>
          </div>
        </div>
      </div>

      {/* Real Examples */}
      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Custom Instructions Examples by Role</h2>
      <p className="text-gray-300 mb-6">
        Here are battle-tested custom instruction templates for different roles. Copy, modify, and use them as starting points.
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">For Software Engineers</h3>
      <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
        <div className="mb-4">
          <p className="text-blue-400 font-medium text-sm mb-2">Field 1 — About You:</p>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-300 text-sm font-mono">I&apos;m a senior full-stack developer with 8 years of experience. My primary stack is TypeScript, React, Next.js, Node.js, and PostgreSQL. I&apos;m currently building a SaaS product for AI conversation management. I prefer production-ready code over toy examples. I&apos;m familiar with design patterns, clean architecture, and distributed systems.</p>
          </div>
        </div>
        <div>
          <p className="text-green-400 font-medium text-sm mb-2">Field 2 — Response Style:</p>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-300 text-sm font-mono">Always provide code examples with TypeScript types. Use modern syntax (ES2022+). Explain trade-offs when there are multiple approaches. Keep explanations concise — I don&apos;t need basics explained. Include error handling in code. When suggesting architectural decisions, consider scalability and maintainability. Format code with proper indentation and comments for non-obvious logic.</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">For Product Managers</h3>
      <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
        <div className="mb-4">
          <p className="text-blue-400 font-medium text-sm mb-2">Field 1 — About You:</p>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-300 text-sm font-mono">I&apos;m a product manager at a B2B SaaS startup. I manage a team of 5 engineers and 2 designers. My focus areas are user growth, retention, and monetization. I use data-driven decision making and need help with PRDs, user research synthesis, competitive analysis, and stakeholder communication.</p>
          </div>
        </div>
        <div>
          <p className="text-green-400 font-medium text-sm mb-2">Field 2 — Response Style:</p>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-300 text-sm font-mono">Be structured and actionable. Use frameworks like RICE, ICE, or Jobs-to-be-Done when relevant. When I ask for analysis, include both qualitative insights and quantitative backing. Format outputs as ready-to-use documents (PRDs, briefs, strategy docs). Challenge my assumptions when you see blind spots. Keep executive summaries at the top.</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">For Data Scientists</h3>
      <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
        <div className="mb-4">
          <p className="text-blue-400 font-medium text-sm mb-2">Field 1 — About You:</p>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-300 text-sm font-mono">I&apos;m a data scientist with a PhD in statistics. I work with Python, pandas, scikit-learn, PyTorch, and SQL daily. My current projects involve NLP, recommendation systems, and time-series forecasting. I&apos;m comfortable with advanced math and prefer rigorous statistical reasoning over heuristics.</p>
          </div>
        </div>
        <div>
          <p className="text-green-400 font-medium text-sm mb-2">Field 2 — Response Style:</p>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-300 text-sm font-mono">Use Python for all code examples. Include type hints. When discussing statistical methods, cite relevant papers or established references. Prefer scikit-learn and PyTorch over TensorFlow. Always consider edge cases, data leakage, and evaluation methodology. When suggesting models, discuss assumptions and limitations. Include visualization code with matplotlib/seaborn when relevant.</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">For Content Writers & Marketers</h3>
      <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
        <div className="mb-4">
          <p className="text-blue-400 font-medium text-sm mb-2">Field 1 — About You:</p>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-300 text-sm font-mono">I&apos;m a content marketer at a B2B tech company. I write blog posts, case studies, email campaigns, and social media content. My audience is technical decision-makers (CTOs, VPs of Engineering). I focus on SEO-driven content strategy and need to balance technical depth with readability.</p>
          </div>
        </div>
        <div>
          <p className="text-green-400 font-medium text-sm mb-2">Field 2 — Response Style:</p>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-300 text-sm font-mono">Write in a professional but conversational tone. Use short paragraphs (2-3 sentences max). Include data points and statistics when available. Suggest SEO-optimized headlines with target keywords. When writing blog posts, include a compelling hook in the first paragraph. Use bullet points and subheadings for scannability. Always include a clear CTA.</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">For Students & Researchers</h3>
      <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
        <div className="mb-4">
          <p className="text-blue-400 font-medium text-sm mb-2">Field 1 — About You:</p>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-300 text-sm font-mono">I&apos;m a graduate student in computer science, researching large language models and AI safety. I&apos;m familiar with transformer architectures, RLHF, and alignment research. I&apos;m writing my thesis and need help with literature reviews, paper writing, and experimental design.</p>
          </div>
        </div>
        <div>
          <p className="text-green-400 font-medium text-sm mb-2">Field 2 — Response Style:</p>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-300 text-sm font-mono">Be precise and academic in tone. Cite specific papers with authors and years when referencing research. Use proper scientific notation for mathematical expressions. When discussing concepts, distinguish between established findings and open questions. Help me think through experimental design by pointing out potential confounds and controls. Format references in APA style.</p>
          </div>
        </div>
      </div>

      {/* Custom Instructions vs Memory */}
      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Custom Instructions vs Memory: What&apos;s the Difference?</h2>
      <p className="text-gray-300 mb-6">
        Many users confuse custom instructions with ChatGPT memory. They serve different purposes and work best together.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Aspect</th>
              <th className="text-left py-3 px-4 text-blue-400 font-medium">Custom Instructions</th>
              <th className="text-left py-3 px-4 text-green-400 font-medium">Memory</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-gray-800">
              <td className="py-3 px-4 font-medium">What it is</td>
              <td className="py-3 px-4">Explicit preferences you set manually</td>
              <td className="py-3 px-4">Facts ChatGPT learns automatically from conversations</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-3 px-4 font-medium">Control</td>
              <td className="py-3 px-4">100% user-controlled</td>
              <td className="py-3 px-4">Auto-generated (you can review and delete)</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-3 px-4 font-medium">Content</td>
              <td className="py-3 px-4">Who you are + how to respond</td>
              <td className="py-3 px-4">Facts, preferences, project details learned over time</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-3 px-4 font-medium">Updates</td>
              <td className="py-3 px-4">Manual — you edit it</td>
              <td className="py-3 px-4">Automatic — evolves with each conversation</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-3 px-4 font-medium">Storage limit</td>
              <td className="py-3 px-4">~1,500 characters per field</td>
              <td className="py-3 px-4">~1,500 words total</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-3 px-4 font-medium">Cross-platform</td>
              <td className="py-3 px-4">ChatGPT only</td>
              <td className="py-3 px-4">ChatGPT only (but AI Memory extends this)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Best for</td>
              <td className="py-3 px-4">Setting baseline behavior and tone</td>
              <td className="py-3 px-4">Accumulating project context and preferences</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-900/30 border border-blue-800 rounded-xl p-6 mb-8">
        <p className="text-blue-300 font-medium mb-2">💡 Pro Tip: Use Both Together</p>
        <p className="text-gray-300 text-sm">
          Custom instructions set your baseline — who you are and how you want responses. Memory builds on top of that with learned context. For maximum personalization, use custom instructions for stable preferences (role, tone, format) and let memory handle evolving context (current projects, recent decisions, specific preferences you&apos;ve mentioned in conversations).
        </p>
      </div>

      {/* Limitations */}
      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Custom Instructions Limitations</h2>
      <p className="text-gray-300 mb-4">
        While powerful, custom instructions have important limitations you should know about:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8 pl-4">
        <li><strong>Character limit:</strong> Each field has a ~1,500 character limit. You can&apos;t write a novel — be concise and prioritize the most important context.</li>
        <li><strong>ChatGPT only:</strong> Custom instructions don&apos;t transfer to Claude, Gemini, DeepSeek, or any other AI platform. If you use multiple AI tools, you need to set up instructions separately on each one.</li>
        <li><strong>No versioning:</strong> There&apos;s no way to save multiple instruction profiles or revert to previous versions. If you change your instructions, the old version is gone.</li>
        <li><strong>Not always followed:</strong> ChatGPT may sometimes ignore or partially follow custom instructions, especially in long conversations where the system prompt&apos;s influence diminishes.</li>
        <li><strong>No programmatic access:</strong> You can only edit custom instructions through the ChatGPT UI. There&apos;s no API to read or update them automatically.</li>
        <li><strong>Lost with new chats:</strong> While custom instructions apply to every new conversation, they don&apos;t carry over the specific context from previous conversations. That&apos;s what memory (and tools like <Link href="/" className="text-blue-400 hover:text-blue-300">AI Memory</Link>) are for.</li>
      </ul>

      {/* Advanced Tips */}
      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Advanced Custom Instructions Tips</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Use Structured Formatting</h3>
      <p className="text-gray-300 mb-4">
        Instead of writing a paragraph, use structured bullet points. ChatGPT follows structured instructions more reliably:
      </p>
      <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700">
        <p className="text-gray-300 text-sm font-mono">
          Context:<br/>
          - Role: Senior DevOps Engineer<br/>
          - Stack: AWS, Terraform, Kubernetes, Python<br/>
          - Team size: 12 engineers<br/><br/>
          Response rules:<br/>
          - Always include IaC examples (Terraform preferred)<br/>
          - Use production-grade patterns (not toy examples)<br/>
          - Include cost estimates when suggesting AWS services<br/>
          - Flag security implications in red<br/>
          - Max response length: 500 words unless I ask for more
        </p>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Define Persona Shortcuts</h3>
      <p className="text-gray-300 mb-4">
        Tell ChatGPT to adopt specific personas when you use trigger words:
      </p>
      <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700">
        <p className="text-gray-300 text-sm font-mono">
          When I say &quot;code review&quot; — act as a strict senior engineer reviewing a PR. Focus on bugs, performance, security, and code style.<br/><br/>
          When I say &quot;brainstorm&quot; — be creative and suggest 5-10 ideas without judgment. Wild ideas welcome.<br/><br/>
          When I say &quot;ELI5&quot; — explain like I&apos;m 5. Use analogies, no jargon.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Set Output Format Preferences</h3>
      <p className="text-gray-300 mb-4">
        Specify default formats for common output types:
      </p>
      <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700">
        <p className="text-gray-300 text-sm font-mono">
          Output format preferences:<br/>
          - Code: Always in TypeScript with types, include imports<br/>
          - Lists: Use numbered lists for steps, bullets for features<br/>
          - Comparisons: Use tables with clear headers<br/>
          - Explanations: TL;DR at top, then details<br/>
          - Emails: Professional tone, max 200 words, bullet points for action items
        </p>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">4. Include Negative Instructions</h3>
      <p className="text-gray-300 mb-4">
        Tell ChatGPT what NOT to do — this is often more effective than positive instructions:
      </p>
      <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700">
        <p className="text-gray-300 text-sm font-mono">
          Don&apos;t:<br/>
          - Start responses with &quot;Sure!&quot; or &quot;Absolutely!&quot;<br/>
          - Apologize unnecessarily<br/>
          - Add disclaimers about being an AI<br/>
          - Use filler phrases like &quot;It&apos;s worth noting that&quot;<br/>
          - Repeat my question back to me
        </p>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">5. Maintain a Custom Instructions Version History</h3>
      <p className="text-gray-300 mb-4">
        Since ChatGPT doesn&apos;t version your instructions, keep a backup. You can use <Link href="/" className="text-blue-400 hover:text-blue-300">AI Memory</Link> to store your custom instruction templates and track how they evolve over time. This way, you can always revert to a previous version or adapt instructions for different contexts.
      </p>

      {/* Combining with AI Memory */}
      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Combining Custom Instructions with AI Memory</h2>
      <p className="text-gray-300 mb-4">
        Custom instructions and <Link href="/" className="text-blue-400 hover:text-blue-300">AI Memory</Link> create a powerful personalization stack:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
          <p className="text-white font-medium mb-2">🎯 Custom Instructions = Your Profile</p>
          <p className="text-gray-400 text-sm">Set once: who you are, your expertise, preferred response style, formatting rules. This is your static identity layer.</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
          <p className="text-white font-medium mb-2">🧠 ChatGPT Memory = Learned Context</p>
          <p className="text-gray-400 text-sm">Auto-accumulated: project details, preferences you&apos;ve mentioned, patterns in your requests. This is your dynamic context layer within ChatGPT.</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
          <p className="text-white font-medium mb-2">🌐 AI Memory = Cross-Platform Knowledge</p>
          <p className="text-gray-400 text-sm">Unified search across ChatGPT, Claude, DeepSeek, Gemini. Never lose context when switching AI tools. Inject relevant memories into any conversation. This is your universal memory layer.</p>
        </div>
      </div>

      <p className="text-gray-300 mb-6">
        The key insight: custom instructions only work within ChatGPT. If you also use Claude for coding, DeepSeek for research, or Gemini for creative work, your personalization is fragmented across platforms. AI Memory bridges this gap by letting you search and inject context from any AI conversation into any other.
      </p>

      <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800 rounded-xl p-6 mb-8">
        <p className="text-white font-medium mb-3">Try AI Memory — Free Chrome Extension</p>
        <p className="text-gray-300 text-sm mb-4">
          Upload your ChatGPT, Claude, or DeepSeek conversations. Search across all your AI chats instantly. Your data stays private — processed in your browser session.
        </p>
        <Link href="/chrome-extension" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors">
          Get the Extension →
        </Link>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-white mt-10 mb-6">Frequently Asked Questions</h2>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Can I have different custom instructions for different conversations?</h3>
          <p className="text-gray-300">No. Custom instructions are global — the same instructions apply to every conversation. You can&apos;t set per-conversation or per-GPT custom instructions from your profile. However, GPT creators can define system instructions for their specific GPTs, which may override your personal custom instructions.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Do custom instructions use up my context window?</h3>
          <p className="text-gray-300">Yes. Custom instructions are injected into the system prompt, which consumes part of your context window. A typical custom instruction uses about 200-500 tokens. In most conversations, this is negligible. But for very long conversations approaching the context limit, it&apos;s worth keeping instructions concise.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Can I share custom instructions with my team?</h3>
          <p className="text-gray-300">Not natively in ChatGPT. Each team member sets their own custom instructions individually. For teams using ChatGPT Team or Enterprise, admins can create shared GPTs with predefined system instructions, but personal custom instructions remain per-user. Consider maintaining a shared document with recommended custom instruction templates for your team.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Why isn&apos;t ChatGPT following my custom instructions?</h3>
          <p className="text-gray-300">Common reasons: (1) Instructions are too vague — be specific. (2) Instructions conflict with the user&apos;s current request — explicit prompts take priority. (3) The conversation is very long — system prompt influence diminishes in long chats. (4) The model update may have changed instruction-following behavior. Try starting a new conversation to test.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Are custom instructions available on ChatGPT free plan?</h3>
          <p className="text-gray-300">Yes, custom instructions are available on all ChatGPT plans including Free, Plus, Team, and Enterprise. This is different from memory, which has more limited availability on the free tier. Check your Settings → Personalization menu to confirm access.</p>
        </div>
      </div>

      {/* Related reading */}
      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Related Guides</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
        <li><Link href="/blog/chatgpt-memory" className="text-blue-400 hover:text-blue-300">ChatGPT Memory: How It Works and Limitations</Link></li>
        <li><Link href="/blog/chatgpt-memory-settings" className="text-blue-400 hover:text-blue-300">ChatGPT Memory Settings: Complete Configuration Guide</Link></li>
        <li><Link href="/blog/how-to-use-chatgpt-memory" className="text-blue-400 hover:text-blue-300">How to Use ChatGPT Memory: Step-by-Step Tutorial</Link></li>
        <li><Link href="/blog/chatgpt-memory-limit" className="text-blue-400 hover:text-blue-300">ChatGPT Memory Limit: What You Need to Know</Link></li>
        <li><Link href="/blog/chatgpt-vs-claude-memory" className="text-blue-400 hover:text-blue-300">ChatGPT vs Claude Memory: Which Is Better?</Link></li>
        <li><Link href="/blog/best-ai-memory-extension-2026" className="text-blue-400 hover:text-blue-300">Best AI Memory Extensions in 2026</Link></li>
        <li><Link href="/blog/chatgpt-workspace-guide" className="text-blue-400 hover:text-blue-300">ChatGPT Workspace Guide for Teams</Link></li>
      </ul>
    </BlogLayout>
  );
}
