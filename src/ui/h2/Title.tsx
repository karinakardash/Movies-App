import styles from "./Title.module.css";

type TitleProps = {
  children: React.ReactNode;
};
export const Title: React.FC<TitleProps> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
