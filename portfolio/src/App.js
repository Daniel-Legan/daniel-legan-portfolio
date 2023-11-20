import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Repos from './components/Repos';
import ContactForm from './components/ContactForm'; // Import the ContactForm component

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/repos" element={<Repos /> } />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
