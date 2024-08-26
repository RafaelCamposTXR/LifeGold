
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './NavBar.module.css';
import logo from '../../components/media/LifeGold.png';
import fundo from '../../components/media/LifeGoldSelo.png';

function NavBar() {
  const location = useLocation();

  return (
    <div className={style.menu}>
      <ul className={style.listaMenu}>
        <div className={style.arealogos}>
          {/* <img src={logo} className={style.logonavbar}></img> */}
          <img src={fundo} className={style.fundonavbar}></img>
        </div>
        <li style={{overflowY: "hidden"}}><Link to="/" className={location.pathname === '/' ? style.botaoNavegacaoAtivo : style.botaoNavegacao}>SOBRE</Link></li>
        <li style={{overflowY: "hidden"}}><Link to="/piscinas" className={location.pathname === '/piscinas' ? style.botaoNavegacaoAtivo : style.botaoNavegacao}>PISCINAS</Link></li>
        <li style={{overflowY: "hidden"}}><Link to="/produtos" className={location.pathname === '/produtos' ? style.botaoNavegacaoAtivo : style.botaoNavegacao}>PRODUTOS</Link></li>
        <li style={{overflowY: "hidden"}}><Link to="/descubra" className={location.pathname === '/descubra' ? style.botaoNavegacaoAtivo : style.botaoNavegacao}>EQUIPE</Link></li>
        <li style={{overflowY: "hidden"}}><Link to="/contato" className={location.pathname === '/contato' ? style.botaoNavegacaoAtivo : style.botaoNavegacao}>CONTATO</Link></li>
      </ul>
    </div>
    
  );
}

export default NavBar;
