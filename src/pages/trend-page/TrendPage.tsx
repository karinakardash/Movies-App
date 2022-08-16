import { useEffect, useState } from "react";
import { FilterBar } from "../../features/filters/filterBar/filterBar";
import { fetchMovieGenresStart } from "../../features/genres";
import { Header } from "../../features/header/Header";
import { fetchTrendMoviesStart } from "../../features/trend-films";
import { TrendFilmsList } from "../../features/trend-films/trendFilmsList";
import { actions } from "../../features/trend-films/trendFilmsSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { LinkButtons } from "../../types";
import { MainButton } from "../../ui/button/MainButton";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import styles from "./TrendPage.module.css";

const LINKS_LIST = Object.values(LinkButtons);
type TrendPageProps = {};

export const TrendPage: React.FC<TrendPageProps> = () => {
  const [selectedLink, setSelectedLink] = useState(LinkButtons.TRENDS);
  const [trendPage, setTrendPage] = useState(1);
  const allgenres = useAppSelector((state) => state.genres.genres);
  let trendFilms = useAppSelector((state) => state.trendFilms.trendFilms);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.clearTrendMoviesState());
    dispatch(fetchMovieGenresStart());
  }, []);

  useEffect(() => {
    dispatch(fetchTrendMoviesStart({ page: trendPage }));
  }, [dispatch, trendPage]);

  return (
    <>
      <Header/>
      <Sidebar
        links={LINKS_LIST}
        selectedLink={selectedLink}
        onLinkClick={setSelectedLink}
      />
      <FilterBar/>
      <div className={styles.wrapper}>
        <div className={styles.listContainer}>
          <TrendFilmsList
            trendFilms={trendFilms}
            genres={allgenres}
          ></TrendFilmsList>
        </div>
        <MainButton
          className={styles.button}
          onClick={(e) => {
            setTrendPage(trendPage + 1);
          }}
        >
          <p>Show more</p>
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.95334 2C3.77424 3.14066 1.5 6.1842 1.5 9.75958C1.5 14.3106 5.18483 18 9.7303 18V18C13.322 18 16.3764 15.6965 17.5 12.4844"
              stroke="#7B61FF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </MainButton>
      </div>
    </>
  );
};
