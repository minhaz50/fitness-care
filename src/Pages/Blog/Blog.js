import React from "react";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="blog-container">
        <div className="blog-text">
          <h1> Fit Bottomed Girls </h1>
          <p>
            The Fit Bottomed world is run by fitness professionals Jennipher
            Walters and Kristen Seymour. The two friends started Fit Bottomed
            Girls in 2008 as they were looking for a fresh approach to health
            and fitness without the dieting. The blog has been growing ever
            since and has now expanded into other verticals such as Fit Bottomed
            Mammas, the Fit Bottomed Girls Podcast, and the online course Love
            Your Body. Love Your Life. The blog was launched as a way to solve a
            problem; they were looking for a new way to be healthy. Just months
            after starting, readers latched on and related to the content almost
            immediately.
          </p>
        </div>
        <div>
          <img className="blog1-img" src={blog1} alt="" />
        </div>
      </div>
      <div className="blog-container">
        <div>
          <img className="blog2-img" src={blog2} alt="" />
        </div>
        <div className="blog-text">
          <h1>Nerd Fitness</h1>
          <p>
            Nerd Fitness started in 2009 as a way to help people live a healthy
            life in any way they can. Founder, Steve Kamb aims to help the
            average Joe. They offer programs to help normal people lose weight,
            build muscle, and get strong. The blog part of the Nerd Fitness
            website really focuses on beginners. You only need to read one
            article to understand who their target audience is. It’s all about
            getting started, helping beginners, and taking the first step to a
            healthier lifestyle. The Nerd Fitness site expanded with its Nerd
            Fitness Coaching app so that users can read the blog wherever they
            are.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
