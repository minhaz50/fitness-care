import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, img, name, fee } = service;
  const nevigate = useNavigate();
  const nevigateToServiceDetail = (id) => {
    nevigate(`/services/${id}`);
  };
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <div className="service-details">
        <h3 className="details-title">{name}</h3>
        <h3 className="details-title">${fee}</h3>
        <button
          onClick={() => nevigateToServiceDetail(id)}
          className="enroll-btn"
        >
          Enroll{" "}
        </button>
      </div>
    </div>
  );
};

export default Service;
