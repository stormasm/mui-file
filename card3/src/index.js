import React from "react";
import { render } from "react-dom";
// driver
import Driver from "./drivers/GhCardDriverLines";

const rootElement = document.querySelector("#root");
if (rootElement) {
  render(<Driver />, rootElement);
}
