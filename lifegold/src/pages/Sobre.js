import React, { useEffect } from 'react';
import logo from '../components/media/LifeGold.png';
import fundoCentral from '../components/media/FundoSubtitulo.png';
import porqueGeralPC from '../components/media/PorqueGeralPC.png';
import porqueGeralMobile from '../components/media/PorqueGeralMobile.png';
import '../components/styles.css';
import TelaContato from '../components/TelaContato/TelaContato';

function Sobre() {
    return (
        <div className="Sobre">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={fundoCentral} className="App-logo" alt="logo" />
            </header>
            <div className ="App">
              <img src={porqueGeralPC} className="PorqueGeralPC" alt="logo"/>
              <img src={porqueGeralMobile} className="PorqueGeralMobile" alt="logo"/>
            </div>
            <TelaContato/>
        </div>
        
    );
}

export default Sobre;