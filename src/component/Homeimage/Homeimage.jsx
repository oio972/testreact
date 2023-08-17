// Importation des styles CSS spécifiques au composant
import "./Homeimage.css";  

// Définition du composant Homeimage
const Homeimage = () => {
    return (
        <div className="divimageHome">  
        {/* Conteneur principal pour le composant Homeimage */}
            <img className="imageHome" src="imagesource.png" alt="imageHome" />  
            {/* Affichage de l'image d'accueil */}
            <h1 className="textimageHome">Chez vous, partout et ailleurs</h1>  
            {/* Texte dans l'image */}
            <h1 className="textimageHomeMobile">Chez vous,<br/> partout et ailleurs</h1>  
            {/* Version mobile du texte dans l'image */}
        </div>
    );
};
// Exportation du composant Homeimage en tant qu'exportation par défaut
export default Homeimage;
