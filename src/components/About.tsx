import React from 'react';
import { Linkedin, Github } from 'lucide-react';

// Replace with the correct image path
const profileImage = '/path/to/your-image.jpg'; // Example placeholder

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-gray-800 dark:to-black text-white dark:text-gray-300 p-6">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        {/* Left side: Image */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-white dark:border-gray-800 transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right side: Text */}
        <div className="w-full md:w-1/2 lg:w-2/3 text-center md:text-left border-2 border-white dark:border-gray-800 p-8 rounded-lg shadow-lg bg-gray-900 bg-opacity-50 transform transition-transform duration-500 hover:scale-105">
          <h1 className="text-5xl font-bold mb-4 text-cyan-300">About Me</h1>
          <p className="text-xl mb-4">
            After high school, I pursued my passion for programming by joining Kirinyaga University and enrolling in a coding bootcamp with Teach2Give, where I learned full-stack web development. My favorite part of programming is solving problems. I love the feeling of finally figuring out a solution.
          </p>
          <p className="text-xl mb-4">
            My core stack includes <span className="text-purple-300">React, JavaScript, Node.js, and PostgreSQL</span>. I am also familiar with TypeScript and Hono. I constantly seek to learn new technologies and improve my skills.
          </p>
          <p className="text-xl mb-4">
            I am currently looking for a part-time position as a software developer.
          </p>
          <p className="text-xl mb-8">
            In my free time, I enjoy playing video games, watching movies, and reading novels. I'm also interested in <span className="text-purple-300">psychology</span> and <span className="text-purple-300">robotics</span>.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 text-gray-300 hover:text-white transition-colors duration-300" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <Github className="w-8 h-8 text-gray-300 hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
