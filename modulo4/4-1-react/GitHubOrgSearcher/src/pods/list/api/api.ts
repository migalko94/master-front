import { MemberEntity } from "./api.model";

export const getMembers = (
  organization: string
): Promise<MemberEntity[] | []> => {
  return fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => {
      if (!response.ok) {
        alert("No se hallaron resultados");
        return [];
      }

      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
};
