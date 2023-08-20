import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/logo-Kasa.png';
import '../../style/Header.scss';

function Header() {
    return (
        <nav className='header-nav'>
            <img src={logo} alt="Logo" />
            <div className='header-link'>
                <Link to="/">Accueuil</Link>
                <Link to="/Apropos">A Propos</Link>
            </div>
        </nav>
    );
}

export default Header;