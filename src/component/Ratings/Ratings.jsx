import './Ratings.css';
import { useParams } from "react-router-dom";
import FullStar from './images/RedStar.png';
import StarEmpty from './images/GreyStar.png';
import LogementsData from "../Data/LogementsData.json";

const Ratings = () => {
    const id = useParams();
    const LogementData = LogementsData.find(logement => logement.id === id.id);

    let ratingLogement = [];
        let fullStar = true;
        for (let index = 0; index < 5; index++) {
            if(index === parseInt(LogementData.rating)) {
                fullStar = false;
            }
            if(fullStar === true) {
                ratingLogement.push(<img key={index} className="star" src={FullStar} alt={`${LogementData.rating}/5`}/>)
            } else {
                ratingLogement.push(<img key={index} className="star" src={StarEmpty} alt={`${LogementData.rating}/5`}/>)
            }
        }

    return (
        <div className="ratings">
            {ratingLogement}
        </div>
    )
};
export default Ratings