import React, { useState } from 'react';
import './Catalogo.css';

function Catalogo() {
  const [selectedPiscina, setSelectedPiscina] = useState(null);

  const piscinas = [
    { id: 1, image: require('../media/piscina1.png'), details: 'Detalhes da Piscina 1' },
    { id: 2, image: require('../media/piscina2.png'), details: 'Detalhes da Piscina 2' },
    { id: 3, image: require('../media/piscina3.png'), details: 'Detalhes da Piscina 3' },
  ];

  const openDetails = (piscina) => {
    setSelectedPiscina(piscina);
  };

  const closeDetails = () => {
    setSelectedPiscina(null);
  };

  return (
    <div className="catalogo">
      <div className="piscina-grid">
        {piscinas.map((piscina) => (
          <div key={piscina.id} className="piscina-item" onClick={() => openDetails(piscina)}>
            <img src={piscina.image} alt={`Piscina ${piscina.id}`} />
          </div>
        ))}
      </div>
      {selectedPiscina && (
        <div className="details-modal">
          <div className="details-content">
            <img src={selectedPiscina.image} alt={`Piscina ${selectedPiscina.id}`} />
            <p>{selectedPiscina.details}</p>
            <button onClick={closeDetails}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalogo;
