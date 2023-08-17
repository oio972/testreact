import './Tags.css';  // Importation des styles CSS spécifiques au composant

// Définition du composant Tags avec une propriété (prop) "tag"
const Tags = ({ tag }) => {
    return (
        <div className="tags">  
        {/* Conteneur pour afficher le tag */}
            {tag}  
            {/* Affichage du contenu du tag */}
        </div>
    );
};

// Exportation du composant Tags en tant qu'exportation par défaut
export default Tags;
