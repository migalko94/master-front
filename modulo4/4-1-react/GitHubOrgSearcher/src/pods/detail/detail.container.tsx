import React from "react";
import { useParams } from "react-router-dom";

import { DetailMemberEntity, createDefaultMemberDetail } from "./detail.vm";
import { Detail } from "./detail";
import { getDetailMember } from "./detail.repository";

export const DetailContainer: React.FC = () => {
  const [member, setMember] = React.useState<DetailMemberEntity>(
    createDefaultMemberDetail()
  );

  const { id } = useParams();

  React.useEffect(() => {
    getDetailMember(id).then(setMember);
  }, []);

  return <Detail member={member} />;
};
