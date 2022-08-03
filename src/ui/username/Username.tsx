import styles from "./Username.module.css";

type UsernameProps = {
  children: string;
};

export const Username: React.FC<UsernameProps> = ({ children }) => {
  let name = children.split(" ");
  let initials = name[0].substring(0, 1).toUpperCase();
  if (name.length > 1) {
    initials += name[name.length - 1].substring(0, 1).toUpperCase();
  }

  return (
    <div className={styles.box}>
      <div className={styles.visual}>{initials}</div>
      <p className={styles.text}>{children}</p>
    </div>
  );
};
