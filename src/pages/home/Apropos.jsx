import React, { useState } from 'react';
import Footer from "../../component/Footer/Footer";
import Banner from '../../component/Banner/Banner';
import "../../component/apropos.css";
const Apropos = () => {
  const [expandedItems, setExpandedItems] = useState([]);

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
        <div className="apropos">
          <img className="imagesource2" src="imagesource2.png" alt="imgsource2" />
        <div className='divdescriptionapropos'>
          <div className="descriptionapropos" onClick={() => toggleItem(0)}>
            <p className="textapropos">Flabilité</p>
            <i className={`iconeAngle fa-solid fa-angle-up ${expandedItems.includes(0) ? 'expanded' : ''}`}></i>
          </div>
          <div className={`menuDepliant ${expandedItems.includes(0) ? 'visible' : ''}`}>
            <p className='margeMenuDepliant'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            {/* Contenu du menu dépliant pour l'élément 0 */}
          </div>

          <div className="descriptionapropos" onClick={() => toggleItem(1)}>
            <p className="textapropos">Respect</p>
            <i className={`iconeAngle fa-solid fa-angle-up ${expandedItems.includes(1) ? 'expanded' : ''}`}></i>
          </div>
          <div className={`menuDepliant ${expandedItems.includes(1) ? 'visible' : ''}`}>
          <p className='margeMenuDepliant'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."</p>
            {/* Contenu du menu dépliant pour l'élément 1 */}
          </div>

          <div className="descriptionapropos" onClick={() => toggleItem(2)}>
            <p className="textapropos">Service</p>
            <i className={`iconeAngle fa-solid fa-angle-up ${expandedItems.includes(2) ? 'expanded' : ''}`}></i>
          </div>
          <div className={`menuDepliant ${expandedItems.includes(2) ? 'visible' : ''}`}>
          <p className='margeMenuDepliant'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            {/* Contenu du menu dépliant pour l'élément 2 */}
          </div>

          <div className="descriptionapropos" onClick={() => toggleItem(3)}>
            <p className="textapropos">Sécurité</p>
            <i className={`iconeAngle fa-solid fa-angle-up ${expandedItems.includes(3) ? 'expanded' : ''}`}></i>
          </div>
          <div className={`menuDepliant ${expandedItems.includes(3) ? 'visible descriptionaproposs' : ''}`}>
          <p className='margeMenuDepliant descriptionaproposs'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            {/* Contenu du menu dépliant pour l'élément 3 */}
          </div>
        </div>
        </div>
      </div>
      <div className='aproposFooter'>
        <Footer/>
      </div>
    </div>
  );
}
export default Apropos



