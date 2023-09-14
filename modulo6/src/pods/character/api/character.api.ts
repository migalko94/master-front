import Axios from 'axios';

import { Character } from './character.api-model';

const CHARACTER_URL = 'http://localhost:3000/characters/';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${CHARACTER_URL}${id}`);

  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await Axios.put<Character>(`${CHARACTER_URL}/${character.id}`, character);
  } else {
    await Axios.post<Character>(CHARACTER_URL, character);
  }
  return true;
};
