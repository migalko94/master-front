import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ListScene, DetailScene } from "@/scenes";

import { routes, switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailScene />} />
      </Routes>
    </Router>
  );
};
