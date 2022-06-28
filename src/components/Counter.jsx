import "./Counter.css";
import { useState } from "react";

export function Counter() {
  const counterState = useState(0);
  const counter = counterState[0];
  const setCounter = counterState[1];

  const handleClick = () => {
    setCounter((state) => ++state);
  }

  return <button className="counter" onClick={handleClick}>{counter}</button>;
}
