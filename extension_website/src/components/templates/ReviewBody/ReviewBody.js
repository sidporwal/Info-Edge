import React from "react";
import ReviewCandidateCard from "../../organisms/ReviewCandidateCard";
import "./ReviewBody.css";

const ReviewBody = ({ vouchList = [] }) => {
  return (
    <div className="ReviewBody">
      <p className="reviewHeading">Review progress of your vouched engineers</p>
      <div className="reviewCardsWrapper">
        {vouchList.map((candidate, index) => (
          <ReviewCandidateCard
            candidateObj={candidate}
            key={`ReviewCandidateCard_${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewBody;
