import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    proxyPrefetch: 'strict',
    proxyClientMaxBodySize: 1024 * 1024 * 12, // 12MB
    externalProxyRewritesResolve: true,
  },
  skipProxyUrlNormalize: true,
} satisfies NextConfig

export default nextConfig