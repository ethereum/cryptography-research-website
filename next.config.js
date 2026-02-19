/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/posts-research',
        permanent: true,
      },
      {
        source: '/research',
        destination: '/posts-research',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
