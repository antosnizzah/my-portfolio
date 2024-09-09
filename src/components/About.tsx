import React from 'react';
import { Linkedin, Github } from 'lucide-react';


const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-gray-800 dark:to-black text-white dark:text-gray-300 p-6">
      <div className="flex flex-col md:flex-row items-center justify-center">
       
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 text-cyan-300">About Me</h1>
          <p className="text-xl mb-4">
            After passing out my High School, I decided to pursue my passion for programming. I joined kirinyaga university and enrolled in a coding bootcamp  with teach2give and learned full-stack web development. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem.
          </p>
          <p className="text-xl mb-4">
            My core stack is <span className="text-purple-300">React, javascript, Node.js, and postgreSQL.</span> I am also familiar with TypeScript and Hono. I am always looking to learn new technologies and improve my skills.
          </p>
          <p className="text-xl mb-4">
            I am currently looking for a part-time position as a software developer.
          </p>
          <p className="text-xl mb-8">
            When I'm not coding, I enjoy playing video games, watching movies, and reading novels. I also enjoy learning about <span className="text-purple-300"> psychology,</span> and <span className="text-purple-300">robotics.</span>
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
