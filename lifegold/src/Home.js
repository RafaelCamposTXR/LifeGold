import React from 'react';
import NavBar from './components/NavBar/NavBar';
import logo from './central.png';

function Home() {
    return (
        <div className="Home">
            <NavBar titulo="Menu Inicial" />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Texto Inicial do site
                </p>
            </header>
        
        </div>
    );
}

export default Home;