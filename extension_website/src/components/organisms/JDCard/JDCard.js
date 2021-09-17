import React, { Component } from "react";
import DialogSelect from "../../templates/DialogSelect";
import JDDetails from "./JDUtils";
import get from "../../../utils/get";
import "./JDCard.css";

class JDCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  handleChangeSelection = (changedIndex = 0) => {
    this.setState({ selectedIndex: changedIndex });
  };

  getFullJD = (jobDetailsObj, isJDLoading, selectedIndex) => {
    if (!isJDLoading) {
      const jd = jobDetailsObj.jobs[selectedIndex];
      return { ...jd, ...jobDetailsObj.companies[jd.companyId] };
    }
    return {};
  };

  render = () => {
    const { selectedIndex } = this.state;
    const { jobDetailsObj, isJDLoading } = this.props;
    const selectedJD = this.getFullJD(
      jobDetailsObj,
      isJDLoading,
      selectedIndex
    );

    return (
      <div className="JDCard">
        {isJDLoading ? (
          <div>Loading</div>
        ) : (
          <>
            <div className="JDCardImgWrap">
              <img
                src={selectedJD.companyLogoUrl}
                height="40"
                width="40"
                alt={selectedJD.company}
              />
              <div className="JDCardDetailsWrap">
                <p className="JDCompanyName">{selectedJD.company}</p>
                <p className="JDCompanyLocation">
                  {selectedJD.companyLocation}
                </p>
              </div>
              <p className="jobID">Job ID : {selectedJD.jobRoleId}</p>
            </div>

            <p className="JDDetails">
              Job Role :{" "}
              <span className="colorShadow">{selectedJD.jobRole}</span>
            </p>
            <p className="JDDetails">
              Job Status :{" "}
              <span className="colorShadow">{selectedJD.status}</span>
            </p>
            <p className="JDDetails">
              Experience :{" "}
              <span className="colorShadow">
                {selectedJD.minExperience} - {selectedJD.maxExperience}
              </span>
            </p>
            <p className="JDDetails">
              Expected CTC :{" "}
              <span className="colorShadow">
                {selectedJD.minCTC}{" "}
                {!!get(selectedJD, "maxCTC") && `- ${selectedJD.maxCTC}`}
              </span>
            </p>
            <DialogSelect
              JDDetails={jobDetailsObj.jobs}
              handleSelect={this.handleChangeSelection}
            />
          </>
        )}
      </div>
    );
  };
}

export default JDCard;
