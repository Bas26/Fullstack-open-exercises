import { useState } from "react";

const Hello = (props) => {
  return (
    <p>
      Hello {props.name}, age {props.age}
    </p>
  );
};

const Newindex = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <button onClick={() => setIndex(index + 1)}>{console.log(index)}</button>
  );
};

const App = () => {
  console.log("Hello Console");
  const now = new Date();
  const a = 10;
  const b = 25;
  console.log(now, a + b);
  return (
    <div>
      <Hello name="Alice" age={20} />
      <Hello name="Bob" age={a + b} />
      <p>
        {a} + {b} = {a + b}
      </p>
      <Newindex />
    </div>
  );
};

export default App;
