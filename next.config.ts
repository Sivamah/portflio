import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  transpilePackages: ["@tsparticles/react", "@tsparticles/slim", "@tsparticles/engine"],
};

export default nextConfig;
