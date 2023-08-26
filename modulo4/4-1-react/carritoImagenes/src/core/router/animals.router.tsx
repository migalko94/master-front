import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

import { PuppiesScene, KittiesScene } from "@/scenes";

export const AnimalsRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.puppies} element={<PuppiesScene />} />
        <Route path={routes.kitties} element={<KittiesScene />} />
      </Routes>
    </Router>
  );
};
