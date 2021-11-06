import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, isLoading, setError } = useAuth();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-item-center">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>{" "}
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>{" "}
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          <Component />
        ) : (
          (setError("Please login to access the page!!"),
          (<Redirect to={{ pathname: "/login", state: { from: location } }} />))
        )
      }
    />
  );
};

export default PrivateRoute;
