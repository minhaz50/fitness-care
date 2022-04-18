import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="expert-container">
      <img src={img} alt="" />
      <h3 className="details-title">{name}</h3>
    </div>
  );
};

export default Expert;
