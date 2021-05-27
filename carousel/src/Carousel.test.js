import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";


it("renders without breaking", function() {
  render(<Carousel/>);
});


it("matches snapshot", function() {
  const {asFragment} = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});


it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});


it("hides and shows arrows", function() {
  const { getByTestId } = render(<Carousel />);
  const rightArrow = getByTestId("right-arrow");
  const leftArrow = getByTestId("left-arrow");
  
  // expect the right arrow to show
  expect(rightArrow).not.toHaveClass("hidden");
  expect(leftArrow).toHaveClass("hidden");
  
  // expect left and right arrows to show 
  fireEvent.click(getByTestId("right-arrow"));
  expect(rightArrow).not.toHaveClass("hidden");
  expect(leftArrow).not.toHaveClass("hidden");
 
  // expect the left arrow to show
  fireEvent.click(rightArrow);
  expect(rightArrow).toHaveClass("hidden");
  expect(leftArrow).not.toHaveClass("hidden");
});