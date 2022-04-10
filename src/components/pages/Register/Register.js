import React from "react";
import { Container, Form, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UseAuth from "../../../hocks/UseAuth";

const Register = () => {
  const { registerUser, getEmail, getPassword, getName, getPhotoURL, error } =
    UseAuth();

  return (
    <div>
      <Container>
        <div className="form-container text-center">
          <h1 className="mb-4">Sign Up</h1>

          <Form onSubmit={registerUser}>
            <Form.Control
              onBlur={getName}
              name="name"
              required
              type="text"
              placeholder="Your Name"
            />
            <br />
            <Form.Control
              onBlur={getEmail}
              name="email"
              required
              type="email"
              placeholder="Your Email"
            />
            <br />
            <Form.Control
              onBlur={getPassword}
              name="password"
              required
              type="password"
              placeholder="Your Password"
            />
            <br />
            <Form.Control
              onBlur={getPhotoURL}
              name="photoURL"
              required
              type="text"
              placeholder="Valid photo URL"
            />
            <br />
            {/* <Form.Control
              onBlur={getPassword2}
              name="password2"
              required
              type="password"
              placeholder="Confirm Password"
            /> */}
            <br />
            <p className="text-danger text-center">{error}</p>
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
