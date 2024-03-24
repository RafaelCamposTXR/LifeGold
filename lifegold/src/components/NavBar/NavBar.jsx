// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

function NavBar() {
  return (
    <div className={style.menu}>
      <ul className={style.listaMenu}>
        <li><Link to="/" className={style.botaoNavegacao}>Home</Link></li>
        <li><Link to="/sobre" className={style.botaoNavegacao}>Sobre</Link></li>
        <li><Link to="/piscinas" className={style.botaoNavegacao}>Piscinas</Link></li>
        <li><Link to="/produtos" className={style.botaoNavegacao}>Produtos</Link></li>
        <li><Link to="/descubra" className={style.botaoNavegacao}>Descubra</Link></li>
        <li><Link to="/contato" className={style.botaoNavegacao}>Contato</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
