import Posts from '../components/Posts'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import CenterHero from '../components/CenterHero'
import {BlogHeroInfo} from '../utils/appConst'
import PageHeading from '../components/PageHeading'
import {GetSearchResultsUseQuery } from '../lib/apolloGraphQl'
import SearchForm from '../components/pageComponents/SearchForm'
import { useRouter } from 'next/router'

interface PostProps{
  //posts:Post[]//Or [Post]
}

export default  function SearchedBlog(){ 

  const router = useRouter();
  const {keywords}:any = router.query;
  //console.log(`keywords`,keywords);
  const {leftTitle,rightTitle,Desc}= BlogHeroInfo;

  const data = GetSearchResultsUseQuery(keywords);

//console.log(`Arrived At Searches After Queries`,data)

  return (
    <div className="mx-auto">
   
      <PageHeading PageTitle="Edcartech Tech Tips"/>
      <MainMenu />
      <SearchForm />
      <CenterHero leftTitle={leftTitle} rightTitle={rightTitle} Desc={Desc} />
      <Posts posts={data.posts} />
      <Footer/>

      {/* <pre>{JSON.stringify(latestPosts.edges,null,2)}</pre> */}
      {/* <pre>{keywords !=="" ? JSON.stringify(data.posts,null,2) : 'No Records Found'}</pre> */}

    </div>
  )
}