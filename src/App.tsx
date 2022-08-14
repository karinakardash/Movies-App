import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AppContext } from "./AppContext";
import { FavoritesPage } from "./pages/favorites-page/FavoritesPage";
import { HomePage } from "./pages/home-page/HomePage";
import { LoginPage } from "./pages/login-page/LoginPage";
import { NewPasswordPage } from "./pages/new-password-page/NewPasswordPage";
import { RegistrationPage } from "./pages/registration-page/RegistrationPage";
import { ResetPasswordPage } from "./pages/reset-page/ResetPasswordPage";
import { SearchPage } from "./pages/search-page/SearchPage";
import { SelectedFilmPage } from "./pages/selected-film-page/SelectedFilmPage";
import { SettingsPage } from "./pages/settings-page/SettingsPage";
import { TrendPage } from "./pages/trend-page/TrendPage";
import { AppPages } from "./types";

function App() {
  const appRef = React.createRef<HTMLDivElement>();
  return (
    <div className="App" ref={appRef}>
       <AppContext.Provider value={appRef}>
      <Routes>
        <Route path={AppPages.HOME} element={<HomePage></HomePage>}></Route>
        <Route path={AppPages.TRENDS} element={<TrendPage></TrendPage>}></Route>
        <Route
          path={`${AppPages.FILM_PAGE}/:id`}
          element={<SelectedFilmPage />}
        ></Route>
        <Route path={AppPages.FAVORITES} element={<FavoritesPage />}></Route>
        <Route path={AppPages.LOGIN} element={<LoginPage />}></Route>
        <Route
          path={AppPages.REGISTRATION}
          element={<RegistrationPage />}
        ></Route>
         <Route
          path={AppPages.RESET_PASSWORD}
          element={<ResetPasswordPage />}
        ></Route>
          <Route
          path={AppPages.NEW_PASSWORD}
          element={<NewPasswordPage />}
        ></Route>
          <Route
          path={AppPages.SETTINGS}
          element={<SettingsPage />}
        ></Route>
         <Route
          path={AppPages.SEARCH}
          element={<SearchPage />}
        ></Route>
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
