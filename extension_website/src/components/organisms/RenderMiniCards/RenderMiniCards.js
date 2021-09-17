import React from "react";
import MiniCard from "../../molecules/MiniCard";
import PropTypes from "prop-types";

import "./RenderMiniCards.css";

const RenderMiniCards = ({ cardList }) => {
  return (
    <div className="RenderMiniCards">
      {cardList.map((card, index) => (
        <MiniCard cardObj={card} key={`MinCard_${index + 1}`} />
      ))}
    </div>
  );
};

RenderMiniCards.propTypes = {
  cardList: PropTypes.array,
};

RenderMiniCards.defaultProps = {
  cardList: [],
};

export default RenderMiniCards;
