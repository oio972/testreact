import './Ratings.css';  // Importation des styles CSS spécifiques au composant
import { useParams } from "react-router-dom";  // Importation du composant useParams de React Router
import FullStar from './images/RedStar.png';  // Importation de l'image d'étoile pleine
import StarEmpty from './images/GreyStar.png';  // Importation de l'image d'étoile vide
import LogementsData from "../Data/LogementsData.json";  // Importation des données des logements depuis le fichier JSON

// Définition du composant Ratings
const Ratings = () => {
    const id = useParams();  
    // Récupération du paramètre 'id' depuis l'URL
    const LogementData = LogementsData.find(logement => logement.id === id.id);  
    // Recherche des données du logement correspondant à l'ID

    let ratingLogement = [];
    /*let ratingLogement = []; : Cela déclare une variable appelée ratingLogement comme un tableau vide. 
    Ce tableau sera utilisé pour stocker les éléments JSX (les images d'étoiles) 
    qui seront affichés pour représenter la notation du logement.*/
    let fullStar = true;
    /*let fullStar = true; : Cela déclare une variable booléenne appelée fullStar et l'initialise à true. 
    Cette variable est utilisée pour déterminer si les étoiles générées doivent être pleines ou vides, 
    en fonction du rating du logement. Initialement, on suppose que les étoiles seront pleines (true).*/

    // Boucle pour générer les images d'étoiles pleines et vides en fonction du rating
    for (let index = 0; index < 5; index++) {
        if (index === parseInt(LogementData.rating)) {
            fullStar = false;
        }
        if (fullStar === true) {
            ratingLogement.push(<img key={index} className="star" src={FullStar} alt={`${LogementData.rating}/5`} />)
        } else {
            ratingLogement.push(<img key={index} className="star" src={StarEmpty} alt={`${LogementData.rating}/5`} />)
        }
    }

    return (
        <div className="ratings">  
        {/* Conteneur pour les étoiles de notation */}
            {ratingLogement}  
        {/* Affichage des étoiles générées */}
        </div>
    )
};

// Exportation du composant Ratings en tant qu'exportation par défaut
export default Ratings;
