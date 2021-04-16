import React from 'react';
import Navbar from './Navbar.js'
import './styleHeader.css';

function Header() {
    return (
        <header>
            <div class="container text-center pt-5 pb-2">
                <h1 id="titulo">El Heraldo</h1>
            </div>

            <Navbar />

        </header>

    );
}
export default Header;