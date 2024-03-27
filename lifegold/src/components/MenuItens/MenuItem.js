import React, { useState } from 'react';
import './MenuItens.css';

function MenuItem({ name, image}) {

  const [ProdutoS, setProdutoS] = useState(null);

  const openDetails = (MenuItem) => {
    setProdutoS(MenuItem);
  };

  const closeDetails = () => {
    setProdutoS(null);
  };

  return (
    <div className="item-menu" onClick={() => openDetails(MenuItem)}>
      <img src={image} className="image" alt=""/>
      <div className="overlay">
        <p>Ver detalhes</p>
      </div>
      <div className="nome-item">
        {name}
      </div>
      {ProdutoS && (
        <div className="details-modal">
          <div className="details-content">
            <img src={ProdutoS.image} alt={`Piscina ${ProdutoS.id}`} />
            <p>{ProdutoS.details}</p>
            <button onClick={closeDetails}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuItem;