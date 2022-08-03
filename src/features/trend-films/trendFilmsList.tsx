import { CardList } from "../../ui/card-list/CardList";
import { IGenre } from "../genres/types";
import { IMovie } from "./types";

type TrendFilmsListProps = {
  trendFilms: IMovie[];
  onClick?: (id: string | number) => void;
  genres: IGenre[];
};
export const TrendFilmsList: React.FC<TrendFilmsListProps> = ({
  trendFilms,
  genres,
}) => {
  const data = trendFilms || [];

  return (
    <>
      <CardList data={trendFilms ?? []} genres={genres}></CardList>
    </>
  );
};
