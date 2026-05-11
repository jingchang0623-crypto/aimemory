# PyPI Publishing Setup Guide

## Current Status

The MCP Server v1.4.0 is built and ready, but publishing to PyPI failed due to missing trusted publisher configuration.

**Error**: `invalid-publisher: valid token, but no corresponding publisher`

## Option 1: Configure Trusted Publishing (Recommended)

Trusted Publishing is the modern, secure way to publish without API tokens.

### Steps:

1. **Go to PyPI**: https://pypi.org/manage/account/publishing/
2. **Add a new trusted publisher**:
   - PyPI Project Name: `aimemory-mcp-server`
   - Owner: `jingchang0623-crypto`
   - Repository name: `aimemory`
   - Workflow name: `publish-pypi.yml`
   - Environment: (leave empty)
3. **Save the configuration**
4. **Re-run the workflow**:
   ```bash
   gh workflow run publish-pypi.yml --ref v1.4.0
   ```

## Option 2: Use API Token (Fallback)

If trusted publishing doesn't work, use API token:

1. **Create PyPI API Token**: https://pypi.org/manage/account/token/
2. **Add to GitHub Secrets**:
   - Go to: https://github.com/jingchang0623-crypto/aimemory/settings/secrets/actions
   - Add secret: `PYPI_API_TOKEN` with your token value
3. **Update workflow** to use the token:

```yaml
- name: Publish to PyPI
  uses: pypa/gh-action-pypi-publish@release/v1
  with:
    password: ${{ secrets.PYPI_API_TOKEN }}
```

## Option 3: Manual Upload (One-time)

If automation fails, upload manually from local:

```bash
cd /home/agentuser/aimemory/mcp-server
pip install twine
twine upload dist/* --username __token__ --password <your-pypi-token>
```

## Verification

After publishing, verify:
- Package URL: https://pypi.org/project/aimemory-mcp-server/
- Install test: `pip install aimemory-mcp-server`

## Build Artifacts (Ready to Upload)

| File | Size |
|------|------|
| `aimemory_mcp_server-1.4.0-py3-none-any.whl` | 11.9 KB |
| `aimemory_mcp_server-1.4.0.tar.gz` | 10.1 KB |

Location: `/home/agentuser/aimemory/mcp-server/dist/`
