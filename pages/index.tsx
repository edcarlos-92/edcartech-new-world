import React from 'react'
import FeaturedSliders from '../components/FeaturedSlides'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import Landing from '../components/pageComponents/Landing'
import PageHeading from '../components/PageHeading'
import data from '../utils/data'


const heroInfo = {
    leftTitle:"Moving You Closer",
    rightTitle:"To Technology",
    Desc:"Edcartech"
  
  }


export default function index() {
  return (
    <div>
        
        <PageHeading PageTitle="Edcartech IT Solutions"/>
        <MainMenu />
        <Landing/>
        <Footer/>
        {/* <FeaturedSliders  data={data.services}/> */}
        {/* <FeaturedSliders /> */}

    </div>
  )
}
