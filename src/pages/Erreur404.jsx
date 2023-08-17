import React from "react";
import Banner from "../component/Banner/Banner";
import Erreur from "../component/Erreur/Erreur";
import Footer from "../component/Footer/Footer";

// Définition du composant Erreur404
const Erreur404 = () => {
    return (
        <div className="html">  {/* Conteneur principal de la page */}
            <div className="rooot">  {/* Conteneur pour le contenu de la page */}
                <Banner/>  {/* Affichage du composant Banner (en-tête) */}
                <Erreur/>  {/* Affichage du composant Erreur (page d'erreur) */}
            </div>
            <div>
                <Footer/>  {/* Affichage du composant Footer (pied de page) */}
            </div>
        </div>
    );
}
// Exportation du composant Erreur404 en tant qu'exportation par défaut
export default Erreur404;
