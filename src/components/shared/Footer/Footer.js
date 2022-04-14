import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import paymentImg from "../../../assets/images/payment.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-main text-white">
        <Container>
          <Row className="footer-area">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="col-head">
                <h3>
                  Institute <span style={{ color: "#08a9e6" }}>Project</span>
                </h3>
              </div>
              <div className="col-items contact-main mt-4">
                <div>
                  <div className="d-flex contact-info align-items-center">
                    <div className="me-4 footer-icon mt-2">
                      <FontAwesomeIcon className="fs-5" icon={faEnvelope} />
                    </div>
                    <div>maruf.moni.mm@gmail.com</div>
                  </div>
                  <div className="d-flex contact-info align-items-center my-3">
                    <div className="me-4 footer-icon mt-2">
                      <FontAwesomeIcon className="fs-5" icon={faPhone} />
                    </div>
                    <div>+880 1641656113</div>
                  </div>
                  <div className="d-flex contact-info align-items-center">
                    <div className="me-4 footer-icon mt-1">
                      <FontAwesomeIcon className="fs-5" icon={faLocationDot} />
                    </div>
                    <div>Chittagong, Bangladesh</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer-menu col-12">
              <div className="col-head">
                <h3>Special Links</h3>
              </div>
              <div className="col-items">
                <Nav.Link
                  style={{ color: "#D5DBDB" }}
                  as={NavLink}
                  className="fs-6 footer-nav fw-bold"
                  to="/home"
                >
                  - Home
                </Nav.Link>
                <Nav.Link
                  style={{ color: "#D5DBDB" }}
                  as={NavLink}
                  className="fs-6 footer-nav  fw-bold"
                  to="/about"
                >
                  - About
                </Nav.Link>
                <Nav.Link
                  style={{ color: "#D5DBDB" }}
                  as={NavLink}
                  className="fs-6 footer-nav  fw-bold"
                  to="/allCourses"
                >
                  - All Courses
                </Nav.Link>
                <Nav.Link
                  style={{ color: "#D5DBDB" }}
                  as={NavLink}
                  className="fs-6 footer-nav fw-bold"
                  to="/contact"
                >
                  - Contact
                </Nav.Link>
              </div>
            </div>
            <div className="col-lg-5 payment-image col-md-6">
              <img className="w-80" src={paymentImg} alt="payment-method" />
            </div>
          </Row>
        </Container>
      </div>
      <div className="footer-copyright">
        <Container>
          <p className="m-0 py-3">
            {" "}
            Copyright © 2022 || All rights reserved by
            <a target="!_blank" href="https://mdmaruf641-b32b5.web.app/">
              <span> Md Maruf</span>
            </a>
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
