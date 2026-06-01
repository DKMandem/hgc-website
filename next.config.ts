import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // Pin the workspace root to THIS project directory. Without this, Next/Turbopack
  // walks up looking for a lockfile and picks up the stray C:\Users\Donovan\package-lock.json,
  // making it watch the entire home folder (the cause of the runaway dev-server memory use).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
