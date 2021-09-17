import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Button = ({ btnText, handleClick, isDisabled, cntrClass }) => {
  return (
    <button
      className={cx("submitBtn", cntrClass, {
        disableBtn: isDisabled,
      })}
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string,
  handleClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  cntrClass: PropTypes.string,
};

Button.defaultProps = {
  isDisabled: false,
  btnText: "Submit",
  cntrClass: "",
  handleClick: () => {},
};

export default Button;
