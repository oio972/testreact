import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ house }) => {
  return (
      <>
        <Link to={`/FicheLogement/${house.id}`} className="link-card" key={house.id}>
            <img src={house.cover} alt={house.title} className="img-card" />
            <h3 className="title-card">{house.title}</h3>
            <p className="description-card">{house.description}</p>
            {/* Ajoutez d'autres détails du logement ici */}
        </Link>
      </>
  );
};
export default Card;





        
    