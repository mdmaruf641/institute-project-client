import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import UseAuth from "./../../../hocks/UseAuth";
import "./Cart.css";

const Cart = () => {
  const { selectedCourse, remove } = UseAuth();

  return (
    <div>
      <Container>
        <div className="page-title text-center section-heading">
          <h2>
            Your Selected <span>Courses</span>
          </h2>
        </div>
        <div className="cart-body">
          <Row>
            <div className="col-lg-8">
              {selectedCourse.map((course) => {
                const { _id, courseImg, title, description, coursePrice } =
                  course;

                return (
                  <Row className="cart-area" key={_id}>
                    <div className="col-md-4">
                      <img className="w-100" src={courseImg} alt="" />
                    </div>
                    <div className="col-md-8">
                      <h3>{title}</h3>
                      <p>
                        {description.slice(0, 100)}....
                        <Nav.Link
                          as={NavLink}
                          style={{ color: "#08A9E6" }}
                          className="d-inline ps-2"
                          to={`/courseDetails/${course._id}`}
                        >
                          read more
                        </Nav.Link>
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="">
                          <h4>Price: ${coursePrice}</h4>
                        </div>
                        <div>
                          <button className="button">Check Out</button>
                          <button
                            onClick={() => remove(_id)}
                            className="button"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </Row>
                );
              })}
            </div>
            <div className="col-lg-4">dagdg</div>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Cart;
