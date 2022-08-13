import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllFilmsList } from "../../features/all-films/allFilmsList";
import { IMovie } from "../../features/all-films/types";
import { Header } from "../../features/header/Header";
import { fetchRecommendationsStart } from "../../features/recommendations";
import { fetchSearchContentStart } from "../../features/search";
import { fetchSelectedFilmStart } from "../../features/selected-film";
import { SelectedFilmContainer } from "../../features/selected-film/SelectedFilmContainer";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { LinkButtons } from "../../types";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import styles from "./SelectedFilmPage.module.css";

const LINKS_LIST = Object.values(LinkButtons);

type SelectedFilmPageProps = {};

export const SelectedFilmPage: React.FC<SelectedFilmPageProps> = () => {
  const [selectedLink, setSelectedLink] = useState(LinkButtons.HOME);
  const [page, setPage] = useState(1);
  const film = useAppSelector((state) => state.selectedFilm.selectedFilm);
  const recommendations = useAppSelector(
    (state) => state.recommendations.recommendations
  );
  const allgenres = useAppSelector((state) => state.genres.genres);
  const favoriteMovies = useAppSelector(
    (state) => state.favoritesFilm.favoriteMovies
  );
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchSelectedFilmStart({ id }));
      dispatch(fetchRecommendationsStart({ id }));
    }
  }, [dispatch, id]);

  return (
    <>
      <Header
        onInput={(e) => {
          dispatch(
            fetchSearchContentStart({
              query: e.currentTarget.value,
              page: page,
            })
          );
        }}
      />
      <Sidebar
        links={LINKS_LIST}
        selectedLink={selectedLink}
        onLinkClick={setSelectedLink}
      />
      {Object.keys(film).length && id ? (
        <SelectedFilmContainer
          id={id}
          recommendations={recommendations}
          genres={allgenres}
          film={film}
        />
      ) : null}
    </>
  );
};
