import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import FeaturedCourses from "../FeaturedCourses/FeaturedCourses";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedCourses></FeaturedCourses>
      <Contact></Contact>
    </div>
  );
};

export default Home;
