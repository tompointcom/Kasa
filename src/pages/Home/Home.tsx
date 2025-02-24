import React from 'react';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import logements from '../../data/accomodations.json';
import Footer from '../../components/Footer';
import '../../styles/base/_reset.scss';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Banner />
      <Gallery logements={logements} />
      <Footer />
    </div>
  );
};

export default Home;