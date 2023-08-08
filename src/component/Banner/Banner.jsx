import React from "react";
import { Link } from "react-router-dom";
import "./banner.css"
import img from "./logored.png"

const Banner = () => {
    return(
    <div className="Header">
            <img className="logored" src={img} alt="logokasa"/>
        <div className="link">
            <Link className="lienAccueil" to="/">Accueil</Link>
            <Link className="lienApropos" to="/Apropos">A Propos</Link>
        </div>
    </div>
    )
}
export default Banner