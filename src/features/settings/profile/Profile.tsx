import { useState } from "react";
import { FormButton } from "../../../ui/formButton/FormButton";
import styles from "./Profile.module.css";

type ProfileProps = {
  className?: string;
  userName:string;
  userEmail:string;
//   handleClick: (name:string, email: string, password: string) => void;
};

export const Profile: React.FC<ProfileProps> = ({
//   handleClick,
  className = "",
  userName,
  userEmail
}) => {
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  return (
    <>
    <h2 className={styles.title}>Profile</h2>
    <div className={`${styles.form} ${className}`}>
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
    </div>
    </>
  );
};
