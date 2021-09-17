import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import get from "../../../utils/get";

import "./QnA.css";

class QnA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strongRecommendation: {},
      jobSeeking: {},
      refereeName: {},
    };
  }

  handleChipClick = (stateName, label) => {
    const selectedValue = get(this, `state[${stateName}.${label}]`);
    const changeObj = { [`${label}`]: !selectedValue };

    // Fill in state only when some state is set else set object empty
    if (!selectedValue) {
      this.setState({
        [`${stateName}`]: {
          ...changeObj,
        },
      });
    } else {
      this.setState({
        [`${stateName}`]: {},
      });
    }
  };

  render = () => {
    const { strongRecommendation, jobSeeking, refereeName } = this.state;

    return (
      <div>
        {/* Question 1 */}
        <div className="quesCntr">
          <p className="ques">How strong is your recommendation?</p>
          <Chip
            variant="outlined"
            color={get(strongRecommendation, "top20") ? "secondary" : "default"}
            size="small"
            label="Top 20%"
            clickable
            onClick={() =>
              this.handleChipClick("strongRecommendation", "top20")
            }
            className="chips"
          />
          <Chip
            variant="outlined"
            color={get(strongRecommendation, "top5") ? "secondary" : "default"}
            size="small"
            label="Top 5%"
            clickable
            onClick={() => this.handleChipClick("strongRecommendation", "top5")}
            className="chips"
          />
          <Chip
            variant="outlined"
            color={get(strongRecommendation, "solid") ? "secondary" : "default"}
            size="small"
            label="Solid Individual"
            clickable
            onClick={() =>
              this.handleChipClick("strongRecommendation", "solid")
            }
          />
        </div>

        {/* Question 2 */}
        <div className="quesCntr">
          <p className="ques">Is this person looking out for a job?</p>
          <Chip
            variant="outlined"
            color={get(jobSeeking, "yes") ? "secondary" : "default"}
            size="small"
            label="Yes"
            clickable
            onClick={() => this.handleChipClick("jobSeeking", "yes")}
            className="chips"
          />
          <Chip
            variant="outlined"
            color={get(jobSeeking, "no") ? "secondary" : "default"}
            size="small"
            label="No"
            clickable
            onClick={() => this.handleChipClick("jobSeeking", "no")}
            className="chips"
          />
          <Chip
            variant="outlined"
            color={get(jobSeeking, "dontKnow") ? "secondary" : "default"}
            size="small"
            label="Don't know"
            clickable
            onClick={() => this.handleChipClick("jobSeeking", "dontKnow")}
          />
        </div>

        {/* Question 3 */}
        <div className="quesCntr">
          <p className="ques">Can we use your name while contacting them?</p>
          <Chip
            variant="outlined"
            color={get(refereeName, "yes") ? "secondary" : "default"}
            size="small"
            label="Yes"
            clickable
            onClick={() => this.handleChipClick("refereeName", "yes")}
            className="chips"
          />
          <Chip
            variant="outlined"
            color={get(refereeName, "no") ? "secondary" : "default"}
            size="small"
            label="No"
            clickable
            onClick={() => this.handleChipClick("refereeName", "no")}
            className="chips"
          />
        </div>
      </div>
    );
  };
}

export default QnA;
