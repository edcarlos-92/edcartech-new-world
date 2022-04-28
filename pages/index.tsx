import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import CenterHeroHeader from '../components/CenterHeroHeader'
import HeaderNavBar from '../components/HeaderNavBar'
import Posts from '../components/Posts'
import SubHeader from '../components/SubHeader'
import { sanityClient,urlFor } from '../sanity'
import { Post } from '../sanitymedium/typings'
import Footer from '../components/Footer'
//

const heroInfo = {
  leftTitle:"New Day To Learn ",
  rightTitle:"Something New ",
  Desc:"All made for you to always learn something new here"

}

interface PostProps{
  posts:Post[]//Or [Post]
}

//const Home: NextPage = (props:PostProps) => {
  //const Home = (props:PostProps) => {
export default function Home(props:PostProps){  

  const{posts}=props

  console.log(posts)

  return (
    // <div className="max-w-6xl mx-auto">
    <div className="mx-auto">
      <Head>
        <title>Edcartech Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>

      
      {/* <Header /> */}
      <CenterHeroHeader leftTitle={heroInfo.leftTitle} rightTitle={heroInfo.rightTitle} Desc={heroInfo.Desc} />
      {/* <HeaderNavBar />
      <SubHeader /> */}

       {/* Post */}
       <Posts posts={posts} urlFor={urlFor}/>

       <Footer/>

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