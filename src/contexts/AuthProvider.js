import React, { createContext } from "react";
import UseFirebase from "../hocks/UseFirebase";
import UseCourses from "../hocks/UseCourses/UseCourses";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const AllContexts = UseFirebase();
  const { courses } = UseCourses();

  const data = {
    AllContexts,
    courses,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
