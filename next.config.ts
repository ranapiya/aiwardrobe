import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  experimental: {
    serverActions: {}, 
  },
};

export default nextConfig;
