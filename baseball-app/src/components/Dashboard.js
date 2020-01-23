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
        <button>Strike</button>
        <button onClick={() => props.setBalls(addBall(props.balls))}>
          Ball
        </button>
        <button>Out</button>
        <button>Foul</button>
      </div>
    </div>
  );
}

const addBall = count => {
  let newCount = count + 1;

  if (newCount > 3) {
    newCount = 0;
  }
  return newCount;
};
export default Dashboard;
