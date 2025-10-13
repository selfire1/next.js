import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    middlewarePrefetch: 'flexible',
    middlewareClientMaxBodySize: '8mb',
    externalMiddlewareRewritesResolve: false,
  },
  skipMiddlewareUrlNormalize: false,
}

module.exports = nextConfig