import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/stories/executive-findings",
        destination: "/stories/the-promise",
        permanent: true,
      },
      {
        source: "/stories/the-access-layer",
        destination: "/stories/the-connector",
        permanent: true,
      },
      {
        source: "/stories/revolving-door",
        destination: "/stories/the-connector",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
