import { useEffect, useState } from "react";
import { actions } from "../../features/all-films/allFilmsSlice";
import { Header } from "../../features/header/Header";
import { fetchSearchContentStart, reset } from "../../features/search";
import { Password } from "../../features/settings/password/Password";
import { Profile } from "../../features/settings/profile/Profile";
import { setUserName } from "../../features/user";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { LinkButtons } from "../../types";
import { FormButton } from "../../ui/formButton/FormButton";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import styles from "./SettingsPage.module.css";
import { getAuth, updateEmail, updatePassword } from "firebase/auth";

const LINKS_LIST = Object.values(LinkButtons);

type SettingsPageProps = {};

export const SettingsPage: React.FC<SettingsPageProps> = () => {
  const [selectedLink, setSelectedLink] = useState(LinkButtons.SETTINGS);
  const [page, setPage] = useState(1);
  
  const userName = useAppSelector((state)=> state.user.name) ?? "";
  const userEmail = useAppSelector((state)=> state.user.email)?? "";

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.clearMoviesState());
  }, []);

  const handleSettingsSave = (name: string, email: string, newPassword:string) => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user)
    // if(user){
    //   updateEmail(user, email).then(() => {
    //     // Email updated!
    //     // ...
    //   }).catch((error) => {
    //     console.log(error)
    //   });
    // };

    if(user && newPassword){
      updatePassword(user, newPassword).then(() => {
        // Update successful.
      }).catch((error) => {
        // setIsPasswordError(true)
        console.log(error)
      });
    }
      dispatch(
        setUserName({
          name:name,
        })
      );
  };

  return (
    <>
      <Header
        onInput={(e) => {
          dispatch(
            fetchSearchContentStart({
              query: e.currentTarget.value,
              page: page,
            })

          );
        }}
      />
      <Sidebar
        links={LINKS_LIST}
        selectedLink={selectedLink}
        onLinkClick={setSelectedLink}
      />
      <div className={styles.wrapper}>
       <Profile nameValue={name} emailValue={email} onChangeName={(e) => setName(e.target.value)} onChangeEmail={(e) => setEmail(e.target.value)}></Profile>
       <Password newPassword={newPassword} setNewPassword={(e) => setNewPassword(e.target.value)}
 ></Password>
 {isPasswordError ? (
          <p className={styles.containerText}>Password should be at least 6 characters.</p>
        ) : null
        }
 <div className={styles.buttons}>
       <FormButton className={styles.cancel}>Cancel</FormButton>
       <FormButton className={styles.save} 
        onClick={(e) => {e.preventDefault(); handleSettingsSave(name, email, newPassword); setIsPasswordError(false)}}
        >
          Save
          </FormButton>
          </div>
      </div>
    </>
  );
};
