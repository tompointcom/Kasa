import React, { Fragment } from 'react';
import background from '../assets/logo/background/background.png'
import '../styles/components/_banner.scss';

const Banner: React.FC = () => {
    return (
        <div className="banner">

            <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>

            <img className='banner__image' src={background} alt='Background Image' />
            
        </div>
    )
}

export default Banner; 