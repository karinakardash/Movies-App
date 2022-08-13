import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppPages } from "../../../types";
import { FormButton } from "../../../ui/formButton/FormButton";
import styles from "./NewPassword.module.css";

type NewPasswordProps = {
  className?: string;
  handleClick: (password: string) => void;
};

export const NewPassword: React.FC<NewPasswordProps> = ({
  handleClick,
  className = "",
}) => {
  const [password, setPassword] = useState("");

  return (
    <form className={`${styles.form} ${className}`}>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
      </label>
      <label className={styles.label}>
        Confirm password
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Confirm your password"
        />
      </label>
      <FormButton
        className={styles.button}
        onClick={(e) => {e.preventDefault(); handleClick(password)}}
      >
        Set password
      </FormButton>
    </form>
  );
};
