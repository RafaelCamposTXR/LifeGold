import React from 'react';
import './MenuItens.css';

function MenuItem({ name, price, image}) {
  return (
    <div className="item-menu">
      <img src={image} className="image" alt=""/>
      <div className="nome-item">
        {name}
      </div>
      <div className="preco-item">
        R${price}
      </div>
      
    </div>
  );
}

export default MenuItem;