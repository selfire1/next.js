import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    middlewarePrefetch: 'strict',
    middlewareClientMaxBodySize: 1024 * 1024 * 12, // 12MB
    externalMiddlewareRewritesResolve: true,
  },
  skipMiddlewareUrlNormalize: true,
} satisfies NextConfig

export default nextConfig