import React from "react";

import { OrganizationContext } from "@/core";

import { PaginationComponent } from "./components";
import { MemberEntity } from "./list.vm";
import { ListComponent } from "./list.component";
import { getMembers } from "./list.repository";

export const ListContainer: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const {
    organizationProfile,
    currentPage,
    membersPerPage,
    setCurrentPage,
    paginate,
  } = React.useContext(OrganizationContext);

  const lastMemberOfPage = currentPage * membersPerPage;
  const firstMemberOfPage = lastMemberOfPage - membersPerPage;
  const totalMembers = members.slice(firstMemberOfPage, lastMemberOfPage);

  React.useEffect(() => {
    if (organizationProfile.organizationName !== "") {
      getMembers(organizationProfile.organizationName).then(setMembers);
    }
    setCurrentPage(1);
  }, [organizationProfile]);

  React.useEffect(() => {
    getMembers(organizationProfile.organizationName).then(setMembers);
    setCurrentPage(currentPage);
  }, [currentPage]);

  return (
    <>
      <ListComponent members={totalMembers} />
      <PaginationComponent
        paginate={paginate}
        membersPerPage={membersPerPage}
        totalMembers={members.length}
      />
    </>
  );
};
