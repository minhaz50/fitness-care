import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviesId } = useParams();
  return (
    <div>
      <h3>Service Id: {serviesId}</h3>
    </div>
  );
};

export default ServiceDetails;
