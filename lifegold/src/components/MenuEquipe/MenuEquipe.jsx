import React, { useState } from 'react';
import './MenuEquipe.css';


function MenuEquipe() {

  const [selectedPiscina, setSelectedPiscina] = useState(null);

  const menuItems = [        
    { name: 'GABRIEL MACHADO', image: require('../media/PessoaAnonima.jpg'), texto:' Piscineiro certificado. Assistente técnico. Vendedor '},
    { name: 'CESAR VALTER', image: require('../media/PessoaAnonima.jpg'), texto:' Assistente técnico. \n Piscineiro certificado. \n Social mídia '},
    { name: 'GABRIELLY BORGES', image: require('../media/PessoaAnonima.jpg'), texto:' Assistente técnico. \n Piscineiro certificado. \n Social mídia '},
    { name: 'CRISTIANE BORGES', image: require('../media/PessoaAnonima.jpg'), texto:' Assistente técnico. \n Piscineiro certificado. \n Social mídia '},
    { name: 'TIAGO AUGUSTO', image: require('../media/tiago.png'), texto:' 20 anos de experiência no ramo de piscinas. \n É projetista, vendedor, consultor. \n Possui domínio de construção e projeção de piscinas. \n Especialista na área hidráulica e alvenaria de piscinas'},

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

