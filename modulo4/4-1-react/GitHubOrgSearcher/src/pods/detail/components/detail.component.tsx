import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Card, CardContent, Typography } from "@mui/material";

import { DetailMemberEntity } from "@/pods";
import { routes } from "@/core";

interface Props {
  member: DetailMemberEntity;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <Card sx={{ maxWidth: 250 }}>
      <Avatar
        sx={{
          height: 230,
          width: 230,
        }}
        src={member.avatarUrl}
        alt={member.name}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {member.name}
        </Typography>
        <Typography variant="subtitle2" component="div">
          <p> name: {member.name}</p>
          <p> login: {member.login}</p>
          <p>id: {member.id}</p>
          <p> company: {member.company}</p>
          <p> bio: {member.bio}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link to={routes.list}>Back to list page</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};
