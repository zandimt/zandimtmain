// pages/index.tsx

import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
      <div>
        <Head>
          <title>My Portfolio</title>
          <meta name="description" content="Welcome to my personal portfolio!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Navigation Bar */}
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">My Portfolio</div>
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
              <li><a href="#projects" className="text-white hover:text-gray-400">Projects</a></li>
              <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl mb-8">I&apos;m a passionate developer who loves building amazing web applications.</p>
            <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              View My Work
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
};

export default Home;