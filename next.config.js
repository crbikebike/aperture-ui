/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/aperture-ui',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
