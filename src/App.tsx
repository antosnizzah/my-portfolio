// src/App.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileSection from './components/profilesection';
import Footer from './components/Footer';
// import Portfolio from '../pages/portfolio';


const App: React.FC = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <ProfileSection />
      {/* <Portfolio /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
