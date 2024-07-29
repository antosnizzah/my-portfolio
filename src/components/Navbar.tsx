import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <nav className="flex items-center justify-between p-5 bg-gray-100 dark:bg-gray-800 rounded-full shadow-md">
      <div className="flex items-center space-x-6">
        <a href="#home" className="text-lg font-medium text-gray-900 dark:text-gray-100">Home</a>
        <a href="#about" className="text-lg font-medium text-gray-900 dark:text-gray-100">About</a>
        <a href="#projects" className="text-lg font-medium text-gray-900 dark:text-gray-100">Projects</a>
        <a href="#skills" className="text-lg font-medium text-gray-900 dark:text-gray-100">Skills</a>
        <a href="#experience" className="text-lg font-medium text-gray-900 dark:text-gray-100">Experience</a>
        <a href="#contact" className="text-lg font-medium text-gray-900 dark:text-gray-100">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
