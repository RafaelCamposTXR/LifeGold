import React, { useEffect } from 'react';
import logo from '../components/media/central.png';
import porqueGeral from '../components/media/porquegeral.png';
import contato from '../components/media/contato&creditos.png';
import '../components/styles.css'

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
            <div className ="App">
              <img src={contato} className="App-logo" alt="logo"/>
            </div>
        </div>
    );
}

export default Sobre;