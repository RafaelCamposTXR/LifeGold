import React, { useState } from 'react';
import './MenuEquipe.css';


function MenuEquipe() {

  const [selectedPiscina, setSelectedPiscina] = useState(null);

  const menuItems = [      
    { name: 'TIAGO AUGUSTO', image: require('../media/tiago.png'), texto:'Fundador e responsável técnico. Soma em sua carreira mais de 20 anos de experiência na área. Projetista, coordenador, consultor e  instalador. Todos os requisitos necessários para realizar seu sonho'},
    { name: 'CRISTIANE BORGES', image: require('../media/cristiane.png'), texto:' Sócia. Gerente. Gestora de vendas. Negociadora '},
    { name: 'GABRIEL MACHADO', image: require('../media/gabriel.png'), texto:'Assistente técnico. Representante de vendas. Cuidador de piscinas'},
    { name: 'CESAR VALTER', image: require('../media/cesar.png'), texto:'Assistente técnico. Cuidador de piscinas. Social Media'},
    { name: 'GABRIELLY BORGES', image: require('../media/gabrielly.png'), texto:' Social mídia. Assistente de gestão. Vendedora'},
  ];

  const openDetails = (item) => {
    setSelectedPiscina(item);
  };

  const closeDetails = () => {
    setSelectedPiscina(null);
  };

  return (
    <div className="menu-equipe">
      <div className="lista-menu-equipe">
        {menuItems.map((item) => (
          <div className="item-menu-equipe" onClick={() => openDetails(item)} >
          <img src={item.image} className="image-equipe" alt=""/>
          <div className="overlay-equipe">
            <p>Ver detalhes</p>
          </div>
          <div className="nome-item-equipe">
            {item.name}
          </div>
        </div>
        ))}
      </div>
      {selectedPiscina && (
        <div className="popup-container-equipe">
          <div className="popup-content-equipe">
          <div className="popup-titulo-equipe">
              {selectedPiscina.name}
            </div>
            <img src={selectedPiscina.image} className="popup-img-equipe" alt={`Piscina ${selectedPiscina.id}`} />
            <p>{selectedPiscina.details}</p>
            <div className="popup-texto-equipe">
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

