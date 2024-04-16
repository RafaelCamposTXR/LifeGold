import React, { useState } from 'react';
import './Catalogo.css';

function Catalogo() {
  const [selectedPiscina, setSelectedPiscina] = useState(null);

  const piscinas = [
    { id: 1, image: require('../media/piscinavinil0.jpg'), details: 'Piscina AzulVinil' },
    { id: 2, image: require('../media/piscinavinil1.jpg'), details: 'Piscina AzulVinil' },
    { id: 3, image: require('../media/piscinavinil2.jpg'), details: 'Piscina AzulVinil' },
    { id: 4, image: require('../media/piscina1.jpeg'), details: 'Piscina AzulVinil' },
    { id: 5, image: require('../media/piscina2.jpeg'), details: 'Piscina ornamental com deck de madeira' },
    { id: 6, image: require('../media/piscina3.jpeg'), details: 'SPA em alvenaria com acabamento em cimento diamond azul royal.' },
    { id: 7, image: require('../media/piscina4.jpeg'), details: 'Banheira com acabamento em madeira' },
    { id: 8, image: require('../media/piscina5.jpeg'), details: 'Piscina personalizada com iluminação LED' },
    { id: 9, image: require('../media/piscina6.jpeg'), details: 'Banheira com jatos de hidromassagem' },
    { id: 10, image: require('../media/piscina7.jpeg'), details: 'Banheira com acabamento em madeira' },
    { id: 11, image: require('../media/piscina8.jpeg'), details: 'Banheira com jatos de hidromassagem' },
    { id: 12, image: require('../media/piscina9.jpeg'), details: 'Banheira com acabamento em madeira' },
    { id: 13, image: require('../media/piscina10.jpeg'), details: 'Piscina com iluminação LED e deck de madeira' },
    { id: 14, image: require('../media/piscina11.jpeg'), details: 'Piscina em pastilha com espelho d´água e spa acoplado.' },
    { id: 15, image: require('../media/piscina12.jpeg'), details: 'Piscina com iluminação LED e deck de madeira' },
    { id: 16, image: require('../media/piscina13.jpeg'), details: 'Piscina  de pastilha com deck de madeira' },
    { id: 17, image: require('../media/piscina14.jpeg'), details: 'Piscina em cimento liso branco Diamond.' },
    { id: 18, image: require('../media/piscina15.jpeg'), details: 'Piscina de vinil com iluminação LED' },
    { id: 19, image: require('../media/piscina16.jpeg'), details: 'Piscina acoplada com SPA, vinil e iluminação LED' },
    { id: 20, image: require('../media/piscina17.jpeg'), details: 'Spa em alvenaria  revestido por vinil , comporta 6 pessoas' },
    { id: 21, image: require('../media/piscina18.jpeg'), details: 'Spa de vinil com deck de madeira e jatos de hidromassagem' },

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
