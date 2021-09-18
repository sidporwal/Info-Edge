import React, { Component } from "react";
import cx from "classnames";
import ProfilePlaceholder from "../../../assets/images/svg/profilePlaceholder.svg";
import "./CandidateCard.css";

class CandidateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  handleClick = () => {
    const { isSelected } = this.state;
    const { candidateObj, handleVouch, handleRemoveVouch } = this.props;

    if (isSelected) {
      handleRemoveVouch(candidateObj);
    } else {
      handleVouch(candidateObj);
    }

    this.setState({ isSelected: !isSelected });
  };

  render = () => {
    const { candidateObj } = this.props;
    const { isSelected } = this.state;
    const _profileImgUrl =
      candidateObj &&
      candidateObj.profileImgUrl &&
      candidateObj.profileImgUrl.includes("https:")
        ? candidateObj.profileImgUrl
        : ProfilePlaceholder;

    return (
      <div className={cx("userCard", { secondary: isSelected })}>
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
          <li className="infoData height_100 block2">
            {candidateObj.occupation}
          </li>
          <li className="infoData">
            <a className="link" href={candidateObj.profileUrl}>
              <span className="tag">Profile Link : </span>
              {candidateObj.profileUrl}
            </a>
          </li>
        </ul>
        <button
          className={cx("button", { secondary: isSelected })}
          onClick={this.handleClick}
        >
          Vouch Connection
        </button>
      </div>
    );
  };
}

export default CandidateCard;
