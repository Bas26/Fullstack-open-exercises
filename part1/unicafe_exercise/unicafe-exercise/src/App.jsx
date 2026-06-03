import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={() => props.setValue(props.value + 1)}>
      {props.text}
    </button>
  );
};

const Statistics = (props) => {
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </div>
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
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
