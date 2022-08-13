import { useLocation, useNavigate } from "react-router-dom";
import { RegistrationForm } from "../../features/auth/registration/RegistrationForm";
import { AppPages } from "../../types";
import { getAuth, confirmPasswordReset  } from "firebase/auth";
import styles from "./NewPasswordPage.module.css";
import { useAppDispatch } from "../../hooks";
import { setUser, setUserName } from "../../features/user";
import { ResetPassword } from "../../features/auth/reset/ResetPassword";
import { useState } from "react";
import { NewPassword } from "../../features/auth/new-password/NewPassword";

type NewPasswordPageProps = {};

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const NewPasswordPage: React.FC<NewPasswordPageProps> = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const handleNewPassword = (newPassword: string) => {
  const auth = getAuth();
  const oobCode = query.get('oobCode');
  if (oobCode){
    confirmPasswordReset(auth, oobCode, newPassword)
      .then(() => {
        navigate(AppPages.LOGIN)
      })
  }};

  return (
    <section className={styles.wrapper}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>New password</h2>
       < NewPassword handleClick={handleNewPassword} / >
      </div>
    </section>
  );
};
