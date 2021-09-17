import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import get from "../../../utils/get";

import "./QnA.css";

class QnA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.candidateObj.profileUrl,
      strongRecommendation: {},
      jobSeeking: {},
      refereeName: {},
    };
  }

  handleChipClick = (stateName, label) => {
    // const selectedValue = get(this, `state[${stateName}.value]`);
    const changeObj = { [`${"value"}`]: `${label}` };

    // Fill in state only when some state is set else set object empty
    // if (!selectedValue) {
    this.setState({
      [`${stateName}`]: {
        ...changeObj,
      },
    });

    // } else {
    //   this.setState({
    //     [`${stateName}`]: {},
    //   });
    // }

    const postObj = {
      ...this.state,
      [`${stateName}`]: {
        ...changeObj,
      },
    };

    this.props.handleChange(postObj);

    // this.props.handleChange({
    //   ...this.state,
    //   [`${stateName}`]: {
    //     ...changeObj,
    //   },
    // });
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
            color={
              get(strongRecommendation, "value") === "top20"
                ? "secondary"
                : "default"
            }
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
            color={
              get(strongRecommendation, "value") === "top5"
                ? "secondary"
                : "default"
            }
            size="small"
            label="Top 5%"
            clickable
            onClick={() => this.handleChipClick("strongRecommendation", "top5")}
            className="chips"
          />
          <Chip
            variant="outlined"
            color={
              get(strongRecommendation, "value") === "solid"
                ? "secondary"
                : "default"
            }
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
            color={get(jobSeeking, "value") === "yes" ? "secondary" : "default"}
            size="small"
            label="Yes"
            clickable
            onClick={() => this.handleChipClick("jobSeeking", "yes")}
            className="chips"
          />
          <Chip
            variant="outlined"
            color={get(jobSeeking, "value") === "no" ? "secondary" : "default"}
            size="small"
            label="No"
            clickable
            onClick={() => this.handleChipClick("jobSeeking", "no")}
            className="chips"
          />
          <Chip
            variant="outlined"
            color={
              get(jobSeeking, "value") === "dontKnow" ? "secondary" : "default"
            }
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
            color={
              get(refereeName, "value") === "yes" ? "secondary" : "default"
            }
            size="small"
            label="Yes"
            clickable
            onClick={() => this.handleChipClick("refereeName", "yes")}
            className="chips"
          />
          <Chip
            variant="outlined"
            color={get(refereeName, "value") === "no" ? "secondary" : "default"}
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
