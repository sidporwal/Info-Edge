import React, { Component } from "react";
import SideModal from "../../templates/SideModal";
import Navigation from "../../molecules/Navigation/Navigation";
import ReviewBody from "../../templates/ReviewBody";
import get from "../../../utils/get";
import routeConfig from "../../../constants/routeConfig";
// import PropTypes from "prop-types";

import "./ReviewPage.css";

class ReviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vouchList: get(props, "location.state.state.vouchList"),
    };
    this.formData = [];
  }

  componentDidMount = () => {
    const { vouchList } = this.state;

    for (let i = 0; i < vouchList.length; i++) {
      this.formData = [
        ...this.formData,
        {
          email: `${vouchList[i].profileUrl}`,
          strongRecommendation: {},
          jobSeeking: {},
          refereeName: {},
        },
      ];
    }
  };

  submitCandidates = () => {
    // const postObj = [
    //   {
    //     email: "abc@gmail.com",
    //     jobSeeking: {
    //       value: "dont know",
    //     },
    //     refereeName: {
    //       value: "yes",
    //     },
    //     strongRecommendation: {
    //       value: "solid",
    //     },
    //   },
    // ];

    async function postData(url = "", data = this.formData) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: "anshul.chauhan@gmail.com",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }

    postData("http://10.120.9.102:5556/referral/refer/job/123", this.formData)
      .then((data) => {
        this.props.history.push(routeConfig.track);
        console.log("Candidates succesfully vouched.");
      })
      .catch((err) => {
        console.log("Failed to submit your ressponse.");
      });
  };

  handleSubmitClick = () => {
    this.submitCandidates();
  };

  handleChange = (value) => {
    // console.log(
    //   this.formData.findIndex((profile) => profile.email === value.email)
    // );

    this.formData.splice(
      this.formData.findIndex((a) => a.email === value.email),
      1
    );

    this.formData = [...this.formData, value];
  };

  render = () => {
    const { vouchList } = this.state;

    return (
      <div className="ReviewPage">
        <SideModal
          heading="Pricing Policy"
          isReviewPage
          vouchList={vouchList}
          handleSubmitClick={this.handleSubmitClick}
        />
        <Navigation />
        <ReviewBody vouchList={vouchList} handleChange={this.handleChange} />
      </div>
    );
  };
}

ReviewPage.propTypes = {};

ReviewPage.defaultProps = {};

export default ReviewPage;
