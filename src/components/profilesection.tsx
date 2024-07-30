import React from 'react';
import { Download, Linkedin, Github } from 'lucide-react';

const ProfileSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-gray-800 dark:to-black text-white dark:text-gray-300 text-center">
      <img
        src=""
        alt="Profile"
        className="rounded-full w-24 h-24 mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">Hi, I'm Antony Gatitu Gichuki</h1>
      <p className="text-xl mb-4">I'm a Computer Science student at Kirinyaga University.</p>
      <div className="flex space-x-4 justify-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact me →
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>My Resume</span>
        </button>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default ProfileSection;
