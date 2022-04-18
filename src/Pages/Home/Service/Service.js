import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { img, name, fee } = service;
  return (
    <div className="service-container">
      <img className="w-100" src={img} alt="" />
      <div className="service-details">
        <h3 className="details-title">{name}</h3>
        <h3 className="details-title">${fee}</h3>
        <button className="enroll-btn">Enroll </button>
      </div>
    </div>
  );
};

export default Service;
