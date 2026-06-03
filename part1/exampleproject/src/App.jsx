import { useState } from "react";

const App = () => {
  const [click, setClick] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setClick({ ...click, left: click.left + 1 });
    console.log("pressed left");
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setClick({ ...click, right: click.right + 1 });
    console.log("pressed right");
  };

  return (
    <div>
      {click.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {click.right}
      {allClicks.join(" ")}
    </div>
  );
};

export default App;
