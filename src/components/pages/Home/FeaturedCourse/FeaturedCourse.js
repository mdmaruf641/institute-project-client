import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./FeaturedCourse.css";

const FeaturedCourse = (props) => {
  const {
    _id,
    courseImg,
    title,
    subject,
    instructorImg,
    instructorName,
    coursePrice,
    description,
  } = props.course;

  // handle course details btn
  const history = useHistory();
  const handleCourseDetails = () => {
    history.push(`/courseDetails/${_id}`);
  };
  return (
    <>
      <Col>
        <Card>
          <Card.Img style={{ height: "225px" }} variant="top" src={courseImg} />
          <Card.Body className="card-body">
            <div className="instructor">
              <img src={instructorImg} alt="courseInstructorImg" />
            </div>
            <h3 className="subject">{subject}</h3>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="course-desc">
              {description.slice(0, 150)}...
            </Card.Text>
            <div className="course-price">
              <h4>${coursePrice}</h4>
            </div>
            <div className="d-flex justify-content-between">
              <button onClick={handleCourseDetails} className="button">
                View More
              </button>
              <button className="button">Add to Cart</button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default FeaturedCourse;
