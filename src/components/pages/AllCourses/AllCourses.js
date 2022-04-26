import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../shared/Footer/Footer";
import AllCourse from "../AllCourse/AllCourse";
import "./AllCourses.css";
import "../../shared/CommonStyles/CommonStyles.css";
import UseAuth from "../../../hocks/UseAuth";

const AllCourses = () => {
  const { courses } = UseAuth();

  return (
    <div>
      <Container className="mb-5">
        <div className="page-title text-center section-heading">
          <h2>
            Our All <span>Courses</span>
          </h2>
        </div>

        <div className="featured-items mt-4">
          <Row xs={1} md={2} lg={3} className="g-4">
            {courses.map((course) => (
              <AllCourse key={course._id} course={course}></AllCourse>
            ))}
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default AllCourses;
