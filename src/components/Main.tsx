import React from 'react';

const Main: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-gray-800 dark:to-black text-white dark:text-gray-300">
      <div className="text-center">
        <img src="/path-to-your-image.jpg" alt="Antony Gatitu Gichuki" className="rounded-full mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Antony Gatitu Gichuki</h1>
        <p className="text-xl mb-4">I'm a Computer Science student at Kirinyaga University.</p>
        <div className="flex space-x-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Me</button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">My Resume</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
