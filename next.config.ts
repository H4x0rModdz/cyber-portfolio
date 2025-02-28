import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/cyber-portfolio",
  assetPrefix: "/cyber-portfolio/",};

export default nextConfig;
