import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PortFolio from './pages/PortFolio';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portFolio" element={<PortFolio />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;