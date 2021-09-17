import React from "react";
import ProfilePlaceholder from "../../../assets/images/svg/profilePlaceholder.svg";
import "./MiniCard.css";

const MiniCard = ({ cardObj }) => {
  const _profileImgUrl =
    cardObj && cardObj.profileImgUrl && cardObj.profileImgUrl.includes("https:")
      ? cardObj.profileImgUrl
      : ProfilePlaceholder;
  return (
    <div className="MiniCard">
      <img src={_profileImgUrl} height="48" width="48" alt={cardObj.name} />
      <p className="MiniCardName">{cardObj.name}</p>
      <p className="coin">+ 10</p>
    </div>
  );
};

export default MiniCard;
