import React, { Component } from "react";
import cx from "classnames";
import Navigation from "../../molecules/Navigation/Navigation";
import TrackTemplate from "../../templates/TrackTemplate";
import Button from "../../atoms/Button";
import SideModal from "../../templates/SideModal";
import Avatar from "../../atoms/Avatar";
import get from "../../../utils/get";
import { fetchReferralStatus } from "./TrackPageUtils";

import routeConfig from "../../../constants/routeConfig";

import "./TrackPage.css";

class TrackPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      rewardsBalance: 0,
      trackDetails: [],
      isProfileNavOpen: false,
      profile: null,
    };
  }

  componentDidMount = () => {
    this.getProfileDetails();
    fetchReferralStatus().then((res) => {
      this.setState({ trackDetails: res.data });
    });
  };

  getProfileDetails = () => {
    fetch("http://10.120.9.102:5556/user/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("userMail"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          rewardsBalance: get(data, "data.rewardsBalance"),
          profile: get(data, "data"),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleCrossClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  handleNavBtnClick = () => {
    const { history } = this.props;
    history.push(routeConfig.selection);
  };

  handleRedeemClick = () => {
    fetch("http://10.120.9.102:5556/user/rewards/redeem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("userMail"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ rewardsBalance: get(data, "data.rewardsBalance") });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleProfileClick = () => {
    this.setState({ isProfileNavOpen: !this.state.isProfileNavOpen });
  };

  render = () => {
    const {
      isVisible,
      rewardsBalance,
      trackDetails,
      isProfileNavOpen,
      profile,
    } = this.state;
    return (
      <div className="TrackPage">
        <Avatar
          handleClick={this.handleProfileClick}
          className="track__avatar"
        />
        {isProfileNavOpen && (
          <SideModal
            heading={`SCOUT PROFILE`}
            wrapperClass="profileModal"
            showCross
            handleCrossClick={this.handleProfileClick}
            isProfile
            profile={profile}
          />
        )}
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
          rewardsBalance={rewardsBalance}
          trackDetails={trackDetails}
          handleRedeemClick={this.handleRedeemClick}
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
