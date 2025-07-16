import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com',"img.icons8.com",'res.cloudinary.com'],
  },
  experimental: {
    serverActions: {}, 
  },
  
};

export default nextConfig;
