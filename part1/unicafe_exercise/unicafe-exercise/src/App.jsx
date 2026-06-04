import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={() => props.setValue(props.value + 1)}>
      {props.text}
    </button>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const average = (good - bad) / (bad + good + neutral);
  const posPercentage = (good / (bad + good + neutral)) * 100;
  if (good || bad || neutral) {
    return (
      <>
        <h1>Statistics</h1>
        <StatisticLines value={good} text="good" />
        <StatisticLines value={neutral} text="neutral" />
        <StatisticLines value={bad} text="bad" />
        <StatisticLines value={good + bad + neutral} text="total" />
        <StatisticLines value={average} text="average" />
        <StatisticLines value={posPercentage} text="percentage" />
      </>
    );
  } else {
    return (
      <>
        <h1>Feedback</h1>
        <p>no feedback given</p>
      </>
    );
  }
};

const StatisticLines = ({ value, text }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button setValue={setGood} value={good} text="good" />
      <Button setValue={setNeutral} value={neutral} text="neutral" />
      <Button setValue={setBad} value={bad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
