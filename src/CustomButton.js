import React from "react";

function CustomButton(props) {
  return <button onClick={props.clickFunction}>{props.buttonText}</button>;
}

export default CustomButton;
