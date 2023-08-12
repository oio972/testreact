import "./SlideShow.css";
import ArrowLeft from "./images/ArrowLeft.png";
import ArrowRight from "./images/ArrowRight.png";
import { useState} from "react";

const SlideShow = ({ images }) => {
    // State pour suivre l'index de l'image affichée
    let [pictures, setPictures] = useState(0);

    // Nombre total d'images dans le diaporama
    let listImg = images.length;


    // Fonction pour afficher l'image précédente
    const imgPrecedente = () => {
        if (pictures === 0) {
            setPictures(listImg - 1);
        } else {
            setPictures(pictures - 1);
        }
    };  

    // Fonction pour afficher l'image suivante
    const imgSuivante = () => {
        if (pictures === listImg - 1) {
            setPictures(0);
        } else {
            setPictures(pictures + 1);
        }
    };

    return (
        <div className="carousel">
            {/* Affichage de la flèche gauche uniquement s'il y a plus d'une image */}
            {listImg > 1 && (
                <img
                    className="arrow-slide arrow-slide-left"
                    src={ArrowLeft}
                    alt="Précédent"
                    onClick={imgPrecedente}
                />
            )}

            {/* Affichage des images du diaporama */}
            {images.map((image, index) => {
                return (
                    <img
                        key={index}
                        className={index === pictures ? 'img-carousel-active' : 'img-carousel'}
                        src={image}
                        alt="Logement"
                    />
                );
            })}

            {/* Affichage de la flèche droite uniquement s'il y a plus d'une image */}
            {listImg > 1 && (
                <img
                    className="arrow-slide arrow-slide-right"
                    src={ArrowRight}
                    alt="Suivant"
                    onClick={imgSuivante}
                />
            )}

            {/* Affichage du numéro de l'image en mode bureau */}
                <p className='slide-count'>{pictures + 1} / {listImg}</p>
        
        </div>
    );
};

export default SlideShow;