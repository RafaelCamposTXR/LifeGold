// NavBar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './NavBar.module.css';

function NavBar() {
  const location = useLocation();

  return (
    <div className={style.menu}>
      <ul className={style.listaMenu}>
        <li><Link to="/" className={location.pathname === '/' ? style.botaoNavegacaoAtivo : style.botaoNavegacao}>SOBRE</Link></li>
        <li><Link to="/produtos" className={location.pathname === '/produtos' ? style.botaoNavegacaoAtivo : style.botaoNavegacao}>PRODUTOS</Link></li>
        <li><Link to="/piscinas" className={location.pathname === '/piscinas' ? style.botaoNavegacaoAtivo : style.botaoNavegacao}>PISCINAS</Link></li>
        <li><Link to="/descubra" className={location.pathname === '/descubra' ? style.botaoNavegacaoAtivo : style.botaoNavegacao}>DESCUBRA</Link></li>
        <li><Link to="/contato" className={location.pathname === '/contato' ? style.botaoNavegacaoAtivo : style.botaoNavegacao}>CONTATO</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
