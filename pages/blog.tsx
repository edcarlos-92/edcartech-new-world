import Posts from '../components/Posts'
import { sanityClient,urlFor } from '../sanity'
import { Post } from '../sanitymedium/typings'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import CenterHero from '../components/CenterHero'
import {BlogHeroInfo} from '../utils/appConst'
import PageHeading from '../components/PageHeading'

interface PostProps{
  posts:Post[]//Or [Post]
}

//const Home: NextPage = (props:PostProps) => {
  //const Home = (props:PostProps) => {
export default function Blog(props:PostProps){  

  const{posts}=props
  const {leftTitle,rightTitle,Desc}= BlogHeroInfo;
  console.log(posts)

  return (
    <div className="mx-auto">
   
      <PageHeading PageTitle="Edcartech Tech Tips"/>
      <MainMenu />
      <CenterHero leftTitle={leftTitle} rightTitle={rightTitle} Desc={Desc} />
      <Posts posts={posts} urlFor={urlFor}/>
      <Footer/>

    </div>
  )
}

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