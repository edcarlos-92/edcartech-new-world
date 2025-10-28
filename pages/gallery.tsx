import { Fragment } from 'react'
import Head from 'next/head'
import MainMenu from '../components/MainMenu'
import Footer from '../components/Footer'
import { themeConfig } from '../lib/themeConfig'

export default function GalleryPage() {
   return (
      <div className={themeConfig.backgrounds.main}>
         <Head>
            <title>Project Gallery - EDCARTECH</title>
            <meta name="description" content="View Carlos Semeho's project gallery showcasing various systems and implementations" />
         </Head>

         <MainMenu />

         <main className="pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
               {/* Header */}
               <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                     Project Gallery
                  </h1>
                  {/* <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                     Explore my collection of systems, implementations, and project showcases.
                     This gallery contains over 80 images documenting various projects and technical solutions.
                  </p> */}
               </div>

               {/* Gallery Frame */}
               <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                     <div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                           Systems Screenshots Gallery
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                           Interactive gallery showcasing 80+ project images and system screenshots
                        </p>
                     </div>
                     <a
                        href="https://www.photo-pick.com/online/8a4qSf09.link"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 attention-button hover:animate-none"
                     >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Click here to Open in New Tab in case of slow loading Frame below
                     </a>
                  </div>

                  <div className="relative" style={{ height: '80vh' }}>
                     {/* Try object tag first - sometimes works better than iframe */}
                     <object
                        data="https://www.photo-pick.com/online/8a4qSf09.link"
                        type="text/html"
                        className="w-full h-full border-0"
                        title="Project Gallery"
                     >
                        {/* Fallback to embed tag */}
                        <embed
                           src="https://www.photo-pick.com/online/8a4qSf09.link"
                           type="text/html"
                           className="w-full h-full border-0"
                           title="Project Gallery"
                        />
                        {/* Final fallback to iframe */}
                        <iframe
                           src="https://www.photo-pick.com/online/8a4qSf09.link"
                           className="w-full h-full border-0"
                           title="Project Gallery"
                           allowFullScreen
                           loading="lazy"
                        />
                     </object>
                  </div>
               </div>

               {/* Loading Fallback */}
               <div className="mt-6 text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                     Gallery not loading?
                     <a
                        href="https://www.photo-pick.com/online/8a4qSf09.link"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
                     >
                        Click here to open directly
                     </a>
                  </p>
               </div>

               {/* Alternative Access */}
               <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <div className="text-center">
                     <h4 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
                        Alternative Access Methods
                     </h4>
                     <p className="text-blue-700 dark:text-blue-300 text-sm">
                        If you have trouble accessing the gallery, you can also view my projects on{' '}
                        <a
                           href="https://github.com/edcarlos-92"
                           target="_blank"
                           rel="noreferrer"
                           className="underline hover:text-blue-800 dark:hover:text-blue-200"
                        >
                           GitHub
                        </a>
                        {' '}or contact me directly for a portfolio walkthrough.
                     </p>
                  </div>
               </div>
            </div>
         </main>

         <Footer />
      </div>
   )
}
