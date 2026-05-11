# PyPI Publishing Guide for aimemory-mcp-server

**Current Status**: Package built, workflow created, awaiting trusted publisher setup

---

## Package Info

- **Package Name**: `aimemory-mcp-server`
- **Version**: 1.4.0
- **Python**: 3.10+
- **Built Files**: 
  - `aimemory_mcp_server-1.4.0-py3-none-any.whl` (11.9KB)
  - `aimemory_mcp_server-1.4.0.tar.gz` (10.1KB)

---

## Trusted Publishers Setup (Recommended)

GitHub Actions can publish to PyPI without storing credentials using **Trusted Publishers**.

### Step 1: Create PyPI Account

1. Go to https://pypi.org/account/register/
2. Create an account
3. Verify email

### Step 2: Create Project on PyPI

1. Go to https://pypi.org/manage/projects/
2. Click "Add project"
3. Enter name: `aimemory-mcp-server`
4. Click "Create"

### Step 3: Configure Trusted Publisher

1. Go to project settings → Publishing
2. Click "Add a new trusted publisher"
3. Fill in:
   - **PyPI Project Name**: `aimemory-mcp-server`
   - **Owner**: `jingchang0623-crypto`
   - **Repository name**: `aimemory`
   - **Workflow name**: `publish-pypi.yml`
   - **Environment name**: (leave blank for main branch)
4. Click "Add"

### Step 4: Trigger Publishing

**Option A: Create a GitHub Release**
```bash
# Create a release tag
git tag v1.4.0
git push origin v1.4.0

# Then create release on GitHub UI
# The workflow will automatically publish
```

**Option B: Manual Trigger**
```bash
# Go to Actions tab in GitHub
# Select "Publish to PyPI" workflow
# Click "Run workflow"
```

---

## Alternative: Manual Upload (Not Recommended)

If trusted publishers don't work:

```bash
# Create API token on PyPI
# Go to Account settings → API tokens → Add API token

# Upload manually
cd mcp-server
twine upload dist/* --repository pypi
```

---

## Post-Publish Checklist

- [ ] Verify package appears at https://pypi.org/project/aimemory-mcp-server/
- [ ] Test installation: `pip install aimemory-mcp-server`
- [ ] Test command: `aimemory-mcp-server --help`
- [ ] Update website with PyPI badge (already done)
- [ ] Update MCP Server page with pip install command

---

## Version Bumping

For future releases:

1. Update version in `mcp-server/pyproject.toml`
2. Update version in `mcp-server/aimemory_mcp/__init__.py`
3. Build: `cd mcp-server && python -m build`
4. Create GitHub release or trigger workflow

---

## Current Blockers

- Need valid PyPI API token for upload (TWINE_PASSWORD/PYPI_API_TOKEN env vars not available in build environment)
- Round 87 attempted `twine upload dist/*` — got 403 Forbidden (empty credentials)
- GitHub Actions Trusted Publishers workflow exists but needs manual PyPI project creation

**Action Required**: Someone with PyPI account access needs to:
1. Create the project on PyPI
2. Add the trusted publisher configuration
3. OR provide a valid API token for manual upload
