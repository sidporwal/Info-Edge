import React from "react";

const ProgressSection = () => {
  return (
    <section className="progressSection">
      <div className="step-progress-outer">
        <div className="RSPBprogressBar RSPBprogressBarSupp">
          <div className="RSPBstep RSPBstep1">
            <div className="indexedStep accomplished">1</div>
          </div>
          <div className="RSPBstep RSPBstep2">
            <div className="indexedStep accomplished">2</div>
          </div>
          <div className="RSPBstep RSPBstep3">
            <div className="indexedStep accomplished">3</div>
          </div>
          <div className="RSPBstep RSPBstep4">
            <div className="indexedStep accomplished">4</div>
          </div>
          <div className="RSPBstep RSPBstep5">
            <div className="indexedStep null">5</div>
          </div>
          <div className="RSPBprogression ProgressBar"></div>
        </div>
      </div>
      <div>
        <section className="step-progress-titles-section">
          <h3 className="step-progress-title">
            Install
            <br />
            Extension
          </h3>
          <h3 className="step-progress-title">
            Go to
            <br />
            Linkedin
          </h3>
          <h3 className="step-progress-title">
            Sync
            <br />
            contacts
          </h3>
          <h3 className="step-progress-title">
            Vouch for
            <br />
            friends
          </h3>
          <h3 className="step-progress-title">
            Track
            <br />
          </h3>
        </section>
      </div>
    </section>
  );
};

export default ProgressSection;
