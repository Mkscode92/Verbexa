import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // have to authorize use of profile image in the companion speaking page 

  images : { 
    remotePatterns: [{hostname: 'img.clerk.com'}]
  }
};

export default nextConfig;
