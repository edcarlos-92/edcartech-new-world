import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
    useMutation
  } from "@apollo/client";
import { Loading } from "@nextui-org/react";
import ImageFragment from "./queries/fragments/image";
import {ALL_POST_WITH_SLUG_QUERY, CREATE_POST_COMMENT_QUERY, FETCH_EXAMPLEQUERY, PostFragment, POST_DETAILS_QUERY, SEARCHQUERY, TECH_TIPS_QUERY} from "./queries/fragments/post";


//const fetcher = async (url) => await axios.get(url).then((res) => res.data);


export const API_URL:any = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.edcartech.com/graphql';

  export const client = new ApolloClient({
    uri:API_URL,//process.env.WORDPRESS_API_URL, //'https://cms.edcartech.com/graphql',
    cache: new InMemoryCache()
  });


  async function fetchAPI(query:any, {variables}:any = {}) {
    const headers:any = {'Content-Type': 'application/json'};
    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
      headers[
        'Authorization'
      ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
    }
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({query, variables}),
    });
  
    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      throw new Error('Failed to fetch API');
    }
  
    return json.data;
  }

  export async function getLatestPosts() {
    const data = await fetchAPI(FETCH_EXAMPLEQUERY);
    return data?.posts;
  }

  export async function getAllTechTipsPosts() {
    const result:any = await client.query({ query: TECH_TIPS_QUERY })
    return result.data.posts
  }

  export async function getAllPostsWithSlug() {
    const result:any = await client.query({query: ALL_POST_WITH_SLUG_QUERY})
    console.log('allPosts BackEnd :-->> ', result);
    return result.data.posts
  }

  export async function getDetailPosts(slug:any) {
    const result = await client.query({query: POST_DETAILS_QUERY, variables: { 'id':slug },})
    console.log('DETAIL POST :-->> ', result);
    return result.data.post
  }

  export async function refeshDetailPosts(slug:any) {   
    //const result = await client.refetchQueries({include: [POST_DETAILS_QUERY],} );
    //const result = await client.refetchQueries(  {  include: [POST_DETAILS_QUERY], variables: ['id':slug ]   );
    
    // const result = await client.query({query: POST_DETAILS_QUERY, variables: { 'id':slug },})
    //console.log('REFESHED DETAIL POST :-->> ', result);
    //return result.data.post
  }


/*
  export function CreatePostComment(body:any){
    const {id,name,email,comment}=body;
    const [CreatePostComment, { data, loading, error }]:any  = useMutation(CREATE_POST_COMMENT_QUERY,{ variables: { 'id':id,'name':name,'email':email,'comment':comment },});
    //fetchPolicy: 'network-only', // Doesn't check cache before making a network request
    if (body === "" || body === null ) return 'No Data To Be Sent ...';
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    if (data) return data.json();
  }
  */
  /*
  export function createPostComment(data:any){
    const {id,name,email,comment}=data;
    const result:any =  fetch(API_URL, {
      method: 'POST',
      //headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({query: CREATE_POST_COMMENT_QUERY, variables: { 'id':id,'name':name,'email':email,'comment':comment },}),
    }).then(res => res.json())
      .then(res => console.log(`posts Promise`,res))
      //return result.data;
  }
  */

  /*
  export async function createPostComment(data:any) {
    const {id,name,email,comment}=data;
    const result = await fetchAPI({query: CREATE_POST_COMMENT_QUERY, variables: { 'id':id,'name':name,'email':email,'comment':comment },})
    console.log('Comment Created :-->> ', result);
    return result.data.post
  }
  */



  export function getSearchResultsPromise(){
    const result:any =  fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query: FETCH_EXAMPLEQUERY,}),
    }).then(res => res.json())
      .then(res => console.log(`posts Promise`,res))
      //return result.data;
  }


export function GetSearchResultsUseQuery(keywords:any){
  const { loading, error, data }:any = useQuery(SEARCHQUERY,{ variables: { 'keyword':keywords },});
  //fetchPolicy: 'network-only', // Doesn't check cache before making a network request
  if (keywords === "" || keywords === null ) return 'No Records Found...';
  //if (loading) return 'Loading...'; <h1 className='text-blue-500'>Submitting...</h1>;
  if (loading) return <div className='grid place-items-center h-screen' ><Loading size="xl">Loading...</Loading></div>  ;
  if (error) return `Error! ${error.message}`;
  if (data) return data;
}
//====================================SEARCH TEST =========================
export async function getSearchPostResults() {
    const result:any = await client.query({
      query: gql`
      query GET_SEARCH_RESULTS( $first: Int, $after: String, $query: String ) {
        posts: posts(first: $first, after: $after, where: {search: $query}) {
          edges {
            node {
              ...PostFragment
            }
            cursor
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
       }
       ${ImageFragment}
       ${PostFragment}
       `
    })
    //console.log('allPosts BackEnd :-->> ', result);
    return result.data.posts
  }

  export async function getSearchPostResultsOffSetTotalPagination() {
    const result:any = await client.query({
      query: gql`
      query GET_SEARCH_RESULTS( $first: Int, $after: String, $query: String ) {
       posts: posts(first: $first, after: $after, where: {search: $query}) {
         edges {
           node {
             ...PostFragment
           }
           cursor
         }
         pageInfo {
           hasNextPage
           endCursor
         }
       }
      }
      ${ImageFragment}
      ${PostFragment}
      `
    })
    //console.log('allPosts BackEnd :-->> ', result);
    return result.data.posts
  }

//====================================SEARCH TEST =========================




  


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