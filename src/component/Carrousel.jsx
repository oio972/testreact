import "./carrousel.css";

export default function Carrousel() {
    return(
<div className="blocDescription">
        <div className="divimgcarrousel">
            <img className="imgCarrouselMobile" src="imgCarrouselMobile.png" alt="imgsourcemobile2"/>
        </div>
    <div className="bodycarrousel">
        <div>
            <h3>Cozy loft on the Canal Saint-Martin</h3>
            <p>Paris, Île-de-France</p>
            <div className="cozycanalparis"><p className="stylecozycanalparis">Cozy</p><p className="stylecozycanalparis">Canal</p><p className="stylecozycanalparis">Paris 10</p></div>
        </div>
        <div>
            <div className="alexandreCircle">
                <p>Alexandre<br/>Dumas</p>
                <i class="cercleGris fa-solid fa-circle"></i>
            </div>
        <div className="etoile">
            <i class="etoileRouge fa-solid fa-star"></i>
            <i class="etoileRouge fa-solid fa-star"></i>
            <i class="etoileRouge fa-solid fa-star"></i>
            <i class="etoileGrise fa-solid fa-star"></i>
            <i class="etoileGrise fa-solid fa-star"></i>
        </div>
        </div>
    </div>
        <div className="descriptionEquipements">
            <div className="styledescription"><p className="description">Description</p><i class="iconeAngle fa-sharp fa-solid fa-angle-up"></i></div>
            <div className="styledescription"><p className="equipements">Équipements</p><i class="iconeAngle fa-sharp fa-solid fa-angle-up"></i></div>
        </div>
</div>
    )
}
