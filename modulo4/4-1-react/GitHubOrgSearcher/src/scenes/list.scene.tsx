import React from "react";

import { ListContainer } from "@/pods";

import { AppLayout } from "@/layouts";

import { SearchContainer } from "@/pods/search/search.container";

export const ListScene: React.FC = () => {
  return (
    <AppLayout>
      <SearchContainer />
      <ListContainer />
    </AppLayout>
  );
};
