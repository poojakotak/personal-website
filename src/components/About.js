// src/components/About.js
import React from 'react';
import '../styles/About.css';
import placeholderImage from '../about.jpeg'; // Replace with the path to your image

function About() {
    return (
      <section id="about" className="md:pl-[25%] w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-2xl mx-auto p-4 text-center">
          <img src={placeholderImage} alt="Pooja Kotak" className="rounded-full mx-auto mb-4 w-40 h-40 object-cover" />
          <h2 className="text-5xl font-bold mb-3 text-gray-800">Hi, I'm Pooja!</h2>
          <p className="mb-2 text-l font-bold text-gray-800">I love to gain technical knowlegde and build 0 to 1.</p>
          <p className="mb-5">Over the past few months, I’ve enhanced my product sense through self-driven projects, interviewing for various positions, and studying the evolution and pitfalls of current tech products. Having led cross-functional teams and taking initiatives for product growth at Microsoft, I gained a unique perspective on product strategy and user experience. Discover more about my personal projects and interests below.</p>
        </div>
      </section>
    );
  }

export default About;