import React from 'react';
import './MenuItens.css';

function MenuItem({ name, image}) {
  return (
    <div className="item-menu">
      <img src={image} className="image" alt=""/>
      <div className="overlay">
        <p>Ver detalhes</p>
      </div>
      <div className="nome-item">
        {name}
      </div>
    </div>
  );
}

export default MenuItem;