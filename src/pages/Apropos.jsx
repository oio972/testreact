import React, { useState } from 'react';
import Footer from "../component/Footer/Footer";
import Banner from '../component/Banner/Banner';
import "./apropos.css";  // Importation des styles CSS spécifiques à la page À Propos

const Apropos = () => {
  // State pour gérer les éléments dépliants (expand/collapse)
  const [expandedItems, setExpandedItems] = useState([]);

  // Fonction pour basculer l'état d'un élément dépliant
  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <div className="html">
      <div className='rooot'>
        <Banner/>  
        {/* Affichage du composant Banner (en-tête) */}
        <div className="apropos">
          <img className="imagesource2" src="imagesource2.png" alt="imgsource2" />  {/* Image d'illustration */}
          <div className='divdescriptionapropos'>
            {/* Section dépliante pour "Fiabilité" */}
            <div className="descriptionapropos" onClick={() => toggleItem(0)}>
              <p className="textapropos">Fiabilité</p>
              <i className={`iconeAngle fa-solid fa-angle-up ${expandedItems.includes(0) ? 'expanded' : ''}`}></i>
            </div>
            <div className={`menuDepliant ${expandedItems.includes(0) ? 'visible' : ''}`}>
              <p className='margeMenuDepliant'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
              {/* Contenu du menu dépliant pour l'élément "Fiabilité" */}
            </div>
            
            {/* Répétez les sections similaires pour les autres éléments dépliants */}
            
            <div className="descriptionapropos" onClick={() => toggleItem(1)}>
              <p className="textapropos">Respect</p>
              <i className={`iconeAngle fa-solid fa-angle-up ${expandedItems.includes(1) ? 'expanded' : ''}`}></i>
            </div>
            <div className={`menuDepliant ${expandedItems.includes(1) ? 'visible' : ''}`}>
              <p className='margeMenuDepliant'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."</p>
              {/* Contenu du menu dépliant pour l'élément "Respect" */}
            </div>

            <div className="descriptionapropos" onClick={() => toggleItem(2)}>
              <p className="textapropos">Service</p>
              <i className={`iconeAngle fa-solid fa-angle-up ${expandedItems.includes(2) ? 'expanded' : ''}`}></i>
            </div>
            <div className={`menuDepliant ${expandedItems.includes(2) ? 'visible' : ''}`}>
              <p className='margeMenuDepliant'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
              {/* Contenu du menu dépliant pour l'élément "Service" */}
            </div>

            <div className="descriptionapropos" onClick={() => toggleItem(3)}>
              <p className="textapropos">Sécurité</p>
              <i className={`iconeAngle fa-solid fa-angle-up ${expandedItems.includes(3) ? 'expanded' : ''}`}></i>
            </div>
            <div className={`menuDepliant ${expandedItems.includes(3) ? 'visible descriptionaproposs' : ''}`}>
              <p className='margeMenuDepliant descriptionaproposs'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
              {/* Contenu du menu dépliant pour l'élément "Sécurité" */}
            </div>
          </div>
        </div>
      </div>
      <div className='aproposFooter'>
        <Footer/>  
        {/* Affichage du composant Footer (pied de page) */}
      </div>
    </div>
  );
}
// Exportation du composant Apropos en tant qu'exportation par défaut
export default Apropos;




