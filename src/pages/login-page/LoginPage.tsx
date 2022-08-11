import { Link, useNavigate } from "react-router-dom";
import { LoginForm } from "../../features/auth/login/LoginForm";
import { AppPages } from "../../types";
import styles from "./LoginPage.module.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { setUser } from "../../features/user";
import { useAppDispatch } from "../../hooks";

type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isSignInError, setIsSignInError] = useState(false);
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate(AppPages.HOME);
      })
      .catch((error) => {
        setIsSignInError(true);
      });
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Sign in</h2>
        <LoginForm handleClick={handleLogin}></LoginForm>
        {isSignInError ? (
          <p className={styles.containerText}>Email or password is wrong. Please, try again.</p>
        ) : null
        }
        <p className={styles.text}>
          Don’t have an account?{" "}
          <Link className={styles.link} to={AppPages.REGISTRATION}>
            {" "}
            Sign Up{" "}
          </Link>
        </p>
      </div>
    </section>
  );
};
