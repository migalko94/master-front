import React from "react";

import { PuppiesContainer } from "@/pods";
import { NavScene } from "./nav.scene";

export const PuppiesScene: React.FC = () => {
  return (
    <>
      <PuppiesContainer />
      <NavScene />
    </>
  );
};
