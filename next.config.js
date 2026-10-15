// Hub–Spoke subpath: PUBLIC_SUBPATH = /wellness-shilajit (Section 1.5)
const SUBPATH = '/wellness-shilajit';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: SUBPATH,
  assetPrefix: SUBPATH,
  trailingSlash: false, // TRAILING_SLASH_POLICY: DISABLED
  reactStrictMode: true,
  images: {
    // Remote product images from the merchant CDN (Shopify) only.
    remotePatterns: [
      { protocol: 'https', hostname: 'wellnessnest.co', pathname: '/cdn/shop/files/**' },
      { protocol: 'https', hostname: 'cdn.shopify.com', pathname: '/s/files/**' },
    ],
  },
  env: { NEXT_PUBLIC_BASE_PATH: SUBPATH },
};

module.exports = nextConfig;
