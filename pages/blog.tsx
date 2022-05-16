import Posts from '../components/Posts'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import CenterHero from '../components/CenterHero'
import {BlogHeroInfo} from '../utils/appConst'
import PageHeading from '../components/PageHeading'
import { getAllTechTipsPosts } from '../lib/apolloGraphQl'
import SearchForm from '../components/pageComponents/SearchForm'

interface PostProps{
  //posts:Post[]//Or [Post]
}

//const Home: NextPage = (props:PostProps) => {
  //const Home = (props:PostProps) => {
// export default function Blog(props:PostProps){  
export default function Blog(posts:any){  
  const {leftTitle,rightTitle,Desc}= BlogHeroInfo;
  //const{posts}=props
  //console.log(posts.edges)
  return (
    <div className="mx-auto">
   
      <PageHeading PageTitle="Edcartech Tech Tips"/>
      <MainMenu />
      <SearchForm />
      <CenterHero leftTitle={leftTitle} rightTitle={rightTitle} Desc={Desc} />
      <Posts posts={posts} />
      <Footer/>

      {/* <pre>{JSON.stringify(posts.edges,null,2)}</pre> */}

    </div>
  )
}


export async function getServerSideProps() {
  //export async function getStaticProps() {
    const posts = await getAllTechTipsPosts();
    //console.log('result :-->> ', posts);
    return {
      props:posts,
      // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
    }
}
  