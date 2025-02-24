import React from 'react';
import Card from './Card';
import { Logement } from '../types';
import '../styles/components/_gallery.scss';

interface GalleryProps {
  logements: Logement[];
}

const Gallery: React.FC<GalleryProps> = ({ logements }) => {
  return (
    <div className="gallery">
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
};

export default Gallery;