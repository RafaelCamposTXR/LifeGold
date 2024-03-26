import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './TelaContato.module.css';
import img from '../media/fundoTelaContato.png';
import logo from '../media/LifeGoldlogo.png';

function TelaContato() {
  const location = useLocation();

  return(
    <div className= {style.contato} >
      <div className= {style.texto}>
        ENTRE EM CONTATO
      </div>
      <img src={logo} className={style.logo}/>
      <img src={img} className={style.fundo}/>
    </div>
  );
}

export default TelaContato;