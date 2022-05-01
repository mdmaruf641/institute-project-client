import React, { createContext } from "react";
import UseCart from "../hocks/UseCart";
import UseCourses from "../hocks/UseCourses";
import UseFirebase from "../hocks/UseFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Hooks
  const AllContexts = UseFirebase();
  const { courses } = UseCourses();
  const { addToCart, selectedCourse, remove } = UseCart();

  const data = {
    AllContexts,
    courses,
    addToCart,
    selectedCourse,
    remove,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
