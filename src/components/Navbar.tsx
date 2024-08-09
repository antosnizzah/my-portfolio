import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 to-black text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-8">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#skills" className="hover:text-gray-300">
            Skills
          </a>
          <a href="#experience" className="hover:text-gray-300">
            Experience
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
        >
          {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-900" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
