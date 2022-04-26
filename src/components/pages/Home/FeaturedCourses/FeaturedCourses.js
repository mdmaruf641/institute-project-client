import React from "react";
import { Container, Row } from "react-bootstrap";
import "./FeaturedCourses.css";
import "../../../shared/CommonStyles/CommonStyles.css";
import FeaturedCourse from "../FeaturedCourse/FeaturedCourse";
import UseAuth from "../../../../hocks/UseAuth";

const FeaturedCourses = () => {
  const { courses } = UseAuth();

  return (
    <div id="featured" className="mt-5">
      <Container>
        <div className="section-heading">
          <h2>
            Our Popular <span>Courses</span>
          </h2>
        </div>

        <div className="featured-items mt-4">
          <Row xs={1} md={2} lg={3} className="g-4">
            {courses.slice(0, 3).map((course) => (
              <FeaturedCourse key={course._id} course={course}></FeaturedCourse>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedCourses;
