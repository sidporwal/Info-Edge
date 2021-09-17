import React, { Component } from "react";
// import PropTypes from "prop-types";
import CandidateCard from "../../organisms/CandidateCard";
import SideModal from "../../templates/SideModal";
import ProgressSection from "../../organisms/ProgressSection";
import Navigation from "../../molecules/Navigation/Navigation";
import Button from "../../atoms/Button";
import JDCard from "../../organisms/JDCard";
import AlertMsg from "../../molecules/AlertMsg";

import { fetchConnectionsList } from "./CandidateListUtils";
import routeConfig from "../../../constants/routeConfig";

import "./SelectionPage.css";

class SelectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vouchList: [],
      jDs: [],
      isJDLoading: true,
      candidateList: [],
    };
  }

  componentDidMount = () => {
    fetch("http://10.120.9.102:5556/job/all", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ isJDLoading: false, jDs: data });
        fetchConnectionsList().then((candidateList) => {
          this.setState({ candidateList });
        });
      })
      .catch((err) => {
        this.setState({ isJDLoading: true });
        console.log(err);
      });
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
    const { vouchList } = this.state;

    this.props.history.push(routeConfig.review, {
      state: { vouchList },
    });
  };

  handleNavBtnClick = () => {
    const { history } = this.props;
    history.push(routeConfig.track);
  };

  render = () => {
    const { vouchList, jDs, isJDLoading, candidateList } = this.state;
    return (
      <div className="selectionPage">
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
        <JDCard jobDetailsObj={jDs} isJDLoading={isJDLoading} />
        <div className="cardsWrapper">
          {candidateList.map((candidate, index) => (
            <CandidateCard
              candidateObj={candidate}
              handleVouch={this.handleVouch}
              handleRemoveVouch={this.handleRemoveVouch}
              key={`Candidate_Card_${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };
}

SelectionPage.propTypes = {};

SelectionPage.defaultProps = {};

export default SelectionPage;
