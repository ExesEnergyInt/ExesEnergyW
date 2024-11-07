import React from 'react'
import Nav from '../../Components/nav'
import Footer from '../../Components/footer'
import ServiceHero from './ServiceHero'
import OurService from './OurService'
import Benefits from './Benefits'
// import Benefits from './Benefits'

function ServiceIndex() {
  return (
    <>
      <Nav />
      <ServiceHero />
      <OurService />
      <Benefits />
      {/* <Benefits /> */}
      
      <Footer />
    
    </>
    
  )
}

export default ServiceIndex