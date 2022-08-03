import { useAppDispatch, useAppSelector } from "../../../hooks";
import { actions } from "../searchSlice";
import styles from "./Searchbar.module.css";

type SearchbarProps = {
  children?: React.ReactNode;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Searchbar: React.FC<SearchbarProps> = ({ onInput }) => {
  return (
    <input
      placeholder="Search"
      className={styles.input}
      type="text"
      onInput={onInput}
    ></input>
  );
};
