import React from "react";

import { AnimalsRouter } from "@/core";

import { AppLayout } from "./layouts";
import { CartScene } from "./scenes";

export const App = () => {
  return (
    <AppLayout>
      <AnimalsRouter />
      <CartScene />
    </AppLayout>
  );
};
