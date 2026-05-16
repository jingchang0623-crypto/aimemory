# End-to-End Encryption (E2EE) Implementation Report
## For aimemory.pro Browser Extension + Web App

**Date**: May 16, 2026  
**Prepared for**: aimemory.pro development team  
**Purpose**: Comprehensive technical guidance for implementing E2EE in a Chrome extension + web app that stores AI conversation memories.

---

## Executive Summary

This report provides a complete technical blueprint for implementing end-to-end encryption (E2EE) in the aimemory.pro ecosystem. The current architecture stores all data in plaintext SQLite on the server. After E2EE implementation, the server will only ever see encrypted blobs — even server compromise cannot reveal user conversation data.

**Key Recommendations**:
- Use **Web Crypto API** (native, zero bundle size) for all cryptographic operations
- **PBKDF2-SHA256** with 310,000 iterations for key derivation (OWASP 2023 recommendation)
- **AES-256-GCM** for authenticated encryption of conversation data
- **IndexedDB** for storing encrypted data in the extension
- **Client-side search** with progressive enhancement (load-all-decrypt-search for MVP)
- **BIP39 recovery phrases** for key escrow
- **ECDH + HKDF** for future cross-device sync

---

## 1. Web Crypto API Implementation

### 1.1 Available Operations in Chrome Extensions

The Web Crypto API (`window.crypto.subtle`) is fully available in:
- **Content scripts**: YES (runs in page context)
- **Service Workers (Manifest V3)**: YES (background.ts context)
- **Popup/Options pages**: YES
- **Web App (Next.js)**: YES (standard web context)

**Important**: `crypto.subtle` is only available in **secure contexts** (HTTPS or localhost/extensions).

### 1.2 AES-256-GCM Encryption/Decryption

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

### 1.3 PBKDF2 Key Derivation

```typescript
/**
 * Derive a master key from user passphrase using PBKDF2
 * @param password - User's passphrase
 * @param salt - Random 16-byte salt (store alongside the wrapped key)
 * @param iterations - 310,000 (OWASP 2023 recommendation for PBKDF2-SHA256)
 */
export async function deriveKeyFromPassphrase(
  password: string,
  salt: Uint8Array,
  iterations: number = 310000
): Promise<CryptoKey> {
  // Step 1: Import the password as a raw key for PBKDF2
  const passwordKey = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );
  
  // Step 2: Derive the master key using PBKDF2
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

### 1.4 Key Wrapping (for storing the master key encrypted by passphrase)

```typescript
/**
 * Wrap (encrypt) the master key using the passphrase-derived key
 * This allows storing the master key in IndexedDB encrypted
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

/**
 * Unwrap (decrypt) the master key using the passphrase-derived key
 */
export async function unwrapKey(
  wrappedKey: ArrayBuffer,
  wrappingKey: CryptoKey,
  wrappingIV: Uint8Array
): Promise<CryptoKey> {
  return await crypto.subtle.unwrapKey(
    'raw',
    wrappedKey,
    wrappingKey,
    { name: 'AES-GCM', iv: wrappingIV },
    { name: 'AES-GCM', length: 256 },
    false, // not extractable for security
    ['encrypt', 'decrypt']
  );
}
```

### 1.5 Service Worker vs Content Script Context

| Operation | Service Worker | Content Script | Web Page |
|-----------|---------------|----------------|----------|
| `crypto.subtle.encrypt` | ✅ Yes | ✅ Yes | ✅ Yes |
| `crypto.subtle.decrypt` | ✅ Yes | ✅ Yes | ✅ Yes |
| `crypto.subtle.deriveKey` | ✅ Yes | ✅ Yes | ✅ Yes |
| `crypto.subtle.generateKey` | ✅ Yes | ✅ Yes | ✅ Yes |
| `indexedDB.open()` | ✅ Yes (Chrome 110+) | ✅ Yes | ✅ Yes |
| DOM APIs (window, document) | ❌ No | ✅ Yes | ✅ Yes |

**Recommendation**: Perform all crypto operations in the **service worker** (background.ts) for security isolation. The service worker context doesn't have access to DOM, reducing attack surface.

---

## 2. Key Management Architecture

### 2.1 Zero-Knowledge Design Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     USER'S DEVICE                            │
│                                                             │
│  Passphrase ──→ PBKDF2 ──→ Master Key (MK)                 │
│                   310,000 iterations                         │
│                        │                                    │
│            ┌───────────┴───────────┐                        │
│            ↓                       ↓                        │
│    Encryption Key (EK)      Recovery Key (RK)               │
│    (HKDF from MK)          (BIP39 from MK)                  │
│            │                       │                        │
│            ↓                       ↓                        │
│    Encrypt conversation      Backup to server                │
│    data before upload       (encrypted with RK)              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                          │
                          │ Encrypted blobs only
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                   SERVER (aimemory.pro)                      │
│                                                             │
│  NEVER sees: Passphrase, MK, EK, or plaintext data          │
│  Only stores: encrypted blobs, wrapped keys, BIP39 backup   │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Key Derivation Strategy

**Iteration Count**: **310,000** (OWASP 2023 recommendation for PBKDF2-SHA256)
- OWASP previously recommended 600,000+ but later clarified 310,000 is sufficient for SHA-256
- Bitwarden uses 600,000 iterations (as of 2023)
- 1Password uses 100,000 + additional hardening

**Salt**: 16 bytes (128 bits) of `crypto.getRandomValues()`
- Store the salt alongside the wrapped key in IndexedDB
- Unique per user, per device

### 2.3 Where to Store the Derived Key

**Recommended Storage Architecture**:

| Key Type | Storage Location | Extractable? | Persistence |
|----------|-----------------|--------------|-------------|
| Master Key (MK) | Memory only (session) | No | Session-based |
| Wrapped MK | IndexedDB (`keys` store) | N/A (wrapped) | Persistent |
| Salt | IndexedDB (`keys` store) | N/A | Persistent |
| Session Token | `sessionStorage` or memory | N/A | Session-based |

**Implementation**:

```typescript
// storage.ts (extension) - Key storage schema
interface KeyStorageSchema {
  id: 'master';                    // Single master key entry
  wrappedKey: ArrayBuffer;          // MK wrapped with passphrase-derived key
  salt: Uint8Array;                // PBKDF2 salt
  wrappingIV: Uint8Array;          // IV used for wrapping
  algorithm: 'AES-GCM-256';
  createdAt: number;
  passphraseHint?: string;         // Optional hint (NOT stored server-side)
}

// In-memory session cache (background.ts)
let sessionMasterKey: CryptoKey | null = null;

export function getSessionKey(): CryptoKey | null {
  return sessionMasterKey;
}

export function setSessionKey(key: CryptoKey): void {
  sessionMasterKey = key;
}

export function clearSessionKey(): void {
  sessionMasterKey = null;
}
```

### 2.4 Key Escrow & Recovery

**Option A: BIP39 Mnemonic (Recommended)**
```
Master Key (256 bits) → BIP39 encode → 24-word recovery phrase
                      ↑
              User writes down and stores safely
```

```typescript
// Using a BIP39 library (or implement minimal version)
// npm install bip39 (or bundle a minimal implementation)

import { generateMnemonic, mnemonicToSeedSync, validateMnemonic } from 'bip39';

export function generateRecoveryPhrase(): string {
  return generateMnemonic(256); // 24 words
}

export async function recoverKeyFromPhrase(mnemonic: string): Promise<CryptoKey> {
  if (!validateMnemonic(mnemonic)) {
    throw new Error('Invalid recovery phrase');
  }
  
  const seed = mnemonicToSeedSync(mnemonic);
  const salt = new Uint8Array(16); // Fixed salt for recovery
  
  // Derive key from mnemonic seed
  const seedKey = await crypto.subtle.importKey(
    'raw',
    seed.slice(0, 32), // Use first 32 bytes as key material
    'PBKDF2',
    false,
    ['deriveKey']
  );
  
  return await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 10000, hash: 'SHA-256' },
    seedKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}
```

**Option B: Passphrase Hint Only**
- Store an encrypted hint that helps the user remember their passphrase
- Hint is NOT the passphrase itself, just a reminder
- Example: "My favorite book + year I graduated"

### 2.5 Re-encryption on Passphrase Change

When user changes passphrase:

```typescript
export async function changePassphrase(
  oldPassphrase: string,
  newPassphrase: string
): Promise<void> {
  // 1. Get the master key using old passphrase
  const salt = await getStoredSalt(); // From IndexedDB
  const oldDerivedKey = await deriveKeyFromPassphrase(oldPassphrase, salt);
  const wrappedKey = await getWrappedKey(); // From IndexedDB
  const masterKey = await unwrapKey(wrappedKey, oldDerivedKey, wrappingIV);
  
  // 2. Derive new key from new passphrase
  const newSalt = crypto.getRandomValues(new Uint8Array(16));
  const newDerivedKey = await deriveKeyFromPassphrase(newPassphrase, newSalt);
  
  // 3. Re-wrap the master key with the new derived key
  const { wrappedKey: newWrappedKey, wrappingIV: newWrappingIV } = 
    await wrapKey(masterKey, newDerivedKey);
  
  // 4. Store new wrapped key + new salt
  await storeKeyData({
    wrappedKey: newWrappedKey,
    salt: newSalt,
    wrappingIV: newWrappingIV,
    createdAt: Date.now()
  });
}
```

### 2.6 Web App Decryption Support

The web app (Next.js) needs to be able to decrypt data. Architecture:

```
┌─────────────────────┐     ┌──────────────────────┐     ┌─────────────────┐
│  Web App (Next.js)  │     │  Server API          │     │ User's Browser  │
│  /app/memories      │────▶│  GET /api/memories   │────▶│ (decrypts in    │
│  (displays decrypted│◀────│  (returns encrypted  │◀────│  client-side JS)│
│  memories)          │     │  blobs only)         │     │                 │
└─────────────────────┘     └──────────────────────┘     └─────────────────┘
         │                           │
         │ User enters               │
         │ passphrase ──────────────▶│
         │                           │
         │ Derives MK, decrypts      │
         │ data, displays            │
```

**Web App Implementation**:

```typescript
// src/lib/crypto.ts (shared between extension and web app)

export async function unlockVault(
  passphrase: string,
  encryptedMemories: Array<{id: string, ciphertext: string, iv: string}>
): Promise<Array<{id: string, content: string}>> {
  // 1. Get salt from server (public, stored alongside user account)
  const saltResponse = await fetch('/api/user/salt');
  const { salt } = await saltResponse.json();
  
  // 2. Derive master key
  const masterKey = await deriveKeyFromPassphrase(
    passphrase,
    new Uint8Array(Buffer.from(salt, 'base64'))
  );
  
  // 3. Decrypt each memory
  const decrypted = await Promise.all(
    encryptedMemories.map(async (mem) => {
      const plaintext = await decryptAES(
        masterKey,
        Buffer.from(mem.ciphertext, 'base64').buffer,
        new Uint8Array(Buffer.from(mem.iv, 'base64'))
      );
      return { id: mem.id, content: plaintext };
    })
  );
  
  return decrypted;
}
```

---

## 3. IndexedDB Encryption

### 3.1 Database Schema for Encrypted Data

```typescript
// extension/src/lib/storage.ts

export interface EncryptedConversation {
  id: string;                    // UUID
  encryptedData: ArrayBuffer;     // AES-256-GCM ciphertext
  iv: Uint8Array;               // 12-byte IV
  authTag?: ArrayBuffer;         // Included in GCM ciphertext
  version: number;               // Encryption version (for future upgrades)
  source: string;                // 'chatgpt', 'claude', etc. (plaintext for filtering)
  createdAt: number;             // Timestamp (plaintext for sorting)
  updatedAt: number;             // Timestamp (plaintext for sorting)
  tags?: string[];               // Optional: stored encrypted or plaintext?
}

export interface KeyStore {
  id: 'master';
  wrappedKey: ArrayBuffer;
  salt: Uint8Array;
  wrappingIV: Uint8Array;
  algorithm: string;
  createdAt: number;
  passphraseHint?: string;
}
```

### 3.2 What Fields to Encrypt vs Index

| Field | Encrypted? | Indexed? | Reason |
|-------|-----------|----------|--------|
| `id` | No | Yes (primary key) | Needed for lookups |
| `encryptedData` | Yes (the content) | No | This IS the encrypted content |
| `iv` | No | No | Needed for decryption, not searchable |
| `source` | No | Yes | Needed for filtering (ChatGPT vs Claude) |
| `createdAt` | No | Yes | Needed for sorting |
| `updatedAt` | No | Yes | Needed for sorting |
| `tags` | Optional | Partial | See below |

**Tags Decision**: For MVP, store tags as **plaintext** in a separate field for filtering. This is a privacy tradeoff — the server knows which tags you use. If stronger privacy is needed, encrypt tags and do client-side filtering only.

### 3.3 Performance Implications

**Read Path** (decrypt on read):
```
User requests memory → Fetch encrypted blob from IndexedDB → 
Decrypt with AES-GCM → Return plaintext
```
- AES-256-GCM decryption is **very fast** (~1-2μs per KB on modern hardware)
- For 1000 memories of ~2KB each: ~2ms total decryption time
- **Conclusion**: Performance is NOT a concern for decryption

**Write Path** (encrypt on write):
```
New conversation captured → Encrypt with AES-GCM → 
Store encrypted blob in IndexedDB → Sync to server
```
- Encryption is similarly fast
- **Conclusion**: Performance is NOT a concern for encryption

**IndexedDB Transaction Considerations**:
- Use transactions for atomicity (all-or-nothing writes)
- Batch operations when syncing multiple items
- IndexedDB is asynchronous — doesn't block the main thread

---

## 4. Sync Architecture

### 4.1 Chrome Extension ↔ Cloud Server

```
┌────────────────┐         HTTPS        ┌─────────────────┐
│  Extension     │ ──── encrypted ────▶ │  Server         │
│  (background)  │ ◀─── encrypted ───── │  (Next.js API)  │
└────────────────┘    blobs only       └─────────────────┘
```

**API Endpoints** (server never decrypts):

```typescript
// Server API routes (Next.js)
// src/app/api/memories/route.ts

// POST /api/memories - Save encrypted memory
export async function POST(request: Request) {
  const { userId, encryptedData, iv, source, createdAt } = await request.json();
  
  // Server ONLY stores the encrypted blob
  await db.memories.create({
    userId,
    encryptedData,  // base64-encoded ciphertext
    iv,             // base64-encoded IV
    source,         // plaintext (for filtering)
    createdAt,
    updatedAt: Date.now()
  });
  
  return Response.json({ success: true });
}

// GET /api/memories - Return encrypted memories
export async function GET(request: Request) {
  const { userId } = await getSession(request);
  
  const memories = await db.memories.findMany({
    where: { userId },
    select: {
      id: true,
      encryptedData: true,
      iv: true,
      source: true,
      createdAt: true,
      updatedAt: true
    }
  });
  
  // Return encrypted blobs directly - no decryption on server
  return Response.json({ memories });
}
```

### 4.2 Cloud Server ↔ Web App

```
┌────────────────┐         HTTPS        ┌─────────────────┐
│  Web App      │ ◀─── encrypted ───── │  Server         │
│  (Next.js)    │ ──── encrypted ────▶ │  (same API)     │
└────────────────┘    blobs only       └─────────────────┘
         │
         │ User enters passphrase in browser
         │ ↓
         │ Decrypt in client-side JavaScript
         │ Display plaintext
```

**Important**: The web app must NEVER send the passphrase or master key to the server. All decryption happens in the browser.

### 4.3 MCP Server Integration Considerations

The current MCP server (`mcp-server/server.py`) directly accesses SQLite and returns plaintext. After E2EE:

**Option A: MCP Server Stores Encrypted Data (Recommended)**
```python
# mcp-server/storage_encrypted.py

import base64
from typing import Optional

def save_encrypted_memory(
    encrypted_data: str,  # base64 ciphertext
    iv: str,              # base64 IV
    source: Optional[str] = None
) -> dict:
    """Store already-encrypted memory. MCP server never sees plaintext."""
    conn = get_connection()
    try:
        cursor = conn.execute(
            "INSERT INTO memories_encrypted (encrypted_data, iv, source, created_at, updated_at) "
            "VALUES (?, ?, ?, ?, ?)",
            (encrypted_data, iv, source, _now(), _now())
        )
        conn.commit()
        return {"id": cursor.lastrowid, "status": "stored_encrypted"}
    finally:
        conn.close()
```

**Option B: MCP Server Works with Plaintext (Less Secure)**
- Extension decrypts before sending to MCP server
- MCP server can do FTS on plaintext
- **NOT recommended** for zero-knowledge goal

**Recommended Approach**: Modify the MCP server to:
1. Accept pre-encrypted data from the extension
2. Store encrypted blobs only
3. Return encrypted blobs to clients
4. Let clients decrypt locally

**MCP Tool Changes**:
```python
@mcp.tool()
def save_memory(
    content: str,           # Will be encrypted by extension BEFORE calling
    tags: Optional[list[str]] = None,
    source: Optional[str] = None
) -> dict:
    # NOTE: In E2EE mode, 'content' is actually encrypted
    # The MCP server doesn't know the difference
    memory = storage.save_memory(content, tags, source)
    return {...}
```

To preserve search functionality with E2EE, see Section 5 (Search on Encrypted Data).

---

## 5. Search on Encrypted Data

This is the most challenging aspect of E2EE. The server only sees ciphertext, so traditional FTS doesn't work.

### 5.1 Option A: Client-Side Search (Recommended for MVP)

**How it works**:
1. User enters search query in the web app or extension
2. App fetches ALL encrypted memories from server
3. App decrypts all memories in browser
4. App performs search on plaintext in browser
5. Results displayed

**Pros**:
- Simple to implement
- No server changes needed for search logic
- True zero-knowledge

**Cons**:
- Must download and decrypt all data (bandwidth/performance)
- Not suitable if user has 10,000+ memories

**Implementation**:
```typescript
export async function searchMemoriesClientSide(
  query: string,
  encryptedMemories: Array<EncryptedMemory>,
  masterKey: CryptoKey
): Promise<Array<Memory>> {
  // 1. Decrypt all memories
  const decrypted = await Promise.all(
    encryptedMemories.map(async (mem) => ({
      id: mem.id,
      content: await decryptAES(masterKey, mem.encryptedData, mem.iv),
      source: mem.source,
      createdAt: mem.createdAt
    }))
  );
  
  // 2. Simple substring search (can use Fuse.js for fuzzy search)
  const lowerQuery = query.toLowerCase();
  return decrypted.filter(mem => 
    mem.content.toLowerCase().includes(lowerQuery)
  );
}
```

**Optimization**: Cache decrypted results in memory during the session to avoid re-decrypting for each search.

### 5.2 Option B: Encrypted Indices (Blind Indexing)

**Concept**: Create a searchable index that doesn't reveal the actual search terms.

```typescript
/**
 * Create a blind index token for a piece of text
 * Server can match tokens but cannot reverse-engineer the original text
 */
export async function createBlindIndex(
  text: string,
  indexKey: CryptoKey
): Promise<string> {
  // 1. Normalize and tokenize the text
  const tokens = text.toLowerCase().split(/\s+/);
  
  // 2. For each token, create a deterministic HMAC
  const indexTokens = await Promise.all(
    tokens.map(async (token) => {
      const hmac = await crypto.subtle.sign(
        'HMAC',
        indexKey,
        new TextEncoder().encode(token)
      );
      // Truncate to first 16 bytes to save space
      return Buffer.from(hmac.slice(0, 16)).toString('base64');
    })
  );
  
  return JSON.stringify(indexTokens);
}
```

**Storage Schema with Blind Index**:
```typescript
interface EncryptedMemoryWithIndex {
  id: string;
  encryptedData: ArrayBuffer;
  iv: Uint8Array;
  // Blind index: server can search for tokens but can't see plaintext
  blindIndex: string; // JSON array of HMAC tokens
  source: string;
  createdAt: number;
}
```

**Server-side search with blind index**:
```typescript
// Server can now "search" by comparing HMAC tokens
// But server still doesn't know what the tokens mean

// Client sends search query
// Client computes blind index for query
// Server matches blind index tokens
```

**Limitation**: Only supports exact token matches. No substring search, no fuzzy search.

### 5.3 Option C: Searchable Symmetric Encryption (SSE)

SSE schemes (like Song's scheme, Curtmola's scheme) allow searching ciphertext without revealing the query.

**Not recommended for MVP** because:
- Complex to implement correctly
- Significant performance overhead
- Most SSE schemes have known leakages (access pattern leakage)

If you need SSE later, consider:
- **Microsoft's SEAL** library (C++, would need WASM port)
- **BlindBox** research implementation
- **Sophos** (Searchable Symmetric Encryption)

### 5.4 Option D: Tokenization at Client Before Encryption (Hybrid)

**How it works**:
1. Client tokenizes the text (splits into words)
2. Client encrypts each token separately with deterministic encryption
3. Server can match encrypted tokens

**Problem**: Deterministic encryption leaks information (same plaintext = same ciphertext).

**Better variant**: Use a Keyed Hash (HMAC) for tokens, encrypt the content with AES-GCM.

This is essentially the same as Option B (Blind Indexing).

### 5.5 Recommendation for aimemory.pro

| Phase | Search Approach | Rationale |
|-------|----------------|-----------|
| MVP (2-week prototype) | **Option A: Client-side search** | Simplest, works for <1000 memories |
| V1.0 (after prototype) | **Option B: Blind Indexing** | Scales better, still zero-knowledge |
| Future | **Option B + caching** | Hybrid approach |

---

## 6. Chrome Extension-Specific Constraints

### 6.1 Service Worker Limitations

**Good news**: Chrome service workers (Manifest V3) fully support:
- `crypto.subtle.*` APIs
- `indexedDB` (since Chrome 110+)
- `fetch()` for network requests

**Limitations to be aware of**:

1. **Service Worker Sleep**: Service workers can be terminated when idle.
   - **Impact**: In-memory session key (`sessionMasterKey`) is lost when service worker sleeps.
   - **Solution**: Re-prompt user for passphrase, or use `sessionStorage` (but service workers don't have access to `sessionStorage`).
   - **Better solution**: Store a "session token" in `chrome.storage.session` (Manifest V3 feature).

```typescript
// Using chrome.storage.session for session key caching
// This survives service worker restarts within the same browser session

export async function cacheSessionKey(wrappedKey: ArrayBuffer, salt: Uint8Array) {
  await chrome.storage.session.set({
    'temp_wrapped_key': Array.from(new Uint8Array(wrappedKey)),
    'temp_salt': Array.from(salt),
    'temp_timestamp': Date.now()
  });
}

export async function getCachedSessionKey(): Promise<{wrappedKey: ArrayBuffer, salt: Uint8Array} | null> {
  const data = await chrome.storage.session.get(['temp_wrapped_key', 'temp_salt']);
  if (!data.temp_wrapped_key) return null;
  
  return {
    wrappedKey: new Uint8Array(data.temp_wrapped_key).buffer,
    salt: new Uint8Array(data.temp_salt)
  };
}
```

2. **No DOM Access**: Service workers can't access `window`, `document`, `localStorage`, `sessionStorage`.
   - Use `chrome.storage.*` APIs instead.
   - Use `indexedDB` for larger data.

3. **Memory Limits**: Service workers have limited memory.
   - Don't store all decrypted memories in memory.
   - Decrypt on-demand, cache temporarily.

### 6.2 Content Scripts vs Service Worker

**Where should decryption happen?**

| Context | Should Decrypt? | Reason |
|---------|----------------|--------|
| Content Script | ❌ No | Runs in page context, less secure |
| Service Worker | ✅ Yes | Isolated, no DOM access |
| Popup Page | ✅ Yes | User interaction context |
| Options Page | ✅ Yes | User interaction context |

**Recommended Flow**:
```
Content Script (captures conversation)
    ↓ (send message)
Service Worker (encrypts with AES-GCM)
    ↓ (store in IndexedDB + sync to server)
Server (stores encrypted blob)
```

### 6.3 Background Sync with Encrypted Blobs

Chrome's Background Sync API allows syncing data when the browser has connectivity.

```typescript
// background.ts - Sync encrypted memories to server

async function syncToServer() {
  const unsynced = await getUnsyncedMemories(); // From IndexedDB
  
  for (const memory of unsynced) {
    try {
      await fetch('https://aimemory.pro/api/memories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          encryptedData: Buffer.from(memory.encryptedData).toString('base64'),
          iv: Buffer.from(memory.iv).toString('base64'),
          source: memory.source,
          createdAt: memory.createdAt
        })
      });
      
      // Mark as synced
      await markAsSynced(memory.id);
    } catch (error) {
      console.error('Sync failed for memory', memory.id, error);
    }
  }
}

// Register background sync
if ('serviceWorker' in navigator && 'SyncManager' in window) {
  navigator.serviceWorker.ready.then(registration => {
    registration.sync.register('sync-memories');
  });
}
```

---

## 7. Existing Implementations

### 7.1 Bitwarden (Password Manager)

**Architecture**:
- Master password → PBKDF2 (600,000 iterations) → Master Key
- Master Key → Derive encryption key (HKDF)
- AES-256-CBC for vault items (notes, passwords, etc.)
- Server never sees master password or master key

**Key Insights from Bitwarden**:
- Uses **600,000 PBKDF2 iterations** (increased from 100,000 in 2023)
- Uses **HKDF** to derive multiple sub-keys from master key
- Uses **AES-CBC** (not GCM) but with HMAC for authentication
- Has **"deployment key"** concept for enterprise self-hosting

**Relevance to aimemory.pro**: Bitwarden's architecture is the gold standard for zero-knowledge browser extensions. We can adapt their key derivation and wrapping approach.

### 7.2 Standard Notes (Encrypted Notes)

**Architecture**:
- Password → PBKDF2 → Root Key
- Root Key → Derive items key (for encrypting notes)
- Items keys are wrapped with root key
- Server syncs encrypted items only

**Key Insights from Standard Notes**:
- Uses **offline-first** architecture (IndexedDB for local storage)
- Supports **multiple items keys** (key rotation)
- Has **backup file** export feature (encrypted JSON)
- Uses **structured encryption** (separate keys for separate data types)

**Relevance to aimemory.pro**: Standard Notes proves that a note-taking app can be fully E2EE with good UX. Their key rotation approach is worth studying.

### 7.3 1Password (Password Manager)

**Architecture**:
- Uses **SRP (Secure Remote Password)** for authentication without sending password
- Uses **AES-GCM** for encryption (more modern than Bitwarden's CBC)
- Has **Secret Key** (128-bit random key stored on device only)
- Master password + Secret Key → Derive actual encryption key

**Relevance**: 1Password's "Secret Key" concept could be adapted: generate a random 128-bit key stored in the extension, combine with passphrase for key derivation. This provides two-factor-like protection (something you know + something you have).

### 7.4 ProtonMail (Encrypted Email)

**Architecture**:
- OpenPGP-based encryption
- Uses **RSA 2048** or **ECC** for public-key encryption
- Web app does encryption/decryption in JavaScript
- Has **message passwords** for sharing

**Relevance**: ProtonMail's approach to web-based decryption is relevant for the aimemory.pro web app. They use OpenPGP.js library.

### 7.5 Summary of Patterns

| Service | Key Derivation | Encryption | Notable Feature |
|---------|---------------|------------|-----------------|
| Bitwarden | PBKDF2 (600k) | AES-CBC + HMAC | Gold standard for browser extensions |
| Standard Notes | PBKDF2 | AES-CBC + HMAC | Offline-first, key rotation |
| 1Password | PBKDF2 + Secret Key | AES-GCM | Two-factor-like key protection |
| ProtonMail | OpenPGP | RSA/ECC | Web-based PGP |
| **aimemory.pro (recommended)** | **PBKDF2 (310k)** | **AES-GCM** | **Modern, simple, zero-knowledge** |

---

## 8. Security Threat Model

### 8.1 What We ARE Protecting Against

| Threat | Mitigated? | How? |
|--------|-----------|------|
| **Server compromise** | ✅ Yes | Server only stores encrypted blobs |
| **Database breach** | ✅ Yes | Same as above — data is encrypted |
| **Network MITM** | ✅ Yes (with HTTPS) | Use TLS + encrypted payloads |
| **Malicious admin** | ✅ Yes | Admin can't decrypt without user's key |
| **Subpoena/government request** | ✅ Yes | Server has no keys, can't comply |
| **Extension store malware** | ⚠️ Partial | Code review + reproducible builds |
| **XSS in web app** | ⚠️ Partial | CSP headers, avoid eval(), sanitize |

### 8.2 What We Are NOT Protecting Against

| Threat | Why Not? | Mitigation Options |
|--------|----------|-------------------|
| **Compromised local device** | If attacker has full device access, they can extract keys from memory or storage | Full-disk encryption, screen lock, avoid storing passphrase |
| **Keylogger** | Software keylogger captures passphrase | On-screen keyboard, password manager integration |
| **Screen capture** | Attacker sees decrypted data on screen | Nothing practical to do |
| **Browser compromise** | Malicious browser extension reads memory | Use manifest V3 isolation, review extension permissions |
| **Phishing** | User gives passphrase to fake site | Security education, check URL, use WebAuthn instead of passphrase |

### 8.3 Additional Security Considerations

1. **Passphrase Strength Requirements**:
   ```
   Minimum 12 characters
   Require mix of: uppercase, lowercase, numbers, symbols
   Check against common password lists
   ```

2. **Rate Limiting**:
   - Limit passphrase attempts in UI (not on server, since server can't verify)
   - After 5 failed attempts, require waiting period

3. **Memory Safety**:
   - `CryptoKey` objects with `extractable: false` cannot be exported
   - Overwrite ArrayBuffers after use (limited in JS, but can reassign)
   - Don't store plaintext in `localStorage` or `sessionStorage`

4. **Key Rotation**:
   - Allow users to change passphrase (re-wraps master key)
   - Consider periodic master key rotation (new key, re-encrypt all data)

5. **Audit Trail**:
   - Log (locally) when vault is unlocked
   - Log sync operations
   - User can review security log

---

## 9. Implementation Roadmap (2-Week Prototype)

### Week 1: Core Crypto + Local Storage

**Day 1-2: Crypto Service**
- [ ] Implement `deriveKeyFromPassphrase()` with PBKDF2
- [ ] Implement `encryptAES()` / `decryptAES()` with AES-256-GCM
- [ ] Implement `wrapKey()` / `unwrapKey()` for key storage
- [ ] Write unit tests for all crypto functions

**Day 3-4: IndexedDB Storage**
- [ ] Define IndexedDB schema for encrypted conversations
- [ ] Implement `saveEncryptedMemory()` function
- [ ] Implement `getEncryptedMemory()` function
- [ ] Implement `listEncryptedMemories()` function

**Day 5: Service Worker Integration**
- [ ] Modify `background.ts` to encrypt before storing
- [ ] Add passphrase prompt UI (popup or options page)
- [ ] Test: Capture conversation → Encrypt → Store in IndexedDB

### Week 2: Sync + Web App Decryption

**Day 6-7: Server API Modifications**
- [ ] Modify server API to accept encrypted blobs
- [ ] Ensure server NEVER attempts decryption
- [ ] Modify `storage.py` to store `encrypted_data` and `iv` fields
- [ ] Remove FTS from server (move to client-side)

**Day 8-9: Extension → Server Sync**
- [ ] Implement sync function in `background.ts`
- [ ] Test: New encrypted memory → Sync to server → Verify server only has blob

**Day 10: Web App Decryption**
- [ ] Add passphrase input to web app
- [ ] Implement client-side decryption in Next.js
- [ ] Test: Web app fetches encrypted blobs → Decrypts → Displays

**Day 11-12: Search + Polish**
- [ ] Implement client-side search (Option A from Section 5)
- [ ] Add loading states, error handling
- [ ] Test full flow: Extension capture → Encrypt → Sync → Web app decrypt → Search

**Day 13-14: Recovery + Documentation**
- [ ] Implement BIP39 recovery phrase generation
- [ ] Implement recovery flow
- [ ] Write user documentation
- [ ] Security review

---

## 10. Code Examples for Key Integration Points

### 10.1 Modified `background.ts` (Extension Service Worker)

```typescript
// extension/src/entrypoints/background.ts

import { deriveKeyFromPassphrase, encryptAES, decryptAES, wrapKey, unwrapKey } from '../lib/crypto';
import { getDB, storeEncryptedMemory, getEncryptedMemory, listEncryptedMemories } from '../lib/storage';

// In-memory session key (cleared when service worker sleeps)
let sessionMasterKey: CryptoKey | null = null;

// Listen for messages from content scripts
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'CAPTURED_CONVERSATION') {
    handleNewConversation(message.data, sender.tab?.id);
  }
  
  if (message.type === 'UNLOCK_VAULT') {
    unlockVault(message.passphrase).then(sendResponse);
    return true; // Keep message channel open for async response
  }
});

async function handleNewConversation(conversationData: any, tabId: number | undefined) {
  // Ensure vault is unlocked
  if (!sessionMasterKey) {
    throw new Error('Vault is locked. Please unlock first.');
  }
  
  // Encrypt the conversation
  const jsonData = JSON.stringify(conversationData);
  const { ciphertext, iv } = await encryptAES(sessionMasterKey, jsonData);
  
  // Store locally (IndexedDB)
  await storeEncryptedMemory({
    id: crypto.randomUUID(),
    encryptedData: ciphertext,
    iv,
    source: conversationData.source || 'unknown',
    createdAt: Date.now(),
    updatedAt: Date.now()
  });
  
  // Sync to server
  await syncToServer();
}

async function unlockVault(passphrase: string): Promise<{success: boolean, error?: string}> {
  try {
    // Get salt from storage
    const db = await getDB();
    const keyData = await db.get('keys', 'master');
    
    if (!keyData) {
      // First time setup - create new master key
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const masterKey = await deriveKeyFromPassphrase(passphrase, salt);
      
      // Wrap and store
      const derivedKey = await deriveKeyFromPassphrase(passphrase, salt);
      const { wrappedKey, wrappingIV } = await wrapKey(masterKey, derivedKey);
      
      await db.put('keys', {
        id: 'master',
        wrappedKey,
        salt,
        wrappingIV,
        algorithm: 'AES-GCM-256',
        createdAt: Date.now()
      });
      
      sessionMasterKey = masterKey;
    } else {
      // Existing user - unwrap master key
      const derivedKey = await deriveKeyFromPassphrase(passphrase, keyData.salt);
      sessionMasterKey = await unwrapKey(
        keyData.wrappedKey,
        derivedKey,
        keyData.wrappingIV
      );
    }
    
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Invalid passphrase' };
  }
}
```

### 10.2 Modified `storage.py` (MCP Server)

```python
# mcp-server/storage_encrypted.py

import sqlite3
import os
import json
from datetime import datetime, timezone
from typing import Optional
from dataclasses import dataclass, asdict

DB_PATH = os.environ.get("AIMEMORY_DB", os.path.join(os.path.dirname(__file__), "aimemory.db"))

@dataclass
class EncryptedMemory:
    id: int
    encrypted_data: str  # base64 ciphertext
    iv: str             # base64 IV
    source: Optional[str]
    created_at: str
    updated_at: str
    # Note: No 'content' or 'tags' fields - those are encrypted inside encrypted_data

def init_db() -> None:
    """Initialize database with encrypted memories table."""
    conn = get_connection()
    try:
        conn.executescript("""
            CREATE TABLE IF NOT EXISTS memories_encrypted (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                encrypted_data TEXT NOT NULL,
                iv TEXT NOT NULL,
                source TEXT,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            );
        """)
        conn.commit()
    finally:
        conn.close()

def save_encrypted_memory(
    encrypted_data: str,
    iv: str,
    source: Optional[str] = None
) -> EncryptedMemory:
    """Save an already-encrypted memory."""
    now = _now()
    conn = get_connection()
    try:
        cursor = conn.execute(
            "INSERT INTO memories_encrypted (encrypted_data, iv, source, created_at, updated_at) "
            "VALUES (?, ?, ?, ?, ?)",
            (encrypted_data, iv, source, now, now)
        )
        conn.commit()
        memory_id = cursor.lastrowid
        row = conn.execute("SELECT * FROM memories_encrypted WHERE id = ?", (memory_id,)).fetchone()
        return EncryptedMemory(**dict(row))
    finally:
        conn.close()

def list_encrypted_memories(limit: int = 20) -> list[EncryptedMemory]:
    """List encrypted memories (server cannot decrypt)."""
    conn = get_connection()
    try:
        rows = conn.execute(
            "SELECT * FROM memories_encrypted ORDER BY created_at DESC LIMIT ?",
            (limit,)
        ).fetchall()
        return [EncryptedMemory(**dict(r)) for r in rows]
    finally:
        conn.close()

# Note: search_memories() is removed - search now happens client-side
```

---

## 11. Conclusion

Implementing E2EE for aimemory.pro is **achievable within 2 weeks** using modern Web Crypto API. The key architectural decisions are:

1. **Use Web Crypto API** (native, fast, secure)
2. **PBKDF2 with 310,000 iterations** for key derivation
3. **AES-256-GCM** for authenticated encryption
4. **IndexedDB** for local encrypted storage
5. **Client-side search** for MVP (upgrade to blind indexing later)
6. **Service worker** for all crypto operations (security isolation)

The existing codebase (WXT extension + Next.js web app + FastMCP server) is well-positioned for this integration. The main changes are:
- Add crypto service to extension
- Modify storage layer to encrypt before storing
- Remove server-side decryption and FTS (move to client)
- Add passphrase-based unlock UI

**Next Steps**:
1. Review this report with the development team
2. Prioritize the 2-week prototype roadmap
3. Set up a separate branch for E2EE development
4. Begin with the crypto service implementation (Week 1, Day 1-2)

---

## Appendix A: References

- [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_CheatSheet.html)
- [Web Crypto API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- [Bitwarden Security Whitepaper](https://bitwarden.com/images/resources/security-whitepaper.pdf)
- [Standard Notes Security](https://standardnotes.com/help/79-how-does-standard-notes-encrypt-data-on-my-device)
- [Searchable Symmetric Encryption - Wikipedia](https://en.wikipedia.org/wiki/Searchable_symmetric_encryption)
- [Chrome Extension Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [IndexedDB API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

---

**Report prepared by**: Hermes Agent (AI Research Assistant)  
**Date**: May 16, 2026  
**Version**: 1.0
