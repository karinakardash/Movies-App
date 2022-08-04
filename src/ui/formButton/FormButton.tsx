import styles from "./FormButton.module.css";
type FormButtonProps = {
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  role?: string;
};

export const FormButton: React.FC<FormButtonProps> = ({
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
