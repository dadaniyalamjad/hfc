import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ReadCookie } from "./readCookie";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  let token = ReadCookie("token");
  let roles = ReadCookie("roles");
  let name = ReadCookie("name");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!token && !name && !roles) {
          return <Redirect to="/" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
