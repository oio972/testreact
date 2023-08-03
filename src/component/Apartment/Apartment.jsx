import React from "react";
import "./apartment.css"
import { useParams, Navigate } from "react-router-dom";
import LogementData from "../Data/LogementsData.json";
import Tags from "../../component/Tags/Tags"
import Ratings from "../Ratings/Ratings";

const Apartment = () => {
  const id = useParams();
  const LogementsData = LogementData.find((apartment) => apartment.id === id.id);
  if (!LogementsData) {
    return <Navigate to="/Erreur404"/>
  }
  return (
    <div className="information-logement">
      <div>
        <h2 className="title-logement">{LogementsData.title}</h2>
        <p className="location-logement">{LogementsData.location}</p>
        <div className="Tags">
          {LogementsData.tags.map((tags, keytags) => (
            <Tags key={keytags} tag={tags}/>
          ))}
        </div>
      </div>
      <div>
        <div className="host">
          <div className="hostDetail">
            <img className="hostPicture" src={LogementsData.host.picture} alt={LogementsData.host.name} />
            <p className="hostName">{LogementsData.host.name}</p>
          </div>
          <div>
            <Ratings/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartment;




/*<h3 className="equipmentsTitle">Équipements:</h3>
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
</ul>*/