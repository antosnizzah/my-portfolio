// src/App.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileSection from './components/profilesection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <ProfileSection />
      {/* Renders the components based on the route */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
