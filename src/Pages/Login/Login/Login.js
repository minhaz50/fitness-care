import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nevigate = useNavigate("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
  };
  const nevigateRegister = (event) => {
    nevigate("/singup");
  };
  return (
    <div className="container w-50 mx-auto bg-white mt-4">
      <h1 className="text-primary mt-4 text-center">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="mb-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="mb-4">
        New to fitness Care?{" "}
        <Link
          to="/singup"
          className="text-danger pe-auto text-decoreiton-none"
          onClick={nevigateRegister}
        >
          Please SingUp.
        </Link>
      </p>
    </div>
  );
};

export default Login;
