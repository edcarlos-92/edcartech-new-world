import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

  export const client = new ApolloClient({
    uri:process.env.WORDPRESS_API_URL, //'https://cms.edcartech.com/graphql',
    cache: new InMemoryCache()
  });

  export async function getAllTechTipsPosts() {
    const result:any = await client.query({
      query: gql`
      query AllPosts {
        posts(where: {orderby: {field: DATE, order: DESC}}) {
          edges {
            node {
              title
              excerpt
              slug
              date
              featuredImage {
                node {
                  sourceUrl
                }
              }
              author {
                node {
                  name
                  firstName
                  lastName
                  avatar {
                    url
                  }
                }
              }
              id
            }
          }
        }
      }`
    })
      return result.data.posts
  }


  export async function getAllPostsWithSlug() {
    const result:any = await client.query({
      query: gql`
      {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `})
    console.log('allPosts BackEnd :-->> ', result);
    return result.data.posts
  }



  export async function getDetailPosts(slug:any) {
    //const postPreview = preview && previewData?.post
    // The slug may be the id of an unpublished post
    //const isId = Number.isInteger(Number(slug))
    //const isSamePost = isId ? Number(slug) === postPreview.id : slug === postPreview.slug
    //const isDraft = isSamePost && postPreview?.status === 'draft'
    //const isRevision = isSamePost && postPreview?.status === 'publish'
    const result = await client.query({
      query: gql

      //post(id: "hello-world", idType: SLUG) {
      `

      query MyQuery2($id:ID!) {
        post(id: $id, idType: SLUG) {
          author {
            node {
              avatar {
                url
              }
              id
              name
              email
            }
          }
          comments {
            nodes {
              commentId
              id
              content
              date
              author {
                node {
                  avatar {
                    url
                  }
                  email
                  id
                  name
                }
              }
            }
          }
          content
          date
          featuredImage {
            node {
              uri
              title
              sourceUrl
            }
          }
          title
          slug
        }
      }

    `,
      //{
        variables: { 'id':slug },
     // }
  })

  /*
      query MyQuery2($slug:String) {
        posts {
          nodes {
            id
            content
            title
            date
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }

            comments {
              nodes {
                content
                date
                author {
                  node {
                    email
                    name
                  }
                }
                authorIp
                commentId
              }
            }
          }
        }
        postBy(slug: $slug) {
          id
        }
      }
  
  */
  
    console.log('dETAIL POST :-->> ', result);
    return result.data.post
  }

        /*
      fragment AuthorFields on User {
        name
        firstName
        lastName
        avatar {
          url
        }
      }
      fragment PostFields on Post {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            ...AuthorFields
          }
        }
        categories {
          edges {
            node {
              name
            }
          }
        }
        tags {
          edges {
            node {
              name
            }
          }
        }
      }
      query PostBySlug($id: string) {
        post(id: $id) {
          ...PostFields
          content
        }
        posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              ...PostFields
            }
          }
        }
      }
      */


/*
      const query = gql`
  query User($okta: String) {
    User(okta: $okta){
      id
    }
  }
`;

client.query({
  query: query,
  variables: {
    okta: 'some string'
  }
})

*/