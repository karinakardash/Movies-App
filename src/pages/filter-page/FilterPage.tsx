import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllFilmsList } from "../../features/all-films/allFilmsList";
import { fetchFilteredContentStart, resetFilters } from "../../features/filters";
import { FilterBar } from "../../features/filters/filterBar/filterBar";
import { fetchMovieGenresStart } from "../../features/genres";
import { Header } from "../../features/header/Header";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { LinkButtons } from "../../types";
import { MainButton } from "../../ui/button/MainButton";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import styles from "./FilterPage.module.css";
import {returnGenres} from "../../utils/returnGenres"

const LINKS_LIST = Object.values(LinkButtons);

type FilterPageProps = {};

export const FilterPage: React.FC<FilterPageProps> = () => {
  const [selectedLink, setSelectedLink] = useState(LinkButtons.HOME);
  const [page, setPage] = useState(1);
  const filteredList = useAppSelector((state) => state.filteredList.filteredList);
  const allgenres = useAppSelector((state) => state.genres.genres);
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieGenresStart());
    dispatch(resetFilters());
  }, []);

  useEffect(() => {
   dispatch(
    fetchFilteredContentStart({
            sort_by: params.sort,
            release_date_gte: `${params.yearsFrom}-01-01`,
            release_date_lte: `${params.yearsTo}-12-31`,
            vote_average_gte: params.ratingFrom,
            vote_average_lte: params.ratingTo,
            with_genres: params.allgenres,
            page: page,
          })
        );
   }, [params, page]);

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
          <AllFilmsList allFilms={filteredList} genres={allgenres}></AllFilmsList>
        </div>
        <MainButton
          className={styles.button}
          onClick={(e) => {
            setPage(page + 1);
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
