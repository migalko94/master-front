import { MemberEntity } from "./api.model";

export const getMembers = (organization: string): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("No se pudo completar la petición");
      }
    })
    .then((data) => data);
};
