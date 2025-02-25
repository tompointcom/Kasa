import React from 'react';
import background from '../../assets/background/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import '../../styles/pages/_about.scss';
import DropdownContainer from '../../components/DropdownContainer';
import Footer from '../../components/Footer';

const About: React.FC = () => {
    return (
      <div className='about-page'>
        <div className='about-content'>
          <div className='about__banner'>
            <img className='about__background' src={background} alt="Background Image" />
          </div>
          <DropdownContainer />
        </div>
        <Footer />
      </div>
    );
};

export default About;