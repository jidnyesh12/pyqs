import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    eslint: {
        // Disable ESLint during builds - we'll run it in GitHub Actions instead
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    reactStrictMode: true,
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
}

export default nextConfig
