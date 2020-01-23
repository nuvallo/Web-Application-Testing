import React from "react";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <div className="Buttons">
        <button
          onClick={() => {
            props.setHomeHits(props.homeHits + 1);
            props.setStrikes(0);
            props.setBalls(0);
          }}
        >
          Hit for home
        </button>
        <button
          onClick={() => {
            props.setAwayHits(props.awayHits + 1);
            props.setStrikes(0);
            props.setBalls(0);
          }}
        >
          Hit for away
        </button>
        <button
          onClick={() => {
            let values = addStrike(props.strikes, props.outs);
            props.setStrikes(values[0]);
            props.setOuts(values[1]);
          }}
        >
          Strike
        </button>
        <button onClick={() => props.setBalls(addBall(props.balls))}>
          Ball
        </button>
        <button
          onClick={() => {
            let values = addStrike(3, props.outs);
            props.setBalls(0);
            props.setStrikes(0);
            props.setOuts(values[1]);
          }}
        >
          Out
        </button>
        <button onClick={() => props.setStrikes(addFoul(props.strikes))}>
          Foul
        </button>
      </div>
    </div>
  );
}

const addStrike = (prevStrike, prevOut) => {
  let newStrike = prevStrike + 1;
  let newOut = prevOut;
  if (newStrike > 2) {
    newStrike = 0;
    newOut = addOut(prevOut);
  }
  return [newStrike, newOut];
};

const addBall = count => {
  let newCount = count + 1;

  if (newCount > 3) {
    newCount = 0;
  }
  return newCount;
};

const addOut = prevOut => {
  let newOut = prevOut + 1;

  if (newOut > 2) {
    newOut = 0;
  }

  return newOut;
};

const addFoul = prevStrike => {
  let newStrike = prevStrike + 1;

  if (newStrike > 2) {
    newStrike = 2;
  }

  return newStrike;
};
export default Dashboard;
