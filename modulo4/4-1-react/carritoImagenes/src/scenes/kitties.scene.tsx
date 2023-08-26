import React from "react";

import { KittiesContainer } from "@/pods";

import { NavScene } from "./nav.scene";

export const KittiesScene: React.FC = () => {
  return (
    <>
      <KittiesContainer />
      <NavScene />
    </>
  );
};
