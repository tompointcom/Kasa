import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Logement } from '../../types';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Dropdown from '../../components/Dropdown';
import '../../styles/pages/_logementDetail.scss';

const LogementDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [logement, setLogement] = useState<Logement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Charger les données du logement
    const fetchLogement = async () => {
      try {
        // Importation du fichier JSON
        const logementsModule = await import('../../data/logements.json');
        const logements = logementsModule.default;
        
        // Recherche du logement correspondant à l'ID
        const foundLogement = logements.find((item: any) => {
          const logementWithNumberRating: Logement = { ...item, rating: Number(item.rating) };
          return logementWithNumberRating.id === id;
        });
        
        if (foundLogement) {
          setLogement({ ...foundLogement, rating: Number(foundLogement.rating) });
        } else {
          navigate('/not-found');
        }
      } catch (error) {
        console.error('Error fetching logement data:', error);
        navigate('/not-found');
      } finally {
        setLoading(false);
      }
    };

    fetchLogement();
  });

  if (loading) return <div className="loading">Chargement...</div>;
  if (!logement) return null;

  return (
    <div className="logement-page">
      <div className="logement-content">
        {/* Carousel d'images */}
        {logement.pictures && logement.pictures.length > 0 && (
          <Carousel images={logement.pictures} />
        )}
        
        {/* Information de la location */}
        <div className="logement-info">
        <div className="logement-info__left">
          <h1 className="logement-info__title">{logement.title}</h1>
          <p className="logement-info__location">{logement.location}</p>
          
          {/* Ajouter les tags si disponibles */}
          {logement.tags && (
            <div className="logement-info__tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
        
        {/* Information de l'hôte */}
        <div className="logement-info__right">
        <div className="host">
          <p className="host__name">
            {logement.host.name.split(' ').map((part, index) => (
              <span key={index}>{part}</span>
            ))}
          </p>
          <img 
            src={logement.host.picture} 
            alt={`Hôte ${logement.host.name}`} 
            className="host__picture" 
          />
        </div>
          
          {/* Étoiles de notation */}
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`star ${i < logement.rating ? 'active' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Dropdowns pour description et équipements */}
      <div className="logement-dropdowns">
        <Dropdown 
          title="Description" 
          content={logement.description} 
        />
        <Dropdown 
          title="Équipements" 
          content={logement.equipments.join('\n')} 
        />
      </div>
    </div>
  </div>
);
};

export default LogementDetail;