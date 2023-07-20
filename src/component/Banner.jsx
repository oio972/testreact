import { Link } from "react-router-dom";
import "./banner.css"
export default function Banner() {
    return(
    <div className="Header">
            <img className="logored" src="logored.png" alt="logo kasa" />
        <div className="link">
            <Link className="lienAccueil" to="/">Accueil</Link>
            <Link className="lienApropos" to="/Apropos">A Propos</Link>
        </div>
    </div>
    )
}
