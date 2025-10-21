import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   async redirects() {
    return [
      {
        source: '/',
        destination: '/sport-venues',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
