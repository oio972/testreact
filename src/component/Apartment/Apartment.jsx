import React from "react";
import { useParams, Navigate } from "react-router-dom";

import "./apartment.css"
import LogementData from "../../component/Data/LogementData.json";

const Apartment = () => {
  const id = useParams();
  const LogementsData = LogementData.find((apartment) => apartment.id === id.id);
  if (!LogementsData) {
    return <Navigate to="/Erreur404"/>
  }
  return (
    <div className="apartment">
      <h2 className="title">{LogementsData.title}</h2>
      <img className="cover" src={LogementsData.cover} alt={LogementsData.title} />
      <p className="description">{LogementsData.description}</p>
      <div className="host">
        <img className="hostPicture" src={LogementsData.host.picture} alt={LogementsData.host.name} />
        <p className="hostName">{LogementsData.host.name}</p>
      </div>
      <p className="rating">Rating: {LogementsData.rating}</p>
      <p className="location">Location: {LogementsData.location}</p>
      <h3 className="equipmentsTitle">Équipements:</h3>
      <ul className="equipments">
        {LogementsData.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <h3 className="tagsTitle">Tags:</h3>
      <ul className="tags">
        {LogementsData.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Apartment;