import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { FavoritesPage } from "./pages/favorites-page/FavoritesPage";
import { HomePage } from "./pages/home-page/HomePage";
import { LoginPage } from "./pages/login-page/LoginPage";
import { NewPasswordPage } from "./pages/new-password-page/NewPasswordPage";
import { RegistrationPage } from "./pages/registration-page/RegistrationPage";
import { ResetPasswordPage } from "./pages/reset-page/ResetPasswordPage";
import { SelectedFilmPage } from "./pages/selected-film-page/SelectedFilmPage";
import { TrendPage } from "./pages/trend-page/TrendPage";
import { AppPages } from "./types";

function App() {
  return (
    <div className="App">
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
      </Routes>
    </div>
  );
}

export default App;
