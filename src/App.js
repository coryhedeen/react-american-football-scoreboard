//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./components/BottomRow";
import TopRow from "./components/TopRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

const [score, setScore] = useState(32);
const [awayScore, setAwayScore] = useState(32);

  return (
      <div>
        <div className="container">
          <section className="scoreboard">
            <TopRow />
            <BottomRow />
          </section>
        </div>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => setScore(score + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => setScore(score + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
