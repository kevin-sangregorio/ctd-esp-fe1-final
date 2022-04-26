import Character from '../interfaces/character';

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
