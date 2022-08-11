import { useEffect, useState } from "react";
import { actions } from "../../features/all-films/allFilmsSlice";
import { Header } from "../../features/header/Header";
import { fetchSearchContentStart, reset } from "../../features/search";
import { Password } from "../../features/settings/password/Password";
import { Profile } from "../../features/settings/profile/Profile";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { LinkButtons } from "../../types";
import { FormButton } from "../../ui/formButton/FormButton";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import styles from "./SettingsPage.module.css";

const LINKS_LIST = Object.values(LinkButtons);

type SettingsPageProps = {};

export const SettingsPage: React.FC<SettingsPageProps> = () => {
  const [selectedLink, setSelectedLink] = useState(LinkButtons.HOME);
  const [page, setPage] = useState(1);
  const userName = useAppSelector((state)=> state.user.name) ?? "";
  const userEmail = useAppSelector((state)=> state.user.email)?? "";

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.clearMoviesState());
  }, []);

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
       <Profile userName={userName} userEmail={userEmail}></Profile>
       <Password></Password>
       <FormButton>Cancel</FormButton>
       <FormButton>Save</FormButton>
      </div>
    </>
  );
};
