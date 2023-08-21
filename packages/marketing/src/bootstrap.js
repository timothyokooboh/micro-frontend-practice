import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const mount = (el) => {
  console.log("gba");
  if (el) {
    ReactDOM.render(<App />, el);
  }
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("bless");
});

export { mount };
