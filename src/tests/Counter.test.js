// import necessary react testing library helpers here
// import the Counter component here
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
  // Render the Counter component here
})

test('renders counter message', () => {

  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText("Counter");
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId("count");
  expect(initialCount).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);

  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("1");

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);

  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("-1");
});
