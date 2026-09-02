import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/stories/executive-findings',
        destination: '/stories/the-promise',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
