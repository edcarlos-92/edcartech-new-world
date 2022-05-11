import { gql } from "@apollo/client";

export const PostFragment = `
 fragment PostFragment on Post {
  id
  title
  excerpt
  slug
  featuredImage {
    node {
      ...ImageFragment
    }
  }
 }
`;

export const FETCH_EXAMPLEQUERY = `
{
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const TECH_TIPS_QUERY = gql`
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
            postId
        }
        }
    }
    }
`;

export const POST_DETAILS_QUERY = gql`
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
        postId
    }
    }
    `; 




export const ALL_POST_WITH_SLUG_QUERY = gql`
{
  posts(first: 10000) {
    edges {
      node {
        slug
      }
    }
  }
}
`;

 //mutation CREATE_COMMENT($id:ID!,$name:String,$email:String,$comment:String) {
export const CREATE_POST_COMMENT_QUERY = gql`
    mutation CREATE_COMMENT($id:Int,$comment:String,$name:String,$email:String) { 
    createComment(input: {commentOn: $id, content: $comment, author: $name, authorEmail:$email}) {
      success
      comment {
        id
        content
        author {
          node {
            name
            email
          }
        }
        date
        commentId
      }
    }
  }
`;


export const SEARCHQUERY = gql `
    query SearchResult($keyword:String){
          posts(where: {search: $keyword, orderby: {field: DATE, order: DESC}}) {
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
        }
    `
    ;    

