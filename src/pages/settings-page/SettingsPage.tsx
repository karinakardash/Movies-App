import { useContext, useEffect, useState } from "react";
import { actions } from "../../features/all-films/allFilmsSlice";
import { Header } from "../../features/header/Header";
import { Password } from "../../features/settings/password/Password";
import { Profile } from "../../features/settings/profile/Profile";
import { setUser } from "../../features/user";
import { useAppSelector, useAppDispatch, useAuth } from "../../hooks";
import { LinkButtons } from "../../types";
import { FormButton } from "../../ui/formButton/FormButton";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import styles from "./SettingsPage.module.css";
import { getAuth, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { ColorMode } from "../../features/settings/color-mode/ColorMode";
import { AppContext } from "../../AppContext";
import { FilterBar } from "../../features/filters/filterBar/filterBar";

const LINKS_LIST = Object.values(LinkButtons);

type SettingsPageProps = {};

export const SettingsPage: React.FC<SettingsPageProps> = () => {
  const [selectedLink, setSelectedLink] = useState(LinkButtons.SETTINGS);
  const appRef = useContext(AppContext);
  const userName = useAppSelector((state)=> state.user.name) ?? "";
  const userEmail = useAppSelector((state)=> state.user.email)?? "";
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [thema, setThema] = useState("Light");
  const [checked, setChecked] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  
  useEffect(() => {
    dispatch(actions.clearMoviesState());
  }, []);

  const handleSettingsSave = (name: string, email: string, newPassword:string) => {
    const auth = getAuth();
    const user = auth.currentUser;
    if(isAuth && user){
      updateEmail(user, email).then(() => {
      console.log("Email updated")
      }).catch((error) => {
        console.log(error)
      });

      updateProfile(user, {
        displayName:name
      }).then(() => {
        dispatch(
          setUser({
            email: user.email,
            name:user.displayName
          }))
        console.log("Name updated")
      }).catch((error) => {
        console.log(error)
      });
    };

    if(user && newPassword && isAuth){
      updatePassword(user, newPassword).then(() => {
        console.log("Password updated")
      }).catch((error) => {
        console.log(error)
      });
    }
  };

  return (
    <>
      <Header/>
      <Sidebar
        links={LINKS_LIST}
        selectedLink={selectedLink}
        onLinkClick={setSelectedLink}
      />
      <FilterBar/>
      <div className={styles.wrapper}>
        <div className={styles.settingsBox}>
        {isAuth ? (
          <>
       <Profile nameValue={name} emailValue={email} onChangeName={(e) => setName(e.target.value)} onChangeEmail={(e) => setEmail(e.target.value)}></Profile>
       <Password newPassword={newPassword} setNewPassword={(e) => setNewPassword(e.target.value)}
 ></Password> </>) : null}

 <ColorMode checked={checked} thema={thema} setThema={(e) => {
  const style = appRef?.current!.style!;
  setChecked(!checked);
  if (e.target.checked) {
    style.setProperty("--background-color", "#000000");
    style.setProperty("--primary-text-color", "#ffffff");
    style.setProperty("--input-background-color", "#323537");
    style.setProperty("--form-background-color", "#242426");
    style.setProperty("--input-border-color", "#323537");
    style.setProperty("--button-background-color", "#323537");
    style.setProperty("--button-text-color", "#ffffff");
    style.setProperty("--form-border-color", "#242426");
    setThema("Dark")
   } else {
    style.removeProperty("--background-color");
    style.removeProperty("--primary-text-color");
    style.removeProperty("--input-background-color");
    style.removeProperty("--form-background-color");
    style.removeProperty("--input-border-color");
    style.removeProperty("--button-background-color");
    style.removeProperty("--button-text-color");
    style.removeProperty("--form-border-color");
    setThema("Light")
  }}
}
></ColorMode>
 {isPasswordError ? (
          <p className={styles.containerText}>Password should be at least 6 characters.</p>
        ) : null
        }
 <div className={styles.buttons}>
       <FormButton className={styles.cancel}
        onClick={(e) => {e.preventDefault(); setName(userName); setEmail(userEmail); setThema("Light"); setNewPassword(""); setChecked(false); 
        const style = appRef?.current!.style!;
        style.removeProperty("--background-color");
        style.removeProperty("--primary-text-color");
        style.removeProperty("--input-background-color");
        style.removeProperty("--form-background-color");
        style.removeProperty("--input-border-color");
        style.removeProperty("--button-background-color");
        style.removeProperty("--button-text-color");
        style.removeProperty("--form-border-color");
        }}
        >
          Cancel</FormButton>
       <FormButton className={styles.save} 
        onClick={(e) => {e.preventDefault(); if(isAuth) {handleSettingsSave(name, email, newPassword)}; setIsPasswordError(false)}}
        >
          Save
          </FormButton>
          </div>
          </div>
      </div>
    </>
  );
};
