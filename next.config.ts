import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['better-sqlite3'],
  turbopack: {},
  poweredByHeader: false,
  // Fix double lockfile warning: only trace from project root
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
