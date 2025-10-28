import React from 'react'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import Landing from '../components/pageComponents/Landing'
import Projects from '../components/pageComponents/Projects'
import PageHeading from '../components/PageHeading'
import { themeConfig } from '../lib/themeConfig'

export default function index() {
  return (
    <div className={themeConfig.backgrounds.main}>
      <PageHeading PageTitle="Edcartech IT Solutions" />
      <MainMenu />
      <Projects />
      <Footer />
    </div>
  )
}
