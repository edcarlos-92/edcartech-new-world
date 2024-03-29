import {createCurrentUserHook,createClient} from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url'
//

export const config:any = {
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV ==="production",
}

// set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

//Set up Helpler function for generating Images
export const urlFor = (source:any) => createImageUrlBuilder(config).image(source);
 
 
//Helper function for using the current logged in user
export const useCurrentUser = createCurrentUserHook(config)
