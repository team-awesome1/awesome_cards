import React from "react";
import { render } from "@testing-library/react";
import Homepage from "./Homepage";

test("Homepage renders without crashing", () => {
    render(<Homepage />);
});

test("When rendered, Homepage matches snapshot", () => {
    const { asFragment } = render(<Homepage />);
    expect(asFragment()).toMatchSnapshot();
});

test("When rendered, Homepage displays title", () => {
    const { getByText } = render(<Homepage />);
    const title = getByText("WAR!");
    expect(title).toBeInTheDocument();
});