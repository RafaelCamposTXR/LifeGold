import React from 'react';
import '../styles.css';

function MenuItem({ name, price }) {
  return (
    <div className="item-menu">
      <div className="nome-item">{name}</div>
      <div className="preco-item">${price}</div>
    </div>
  );
}

export default MenuItem;