import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { FormButton } from "../../../ui/formButton/FormButton";
import { fetchMovieGenresStart } from "../../genres";
import { actions } from "../filtersSlice";
import styles from "./filterBar.module.css";

type FilterBarProps = {
  className?: string;
//   yearsFrom: string;
//   yearsTo:string;
//   setYearsFrom: (e:any) => void;
//   setYearsTo: (e:any) => void;
// ratingFrom:string;
// ratingTo:string;
// setRatingFrom: (e:any) => void;
// setRatingTo: (e:any) => void;
};

export const FilterBar: React.FC<FilterBarProps> = ({
  className = "",
//   yearsFrom,
//   yearsTo,
//   setYearsFrom,
//   setYearsTo,
// ratingFrom,
// ratingTo,
// setRatingFrom,
// setRatingTo

}) => {

    const allgenres = useAppSelector((state) => state.genres.genres);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(fetchMovieGenresStart());
    }, []);

  return (
    <div className={styles.formContainer}>
    <h2 className={styles.title}>Filters</h2>
    <form className={`${styles.form} ${className}`}>
        <h3 className={styles.subtitle}>Sort by</h3>
        <div className={`${styles.item} ${styles.radioGroup}`}>
	<div className={styles.radioGroupItem}>
    <label>Rating
		<input id="radio1" type="radio" name="radio" value="rating" checked />
		</label>
	</div>
    <div className={styles.radioGroupItem}>
    <label>Year
		<input id="radio2" type="radio" name="radio" value="year"/>
		</label>
	</div>
</div>
<h3 className={styles.subtitle}>Genre</h3>
<div className={styles.selectGenres}>
<ul>
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
        //   value={yearsFrom}
        //   onChange={setYearsFrom}
          placeholder="From"
        />
         <input
          className={styles.input}
          type="text"
        //   value={yearsTo}
        //   onChange={setYearsTo}
          placeholder="To"
        />
</div>

<h3 className={styles.subtitle}>Rating</h3>
<div className={styles.years}>
<input
          className={styles.input}
          type="text"
        //   value={ratingFrom}
        //   onChange={setRatingFrom}
          placeholder="From"
        />
         <input
          className={styles.input}
          type="text"
        //   value={ratingTo}
        //   onChange={setRatingTo}
          placeholder="To"
        />
</div>
<div className={styles.buttons}>
       <FormButton className={styles.cancel}>Clear filter</FormButton>
       <FormButton className={styles.save} 
        // onClick={(e) => {e.preventDefault(); handleSettingsSave(name, email, newPassword); setIsPasswordError(false)}}
        >
          Show results
          </FormButton>
          </div>

    </form>
    </div>
  );
};
