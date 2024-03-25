import React, { useEffect } from 'react';
import logo from '../components/media/central.png';
import '../components/styles.css'

function Sobre() {
    return (
        <div className="Sobre">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Texto Inicial do site
                </p>
            </header>
        
        </div>
    );
}

export default Sobre;