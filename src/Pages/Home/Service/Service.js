import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { img, name, description } = service;
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default Service;
