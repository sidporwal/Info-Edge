import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import QnA from "../../templates/QnA";
import LinkedIn from "../../../assets/images/png/linkedin.png";
import getToolTipContent from "../../../utils/getToolTipContent";
import "./ReviewCandidateCard.css";

const ReviewCandidateCard = ({ candidateObj }) => {
  return (
    <div className="ReviewCardCntr">
      <Tooltip title={getToolTipContent(candidateObj.name)}>
        <p className="PreviewEmail">Preview Email</p>
      </Tooltip>
      <div className="imgWrapper">
        <img
          src={candidateObj.profileImgUrl}
          alt={candidateObj.name}
          height="60"
          width="60"
          classname="userLogo"
        />
        <a
          href={candidateObj.profileUrl}
          className="ReviewCardUsername"
          target="_blank"
          rel="noreferrer"
        >
          {candidateObj.name}
        </a>
        <img
          src={LinkedIn}
          height="18"
          width="18"
          alt="linkedin"
          className="linkedinIcon"
        />
      </div>
      <QnA />
    </div>
  );
};

export default ReviewCandidateCard;
