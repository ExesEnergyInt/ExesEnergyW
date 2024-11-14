import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
