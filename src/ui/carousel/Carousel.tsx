import React from "react";
import Flickity from "react-flickity-component";
import { IMovie } from "../../features/all-films/types";
import styles from "./Carousel.module.css";
import { Card } from "../card/Card";
import { buildImagePath } from "../../utils/buildImagePath";
import { Link } from "react-router-dom";
import { AppPages } from "../../types";
import { IGenre } from "../../features/genres/types";
import { returnGenres } from "../../utils/returnGenres";

type CarouselProps = {
  title: string;
  className?: string;
  items: IMovie[];
  genres: IGenre[];
};

export const Carousel: React.FC<CarouselProps> = ({ title, items, genres }) => {

  const flickityOptions = {
    accessibility: false,
    cellAlign: "left",
    prevNextButtons: true,
    pageDots: false,
  };

  return (
    <section className={styles.carousel}>
      <div className={styles.heading}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <Flickity
        className={styles.slider}
        options={flickityOptions}
      >
        {items &&
          items.map((film) => {
            return (
              <Link
                to={`${AppPages.FILM_PAGE}/${film.id}`}
                key={film.id}
                className={styles.cardBox}
              >
                <Card
                  vote_average={film.vote_average}
                  id={film.id}
                  image={buildImagePath(film.poster_path, "w780")}
                  type={returnGenres(film.genre_ids, genres)}
                  title={film.title}
                />
              </Link>
            );
          })}
      </Flickity>
    </section>
  );
};
