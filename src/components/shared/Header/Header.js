import React from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <Navbar className="main-nav" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h5 className="logo">Institute Project</h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fs-6 color-dark fw-bold" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="fs-6 color-dark fw-bold" href="#link">
                About
              </Nav.Link>
              <Nav.Link className="fs-6 color-dark fw-bold" href="#link">
                Featured Courses
              </Nav.Link>
              <Nav.Link className="fs-6 color-dark fw-bold" href="#link">
                All Courses
              </Nav.Link>
              <Nav.Link className="fs-6 color-dark fw-bold" href="#link">
                <FontAwesomeIcon className="fs-5" icon={faShoppingCart} />
                <Badge className="cart-nbr">0</Badge>
              </Nav.Link>
              <Nav.Link className="fs-6 color-dark fw-bold" href="#link">
                Contact
              </Nav.Link>
              <Nav.Link className="fs-6 color-dark fw-bold" href="#link">
                Login
              </Nav.Link>
              <Nav.Link className="fs-6 color-dark fw-bold" href="#link">
                Register
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
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
