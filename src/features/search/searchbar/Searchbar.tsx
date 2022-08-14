import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import styles from "./Searchbar.module.css";

type SearchbarProps = {
  children?: React.ReactNode;
  // onInput: (event: React.KeyboardEvent <HTMLInputElement>) => void;
};

export const Searchbar: React.FC<SearchbarProps> = ({ }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <input
      placeholder="Search"
      className={styles.input}
      type="text"
      // onKeyDown={onInput}
      onKeyDown={(e) => {
        if (e.key == "Enter") {
          // dispatch(
          //   fetchSearchContentStart({
          //     query: e.currentTarget.value,
          //     page: 1,
          //   })
          // );
          navigate(`/movies/search/${e.currentTarget.value}`);
        }
      }}
    ></input>
  );
};
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

function fetchSearchContentStart(arg0: { query: string; page: any; }): any {
  throw new Error("Function not implemented.");
}

