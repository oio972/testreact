import React from 'react';
import "./home.css";
import { Navigate, useParams } from 'react-router-dom';
import LogementsData from "../../component/Data/LogementsData.json";
import Banner from '../../component/Banner/Banner';
import SlideShow from "../../component/SlideShow/SlideShow"
import Apartment from '../../component/Apartment/Apartment';
import CollapseLogement from '../../component/CollapseLogement/CollapseLogement';
import Footer from "../../component/Footer/Footer";

const FicheLogement = () => {
   const {id} = useParams()
   const LogementData = LogementsData.find((fichelogement) => fichelogement.id === id)
   if(!LogementData) {
      return <Navigate to="/Erreur404"/>
   }
   return(
   <>
      <div className='bodyFicheLogement'>
            <Banner/>
            <SlideShow images={LogementData.pictures}/>
            <Apartment/>
         <div className='blockDescriptionEquipements'>
            {LogementData.description && (
            <div className='descriptions'>
            <CollapseLogement title="Descriptions" content={LogementData.description} />
            </div>
            )}
            {LogementData.description && (
            <div className='equipements'>
            <CollapseLogement title="Equipements" content={LogementData.equipments}/>
            </div>
            )}
         </div>
         <div className='footerWrapper'>
            <Footer/>
         </div>
      </div>
   </>
   )
};
export default FicheLogement
   

         
            