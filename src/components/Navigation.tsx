import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/LOGO.png';
import '../styles/layout/_header.scss';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className='nav'>
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      <div className='nav__links'>
        <Link 
          to="/" 
          className={`nav__links__linkText ${location.pathname === '/' ? 'active' : ''}`}
        >
          Accueil
        </Link>
        <Link 
          to="/about" 
          className={`nav__links__linkText ${location.pathname === '/about' ? 'active' : ''}`}
        >
          A Propos
        </Link>
      </div>  
    </nav>
  );
};

export default Navigation;