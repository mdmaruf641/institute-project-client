import React from "react";
import "./Banner.css";
import homeImg from "../../../../assets/images/home-img.png";
import { Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "../../../shared/CommonStyles/CommonStyles.css";

const Banner = () => {
  return (
    <div>
      <Container>
        <Row className=" d-flex align-items-center justify-content-center">
          <div className="col-lg-6 banner-area">
            <div className="banner-content">
              <p>FOR A BETTER FUTURE</p>
              <h1>Discover the most exciting online courses.</h1>
              <Nav.Link
                as={NavLink}
                className="fs-6 p-0 color-dark fw-bold"
                to="/allCourses"
              >
                <button className="button">
                  View All Courses{" "}
                  <FontAwesomeIcon className="fs-5" icon={faArrowRight} />
                </button>
              </Nav.Link>
            </div>
          </div>
          <div className="col-lg-6 banner-area banner-img">
            <div>
              <img className="w-100" src={homeImg} alt="BannerImage" />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
