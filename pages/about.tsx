import React from 'react'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import Portfolio from '../components/pageComponents/aboutMe/Portfolio'
import Profile from '../components/pageComponents/aboutMe/Profile'
import Landing from '../components/pageComponents/Landing'
import PageHeading from '../components/PageHeading'
import { themeConfig } from '../lib/themeConfig'

const heroInfo = {
  leftTitle: "Moving You Closer",
  rightTitle: "To Technology",
  Desc: "Edcartech"

}


export default function About() {
  return (
    <div className={themeConfig.backgrounds.main}>
      <PageHeading PageTitle="Edcartech IT Solutions" />
      <MainMenu />
      <Portfolio />
      {/* <Profile /> */}
      {/* <Landing/> */}
      <Footer />

    </div>
  )
}
