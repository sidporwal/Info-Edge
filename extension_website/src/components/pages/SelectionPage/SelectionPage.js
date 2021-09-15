import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import DIBS from "../../../assets/images/png/DIBS.png";
import CandidateCard from "../../organisms/CandidateCard";
import SideModal from "../../templates/SideModal";

import CandidatesList from "./CandidateListUtils";

import "./SelectionPage.css";

class SelectionPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="selectionPage">
        <SideModal />
        <section className="progressSection marginTop_10">
          <div className="step-progress-outer">
            <div className="RSPBprogressBar RSPBprogressBarSupp">
              <div className="RSPBstep RSPBstep1">
                <div className="indexedStep accomplished">1</div>
              </div>
              <div className="RSPBstep RSPBstep2">
                <div className="indexedStep accomplished">2</div>
              </div>
              <div className="RSPBstep RSPBstep3">
                <div className="indexedStep accomplished">3</div>
              </div>
              <div className="RSPBstep RSPBstep4">
                <div className="indexedStep accomplished">4</div>
              </div>
              <div className="RSPBstep RSPBstep5">
                <div className="indexedStep null">5</div>
              </div>
              <div className="RSPBprogression ProgressBar"></div>
            </div>
          </div>
          <div>
            <section className="step-progress-titles-section">
              <h3 className="step-progress-title">
                Install
                <br />
                Extension
              </h3>
              <h3 className="step-progress-title">
                Go to
                <br />
                Linkedin
              </h3>
              <h3 className="step-progress-title">
                Sync
                <br />
                contacts
              </h3>
              <h3 className="step-progress-title">
                Vouch for
                <br />
                friends
              </h3>
              <h3 className="step-progress-title">
                Track
                <br />
              </h3>
            </section>
          </div>
        </section>
        <div className="navigation">
          <img
            src={DIBS}
            height="60"
            width="60"
            alt="DIBS"
            className="amrginTop_10"
          />
          <h1 className="companyName">DIBS</h1>
        </div>
        <div className="cardsWrapper">
          {CandidatesList.map((candidate) => (
            <CandidateCard candidateObj={candidate} />
          ))}
        </div>
      </div>
    );
  };
}

SelectionPage.propTypes = {};

SelectionPage.defaultProps = {};

export default SelectionPage;
