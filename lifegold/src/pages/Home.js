import React from 'react';
import logo from '../central.png';
import style from './Home.css';

function Home() {
    return (
        <div className={style.App}>
            <header>
                <img src={logo} className={style.App-logo} alt="logo" />
            </header>
        </div>
    );
}

export default Home;