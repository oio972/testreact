import { Link } from "react-router-dom";
import "./banner.css"
function Banner() {
    return(
    <div>
        <header className="Header">
            <img className="logored" src="logored.png" alt="logo kasa" />
        <div className="link">
            <Link className="lienAccueil" to="/">Accueil</Link>
            <Link className="lienApropos" to="/Apropos">A Propos</Link>
        </div>
        </header>
    </div>
    )
}
export default Banner;