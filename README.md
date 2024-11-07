<!-- import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomeIndex from './Pages/Home/HomeIndex';
import Hero from './Pages/Home/Hero';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeIndex />}>
      <Route index element={<Hero />} />
    </Route>
  )
);


function App() {
return (
  <RouterProvider router={router} />
  
  );
}

export default App













// theme.js
import { extendTheme } from "@chakra-ui/react";
import tailwindConfig from "../tailwind.config";

// Extract and map the colors
const colors = {
  yellow: tailwindConfig.theme.extend.colors.yellow.DEFAULT,
  exblack: tailwindConfig.theme.extend.colors.exblack.DEFAULT,
  exwhite: tailwindConfig.theme.extend.colors.exwhite.DEFAULT,
  exgreen: tailwindConfig.theme.extend.colors.exgreen.DEFAULT,
};

// Extract and map the breakpoints
const breakpoints = {
  sm: tailwindConfig.theme.extend.breakpoints.sm,
  md: tailwindConfig.theme.extend.breakpoints.md,
  lg: tailwindConfig.theme.extend.breakpoints.lg,
  xl: tailwindConfig.theme.extend.breakpoints.xl,
  "2xl": tailwindConfig.theme.extend.breakpoints["2xl"],
};

// Extend the Chakra theme with colors and breakpoints
const customTheme = extendTheme({ colors, breakpoints });

export default customTheme;
 -->
