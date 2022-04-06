import React from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <Navbar className="main-nav" expand="lg">
        <Container>
          <Navbar.Brand to="/home">
            <h5 className="logo">Institute Project</h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
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
                as={NavLink}
                className="fs-6 color-dark fw-bold"
                to="/featured"
              >
                Featured Courses
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
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item to="/action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item to="/action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item to="/action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="/action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
