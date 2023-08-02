import React, { useEffect, useState } from "react";
import "./ApartmentHome.css";

const ApartmentHome = () => {
  const [LogementsData, setApartments] = useState([]);
  const [setSelectedApartment] = useState(null);

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
      {LogementsData.map((house) => (
        <div
          className="block"
          key={house.id}
          onClick={() => handleApartmentClick(house)}>
        </div>
      ))}
    </div>
  );
};

export default ApartmentHome;