import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Index from './Pages/Home'; 
import Hero from './Pages/Home/Hero';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Index />}>
      <Route index element={<Hero />} />
    </Route>
  )
);


function App() {
return (
    <RouterProvider router={router}>
      {/* Other components can go here if needed */}
    </RouterProvider>
  );
}

export default App
