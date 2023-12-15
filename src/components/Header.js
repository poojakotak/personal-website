// src/components/Header.js
import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

  function Header() {
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
  });

export default Header;