import React from "react";

import { Pagination } from "@mui/material";

import { OrganizationContext } from "@/core";

interface Props {
  membersPerPage: number;
  totalMembers: number;
  paginate: (event: React.ChangeEvent, value: number) => void;
}

export const PaginationComponent: React.FC<Props> = (props) => {
  const { membersPerPage, totalMembers } = props;

  const { currentPage, paginate } = React.useContext(OrganizationContext);

  return (
    <>
      <Pagination
        count={Math.ceil(totalMembers / membersPerPage)}
        color="secondary"
        page={currentPage}
        onChange={paginate}
      />
    </>
  );
};
