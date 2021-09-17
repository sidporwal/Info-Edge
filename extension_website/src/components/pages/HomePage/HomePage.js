import React from "react";
import PropTypes from "prop-types";
import routeConfig from "../../../constants/routeConfig";

const HomePage = (props) => {
  const { location, history } = props;
  if (location.search) {
    const urlParams = new URLSearchParams(location.search);
    const mail = urlParams.get("mail");
    localStorage.setItem("userMail", mail);
    history.push(routeConfig.selection);
  }
  return <div>HomePage</div>;
};

HomePage.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

HomePage.defaultProps = {};

export default HomePage;
