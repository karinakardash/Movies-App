import { useNavigate } from "react-router-dom";
import styles from "./Searchbar.module.css";

type SearchbarProps = {
  children?: React.ReactNode;
};

export const Searchbar: React.FC<SearchbarProps> = ({ }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.inputBox}>
    <input
      placeholder="Search"
      className={styles.input}
      type="text"
      onKeyDown={(e) => {
        if (e.key == "Enter") {
          navigate(`/movies/search/${e.currentTarget.value}`);
        }
      }}
    >
    </input>
    <svg role="button"
    onClick={(event) => {
      const mainFilterBar = document.querySelector(`#filterBar`);
      mainFilterBar?.classList.remove("barNone")
      event.preventDefault();
    }}
    className={styles.filterSvg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className={styles.filterPathColor} d="M5 6L19 6M10 12H19M14 18H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
<circle cx="3" cy="19" r="3" fill="#7B61FF"/>
</svg>
</div>
  );
};
