import React from "react";
import PropTypes from "prop-types";
import RenderMiniCards from "../../organisms/RenderMiniCards";
import "./SideModal.css";

const SideModal = ({ heading, vouchList, handleSubmitClick }) => {
  return (
    <div className="sideModal">
      <p className="heading">{`${vouchList.length}` + heading}</p>
      <RenderMiniCards cardList={vouchList} />
      <button className="submitBtn" onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
};

SideModal.propTypes = {
  heading: PropTypes.string,
  vouchList: PropTypes.array,
  handleSubmitClick: PropTypes.func,
};

SideModal.defaultProps = {
  heading: " people selected",
  vouchList: [],
  handleSubmitClick: () => {},
};

export default SideModal;
