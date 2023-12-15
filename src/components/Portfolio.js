// src/components/Portfolio.js
import React, { useState } from 'react';
import '../styles/Portfolio.css';
import captionsImage from '../captionsai.png';

function Portfolio() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const portfolioItems = [
    {
      title: "Captions' AI Title",
      description: "Further improve Captions' automated Title feature to be more customizable for their users.",
      detailed_description: "Customer support has said users love Captions’ automated Title feature and want to further improve it by making it more customizable for users",
      product_link: "https://docs.google.com/document/d/1Ge6YrAxymorvswptdsbLMaiDec-HTNWDL4DhR88-9vg/edit?usp=sharing",
      design_link: "https://docs.google.com/document/d/1RMpfgiqmgxGgqJUHDMlUqlJcqq8O5mUHQ2pyohgMMiY/edit?usp=sharing",
      delivery_link: "https://docs.google.com/document/d/1fFh6wm1nJTQ4bO6sZbyphBG1Yi9rxqaiLATvNuvkcs0/edit?usp=sharing",
      image: captionsImage
    },
    // Add more items here...
  ];

  return (
    <section id="portfolio" className="md:pl-[25%] w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-4 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-lg cursor-pointer" onClick={() => openModal(item)}>
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10">
          <div className="bg-white p-4 rounded-lg max-w-xl w-full">
            <h3 className="text-xl font-semibold">{selectedItem.title}</h3>
            <p>{selectedItem.detailed_description}</p>
            <a href={selectedItem.product_link} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700 block mt-2">View Product Brief for the engineering team</a>
            <a href={selectedItem.design_link} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700 block mt-2">View Design Brief for the design team</a>
            <a href={selectedItem.delivery_link} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700 block mt-2">View Delivery Plan for the marketing and customer experience teams</a>
            <div className="mt-4">
              <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded block w-full">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
