import Axios from 'axios';

import { CharacterEntityApi } from './character-collection.api-model';

const CHARACTER_URL = 'http://localhost:3000/characters';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await Axios.get<CharacterEntityApi[]>(CHARACTER_URL);

  return data;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  await Axios.delete(`${CHARACTER_URL}/${id}`);
  return true;
};
