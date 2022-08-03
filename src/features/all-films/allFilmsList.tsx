import { useCallback } from "react";
import { CardList } from "../../ui/card-list/CardList";
import { FilmBookmark } from "../favorites/FilmBookmark";
import { IGenre } from "../genres/types";
import { IMovie } from "./types";

type AllFilmsListProps = {
  allFilms: IMovie[];
  onClick?: (id: string | number) => void;
  genres: IGenre[];
  Bookmarker?: React.ComponentType<{ id: string | number }>;
};
export const AllFilmsList: React.FC<AllFilmsListProps> = ({
  allFilms,
  genres,
  onClick,
}) => {
  const data = allFilms || [];

  return (
    <>
      <CardList
        data={allFilms ?? []}
        onClick={onClick}
        genres={genres}
        Bookmarker={FilmBookmark}
      ></CardList>
    </>
  );
};
