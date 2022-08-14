import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AllFilmsList } from "../../features/all-films/allFilmsList";
import { fetchMovieGenresStart } from "../../features/genres";
import { Header } from "../../features/header/Header";
import { fetchSearchContentStart, reset } from "../../features/search";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { LinkButtons } from "../../types";
import { MainButton } from "../../ui/button/MainButton";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import styles from "./SearchPage.module.css";

const LINKS_LIST = Object.values(LinkButtons);

type SearchPageProps = {};

export const SearchPage: React.FC<SearchPageProps> = () => {
  const [selectedLink, setSelectedLink] = useState(LinkButtons.HOME);
  const [page, setPage] = useState(1);
  const searchhList = useAppSelector((state) => state.search.searchList);
  const allgenres = useAppSelector((state) => state.genres.genres);
  const { query = " "} = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieGenresStart());
  }, []);

  useEffect(() => {
   dispatch(
          fetchSearchContentStart({
            query: query,
            page: page,
          })
        );
   }, [query, page]);

  return (
    <>
      <Header/>
      <Sidebar
        links={LINKS_LIST}
        selectedLink={selectedLink}
        onLinkClick={setSelectedLink}
      />
      <div className={styles.wrapper}>
        <div className={styles.listContainer}>
          <AllFilmsList allFilms={searchhList} genres={allgenres}></AllFilmsList>
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
