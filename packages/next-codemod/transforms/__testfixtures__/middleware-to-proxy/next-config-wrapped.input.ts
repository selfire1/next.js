import type { NextConfig } from 'next'

const withPWA = require('next-pwa')

const nextConfig: NextConfig = {
  experimental: {
    middlewarePrefetch: 'flexible',
    middlewareClientMaxBodySize: '8mb',
    externalMiddlewareRewritesResolve: false,
  },
  skipMiddlewareUrlNormalize: false,
}

export default withPWA(nextConfig)