import Posts from '../components/Posts'
import { sanityClient,urlFor } from '../sanity'
//import { Post } from '../sanitymedium/typings'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import CenterHero from '../components/CenterHero'
import {BlogHeroInfo} from '../utils/appConst'
import PageHeading from '../components/PageHeading'
import { getAllTechTipsPosts } from '../lib/apolloGraphQl'

interface PostProps{
  //posts:Post[]//Or [Post]
}

//const Home: NextPage = (props:PostProps) => {
  //const Home = (props:PostProps) => {
// export default function Blog(props:PostProps){  
export default function Blog(posts:any){  
  //const{posts}=props
  const {leftTitle,rightTitle,Desc}= BlogHeroInfo;
  //console.log(posts.edges)

  return (
    <div className="mx-auto">
   
      <PageHeading PageTitle="Edcartech Tech Tips"/>
      <MainMenu />
      <CenterHero leftTitle={leftTitle} rightTitle={rightTitle} Desc={Desc} />
      <Posts posts={posts} />
      <Footer/>

      {/* <pre>{JSON.stringify(posts.edges,null,2)}</pre> */}

    </div>
  )
}

export async function getStaticProps() {
    const posts = await getAllTechTipsPosts();
    //console.log('result :-->> ', posts);
    return {
      props:posts,
    }
}
  