/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site to ./out — ideal for Cloudflare Pages (and any
  // static host). The landing page has no server runtime, so this is lossless.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
