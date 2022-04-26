import React from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import UseAuth from "../../../hocks/UseAuth";

const Header = () => {
  const { AllContexts } = UseAuth();
  const { user, logOut } = AllContexts;
  const { displayName, photoURL, email } = user;

  return (
    <div>
      <Navbar
        style={{ background: "#fff" }}
        fixed="top"
        className="main-nav"
        expand="lg"
      >
        <Container>
          <Navbar.Brand to="/home#home">
            <h5 className="logo">Institute Project</h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                as={NavLink}
                className="fs-6 color-dark fw-bold"
                to="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="fs-6 color-dark fw-bold"
                to="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                className="fs-6 color-dark fw-bold"
                to="/home#featured"
              >
                Popular Courses
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                className="fs-6 color-dark fw-bold"
                to="/allCourses"
              >
                All Courses
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="fs-6 color-dark fw-bold"
                to="/cart"
              >
                <FontAwesomeIcon className="fs-5" icon={faShoppingCart} />
                <Badge className="cart-nbr">0</Badge>
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="fs-6 color-dark fw-bold"
                to="/contact"
              >
                Contact
              </Nav.Link>
              {email ? (
                <>
                  <Nav.Link
                    as={NavLink}
                    className="fs-6 color-dark fw-bold"
                    to="/dashboard "
                  >
                    Dashboard
                  </Nav.Link>

                  <NavDropdown
                    title={
                      <img
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                        }}
                        src={photoURL}
                        alt="User img"
                      />
                    }
                  >
                    <h6 className="text-center">{displayName}</h6>

                    <NavDropdown.Divider />
                    <Nav.Link
                      onClick={logOut}
                      as={NavLink}
                      className="fs-6 color-dark p-0 text-center fw-bold"
                      to="/home"
                    >
                      Logout
                    </Nav.Link>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link
                    as={NavLink}
                    className="fs-6 color-dark fw-bold"
                    to="/login"
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    className="fs-6 color-dark fw-bold"
                    to="/register"
                  >
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
