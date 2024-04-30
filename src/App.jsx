import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from './Cover';
import Navbar from './Navbar';
import Portfolio from './Portfolio';

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Cover />} />
        <Route exact path="/nav" element={<Navbar />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
