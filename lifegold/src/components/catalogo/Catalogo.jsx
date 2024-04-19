import React, { useState } from 'react';
import './Catalogo.css';

function Catalogo({piscinas}) {
  const [selectedPiscina, setSelectedPiscina] = useState(null);

  

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
            <div className="overlay">
              <p>Ver detalhes</p>
            </div>
          </div>
        ))}
      </div>
      {selectedPiscina && (
        <div className="details-modal">
          <div className="details-content">
            <div  className='esquerda'>
              <div className='espaco-text'>
                <div className='titulo-piscina'>Life Gold Piscinas</div>
                <div className="details-text">{selectedPiscina.details}</div>
              </div>
              <div className='espaco-botao'>
                <button className="botao-fechar-piscina" onClick={closeDetails}>FECHAR</button>
              </div>
            </div>

            <div className='espaco-img'>
              <img src={selectedPiscina.image} alt={`Piscina ${selectedPiscina.id}`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalogo;
