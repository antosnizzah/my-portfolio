import React from 'react';
import Navbar from './components/Navbar';
import ProfileSection from './components/profilesection';
// import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <ProfileSection />
      <Footer />
     
    </div>
  );
};

export default App;
