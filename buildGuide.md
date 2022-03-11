# Start the App
npx create-next-app --example with-tailwind medium

# Sanity Subscriptions
npm install -g @sanity/cli
sanity init

# Sanity Platform
https://www.sanity.io/manage/personal/projects

# Technologies
`Next.js   Tailwindcss3.0     Typescript        React        Sanity CMS        GROQ`

# Run Sanity as a Backend
in another console of the created sanity, run `sanity start`

# Example of Sanity Query
*[_type == "post"]{
  _id,
  title,
  slug,
  author ->{
  name,
  image
}
}

# Begin Working with Sanity
npm install next-sanity

# Create Sanity.js for API Fetching

To use imageURL 
npm install --save @sanity/image-url

To Use API in mutation
npm i @sanity/client

# Inceamental Static Regeneration (ISR)

*[_type == "post" && slug.current == $slug][0]{
  _id,
  createdAt,
  title,
  author ->{
   name,
   image
  },
  "comments": *[
    _type == "comment" &&
    post._ref ==^._id &&
    approved == true
    ],
  description,
  mainImage,
  slug,
  body

}

# Get Comment Working
Create a new Schema ie comment with it's objects and import in to schema.js


# Deployment of sanity
sanity deploy
