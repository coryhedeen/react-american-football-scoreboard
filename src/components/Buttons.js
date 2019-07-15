import React, { useState } from 'react';

const Buttons = (props) => {

  const [score, setScore] = useState(32);
  const [awayScore, setAwayScore] = useState(32);
  
  return (
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
  );
}

export default Buttons;
