import type { NextConfig } from 'next'

const withPWA = require('next-pwa')

const nextConfig: NextConfig = {
  experimental: {
    proxyPrefetch: 'flexible',
    proxyClientMaxBodySize: '8mb',
    externalProxyRewritesResolve: false,
  },
  skipProxyUrlNormalize: false,
}

export default withPWA(nextConfig)