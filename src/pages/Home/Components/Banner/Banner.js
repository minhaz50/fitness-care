import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container-fluid px-0 mb-5 slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/11/19/12/43/dark-1839088_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-danger">Emergency Service</h2>
            <p>
              EMERGENCY DEPARTMENT is a state if art emergency dept. of
              Bangladesh.This department is staffed with skilled physicians,
              nurses and other medical staffs who are specialized in emergency
              patient care.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/11/19/12/43/dark-1839088_960_720.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-danger">Outdoor Patient Service</h2>
            <p>
              The outpatient department of the hospital can serve 2500 (approx.)
              patients per day through more then 50 examination rooms.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/11/19/12/43/dark-1839088_960_720.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-danger">Indoor Patient Service</h2>
            <p>
              Indoor department deals with admission of patients to hospital.
              The patients are requested to contact IPD Reception counter for
              more details.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/11/19/12/43/dark-1839088_960_720.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-danger">Executive Health Checkup</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              tempore nostrum natus nam voluptate quisquam rerum veniam ut?
              Minima mollitia eaque optio natus perspiciatis? Sint facilis nobis
              nihil consequuntur necessitatibus!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
