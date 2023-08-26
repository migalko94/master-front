import React from "react";

import { OrganizationProfile, defaultOrganization } from "./organization.vm";
import { OrganizationContext } from "./organization.context";

export const OrganizationProvider: React.FC<React.PropsWithChildren> = (
  props
) => {
  const { children } = props;

  const [organizationProfile, setOrganizationProfile] =
    React.useState<OrganizationProfile>(defaultOrganization);

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const [membersPerPage] = React.useState<number>(4);

  const paginate = (event: React.ChangeEvent, pageNumber: number) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <OrganizationContext.Provider
      value={{
        organizationProfile,
        setOrganizationProfile,
        currentPage,
        setCurrentPage,
        membersPerPage,
        paginate,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};
