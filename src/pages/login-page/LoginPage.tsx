import { Link } from "react-router-dom";
import { LoginForm } from "../../features/auth/login/ui/LoginForm";
import { AppPages } from "../../types";
import styles from "./LoginPage.module.css";

type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Sign in</h2>
        <LoginForm handleClick={() => console.log("handle")}></LoginForm>
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
