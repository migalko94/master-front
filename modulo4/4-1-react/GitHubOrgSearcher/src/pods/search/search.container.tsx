import React from "react";

import { OrganizationContext } from "@/core";

import { createDefaultOrganization } from "./search.vm";
import { SearchComponent } from "./search.component";

export const SearchContainer: React.FC = () => {
  const [organization, setOrganization] = React.useState<string>(
    createDefaultOrganization()
  );

  const { setOrganizationProfile } = React.useContext(OrganizationContext);

  const handleOrganization = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOrganizationProfile({ organizationName: organization });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrganization(e.target.value);
  };

  return (
    <SearchComponent
      handleOrganization={handleOrganization}
      handleChange={handleChange}
    />
  );
};
