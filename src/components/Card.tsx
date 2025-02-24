import React from "react";
import { Link } from "react-router-dom";
import { Logement } from "../types";
import "../styles/components/_card.scss";

interface CardProps {
    logement: Logement;
  }
  
  const Card: React.FC<CardProps> = ({ logement }) => {
    return (
      <Link to={`/logement/${logement.id}`} className="card">
        <img src={logement.cover} alt={logement.title} className="card__image" />
        <h3 className="card__title">{logement.title}</h3>
      </Link>
    );
  };
  
  export default Card;