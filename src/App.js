import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Hobbies from './components/Hobbies';
// Import other components here

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Hobbies />
        <Contact />
      </div>
    </Router>
  );
}

export default App;