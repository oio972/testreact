import React from "react";
import "./apartment.css"

const Apartment = ({ apartment }) => {
  if (!apartment) {
    return null
  }
  return (
    <div className="apartment">
      <h2 className="title">{apartment.title}</h2>
      <img className="cover" src={apartment.cover} alt={apartment.title} />
      <p className="description">{apartment.description}</p>
      <div className="host">
        <img className="hostPicture" src={apartment.host.picture} alt={apartment.host.name} />
        <p className="hostName">{apartment.host.name}</p>
      </div>
      <p className="rating">Rating: {apartment.rating}</p>
      <p className="location">Location: {apartment.location}</p>
      <h3 className="equipmentsTitle">Équipements:</h3>
      <ul className="equipments">
        {apartment.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <h3 className="tagsTitle">Tags:</h3>
      <ul className="tags">
        {apartment.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Apartment;
