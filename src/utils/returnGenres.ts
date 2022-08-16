import { IGenre } from "../features/genres/types";

export const returnGenres = (type: number[] | string[], genres: IGenre[]) => {
  return type.map((item) => {
    return (genres.find((elem) => elem.id === item)?.name);
  });
};

export const returnGenresId = (genresList:  (string | undefined)[], genres: IGenre[]) => {
  return genresList.map((item) => {
    return (genres.find((elem) => elem.name === item)?.id);
  });
};