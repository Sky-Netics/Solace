import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { 
    remotePatterns: [ 
      {
        protocol: 'https',
        hostname: 'medusa-public-images.s3.eu-west-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['ecommerce.soroushsalari.com', 'medusa-public-images.s3.eu-west-1.amazonaws.com'],
  }
  
};

export default nextConfig;
