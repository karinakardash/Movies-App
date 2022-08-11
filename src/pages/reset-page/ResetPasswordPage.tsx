import { getAuth, sendPasswordResetEmail  } from "firebase/auth";
import styles from "./ResetPasswordPage.module.css";
import { ResetPassword } from "../../features/auth/reset/ResetPassword";
import { useState } from "react";

type ResetPasswordPageProps = {};

export const ResetPasswordPage: React.FC<ResetPasswordPageProps> = () => {
  const [notice, setNotice] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [isResetError, setResetError] = useState(false);
  const handleResetPassword = (email: string) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        setSelectedEmail(email);
        setNotice(true);
        setResetError(false);
      })
      .catch((error) => {
        setResetError(true);
      });
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Reset password</h2>
{notice ? (
          <p className={styles.notice}>You will receive an email {selectedEmail} with a link to reset your password!</p>
        ) : null}
       < ResetPassword handleClick={handleResetPassword} / >
       {isResetError ? (
          <p className={styles.containerText}>User with this email does not exist. Enter correct email.</p>
        ) : null
        }
      </div>
    </section>
  );
};
