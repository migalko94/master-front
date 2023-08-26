import React from "react";

import { DetailMemberEntity } from "./detail.vm";
import { DetailComponent } from "./components";

interface Props {
  member: DetailMemberEntity;
}

export const Detail: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <>
      <DetailComponent key={member.id} member={member} />
    </>
  );
};
