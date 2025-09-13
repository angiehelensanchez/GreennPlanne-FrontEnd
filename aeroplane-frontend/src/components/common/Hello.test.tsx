// src/components/common/Hello.test.tsx
import { render, screen } from "@testing-library/react";

function Hello() {
  return <p>Hello</p>;
}

test("renders Hello", () => {
  render(<Hello />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
