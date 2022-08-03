import styles from "./MainButton.module.css";
type MainButtonProps = {
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  role?: string;
};

export const MainButton: React.FC<MainButtonProps> = ({
  children,
  className = "",
  type,
  onClick,
  role,
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
      role={role}
    >
      {children}
    </button>
  );
};
