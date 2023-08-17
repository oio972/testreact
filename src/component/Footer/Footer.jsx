import "./footer.css";  // Importation des styles CSS spécifiques au composant

// Définition du composant Footer
const Footer = () => {
    return (
        <div className="footer">  {/* Conteneur principal du composant Footer */}
            <div>
                <img src="LOGO-footer.png" alt="logo kasa footer" />  {/* Affichage de l'image du logo */}
                <p className="textfooter">© 2020 Kasa. All rights reserved</p>  {/* Texte de droits d'auteur */}
                <p className="textfooter1">© 2020 Kasa. All <br/>rights reserved</p>  {/* Version mobile du texte de droits d'auteur */}
            </div>
        </div>
    );
};
// Exportation du composant Footer en tant qu'exportation par défaut
export default Footer;

