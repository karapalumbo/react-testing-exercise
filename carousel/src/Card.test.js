import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without breaking", function() {
  render(<Card 
        caption="test"
        src="test.jpg"
        currNum={1}
        totalNum={1}/>);
});