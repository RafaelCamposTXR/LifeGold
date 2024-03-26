import React from 'react';
import './MenuItens.css';

function MenuItem({ name, image}) {
  return (
    <div className="item-menu">
      <div className="overlay">
        <p>Ver detalhes</p>
      </div>
      <img src={image} className="image" alt=""/>
      <div className="nome-item">
        {name}
      </div>
    </div>
  );
}

export default MenuItem;