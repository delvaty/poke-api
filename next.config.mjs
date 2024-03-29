/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "raw.githubusercontent.com"},
            { hostname: "pbs.twimg.com" },
            {hostname: "aceternity.com"},

        ]
    },
};

export default nextConfig;
