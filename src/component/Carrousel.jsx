import "./carrousel.css"
function Carrousel(){
    return(
        <div>
            <img className="imgcarrousel" src="bodycarrousel.png" alt="carrousel" />
            <div className="blocDescription">
                <h3>Cozy loft on the Canal Saint-Martin</h3>
                <p>Paris, Île-de-France</p>
                <div>
                    <p>Cozy</p><p>Canal</p><p>Paris 10</p>
                    <i class="etoileRouge fa-solid fa-star"></i>
                    <i class="etoileRouge fa-solid fa-star"></i>
                    <i class="etoileRouge fa-solid fa-star"></i>
                    <i class="etoileGrise fa-solid fa-star"></i>
                    <i class="etoileGrise fa-solid fa-star"></i>
                </div>
                <div className="descriptionEquipements">
                    <p>Description</p>
                    <p>Équipements</p>
                </div>
            </div>
        </div>
    )
}
export default Carrousel