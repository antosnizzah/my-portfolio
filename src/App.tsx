import React from 'react';
import Navbar from './components/Navbar';
import ProfileSection from './components/profilesection';
// import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/About';
import MySkills from './components/Skills';
import WhatImDoing from './components/Experience';
import ProjectsSection from './components/Projects';

const App: React.FC = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <ProfileSection />
      <AboutMe/>
      <MySkills/>
      <ProjectsSection/>
      <WhatImDoing/>
      <Footer />
     
    </div>
  );
};

export default App;
