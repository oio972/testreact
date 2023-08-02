import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ house }) => {
  return (
    <div className='width-card'>
      <div className='block-card'>
        <Link to={`/ficheLogement/${house.id}`} className="link-card">
            <img src={house.cover} alt={house.title} className="img-card" />
            <h3 className="title-card">{house.title}</h3>
            <p className="description-card">{house.description}</p>
            {/* Ajoutez d'autres détails du logement ici */}
        </Link>
      </div>
    </div>
  );
};
export default Card;





        
    