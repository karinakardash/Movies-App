import { Link } from "react-router-dom";
import { LoginForm } from "../../features/auth/login/ui/LoginForm";
import { RegistrationForm } from "../../features/auth/registration/ui/RegistrationForm";
import { AppPages } from "../../types";
import styles from "./RegistrationPage.module.css";

type RegistrationPageProps = {};

export const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Sign up</h2>
        <RegistrationForm
          handleClick={() => console.log("handle")}
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
