import React from "react";
import { NavLink } from "react-router-dom";
import "./banner.css"
import img from "./logored.png"

// Définition du composant Banner
const Banner = () => {
    return(
    <div className="Header">
            <img className="logored" src={img} alt="logokasa"/>
        <div className="link">
            <NavLink className="lienAccueil" activeClassName="lienActif" to="/">Accueil</NavLink>
            <NavLink className="lienApropos" activeClassName="lienActif" to="/Apropos">A Propos</NavLink>
        </div>
    </div>
    )
}
// Exportation du composant Banner en tant qu'exportation par défaut
export default Banner