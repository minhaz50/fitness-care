import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="expert-container">
      <h3 className="details-title">{name}</h3>
      <img src={img} alt="" />
    </div>
  );
};

export default Expert;
