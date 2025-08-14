import Contact from "../Contact";
import { render , screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load contact Us Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument(); 

});

test("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
});


test("Should load input name inside contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Enter Your Name");

    expect(inputName).toBeInTheDocument();
});