import React from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);