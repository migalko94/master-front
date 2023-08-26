import React from "react";

import { OrganizationProfile } from "./organization.vm";

interface OrganizationContextModel {
  organizationProfile: OrganizationProfile;
  setOrganizationProfile: (organizationProfile: OrganizationProfile) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  paginate: (event: React.ChangeEvent, pageNumber: number) => void;
  membersPerPage: number;
}

export const OrganizationContext =
  React.createContext<OrganizationContextModel>(null);

export const useOrganizationContext = () =>
  React.useContext(OrganizationContext);
