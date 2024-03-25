import React, { useEffect } from 'react';
import logo from '../components/media/central.png';
import porqueGeral from '../components/media/porquegeral.png';
import '../components/styles.css';
import TelaContato from '../components/TelaContato/TelaContato';

function Sobre() {
    return (
        <div className="Sobre">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className ="App">
              <img src={porqueGeral} className="App-logo" alt="logo"/>
            </div>
            <br>
            </br>
            <TelaContato/>
        </div>
        
    );
}

export default Sobre;