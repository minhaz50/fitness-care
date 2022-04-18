import React from "react";
import "./Experts.css";

import expert1 from "../../../images/Experts/Expert1.jpg";
import expert2 from "../../../images/Experts/Expert2.jpg";
import expert3 from "../../../images/Experts/Expert3.jpg";
import expert4 from "../../../images/Experts/Expert4.jpg";
import Expert from "../Expert/Expert";

const experts = [
  { id: 101, name: "WilliamSon", address: "Dhaka", img: expert1 },
  { id: 102, name: "Jack Brain", address: "Khulna", img: expert2 },
  { id: 103, name: "Nehal Pattu", address: "Dhaka", img: expert3 },
  { id: 104, name: "Sana Burg", address: "Mymensingh", img: expert4 },
];

const Experts = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="experts-title">Our Experts</h2>
        <div className="experts-container">
          {experts.map((expert) => (
            <Expert key={expert.id} expert={expert}></Expert>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experts;
