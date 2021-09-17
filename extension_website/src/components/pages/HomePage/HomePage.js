import React from "react";
import PropTypes from "prop-types";
import routeConfig from "../../../constants/routeConfig";
import Navigation from "../../molecules/Navigation/Navigation";

import "./HomePage.css";

const HomePage = (props) => {
  const { location, history } = props;
  if (location.search) {
    const urlParams = new URLSearchParams(location.search);
    const mail = urlParams.get("mail");
    localStorage.setItem("userMail", mail);
    history.push(routeConfig.selection);
  }
  return (
    <div className="homepage">
      <Navigation />
      <img
        src="https://uploads-ssl.webflow.com/602ceee1cc4788ef7fdd0ea4/602d15fbdbbdf2b154a1b10a_shape-3.png"
        loading="lazy"
        alt=""
        class="shape-1"
      />
      <img
        src="https://uploads-ssl.webflow.com/602ceee1cc4788ef7fdd0ea4/602d15fbdbbdf2b154a1b10a_shape-3.png"
        loading="lazy"
        alt=""
        class="shape-2"
      />
      <img
        src="https://uploads-ssl.webflow.com/602ceee1cc4788ef7fdd0ea4/602d15fbdbbdf2b154a1b10a_shape-3.png"
        loading="lazy"
        alt=""
        class="shape-3"
      />
      <div className="centerText">
        <h4 class="sub-small-title">Help friends find jobs, make money</h4>
        <h1 className="homepageHeading">
          Earn assured rewards passive income by recommending friends
        </h1>
        <p class="subhead">
          Be a scout and get your software engineer friends hired by top
          companies
        </p>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

HomePage.defaultProps = {};

export default HomePage;
