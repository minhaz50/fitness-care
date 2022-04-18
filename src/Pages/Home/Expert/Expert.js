import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { name, img, address } = expert;
  return (
    <div className="expert-container">
      <img src={img} alt="" />
      <h3 className="details-title">{name}</h3>
      <h1 className="address-details">{address}</h1>
    </div>
  );
};

export default Expert;
