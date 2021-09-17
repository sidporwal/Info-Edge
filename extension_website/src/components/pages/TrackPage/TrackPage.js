import React, { Component } from "react";
import Navigation from "../../molecules/Navigation/Navigation";
import TrackTemplate from "../../templates/TrackTemplate";
import Button from "../../atoms/Button";
import routeConfig from "../../../constants/routeConfig";

import "./TrackPage.css";

class TrackPage extends Component {
  handleNavBtnClick = () => {
    const { history } = this.props;
    history.push(routeConfig.selection);
  };

  render = () => {
    return (
      <div className="TrackPage">
        <Button
          btnText="Go to Selection Page"
          cntrClass="navBtn"
          handleClick={this.handleNavBtnClick}
        />
        <Navigation />
        <TrackTemplate />
      </div>
    );
  };
}

TrackPage.propTypes = {};

TrackPage.defaultProps = {};

export default TrackPage;
