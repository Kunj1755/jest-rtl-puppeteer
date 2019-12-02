import React, { useState } from "react";
import ReactDOM from "react-dom";
import Count from "./Count";
import "./styles.css";

function App() {
  let [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(++count);
  };
  return (
    <div className="App">
      <Count clicked={handleOnClick} countVal={count}></Count>
    </div>
  );
}

export default App;
