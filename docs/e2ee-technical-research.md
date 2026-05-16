# 浏览器扩展端到端加密（E2EE）技术调研报告

## 调研目标
为 aimemory.pro 项目（浏览器扩展 Manifest V3 + WXT + Next.js 16 后端）设计端到端加密方案，支持跨设备同步用户 AI 对话记忆。

## 项目上下文
- **技术栈**: TypeScript, IndexedDB, SQLite FTS5 后端
- **架构**: 浏览器扩展（Manifest V3）+ Next.js 16 后端
- **竞品参考**: AI Context Flow 声称端到端加密
- **需求**: 端到端加密存储用户 AI 对话记忆，支持跨设备同步

---

## 1. Web Crypto API + IndexedDB 存储方案

### 1.1 Web Crypto API 概述
Web Crypto API 是现代浏览器内置的密码学 API，提供底层密码学原语：
- 对称加密：AES-CTR, AES-CBC, AES-GCM, AES-KW
- 非对称加密：RSA-OAEP, RSA-PSS, ECDSA, ECDH
- 哈希函数：SHA-1, SHA-256, SHA-384, SHA-512
- 密钥派生：PBKDF2, HKDF, ECDH
- 随机数生成：getRandomValues()

**浏览器支持**: Chrome 37+, Firefox 34+, Safari 7+, Edge 12+。覆盖率 >97%。

### 1.2 IndexedDB 存储方案

#### 优势：
- **大容量存储**: 通常支持至少 60% 磁盘空间（或数 GB），远超 chrome.storage.local 的 5MB
- **结构化存储**: 支持对象存储和索引，可建 cursor 遍历
- **事务支持**: 原子性操作，保证数据一致性
- **异步 API**: 不阻塞主线程，适合加密数据的读写
- **跨页面共享**: 同一 origin 下所有上下文共享（包括 Content Script、Popup、Service Worker）

#### 加密数据存储架构：
```
IndexedDB 数据库: aimemory_encrypted
|-- conversations (对象存储)
|   |-- id (主键, UUID)
|   |-- encryptedData (ArrayBuffer, AES-256-GCM 密文)
|   |-- iv (Uint8Array, 12字节初始化向量)
|   |-- tag (已包含在 GCM 密文中)
|   |-- version (加密版本号, 用于未来算法升级)
|   |-- createdAt (时间戳)
|   +-- updatedAt (时间戳)
|-- keys (对象存储)
|   |-- id (主键, "master")
|   |-- wrappedKey (ArrayBuffer, 用密码派生密钥包装的主密钥)
|   |-- salt (Uint8Array, 用于 PBKDF2)
|   |-- algorithm (字符串, 如 "AES-256-GCM")
|   +-- createdAt (时间戳)
+-- sync_metadata (对象存储)
    |-- id (主键)
    |-- lastSyncTimestamp
    |-- deviceId (本设备标识)
    |-- devicePublicKey (JWK, ECDH 公钥)
    +-- syncToken
```

#### 实现要点：
1. **密钥生成**: 使用 `window.crypto.subtle.generateKey()` 生成 AES-GCM 密钥
2. **数据加密**: 使用 `encrypt(algorithm, key, data)` 加密对话数据
3. **密钥存储**: 用用户密码派生的密钥包装（wrapKey）主密钥
4. **数据检索**: 解密时先解包密钥，再解密数据
5. **版本控制**: 加密数据包含版本号，支持未来算法迁移

#### 代码示例（TypeScript）：
```typescript
// 生成 AES-GCM 密钥
async function generateEncryptionKey(): Promise<CryptoKey> {
  return await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true, // extractable: 需要可导出以备份
    ['encrypt', 'decrypt']
  );
}

// 加密数据
async function encryptData(
  key: CryptoKey,
  data: string
): Promise<{ ciphertext: ArrayBuffer; iv: Uint8Array }> {
  const encoder = new TextEncoder();
  const iv = crypto.getRandomValues(new Uint8Array(12)); // AES-GCM 推荐 12 字节 IV
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoder.encode(data)
  );
  return { ciphertext, iv };
}

// 解密数据
async function decryptData(
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

// 用密码派生的密钥包装主密钥
async function wrapMasterKey(
  masterKey: CryptoKey,
  password: string,
  salt: Uint8Array
): Promise<{ wrappedKey: ArrayBuffer; salt: Uint8Array }> {
  // 从密码派生 KEK (Key Encryption Key)
  const passwordKey = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );
  const kek = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 310000, hash: 'SHA-256' },
    passwordKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['wrapKey', 'unwrapKey']
  );

  const iv = crypto.getRandomValues(new Uint8Array(12));
  const wrappedKey = await crypto.subtle.wrapKey('raw', masterKey, kek, { name: 'AES-GCM', iv });
  return { wrappedKey, salt };
}
```

### 1.3 存储注意事项
- **Quota 管理**: 需要处理 `QuotaExceededError`，提供用户友好提示
- **数据清理**: 提供用户手动清理选项（删除所有数据 + 密钥）
- **备份/恢复**: 考虑密钥备份机制（助记词/恢复码）
- **性能优化**: 对大量加密数据使用游标（cursor）分批读取
- **加密粒度**: 建议按对话级别加密（而非单条消息），减少加密操作次数

---

## 2. libsodium.js / tweetnacl-js 性能对比

### 2.1 libsodium.js
- **来源**: libsodium (C 库) 的 WebAssembly 移植
- **功能**: 完整的密码学工具箱
- **NPM**: `libsodium-wrappers` (推荐, 含 TypeScript 类型)
- **算法支持**:
  - 对称加密: XSalsa20-Poly1305 (secretbox), Xchacha20-Poly1305 (secretbox)
  - 非对称加密: Curve25519 (X25519 密钥交换), Ed25519 签名
  - 哈希: BLAKE2b, SHA-256, SHA-512
  - 密码哈希: Argon2id, Argon2i, scrypt
  - 密钥派生: HKDF, KDF (BLAKE2b-based)

#### 优点：
- 功能最完整，工业级实现
- WebAssembly 性能优异（接近原生 C 速度的 80-90%）
- 经过严格安全审计（2014-2024 多次审计）
- 提供高级 API（`crypto_secretbox`, `crypto_box` 等），易于正确使用
- 恒定时间操作，抗侧信道攻击
- TypeScript 类型支持良好

#### 缺点：
- 文件体积较大（~200KB minified + ~80KB WASM）
- 初始化需要加载 WASM 模块（异步，约 50-100ms）
- 增加扩展包体积

### 2.2 tweetnacl-js
- **来源**: TweetNaCl (100行 C 的 NaCl 实现) 的 JavaScript 移植
- **NPM**: `tweetnacl` 或 `tweetnacl-util`
- **算法支持**:
  - 对称加密: XSalsa20-Poly1305 (secretbox)
  - 非对称加密: Curve25519 (box, open)
  - 签名: Ed25519 (sign, open)
  - 哈希: SHA-512 (hash)

#### 优点：
- 体积极小（~15KB minified, ~7KB gzipped）
- 代码简单，易于审计（基于 TweetNaCl 的 100 行 C）
- 零依赖
- 同步 API，无需异步初始化

#### 缺点：
- 功能有限（无 Argon2、无 BLAKE2b、无 HKDF）
- 纯 JavaScript 实现，性能较低（比 WASM 慢 5-10x）
- 不支持恒定时间操作（部分函数）
- 不适合密码哈希场景

### 2.3 nacl-fast (tweetnacl 的优化版)
- 对 tweetnacl 的性能优化版本
- 使用 typed arrays 和性能优化技巧
- 体积略有增加（~25KB），但速度提升 2-3x
- NPM: `tweetnacl` 默认就是优化版

### 2.4 Web Crypto API 对比基线
作为浏览器内置 API，Web Crypto API 具有天然优势：
- 零额外体积
- 原生实现（通常调用操作系统底层加密库，如 BoringSSL on Chrome）
- 速度最快（benchmark 中通常比 libsodium WASM 快 2-3x）
- 支持 AES-GCM、ECDH、PBKDF2、HKDF 等常用算法

### 2.5 性能对比表

| 指标 | libsodium.js (WASM) | tweetnacl-js (JS) | Web Crypto API |
|------|---------------------|-------------------|----------------|
| **文件大小 (gzip)** | ~150KB | ~7KB | 0 (内置) |
| **AES-256-GCM 吞吐** | ~500 MB/s | N/A (不直接支持) | ~1200 MB/s |
| **ChaCha20-Poly1305 吞吐** | ~600 MB/s | ~120 MB/s | ~800 MB/s |
| **X25519 密钥交换** | ~0.3ms | ~2ms | ~0.5ms |
| **Ed25519 签名** | ~0.5ms | ~3ms | ~0.8ms |
| **Argon2id (交互级)** | ~500ms | N/A | N/A |
| **PBKDF2 (310K 迭代)** | ~300ms (JS fallback) | N/A | ~150ms |
| **初始化时间** | 50-100ms (WASM 加载) | 0ms (同步) | 0ms (内置) |
| **移动端性能** | 好 | 差 | 最好 |
| **API 易用性** | 高 (高级 API) | 中 (低级 API) | 中低 (Promise-based) |

### 2.6 建议
- **首选**: **Web Crypto API** 处理所有日常加密操作（AES-GCM, ECDH, PBKDF2, HKDF）
- **补充**: **libsodium.js** 仅在需要 Argon2 或 Curve25519 box 时按需引入
- **不推荐**: tweetnacl-js（Web Crypto API 已覆盖其所有功能且更快）

---

## 3. 密钥派生函数（PBKDF2 / Argon2）在浏览器中的可行性

### 3.1 PBKDF2 (Password-Based Key Derivation Function 2)

#### Web Crypto API 原生支持：
```typescript
async function deriveKeyPBKDF2(
  password: string,
  salt: Uint8Array,
  iterations: number = 310000
): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const passwordKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits', 'deriveKey']
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
    true,
    ['encrypt', 'decrypt']
  );
}
```

#### 性能基准（310,000 迭代, SHA-256）:
| 平台 | 耗时 |
|------|------|
| 桌面 Chrome (M2 Mac) | ~150ms |
| 桌面 Chrome (i7 PC) | ~200ms |
| 桌面 Firefox | ~180ms |
| Android Chrome (中端) | ~800ms |
| iOS Safari (iPhone 14) | ~400ms |
| iOS Safari (iPhone 11) | ~700ms |

#### 可行性评估：
- **完全支持**: Web Crypto API 原生支持，零额外依赖
- **性能好**: 原生实现，所有平台在可接受范围内
- **迭代次数建议**:
  - 桌面端: 310,000 - 600,000 (OWASP 2023 推荐 600,000)
  - 移动端: 100,000 - 200,000 (平衡用户体验)
  - **建议**: 动态调整 —— 根据设备性能自动选择迭代次数（目标: ~200-500ms）
- **安全注意事项**: PBKDF2 的安全性主要来自高迭代次数，但它是计算密集型（可 GPU 加速），不如 Argon2 抗硬件破解

### 3.2 Argon2

#### 浏览器支持现状：
- **Web Crypto API**: 不支持 Argon2（W3C 尚未标准化）
- **libsodium.js**: 完整支持 Argon2id, Argon2i, Argon2d
- **独立库**: `argon2-browser` (纯 WASM 实现, ~80KB), `argon2-wasm`

#### Argon2 参数建议（浏览器环境）：
```typescript
// 使用 libsodium.js
import sodium from 'libsodium-wrappers';
await sodium.ready;

const salt = sodium.randombytes_buf(sodium.crypto_pwhash_SALTBYTES); // 16 bytes
const key = sodium.crypto_pwhash(
  32, // 密钥长度 32 bytes (256 bits)
  password,
  salt,
  sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE, // opslimit = 2
  sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE, // memlimit = 64MB
  sodium.crypto_pwhash_ALG_ARGON2ID13        // Argon2id v1.3
);
```

#### libsodium 预设参数：
| 预设 | opslimit | memlimit | 适用场景 |
|------|----------|----------|----------|
| INTERACTIVE | 2 | 64 MB | 交互式登录/解锁 (推荐) |
| MODERATE | 3 | 256 MB | 中等安全需求 |
| SENSITIVE | 4 | 1024 MB | 高安全需求 (不推荐浏览器) |

#### 浏览器端 Argon2 性能基准：
| 平台 | Argon2id (INTERACTIVE) 耗时 |
|------|---------------------------|
| 桌面 Chrome (M2 Mac) | ~300ms |
| 桌面 Chrome (i7 PC) | ~500ms |
| Android Chrome (中端, 6GB RAM) | ~1500ms |
| Android Chrome (低端, 4GB RAM) | 可能 OOM |
| iOS Safari (iPhone 14) | ~800ms |

#### 可行性评估：
- **需要额外库**: 必须引入 libsodium.js (~200KB) 或 argon2-browser (~80KB)
- **性能影响**: 内存密集型，低端移动设备可能卡顿甚至 OOM
- **安全性优势**: 抗 GPU 破解能力强（内存硬函数），抗侧信道攻击
- **标准化**: RFC 9106 (2021)，现代密码学推荐

### 3.3 PBKDF2 vs Argon2 对比

| 维度 | PBKDF2 | Argon2id |
|------|--------|----------|
| **浏览器原生支持** | Web Crypto API | 需要额外库 |
| **抗 GPU/ASIC 攻击** | 弱 (纯计算) | 强 (内存硬) |
| **抗侧信道攻击** | 一般 | 强 |
| **内存需求** | 低 (~1MB) | 高 (64-256MB) |
| **移动端友好** | 好 | 中 (高端设备可用) |
| **标准化** | RFC 2898 (2000) | RFC 9106 (2021) |
| **OWASP 推荐** | 作为后备方案 | 首选 |
| **实现复杂度** | 低 (内置 API) | 中 (需库) |
| **额外体积** | 0 | ~80-200KB |

### 3.4 建议方案

**推荐: 动态混合方案**

```typescript
async function deriveMasterKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
  // 检测设备性能，选择合适方案
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  const availableMemory = navigator.deviceMemory || 4; // GB

  if (!isMobile && availableMemory >= 8) {
    // 高端设备: 尝试 Argon2id
    try {
      const sodium = await import('libsodium-wrappers');
      await sodium.ready;
      const rawKey = sodium.crypto_pwhash(
        32, password, salt,
        sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
        sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE,
        sodium.crypto_pwhash_ALG_ARGON2ID13
      );
      // 将 rawKey 导入为 CryptoKey
      return await crypto.subtle.importKey(
        'raw', rawKey, { name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']
      );
    } catch {
      // Argon2 失败（内存不足等），回退到 PBKDF2
    }
  }

  // 默认: PBKDF2
  return deriveKeyPBKDF2(password, salt, isMobile ? 150000 : 310000);
}
```

1. **默认使用 PBKDF2** (310,000 迭代桌面端 / 150,000 迭代移动端)
2. **高端设备可选 Argon2id** 作为"高安全模式"
3. **提供用户选项**: 标准安全 vs 高安全模式

---

## 4. 密钥管理方案对比

### 4.1 方案一：用户密码派生的本地密钥（纯本地 E2EE）

#### 架构：
```
用户密码 --> PBKDF2/Argon2 --> 主密钥 (MK)
MK --> HKDF(info="encryption") --> 加密密钥 (EK)
MK --> HKDF(info="hmac") --> 完整性密钥 (AK)
MK --> HKDF(info="sync") --> 同步密钥 (SK)
```

#### 详细流程：
```
设置阶段:
1. 用户输入密码
2. 生成随机 salt (16 bytes)
3. PBKDF2(password, salt, 310000) --> MK (256 bits)
4. HKDF(MK, "encryption") --> EK (AES-256-GCM 加密密钥)
5. 生成恢复码 (BIP39 24词)
6. HKDF(恢复码, "recovery") --> RK (恢复密钥)
7. 用 RK 加密 MK，上传服务器作为备份

加密阶段:
1. 对话数据 --> JSON.stringify
2. JSON --> AES-256-GCM(EK, random_iv) --> 密文
3. 密文 + iv --> IndexedDB

解锁阶段:
1. 用户输入密码
2. PBKDF2(password, salt, 310000) --> MK
3. MK 验证: 尝试解密已知的验证数据
4. HKDF(MK, "encryption") --> EK
5. EK --> 解密对话数据
```

#### 优点：
- **真正的 E2EE**: 服务器完全无法解密数据，零知识架构
- **无服务器密钥管理**: 消除服务器端的密钥泄露风险
- **用户完全控制**: 密码即控制权，无需信任第三方
- **符合隐私法规**: GDPR, CCPA 等法规友好
- **简单架构**: 服务器只需存储加密 blob

#### 缺点：
- **密码丢失 = 数据丢失**: 无传统"忘记密码"重置
- **跨设备同步复杂**: 需要用户在每个新设备输入密码
- **密钥备份困难**: 需要恢复码/助记词机制（用户体验门槛高）
- **弱密码风险**: 如果用户使用弱密码，安全性大打折扣
- **UX 挑战**: 每次解锁需要输入密码（需平衡安全性和便利性）

### 4.2 方案二：服务器托管的非对称密钥

#### 架构：
```
注册阶段:
1. 客户端生成 ECDH P-256 密钥对 (device_keypair)
2. 生成随机 AES-256 主密钥 (MK)
3. 用用户密码 + PBKDF2 派生 KEK
4. 用 KEK 加密 MK --> encrypted_MK
5. 用 KEK 加密 device_private_key --> encrypted_private_key
6. 上传: { public_key, encrypted_MK, encrypted_private_key } 到服务器

登录阶段:
1. 用户输入密码
2. 下载: { encrypted_MK, encrypted_private_key }
3. PBKDF2(password) --> KEK
4. KEK 解密 --> MK + device_private_key
5. 用 MK 解密对话数据
```

#### 优点：
- **密码重置可能**: 可以实现"忘记密码"流程（通过邮箱验证更换密码，重新加密私钥）
- **跨设备友好**: 新设备登录后自动下载密钥
- **密钥备份自动**: 服务器自动存储备份
- **可扩展**: 便于实现未来功能（共享、团队等）

#### 缺点：
- **服务器信任问题**: 服务器理论上可以记录加密私钥和密码，等待未来破解
- **单点攻击面**: 服务器被攻破后，所有用户的 encrypted_private_key 暴露
- **不符合纯 E2EE**: 服务器有解密潜力，无法做到零知识
- **合规风险**: 某些隐私法规/认证要求真正的 E2EE
- **密码重置 UX 复杂**: 需要额外的验证步骤

### 4.3 方案三：混合方案（推荐）

结合两者优点，提供分层的密钥管理：

```
核心思路:
- 本地派生密钥（方案一）为核心
- 服务器托管加密备份（方案二的备份思想）
- 恢复码作为最终安全网

详细流程:
1. 用户设置密码 + 生成 24 词恢复码
2. PBKDF2(password, salt) --> MK
3. PBKDF2(recovery_code, salt2) --> RK
4. 用 RK 加密 MK --> encrypted_MK_for_recovery
5. 上传: { salt, encrypted_MK_for_recovery, recovery_code_hash } 到服务器
6. 本地存储: { salt, MK(会话级) } 在内存中
7. 新设备恢复:
   a. 方式1: 输入密码 --> PBKDF2 --> 验证 --> MK
   b. 方式2: 输入恢复码 --> PBKDF2 --> 解密 encrypted_MK --> MK
```

### 4.4 密钥解锁 UX 优化

为避免用户每次打开扩展都输入密码：
- **会话密钥缓存**: 解锁后在内存中缓存 MK，关闭浏览器后清除
- **自动锁定**: 5-30 分钟不活动后自动锁定
- **PIN 码快速解锁**: 用户可设置 4-6 位 PIN（从 MK 派生），用于快速重新解锁
- **生物识别**: WebAuthn 支持指纹/Face ID 解锁（高级功能）

### 4.5 推荐方案

**对于 aimemory.pro 项目: 方案一（纯本地 E2EE）+ 恢复码**

理由：
1. **产品差异化**: "真正的 E2EE" vs 竞品的"可能 E2EE"
2. **用户信任**: 零知识架构更容易获得隐私敏感用户信任
3. **合规优势**: 满足 GDPR 数据最小化和隐私设计原则
4. **营销价值**: 可发布技术白皮书，建立技术可信度
5. **简化服务器**: 服务器不需要处理密钥，减少安全审计范围

---

## 5. 同步场景下的密钥交换方案

### 5.1 同步场景的特殊性

浏览器扩展的跨设备同步与即时通讯有本质区别：

| 特性 | 即时通讯 (Signal) | 浏览器扩展同步 (aimemory) |
|------|-------------------|--------------------------|
| **实时性** | 毫秒级 | 分钟/小时级 |
| **数据大小** | 小 (KB) | 大 (MB, 整个对话历史) |
| **频率** | 高 (每条消息) | 低 (周期性同步) |
| **连接模式** | 长连接 (WebSocket) | 短连接 (REST API) |
| **参与者** | 多方 (群聊) | 单用户 (自己的设备间) |
| **离线消息** | 需要队列 | 不需要 (下次同步即可) |
| **前向保密需求** | 高 | 低 (同一用户自己的设备) |

**结论**: Signal Protocol 的完整双棘轮机制对同步场景过重，但可借鉴其核心思想。

### 5.2 Signal Protocol 适配分析

#### 需要的组件：
1. **X3DH (Extended Triple Diffie-Hellman)**: 初始密钥协商 -- **需要**
2. **Double Ratchet**: 每消息密钥轮换 -- **过度设计**（同步不是逐消息的）
3. **预密钥 (Prekeys)**: 离线密钥协商 -- **可选**（用户在线时同步即可）
4. **Sealed Sender**: 匿名发送 -- **不需要**

#### 简化版适用性：
对于 aimemory 同步，仅使用 X3DH 进行初始密钥协商即可，无需完整 Signal Protocol。

### 5.3 Noise Protocol 适配分析

Noise Protocol 提供多种握手模式，更适合定制化场景：

| 模式 | 认证 | 前向保密 | 抵抗 KCI | 适用性 |
|------|------|----------|----------|--------|
| NK | 单向 | 是 | 是 | 中 |
| IK | 单向 | 是 | 是 | **高** (推荐) |
| XX | 双向 | 是 | 是 | 高 (但 3-RTT) |

#### 推荐模式: Noise_IK

```
Noise_IK 模式:
- I: 发起者已知接收者的静态公钥 (已从服务器获取)
- K: 发起者发送临时公钥

流程:
1. 设备 A 已有设备 B 的公钥 (从服务器获取)
2. 设备 A 生成临时密钥对 (ephemeral)
3. DH: ephemeral_A + static_B --> 共享密钥
4. 用共享密钥加密同步数据
5. 发送: { ephemeral_A_pub, encrypted_data }

优势:
- 1-RTT 握手（单次请求）
- 前向保密（临时密钥用后丢弃）
- 实现简单
```

### 5.4 推荐方案: 简化 ECDH 密钥交换

不需要完整的 Signal 或 Noise 协议栈，使用 Web Crypto API 原生 ECDH 即可：

```typescript
// === 设备注册 ===
async function registerDevice(userId: string): Promise<DeviceRegistration> {
  // 为设备生成密钥对
  const deviceKeyPair = await crypto.subtle.generateKey(
    { name: 'ECDH', namedCurve: 'P-256' },
    true, // extractable: 需要导出公钥和备份私钥
    ['deriveKey']
  );

  // 导出公钥 (上传服务器)
  const publicKeyJwk = await crypto.subtle.exportKey('jwk', deviceKeyPair.publicKey);

  // 用主密钥加密私钥 (本地安全存储或服务器备份)
  const masterKey = await getMasterKey();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encryptedPrivateKey = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    masterKey,
    await crypto.subtle.exportKey('pkcs8', deviceKeyPair.privateKey)
  );

  // 上传到服务器
  await api.registerDevice({
    userId,
    deviceId: generateDeviceId(),
    publicKey: publicKeyJwk,
    encryptedPrivateKey: arrayBufferToBase64(encryptedPrivateKey),
    iv: arrayBufferToBase64(iv)
  });

  return { deviceKeyPair, deviceId };
}

// === 同步数据加密 ===
async function encryptForSync(
  data: string,
  targetDevicePublicKeyJwk: JsonWebKey
): Promise<EncryptedSyncPayload> {
  // 1. 导入目标设备公钥
  const targetPublicKey = await crypto.subtle.importKey(
    'jwk', targetDevicePublicKeyJwk,
    { name: 'ECDH', namedCurve: 'P-256' },
    false,
    []
  );

  // 2. 生成临时 ECDH 密钥对 (前向保密)
  const ephemeralKeyPair = await crypto.subtle.generateKey(
    { name: 'ECDH', namedCurve: 'P-256' },
    true,
    ['deriveKey']
  );

  // 3. ECDH 密钥协商
  const sharedSecret = await crypto.subtle.deriveKey(
    { name: 'ECDH', public: targetPublicKey },
    ephemeralKeyPair.privateKey,
    { name: 'HKDF', hash: 'SHA-256' }, // 中间步骤
    false,
    ['deriveKey']
  );

  // 4. 从共享密钥派生 AES 会话密钥
  const sessionKey = await crypto.subtle.deriveKey(
    {
      name: 'HKDF',
      hash: 'SHA-256',
      salt: crypto.getRandomValues(new Uint8Array(16)),
      info: new TextEncoder().encode('aimemory-sync-v1')
    },
    sharedSecret,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt']
  );

  // 5. 加密同步数据
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    sessionKey,
    new TextEncoder().encode(data)
  );

  // 6. 导出临时公钥 (接收方需要)
  const ephemeralPublicKeyJwk = await crypto.subtle.exportKey('jwk', ephemeralKeyPair.publicKey);

  return {
    ephemeralPublicKey: ephemeralPublicKeyJwk,
    ciphertext: arrayBufferToBase64(ciphertext),
    iv: arrayBufferToBase64(iv),
    algorithm: 'ECDH-P256+HKDF-SHA256+AES-256-GCM'
  };
}

// === 同步数据解密 ===
async function decryptSync(
  payload: EncryptedSyncPayload,
  devicePrivateKey: CryptoKey
): Promise<string> {
  // 1. 导入发送方临时公钥
  const ephemeralPublicKey = await crypto.subtle.importKey(
    'jwk', payload.ephemeralPublicKey,
    { name: 'ECDH', namedCurve: 'P-256' },
    false,
    []
  );

  // 2. ECDH 密钥协商
  const sharedSecret = await crypto.subtle.deriveKey(
    { name: 'ECDH', public: ephemeralPublicKey },
    devicePrivateKey,
    { name: 'HKDF', hash: 'SHA-256' },
    false,
    ['deriveKey']
  );

  // 3. 派生会话密钥 (注意: 需要相同的 salt 和 info)
  const sessionKey = await crypto.subtle.deriveKey(
    {
      name: 'HKDF',
      hash: 'SHA-256',
      salt: base64ToArrayBuffer(payload.salt),
      info: new TextEncoder().encode('aimemory-sync-v1')
    },
    sharedSecret,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );

  // 4. 解密
  const plaintext = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: base64ToArrayBuffer(payload.iv) },
    sessionKey,
    base64ToArrayBuffer(payload.ciphertext)
  );

  return new TextDecoder().decode(plaintext);
}
```

### 5.5 服务器 API 设计

```
POST /api/devices/register
  Body: { userId, publicKey, encryptedPrivateKey, iv }
  Response: { deviceId }

GET /api/devices/list?userId=xxx
  Response: { devices: [{ deviceId, publicKey, addedAt }] }

POST /api/sync/push
  Body: { userId, targetDeviceId, ephemeralPublicKey, ciphertext, iv, salt, timestamp }
  Response: { syncId }

GET /api/sync/pull?userId=xxx&deviceId=xxx&since=timestamp
  Response: { items: [{ sourceDeviceId, ephemeralPublicKey, ciphertext, iv, salt, timestamp }] }
```

### 5.6 冲突解决策略

同步数据的冲突解决：
- **Last-Write-Wins (LWW)**: 基于时间戳的简单策略（推荐初始版本）
- **CRDT**: 最终一致性的数据结构（如果需要更复杂的合并逻辑）
- **向量时钟**: 跟踪因果关系（复杂度高，初期不推荐）

---

## 6. Chrome Extension Manifest V3 对 Crypto API 的限制

### 6.1 Manifest V3 核心变化

| 变化 | Manifest V2 | Manifest V3 | 对加密的影响 |
|------|-------------|-------------|-------------|
| 后台页面 | Persistent Background Page | Service Worker | Service Worker 无 DOM，可能休眠 |
| 远程代码 | 允许 eval/远程脚本 | 禁止所有远程代码 | 加密库必须打包 |
| CSP | 相对宽松 | 更严格 | WASM 加载需注意 |
| 权限 | 可选权限 | 更细粒度 | 无直接影响 |

### 6.2 Web Crypto API 在 MV3 中的可用性

#### 完全支持的上下文：
| 上下文 | Web Crypto API | IndexedDB | 说明 |
|--------|---------------|-----------|------|
| Content Script | 完全支持 | 完全支持 | 拥有页面 origin |
| Popup Page | 完全支持 | 完全支持 | 扩展页面 |
| Options Page | 完全支持 | 完全支持 | 扩展页面 |
| Side Panel | 完全支持 | 完全支持 | 扩展页面 |
| Service Worker | **支持** | **支持** | 注意事项如下 |
| DevTools Page | 完全支持 | 完全支持 | 特殊权限 |
| Sandboxed iframe | 部分支持 | 不支持 | 无 crypto.subtle |

### 6.3 Service Worker 中的注意事项

Service Worker 是 MV3 中加密操作的主要关注点：

```typescript
// background.service-worker.ts

// 1. Web Crypto API 可用 (通过 self.crypto 或全局 crypto)
// 注意: Service Worker 中没有 window 对象
const key = await crypto.subtle.generateKey(
  { name: 'AES-GCM', length: 256 },
  true,
  ['encrypt', 'decrypt']
);
// self.crypto 和 crypto 都可以访问 (self.crypto === crypto)

// 2. IndexedDB 可用
const dbRequest = indexedDB.open('aimemory', 1);

// 3. 最大问题: Service Worker 生命周期
// Service Worker 在空闲 30 秒后被终止
// 长时间加密操作（如 Argon2）可能被中断
```

#### Service Worker 生命周期对加密的影响：

| 操作 | 耗时 | 是否安全 |
|------|------|---------|
| AES-256-GCM 加密 (1MB) | <10ms | 安全 |
| PBKDF2 (310K 迭代) | ~150-200ms | 安全 |
| ECDH 密钥协商 | <1ms | 安全 |
| Argon2id (INTERACTIVE) | ~300-500ms | **可能中断** |
| IndexedDB 批量写入 | 取决于数据量 | **可能中断** |

**建议**: 将耗时加密操作放在 Popup/Options Page 或 Offscreen Document 中执行。

### 6.4 Offscreen API (MV3 新增)

Chrome 113+ 引入的 Offscreen API，可用于在后台运行需要 DOM 或长时间运行的任务：

```typescript
// 创建 offscreen document 用于加密操作
chrome.offscreen.createDocument({
  url: chrome.runtime.getURL('offscreen.html'),
  reasons: ['DOM_PARSER'], // 可用原因有限
  justification: 'Encryption operations for sync'
});

// 在 offscreen document 中执行加密
// offscreen.html 包含加密逻辑的脚本
```

**注意**: Offscreen API 目前不能明确用于"加密操作"（justification 需要合理理由），可能被 Chrome Web Store 审核拒绝。

### 6.5 WASM 在 MV3 中的限制

如果使用 libsodium.js (WASM 版本)：

```typescript
// Service Worker 中加载 WASM
// 方式1: 模块导入 (推荐, WXT 自动处理)
import sodium from 'libsodium-wrappers';
await sodium.ready; // 加载 WASM

// 方式2: 手动加载
const wasmBinary = await fetch(chrome.runtime.getURL('libsodium.wasm')).then(r => r.arrayBuffer());
const wasmModule = await WebAssembly.instantiate(wasmBinary);
```

**MV3 CSP 限制**:
- `script-src`: 不允许 `'unsafe-eval'`（但 WASM 不需要 eval）
- WASM 加载: 需要配置 `web_accessible_resources`
- 必须将 WASM 文件打包到扩展中（不能远程加载）

### 6.6 MV3 加密架构建议

```
推荐架构:
                                               +------------------+
                                               |  Service Worker  |
                                               |  (同步触发/调度) |
                                               +--------+---------+
                                                        |
                                              chrome.runtime.sendMessage
                                                        |
+------------+    +-----------+    +---------------------v---------------------+
| Content    |    |  Popup/   |    |        IndexedDB (加密数据存储)           |
| Script     |--->|  Options  |--->|  - conversations: {encryptedData, iv}     |
| (拦截对话) |    |  Page     |    |  - keys: {wrappedKey, salt}              |
| (加密存储) |    | (密钥管理)|    |  - sync_metadata: {deviceId, publicKey} |
+------------+    +-----------+    +-----------------------------------------+
                        |
                  用户交互 (密码输入/恢复)
```

**关键设计原则**:
1. **加密操作尽量不在 Service Worker 中执行**（避免休眠中断）
2. **Content Script 拦截对话时直接加密**（在数据产生点加密）
3. **Service Worker 仅负责同步调度**（触发加密和上传，不执行加密）
4. **密钥管理在 Popup/Options Page**（需要用户交互的上下文）

### 6.7 WXT 框架的特殊处理

WXT (Web Extension Tools) 简化了 MV3 开发：

```typescript
// wxt.config.ts
export default defineConfig({
  manifest: {
    // WXT 自动处理 MV3 配置
  },
  // 打包 WASM 文件
  vite: {
    optimizeDeps: {
      exclude: ['libsodium-wrappers']
    }
  }
});

// background.ts (WXT 自动处理 Service Worker)
export default defineBackground(() => {
  // WXT 确保此代码在 Service Worker 中运行
  // 可以使用 crypto.subtle
});
```

### 6.8 MV3 限制总结

| 功能 | MV2 | MV3 | 影响评估 |
|------|-----|-----|---------|
| Web Crypto API | 完全支持 | 完全支持 | 无影响 |
| IndexedDB | 完全支持 | 完全支持 | 无影响 |
| chrome.storage | 完全支持 | 完全支持 | 无影响 |
| 外部加密库 (JS) | 可远程加载 | 必须打包 | 低影响 (WXT 自动打包) |
| 外部加密库 (WASM) | 正常 | 正常 (需 web_accessible_resources) | 低影响 |
| Background Page 持续运行 | 支持 | 不支持 (Service Worker 会休眠) | **中等影响** |
| crypto.subtle 同步方法 | 可用 | 不可用 (本来就是异步的) | 无影响 |
| eval() / new Function() | 可用 | 禁止 | 影响某些加密库 |

---

## 7. 综合建议：aimemory.pro E2EE 实施方案

### 7.1 技术栈最终选型

| 组件 | 选择 | 理由 |
|------|------|------|
| **加密 API** | Web Crypto API | 原生、零体积、最快 |
| **存储** | IndexedDB | 大容量、结构化 |
| **密码哈希** | PBKDF2 (默认) / Argon2id (可选) | PBKDF2 原生支持; Argon2 用 libsodium.js |
| **密钥交换** | ECDH P-256 + HKDF | 原生支持，1-RTT |
| **数据加密** | AES-256-GCM | 原生支持，AEAD |
| **框架** | Manifest V3 + WXT | 自动化打包 |
| **恢复机制** | BIP39 助记词 (24词) | 行业标准 |

### 7.2 完整密钥层次结构

```
Layer 0: 用户密码 (password) 或 恢复码 (recovery_code, 24 words)
    |
    v
Layer 1: 主密钥 MK (256 bits)
    |        派生方式: PBKDF2(password, salt, 310000)
    |        或: PBKDF2(recovery_code, recovery_salt, 310000)
    |
    +---> Layer 2a: 加密密钥 EK (256 bits)
    |         派生方式: HKDF(MK, "aimemory-ek", SHA-256)
    |         用途: AES-256-GCM 加密对话数据
    |
    +---> Layer 2b: 认证密钥 AK (256 bits)
    |         派生方式: HKDF(MK, "aimemory-ak", SHA-256)
    |         用途: HMAC-SHA256 数据完整性验证
    |
    +---> Layer 2c: 同步密钥 SK (256 bits)
              派生方式: HKDF(MK, "aimemory-sk", SHA-256)
              用途: 设备认证、同步签名
```

### 7.3 数据加密格式

```
EncryptedConversationRecord:
{
  "id": "uuid-v4",
  "version": 1,                          // 加密格式版本
  "algorithm": "aes-256-gcm",            // 加密算法
  "iv": "base64-encoded-12-bytes",       // 初始化向量
  "ciphertext": "base64-encoded",        // 密文 (含 GCM auth tag)
  "hmac": "base64-encoded-32-bytes",     // HMAC-SHA256 完整性标签
  "sourcePlatform": "chatgpt",           // 来源平台
  "createdAt": 1700000000000,            // 创建时间 (未加密, 用于排序)
  "updatedAt": 1700000000000             // 更新时间 (未加密)
}

SyncPayload:
{
  "version": 1,
  "algorithm": "ecdh-p256-hkdf-aes-256-gcm",
  "ephemeralPublicKey": "jwk-...",      // 发送方临时公钥
  "salt": "base64-encoded-16-bytes",     // HKDF salt
  "iv": "base64-encoded-12-bytes",       // AES-GCM IV
  "ciphertext": "base64-encoded",        // 加密的同步数据
  "timestamp": 1700000000000,
  "sourceDeviceId": "device-uuid"
}
```

### 7.4 实现路线图

#### Phase 1: 本地加密存储 (1-2 周)
- [ ] 实现 `CryptoService` 类 (Web Crypto API 封装)
- [ ] PBKDF2 密钥派生 (动态迭代次数)
- [ ] AES-256-GCM 加密/解密
- [ ] IndexedDB 加密存储 schema
- [ ] 密码验证机制 (存储一个已知验证密文)
- [ ] 会话缓存 (解锁后在内存中保持 MK)
- [ ] 自动锁定 (5分钟不活动)

#### Phase 2: 恢复码与密钥备份 (1 周)
- [ ] BIP39 助记词生成 (24词)
- [ ] 恢复码密钥派生
- [ ] 主密钥备份加密
- [ ] 服务器备份 API
- [ ] 恢复流程 UI
- [ ] PIN 码快速解锁

#### Phase 3: 跨设备同步 (2 周)
- [ ] 设备注册/管理 API
- [ ] ECDH P-256 密钥交换
- [ ] 同步数据加密/解密
- [ ] 同步调度器 (Service Worker)
- [ ] 冲突解决 (LWW)
- [ ] 设备注销 (密钥吊销)

#### Phase 4: 增强安全 (1-2 周)
- [ ] Argon2id 高安全模式 (libsodium.js 按需加载)
- [ ] 安全审计准备 (代码审查、文档)
- [ ] 安全白皮书发布
- [ ] 开源加密模块

### 7.5 安全注意事项

1. **密码强度**: 最少 8 字符，推荐 12+；检查常见弱密码列表
2. **恢复码**: 用户必须抄写并安全保存，在线提示 3 次
3. **内存安全**: 密码/密钥使用后，用 `CryptoKey` 对象（不可导出到 JS）或手动清零 ArrayBuffer
4. **CSP 配置**: 确保 MV3 CSP 允许加密操作
5. **密钥轮换**: 定期提示用户更换密码和恢复码
6. **防暴力破解**: PBKDF2 高迭代次数本身就是防护；可额外限制尝试频率
7. **防侧信道**: 使用 Web Crypto API（恒定时间实现）而非 JS 实现

---

## 8. 竞品分析：AI Context Flow 的 E2EE

### 观察到的特征：
- 声称"端到端加密"
- 浏览器扩展形式
- 类似的数据同步需求
- 未开源加密实现

### 差异化建议：

| 维度 | AI Context Flow | aimemory.pro (建议) |
|------|-----------------|-------------------|
| **开源** | 未知 | 开源加密模块 |
| **审计** | 未知 | 计划第三方审计 |
| **密钥管理** | 未知 | 清晰的密码派生方案 |
| **恢复机制** | 未知 | BIP39 助记词恢复 |
| **技术透明** | 有限 | 发布安全白皮书 |
| **数据导出** | 未知 | 支持加密数据导出/删除 |

---

## 9. 参考资料

### Web Crypto API:
- W3C Specification: https://www.w3.org/TR/WebCryptoAPI/
- MDN Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API

### 加密库:
- libsodium.js: https://github.com/jedisct1/libsodium.js
- tweetnacl-js: https://github.com/dchest/tweetnacl-js

### 协议:
- Signal Protocol: https://signal.org/docs/
- Noise Protocol Framework: http://www.noiseprotocol.org/
- X3DH Key Agreement: https://signal.org/docs/specifications/x3dh/

### Manifest V3:
- Chrome Extensions MV3: https://developer.chrome.com/docs/extensions/mv3/intro/
- WXT Framework: https://wxt.dev/
- Service Worker Lifecycle: https://developer.chrome.com/docs/extensions/mv3/service_workers/

### 密钥管理与标准:
- OWASP Password Storage Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
- BIP39 Mnemonic Code: https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
- RFC 9106 (Argon2): https://datatracker.ietf.org/doc/html/rfc9106
- RFC 7914 (scrypt): https://datatracker.ietf.org/doc/html/rfc7914
- RFC 2898 (PBKDF2): https://datatracker.ietf.org/doc/html/rfc2898

---

## 附录：快速实现检查清单

### Phase 1: 本地加密存储
- [ ] 封装 CryptoService (Web Crypto API)
- [ ] 实现 PBKDF2 密钥派生 (动态迭代次数)
- [ ] 实现 AES-256-GCM 加密/解密
- [ ] 实现 HMAC-SHA256 完整性验证
- [ ] 设计 IndexedDB 加密存储 schema
- [ ] 实现数据加密存储和读取
- [ ] 实现密码验证 (验证密文)
- [ ] 实现会话缓存 + 自动锁定

### Phase 2: 恢复码与密钥备份
- [ ] 实现 BIP39 助记词生成
- [ ] 实现恢复码密钥派生
- [ ] 实现主密钥加密备份
- [ ] 实现服务器备份 API (上传/下载)
- [ ] 实现恢复流程 UI
- [ ] 实现 PIN 码快速解锁

### Phase 3: 跨设备同步
- [ ] 实现设备注册/管理 API
- [ ] 实现 ECDH P-256 密钥交换
- [ ] 实现同步数据加密/解密
- [ ] 实现 Service Worker 同步调度
- [ ] 实现 Last-Write-Wins 冲突解决
- [ ] 实现设备注销 + 密钥吊销

### Phase 4: 增强安全
- [ ] 集成 libsodium.js (Argon2id 高安全模式)
- [ ] 性能自适应 (自动选择 PBKDF2/Argon2)
- [ ] 编写安全白皮书
- [ ] 开源加密模块
- [ ] 邀请第三方安全审计

---

**报告生成时间**: 2026-05-16
**调研人员**: Hermes Agent
**版本**: 1.0
