import { ServerStreamFileResponseOptionsWithError } from "http2";
import { useState } from "react";
import { FormButton } from "../../../ui/formButton/FormButton";
import styles from "./ColorMode.module.css";

type ColorModeProps = {
  className?: string;
  thema:string;
  setThema: (e:any )=>void;
  checked:boolean;
};

export const ColorMode: React.FC<ColorModeProps> = ({
  className = "",
  thema,
  setThema,
  checked
}) => {

  return (
    <>
    <h2 className={styles.title}>Color mode</h2>
    <div className={`${styles.form} ${className}`}>

      <div className={styles.item}>
        <p className={styles.label}>{thema}</p>
        <p className={styles.text}> Use {thema} thema</p>
      </div>

      <div className={styles.switchBox}>
            <label className={styles.switch}>
               <input type="checkbox" className={styles.switchInput} onChange={setThema} checked={checked}></input>
               <span className={styles.switchSlider}></span>
            </label>
         </div> 
    </div>
    </>
  );
};
