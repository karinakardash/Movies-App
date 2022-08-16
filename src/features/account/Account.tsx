import { useState } from "react";
import { useAppDispatch, useAppSelector, useAuth } from "../../hooks";
import { SignIn } from "../../ui/sign-in/SignIn";
import { Username } from "../../ui/username/Username";
import { removeUser } from "../user";
import styles from "./Account.module.css";

type AccountProps = {
};

export const Account: React.FC<AccountProps> = ({ }) => {
  const userName = useAppSelector((state)=> state.user.name) ?? "";
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  
  return isAuth ? (
    <div className={styles.userNameAccount}>
        <Username children={userName}></Username>
        <svg  className={styles.svg} role="button"  onClick={() => dispatch(removeUser())} width="24" height="24" viewBox="0 0 24 24">
    <path fill="#ffffff" d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />
</svg>
</div>) : (
    <SignIn/>
  );
};
