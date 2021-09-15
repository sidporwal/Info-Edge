import React from "react";
import PropTypes from "prop-types";
import "./SideModal.css";

const SideModal = ({ heading }) => {
  return (
    <div className="sideModal">
      <p className="heading">{heading}</p>
      <button className="submitBtn">Submit</button>
    </div>
  );
};

SideModal.propTypes = {
  heading: PropTypes.string,
};

SideModal.defaultProps = {
  heading: "33 people selected",
};

export default SideModal;
