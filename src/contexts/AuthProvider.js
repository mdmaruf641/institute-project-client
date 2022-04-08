import React, { createContext } from "react";
import UseFirebase from "../hocks/UseFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const AllContexts = UseFirebase();
  return (
    <AuthContext.Provider value={AllContexts}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
