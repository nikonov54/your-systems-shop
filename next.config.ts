// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/catalog/setevoe-oborudovanie/poe-injectors',
        destination: '/catalog/setevoe-oborudovanie/accessories',
        permanent: true, // 301 редирект
      },
    ];
  },
};

export default nextConfig;