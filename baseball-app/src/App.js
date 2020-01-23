import React, { useState } from "react";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [homeHits, setHomeHits] = useState(0);
  const [awayHits, setAwayHits] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [outs, setOuts] = useState(0);
  const [balls, setBalls] = useState(0);
  return (
    <div className="App">
      <Display
        homeHits={homeHits}
        awayHits={awayHits}
        strikes={strikes}
        outs={outs}
        balls={balls}
      />
    </div>
  );
}

export default App;
