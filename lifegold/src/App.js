
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Sobre from './pages/Sobre';
import Produtos from './pages/Produtos';
import Piscinas from './pages/Piscinas';
import Descubra from './pages/Descubra';
import Contato from './pages/Contato';
import './components/styles.css'


function App() {
  <meta name="viewport" content="width=device-width, initial-scale=1.0" ></meta>

  const [showContact, setShowContact] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContact(false);
    }, 7000); // Esconde o container após 10 segundos

    return () => clearTimeout(timer);
  }, []);

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0); // Define a posição de rolagem como o topo da página
    }, [pathname]); // Executa sempre que a localização muda
  
    return null;
  }

  return (
    <Router>
      <ScrollToTop /> {/* Componente para controlar o scroll */}
      <NavBar/>
      {showContact && (
        <div id="contato-container">
          <div id="contato-content">
            <h2>@lifegoldpiscinas</h2>
            <h2>Avenida senador Montandon, 60 - Centro</h2>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/piscinas" element={<Piscinas />} />
        <Route path="/descubra" element={<Descubra />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
