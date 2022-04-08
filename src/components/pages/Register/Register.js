import React from "react";
import { Container, Form, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Container>
        <div className="form-container text-center">
          <h1 className="mb-4">Sign Up</h1>

          <Form>
            <Form.Control
              name="name"
              required
              type="text"
              placeholder="Your Name"
            />
            <br />
            <Form.Control
              name="email"
              required
              type="email"
              placeholder="Your Email"
            />
            <br />
            <Form.Control
              name="password"
              required
              type="password"
              placeholder="Your Password"
            />
            <br />
            <Form.Control
              name="password2"
              required
              type="password"
              placeholder="Confirm Password"
            />
            <br />
            <button className="button" type="submit">
              Sign Up
            </button>
          </Form>

          {/* {loading && <Spinner animation="border" />}
          {user?.email && (
            <Alert className="mt-3" variant={"success"}>
              You Are Successfully Signed Up!
            </Alert>
          )}
          {authError && (
            <Alert className="mt-3" variant={"danger"}>
              {authError}
            </Alert>
          )} */}
          <Nav.Link
            as={NavLink}
            className="my-3 d-block text-decoration-none"
            to="/login"
          >
            Have an Account? Please Login
          </Nav.Link>
        </div>
      </Container>
    </div>
  );
};

export default Register;
