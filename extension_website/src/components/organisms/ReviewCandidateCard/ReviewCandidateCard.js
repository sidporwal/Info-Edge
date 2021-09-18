import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import QnA from "../../templates/QnA";
import LinkedIn from "../../../assets/images/png/linkedin.png";
import getToolTipContent from "../../../utils/getToolTipContent";
import ProfilePlaceholder from "../../../assets/images/svg/profilePlaceholder.svg";
import "./ReviewCandidateCard.css";

const ReviewCandidateCard = ({ candidateObj, handleChange }) => {
  const _profileImgUrl =
    candidateObj &&
    candidateObj.profileImgUrl &&
    candidateObj.profileImgUrl.includes("https:")
      ? candidateObj.profileImgUrl
      : ProfilePlaceholder;
  return (
    <div className="ReviewCardCntr">
      <Tooltip title={getToolTipContent(candidateObj.name)}>
        <p className="PreviewEmail">Preview Email</p>
      </Tooltip>
      <div className="imgWrapper">
        <img
          src={_profileImgUrl}
          alt={candidateObj.name}
          height="60"
          width="60"
          className="userLogo"
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
      <QnA handleChange={handleChange} candidateObj={candidateObj} />
    </div>
  );
};

export default ReviewCandidateCard;
