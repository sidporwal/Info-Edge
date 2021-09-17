import React, { Component } from "react";
// import PropTypes from "prop-types";
import CandidateCard from "../../organisms/CandidateCard";
import SideModal from "../../templates/SideModal";
import ProgressSection from "../../organisms/ProgressSection";
import Navigation from "../../molecules/Navigation/Navigation";

import CandidatesList from "./CandidateListUtils";
import routeConfig from "../../../constants/routeConfig";

import "./SelectionPage.css";

class SelectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vouchList: [],
    };
  }

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

  render = () => {
    const { vouchList } = this.state;
    return (
      <div className="selectionPage">
        <SideModal
          vouchList={vouchList}
          handleSubmitClick={this.handleSubmitClick}
          heading={`${vouchList.length} people selected`}
        />
        <ProgressSection />
        <Navigation />
        <div className="cardsWrapper">
          {CandidatesList.map((candidate, index) => (
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
