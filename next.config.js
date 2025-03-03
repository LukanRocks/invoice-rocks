/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.map$/,
      use: 'ignore-loader',
    })
    return config
  },
}

// Bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
