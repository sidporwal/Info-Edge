import React, { Component } from "react";
import cx from "classnames";
import Navigation from "../../molecules/Navigation/Navigation";
import TrackTemplate from "../../templates/TrackTemplate";
import Button from "../../atoms/Button";
import SideModal from "../../templates/SideModal";

import routeConfig from "../../../constants/routeConfig";

import "./TrackPage.css";

class TrackPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  handleCrossClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  handleNavBtnClick = () => {
    const { history } = this.props;
    history.push(routeConfig.selection);
  };

  render = () => {
    const { isVisible } = this.state;
    return (
      <div className="TrackPage">
        <SideModal
          handleSubmitClick={this.handleSubmitClick}
          heading={`Wallet Summary`}
          wrapperClass={cx(
            "trackModal",
            { expandingModal: isVisible },
            { collapseModal: !isVisible }
          )}
          showCross
          handleCrossClick={this.handleCrossClick}
          isVisible={this.state.isVisible}
          isTrackPage
        />
        <Button
          btnText="Manage Wallet"
          cntrClass="walletBtn"
          handleClick={this.handleCrossClick}
        />
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
