import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    devIndicators:
        process.env.SHOW_DEV_INDICATOR === "true" ? {} : false,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
};

export default nextConfig;