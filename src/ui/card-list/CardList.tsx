import { Link } from "react-router-dom";
import { IMovie } from "../../features/all-films/types";
import { FilmBookmark } from "../../features/favorites/FilmBookmark";
import { IGenre } from "../../features/genres/types";
import { AppPages } from "../../types";
import { Card } from "../../ui/card/Card";
import { buildImagePath } from "../../utils/buildImagePath";
import { returnGenres } from "../../utils/returnGenres";
import styles from "./CardList.module.css";

type CardListProps = {
  data: IMovie[];
  onClick?: (id: string | number) => void;
  genres: IGenre[];
  Bookmarker?: React.ComponentType<{ id: string | number }>;
};
export const CardList: React.FC<CardListProps> = ({ data, genres }) => {
  return (
    <>
      {data.map((film: IMovie, index) => (
        <Link
          to={`${AppPages.FILM_PAGE}/${film.id}`}
          key={Number(film.id) + index}
          className={styles.cardBox}
        >
          <Card
            id={film.id}
            image={buildImagePath(film.poster_path, "w780")}
            type={returnGenres(film.genre_ids, genres).slice(0,3)}
            title={film.title}
            vote_average={film.vote_average}
            Bookmarker={FilmBookmark}
          ></Card>
        </Link>
      ))}
    </>
  );
};
