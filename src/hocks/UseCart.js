import { useState } from "react";
const UseCart = () => {
  const [selectedCourse, setSelectedCourse] = useState([]);

  const addToCart = (course) => {
    const isHave = selectedCourse.find(
      (selected) => selected._id === course._id
    );

    if (isHave) {
      alert("this course is already selected");
    } else {
      const newSelection = [...selectedCourse, course];
      setSelectedCourse(newSelection);
    }
  };

  const remove = (_id) => {
    alert(_id);
  };
  return {
    addToCart,
    remove,
    selectedCourse,
  };
};

export default UseCart;
