import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './TelaContato.module.css';
import img from '../media/fundoTelaContato.png';

function TelaContato() {
  const location = useLocation();

  return (
    <div className={style.menu}>
        <img src={img} className={style.fundo}/>
    </div>
  );
}

export default TelaContato;