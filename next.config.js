/** @type {import('next').NextConfig} */

require('dotenv').config()

module.exports = {
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Disable webpack optimizations that might inject services
  webpack: (config, { isServer }) => {
    // Remove any service worker related plugins
    config.plugins = config.plugins.filter((plugin) => {
      return (
        !plugin.constructor.name.includes('ServiceWorker') &&
        !plugin.constructor.name.includes('Workbox')
      )
    })

    return config
  },

  //using environment variable in next
  env: {
    STEP: process.env.MY_STEP,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    MY_SECRET: process.env.MY_SECRET,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    MY_API_ENDPOINT: '/myapi/version/1',
    //NEXT_PUBLIC_WORDPRESS_API_URL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  },
}
