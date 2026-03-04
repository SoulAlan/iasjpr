import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'identidade.adventistas.org',
      },
    ],
  },
};

export default nextConfig;
