import React from "react";

const About = () => {
  return (
    <div className="py-5">
      <div className="text-center">
        <h2>About us</h2>
        <p>Learn more about Fitness Care</p>
      </div>
      <hr className="w-50 m-auto" />
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 py-5">
            <h3 className="display-4 mb-4 w-75 pb-2 border-bottom border-2 border-danger">
              Who we are?
            </h3>
            <p className="pe-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              mollitia quaerat modi ratione at aut veritatis consequuntur rerum
              delectus corporis officiis, facere temporibus. Quidem, doloribus?
              Laudantium molestias rem quisquam voluptatem.
            </p>
            <p className="pe-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus autem temporibus veritatis harum adipisci nulla quasi
              in illum recusandae praesentium, quas expedita quae exercitationem
              eveniet voluptatum cum quam eos incidunt.
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid mt-5"
              src="https://i.ibb.co/NrmLHK3/banner-photo-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
