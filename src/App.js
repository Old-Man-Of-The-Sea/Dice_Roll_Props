import React, { useState } from "react";
import CustomButton from "./CustomButton";
import "./styles.css";

// This program should render a random number between
// 1 and 6 when the button is clicked.
// 1. Use the function named “handleClick” as the value of
// the prop named “clickFunction” on the CustomButton component.
// 2. Modify the handleClick function. It should
// update the random number rendered when the dice is rolled.

function Dice(props) {
  return <div>{props.roll}</div>;
}

function App() {
  const [roll, setRoll] = useState(0);
  return (
    <div>
      <Dice roll={roll} />
      <CustomButton buttonText="roll dice!" clickFunction={handleClick} />
    </div>
  );

  function handleClick() {
    console.log("I work!");
    setRoll(generateRandomNumber());
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

export { App };
