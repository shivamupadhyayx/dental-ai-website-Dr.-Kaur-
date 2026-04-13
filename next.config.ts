import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow mobile testing via local network IP:
  allowedDevOrigins: ['10.156.72.62'],
};

export default nextConfig;
