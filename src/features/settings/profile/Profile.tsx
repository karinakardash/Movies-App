import { useState } from "react";
import { FormButton } from "../../../ui/formButton/FormButton";
import styles from "./Profile.module.css";

type ProfileProps = {
  className?: string;
  // userName:string;
  // userEmail:string;
  onChangeName:(e:any) => void;
  onChangeEmail:(e:any) => void;
  nameValue: string;
  emailValue:string;

//   handleClick: (name:string, email: string, password: string) => void;
};

export const Profile: React.FC<ProfileProps> = ({
//   handleClick,
  className = "",
  // userName,
  // userEmail,
  nameValue,
  emailValue,
  onChangeEmail,
  onChangeName
}) => {
  // const [name, setName] = useState(userName);
  // const [email, setEmail] = useState(userEmail);

  return (
    <>
    <h2 className={styles.title}>Profile</h2>
    <div className={`${styles.form} ${className}`}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          value={nameValue}
          onChange={onChangeName}
          placeholder="Your name"
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          value={emailValue}
          onChange={onChangeEmail}
          placeholder="Your email"
        />
      </label>
    </div>
    </>
  );
};
