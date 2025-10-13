import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    proxyPrefetch: 'flexible',
    proxyClientMaxBodySize: '8mb',
    externalProxyRewritesResolve: false,
  },
  skipProxyUrlNormalize: false,
}

module.exports = nextConfig