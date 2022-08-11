import { useState } from "react";
import { Link } from "react-router-dom";
import { AppPages } from "../../../types";
import { FormButton } from "../../../ui/formButton/FormButton";
import styles from "./ResetPassword.module.css";

type ResetPasswordProps = {
  className?: string;
  handleClick: (email: string) => void;
};

export const ResetPassword: React.FC<ResetPasswordProps> = ({
  handleClick,
  className = "",
}) => {
  const [email, setEmail] = useState("");

  return (
    <form className={`${styles.form} ${className}`}>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
      </label>
      <FormButton
        className={styles.button}
        onClick={(e) => {e.preventDefault(); handleClick(email)}}
      >
        Reset
      </FormButton>
    </form>
  );
};
