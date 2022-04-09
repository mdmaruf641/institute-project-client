import React from "react";
import Footer from "../../../shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import FeaturedCourses from "../FeaturedCourses/FeaturedCourses";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedCourses></FeaturedCourses>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
