/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible');

module.exports = withPlausibleProxy()({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['rickandmortyapi.com'],
  },
});
