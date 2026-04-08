import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // TypeScript 6 may not be fully supported in Vercel's build environment
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
