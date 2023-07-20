import React, { useState } from 'react';
import "./apropos.css";

export default function Apropos() {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <div className="apropos">
      <img className="imagesource2" src="imagesource2.png" alt="imgsource2" />

      <div className="descriptionapropos" onClick={() => toggleItem(0)}>
        <p className="textapropos">Flabilité</p>
        <i className={`iconeAngle fa-solid fa-angle-up ${expandedItems.includes(0) ? 'expanded' : ''}`}></i>
      </div>
      <div className={`menuDepliant ${expandedItems.includes(0) ? 'visible' : ''}`}>
        <p className='margeMenuDepliant'>Flabilité</p>
        {/* Contenu du menu dépliant pour l'élément 0 */}
      </div>

      <div className="descriptionapropos" onClick={() => toggleItem(1)}>
        <p className="textapropos">Respect</p>
        <i className={`iconeAngle fa-solid fa-angle-up ${expandedItems.includes(1) ? 'expanded' : ''}`}></i>
      </div>
      <div className={`menuDepliant ${expandedItems.includes(1) ? 'visible' : ''}`}>
      <p className='margeMenuDepliant'>le respect</p>
        {/* Contenu du menu dépliant pour l'élément 1 */}
      </div>

      <div className="descriptionapropos" onClick={() => toggleItem(2)}>
        <p className="textapropos">Service</p>
        <i className={`iconeAngle fa-solid fa-angle-up ${expandedItems.includes(2) ? 'expanded' : ''}`}></i>
      </div>
      <div className={`menuDepliant ${expandedItems.includes(2) ? 'visible' : ''}`}>
      <p className='margeMenuDepliant'>Service</p>
        {/* Contenu du menu dépliant pour l'élément 2 */}
      </div>

      <div className="descriptionapropos" onClick={() => toggleItem(3)}>
        <p className="textapropos">Sécurité</p>
        <i className={`iconeAngle fa-solid fa-angle-up ${expandedItems.includes(3) ? 'expanded' : ''}`}></i>
      </div>
      <div className={`menuDepliant ${expandedItems.includes(3) ? 'visible' : ''}`}>
      <p className='margeMenuDepliant'>Sécurité</p>
        {/* Contenu du menu dépliant pour l'élément 3 */}
      </div>
    </div>
  );
}
