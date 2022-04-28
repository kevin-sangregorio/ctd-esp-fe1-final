import Episode from '../interfaces/episode';

export const searchEpisodes = async (
  episodesIds?: string
): Promise<Episode[]> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/${episodesIds}`
  );
  const data = await response.json();
  return data;
};
