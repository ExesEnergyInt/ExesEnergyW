import React from 'react'
import Nav from '../../Components/nav'
import Footer from '../../Components/footer'
import ServiceHero from './ServiceHero'
import OurService from './OurService'
import Benefits from './Benefits'
import CaseStudies from './CaseStudies'
import DownToTop from '../../Components/DownToTop'
import ScrollToTop from '../../Components/ScrollToTop'

function ServiceIndex() {
  return (
    <>
      <Nav />
      <ServiceHero />
      <OurService />
      <Benefits />
      <CaseStudies />
      <DownToTop />
      <Footer />

      <ScrollToTop />
    
    </>
    
  )
}

export default ServiceIndex