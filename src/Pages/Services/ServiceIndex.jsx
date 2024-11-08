import React from 'react'
import Nav from '../../Components/nav'
import Footer from '../../Components/footer'
import ServiceHero from './ServiceHero'
import OurService from './OurService'
import Benefits from './Benefits'
import CaseStudies from './CaseStudies'

function ServiceIndex() {
  return (
    <>
      <Nav />
      <ServiceHero />
      <OurService />
      <Benefits />
      <CaseStudies />
      
      <Footer />
    
    </>
    
  )
}

export default ServiceIndex