/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
};

module.exports = nextConfig;
