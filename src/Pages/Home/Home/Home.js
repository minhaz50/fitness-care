import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../../hooks/useServices";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Services from "../Services/Services";

const Home = () => {
  const [services, setServices] = useServices();
  return (
    <>
      <Banner></Banner>

      <div className="container">
        <div className="row">
          <h1 className="services-title">Our Services</h1>
          <div className="services-container">
            {services.slice(0, 3).map((service) => (
              <Service service={service}></Service>
            ))}
          </div>
          <Link to="/services">
            <button className="review-btn">See all Services</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
