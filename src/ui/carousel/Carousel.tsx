import React, { Component } from "react";
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
  let flkty = null;

  const flickityOptions = {
    accessibility: false,
    //freeScroll: true,
    //contain: true,
    cellAlign: "left",
    prevNextButtons: true,
    pageDots: false,
    // freeScrollFriction: 0.2,
    // selectedAttraction: 0.01,
    // friction: 0.15,
    // resize: true,
  };

  return (
    <section className={styles.carousel}>
      <div className={styles.heading}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      {/* <div className={styles.wrapper}> */}
      <Flickity
        className={styles.slider}
        options={flickityOptions}
        flickityRef={(ref) => (flkty = ref)}
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
                  id={film.id}
                  image={buildImagePath(film.poster_path, "w780")}
                  type={returnGenres(film.genre_ids, genres)}
                  title={film.title}
                />
              </Link>
            );
          })}
      </Flickity>
      {/* </div> */}
    </section>
  );
};
