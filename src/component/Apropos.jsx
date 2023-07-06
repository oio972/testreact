import Banner from "./Banner"
import Footer from "./Footer"
import "./apropos.css"
function Apropos(){
    return(
        <div>
            <Banner/>
        <div className="apropos">
            <img className="imagesource2" src="imagesource2.png" alt="imgsource2"/>
            <div className="descriptionapropos"><p className="textapropos">Flabilité</p><i class="iconeAngle fa-solid fa-angle-up"></i></div>
            <div className="descriptionapropos"><p className="textapropos">Respect</p><i class="iconeAngle fa-solid fa-angle-up"></i></div>
            <div className="descriptionapropos"><p className="textapropos">Service</p><i class="iconeAngle fa-solid fa-angle-up"></i></div>
            <div className="descriptionapropos"><p className="textapropos">Sécurité</p><i class="iconeAngle fa-solid fa-angle-up"></i></div>
        </div>
            <Footer/>
        </div>
    )
}
export default Apropos
