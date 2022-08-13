import { Link } from "react-router-dom";
import styles from "./LinkMenu.module.css";

type LinkMenuProps = {
  selected: boolean;
  onClick: () => void;
  href?: string;
  children: string;
  icon: React.ReactNode;
};

export const LinkMenu: React.FC<LinkMenuProps> = ({
  selected,
  children,
  icon,
  onClick,
}) => {
  return (
    <li className={selected ? styles.liActive : styles.li} onClick={onClick}>
      {icon}
      <Link to={`/${children.toLowerCase()}`}>{children}</Link>
    </li>
  );
};
