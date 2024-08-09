import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profileImage from '../assets/IMG_8390.jpg'; // Adjust the path based on your folder structure

const ProfileSection: React.FC = () => {
  const [text] = useTypewriter({
    words: ["I'm a passionate software engineer with a knack."],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 300,
    delaySpeed: 2000,
  });

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-gray-800 dark:to-black text-white dark:text-gray-300 text-center md:text-left p-6">
      <Fade direction="left" triggerOnce>
        <div className="relative mb-6 md:mb-0 md:mr-12">
          <div className="w-64 h-64 rounded-full border-8 border-white dark:border-gray-300 flex items-center justify-center p-1 animate-spin-slow">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-full h-full"
            />
          </div>
        </div>
      </Fade>
      <Fade direction="right" triggerOnce>
        <div>
          <h1 className="text-5xl font-bold mb-4 text-cyan-300">
            Hello, I'm Antony Gichuki
          </h1>
          <h2 className="text-3xl mb-4">
            And I'm a <span className="text-purple-300">Frontend Developer</span>
          </h2>
          <p className="text-xl mb-8">
            {text}
            <Cursor cursorColor="white" />
          </p>
          <button className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full mb-8">
            Download CV
          </button>
          <div className="flex space-x-6 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default ProfileSection;
