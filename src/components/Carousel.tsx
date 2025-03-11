import React, { useState } from 'react';
import chevronIcon from '../assets/icons/chevron.svg';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <img 
        src={images[currentIndex]} 
        alt={`Vue du logement ${currentIndex + 1}`} 
        className="carousel__image" 
      />
      
      {images.length > 1 && (
        <>
          <button 
            className="carousel__control carousel__control--prev" 
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            <img 
              src={chevronIcon} 
              alt="" 
              className="carousel__control-icon carousel__control-icon--prev" 
            />
          </button>
          
          <button 
            className="carousel__control carousel__control--next" 
            onClick={goToNext}
            aria-label="Image suivante"  
          >
            <img 
              src={chevronIcon} 
              alt="" 
              className="carousel__control-icon carousel__control-icon--next" 
            />
          </button>
          
          <div className="carousel__counter">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel; 