import { useState } from "react";
import { Link } from "react-router-dom";
import { AppPages } from "../../../../types";
import { FormButton } from "../../../../ui/formButton/FormButton";
import styles from "./RegistrationForm.module.css";

type RegistrationFormProps = {
  className?: string;
  handleClick: (email: string, password: string) => void;
};

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  handleClick,
  className = "",
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className={`${styles.form} ${className}`}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </label>
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
      <label className={styles.label}>
        Confirm password
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Confirm password"
        />
      </label>
      <FormButton
        className={styles.button}
        onClick={() => handleClick(email, password)}
      >
        Sign up
      </FormButton>
    </form>
  );
};
