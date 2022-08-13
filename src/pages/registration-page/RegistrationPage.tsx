import { Link, useNavigate } from "react-router-dom";
import { RegistrationForm } from "../../features/auth/registration/RegistrationForm";
import { AppPages } from "../../types";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import styles from "./RegistrationPage.module.css";
import { useAppDispatch } from "../../hooks";
import { setUser, setUserName } from "../../features/user";

type RegistrationPageProprs = {};

export const RegistrationPage: React.FC<RegistrationPageProprs> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleRegistration = (name: string, email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword (auth, email, password)
    .then(({ user }) => {
      updateProfile(user, {
          displayName: name,
      })
      .then(() => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            name:user.displayName,
          })     
        );
      })
      .then(() => {
        navigate(AppPages.LOGIN);
    })
  })
  }
  return (
    <section className={styles.wrapper}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Sign up</h2>
        <RegistrationForm
          handleClick={handleRegistration}
        ></RegistrationForm>
        <p className={styles.text}>
          Already have an account?{" "}
          <Link className={styles.link} to={AppPages.LOGIN}>
            {" "}
            Sign In{" "}
          </Link>
        </p>
      </div>
    </section>
  );
};
