import React from "react";
import { render } from "react-dom";
// cards
import Demo from "./gridlist/Gh2CardGL";

const rootElement = document.querySelector("#root");
if (rootElement) {
  render(<Demo />, rootElement);
}
