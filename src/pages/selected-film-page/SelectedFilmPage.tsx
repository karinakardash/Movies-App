import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../features/header/Header";
import { fetchRecommendationsStart } from "../../features/recommendations";
import { fetchSelectedFilmStart } from "../../features/selected-film";
import { SelectedFilmContainer } from "../../features/selected-film/SelectedFilmContainer";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { LinkButtons } from "../../types";
import { Sidebar } from "../../ui/sidebar/Sidebar";

const LINKS_LIST = Object.values(LinkButtons);

type SelectedFilmPageProps = {};

export const SelectedFilmPage: React.FC<SelectedFilmPageProps> = () => {
  const [selectedLink, setSelectedLink] = useState(LinkButtons.HOME);
  const film = useAppSelector((state) => state.selectedFilm.selectedFilm);
  const recommendations = useAppSelector(
    (state) => state.recommendations.recommendations
  );
  const allgenres = useAppSelector((state) => state.genres.genres);
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
      <Header/>
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
