import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero  from '../../components/Hero'
import AboutUs  from '../../components/AboutUs'
import Features from '../../components/Features'
import Contact from '../../components/Contact'



const LandingPage = () => {
  return (
    
   <div id='home'>

  <Header/>
 <Hero/>
 <AboutUs/>
 <Features/>
 <Contact/>
  <Footer/>
   </div>
    
  )
}

export default LandingPage