import React, { useState } from 'react';
import './carrousel.css';

function Carrousel() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <body>
      <div className="blocDescription">
        {/* ... */}
        <div className="descriptionEquipements">
          <div className="styledescription" onClick={toggleMenu}>
            <p className="description">Description</p>
            <i className="iconeAngle fa-sharp fa-solid fa-angle-up"></i>
          </div>
          <div className={`menuDepliant ${isMenuVisible ? 'visible' : ''}`}>
            {/* Contenu du menu déroulant */}
          </div>
        </div>
      </div>
    </body>
  );
}

export default Carrousel;