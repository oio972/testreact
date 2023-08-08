import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({value}) => {
  return (
      <>
      <article className="articles" key={value}>
        <Link to={`/FicheLogement/${value.id}`} className="link-card" key={value.id}>
            <img src={value.cover} alt={value.title} className="img-card" />
            <h3 className="title-card">{value.title}</h3>
        </Link>
      </article>
      </>
  );
};
export default Card;
