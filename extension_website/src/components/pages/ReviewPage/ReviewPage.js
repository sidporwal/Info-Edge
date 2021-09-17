import React, { Component } from "react";
import SideModal from "../../templates/SideModal";
import Navigation from "../../molecules/Navigation/Navigation";
import ReviewBody from "../../templates/ReviewBody";
import get from "../../../utils/get";
import routeConfig from "../../../constants/routeConfig";
// import PropTypes from "prop-types";

import "./ReviewPage.css";

class ReviewPage extends Component {
  handleSubmitClick = () => {
    this.props.history.push(routeConfig.track);
  };

  render = () => {
    const { location } = this.props;
    const vouchList = get(location, "state.state.vouchList");
    // const isReviewPage = get(location, "pathname") === routeConfig.review;

    return (
      <div className="ReviewPage">
        <SideModal
          heading="Pricing Policy"
          isReviewPage
          vouchList={vouchList}
          handleSubmitClick={this.handleSubmitClick}
        />
        <Navigation />
        <ReviewBody vouchList={vouchList} />
      </div>
    );
  };
}

ReviewPage.propTypes = {};

ReviewPage.defaultProps = {};

export default ReviewPage;
