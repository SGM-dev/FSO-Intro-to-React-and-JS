import React, { useState } from "react";

const Header = (props) => <h1>{props.text}</h1>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGoodClick = () => {
    setAll(all + 1);
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setAll(all + 1);
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setAll(all + 1);
    setBad(bad + 1);
  };

  return (
    <div>
      <Header text='Give Feedback' />
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {all}</p>
      <p>average: {(good - bad) / all}</p>
      <p>Positive feedback: {good * (100 / all)}% </p>
    </div>
  );
};

export default App;
