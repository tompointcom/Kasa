import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import '../../styles/pages/_error.scss';

const NotFound: React.FC = () => {
  return (
    <div className="error-page">
      <div className="error">
        <h1 className="error__title">404</h1>
        <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error__link">Retour à l'accueil</Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;