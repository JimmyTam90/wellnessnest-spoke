// Hub–Spoke subpath. Change it ONLY here (or set BASE_PATH in Vercel env); everything else derives from it.
const SUBPATH = process.env.BASE_PATH || '/wellness-nest';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: SUBPATH,
  assetPrefix: SUBPATH,
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'wellnessnest.co', pathname: '/cdn/shop/files/**' },
      { protocol: 'https', hostname: 'cdn.shopify.com', pathname: '/s/files/**' },
    ],
  },
  env: { NEXT_PUBLIC_BASE_PATH: SUBPATH },
};

module.exports = nextConfig;
