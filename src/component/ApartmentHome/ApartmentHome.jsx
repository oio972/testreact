import React, { useEffect, useState } from "react";
import "./ApartmentHome.css";
import Apartment from "../Apartment/Apartment";
import { Link } from "react-router-dom";

const ApartmentHome = () => {
  const [apartments, setApartments] = useState([]);
  const [selectedApartment, setSelectedApartment] = useState(null);

  useEffect(() => {
    fetchApartments();
  }, []);

  function fetchApartments() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }

  function handleApartmentClick(apartment) {
    setSelectedApartment(apartment);
  }

  return (
    <div className="body">
      {apartments.map((apartment) => (
        <div
          className="block"
          key={apartment.id}
          onClick={() => handleApartmentClick(apartment)}
        >
          <Link className="aaa" to={`/FicheLogement/${apartment.id}`}>
            <p className="titleLocation">{apartment.title}</p>
            <img className="imageLocation" src={apartment.cover} alt={apartment.title} />
          </Link>
        </div>
      ))}
      {selectedApartment && (
        <div className="apartment-details">
          <h2>{selectedApartment.title}</h2>
          <img src={selectedApartment.cover} alt={selectedApartment.title} />
          <Apartment apartment={selectedApartment} />
        </div>
      )}
    </div>
  );
};

export default ApartmentHome;


