import { useState } from "react";
import { FormButton } from "../../../ui/formButton/FormButton";
import styles from "./Password.module.css";

type PasswordProps = {
  className?: string;
//   handleClick: (name:string, email: string, password: string) => void;
};

export const Password: React.FC<PasswordProps> = ({
//   handleClick,
  className = "",
}) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <>
    <h2 className={styles.title}>Password</h2>
    <div className={`${styles.form} ${className}`}>
    <div className={styles.item} >
    <label className={styles.label}>
        Password
        <input
          className={styles.input}
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Your password"
        />
      </label>
      </div>
      <div className={styles.item} >
      <label className={styles.label}>
        New password
        <input
          className={styles.input}
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New password"
        />
      </label>
      <label className={styles.label}>
        Confirm password
        <input
          className={styles.input}
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Confirm password"
        />
      </label>
      </div>
    </div>
    </>
  );
};
