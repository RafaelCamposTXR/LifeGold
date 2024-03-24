// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produtos from './pages/Produtos';
import Piscinas from './pages/Piscinas';
import Descubra from './pages/Descubra';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/piscinas" element={<Piscinas />} />
        <Route path="/descubra" element={<Descubra />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
