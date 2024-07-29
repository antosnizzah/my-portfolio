import React from 'react';


const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-blue-500 to-purple-600 dark:from-gray-900 dark:to-gray-800">
      {/* <img
        src="../assets/IMG_8390.jpg" // Use your image path here
        alt="Profile"
        className="w-32 h-32 rounded-full"
      /> */}
      <h1 className="mt-5 text-4xl font-bold">Hi, I'm Antony Gatitu Gichuki</h1>
      <p className="mt-3 text-lg">I'm a computer science student at Kirinyaga University.</p>
      <div className="mt-5">
        <button className="px-4 py-2 mx-2 text-white bg-blue-600 rounded hover:bg-blue-700">Contact me</button>
        <button className="px-4 py-2 mx-2 text-white bg-gray-600 rounded hover:bg-gray-700">My Resume</button>
      </div>
    </section>
  );
};

export default Hero;
