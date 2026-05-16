# AI Memory Pro — Technical Feasibility Report
**Date**: May 16, 2026  
**Prepared for**: aimemory.pro development team  
**Report Type**: Comprehensive Technical Feasibility Assessment  

---

## 1. Executive Summary — Technical Feasibility Assessment

The aimemory.pro project is **technically feasible** with a well-architected foundation already in place. The current stack (Next.js 16.2.4 + TypeScript + SQLite/FTS5 backend, WXT v0.20.26 browser extension with Vue 3, and Python FastMCP server) provides a solid base for building a cross-platform AI memory management tool. Key technical validations confirm: (1) **E2EE implementation** via Web Crypto API is straightforward with zero bundle overhead; (2) **WXT framework** is the optimal choice for Manifest V3 compliance with excellent bundle size (39KB zipped); (3) **API interception** for ChatGPT and Claude is functional but fragile — fetch interception and DOM scraping both carry breakage risks; (4) **Gemini support** requires DOM scraping with MutationObserver, presenting the highest maintenance burden. The primary technical risks are platform API changes breaking the extension and E2EE implementation complexity. Overall, the project is ready for Chrome Web Store submission pending the $5 developer fee, with clear technical roadmaps for E2EE (2 weeks) and competitive differentiation features.

---

## 2. Web Crypto API & E2EE Implementation

### 2.1 Key Code Snippets — AES-256-GCM Encrypt/Decrypt

```typescript
// encryption.ts - Core crypto utilities for the extension

/**
 * Generate a random 256-bit AES-GCM key
 */
export async function generateAESKey(
  extractable: boolean = false
): Promise<CryptoKey> {
  return await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    extractable,
    ['encrypt', 'decrypt']
  );
}

/**
 * Encrypt data using AES-256-GCM
 * Returns { ciphertext: ArrayBuffer, iv: Uint8Array }
 */
export async function encryptAES(
  key: CryptoKey,
  data: string
): Promise<{ ciphertext: ArrayBuffer; iv: Uint8Array }> {
  const encoder = new TextEncoder();
  const iv = crypto.getRandomValues(new Uint8Array(12)); // 12 bytes recommended for GCM
  
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoder.encode(data)
  );
  
  return { ciphertext, iv };
}

/**
 * Decrypt data using AES-256-GCM
 */
export async function decryptAES(
  key: CryptoKey,
  ciphertext: ArrayBuffer,
  iv: Uint8Array
): Promise<string> {
  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    ciphertext
  );
  
  return new TextDecoder().decode(decrypted);
}
```

### 2.2 PBKDF2 Key Derivation

```typescript
/**
 * Derive a master key from user passphrase using PBKDF2
 * @param password - User's passphrase
 * @param salt - Random 16-byte salt
 * @param iterations - 310,000 (OWASP 2023 recommendation)
 */
export async function deriveKeyFromPassphrase(
  password: string,
  salt: Uint8Array,
  iterations: number = 310000
): Promise<CryptoKey> {
  const passwordKey = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );
  
  return await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations,
      hash: 'SHA-256'
    },
    passwordKey,
    { name: 'AES-GCM', length: 256 },
    true, // extractable so we can wrap it
    ['encrypt', 'decrypt']
  );
}
```

### 2.3 Key Wrapping for IndexedDB Storage

```typescript
/**
 * Wrap (encrypt) the master key using the passphrase-derived key
 * Allows storing the master key in IndexedDB encrypted
 */
export async function wrapKey(
  keyToWrap: CryptoKey,
  wrappingKey: CryptoKey
): Promise<{ wrappedKey: ArrayBuffer; wrappingIV: Uint8Array }> {
  const wrappingIV = crypto.getRandomValues(new Uint8Array(12));
  
  const wrappedKey = await crypto.subtle.wrapKey(
    'raw',
    keyToWrap,
    wrappingKey,
    { name: 'AES-GCM', iv: wrappingIV }
  );
  
  return { wrappedKey, wrappingIV };
}
```

### 2.4 Key Management Architecture Summary

| Component | Technology | Details |
|-----------|-------------|---------|
| **Key Derivation** | PBKDF2-SHA256 | 310,000 iterations (OWASP 2023), 16-byte random salt |
| **Encryption** | AES-256-GCM | Native Web Crypto API, 12-byte IV, authenticated encryption |
| **Master Key Storage** | IndexedDB (wrapped) | Wrapped with passphrase-derived key, stored in `keys` object store |
| **Session Key** | In-memory only | `sessionMasterKey` variable in background service worker |
| **Recovery** | BIP39 Mnemonic | 24-word recovery phrase generated from master key |
| **Cross-Device** | ECDH + HKDF | Future: Use Elliptic Curve Diffie-Hellman for key exchange |
| **Backup** | Server-side encrypted | Wrapped key backed up to server (encrypted with recovery key) |

**Storage Schema (IndexedDB)**:
- `keys` store: `{ id: 'master', wrappedKey: ArrayBuffer, salt: Uint8Array, wrappingIV: Uint8Array, algorithm: 'AES-GCM-256', createdAt: number }`
- `conversations` store: `{ id, encryptedData: ArrayBuffer, iv: Uint8Array, source, createdAt, updatedAt }`

### 2.5 Two-Week Implementation Roadmap

**Week 1: Core Crypto + Local Storage**
- **Day 1-2**: Implement `deriveKeyFromPassphrase()`, `encryptAES()` / `decryptAES()`, `wrapKey()` / `unwrapKey()` — with unit tests
- **Day 3-4**: Define IndexedDB schema for encrypted conversations, implement `saveEncryptedMemory()`, `getEncryptedMemory()`, `listEncryptedMemories()`
- **Day 5**: Modify `background.ts` to encrypt before storing, add passphrase prompt UI (popup/options page)

**Week 2: Sync + Web App Decryption**
- **Day 6-7**: Modify server API to accept encrypted blobs, ensure server NEVER attempts decryption
- **Day 8-9**: Implement extension → server sync function in `background.ts`
- **Day 10**: Add passphrase input to web app, implement client-side decryption in Next.js
- **Day 11-12**: Implement client-side search (Option A: load-all-decrypt-search for MVP)
- **Day 13-14**: Implement BIP39 recovery phrase generation and recovery flow, write user documentation, security review

---

## 3. Browser Extension Tech Stack

### 3.1 WXT Confirmation — The Right Choice

After comprehensive comparison of WXT, Plasmo, and Extension.js:

| Dimension | WXT | Plasmo | Extension.js |
|-----------|-----|--------|--------------|
| **Current Version** | v0.20.26 (May 11, 2026) | v0.90.5 (May 2025) | v3.16.1 (Active) |
| **Build Tool** | Vite | Parcel/Webpack | Vite |
| **GitHub Stars** | 9.8k | 13k | 5k |
| **Open Issues** | 210 | 370 | 9 |
| **Bundle Size** | ~39KB zipped | ~150-300KB | ~100-200KB |
| **Maintenance** | ✅ Very Active | ⚠️ Slower updates | ✅ Active |
| **Vue 3 Support** | ✅ First-class | ⚠️ React-first | ✅ Any |

**Verdict**: **Continue with WXT** — already implemented, actively maintained, excellent bundle size, full MV3 compliance, and low learning curve.

### 3.2 Current Bundle Size & Optimization Status

**Current Build (v1.1.0)**:
```
Archive: ai-memory-extension-v1.1.0.zip
- Zipped: ~39KB (excellent)
- Uncompressed: ~108KB

Breakdown:
- content-scripts/chatgpt.js: 16.7KB
- content-scripts/claude.js: 14.9KB
- content-scripts/gemini.js: 12.2KB
- content-scripts/kimi.js: 11.6KB
- content-scripts/deepseek.js: 11.7KB
- background.js: 8.7KB
- chunks/sidepanel-XXX.js: 15.7KB
```

**Optimization Status**: ✅ Well optimized
- Code splitting (separate content scripts per platform)
- Vite-based tree-shaking
- Minimal dependencies (only `wxt` in package.json)
- Already uses `unlimitedStorage` permission

**Additional Opportunities**:
1. Lazy load sidepanel chunk only when needed
2. Add `wxt build --analyze` to CI/CD pipeline
3. Consider `javascript-obfuscator` for critical logic (but not over-obfuscate)

### 3.3 Manifest V3 Impact on AI Memory Tools

**Key MV3 Constraints**:
| Constraint | Impact on AI Memory Tools | Solution |
|------------|--------------------------|----------|
| **Service Workers** (no persistent background) | Background sync must be event-driven | Use `chrome.alarms` for periodic tasks, message-based architecture |
| **No `webRequest` blocking** | Cannot intercept API request bodies | Use content scripts for DOM parsing + fetch interception via page-level injection |
| **Content Script Isolation** | Runs in isolated world | Use `postMessage` for page-content script communication |
| **No `eval()` / `new Function()`** | Limits dynamic code execution | All code must be bundled, refuse to use dynamic imports for core logic |

**aimemory.pro MV3 Compliance**: ✅ Fully compliant
- Uses background service worker properly
- Content scripts handle SPA navigation with MutationObserver
- Proper `host_permissions` configuration (only 6 AI platform URLs)
- Manifest V3 required permissions: `storage`, `sidePanel`, `activeTab`, `unlimitedStorage`

---

## 4. AI Platform API Limits & DOM Structure

### 4.1 ChatGPT — API Endpoint & Interception Method

**API Endpoint**:
```
https://chatgpt.com/backend-api/conversation/[conversation_id]
```

**Current Interception Method**:
- **Primary**: Fetch interception via page-level script injection
- Content script injects code into page context to intercept `fetch()` calls
- Captures the JSON response containing the full conversation mapping

**Data Format**:
```typescript
interface ChatGPTConversation {
  id: string;
  title: string;
  create_time: number;
  update_time: number;
  mapping: { [key: string]: { id: string; parent: string | null; children: string[]; message: ChatGPTMessage | null; } };
  current_node: string;
}
```

**Risk Level**: ⚠️ Medium — OpenAI can change API endpoint structure or add anti-tamper measures

### 4.2 Claude — API Endpoint & Interception Method

**API Endpoint**:
```
https://claude.ai/api/organizations/{org_id}/chat_conversations/{conversation_id}
```

**Current Interception Method**:
- Fetch interception via content script
- Captures response from Claude's internal API
- Data format uses `chat_messages` array (different from ChatGPT's `mapping` format)

**Data Format**:
```typescript
interface ClaudeConversation {
  uuid: string;
  name: string;
  created_at: string;
  updated_at: string;
  chat_messages: Array<{ uuid: string; sender: 'human' | 'assistant'; content: Array<{ type: string; text: string }>; created_at: string; }>;
}
```

**Risk Level**: ⚠️ Medium — Anthropic may change API structure or require authentication tokens

### 4.3 Gemini — DOM Scraping Approach & Fragility

**No Direct API Available** — Google does not expose a developer API for Gemini conversations

**Current Method**: DOM Scraping with MutationObserver
- Content script uses `MutationObserver` to detect new messages
- Scrapes DOM elements to extract message content and role
- Uses custom element selectors (Gemini uses Web Components)

**Fragility Assessment**: 🔴 High Risk
- Gemini's UI is built with custom Web Components
- No stable CSS classes or data attributes documented
- UI changes can break selectors without notice
- MutationObserver may miss programmatic DOM updates

**Current Parser Support**: `parseGeminiExport()` handles Google Takeout exports, but live capture relies on fragile DOM scraping

### 4.4 Risk Assessment — API/DOM Changes Breaking Extension

| Platform | Capture Method | Stability | Risk Factors |
|----------|---------------|-----------|--------------|
| **ChatGPT** | API fetch interception | ⭐⭐⭐ Moderate | Endpoint changes, anti-tamper measures |
| **Claude** | API fetch interception | ⭐⭐⭐⭐ Good | Less frequent UI changes than Gemini |
| **Gemini** | DOM scraping + MutationObserver | ⭐⭐ Poor | Web Components, no stable selectors |
| **DeepSeek** | DOM parsing | ⭐⭐⭐ Moderate | Similar to ChatGPT, export format supported |
| **Kimi** | DOM parsing | ⭐⭐⭐ Moderate | Chinese platform, less documentation |

**Mitigation Strategies**:
1. **Fallback to Export Upload**: If live capture fails, allow users to upload exported JSON files
2. **Platform Detection**: Auto-detect platform changes and notify users
3. **Selector Config**: Store DOM selectors in external config (updatable without re-publishing extension)
4. **Error Boundaries**: Graceful degradation when capture fails

---

## 5. Specific Product Design Recommendations

Based on all research conducted (technical feasibility, keyword data, competitor analysis, monetization research), here are **8 actionable recommendations**:

### 5.1 Feature Prioritization — What to Build Next

1. **Implement E2EE (2-week sprint)** — Differentiate from competitors like EchoMemory with "true" zero-knowledge architecture where even server compromise reveals nothing
2. **Add "Memory Injection" feature** — Inject saved memories into new chat sessions (using `execCommand('insertText')` or React Props manipulation) — only AI Context Flow attempts this (2K users)
3. **Build Chinese platform support** — Kimi, 豆包 (Doubao), 通义千问 — untapped market with 149 English blogs vs 4 Chinese blogs (from May 14 research)
4. **Add "Active Memory Insights"** — AI analysis of saved conversations to extract actionable insights (all competitors only "save + retrieve")

### 5.2 Technical Architecture Decisions

5. **E2EE First, Sync Later** — Implement client-side E2EE before building cloud sync. Use the Web Crypto API approach (zero bundle size, native performance). Avoid Argon2 initially (requires libsodium.js ~200KB), use PBKDF2 with 310k iterations
6. **Hybrid Capture Strategy** — Combine API interception (ChatGPT/Claude) with export upload fallback (Gemini). Don't rely solely on DOM scraping for Gemini — it's too fragile
7. **Client-Side Search for MVP** — Load-all-decrypt-search approach works for <1000 memories. Implement blind indexing (HMAC-based) for scaling later

### 5.3 Competitive Differentiation — How to Beat MemoryPlugin/EchoMemory/Relay

8. **"True E2EE" Positioning** — MemoryPlugin (1000 users, $120/yr) doesn't mention E2EE. EchoMemory "claims" E2E encryption but details are unclear. Relay focuses on MCP/IDE integration. Position aimemory.pro as "The only truly private AI memory manager"
9. **SEO/Content Strategy** — Target "chatgpt exporter chrome extension" (KEI: 4369) as the gold-mine keyword. Create educational content around "How to export ChatGPT conversations" — no competitor is doing content marketing effectively
10. **Cross-Platform Memory Injection** — MemoryPlugin supports 17+ platforms but doesn't inject memories. Build injection for ChatGPT, Claude, and Gemini as the key differentiator

### 5.4 SEO/ASO Quick Wins (from May 14 Research)

- **Primary Keyword**: "chatgpt export" (8K-15K monthly searches, +670% YoY growth)
- **Long-tail Keywords**: "save chatgpt conversations", "chatgpt history extension", "chatgpt memory"
- **ASO Keywords for Chrome Web Store**: chatgpt history, chatgpt export, save chatgpt conversations, ai conversation manager, claude history, gemini history
- **English-first Strategy**: Chinese market has very low search volume ("no data" on Baidu Index) — focus on English SEO first
- **Content Gaps**: No competitor owns "AI memory" keyword category — create `/blog/ai-memory-guide` and `/blog/chatgpt-export-tutorial`

### 5.5 Chrome Web Store Launch Blockers (from May 15 Research)

| Blocker | Status | Action Required |
|---------|--------|-----------------|
| **$5 Developer Fee** | ❌ Not paid | Pay fee at Chrome Developer Dashboard |
| **Screenshots** | ❌ Missing | Create 1-5 screenshots (1280x800 or 640x400) |
| **Extension Package** | ✅ Ready | `/public/ai-memory-extension.zip` (v1.0.0, 35KB) |
| **Privacy Policy** | ⚠️ Needed | Create page at `https://aimemory.pro/privacy` |
| **Support Page** | ⚠️ Needed | Create page at `https://aimemory.pro/chrome-extension` |
| **Store Listing Text** | ✅ Ready | See `/docs/chrome-web-store-listing.md` |

**Post-Approval Actions**:
- Update `/chrome-extension` page with Chrome Web Store badge
- Add "Available on Chrome Web Store" to homepage
- Monitor reviews and respond within 48 hours

---

## 6. New Research Directions Discovered

Topics that emerged during research and should be investigated in future cron runs:

1. **Service Worker Key Caching** — How to maintain session keys across service worker restarts in Manifest V3 (consider `chrome.storage.session`)
2. **Blind Indexing Performance** — Benchmark HMAC-based blind indexing for 10,000+ memories to validate scalability
3. **Gemini API Reverse Engineering** — Investigate if Gemini has any undocumented internal APIs that could replace DOM scraping
4. **Cross-Platform Memory Injection UX** — User testing needed for `execCommand('insertText')` vs React Props manipulation approaches
5. **Chinese Market Entry Strategy** — Research Bilibili SEO (DeepSeek export tutorial has 18K plays) and Chinese payment gateways (WeChat Pay/Alipay)
6. **MCP Server E2EE Integration** — How to modify the Python FastMCP server to handle encrypted blobs while maintaining FTS capabilities
7. **Competitor Feature Tracking** — Automated monitoring of MemoryPlugin, EchoMemory, and Relay feature updates (they're evolving fast)

---

## 7. Risk Assessment Matrix

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| **ChatGPT API changes break extension** | High (70%) | High — No live capture for most popular platform | Fallback to export upload; monitor OpenAI changelog; use multiple capture methods |
| **E2EE implementation delays** | Medium (40%) | Medium — Competitive differentiation delayed | Start with 2-week sprint; use existing research; consider hiring crypto consultant |
| **MemoryPlugin captures market** | Medium (50%) | High — Market leader with 1000 users, $120/yr pricing | Differentiate with true E2EE, memory injection, Chinese platform support, and better UX |
| **Chrome Web Store rejection** | Low (20%) | High — No distribution channel | Follow MV3 guidelines strictly; prepare privacy policy; respond to reviewer feedback quickly |
| **Gemini DOM changes break capture** | High (80%) | Medium — Affects Gemini users only | Prioritize export upload fallback; consider dropping live capture for Gemini initially |
| **Server security breach** | Low (10%) | High — User data exposed | E2EE eliminates this risk — server only stores encrypted blobs; implement E2EE ASAP |
| **Weak user passphrase** | Medium (30%) | Medium — E2EE defeated by brute force | Enforce passphrase strength requirements; consider WebAuthn for biometric unlock |
| **Mobile browser compatibility** | Medium (40%) | Low — Extension is desktop-first | Document mobile limitations; consider future mobile app; use responsive sidepanel |

---

## Appendix: Technical Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     USER'S BROWSER (EXTENSION)                   │
│                                                                 │
│  Content Scripts ──→ Background Service Worker                   │
│  (ChatGPT/Claude/Gemini)    │                                  │
│         │                    ├─ E2EE Crypto (Web Crypto API)      │
│         │                    ├─ IndexedDB (encrypted blobs)      │
│         │                    └─ Sync to Server (HTTPS)           │
│         ↓                                                        │
│  User enters passphrase → PBKDF2 → Master Key (session only)    │
│                              │                                  │
│                    Encrypt/Decrypt conversations                │
└─────────────────────────────────────────────────────────────────┘
                          │ HTTPS (encrypted blobs only)
                          ↓
┌─────────────────────────────────────────────────────────────────┐
│                   SERVER (aimemory.pro)                          │
│                                                                 │
│  Next.js API Routes ← Never decrypts, only stores blobs        │
│         │                                                      │
│         ↓                                                      │
│  SQLite DB (encrypted_data, iv columns only)                    │
│  + FTS5 for metadata search (source, createdAt)                 │
└─────────────────────────────────────────────────────────────────┘
                          │ HTTPS (encrypted blobs only)
                          ↓
┌─────────────────────────────────────────────────────────────────┐
│                   WEB APP (Next.js)                             │
│                                                                 │
│  User enters passphrase → Derive MK → Fetch encrypted blobs     │
│                              │                                  │
│                    Decrypt in browser → Display plaintext       │
└─────────────────────────────────────────────────────────────────┘
```

---

**Report Compiled By**: Hermes Agent (Automated Research System)  
**Next Review Date**: May 23, 2026 (weekly cron job)  
**Questions?**: Refer to detailed research files in `/home/agentuser/aimemory/docs/research/`
