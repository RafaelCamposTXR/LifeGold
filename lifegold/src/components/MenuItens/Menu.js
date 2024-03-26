import React from 'react';
import '../styles.css';
import MenuItem from './MenuItem.js';

function Menu() {
  const menuItems = [
    { name: 'Inseticida', price: 5.99 },
    { name: 'outra coisa', price: 2.49 },
    { name: 'outra coisa', price: 1.99 },
  ];

  return (
    <div className="menu">
      <div className="lista-menu">
        {menuItems.map((item, index) => (
          <MenuItem key={index} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
