/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const securityHeaders = [
  {
    key: 'Authentication',
    value: 'Bearer {token}'
  },
  {
    key: 'X-Smart-Db-Id-Token',
    value: 'xyz'
  }
]

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
