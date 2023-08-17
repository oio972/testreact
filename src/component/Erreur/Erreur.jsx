// Importation du composant Link depuis react-router-dom
import { Link } from "react-router-dom";
import "./erreur.css";  // Importation des styles CSS spécifiques au composant

// Définition du composant Erreur
const Erreur = () => {
    return (
        <div className="bodyErreur">  
        {/* Conteneur principal pour la page d'erreur */}
            <div className="erreur404">  
            {/* Conteneur pour le message d'erreur */}
                <h1>404</h1>  
                {/* Affichage du code d'erreur */}
                <p className="textOups">oups! La page que vous demandez n'existe pas.</p>  
                {/* Message d'erreur */}
                <p className="textOupsMobile">oups! La page que<br/> vous demandez n'existe pas.</p>  
                {/* Version mobile du message d'erreur */}
                <Link className="linkRetourner" to="/">Retourner sur la page d'accueil</Link>  
                {/* Lien de retour vers la page d'accueil */}
            </div>
        </div>
    );
};
// Exportation du composant Erreur en tant qu'exportation par défaut
export default Erreur;



