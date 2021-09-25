import React from "react";
import ProfileImg from "../../../assets/images/jpg/profileImg.jpeg";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./ProfileCard.css";

const ProfileCard = ({ profile }) => {
  const { name, mail, rewardsBalance, reputationScore } = profile;
  const _reputationScore = [1, 2, 3, 4];

  const firstName = name.substr(0, name.indexOf(" ")).toUpperCase();
  const lastName = name.substr(name.indexOf(" ") + 1).toUpperCase();

  return (
    <div class="main">
      <div class="container">
        <div class="gradient">
          <img
            src={ProfileImg}
            height="40"
            width="40"
            alt="profileImg"
            className="profileImg"
          />
          <div class="content">
            <h2>
              {firstName} <br /> {lastName}
            </h2>
            <p>
              <strong>Email :</strong> {mail}
            </p>
            <p>
              <strong>Reward Balance :</strong> Rs. {rewardsBalance}
            </p>
            {/* <div class="icons">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div> */}
            <div class="reputation">
              <strong>Reputation Score :</strong>
              {!!_reputationScore &&
                _reputationScore.map((index) => <StarRateIcon />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
