import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    devIndicators:
        process.env.SHOW_DEV_INDICATOR === "true" ? {} : false,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "taha.or.tz",
                pathname: "/wp-content/uploads/**",
            },
        ],
    },
};

export default nextConfig;