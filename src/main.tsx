// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from '../pages/Error.tsx';
import App from './App.tsx';
import AboutMe from './components/About.tsx';
import ProjectsSection from './components/Projects.tsx';
import MySkills from './components/Skills.tsx';
import WhatImDoing from './components/Experience.tsx';
import Contact from './components/Contact.tsx';

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Main layout with Navbar, ProfileSection, Footer, etc.
    errorElement: <Error />, // Error page for handling unknown routes
    children: [
      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: 'projects',
        element: <ProjectsSection />,
      },
      {
        path: 'skills',
        element: <MySkills />,
      },
      {
        path: 'experience',
        element: <WhatImDoing />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
