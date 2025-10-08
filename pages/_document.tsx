/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import * as React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
// import createEmotionServer from '@emotion/server/create-instance';
// import createEmotionCache from '../createEmotionCache';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className="dark">
        <Head>
          {/* PWA primary color */}
          <meta name='theme-color' content='#0A8FDC' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>

          <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
          
          {/* Early service worker and analytics blocking */}
          <script dangerouslySetInnerHTML={{
            __html: `
              // Block service workers and analytics early
              if (typeof window !== 'undefined') {
                // Block service worker registration
                const originalRegister = navigator.serviceWorker?.register;
                if (navigator.serviceWorker && originalRegister) {
                  navigator.serviceWorker.register = function() {
                    return Promise.reject(new Error('Service worker registration blocked'));
                  };
                }
                
                // Block analytics early
                window.__VERCEL_ANALYTICS_DISABLED__ = true;
                window.__SENTRY_DISABLED__ = true;
                
                // Override fetch to block analytics requests
                const originalFetch = window.fetch;
                window.fetch = function(url, options) {
                  if (typeof url === 'string' && (
                    url.includes('vitals.vercel-insights.com') ||
                    url.includes('o529677.ingest.sentry.io') ||
                    url.includes('service-worker-loader')
                  )) {
                    return Promise.reject(new Error('Blocked analytics request'));
                  }
                  return originalFetch.apply(this, arguments);
                };
              }
            `
          }} />

          {/* <script src='/assets/js/microlight.js'></script>
          <script src='/assets/js/prism.js' data-manual></script>
          <link rel='stylesheet' href='/assets/css/prism.css'/> */}


          {/* PWA primary color */}
          {/* <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/default.min.css" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"></script> */}
          {/* <script>{hljs.initHighlightingOnLoad();}</script> */}

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />









        </Head>
        <body className="dark:bg-gray-800">
          <Main />
          <div id='root' />
          <NextScript />
          <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
          <script src='/assets/js/portfolio.js'></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              // Comprehensive service and analytics disabling
              if (typeof window !== 'undefined') {
                // Disable Vercel Analytics
                window.__VERCEL_ANALYTICS_DISABLED__ = true;
                window.__NEXT_DATA__ = window.__NEXT_DATA__ || {};
                window.__NEXT_DATA__.runtimeConfig = window.__NEXT_DATA__.runtimeConfig || {};
                window.__NEXT_DATA__.runtimeConfig.analytics = false;
                
                // Disable Sentry
                window.__SENTRY_DISABLED__ = true;
                if (window.Sentry) {
                  window.Sentry = { 
                    captureException: function() {}, 
                    captureMessage: function() {},
                    init: function() {},
                    configureScope: function() {}
                  };
                }
                
                // Override analytics functions
                if (window.analytics) {
                  window.analytics = function() {};
                }
                
                // Disable service workers
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for(let registration of registrations) {
                      registration.unregister();
                    }
                  });
                }
                
                // Override console methods to prevent service worker errors
                const originalConsoleError = console.error;
                console.error = function(...args) {
                  const message = args[0];
                  if (typeof message === 'string' && 
                      (message.includes('service-worker-loader') || 
                       message.includes('Could not establish connection') ||
                       message.includes('Receiving end does not exist'))) {
                    return; // Suppress these errors
                  }
                  originalConsoleError.apply(console, args);
                };
                
                // Prevent service worker registration
                if (window.addEventListener) {
                  window.addEventListener('beforeunload', function() {
                    if ('serviceWorker' in navigator) {
                      navigator.serviceWorker.getRegistrations().then(function(registrations) {
                        for(let registration of registrations) {
                          registration.unregister();
                        }
                      });
                    }
                  });
                }
              }
            `
          }} />
        </body>
      </Html>

    );
  }
}
