import genresJson from "./data/genres.json";

export const getGenres = async () => {
  return genresJson.sort();
};
