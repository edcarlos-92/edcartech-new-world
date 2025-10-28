import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
//

export const config: any = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_ENV === 'production',
}

// set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

//Set up Helper function for generating Images
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source)

// Note: createCurrentUserHook is deprecated in newer versions of next-sanity
// If you need current user functionality, use the client directly or implement custom logic
