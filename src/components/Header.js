// src/components/Header.js
import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white fixed h-screen w-full md:w-1/4">
      {/* Hamburger Menu Icon */}
      <div className="text-center p-4 md:hidden">
        <button onClick={() => setIsNavOpen(!isNavOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className={`flex-grow ${isNavOpen ? 'flex' : 'hidden'} flex-col justify-center items-center md:flex h-full`}>
        <ul className="space-y-4 text-center">
          <li>
            <a href="#about" className="text-lg hover:text-gray-300">About Me</a>
          </li>
          <li>
            <a href="#resume" className="text-lg hover:text-gray-300">Resume</a>
          </li>
          <li>
            <a href="#portfolio" className="text-lg hover:text-gray-300">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="text-lg hover:text-gray-300">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

  /*function Header() {
    return (
      <header className="w-1/4 h-screen bg-gray-800 text-white fixed">
        <div className="flex flex-col h-full">
          <div className="text-center p-4">
          </div>
          <nav className="flex-grow flex flex-col justify-center items-center">
            <ul className="space-y-4 text-center ">
              <li>
                <a href="#about" className="text-lg hover:text-gray-300">About Me</a>
              </li>
              <li>
                <a href="#resume" className="text-lg hover:text-gray-300">Resume</a>
              </li>
              <li>
                <a href="#portfolio" className="text-lg hover:text-gray-300">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="text-lg hover:text-gray-300">Contact Me</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });*/

export default Header;