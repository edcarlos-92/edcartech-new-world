import React from 'react'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import Landing from '../components/pageComponents/Landing'
import PageHeading from '../components/PageHeading'

const heroInfo = {
    leftTitle:"Innovative Solutions",
    rightTitle:"For Your Business",
    Desc:"Edcartech"
  
  }


export default function index() {
  return (
    <div>
        <PageHeading PageTitle="Edcartech IT Solutions"/>
        <MainMenu />
        <Landing/>
        <Footer/>
    </div>
  )
}
