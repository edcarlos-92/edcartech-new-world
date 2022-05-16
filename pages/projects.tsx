import React from 'react'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import Landing from '../components/pageComponents/Landing'
import Projects from '../components/pageComponents/Projects'
import PageHeading from '../components/PageHeading'

export default function index() {
  return (
    <div>
        <PageHeading PageTitle="Edcartech IT Solutions"/>
        <MainMenu />
        <Projects/>
        <Footer/>
    </div>
  )
}
