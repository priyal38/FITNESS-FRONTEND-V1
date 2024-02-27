import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero  from '../../components/Hero'
import AboutUs  from './AboutUs'
import Features from './Features'
import Nav from '../../components/Nav'


const LandingPage = () => {
  return (
    <>
    <Nav/>
  {/* <Header/> */}
 <Hero/>
 <AboutUs/>
 <Features/>

  <Footer/>
    </>
  )
}

export default LandingPage