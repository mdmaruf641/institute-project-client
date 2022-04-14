import React from "react";
import { Container, Form, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Login.css";
import google from "../../../assets/images/google.png";
import facebook from "../../../assets/images/facebook.png";
import UseAuth from "../../../hocks/UseAuth";
import "../../shared/CommonStyles/CommonStyles.css";

const Login = () => {
  const {
    signInWithGoogle,
    signInWithFacebook,
    signInWithEmail,
    getEmail,
    getPassword,
    error,
  } = UseAuth();

  return (
    <div>
      <Container>
        <div className="form-container text-center">
          {" "}
          <h1 className="mb-4 ">Login</h1>
          <Form onSubmit={signInWithEmail}>
            <div className="form-group">
              <Form.Control
                onBlur={getEmail}
                className="input-field"
                name="email"
                autoComplete="off"
                required
                type="email"
              />
              <label className="form-label" htmlFor="email">
                Email
              </label>
            </div>
            <br />
            <div className="form-group">
              <Form.Control
                onBlur={getPassword}
                className="input-field"
                name="password"
                required
                type="password"
              />
              <label className="form-label" htmlFor="password">
                Password
              </label>
            </div>
            <br />

            <p className="text-danger text-center">{error}</p>
            <button className="button" type="submit">
              Login
            </button>
          </Form>
          <div className="mt-3">
            <div className="login-items-logo d-flex justify-content-around align-items-center">
              <div>
                <button onClick={signInWithGoogle}>
                  <img src={google} alt="google" />
                </button>
              </div>
              <div>
                <button onClick={signInWithFacebook}>
                  <img src={facebook} alt="facebook" />
                </button>
              </div>
            </div>
          </div>
          {/* {loading && <Spinner animation="border" />}
          {user?.email && (
            <Alert className="mt-3" variant={"success"}>
              Your Are Successfully Logged In!
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
            to="/register"
          >
            New User? Please Sign Up
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            className="my-3 d-block text-decoration-none"
            to="/reset"
          >
            Forget password? Reset.
          </Nav.Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;
