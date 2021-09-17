import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import RenderMiniCards from "../../organisms/RenderMiniCards";
import "./SideModal.css";
import get from "../../../utils/get";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const SideModal = ({ heading, isReviewPage, vouchList, handleSubmitClick }) => {
  // eslint-disable-next-line no-undef
  console.log(isReviewPage);
  return (
    <div className="sideModal">
      <p className="heading">{heading}</p>
      {isReviewPage ? (
        <>
          <div className="amountDiv">
            <div className="amountWrapper">
              <p className="amount">Rs 100</p>
              <p className="bold">+</p>
              <p className="amountTitle">for making LinkedIn accessible</p>
            </div>
            <p className="plus">+</p>
            <div className="amountWrapper">
              <p className="amount">Rs 10</p>
              <p className="bold">+</p>
              <p className="amountTitle">for every vouched candidate</p>
            </div>
          </div>
          <div className="amountDiv">
            <div className="amountWrapper">
              <p className="amount">{get(vouchList, "length")}</p>
              <p className="bold">+</p>
              <p className="amountTitle">currently vouched candidates</p>
            </div>
            <p className="arrowIcon">
              <ArrowDownwardIcon />
            </p>
            <div className="amountWrapper">
              <p className="amount">Rs {get(vouchList, "length") * 10}</p>
              <p className="bold">+</p>
              <p className="amountTitle">amount for current vouching</p>
            </div>
          </div>
          <p className="bold query">
            {`Have query !! ${`->`} `}
            <a
              href="mailto:vivekcode2@gmail.com?subject=Mail from DIBS"
              className="contactUs"
            >
              Email Us
            </a>
          </p>
          <button className={"submitBtn"} onClick={handleSubmitClick}>
            Vouch & Redeem
          </button>
        </>
      ) : (
        <>
          <RenderMiniCards cardList={vouchList} />
          <button
            className={cx("submitBtn", {
              disableBtn: !!(vouchList && !vouchList.length),
            })}
            onClick={handleSubmitClick}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

SideModal.propTypes = {
  isReviewPage: PropTypes.bool,
  heading: PropTypes.string,
  vouchList: PropTypes.array,
  handleSubmitClick: PropTypes.func,
};

SideModal.defaultProps = {
  isReviewPage: false,
  heading: "",
  vouchList: [],
  handleSubmitClick: () => {},
};

export default SideModal;
