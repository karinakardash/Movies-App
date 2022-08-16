import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { FormButton } from "../../../ui/formButton/FormButton";
import { returnGenresId } from "../../../utils/returnGenres";
import { fetchMovieGenresStart } from "../../genres";
import styles from "./filterBar.module.css";

type FilterBarProps = {
  className?: string;
};

export const FilterBar: React.FC<FilterBarProps> = ({
  className = "",
}) => {

    const [yearsFrom, setYearsFrom] = useState("");
    const [yearsTo, setYearsTo] = useState("");
    const [ratingFrom, setRatingFrom] = useState("");
    const [ratingTo, setRatingTo] = useState("");
    const [sort, setSort] = useState("rating");

    const allgenres = useAppSelector((state) => state.genres.genres);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      dispatch(fetchMovieGenresStart());
    }, []);
    const genresList = [...document.querySelectorAll(`.${styles.genre}`)].map((item) => item?.textContent?.slice(0, -1)) ?? [];
    const genres = returnGenresId(genresList, allgenres).join(",");

    function deleteGenre(element: any) {
      if (element.target.innerText === "x" ) {
          let genreItem = element.target.parentElement;
          genreItem.remove();
      }
  };
    const listUl = document.querySelector(`#ulGenres`);
    listUl?.addEventListener('click', deleteGenre);

  return (
    <div className={`${styles.formContainer} barNone`} id="filterBar">
      <div className={styles.header}>
      <h2 className={styles.title}>Filters</h2>
      <svg 
      className={styles.cross}
      role="button"
      onClick={(event) => {
      const mainFilterBar = document.querySelector(`#filterBar`);
      mainFilterBar?.classList.add("barNone")
      event.preventDefault();
    }}

       width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M17.6569 16.2429L13.4142 12.0002L17.6569 7.75759C18.0472 7.36727 18.0472 6.7337 17.6569 6.34338C17.2665 5.95305 16.633 5.95305 16.2426 6.34338L12 10.586L7.75736 6.34338C7.36704 5.95305 6.73347 5.95305 6.34315 6.34338C5.95282 6.7337 5.95282 7.36727 6.34315 7.75759L10.5858 12.0002L6.34315 16.2429C5.95212 16.6339 5.95282 17.2668 6.34315 17.6571C6.73347 18.0474 7.36633 18.0481 7.75736 17.6571L12 13.4144L16.2426 17.6571C16.6337 18.0481 17.2665 18.0474 17.6569 17.6571C18.0472 17.2668 18.0479 16.6339 17.6569 16.2429Z" fill="#AFB2B6"/>
    </svg>
      </div>
    <form className={`${styles.form} ${className}`}>
        <h3 className={styles.subtitle}>Sort by</h3>
        <div className={`${styles.item} ${styles.radioGroup}`}>
	<div className={styles.radioGroupItem}>
    <label>Rating
		<input id="radio1" type="radio" name="radio" value="rating" onChange={(e) => setSort(e.target.value)} checked={sort === "rating"}/>
		</label>
	</div>
    <div className={styles.radioGroupItem}>
    <label>Year
		<input id="radio2" type="radio" name="radio" value="year" onChange={(e) => setSort(e.target.value)} checked={sort === "year"}/>
    </label>
	</div>
</div>
<h3 className={styles.subtitle}>Genre</h3>
<div className={styles.selectGenres}>
<ul id='ulGenres'>
    {allgenres.map((genre) => {
        return (
            <li key={genre.id} value={genre.name} className={styles.genre}>{genre.name}
            <span className={styles.cross}>x</span></li>
        )
    })}
</ul>
</div>

<h3 className={styles.subtitle}>Years</h3>
<div className={styles.years}>
<input
          className={styles.input}
          type="text"
          value={yearsFrom}
          onChange={(e) => setYearsFrom(e.target.value)}
          placeholder="From"
        />
         <input
          className={styles.input}
          type="text"
          value={yearsTo}
          onChange={(e) => setYearsTo(e.target.value)}
          placeholder="To"
        />
</div>

<h3 className={styles.subtitle}>Rating</h3>
<div className={styles.years}>
<input
          className={styles.input}
          type="text"
          value={ratingFrom}
          onChange={(e) => setRatingFrom(e.target.value)}
          placeholder="From"
        />
         <input
          className={styles.input}
          type="text"
          value={ratingTo}
          onChange={(e) => setRatingTo(e.target.value)}
          placeholder="To"
        />
</div>
<div className={styles.buttons}>
       <FormButton className={styles.cancel} onClick={(e) => {e.preventDefault();
             setRatingFrom("");
             setRatingTo("");
             setYearsFrom("");
             setYearsTo("")
             setSort("rating");
             dispatch(fetchMovieGenresStart());
            }}
        >Clear filter</FormButton>
       <FormButton className={styles.save} 
        onClick={(e) => {e.preventDefault();
          navigate(`/movies/filter/sort_by=${sort}&page=1&release_date.gte=${yearsFrom}&release_date.lte=${yearsTo}&vote_average.gte=${ratingFrom}&vote_average.lte=${ratingTo}&with_genres=${genres}`)
        }}
        >
          Show results
          </FormButton>
          </div>
    </form>
    </div>
  );
};
