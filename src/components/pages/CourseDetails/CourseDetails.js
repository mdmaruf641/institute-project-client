import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UseAuth from "../../../hocks/UseAuth";
import Footer from "../../shared/Footer/Footer";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { _id } = useParams();
  const { courses } = UseAuth();
  const matchingCourse = courses.find((course) => course._id === _id);

  const selected = matchingCourse?._id;

  return (
    <div>
      <Container>
        <div className="page-title">
          <h1>
            About This <span>Course</span>
          </h1>
        </div>
        <div className="Course-dtls ">
          {selected ? (
            <div className="dtls-area mb-5">
              <Row className="align-items-center">
                <div className="col-md-6 col-12">
                  <img
                    className="w-100"
                    src={matchingCourse.courseImg}
                    alt=""
                  />
                </div>
                <div className="col-md-6 col-12 details-content">
                  <div>
                    <h2>{matchingCourse?.title}</h2>
                    <p>{matchingCourse?.description}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="subject">{matchingCourse.subject}</h3>
                      <h3>
                        <span>Price:</span> ${matchingCourse.coursePrice}
                      </h3>
                      <button className="button me-2">Purchase</button>
                      <button className="button">Add to Cart</button>
                    </div>
                    <div className="text-center">
                      <img src={matchingCourse.instructorImg} alt="" />
                      <h4>
                        <span>Instructor:</span> {matchingCourse.instructorName}
                      </h4>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          ) : (
            <>
              <Spinner animation="border" variant="primary" />
            </>
          )}
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default CourseDetails;
