import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for routing
import logo from '../../assets/logo-Kasa.png';
import '../../style/Header.scss';

function Header() {
    return (
        <nav className='header-nav'>
            <img src={logo} alt="Logo" />
            <div className='header-link'>
                <Link to="/">Acceuil</Link>
                <Link to="../pages/APropos/index.jsx">A Propos</Link>
            </div>
        </nav>
    );
}

export default Header;