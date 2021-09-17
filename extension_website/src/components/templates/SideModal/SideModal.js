import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import RenderMiniCards from "../../organisms/RenderMiniCards";
import "./SideModal.css";

const SideModal = ({ heading, vouchList, handleSubmitClick }) => {
  return (
    <div className="sideModal">
      <p className="heading">{heading}</p>
      <RenderMiniCards cardList={vouchList} />
      <button
        className={cx("submitBtn", {
          disableBtn: !!(vouchList && !vouchList.length),
        })}
        onClick={handleSubmitClick}
      >
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
  heading: "",
  vouchList: [],
  handleSubmitClick: () => {},
};

export default SideModal;
