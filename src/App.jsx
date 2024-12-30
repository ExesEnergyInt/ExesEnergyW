import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';

// For Home page
import HomeIndex from './Pages/Home/HomeIndex';
import Hero from './Pages/Home/Hero';

// For Error Messages
import ErrorMess from './Pages/ErrorMessage';

// Service page
import ServiceIndex from './Pages/Services/ServiceIndex';
import ServiceHero from './Pages/Services/ServiceHero';

// Contact Page
import ContactIndex from './Pages/Contact/ContactIndex';
import ContactHero from './Pages/Contact/ContactHero';

// Price Page
import PriceIndex from './Pages/Price/PriceIndex';
import PriceHero from './Pages/Price/PriceHero';

// Articles
// FOR Commercial
import CommArt from './Pages/Articles/Commercial/CommArt';

// FOR Industrial
import IndusArt from './Pages/Articles/Industrial/IndusArt';

// FOR Residential
import ResdArt from './Pages/Articles/Residential/ResdArt';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeIndex />,
    children: [
      { index: true, element: <Hero /> }
    ],
    errorElement: <ErrorMess />,
  },
  {
    path: '/Services',
    element: <ServiceIndex />,
    children: [
      { index: true, element: <ServiceHero /> }
    ],
    errorElement: <ErrorMess />,
  },
  {
    path: '/Contact',
    element: <ContactIndex />,
    children: [
      { index: true, element: <ContactHero /> }
    ],
    errorElement: <ErrorMess />,
  },

  {
    path: '/Price',
    element: <PriceIndex />,
    children: [
      { index: true, element: <PriceHero /> }
    ],
    errorElement: <ErrorMess />
  },

  {
    path: '/Articles/Commart',
    element: <CommArt />,
    errorElement: <ErrorMess />,
  },
  {
    path: '/Articles/Indusart',
    element: <IndusArt />,
    errorElement: <ErrorMess />,
  },

  {
    path: '/Articles/Resdart',
    element: <ResdArt />,
    errorElement: <ErrorMess />,
  }

]);

function App() {
  return (
    <>
      <RouterProvider router={router} >
              <ScrollToTop /> {/* Ensures the page scrolls to the top on route change */}
      
      </RouterProvider>
    </>
  );
}

export default App;
