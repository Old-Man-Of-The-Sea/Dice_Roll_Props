import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { App } from "./App";

/**************************************************************************************************
 * Volunteers: add your tests here. They should be failing, but the students should be able to make
 * them pass by editing the other files.
 **************************************************************************************************/

describe("Tests", () => {
  test("button clicked should roll the dice", () => {
    const container = render(<App />);
    const button = container.getByText("Roll Away!!!");
    let dice;
    let didThrowError;
    try {
      dice = container.getByText(/[1-6]/);
    } catch (error) {
      expect(error).toBeTruthy();
      didThrowError = true;
      dice = false;
    }
    fireEvent.click(button);
    dice = container.getByText(/[1-6]/);
    expect(didThrowError).toBe(true);
    expect(dice).toBeTruthy();
  });
});
