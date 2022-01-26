import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Emoji Results Testing", () => {
  let buttons, input;
  beforeEach(() => {
    render(<App />);
    buttons = screen.getAllByTestId("emoji_row"); 
    input = screen.getByTestId("input");              // Render Emoji 
  });

  test("Emoji List must be rendered", () => {
    expect(buttons.length).toEqual(20);             //Emoji List Control
  });

  test("Emoji list must be rendered up to input value", () => {    
    const inputValue = "Rage";
    userEvent.type(input, inputValue);                                 // Filter         
    const emoji = screen.getByText(inputValue);
    expect(emoji).toBeInTheDocument();
  });

  test("Emoji must be copied when clicked", () => {
    expect(buttons[0]).toHaveAttribute("data-clipboard-text");     // Copy Emoji clicked
  });
});