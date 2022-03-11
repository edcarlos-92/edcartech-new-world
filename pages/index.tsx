import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Posts from '../components/Posts'
import SubHeader from '../components/SubHeader'
import { sanityClient,urlFor } from '../sanity'
import { Post } from '../sanitymedium/typings'
//


interface PostProps{
  posts:Post[]//Or [Post]
}

//const Home: NextPage = (props:PostProps) => {
  //const Home = (props:PostProps) => {
export default function Home(props:PostProps){  

  const{posts}=props

  console.log(posts)

  return (
    <div className="max-w-6xl mx-auto">
      <Head>
        <title>Edcartech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Header />
      <SubHeader />

       {/* Post */}
       <Posts posts={posts} urlFor={urlFor}/>

    </div>
  )
}

//export default Home


export const getServerSideProps = async () =>{

  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
      author ->{
      name,
      image
      },
    description,
    mainImage,
    slug
  
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props:{
      posts,
    }
  }

}