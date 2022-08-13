import styles from "./Burger.module.css";
import { Menu } from "../menu/Menu";
import { useState } from "react";
import { LinkButtons } from "../../../types";

const LINKS_LIST = Object.values(LinkButtons);

type BurgerProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

export const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(LinkButtons.HOME);

  return (
    <div
      className={isOpen ? `${styles.burgerIsOpen}` : `${styles.burger}`}
      onClick={() => {
        setIsOpen(!isOpen);
        onClick();
      }}
    >
      <div className={styles.line}></div>
      <div className={isOpen ? `${styles.menu}` : `${styles.menuNone}`}>
        <Menu links={LINKS_LIST}
        selectedLink={selectedLink}
        onLinkClick={setSelectedLink}></Menu>
      </div>
    </div>
  );
};