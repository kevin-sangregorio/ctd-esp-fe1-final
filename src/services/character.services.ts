import Character from '../interfaces/character';
import CharacterDetail from '../interfaces/characterDetail';

export const searchCharacter = async (
  characterName?: string
): Promise<Character[]> => {
  let params = '?';
  if (characterName) params += `name=${characterName}`;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${params}`
  );
  const data = await response.json();
  return data.results;
};

export const searchCharacterById = async (id: number): Promise<CharacterDetail> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();
  return data;
};
