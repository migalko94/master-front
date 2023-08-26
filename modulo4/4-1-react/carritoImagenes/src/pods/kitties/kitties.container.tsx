import React from "react";

import { Context } from "@/core";

import { KittiesComponent } from "./kitties.component";

export const KittiesContainer: React.FC = () => {
  const { data } = React.useContext(Context);

  const firstKittie = 3;
  const lastKittie = 6;
  const kitties = data.slice(firstKittie, lastKittie);

  return (
    <>
      <KittiesComponent kitties={kitties} />
    </>
  );
};
