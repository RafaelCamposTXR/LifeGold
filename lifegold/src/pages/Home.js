import React from 'react';
import logo from '../central.png';

function Home() {
    return (
        <div className="Home">
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