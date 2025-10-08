/** @type {import('next').NextConfig} */

require('dotenv').config()

module.exports = {
  reactStrictMode: true,

  // Completely disable all Vercel services
  experimental: {
    instrumentationHook: false,
  },

  // Disable all telemetry and analytics
  telemetry: false,
  analytics: false,

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
