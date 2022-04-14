import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./FeaturedCourses.css";
import "../../../shared/CommonStyles/CommonStyles.css";
import courseImg from "../../../../assets/images/courses-img.jpg";
import courseInsImg from "../../../../assets/images/course-instructor-img.jpg";

const FeaturedCourses = () => {
  return (
    <div className="mt-5">
      <Container>
        <div className="section-heading">
          <h2>
            Our Popular <span>Courses</span>
          </h2>
        </div>
        <div className="featured-items mt-4">
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src={courseImg} />
                <Card.Body className="card-body">
                  <div className="instructor">
                    <img src={courseInsImg} alt="courseInstructorImg" />
                  </div>
                  <a className="subject">Accounting</a>
                  <Card.Title>Basic knowledge about accounting</Card.Title>
                  <Card.Text className="course-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores ipsa natus sapiente voluptatibus placeat temporibus
                    doloremque itaque odit aperiam ab!.....{" "}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <button className="button">View More</button>
                    <button className="button">Add to Cart</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={courseImg} />
                <Card.Body className="card-body">
                  <div className="instructor">
                    <img src={courseInsImg} alt="courseInstructorImg" />
                  </div>
                  <a className="subject">Accounting</a>
                  <Card.Title>Basic knowledge about accounting</Card.Title>
                  <Card.Text className="course-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores ipsa natus sapiente voluptatibus placeat temporibus
                    doloremque itaque odit aperiam ab!.....{" "}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <button className="button">View More</button>
                    <button className="button">Add to Cart</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={courseImg} />
                <Card.Body className="card-body">
                  <div className="instructor">
                    <img src={courseInsImg} alt="courseInstructorImg" />
                  </div>
                  <a className="subject">Accounting</a>
                  <Card.Title>Basic knowledge about accounting</Card.Title>
                  <Card.Text className="course-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores ipsa natus sapiente voluptatibus placeat temporibus
                    doloremque itaque odit aperiam ab!.....{" "}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <button className="button">View More</button>
                    <button className="button">Add to Cart</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedCourses;
