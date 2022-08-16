import { IGenre } from "../genres/types";
import { IMovieDetails } from "./types";
import styles from "./SelectedFilmContainer.module.css";
import { buildImagePath } from "../../utils/buildImagePath";
import { RecommendationsList } from "../recommendations/recommendationsList";
import { IMovie } from "../all-films/types";
import { FilmBookmark } from "../favorites/FilmBookmark";

type SelectedFilmContainerProps = {
  film: IMovieDetails;
  recommendations: IMovie[];
  genres: IGenre[];
  id: string | number;
};
export const SelectedFilmContainer: React.FC<SelectedFilmContainerProps> = ({
  film,
  recommendations,
  genres,
  id,
}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.listContainer}>
        <div className={styles.leftBox}>
          <div className={styles.picture}>
            <img
              src={buildImagePath(film.poster_path, "w780")}
              alt={"picture"}
            />
          </div>
          <div className={styles.options}>
            <FilmBookmark id={id} />
            <div className={styles.optionsItem}>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="3.54545"
                  cy="8.63627"
                  r="2.54545"
                  stroke="#AFB2B6"
                  strokeWidth="2"
                />
                <circle
                  cx="12.4544"
                  cy="3.54545"
                  r="2.54545"
                  stroke="#AFB2B6"
                  strokeWidth="2"
                />
                <circle
                  cx="12.4544"
                  cy="13.7273"
                  r="2.54545"
                  stroke="#AFB2B6"
                  strokeWidth="2"
                />
                <path
                  d="M10 13L6.09106 10.5455M6.09106 7.5L10 5"
                  stroke="#AFB2B6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.rightBox}>
          <ul className={styles.genresList}>
            {film.genres.map((genre) => (
              <li
                className={styles.genreItem}
                children={genre.name}
                key={genre.name}
              ></li>
            ))}
          </ul>
          <h2 className={styles.title}>{film.title}</h2>
          <ul className={styles.box}>
            <li>{film.vote_average.toFixed(1)}</li>
            <li>{`${film.vote_count} votes`}</li>
            <li>{`${film.runtime} min`}</li>
          </ul>
          <p className={styles.text}>{film.overview}</p>

          <table className={styles.table}>
            <tbody>
              <tr>
                <td>Status</td>
                <td>{film.status}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>{film.release_date.toString()}</td>
              </tr>
              <tr>
                <td>Budget</td>
                <td>{`$${film.budget}`}</td>
              </tr>
              <tr>
                <td>Production</td>
                <td>
                  {film.production_companies
                    .map((item) => item.name)
                    .join(", ")}
                </td>
              </tr>
              <tr>
                <td>Production countries</td>
                <td>
                  {film.production_countries
                    .map((item) => item.name)
                    .join(", ")}
                </td>
              </tr>
            </tbody>
          </table>
          <RecommendationsList
            recommendations={recommendations}
            genres={genres}
          />
        </div>
      </div>
    </div>
  );
};
