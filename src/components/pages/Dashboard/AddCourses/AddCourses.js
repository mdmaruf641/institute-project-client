import React from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import "./AddCourses.css";
import "../../../shared/CommonStyles/CommonStyles.css";
import axios from "axios";
import Footer from "../../../shared/Footer/Footer";

const AddCourses = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/courses", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };

  // https://i.ibb.co/LYZFMCh/courses7-img.jpg
  // https://i.ibb.co/H45fLdf/courses8-img.jpg
  return (
    <div>
      <Container className="mb-5">
        <div className="page-title">
          <h1>
            Add Your <span>Course</span>
          </h1>
        </div>
        <form className="form-area" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="addCourseInput"
              placeholder="Course Image URL"
              type="text"
              {...register("courseImg", { required: true })}
            />
            <input
              className="addCourseInput"
              placeholder=" Course Title"
              type="text"
              {...register("title", { required: true })}
            />
            <input
              className="addCourseInput"
              placeholder=" Subject"
              type="text"
              {...register("subject", { required: true })}
            />
            <input
              className="addCourseInput"
              placeholder=" Course Instructor image URL"
              type="text"
              {...register("instructorImg", { required: true })}
            />
            <input
              className="addCourseInput"
              placeholder="Instructor Name"
              type="text"
              {...register("instructorName", { required: true })}
            />
            <input
              className="addCourseInput"
              placeholder="Course Price"
              type="text"
              {...register("coursePrice", { required: true })}
            />
            <textarea
              className="addCourseInput"
              placeholder="Course Description"
              type="text"
              {...register("description", { required: true })}
            />
            <input className="button" type="submit" />
          </div>
        </form>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default AddCourses;
