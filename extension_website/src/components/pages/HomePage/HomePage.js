import React from "react";
import PropTypes from "prop-types";
import routeConfig from "../../../constants/routeConfig";
import Navigation from "../../molecules/Navigation/Navigation";
import CandidateSelect from "../../../assets/images/png/CandidateSelect.png";
import Extension from "../../../assets/images/png/Extension.png";
import ManageWallet from "../../../assets/images/png/ManageWallet.png";
import MandateSelect from "../../../assets/images/png/MandateSelect.png";
import Track from "../../../assets/images/png/Track.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import smoothScroll from "../../../utils/smoothScroll";

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
      <p className="workFlow" onClick={() => smoothScroll(1200, 0)}>
        HOW DOES IT WORKS
      </p>
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
        <div class="blog-header__square"></div>
        <div class="blog-header__circle"></div>
        <h4 class="sub-small-title">Help friends find jobs, make money</h4>
        <h1 className="homepageHeading">
          Earn assured rewards passive income by recommending friends
        </h1>
        <p class="subhead">
          Be a scout and get your software engineer friends hired by top
          companies
        </p>
      </div>
      <div className="section2" id="workFlow">
        <h4 class="sub-small-title">5 easy steps to make almost free money</h4>
        <h3 class="display-2">
          How it works
          <strong>
            <br />
          </strong>
        </h3>
        <div className="homepageImgWrap">
          <img
            src={Extension}
            height="260"
            width="400"
            alt="Extension"
            className="marginImg"
          />
          <ArrowForwardIcon className="rightArrow" />
          <img
            src={MandateSelect}
            height="260"
            width="400"
            alt="MandateSelect"
            className="marginImg"
          />
          <ArrowForwardIcon className="rightArrow" />
          <img
            src={CandidateSelect}
            height="260"
            width="400"
            alt="CandidateSelect"
            className="marginImg"
          />
          <ArrowDownwardIcon className="downArrow" />
          <img
            src={Track}
            height="260"
            width="400"
            alt="Track"
            className="marginImg"
          />
          <ArrowBackIcon className="leftArrow" />
          <img
            src={ManageWallet}
            height="260"
            width="400"
            alt="ManageWallet"
            className="marginImg"
          />
        </div>
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
