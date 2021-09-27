import React, { Component } from "react";
// import PropTypes from "prop-types";
import CandidateCard from "../../organisms/CandidateCard";
import SideModal from "../../templates/SideModal";
import ProgressSection from "../../organisms/ProgressSection";
import Navigation from "../../molecules/Navigation/Navigation";
import Button from "../../atoms/Button";
import JDCard from "../../organisms/JDCard";
import AlertMsg from "../../molecules/AlertMsg";
import Avatar from "../../atoms/Avatar";
import CircularProgress from "@mui/material/CircularProgress";

import { fetchConnectionsList } from "./CandidateListUtils";
import routeConfig from "../../../constants/routeConfig";
import get from "../../../utils/get";

import "./SelectionPage.css";

class SelectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vouchList: [],
      jDs: [],
      isJDLoading: true,
      candidateList: [],
      selectedJD: null,
      isProfileNavOpen: false,
      profile: null,
      connectionsLoading: false,
    };
  }

  componentDidMount = () => {
    this.getProfileDetails();

    fetch("http://10.120.9.102:5556/job/all", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isJDLoading: false,
          jDs: data,
          selectedJD: data.jobs[0],
          connectionsLoading: true,
        });
        fetchConnectionsList({ premiumJobId: data.jobs[0].premiumJobId }).then(
          (candidateList) => {
            this.setState({ candidateList, connectionsLoading: false });
          }
        );
      })
      .catch((err) => {
        this.setState({ isJDLoading: true });
        console.log(err);
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
        this.setState({ profile: get(data, "data") });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleProfileClick = () => {
    this.setState({ isProfileNavOpen: !this.state.isProfileNavOpen });
  };

  containsObject = (obj, array) => {
    var i;
    for (i = 0; i < array.length; i++) {
      if (array[i] === obj) {
        return true;
      }
    }

    return false;
  };

  handleVouch = (candidateObj) => {
    const { vouchList } = this.state;

    if (!this.containsObject(candidateObj, vouchList)) {
      this.setState({ vouchList: [...vouchList, candidateObj] });
    }
  };

  handleRemoveVouch = (candidateObj) => {
    const { vouchList } = this.state;

    if (this.containsObject(candidateObj, vouchList)) {
      vouchList.splice(
        vouchList.findIndex((a) => a.name === candidateObj.name),
        1
      );
      this.setState({ vouchList });
    }
  };

  handleSubmitClick = () => {
    const { vouchList, selectedJD } = this.state;

    this.props.history.push(routeConfig.review, {
      state: { vouchList, selectedJD },
    });
  };

  handleNavBtnClick = () => {
    const { history } = this.props;
    history.push(routeConfig.track);
  };

  handleChangeJD = (changedIndex) => {
    this.setState({ selectedJD: this.state.jDs.jobs[changedIndex] });
    fetchConnectionsList({
      premiumJobId: this.state.jDs.jobs[changedIndex].premiumJobId,
    }).then((candidateList) => {
      this.setState({ candidateList });
    });
  };

  render = () => {
    const {
      vouchList,
      jDs,
      isJDLoading,
      candidateList,
      isProfileNavOpen,
      profile,
      connectionsLoading,
    } = this.state;
    return (
      <div className="selectionPage">
        {connectionsLoading && <CircularProgress className="screenCenter" />}
        <AlertMsg />
        <Button
          btnText="Go to Track Page"
          cntrClass="navBtn selectionNavBtn"
          handleClick={this.handleNavBtnClick}
        />
        <SideModal
          vouchList={vouchList}
          handleSubmitClick={this.handleSubmitClick}
          heading={`${vouchList.length} people selected`}
          submitBtnText="Submit"
        />
        <ProgressSection />
        <Navigation />
        <div className="profileCard">
          <Avatar handleClick={this.handleProfileClick} />
          <p className="loggedUser">{get(profile, "name")}</p>
        </div>
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
        <JDCard
          jobDetailsObj={jDs}
          isJDLoading={isJDLoading}
          handleChangeJD={this.handleChangeJD}
        />
        <div className="cardsWrapper">
          {candidateList.map(
            (candidate, index) =>
              candidate.name !== "Lalith Naren" && (
                <CandidateCard
                  candidateObj={candidate}
                  handleVouch={this.handleVouch}
                  handleRemoveVouch={this.handleRemoveVouch}
                  key={`Candidate_Card_${index + 1}`}
                />
              )
          )}
        </div>
      </div>
    );
  };
}

SelectionPage.propTypes = {};

SelectionPage.defaultProps = {};

export default SelectionPage;
