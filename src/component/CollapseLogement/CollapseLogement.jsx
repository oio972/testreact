// Importation du hook useState depuis React
import { useState } from 'react';
import './collapseLogement.css';  // Importation des styles CSS spécifiques au composant
import arrow_down from './arrow_down.png';  // Importation de l'image de la flèche

// Définition du composant CollapseLogement avec des propriétés (props) "title" et "content"
const CollapseLogement = ({ title, content }) => {
    // Utilisation du hook useState pour gérer l'état d'affichage du contenu
    const [show, setShow] = useState(false);
    return (
        <div className="collapse-content">
            <button className="accordion" onClick={() => setShow(!show)}>
                {/* Affichage du titre du Collapse */}
                {title}
                {/* Affichage de l'icône de flèche vers le bas ou vers le haut en fonction de l'état d'affichage */}
                <img className={show ? 'arrow arrow_down' : 'arrow arrow_up'} src={arrow_down} alt={content.title} />
            </button>
            
            {show && (
                <div className="panel">
                    {/* Affichage du contenu du Collapse si l'état d'affichage est vrai (true) */}
                    {Array.isArray(content) ?  
                    // Vérification si le contenu est un tableau
                    (
                        <ul className="list-equipements">
                            {/* Parcours des éléments du tableau et affichage sous forme de liste */}
                            {content.map((equipment, keyindex) => (
                                <li key={keyindex}>{equipment}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="collapse-text">{content}</p>
                    )     
                    }
                </div>
            )}
        </div>
    )   
};
// Exportation du composant CollapseLogement en tant qu'exportation par défaut
export default CollapseLogement;
