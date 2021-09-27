import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import RenderMiniCards from "../../organisms/RenderMiniCards";
import "./SideModal.css";
import get from "../../../utils/get";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ClearIcon from "@mui/icons-material/Clear";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ProfileCard from "../../organisms/PorfileCard";

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
  rewardsBalance,
  trackDetails,
  handleRedeemClick,
  isProfile,
  profile,
}) => {
  const rewardsRedeemed =
    get(trackDetails, "ACCEPTED.length") * 500 +
    get(trackDetails, "INTERVIEWED.length") * 1500 +
    get(trackDetails, "JOINED.length") * 10000 +
    get(trackDetails, "REFERRED.length") * 50 +
    100;

  return (
    isVisible && (
      <div className={cx("sideModal", wrapperClass)}>
        <p className="heading">{heading}</p>
        {showCross && (
          <ClearIcon className="crossIcon" onClick={handleCrossClick} />
        )}
        {isProfile && <ProfileCard profile={profile} />}
        {isTrackPage && (
          <>
            <div className="amountDiv">
              <div className="amountWrapper">
                <p className="amount trackAmt">Rs 100</p>
                <p className="bold">{`${"->"}`} </p>
                <p className="amountTitle">for making LinkedIn accessible</p>
              </div>
              <p className="plus">+</p>
              <div className="amountWrapper">
                <p className="amount trackAmt">Rs 50</p>
                <p className="bold">{`x  ${
                  get(trackDetails, "REFERRED.length") || 0
                }`}</p>
                <p className="amountTitle">for every vouched candidate</p>
              </div>
              <p className="plus">+</p>
              <div className="amountWrapper">
                <p className="amount trackAmt">Rs 500</p>
                <p className="bold">{`x  ${
                  get(trackDetails, "ACCEPTED.length") || 0
                }`}</p>
                <p className="amountTitle">for accepted candidate</p>
              </div>
              <p className="plus">+</p>
              <div className="amountWrapper">
                <p className="amount trackAmt">Rs 1500</p>
                <p className="bold">{`x  ${
                  get(trackDetails, "INTERVIEWED.length") || 0
                }`}</p>
                <p className="amountTitle">for interviewed candidate</p>
              </div>
              <p className="plus">+</p>
              <div className="amountWrapper">
                <p className="amount trackAmt">Rs 10,000</p>
                <p className="bold">{`x  ${
                  get(trackDetails, "JOINED.length") || 0
                }`}</p>
                <p className="amountTitle">for successfully joined candidate</p>
              </div>
            </div>
            <div className="amountDiv">
              <div className="amountWrapper marginBottom_20">
                <p className="amount trackAmt colorBlack">
                  Rs {Math.abs(rewardsRedeemed - rewardsBalance)}
                </p>
                <p className="bold"> {`${"->"}`} </p>
                <p className="amountTitle">already redeemed value</p>
              </div>
              <div className="amountWrapper">
                <p className="amount trackAmt">Rs {rewardsBalance}</p>
                <p className="bold"> {`${"->"}`} </p>
                <p className="amountTitle">amount to be redeemed</p>
              </div>
            </div>
            <button className={"submitBtn"} onClick={handleRedeemClick}>
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
                <p className="amount">Rs 50</p>
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
                <p className="amount">Rs {get(vouchList, "length") * 50}</p>
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
  isProfile: PropTypes.bool,
  heading: PropTypes.string,
  rewardsBalance: PropTypes.number,
  wrapperClass: PropTypes.string,
  submit: PropTypes.string,
  trackDetails: PropTypes.object,
  profile: PropTypes.object,
  vouchList: PropTypes.array,
  handleSubmitClick: PropTypes.func,
  handleRedeemClick: PropTypes.func,
};

SideModal.defaultProps = {
  isReviewPage: false,
  isTrackPage: false,
  isVisible: true,
  isProfile: false,
  heading: "",
  rewardsBalance: 0,
  wrapperClass: "",
  submitBtnText: "",
  vouchList: [],
  trackDetails: {},
  profile: {},
  handleSubmitClick: () => {},
  handleRedeemClick: () => {},
};

export default SideModal;
