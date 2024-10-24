import React from 'react'

import Nav from '../../Components/nav';
import Hero from './Hero';
import Services from './Services';
import Solution from './Solution';
import Testimonials from './Testimonials';
import Partners from './Partners';
import Blogs from './Blogs';
import Questions from './Questions';
import Footer from '../../Components/footer';
import DownToTop from '../../Components/DownToTop';


function HomeIndex() {
  return (
    <>
      <Nav />
      <Hero />
      <Solution />
      <Services />
      <Testimonials />
      <Partners />
      <Blogs />
      <Questions />
      <DownToTop />
      <Footer />
    </>
    
  )
}

export default HomeIndex

// import React from 'react';
// import Nav from '../../Components/nav';
// import Hero from './Hero';
// import Solution from './Solution';
// import Services from './Services';
// import Testimonials from './Testimonials';
// import Partners from './Partners';
// import Blogs from './Blogs';
// import Questions from './Questions';
// import Footer from '../../Components/footer';
// import DownToTop from '../../Components/DownToTop';


// function Index() {
//   return (
//     <>
//       <Nav />
//       <Hero />
//       <Solution />
//       <Services />
//       <Testimonials />
//       <Partners />
//       <Blogs />
//       <Questions />
//       <DownToTop />
//       <Footer />
      
//     </>
//   );
// }

// export default Index;
