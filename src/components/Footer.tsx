import React from 'react';
import logo from '../assets/logo/LOGOwhite.png'
import '../styles/layout/_footer.scss';

const Footer: React.FC = () => {
    return (
        <div className="footer">

            <img className='footer__image' src={logo} alt='Logo Kasa' />

            <h3 className='footer__text'>© 2020 Kasa. All rights reserved</h3>
            
        </div>
    )
}

export default Footer; 