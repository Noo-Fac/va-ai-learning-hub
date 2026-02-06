/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  // Disable Server Actions to prevent build/runtime mismatch errors
  experimental: {
    serverActions: false,
  },
}

module.exports = nextConfig