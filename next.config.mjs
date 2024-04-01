/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ['lmgqffgbgpngiabzeafz.supabase.co'],
    },
};

export default nextConfig;