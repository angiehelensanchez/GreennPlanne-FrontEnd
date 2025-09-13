import { render, screen } from "@testing-library/react";
function Hello(){return <p>Hello</p>}
it("renders", () => { render(<Hello/>); expect(screen.getByText("Hello")).toBeInTheDocument();});
