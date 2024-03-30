import React, { useState } from 'react';
import './Catalogo.css';

function Catalogo() {
  const [selectedPiscina, setSelectedPiscina] = useState(null);

  const piscinas = [
    { id: 1, image: require('../media/piscina1.jpeg'), details: 'SPA de alvenaria com acabamento em pastilha e jatos de hidromassagem.' },
    { id: 2, image: require('../media/piscina2.jpeg'), details: 'SPA para 6 pessoas, fundação em alvenaria com acabamento em pastilha.' },
    { id: 3, image: require('../media/piscina3.jpeg'), details: 'SPA em alvenaria com acabamento em cimento diamond azul royal.' },
    { id: 4, image: require('../media/piscina4.jpeg'), details: 'SPA em alvenaria com revestimento em pastilha, comporta até 6 pessoas.' },
    { id: 5, image: require('../media/piscina5.jpeg'), details: 'Piscina  de alvenaria com revestimento em pastilha e jato escocês, integrado com a iluminação.' },
    { id: 6, image: require('../media/piscina6.jpeg'), details: 'SPA de alvenaria, revestido em pastilha, coletivo.' },
    { id: 7, image: require('../media/piscina7.jpeg'), details: 'Piscina em alvenaria, revestida com pastilhas.' },
    { id: 8, image: require('../media/piscina8.jpeg'), details: 'Piscina revestida com Vinil.' },
    { id: 9, image: require('../media/piscina9.jpeg'), details: 'Piscina revestida com Vinil e cascata naja  de aço Inox.' },
    { id: 10, image: require('../media/piscina10.jpeg'), details: 'Piscina revestida com Vinil e cascata naja  de aço Inox.' },
    { id: 11, image: require('../media/piscina11.jpeg'), details: 'Piscina de alvenaria revestida com vinil mais cascata niágara de aço Inox.' },
    { id: 12, image: require('../media/piscina12.jpeg'), details: 'Piscina de alvenaria revestida com vinil mais cascata niágara de aço Inox.' },
    { id: 13, image: require('../media/piscina13.jpeg'), details: 'Piscina de alvenaria revestida com vinil mais cascata niágara de aço Inox.' },
    { id: 14, image: require('../media/piscina14.jpeg'), details: 'Piscina de alvenaria revestida com vinil mais cascata niágara de aço Inox.' },
    { id: 15, image: require('../media/piscina15.jpeg'), details: 'Piscina de alvenaria revestida com vinil mais cascata niágara de aço Inox.' },
    { id: 16, image: require('../media/piscina16.jpeg'), details: 'Piscina de alvenaria revestida com vinil mais cascata niágara de aço Inox.' },
    { id: 17, image: require('../media/piscina17.jpeg'), details: 'Piscina de alvenaria revestida com vinil mais cascata niágara de aço Inox.' },
    { id: 18, image: require('../media/piscina18.jpeg'), details: 'Piscina de alvenaria revestida com vinil mais cascata niágara de aço Inox.' },

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
