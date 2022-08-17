import { useEffect, useState } from "react";
import { fetchAllMoviesStart } from "../../features/all-films";
import { AllFilmsList } from "../../features/all-films/allFilmsList";
import { IMovie } from "../../features/all-films/types";
import { fetchMovieGenresStart } from "../../features/genres";
import { Header } from "../../features/header/Header";
import { useAppSelector, useAppDispatch, useAuth } from "../../hooks";
import { AppPages, LinkButtons } from "../../types";
import { MainButton } from "../../ui/button/MainButton";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import styles from "./FavoritesPage.module.css";
import { actions } from "../../features/all-films/allFilmsSlice";
import { FilterBar } from "../../features/filters/filterBar/filterBar";
import { useNavigate } from "react-router-dom";

const LINKS_LIST = Object.values(LinkButtons);

type FavoritesPageProps = {};

export const FavoritesPage: React.FC<FavoritesPageProps> = () => {
  const [selectedLink, setSelectedLink] = useState(LinkButtons.FAVORITES);
  const [page, setPage] = useState(1);
  const favorites = useAppSelector((state) => state.favoritesFilm);
  const allFilms = useAppSelector((state) => state.allFilms.allFilms);
  const allgenres = useAppSelector((state) => state.genres.genres);
  const trendFilms = useAppSelector((state) => state.trendFilms.trendFilms);

  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  if (!isAuth) {
    navigate(AppPages.LOGIN);
  }

  useEffect(() => {
    dispatch(actions.clearMoviesState());
    dispatch(fetchMovieGenresStart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllMoviesStart({ page: page }));
  }, [dispatch, page]);

  const displayFavoriteFilms = (film: IMovie) =>
    favorites[film.id]?.state === true;

  const favoritesMoviesListfromAllFilms = allFilms
    ? allFilms.filter(displayFavoriteFilms)
    : [];

  const favoritesMoviesListfromTrendsFilms = trendFilms
    ? trendFilms.filter(displayFavoriteFilms)
    : [];

  const favoriteMoviesFullList = [
    ...favoritesMoviesListfromAllFilms,
    ...favoritesMoviesListfromTrendsFilms,
  ];

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
        {favoriteMoviesFullList.length > 0 ? (
          <div className={styles.listContainer}>
            <AllFilmsList
              allFilms={favoriteMoviesFullList}
              genres={allgenres}
            ></AllFilmsList>
          </div>
        ) : (
          <div className={styles.defaultPicture}>
            <svg
              width="405"
              height="424"
              viewBox="0 0 405 424"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.00585938"
                y="58.8425"
                width="227.35"
                height="305.128"
                rx="20"
                transform="rotate(-15 0.00585938 58.8425)"
                fill="#242426"
              />
              <rect
                width="227.35"
                height="305.128"
                rx="20"
                transform="matrix(0.965926 0.258819 0.258819 -0.965926 106.424 294.73)"
                fill="#242426"
              />
              <rect
                x="70"
                y="2.6145"
                width="266"
                height="357"
                rx="20"
                fill="#323537"
              />
              <path
                d="M208.307 228.811C207.953 228.808 207.614 228.668 207.362 228.42C207.24 228.295 207.143 228.147 207.077 227.985C207.006 227.826 206.969 227.654 206.97 227.479C206.968 227.302 207.005 227.127 207.077 226.965C207.106 226.882 207.148 226.804 207.202 226.734C207.245 226.662 207.299 226.596 207.362 226.539C207.892 226.038 208.722 226.038 209.252 226.539C209.773 227.059 209.773 227.9 209.252 228.42C209.001 228.67 208.661 228.81 208.307 228.811Z"
                fill="#565B5F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M162.536 227.479C162.536 226.744 163.135 226.148 163.873 226.148C164.612 226.148 165.21 226.744 165.21 227.479C165.21 228.215 164.612 228.811 163.873 228.811C163.515 228.815 163.169 228.677 162.913 228.428C162.657 228.178 162.512 227.836 162.51 227.479H162.536ZM171.289 226.148C170.551 226.148 169.952 226.744 169.952 227.479H169.926C169.926 227.837 170.07 228.18 170.327 228.43C170.583 228.681 170.93 228.818 171.289 228.811C172.028 228.811 172.626 228.215 172.626 227.479C172.626 226.744 172.028 226.148 171.289 226.148ZM177.359 227.479C177.359 226.744 177.958 226.148 178.696 226.148C179.435 226.148 180.033 226.744 180.033 227.479C180.033 228.215 179.435 228.811 178.696 228.811C178.333 228.825 177.979 228.691 177.716 228.44C177.454 228.189 177.306 227.842 177.306 227.479H177.359ZM186.104 226.148C185.365 226.148 184.767 226.744 184.767 227.479H184.74C184.74 227.837 184.884 228.18 185.141 228.43C185.397 228.681 185.744 228.818 186.104 228.811C186.842 228.811 187.441 228.215 187.441 227.479C187.441 226.744 186.842 226.148 186.104 226.148ZM192.182 227.479C192.182 226.744 192.781 226.148 193.52 226.148C194.258 226.148 194.857 226.744 194.857 227.479C194.852 228.213 194.256 228.806 193.52 228.811C193.16 228.818 192.813 228.681 192.557 228.43C192.3 228.18 192.156 227.837 192.156 227.479H192.182ZM199.59 227.479C199.59 226.744 200.188 226.148 200.927 226.148C201.665 226.148 202.264 226.744 202.264 227.479C202.264 228.215 201.665 228.811 200.927 228.811C200.188 228.811 199.59 228.215 199.59 227.479ZM156.466 226.148C155.728 226.148 155.129 226.744 155.129 227.479H155.103C155.102 227.837 155.247 228.18 155.504 228.43C155.76 228.681 156.107 228.818 156.466 228.811C157.205 228.811 157.803 228.215 157.803 227.479C157.803 226.744 157.205 226.148 156.466 226.148Z"
                fill="#565B5F"
              />
              <path
                d="M149.032 228.811C148.678 228.81 148.338 228.67 148.088 228.42C147.834 228.172 147.693 227.833 147.695 227.479C147.696 227.127 147.837 226.788 148.088 226.539C148.148 226.473 148.217 226.416 148.293 226.37C148.364 226.318 148.442 226.277 148.524 226.246C148.604 226.21 148.688 226.183 148.774 226.166C148.945 226.139 149.12 226.139 149.291 226.166C149.377 226.183 149.461 226.21 149.54 226.246C149.622 226.278 149.7 226.32 149.772 226.37C149.846 226.419 149.915 226.475 149.977 226.539C150.228 226.788 150.369 227.127 150.369 227.479C150.367 227.832 150.226 228.17 149.977 228.42C149.727 228.67 149.387 228.81 149.032 228.811Z"
                fill="#565B5F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M149.032 176.924C148.294 176.924 147.695 177.52 147.695 178.255C147.695 178.99 148.294 179.586 149.032 179.586C149.771 179.586 150.369 178.99 150.369 178.255C150.369 177.52 149.771 176.924 149.032 176.924ZM147.695 185.283C147.695 184.548 148.294 183.952 149.032 183.952C149.771 183.952 150.369 184.548 150.369 185.283C150.369 186.018 149.771 186.614 149.032 186.614C148.294 186.614 147.695 186.018 147.695 185.283ZM149.032 190.989C148.294 190.989 147.695 191.585 147.695 192.32C147.695 193.056 148.294 193.652 149.032 193.652C149.771 193.652 150.369 193.056 150.369 192.32C150.369 191.585 149.771 190.989 149.032 190.989ZM147.695 199.349C147.695 198.614 148.294 198.018 149.032 198.018C149.771 198.018 150.369 198.614 150.369 199.349C150.369 200.084 149.771 200.68 149.032 200.68C148.294 200.68 147.695 200.084 147.695 199.349ZM149.032 205.055C148.294 205.055 147.695 205.651 147.695 206.386V206.404C147.695 207.139 148.294 207.735 149.032 207.735C149.771 207.735 150.369 207.139 150.369 206.404C150.374 206.047 150.235 205.704 149.984 205.451C149.733 205.197 149.39 205.055 149.032 205.055ZM147.695 213.414C147.695 212.679 148.294 212.083 149.032 212.083C149.771 212.083 150.369 212.679 150.369 213.414C150.369 214.149 149.771 214.745 149.032 214.745C148.294 214.745 147.695 214.149 147.695 213.414ZM147.695 220.442C147.695 219.707 148.294 219.111 149.032 219.111C149.771 219.111 150.369 219.707 150.369 220.442C150.369 221.177 149.771 221.773 149.032 221.773C148.294 221.773 147.695 221.177 147.695 220.442Z"
                fill="#565B5F"
              />
              <path
                d="M149.032 172.558C148.678 172.558 148.338 172.417 148.088 172.167C147.838 171.917 147.698 171.579 147.695 171.227C147.696 170.874 147.837 170.536 148.088 170.286C148.148 170.221 148.217 170.164 148.293 170.118C148.367 170.078 148.444 170.046 148.524 170.02L148.783 169.922C148.953 169.887 149.129 169.887 149.3 169.922L149.549 169.993L149.781 170.118C149.855 170.166 149.924 170.223 149.986 170.286C150.237 170.536 150.378 170.874 150.378 171.227C150.378 171.962 149.78 172.558 149.041 172.558H149.032Z"
                fill="#565B5F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M156.466 169.896C155.728 169.896 155.129 170.492 155.129 171.227H155.103C155.102 171.584 155.247 171.927 155.504 172.178C155.76 172.428 156.107 172.565 156.466 172.558C157.205 172.558 157.803 171.962 157.803 171.227C157.803 170.492 157.205 169.896 156.466 169.896ZM162.536 171.227C162.536 170.492 163.135 169.896 163.873 169.896C164.612 169.896 165.21 170.492 165.21 171.227C165.21 171.962 164.612 172.558 163.873 172.558C163.514 172.565 163.167 172.428 162.911 172.178C162.654 171.927 162.51 171.584 162.51 171.227H162.536ZM171.289 169.896C170.551 169.896 169.952 170.492 169.952 171.227H169.926C169.926 171.584 170.07 171.927 170.327 172.178C170.583 172.428 170.93 172.565 171.289 172.558C172.028 172.558 172.626 171.962 172.626 171.227C172.626 170.492 172.028 169.896 171.289 169.896ZM177.359 171.227C177.359 170.492 177.958 169.896 178.696 169.896C179.435 169.896 180.033 170.492 180.033 171.227C180.033 171.962 179.435 172.558 178.696 172.558C178.333 172.572 177.979 172.439 177.716 172.187C177.454 171.936 177.306 171.589 177.306 171.227H177.359ZM186.104 169.896C185.365 169.896 184.767 170.492 184.767 171.227H184.74C184.74 171.584 184.884 171.927 185.141 172.178C185.397 172.428 185.744 172.565 186.104 172.558C186.842 172.558 187.441 171.962 187.441 171.227C187.441 170.492 186.842 169.896 186.104 169.896ZM192.182 171.227C192.182 170.492 192.781 169.896 193.52 169.896C194.258 169.896 194.857 170.492 194.857 171.227C194.857 171.962 194.258 172.558 193.52 172.558C193.16 172.565 192.813 172.428 192.557 172.178C192.3 171.927 192.156 171.584 192.156 171.227H192.182ZM199.59 171.227C199.59 170.492 200.188 169.896 200.927 169.896C201.665 169.896 202.264 170.492 202.264 171.227C202.264 171.962 201.665 172.558 200.927 172.558C200.188 172.558 199.59 171.962 199.59 171.227Z"
                fill="#565B5F"
              />
              <path
                d="M208.306 172.558C207.858 172.561 207.437 172.339 207.189 171.967C206.941 171.594 206.899 171.122 207.076 170.712C207.107 170.63 207.149 170.552 207.201 170.481C207.247 170.41 207.301 170.345 207.362 170.286C207.68 169.973 208.134 169.837 208.574 169.922L208.823 169.993C208.901 170.029 208.975 170.071 209.046 170.117C209.122 170.164 209.191 170.221 209.251 170.286C209.315 170.345 209.372 170.41 209.421 170.481C209.421 170.561 209.51 170.632 209.545 170.712C209.577 170.792 209.601 170.876 209.617 170.961C209.706 171.398 209.569 171.852 209.251 172.167C209.191 172.23 209.122 172.284 209.046 172.327C208.977 172.377 208.902 172.419 208.823 172.451C208.661 172.523 208.484 172.559 208.306 172.558Z"
                fill="#565B5F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M208.307 176.924C207.568 176.924 206.97 177.52 206.97 178.255C206.97 178.99 207.568 179.586 208.307 179.586C209.045 179.586 209.644 178.99 209.644 178.255C209.644 177.52 209.045 176.924 208.307 176.924ZM206.97 185.283C206.97 184.548 207.568 183.952 208.307 183.952C209.045 183.952 209.644 184.548 209.644 185.283C209.644 186.018 209.045 186.614 208.307 186.614C207.568 186.614 206.97 186.018 206.97 185.283ZM208.307 190.989C207.568 190.989 206.97 191.585 206.97 192.32C206.97 193.056 207.568 193.652 208.307 193.652C209.045 193.652 209.644 193.056 209.644 192.32C209.644 191.585 209.045 190.989 208.307 190.989ZM206.97 199.349C206.97 198.614 207.568 198.018 208.307 198.018C209.045 198.018 209.644 198.614 209.644 199.349C209.644 200.084 209.045 200.68 208.307 200.68C207.568 200.68 206.97 200.084 206.97 199.349ZM208.307 205.046C207.567 205.051 206.97 205.649 206.97 206.386V206.404C206.975 207.135 207.572 207.726 208.307 207.726C209.042 207.726 209.639 207.135 209.644 206.404C209.649 206.047 209.51 205.703 209.259 205.448C209.008 205.193 208.665 205.048 208.307 205.046ZM206.97 213.414C206.97 212.679 207.568 212.083 208.307 212.083C209.045 212.083 209.644 212.679 209.644 213.414C209.644 214.149 209.045 214.745 208.307 214.745C207.568 214.745 206.97 214.149 206.97 213.414ZM206.97 220.442C206.97 219.707 207.568 219.111 208.307 219.111C209.045 219.111 209.644 219.707 209.644 220.442C209.644 221.177 209.045 221.773 208.307 221.773C207.568 221.773 206.97 221.177 206.97 220.442Z"
                fill="#565B5F"
              />
              <path
                d="M162.724 136.281H244.068V213.973H162.724V136.281Z"
                fill="#323537"
              />
              <g opacity="0.5">
                <path
                  d="M170.086 143.309H236.714V206.945H170.086V143.309Z"
                  fill="#565B5F"
                />
              </g>
              <path
                d="M162.272 135.796H245V214.705H162.272V135.796Z"
                stroke="#565B5F"
              />
              <rect
                x="177.903"
                y="155.031"
                width="20.3636"
                height="20.3636"
                rx="10.1818"
                fill="#565B5F"
              />
              <rect
                x="187.771"
                y="165.911"
                width="25.7866"
                height="28.4147"
                fill="#323537"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M211.67 194.563C212.4 194.568 213.129 194.574 213.851 194.574C213.851 193.368 213.851 192.205 213.753 190.945L213.708 189.117L213.753 187.342C213.798 186.64 213.783 185.892 213.767 185.137C213.758 184.689 213.749 184.238 213.753 183.792C213.757 183.223 213.779 182.662 213.802 182.102C213.826 181.484 213.851 180.867 213.851 180.243L213.878 178.29L213.94 176.516C213.878 175.335 213.878 174.111 213.94 172.966C214.002 171.821 214.02 170.579 213.94 169.416C213.898 168.812 213.917 168.201 213.935 167.585C213.953 167.016 213.97 166.442 213.94 165.867C213.93 165.664 213.76 165.507 213.557 165.512C213.299 165.52 213.041 165.529 212.783 165.538C210.893 165.603 209.003 165.669 207.112 165.583H205.499H203.886H200.659C199.841 165.59 199.022 165.617 198.202 165.644C196.869 165.689 195.536 165.733 194.206 165.689H187.761C187.67 165.694 187.596 165.767 187.592 165.858C187.592 166.251 187.595 166.644 187.598 167.038C187.604 167.825 187.61 168.614 187.592 169.408C187.583 169.807 187.571 170.205 187.559 170.602C187.535 171.389 187.512 172.173 187.512 172.957C187.565 173.543 187.565 174.137 187.565 174.732L187.485 176.507V180.056C187.485 180.847 187.477 181.637 187.469 182.426C187.453 184.005 187.437 185.582 187.485 187.156C187.556 187.943 187.532 188.734 187.509 189.524C187.497 189.918 187.485 190.312 187.485 190.705V194.255C187.485 194.431 187.628 194.574 187.806 194.574C188.628 194.574 189.454 194.599 190.281 194.623C191.632 194.663 192.987 194.703 194.33 194.637C195.4 194.574 196.487 194.557 197.593 194.637C198.33 194.69 199.052 194.672 199.771 194.654C200.129 194.645 200.487 194.637 200.846 194.637C201.185 194.627 201.523 194.616 201.86 194.605C203.668 194.549 205.458 194.492 207.344 194.574C208.747 194.539 210.209 194.551 211.67 194.563ZM213.343 190.528V194.077H213.307C212.805 194.073 212.308 194.075 211.811 194.077C210.2 194.082 208.604 194.088 206.934 193.891C205.556 193.968 204.127 193.942 202.694 193.917C201.976 193.904 201.257 193.891 200.543 193.891C200.186 193.891 199.829 193.884 199.472 193.877C198.761 193.863 198.053 193.85 197.352 193.891C196.3 193.953 195.24 193.953 194.17 193.953H187.996C187.998 193.683 187.998 193.412 187.998 193.141C187.998 192.302 187.997 191.461 188.073 190.625C188.129 190.008 188.104 189.39 188.08 188.771C188.057 188.207 188.035 187.642 188.073 187.076C188.137 185.659 188.144 184.24 188.15 182.819C188.154 181.872 188.159 180.924 188.18 179.977C188.18 179.58 188.192 179.183 188.204 178.788C188.228 177.999 188.251 177.213 188.18 176.427C188.166 176.243 188.149 176.058 188.132 175.874C188.093 175.465 188.055 175.056 188.055 174.652C188.072 174.058 188.12 173.466 188.198 172.877C188.245 171.98 188.179 171.078 188.114 170.179C188.093 169.895 188.072 169.611 188.055 169.328C188.012 168.606 188.041 167.881 188.071 167.157C188.085 166.815 188.099 166.473 188.105 166.132C190.139 166.177 192.172 166.17 194.206 166.035C195.512 165.949 196.822 166.01 198.131 166.072C198.974 166.111 199.817 166.151 200.659 166.151H203.877H205.49L207.103 166.089C208.535 165.994 209.968 166.026 211.4 166.057C211.992 166.07 212.584 166.083 213.176 166.087C213.154 166.76 213.165 167.419 213.177 168.085C213.184 168.48 213.191 168.878 213.191 169.283C213.191 169.688 213.182 170.087 213.173 170.484C213.155 171.268 213.138 172.043 213.191 172.833C213.255 174.015 213.255 175.2 213.191 176.383C213.199 176.631 213.211 176.881 213.224 177.133C213.24 177.473 213.257 177.815 213.263 178.157C213.267 178.466 213.238 178.761 213.209 179.055C213.182 179.326 213.156 179.598 213.156 179.879L213.28 183.429C213.28 183.845 213.271 184.247 213.262 184.643C213.244 185.419 213.227 186.173 213.28 186.978L213.343 188.753V190.528ZM213.176 166.087C213.3 166.088 213.424 166.089 213.548 166.089L213.191 165.734C213.185 165.852 213.18 165.97 213.176 166.087ZM188.105 166.132C188.108 166.014 188.109 165.896 188.109 165.778L187.761 166.124C187.876 166.127 187.991 166.13 188.105 166.132ZM187.996 193.953H187.761L187.993 194.175C187.994 194.101 187.995 194.027 187.996 193.953Z"
                fill="#323537"
              />
              <path
                d="M218.308 178.362L209.608 195.222L228.906 194.601L218.825 178.335C218.769 178.243 218.666 178.189 218.558 178.195C218.45 178.2 218.354 178.264 218.308 178.362Z"
                fill="#565B5F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M218.486 177.838C218.266 177.866 218.075 178.003 217.978 178.202C217.765 178.629 217.548 179.057 217.33 179.484C216.83 180.468 216.328 181.454 215.875 182.444L214.743 184.547L213.7 186.668C213.411 187.222 213.14 187.782 212.87 188.339C212.448 189.209 212.03 190.073 211.552 190.901C211.401 191.18 211.239 191.455 211.078 191.731C210.839 192.137 210.6 192.545 210.393 192.968C210.045 193.678 209.644 194.361 209.243 195.045C209.23 195.103 209.23 195.164 209.243 195.222C209.238 195.323 209.274 195.422 209.343 195.497C209.411 195.572 209.507 195.617 209.609 195.622C210.555 195.668 211.502 195.611 212.447 195.554C213.112 195.514 213.777 195.474 214.44 195.471C215.283 195.466 216.126 195.437 216.97 195.408C217.732 195.381 218.496 195.355 219.262 195.346C220.265 195.335 221.264 195.263 222.262 195.19C222.87 195.146 223.477 195.102 224.084 195.071C224.351 195.071 224.619 195.079 224.888 195.087C225.425 195.103 225.965 195.119 226.5 195.071L228.915 194.956C228.976 194.956 229.035 194.937 229.085 194.903C229.165 194.855 229.222 194.777 229.242 194.686C229.262 194.595 229.244 194.5 229.191 194.424L227.854 192.338C227.433 191.658 227.014 190.948 226.598 190.208L224.048 185.967C223.656 185.265 223.228 184.556 222.765 183.855C222.641 183.667 222.518 183.483 222.395 183.3C222.057 182.795 221.724 182.299 221.41 181.778L220.091 179.684L219.431 178.637C219.422 178.621 219.414 178.607 219.405 178.592C219.304 178.421 219.231 178.298 219.075 178.077C218.936 177.898 218.712 177.807 218.486 177.838ZM218.565 178.592C218.578 178.569 218.59 178.545 218.602 178.521C218.611 178.521 218.513 178.512 218.513 178.512L218.565 178.592ZM228.355 194.331L225.956 190.581C225.54 189.926 225.149 189.264 224.759 188.603C224.313 187.848 223.869 187.095 223.389 186.357C223.243 186.123 223.096 185.891 222.948 185.658C222.653 185.193 222.358 184.727 222.079 184.254C221.949 184.035 221.823 183.814 221.696 183.593C221.412 183.098 221.127 182.603 220.813 182.124L219.494 180.039L218.825 178.992L218.565 178.592C218.395 178.919 218.226 179.247 218.056 179.574C217.512 180.627 216.967 181.68 216.392 182.719L215.393 184.875L214.324 186.987C213.726 188.104 213.137 189.224 212.549 190.343C211.747 191.87 210.945 193.395 210.119 194.911C209.937 194.912 209.755 194.912 209.573 194.912L209.867 195.373C209.952 195.219 210.036 195.065 210.119 194.911C211.544 194.911 212.974 194.903 214.404 194.832C215.13 194.796 215.854 194.792 216.577 194.789C217.461 194.784 218.344 194.78 219.226 194.716C220.2 194.646 221.177 194.632 222.154 194.617C222.786 194.608 223.418 194.599 224.048 194.574C224.851 194.543 225.655 194.492 226.46 194.441C227.092 194.401 227.724 194.361 228.355 194.331ZM228.355 194.331L228.63 194.761L228.871 194.308C228.699 194.315 228.527 194.322 228.355 194.331Z"
                fill="#565B5F"
              />
              <path
                d="M241.5 235C254.479 235 265 224.479 265 211.5C265 198.521 254.479 188 241.5 188C228.521 188 218 198.521 218 211.5C218 224.479 228.521 235 241.5 235Z"
                fill="#565B5F"
                stroke="#565B5F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M246.77 219.918L242.48 216.765C242.072 216.468 241.508 216.468 241.1 216.765L236.77 219.918C236.454 220.162 236.024 220.217 235.652 220.062C235.281 219.907 235.03 219.568 235 219.18V205.706C235.039 204.916 235.405 204.174 236.017 203.643C236.628 203.112 237.436 202.837 238.26 202.879H245.26C246.089 202.843 246.899 203.127 247.508 203.667C248.117 204.207 248.474 204.959 248.5 205.754V219.18C248.461 219.554 248.216 219.878 247.859 220.031C247.501 220.183 247.085 220.14 246.77 219.918Z"
                fill="#AFB2B6"
                fillOpacity="0.7"
              />
              <path
                d="M131.16 401.775C131.854 401.775 132.56 401.775 133.28 401.775C134.014 401.775 134.734 401.788 135.44 401.815C136.147 401.841 136.814 401.881 137.44 401.935L137.32 403.795H131.92C131.547 403.795 131.267 403.888 131.08 404.075C130.907 404.261 130.82 404.555 130.82 404.955V412.475C130.82 412.875 130.907 413.168 131.08 413.355C131.267 413.541 131.547 413.635 131.92 413.635H137.32L137.44 415.495C136.814 415.548 136.147 415.588 135.44 415.615C134.734 415.628 134.014 415.635 133.28 415.635C132.56 415.648 131.854 415.655 131.16 415.655C130.307 415.655 129.62 415.421 129.1 414.955C128.594 414.475 128.334 413.835 128.32 413.035V404.395C128.334 403.595 128.594 402.961 129.1 402.495C129.62 402.015 130.307 401.775 131.16 401.775ZM128.68 407.475H136.56V409.315H128.68V407.475ZM151.907 405.555C152.773 405.555 153.433 405.788 153.887 406.255C154.353 406.708 154.587 407.375 154.587 408.255V415.615H152.187V408.995C152.173 408.501 152.073 408.148 151.887 407.935C151.7 407.708 151.373 407.595 150.907 407.595C150.627 407.595 150.353 407.641 150.087 407.735C149.833 407.815 149.547 407.948 149.227 408.135C148.907 408.321 148.52 408.568 148.067 408.875L147.927 407.415C148.607 406.788 149.26 406.321 149.887 406.015C150.527 405.708 151.2 405.555 151.907 405.555ZM141.607 405.795L141.847 407.715L142.087 407.995V415.615H139.667V405.795H141.607ZM145.647 405.555C146.5 405.555 147.153 405.781 147.607 406.235C148.06 406.688 148.287 407.361 148.287 408.255V415.615H145.967V408.995C145.967 408.475 145.86 408.115 145.647 407.915C145.433 407.701 145.113 407.595 144.687 407.595C144.42 407.595 144.153 407.635 143.887 407.715C143.62 407.795 143.327 407.928 143.007 408.115C142.687 408.301 142.287 408.555 141.807 408.875L141.667 407.415C142.333 406.788 142.987 406.321 143.627 406.015C144.267 405.708 144.94 405.555 145.647 405.555ZM163.345 405.555C164.558 405.555 165.431 406.001 165.965 406.895C166.498 407.788 166.765 409.081 166.765 410.775C166.765 412.068 166.625 413.088 166.345 413.835C166.078 414.568 165.671 415.095 165.125 415.415C164.578 415.721 163.885 415.875 163.045 415.875C162.378 415.875 161.725 415.781 161.085 415.595C160.458 415.395 159.878 415.088 159.345 414.675L159.505 413.475C160.025 413.621 160.491 413.748 160.905 413.855C161.318 413.961 161.771 414.015 162.265 414.015C162.758 414.015 163.145 413.935 163.425 413.775C163.718 413.601 163.931 413.281 164.065 412.815C164.198 412.348 164.265 411.675 164.265 410.795C164.265 409.928 164.205 409.255 164.085 408.775C163.965 408.295 163.765 407.961 163.485 407.775C163.218 407.575 162.865 407.475 162.425 407.475C161.945 407.475 161.491 407.581 161.065 407.795C160.638 407.995 160.145 408.295 159.585 408.695L159.305 407.415C159.611 407.055 159.978 406.735 160.405 406.455C160.845 406.175 161.318 405.955 161.825 405.795C162.331 405.635 162.838 405.555 163.345 405.555ZM159.205 405.795L159.445 407.695L159.665 407.975V414.315L159.565 414.555C159.605 414.941 159.631 415.328 159.645 415.715C159.658 416.115 159.665 416.521 159.665 416.935V419.515H157.245V405.795H159.205ZM172.301 402.995V412.655C172.301 413.068 172.388 413.361 172.561 413.535C172.748 413.708 173.061 413.795 173.501 413.795H174.861L175.121 415.495C174.895 415.561 174.621 415.621 174.301 415.675C173.981 415.728 173.668 415.761 173.361 415.775C173.055 415.801 172.795 415.815 172.581 415.815C171.728 415.815 171.061 415.588 170.581 415.135C170.115 414.668 169.881 414.001 169.881 413.135V402.995H172.301ZM175.221 405.795V407.475H168.141V405.895L170.061 405.795H175.221ZM186.39 405.795L182.71 415.915C182.537 416.381 182.317 416.841 182.05 417.295C181.797 417.761 181.47 418.181 181.07 418.555C180.67 418.928 180.197 419.221 179.65 419.435C179.104 419.648 178.47 419.728 177.75 419.675L177.55 418.235C178.35 418.008 178.97 417.701 179.41 417.315C179.864 416.928 180.217 416.435 180.47 415.835L181.01 414.555C181.13 414.261 181.244 413.928 181.35 413.555C181.47 413.168 181.57 412.835 181.65 412.555L183.79 405.795H186.39ZM178.47 405.795L180.65 412.555C180.717 412.781 180.777 413.015 180.83 413.255C180.884 413.481 180.93 413.708 180.97 413.935H181.47L180.71 415.615H180.07C179.884 415.615 179.717 415.561 179.57 415.455C179.424 415.348 179.324 415.201 179.27 415.015L175.89 405.795H178.47ZM195.472 405.555C195.926 405.555 196.412 405.568 196.932 405.595C197.466 405.621 197.986 405.661 198.492 405.715C198.999 405.755 199.452 405.815 199.852 405.895L199.692 407.475C199.052 407.461 198.412 407.448 197.772 407.435C197.146 407.408 196.526 407.395 195.912 407.395C195.366 407.395 194.932 407.408 194.612 407.435C194.306 407.461 194.086 407.541 193.952 407.675C193.832 407.808 193.772 408.035 193.772 408.355C193.772 408.741 193.879 409.001 194.092 409.135C194.306 409.255 194.652 409.375 195.132 409.495L197.812 410.115C198.612 410.315 199.206 410.621 199.592 411.035C199.979 411.435 200.172 412.055 200.172 412.895C200.172 413.708 200.019 414.328 199.712 414.755C199.419 415.168 198.946 415.455 198.292 415.615C197.652 415.761 196.832 415.835 195.832 415.835C195.446 415.835 194.872 415.815 194.112 415.775C193.352 415.748 192.519 415.661 191.612 415.515L191.772 413.935C192.039 413.935 192.352 413.941 192.712 413.955C193.086 413.968 193.479 413.975 193.892 413.975C194.319 413.975 194.752 413.975 195.192 413.975C195.899 413.975 196.439 413.955 196.812 413.915C197.199 413.861 197.466 413.761 197.612 413.615C197.759 413.455 197.832 413.228 197.832 412.935C197.832 412.561 197.706 412.315 197.452 412.195C197.212 412.061 196.852 411.935 196.372 411.815L193.752 411.175C193.152 411.015 192.686 410.815 192.352 410.575C192.019 410.321 191.779 410.015 191.632 409.655C191.486 409.281 191.412 408.828 191.412 408.295C191.412 407.575 191.546 407.015 191.812 406.615C192.092 406.215 192.526 405.935 193.112 405.775C193.712 405.615 194.499 405.541 195.472 405.555ZM205.602 402.995V412.655C205.602 413.068 205.689 413.361 205.862 413.535C206.049 413.708 206.362 413.795 206.802 413.795H208.162L208.422 415.495C208.195 415.561 207.922 415.621 207.602 415.675C207.282 415.728 206.969 415.761 206.662 415.775C206.355 415.801 206.095 415.815 205.882 415.815C205.029 415.815 204.362 415.588 203.882 415.135C203.415 414.668 203.182 414.001 203.182 413.135V402.995H205.602ZM208.522 405.795V407.475H201.442V405.895L203.362 405.795H208.522ZM215.251 405.555C216.038 405.555 216.698 405.661 217.231 405.875C217.778 406.075 218.191 406.421 218.471 406.915C218.751 407.408 218.891 408.088 218.891 408.955V415.615H216.971L216.631 413.495L216.451 413.215V408.935C216.451 408.415 216.331 408.041 216.091 407.815C215.851 407.575 215.391 407.455 214.711 407.455C214.205 407.455 213.565 407.475 212.791 407.515C212.031 407.555 211.265 407.608 210.491 407.675L210.271 406.015C210.738 405.921 211.265 405.841 211.851 405.775C212.438 405.708 213.031 405.655 213.631 405.615C214.231 405.575 214.771 405.555 215.251 405.555ZM217.851 409.575L217.831 411.075H213.331C212.931 411.088 212.645 411.195 212.471 411.395C212.298 411.595 212.211 411.868 212.211 412.215V412.755C212.211 413.155 212.318 413.461 212.531 413.675C212.745 413.875 213.078 413.975 213.531 413.975C213.891 413.975 214.291 413.901 214.731 413.755C215.171 413.608 215.605 413.395 216.031 413.115C216.471 412.835 216.865 412.501 217.211 412.115V413.375C217.078 413.575 216.885 413.815 216.631 414.095C216.378 414.361 216.065 414.628 215.691 414.895C215.331 415.161 214.911 415.381 214.431 415.555C213.965 415.728 213.445 415.815 212.871 415.815C212.285 415.815 211.758 415.715 211.291 415.515C210.825 415.301 210.458 414.995 210.191 414.595C209.925 414.181 209.791 413.675 209.791 413.075V412.035C209.791 411.261 210.045 410.661 210.551 410.235C211.071 409.795 211.778 409.575 212.671 409.575H217.851ZM224.762 402.995V412.655C224.762 413.068 224.849 413.361 225.022 413.535C225.209 413.708 225.522 413.795 225.962 413.795H227.322L227.582 415.495C227.355 415.561 227.082 415.621 226.762 415.675C226.442 415.728 226.129 415.761 225.822 415.775C225.515 415.801 225.255 415.815 225.042 415.815C224.189 415.815 223.522 415.588 223.042 415.135C222.575 414.668 222.342 414.001 222.342 413.135V402.995H224.762ZM227.682 405.795V407.475H220.602V405.895L222.522 405.795H227.682ZM233.851 405.555C235.438 405.555 236.578 405.835 237.271 406.395C237.965 406.941 238.318 407.755 238.331 408.835C238.345 409.728 238.131 410.408 237.691 410.875C237.265 411.328 236.551 411.555 235.551 411.555H229.951V410.055H234.891C235.345 410.055 235.631 409.935 235.751 409.695C235.885 409.455 235.951 409.161 235.951 408.815C235.938 408.268 235.778 407.888 235.471 407.675C235.178 407.461 234.671 407.355 233.951 407.355C233.325 407.355 232.838 407.441 232.491 407.615C232.145 407.788 231.898 408.101 231.751 408.555C231.618 409.008 231.551 409.661 231.551 410.515C231.551 411.421 231.638 412.121 231.811 412.615C231.985 413.108 232.271 413.448 232.671 413.635C233.071 413.808 233.605 413.895 234.271 413.895C234.765 413.895 235.331 413.875 235.971 413.835C236.625 413.795 237.251 413.741 237.851 413.675L238.091 415.215C237.731 415.361 237.318 415.481 236.851 415.575C236.385 415.668 235.898 415.735 235.391 415.775C234.898 415.828 234.431 415.855 233.991 415.855C232.791 415.855 231.825 415.681 231.091 415.335C230.371 414.975 229.845 414.415 229.511 413.655C229.191 412.895 229.031 411.915 229.031 410.715C229.031 409.421 229.191 408.401 229.511 407.655C229.845 406.895 230.365 406.355 231.071 406.035C231.791 405.715 232.718 405.555 233.851 405.555ZM247.77 402.995V412.655C247.77 413.068 247.857 413.361 248.03 413.535C248.217 413.708 248.53 413.795 248.97 413.795H250.33L250.59 415.495C250.363 415.561 250.09 415.621 249.77 415.675C249.45 415.728 249.137 415.761 248.83 415.775C248.523 415.801 248.263 415.815 248.05 415.815C247.197 415.815 246.53 415.588 246.05 415.135C245.583 414.668 245.35 414.001 245.35 413.135V402.995H247.77ZM250.69 405.795V407.475H243.61V405.895L245.53 405.795H250.69ZM256.859 405.555C258.446 405.555 259.586 405.835 260.279 406.395C260.972 406.941 261.326 407.755 261.339 408.835C261.352 409.728 261.139 410.408 260.699 410.875C260.272 411.328 259.559 411.555 258.559 411.555H252.959V410.055H257.899C258.352 410.055 258.639 409.935 258.759 409.695C258.892 409.455 258.959 409.161 258.959 408.815C258.946 408.268 258.786 407.888 258.479 407.675C258.186 407.461 257.679 407.355 256.959 407.355C256.332 407.355 255.846 407.441 255.499 407.615C255.152 407.788 254.906 408.101 254.759 408.555C254.626 409.008 254.559 409.661 254.559 410.515C254.559 411.421 254.646 412.121 254.819 412.615C254.992 413.108 255.279 413.448 255.679 413.635C256.079 413.808 256.612 413.895 257.279 413.895C257.772 413.895 258.339 413.875 258.979 413.835C259.632 413.795 260.259 413.741 260.859 413.675L261.099 415.215C260.739 415.361 260.326 415.481 259.859 415.575C259.392 415.668 258.906 415.735 258.399 415.775C257.906 415.828 257.439 415.855 256.999 415.855C255.799 415.855 254.832 415.681 254.099 415.335C253.379 414.975 252.852 414.415 252.519 413.655C252.199 412.895 252.039 411.915 252.039 410.715C252.039 409.421 252.199 408.401 252.519 407.655C252.852 406.895 253.372 406.355 254.079 406.035C254.799 405.715 255.726 405.555 256.859 405.555ZM272.595 405.795L269.675 410.575L272.835 415.615H270.335L267.295 410.575L270.095 405.795H272.595ZM265.175 405.795L267.975 410.575L264.975 415.615H262.435L265.595 410.575L262.675 405.795H265.175ZM268.995 409.715V411.335H266.315V409.715H268.995ZM277.75 402.995V412.655C277.75 413.068 277.837 413.361 278.01 413.535C278.197 413.708 278.51 413.795 278.95 413.795H280.31L280.57 415.495C280.344 415.561 280.07 415.621 279.75 415.675C279.43 415.728 279.117 415.761 278.81 415.775C278.504 415.801 278.244 415.815 278.03 415.815C277.177 415.815 276.51 415.588 276.03 415.135C275.564 414.668 275.33 414.001 275.33 413.135V402.995H277.75ZM280.67 405.795V407.475H273.59V405.895L275.51 405.795H280.67Z"
                fill="#80858B"
              />
            </svg>
          </div>
        )} 
        {favoriteMoviesFullList && favoriteMoviesFullList.length > 20 ? (
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
        ) : null}
      </div>
    </>
  )
};
