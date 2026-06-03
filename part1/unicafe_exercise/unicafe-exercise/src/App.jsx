import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={() => props.setValue(props.value + 1)}>
      {props.text}
    </button>
  );
};

const Statistics = (props) => {
  const average =
    (props.good - props.bad) / (props.bad + props.good + props.neutral);
  const posPercentage =
    (props.good / (props.bad + props.good + props.neutral)) * 100;
  return (
    <>
      <h1>Statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>total {props.bad + props.good + props.neutral}</p>
      <p>average {average} </p>
      <p>percentage {posPercentage} %</p>
    </>
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
