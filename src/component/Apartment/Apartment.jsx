// Importation des modules et composants nécessaires
import React from "react";
import "./apartment.css"
import { useParams, Navigate } from "react-router-dom";
import LogementData from "../Data/LogementsData.json";
import Tags from "../../component/Tags/Tags"
import Ratings from "../Ratings/Ratings";

// Définition du composant Apartment
const Apartment = () => {
  // Récupération du paramètre 'id' depuis l'URL en utilisant le crochet useParams de React Router
  const id = useParams();
  // Recherche des données de l'appartement correspondant à l'ID fourni
  const LogementsData = LogementData.find((apartment) => apartment.id === id.id);
    // Si aucune donnée correspondante n'est trouvée, navigation vers la page d'erreur
  if (!LogementsData) {
    return <Navigate to="/Erreur404"/>
  }
    // Rendu des informations sur l'appartement
    return (
      <div className="blockInformationLogement">
        <div className="informationLogementHost">
          <div className="informationLogement">
            {/* Affichage du titre et de l'emplacement de l'appartement */}
            <h2 className="titleLogement">{LogementsData.title}</h2>
            <p className="locationLogement">{LogementsData.location}</p>
            
            <div className="Tags">
              {/* Parcours des balises (tags) et rendu du composant Tags pour chacune */}
              {LogementsData.tags.map((tags, keytags) => (
              <Tags key={keytags} tag={tags}/>
              ))}
            </div>
          </div>
          <div className="host">
          <div className="hostDetail">
            <div className="photoPrenom">
              {/* Affichage de la photo et du nom de l'hôte */}
              <img className="hostPicture" src={LogementsData.host.picture} alt={LogementsData.host.name} />
              <p className="hostName">{LogementsData.host.name}</p>
            </div>
            <div>
              {/* Rendu du composant Ratings */}
              <Ratings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exportation du composant Apartment en tant qu'exportation par défaut
export default Apartment;







