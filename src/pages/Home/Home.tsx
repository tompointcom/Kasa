import React from 'react';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import logements from '../../data/logements.json';
import Footer from '../../components/Footer';
import '../../styles/base/_reset.scss';


const Home: React.FC = () => {
  const convertedLogements = logements.map(logement => ({
    ...logement,
    rating: Number(logement.rating)
  }));

  return (
    <div className="home">
      <Banner />
      <Gallery logements={convertedLogements} />
    </div>
  );
};

export default Home;