import "./banniere.css"
function Banniere(){
    return(
    <div>
        <header className="Header">
            <img className="logoBanniere" src="logoBanniere.png" alt="logo kasa" />
        </header>
        <div className="imageContainer">
            <img className="imagesource" src="Imagesource.png" alt="imagesource"/>
            <p className="texteimagesource">Chez vous, partout et ailleurs</p>
        </div>
    </div>
    )
}
export default Banniere;