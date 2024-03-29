import React, { useState } from 'react';
import './MenuEquipe.css';


function MenuEquipe() {

  const [selectedPiscina, setSelectedPiscina] = useState(null);

  const menuItems = [        
    { name: 'TIAGO AUGUSTO', image: require('../media/peneira.jpg'), texto:'20 anos de experiência no ramo de piscinas.É projetista, vendedor, consultor. Possui ddomínio de construção e projeção de piscinas, especialista na área hidráulica e alvenaria de piscinas'},
   
  ];

  const openDetails = (item) => {
    setSelectedPiscina(item);
  };

  const closeDetails = () => {
    setSelectedPiscina(null);
  };

  return (
    <div className="menu">
      <div className="lista-menu">
        {menuItems.map((item) => (
          <div className="item-menu" onClick={() => openDetails(item)} >
          <img src={item.image} className="image" alt=""/>
          <div className="overlay">
            <p>Ver detalhes</p>
          </div>
          <div className="nome-item">
            {item.name}
          </div>
        </div>
        ))}
      </div>
      {selectedPiscina && (
        <div className="popup-container">
          <div className="popup-content">
          <div className="popup-titulo">
              {selectedPiscina.name}
            </div>
            <img src={selectedPiscina.image} className="popup-img" alt={`Piscina ${selectedPiscina.id}`} />
            <p>{selectedPiscina.details}</p>
            <div className="popup-texto">
              {selectedPiscina.texto}
            </div>
            <button onClick={closeDetails}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuEquipe;

