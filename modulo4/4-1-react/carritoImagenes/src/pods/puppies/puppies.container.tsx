import React from "react";

import { Context } from "@/core";

import { PuppiesComponent } from "./puppies.component";

export const PuppiesContainer: React.FC = () => {
  const { data } = React.useContext(Context);

  const firstPuppy = 0;
  const lastPuppy = 3;
  const puppies = data.slice(firstPuppy, lastPuppy);

  return (
    <>
      <PuppiesComponent puppies={puppies} />
    </>
  );
};
