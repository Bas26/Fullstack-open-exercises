const Hello = (props) => {
  return (
    <p>
      Hello {props.name}, age {props.age}
    </p>
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
    </div>
  );
};

export default App;
