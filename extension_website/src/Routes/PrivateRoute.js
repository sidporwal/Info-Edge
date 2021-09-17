import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import routeConfig from "../constants/routeConfig";

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} isLoggedIn={isLoggedIn} />
        ) : (
          <Redirect
            to={{
              pathname: `${routeConfig.homepage}`,
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
