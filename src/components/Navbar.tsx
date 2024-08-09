import React, { useState } from 'react';
import { Moon, Sun, Home, User, MessageCircle, Camera, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Profile', icon: User },
    { name: 'Messages', icon: MessageCircle },
    { name: 'Camera', icon: Camera },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex justify-center items-center">
      <nav className="navbar bg-transparent rounded-lg shadow-lg flex">
        <div className="relative flex justify-center items-center w-full max-w-[420px] h-[70px] bg-[#1E293B] rounded-full mx-auto p-1">
          <ul className="flex w-full justify-around">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className={`relative list-none w-[70px] h-[70px] flex justify-center items-center z-10 cursor-pointer transition-colors duration-300 ${
                  index === activeIndex ? 'text-yellow-500' : 'text-white'
                }`}
                onClick={() => handleItemClick(index)}
              >
                <a href={`#${item.name.toLowerCase()}`} className="flex justify-center items-center w-full h-full">
                  <item.icon className="w-6 h-6" />
                </a>
              </li>
            ))}
          </ul>
          <div
            className="absolute w-[70px] h-[70px] bg-white rounded-full transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${activeIndex * 70}px)`,
            }}
          >
            <div className="absolute top-1/2 left-1/2 w-[50px] h-[50px] bg-[#1E293B] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        <div className="flex items-center space-x-4 ml-5">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
          >
            {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
