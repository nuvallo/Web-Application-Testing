import React from "react";

function Display(props) {
  return (
    <div className="display-container">
      <section className="display">
        <div className="display-title">
          <h2>
            <span>Home Hits:</span> {props.homeHits}
          </h2>
        </div>
        <div className="display-title">
          <h2>
            <span>Away Hits:</span> {props.awayHits}
          </h2>
        </div>
        <div className="display-title">
          <h3>
            <span>Strikes:</span> {props.strikes}
          </h3>
          <h3>
            <span>Outs:</span> {props.outs}
          </h3>
          <h3>
            <span>Balls</span> {props.balls}
          </h3>
        </div>
      </section>
    </div>
  );
}

export default Display;
