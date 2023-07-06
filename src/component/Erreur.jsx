import { Link } from "react-router-dom"
import Banniere from "./Banniere"
import Footer from "./Footer"
import "./erreur.css"
function Erreur(){
    return(
        <div className="bodyErreur">
            <Banniere/>
            <div className="erreur404">
                <h1>404</h1>
                <p className="textOups">oups! La page que vous demandez n'existe pas.</p>
                <p className="textOupsMobile">oups! La page que<br/> vous demandez n'existe pas.</p>
                <Link className="linkRetourner" to="/">Retourner sur la page d'accueil</Link>
            </div>
            <Footer/>
        </div>
        )
}
export default Erreur



