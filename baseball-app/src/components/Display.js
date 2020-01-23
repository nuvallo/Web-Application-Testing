import React from "react";

function Display(props) {
  return (
    <div className="display-container">
      <section>
        <div>
          <h2>Home Hits: {props.homeHits}</h2>
        </div>
        <div>
          <h2>Away Hits: {props.awayHits}</h2>
        </div>
        <div>
          <h3>Strikes: {props.strikes}</h3>
          <h3>Outs: {props.outs}</h3>
          <h3>Balls: {props.balls}</h3>
        </div>
      </section>
    </div>
  );
}

export default Display;
