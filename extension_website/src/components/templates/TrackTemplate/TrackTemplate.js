import React, { Component } from "react";
import InterView from "../../../assets/images/png/Interview.png";
import Joined from "../../../assets/images/png/Joined.png";
import ReferIcon from "../../../assets/images/jpg/ReferIcon.jpg";
import Accepted from "../../../assets/images/jpg/Accepted.jpeg";
import "./TrackTemplate.css";

const TrackCard = ({ text, count, image, handleTabClick }) => {
  return (
    <div className="TrackCard" onClick={() => handleTabClick(text)}>
      <img src={image} height="60" width="60" alt={text} />
      <p className="trackText">{text}</p>
      <p className="trackCount">{count}</p>
    </div>
  );
};

const TRACK_UTIL = [
  { text: "REFERRED", picture: ReferIcon },
  { text: "ACCEPTED", picture: Accepted },
  { text: "INTERVIEWED", picture: InterView },
  { text: "JOINED", picture: Joined },
];

const TRACKDETAILS = {
  REFERRED: [
    { name: "Shubham Gupta", companyVouched: "InfoEdge" },
    { name: "Shubham Gupta", companyVouched: "InfoEdge" },
    { name: "Shubham Gupta", companyVouched: "InfoEdge" },
    { name: "Shubham Gupta", companyVouched: "InfoEdge" },
    { name: "Shubham Gupta", companyVouched: "InfoEdge" },
    { name: "Shubham Gupta", companyVouched: "InfoEdge" },
  ],
  ACCEPTED: [{ name: "Shubham Singh", companyVouched: "InfoEdge" }],
  INTERVIEWED: [{ name: "Shubham Kumar", companyVouched: "InfoEdge" }],
  JOINED: [{ name: "Shubham Sharma", companyVouched: "InfoEdge" }],
};

class TrackTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "REFERRED",
    };
  }

  handleTabClick = (value = "REFERRED") => {
    this.setState({ selectedTab: value });
  };

  render = () => {
    const { selectedTab } = this.state;

    return (
      <div className="TrackTemplate">
        <div className="TrackCardsWrapper">
          <div className="TrackCardCntr">
            {TRACK_UTIL.map((trackObj, index) => (
              <TrackCard
                text={trackObj.text}
                count={TRACKDETAILS[trackObj.text].length}
                image={trackObj.picture}
                handleTabClick={this.handleTabClick}
                key={`TrackCard_${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="statsView">
          <table className="trackTable">
            <thead>
              <tr className="trackRow ">
                <th className="width_50">Name</th>
                <th className="width_50">Company Vouched</th>
              </tr>
            </thead>
            <tbody>
              {TRACKDETAILS[selectedTab].map((candidate) => (
                <tr className="trackRow ">
                  <td className="paddingLeft_8 width_50">{candidate.name}</td>
                  <td className="centreData width_50">
                    {candidate.companyVouched}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
}

export default TrackTemplate;
