import React from "react";
import DIBS from "../../../assets/images/png/DIBS.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <img
        src={DIBS}
        height="60"
        width="60"
        alt="DIBS"
        className="amrginTop_10"
      />
      <h1 className="companyName">DIBS</h1>
    </div>
  );
};

export default Navigation;
