import React, { useState } from "react";
import arrowDown from "./arrow_down.png";
import arrowUp from "./arrow_up.png";

const Collapse = ({ title, desc }) => {
  const [open, setOpen] = useState(false);
  const [checkClose, setcheckClose] = useState(false);

  /**
   * Ouvre le composant si il est fermé.
   * Lance l'animation de fermeture puis ferme le composant au bout de 500ms si ce dernier est ouvert.
   **/
  const handleClick = () => {
    if (!open) {
      setOpen(true);
    } else {
      setcheckClose(true);
      setTimeout(() => {
        setOpen(false);
        setcheckClose(false);
      }, 500);
    }
  };

  return (
    <li className="toggle">
      <button className="top" onClick={handleClick}>
        <label>{title}</label>
        <div className="img-collapse">
          <img src={open ? arrowDown : arrowUp} alt="Flèche" />
        </div>
      </button>
      {open && (
        <div className={`bottom ${checkClose ? "anim-close" : ""}`}>
          {Array.isArray(desc) ? (
            desc.map((item, index) => <p key={`item_${index}`}>{item}</p>)
          ) : (
            <p>{desc}</p>
          )}
        </div>
      )}
    </li>
  );
};
export default Collapse;

