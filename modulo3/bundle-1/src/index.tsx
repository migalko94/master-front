import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
import logo from "./content/logo_1.png";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>Hello world from React and SASS</h1>
    <img src={logo} />
  </>
);

console.log(`Api base: ${process.env.API_BASE}`);
