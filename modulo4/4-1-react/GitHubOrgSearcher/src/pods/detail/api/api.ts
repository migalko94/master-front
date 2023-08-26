import { DetailMemberEntity } from "./api.model";

export const getMemberDetail = (id: string): Promise<DetailMemberEntity> => {
  return fetch(`https://api.github.com/users/${id}`).then((response) =>
    response.json()
  );
};
