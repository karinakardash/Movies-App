import { ServerStreamFileResponseOptionsWithError } from "http2";
import { useState } from "react";
import { FormButton } from "../../../ui/formButton/FormButton";
import styles from "./Password.module.css";

type PasswordProps = {
  className?: string;
  newPassword: string
  setNewPassword: (e:any )=>void;
};

export const Password: React.FC<PasswordProps> = ({
  className = "",
  newPassword,
  setNewPassword
}) => {

  return (
    <>
    <h2 className={styles.title}>Password</h2>
    <div className={`${styles.form} ${className}`}>
      <label className={styles.label}>
        New password
        <input
          className={styles.input}
          type="password"
          value={newPassword}
          onChange={setNewPassword}
          placeholder="New password"
        />
      </label>
      <label className={styles.label}>
        Confirm password
        <input
          className={styles.input}
          type="password"
          value={newPassword}
          onChange={setNewPassword}
          placeholder="Confirm password"
        />
      </label>
    </div>
    </>
  );
};
