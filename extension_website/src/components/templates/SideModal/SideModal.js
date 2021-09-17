import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import RenderMiniCards from "../../organisms/RenderMiniCards";
import "./SideModal.css";
import get from "../../../utils/get";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ClearIcon from "@mui/icons-material/Clear";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const SideModal = ({
  heading,
  isReviewPage,
  vouchList,
  handleSubmitClick,
  showCross,
  isVisible,
  isTrackPage,
  handleCrossClick,
  wrapperClass,
  submitBtnText,
}) => {
  return (
    isVisible && (
      <div className={cx("sideModal", wrapperClass)}>
        <p className="heading">{heading}</p>
        {showCross && (
          <ClearIcon className="crossIcon" onClick={handleCrossClick} />
        )}
        {isTrackPage && (
          <>
            <div className="amountDiv">
              <div className="amountWrapper">
                <p className="amount trackAmt">Rs 100</p>
                <p className="bold">+</p>
                <p className="amountTitle">for making LinkedIn accessible</p>
              </div>
              <p className="plus">+</p>
              <div className="amountWrapper">
                <p className="amount trackAmt">Rs 10</p>
                <p className="bold">+</p>
                <p className="amountTitle">for every vouched candidate</p>
              </div>
              <p className="plus">+</p>
              <div className="amountWrapper">
                <p className="amount trackAmt">Rs 1000</p>
                <p className="bold">+</p>
                <p className="amountTitle">for interviewed candidate</p>
              </div>
              <p className="plus">+</p>
              <div className="amountWrapper">
                <p className="amount trackAmt">Rs 10,000</p>
                <p className="bold">+</p>
                <p className="amountTitle">for successfully joined candidate</p>
              </div>
            </div>
            <div className="amountDiv">
              <div className="amountWrapper marginBottom_20">
                <p className="amount trackAmt colorBlack">
                  Rs {get(vouchList, "length")}
                </p>
                <p className="bold"> {`${"->"}`} </p>
                <p className="amountTitle">already redeemed value</p>
              </div>
              <div className="amountWrapper">
                <p className="amount trackAmt">
                  Rs {get(vouchList, "length") * 10}
                </p>
                <p className="bold"> {`${"->"}`} </p>
                <p className="amountTitle">amount to be redeemed</p>
              </div>
            </div>
            <button
              className={"submitBtn"}
              onClick={() => {
                console.log("Redeem Clicked");
              }}
            >
              <AccountBalanceWalletIcon className="marginRight_6" />
              Redeem
            </button>
          </>
        )}
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
            {!!get(submitBtnText, "length") && (
              <button
                className={cx("submitBtn", {
                  disableBtn: !!(vouchList && !vouchList.length),
                })}
                onClick={handleSubmitClick}
              >
                {submitBtnText}
              </button>
            )}
          </>
        )}
      </div>
    )
  );
};

SideModal.propTypes = {
  isReviewPage: PropTypes.bool,
  isTrackPage: PropTypes.bool,
  isVisible: PropTypes.bool,
  heading: PropTypes.string,
  wrapperClass: PropTypes.string,
  submit: PropTypes.string,
  vouchList: PropTypes.array,
  handleSubmitClick: PropTypes.func,
};

SideModal.defaultProps = {
  isReviewPage: false,
  isTrackPage: false,
  isVisible: true,
  heading: "",
  wrapperClass: "",
  submit: "Submit",
  vouchList: [],
  handleSubmitClick: () => {},
};

export default SideModal;
