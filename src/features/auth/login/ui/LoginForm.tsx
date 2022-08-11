import { useState } from "react";
import { Link } from "react-router-dom";
import { AppPages } from "../../../../types";
import { FormButton } from "../../../../ui/formButton/FormButton";
import styles from "./LoginForm.module.css";

type LoginFormProps = {
  className?: string;
  handleClick: (email: string, password: string) => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({
  handleClick,
  className = "",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Link to={AppPages.HOME} className={styles.forgotPassword}>
        Forgot password?
      </Link>
      <FormButton
        className={styles.button}
        onClick={(e) => {e.preventDefault(); handleClick(email, password)}}
      >
        Log in
      </FormButton>
    </form>
  );
};
