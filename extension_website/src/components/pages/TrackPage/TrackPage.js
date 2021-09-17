import React, { Component } from "react";
import Navigation from "../../molecules/Navigation/Navigation";
import TrackTemplate from "../../templates/TrackTemplate";

import "./TrackPage.css";

class TrackPage extends Component {
  render = () => {
    return (
      <div className="TrackPage">
        <Navigation />
        <TrackTemplate />
      </div>
    );
  };
}

TrackPage.propTypes = {};

TrackPage.defaultProps = {};

export default TrackPage;
