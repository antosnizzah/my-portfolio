import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import {Link } from  'react-router-dom'

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 to-black text-white shadow-md py-4 md:py-6 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo or Brand */}
        <div className="flex items-center space-x-8">
          <a href="#home" className="text-lg font-bold hover:text-gray-300">
            My Portfolio
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">projects</Link></li>
        <li><Link to="/">skills</Link></li>
        <li><Link to="/">experience</Link></li>
        <li><Link to="/">contact</Link></li>
        </ul>
        </div>

        {/* Dark Mode Toggle and Hamburger Menu (Mobile) */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
          >
            {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-900" />}
          </button>

          {/* Hamburger Menu Icon for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links (Left-Side) */}
      <div
        className={`fixed top-0 left-0 w-64 bg-gray-900 transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ maxHeight: 'calc(100vh - 100px)', paddingTop: '60px' }} // Adjust height and top padding
      >
        <div className="flex flex-col items-start space-y-4 py-4 px-6 overflow-y-auto h-full">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">projects</Link></li>
        <li><Link to="/">skills</Link></li>
        <li><Link to="/">experience</Link></li>
        <li><Link to="/">contact</Link></li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
