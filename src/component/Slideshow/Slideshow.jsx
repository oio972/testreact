import "./SlideShow.css";
import ArrowLeft from "./images/ArrowLeft.png";
import ArrowRight from "./images/ArrowRight.png";
import { useState, useEffect } from "react";

const SlideShow = ({ images }) => {
    let [pictures, setPictures] = useState(0);
    let listImg = images.length;
    
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
          setIsDesktop(window.innerWidth >= 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const imgPrecedente = () => {
        if(pictures === 0) {
            setPictures(listImg - 1);
        } else {
            setPictures(pictures - 1);
        }
        return(setPictures);
    };  

    const imgSuivante = () => {
        if(pictures === listImg - 1) {
            setPictures(listImg = 0);
        } else {
            setPictures(pictures + 1);
        }
        return(setPictures);
    };

    return(
        <div className="carousel">
            <>
            {
                listImg > 1 && <img className="arrow-slide arrow-slide-left" src={ArrowLeft} alt="Précedént" onClick={imgPrecedente}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img 
                        key={index} 
                        className={index === pictures ? 'img-carousel-active' : 'img-carousel'} 
                        src={image} 
                        alt="Logement"/>
                    )
                })
            }
            {
                listImg > 1 && <img className="arrow-slide arrow-slide-right" src={ArrowRight} alt="Suivant" onClick={imgSuivante}/>
            }
            </>
            { isDesktop && (
                <p className='slide-count'>{pictures + 1} / {listImg}</p>
            )}
        </div>
    );
};
export default SlideShow
