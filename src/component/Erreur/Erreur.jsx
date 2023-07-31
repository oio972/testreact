import { Link } from "react-router-dom"
import "./erreur.css"

const Erreur = () => {
    return(
        <div className="bodyErreur">
            <div className="erreur404">
                <h1>404</h1>
                <p className="textOups">oups! La page que vous demandez n'existe pas.</p>
                <p className="textOupsMobile">oups! La page que<br/> vous demandez n'existe pas.</p>
                <Link className="linkRetourner" to="/">Retourner sur la page d'accueil</Link>
            </div>
        </div>
        )
}
export default Erreur


