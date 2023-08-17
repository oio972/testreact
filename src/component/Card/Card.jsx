// Importation de la bibliothèque React et du composant Link depuis react-router-dom
import React from 'react';
import './Card.css';  // Importation des styles CSS spécifiques au composant
import { Link } from 'react-router-dom';

// Définition du composant Card avec une prop appelée "value"
const Card = ({ value }) => {
  return (
      <>
      <article className="articles" key={value}>
        {/* Lien vers la page de détail du logement en utilisant son ID */}
        <Link to={`/FicheLogement/${value.id}`} className="link-card" key={value.id}>
            {/* Affichage de l'image de couverture du logement */}
            <img src={value.cover} alt={value.title} className="img-card" />
            {/* Affichage du titre du logement */}
            <h3 className="title-card">{value.title}</h3>
        </Link>
      </article>
      </>
  );
};
// Exportation du composant Card en tant qu'exportation par défaut
export default Card;

