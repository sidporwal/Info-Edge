import React from "react";
import SideModal from "../../templates/SideModal";
import Navigation from "../../molecules/Navigation/Navigation";
import TrackBody from "../../templates/TrackBody/TrackBody";
// import PropTypes from "prop-types";

import "./TrackPage.css";

const TrackPage = () => {
  return (
    <div className="trackPage">
      <SideModal heading="Rewards Balance" />
      <Navigation />
      <TrackBody />
    </div>
  );
};

TrackPage.propTypes = {};

TrackPage.defaultProps = {};

export default TrackPage;
