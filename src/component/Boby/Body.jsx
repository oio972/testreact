import React, { useEffect, useState } from "react";
import "./body.css";
import Apartment from "../Apartment/Apartment";

const Body = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchApartments();
  }, []);

  function fetchApartments() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }

  return (
    <div className="body">
      {apartments.map((apartment) => (
        <a className="aaa" href="/FicheLogement" key={apartment.id}>
          <div className="block">
            <p className="titleLocation">{apartment.title}</p>
            <img className="imageLocation" src={apartment.cover} alt={apartment.title} />
          </div>
          <Apartment apartment={apartment} />
        </a>
      ))}
    </div>
  );
};

export default Body;
