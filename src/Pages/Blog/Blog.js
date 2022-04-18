import React from "react";
import blog2 from "../../images/blog2.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="blog-container">
        <div className="blog-text">
          <h1> Authorization vs Authentication</h1>
          <p>
            Authorization in system security is the process of giving the user
            permission to access a specific resource or function. This term is
            often used interchangeably with access control or client privilege.
            <h2>Authentication</h2>
            Authentication is the act of validating that users are whom they
            claim to be. This is the first step in any security process.
            Complete an authentication process with: Passwords. Usernames and
            passwords are the most common authentication factors. If a user
            enters the correct data, the system assumes the identity is valid
            and grants access. One-time pins. Grant access for only one session
            or transaction. Authentication apps. Generate security codes via an
            outside party that grants access.
          </p>
          <h1>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <p>
            Firebase by Google can be used for the following: Firebase manages
            all data real-time in the database. So, the exchange of data to and
            fro from the database is easy and quick. Hence, if you are looking
            to develop mobile apps such as live streaming, chat messaging, etc.,
            you can use Firebase. Usually, authentication by a server entails
            the use of a user name and password. Other ways to authenticate can
            be through cards, retina scans, voice recognition, and fingerprints.
            Authentication by a client usually involves the server giving a
            certificate to the client in which a trusted third party such as
            Verisign or Thawte states that the server belongs to the entity
            (such as a bank) that the client expects it to.
          </p>
          <h1>
            What other services does firebase provide other than authentication
          </h1>
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more. Firebase Authentication integrates tightly with other Firebase
            services, and it leverages industry standards like OAuth 2.0 and
            OpenID Connect, so it can be easily integrated with your custom
            backend.
          </p>
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
