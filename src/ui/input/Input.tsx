import styles from "../inputs/Input.module.css";

type InputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type: string;
  label: string;
  className?: string;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  type,
}) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
