// src/components/Hobbies.js
import React from 'react';

function Hobbies() {
  const hobbies = [
    {
      name: 'Reading',
      description: 'Rating books and sharing reviews with fellow book lovers.',
      trackerLink: 'https://www.goodreads.com/user/show/96101506-pooja-kotak',
    },
    {
      name: 'Running',
      description: 'Tracking my running progress and fitness journey.',
      trackerLink: 'https://www.strava.com/athletes/129411536',
    },
    {
        name: 'Hiking',
        description: 'Climbing the world one step at a time.',
        trackerLink: 'https://www.alltrails.com/members/pooja-kotak-1?ref=header',
    },
    {
        name: 'Coding',
        description: 'Building projects and learning new technologies.',
        trackerLink: 'https://github.com/poojakotak',
      },
    // Add more hobbies as needed
  ];

  return (
    <section id="hobbies" className="md:pl-[25%] w-full h-screen bg-stone-100 flex items-center justify-center">
    <div className="max-w-3xl mx-auto p-4 text-center">
      <h2 className="text-5xl font-bold text-stone-600 mb-6">Hobbies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl text-stone-400 font-semibold mb-2">{hobby.name}</h3>
            <p className="text-stone-600 mb-3">{hobby.description}</p>
            <a href={hobby.trackerLink} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-700">Track my {hobby.name}</a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Hobbies;