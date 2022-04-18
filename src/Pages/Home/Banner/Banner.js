import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../../../images/Banner/Banner1.png";
import Banner2 from "../../../images/Banner/Banner2.png";
import Banner3 from "../../../images/Banner/Banner3.png";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>Power Lifitng</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Cardio</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Cardio</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
