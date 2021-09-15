import React from "react";
import ProfilePlaceholder from "../../../assets/images/svg/profilePlaceholder.svg";
import "./CandidateCard.css";

const CandidateCard = ({ candidateObj }) => {
  const _profileImgUrl =
    candidateObj &&
    candidateObj.profileImgUrl &&
    candidateObj.profileImgUrl.includes("https:")
      ? candidateObj.profileImgUrl
      : ProfilePlaceholder;

  return (
    <div className="userCard">
      <div
        style={{ background: "rgb(129, 216, 247)" }}
        className="colorStrip"
      />
      <img
        src={_profileImgUrl}
        height="60"
        width="60"
        alt={candidateObj.name}
        className="borderRound"
      />
      <p className="userName">{candidateObj.name}</p>
      <ul className="infoCntr">
        <li className="infoData height_94 block2">{candidateObj.occupation}</li>
        <li className="infoData">
          <p className="link">
            <span className="tag">Profile Link : </span>
            {candidateObj.profileUrl}
          </p>
        </li>
      </ul>
      <a
        href="https://www.google.com"
        target="_blank"
        className="button"
        rel="noreferrer"
      >
        Vouch Connection
      </a>
    </div>
  );
};

export default CandidateCard;
