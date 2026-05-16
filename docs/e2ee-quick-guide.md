# E2EE 技术调研 - 快速实施指南

> 完整报告: `/home/agentuser/aimemory/docs/e2ee-technical-research.md`

## 核心结论

### 1. 技术栈选择
| 组件 | 选择 | 原因 |
|------|------|------|
| 加密 API | **Web Crypto API** | 原生、零体积、最快 |
| 存储 | **IndexedDB** | 大容量、结构化 |
| 密码哈希 | **PBKDF2** (默认) / Argon2 可选 | PBKDF2 原生支持 |
| 密钥交换 | **ECDH P-256 + HKDF** | 1-RTT，原生支持 |
| 数据加密 | **AES-256-GCM** | AEAD，原生支持 |

### 2. 推荐密钥管理方案
**用户密码派生本地密钥 + BIP39 恢复码**

```
用户密码 --> PBKDF2(310,000, SHA-256) --> 主密钥 MK (256 bits)
  |
  +-> HKDF(MK, "encryption") --> 加密密钥 EK (AES-256-GCM)
  +-> HKDF(MK, "hmac") --> 认证密钥 AK (HMAC-SHA256)
  +-> HKDF(MK, "sync") --> 同步密钥 SK

恢复码 (24词) --> PBKDF2 --> 恢复密钥 RK --> 加密 MK 上传服务器备份
```

### 3. 同步方案
```
1. 用户设备: 生成 ECDH P-256 密钥对，公钥上传服务器
2. 同步时: 用目标设备公钥 + 临时密钥对 → ECDH → HKDF → AES-256-GCM 加密数据
3. 服务器: 只转发加密数据，无法解密
4. 接收方: 用本机私钥解密
```

### 4. Manifest V3 注意点
- ✅ Web Crypto API 完全支持（包括 Service Worker）
- ✅ IndexedDB 完全支持
- ⚠️ Service Worker 会休眠，长时间加密操作放 Popup/Options Page
- ⚠️ 外部库（如 libsodium.js）必须打包，不能远程加载
- ✅ WXT 框架自动处理 MV3 打包

## 实施优先级

### Phase 1 (1-2周): 本地加密存储
- `CryptoService` 封装 Web Crypto API
- PBKDF2 密钥派生 + AES-256-GCM 加密
- IndexedDB 存储 schema
- 会话缓存 + 自动锁定

### Phase 2 (1周): 恢复机制
- BIP39 24词助记词生成
- 主密钥加密备份到服务器
- 恢复流程 UI

### Phase 3 (2周): 跨设备同步
- 设备 ECDH 密钥对管理
- 简化密钥交换（1-RTT）
- Service Worker 同步调度
- Last-Write-Wins 冲突解决

### Phase 4 (1-2周): 增强安全
- Argon2id 高安全模式（libsodium.js）
- 安全白皮书
- 开源加密模块
- 第三方审计

## 关键代码片段

### 密钥派生
```typescript
async function deriveMasterKey(password: string, salt: Uint8Array) {
  const passwordKey = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']
  );
  return await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 310000, hash: 'SHA-256' },
    passwordKey,
    { name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']
  );
}
```

### 数据加密
```typescript
async function encryptData(key: CryptoKey, data: string) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv }, key, new TextEncoder().encode(data)
  );
  return { ciphertext, iv };
}
```

### ECDH 密钥交换
```typescript
async function ecdhKeyExchange(targetPublicKey: CryptoKey) {
  const ephemeralKey = await crypto.subtle.generateKey(
    { name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveKey']
  );
  const sharedSecret = await crypto.subtle.deriveKey(
    { name: 'ECDH', public: targetPublicKey },
    ephemeralKey.privateKey,
    { name: 'HKDF', hash: 'SHA-256' }, false, ['deriveKey']
  );
  return { sharedSecret, ephemeralPublicKey: ephemeralKey.publicKey };
}
```

## 安全注意事项
1. **密码强度**: 最少 12 字符，禁止常见弱密码
2. **恢复码保管**: 用户必须安全保存 24 词助记词
3. **内存安全**: CryptoKey 对象不可导出（extractable: false）
4. **防暴力破解**: PBKDF2 高迭代次数 + UI 限制尝试频率
5. **密钥轮换**: 定期提示用户更换密码

## 竞品差异化
| 维度 | AI Context Flow | aimemory.pro |
|------|-----------------|-------------|
| 技术透明 | 未知 | ✅ 开源加密模块 |
| 安全审计 | 未知 | ✅ 计划第三方审计 |
| 恢复机制 | 未知 | ✅ BIP39 助记词 |
| 安全白皮书 | 无 | ✅ 发布技术文档 |

---
**生成时间**: 2026-05-16  
**文件**: `/home/agentuser/aimemory/docs/e2ee-technical-research.md` (1105 行)
