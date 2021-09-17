import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routeConfig from "../constants/routeConfig";
import HomePage from "../components/pages/HomePage";
import AboutUsPage from "../components/pages/AboutUsPage";
import SelectionPage from "../components/pages/SelectionPage";
import ReviewPage from "../components/pages/ReviewPage";
import TrackPage from "../components/pages/TrackPage";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  const isLoggedIn = !!localStorage.getItem("userMail");
  return (
    <>
      {isLoggedIn && (
        <Route
          path="/"
          render={() => <Redirect to={{ pathname: routeConfig.selection }} />}
        />
      )}
      <Switch>
        <PrivateRoute
          path={routeConfig.about}
          exact
          component={AboutUsPage}
          isLoggedIn={isLoggedIn}
        />
        <PrivateRoute
          path={routeConfig.selection}
          exact
          component={SelectionPage}
          isLoggedIn={isLoggedIn}
        />
        <PrivateRoute
          path={routeConfig.review}
          exact
          component={ReviewPage}
          isLoggedIn={isLoggedIn}
        />
        <PrivateRoute
          path={routeConfig.track}
          exact
          component={TrackPage}
          isLoggedIn={isLoggedIn}
        />
        <Route path={routeConfig.homepage} component={HomePage} />
      </Switch>
    </>
  );
};

export default Routes;
