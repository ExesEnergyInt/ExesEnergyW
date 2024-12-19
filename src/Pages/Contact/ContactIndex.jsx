import React from 'react'
import Nav from '../../Components/nav'
import ContactHero from './ContactHero'
import Footer from '../../Components/footer';
import ScrollToTop from '../../Components/ScrollToTop'

function ContactIndex() {
  return (
    <>
      <Nav />
      <ContactHero />
      <Footer />

      <ScrollToTop />
    </>
  )
}

export default ContactIndex