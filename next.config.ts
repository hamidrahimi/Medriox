import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
